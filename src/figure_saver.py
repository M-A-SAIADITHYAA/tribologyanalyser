"""Identify line graphs in a PDF and save pages for WebPlotDigitizer review."""

from __future__ import annotations

import json
import os
import re
import sys
import time
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
from google import genai
from google.genai import types

try:  # Keep the core extractor importable before optional local rendering is installed.
    from pdf2image import convert_from_path
except ModuleNotFoundError:  # pragma: no cover - depends on the local environment
    convert_from_path = None

load_dotenv()
MODEL = "gemini-3.6-flash"
PROJECT_ROOT = Path(__file__).resolve().parents[1]
FIGURES_DIR = PROJECT_ROOT / "papers" / "figures"
LOGS_DIR = PROJECT_ROOT / "logs"

PAGE_CLASSIFICATION_PROMPT = """
Analyse this tribology research paper. For each page tell me:
1. Page number
2. Page type: table / bar_chart / line_graph / mixed / text_only / irrelevant.
   Use mixed only when a line graph appears alongside another relevant element.
3. If it contains a line graph or complex figure: extract the figure context:
   - Figure caption (exact text)
   - X-axis label and units
   - Y-axis label and units
   - Number of data series and what each represents
   - Test conditions this graph shows (load, speed, material)
   - What value to extract (e.g. steady-state COF plateau)
   - WebPlotDigitizer notes (log scale? multiple overlapping lines? read at x>500m?)
4. If it contains a bar chart: note it is extractable by LLM
5. If irrelevant (SEM image, XRD, FTIR, author info): note why

Return ONLY a JSON array, for example:
[{"page": 1, "type": "text_only", "context": null},
 {"page": 4, "type": "line_graph", "context": {
   "caption": "Fig. 3...", "x_axis": "Sliding distance (m)",
   "y_axis": "Coefficient of friction", "series": ["PA6"],
   "test_conditions": "Load=50 N", "what_to_extract": "Steady-state COF",
   "webplotdigitizer_notes": "Read plateau after 500 m"}}]
"""


def _require_api_key() -> None:
    if not os.getenv("GEMINI_API_KEY"):
        raise RuntimeError("GEMINI_API_KEY is not set. Copy .env.example to .env and add a Google AI Studio key.")


_client: Any | None = None


def get_client() -> Any:
    """Return the configured current Google Gen AI client."""
    global _client
    _require_api_key()
    if _client is None:
        _client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    return _client


def upload_pdf_to_gemini(pdf_path: str | Path):
    """Upload a PDF, retrying transient upload failures three times."""
    _require_api_key()
    pdf_path = Path(pdf_path)
    for attempt in range(1, 4):
        try:
            gemini_file = get_client().files.upload(
                file=pdf_path,
                config=types.UploadFileConfig(mime_type="application/pdf"),
            )
            print(f"Uploaded {pdf_path.name} to Gemini: {gemini_file.uri}")
            return gemini_file
        except Exception as exc:  # API exceptions vary between SDK releases.
            if attempt == 3:
                raise RuntimeError(f"Could not upload {pdf_path.name} after 3 attempts") from exc
            print(f"Upload attempt {attempt} failed: {exc}. Retrying in 5 seconds.")
            time.sleep(5)


def wait_for_file_active(gemini_file: Any, timeout: int = 120):
    """Wait until a Gemini Files API object is ready for content generation."""
    started = time.monotonic()
    current = gemini_file
    while time.monotonic() - started < timeout:
        current = get_client().files.get(name=current.name)
        state = str(getattr(current, "state", "UNKNOWN"))
        state_name = state.upper().split(".")[-1]
        print(f"Gemini file status: {state_name}")
        if state_name == "ACTIVE":
            return current
        if state_name == "FAILED":
            raise RuntimeError(f"Gemini could not process uploaded file {current.name}")
        time.sleep(5)
    raise TimeoutError(f"Gemini file did not become ACTIVE within {timeout} seconds")


def delete_gemini_file(gemini_file: Any) -> None:
    """Best-effort cleanup of a file stored in the Gemini Files API."""
    if gemini_file is None:
        return
    try:
        get_client().files.delete(name=gemini_file.name)
        print(f"Deleted Gemini file: {gemini_file.name}")
    except Exception as exc:
        print(f"Warning: failed to delete Gemini file {getattr(gemini_file, 'name', '?')}: {exc}")


def _strip_json_fence(text: str) -> str:
    text = text.lstrip("\ufeff").strip()
    match = re.fullmatch(r"```(?:json)?\s*(.*?)\s*```", text, flags=re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else text


def _context_value(context: dict[str, Any], *keys: str) -> str:
    value: Any = ""
    for key in keys:
        if key in context and context[key] not in (None, ""):
            value = context[key]
            break
    if isinstance(value, list):
        return ", ".join(str(item) for item in value)
    if isinstance(value, dict):
        return json.dumps(value, ensure_ascii=False)
    return str(value)


def _write_context_file(destination: Path, paper_id: str, page: int, figure_type: str, context: dict[str, Any]) -> None:
    content = "\n".join(
        [
            f"PAPER_ID: {paper_id}",
            f"PAGE: {page}",
            f"FIGURE_TYPE: {figure_type}",
            f"CAPTION: {_context_value(context, 'caption', 'figure_caption')}",
            f"X_AXIS: {_context_value(context, 'x_axis', 'x_axis_label')}",
            f"Y_AXIS: {_context_value(context, 'y_axis', 'y_axis_label')}",
            f"SERIES: {_context_value(context, 'series', 'data_series', 'number_of_series')}",
            f"TEST_CONDITIONS: {_context_value(context, 'test_conditions', 'conditions')}",
            f"WHAT_TO_EXTRACT: {_context_value(context, 'what_to_extract', 'value_to_extract')}",
            f"WEBPLOTDIGITIZER_NOTES: {_context_value(context, 'webplotdigitizer_notes', 'digitizer_notes')}",
        ]
    )
    destination.write_text(content + "\n", encoding="utf-8")


def _classify_pages(gemini_file: Any) -> list[dict[str, Any]]:
    response = get_client().models.generate_content(
        model=MODEL,
        contents=[gemini_file, PAGE_CLASSIFICATION_PROMPT],
        config=types.GenerateContentConfig(max_output_tokens=8192),
    )
    raw = _strip_json_fence(getattr(response, "text", ""))
    try:
        classifications = json.loads(raw)
    except json.JSONDecodeError as exc:
        raise ValueError("Gemini did not return a parseable page-classification JSON array") from exc
    if not isinstance(classifications, list) or not all(isinstance(item, dict) for item in classifications):
        raise ValueError("Page classification response must be a JSON array of objects")
    return classifications


def save_relevant_figures(pdf_path: str | Path, paper_id: str, gemini_file: Any | None = None) -> dict[str, int]:
    """Classify a paper and save each line-graph/mixed page with context.

    When ``gemini_file`` is supplied by ``extractor.py`` it is reused and not
    deleted here.  The standalone CLI uploads and deletes its own temporary file.
    """
    pdf_path = Path(pdf_path)
    if not pdf_path.exists():
        raise FileNotFoundError(pdf_path)
    if convert_from_path is None:
        raise RuntimeError("pdf2image is not installed. Run `pip install -r requirements.txt` before saving figures.")
    FIGURES_DIR.mkdir(parents=True, exist_ok=True)
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    owns_file = gemini_file is None
    uploaded_file = None
    try:
        if owns_file:
            uploaded_file = upload_pdf_to_gemini(pdf_path)
            gemini_file = wait_for_file_active(uploaded_file)
        classifications = _classify_pages(gemini_file)
    except Exception:
        # Preserve a useful audit trail when an API response cannot be consumed.
        raise
    finally:
        if owns_file and uploaded_file is not None:
            # Deletion occurs after classification; image conversion does not need it.
            delete_gemini_file(uploaded_file)

    saved = bar_charts = tables = irrelevant = 0
    for item in classifications:
        page = item.get("page")
        page_type = str(item.get("type", "")).strip().lower()
        if not isinstance(page, int) or page < 1:
            print(f"Skipping malformed page classification: {item}")
            continue
        if page_type == "bar_chart":
            bar_charts += 1
        elif page_type == "table":
            tables += 1
        elif page_type == "irrelevant":
            irrelevant += 1

        # Gemini is specifically asked to label a mixed page when a line graph
        # shares a page with another figure/table, so preserve it for manual work.
        if page_type not in {"line_graph", "mixed"}:
            continue
        image_path = FIGURES_DIR / f"{paper_id}_fig_pg{page}.png"
        context_path = FIGURES_DIR / f"{paper_id}_fig_pg{page}_context.txt"
        try:
            images = convert_from_path(str(pdf_path), first_page=page, last_page=page, fmt="png")
            if not images:
                print(f"No image rendered for page {page}; skipping.")
                continue
            images[0].save(image_path, "PNG")
            context = item.get("context") if isinstance(item.get("context"), dict) else {}
            # A mixed page is still saved only because it contains a line graph.
            _write_context_file(
                context_path,
                paper_id,
                page,
                "line_graph" if page_type == "mixed" else page_type,
                context,
            )
            saved += 1
            print(f"Saved manual-digitization figure: {image_path.name}")
        except Exception as exc:
            print(f"Could not save page {page}: {exc}")

    summary = {
        "total_pages": len(classifications),
        "line_graphs_saved": saved,
        "bar_charts_found": bar_charts,
        "tables_found": tables,
        "irrelevant_pages_skipped": irrelevant,
    }
    print(
        "=== Figure Scan Summary ===\n"
        f"Total pages: {summary['total_pages']}\n"
        f"Line graphs saved: {summary['line_graphs_saved']}\n"
        f"Bar charts found: {summary['bar_charts_found']}\n"
        f"Tables found: {summary['tables_found']}\n"
        f"Irrelevant pages skipped: {summary['irrelevant_pages_skipped']}"
    )
    return summary


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: python src/figure_saver.py papers/pdfs/PAPERID.pdf PAPERID")
    save_relevant_figures(sys.argv[1], sys.argv[2])


if __name__ == "__main__":
    main()

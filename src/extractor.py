"""Gemini-native PDF extraction pipeline for PA6 tribology research papers."""

from __future__ import annotations

import csv
import io
import json
import os
import re
import sys
import time
from datetime import date
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
from google import genai
from google.genai import types
import pandas as pd

if __package__:  # Supports `python -m src.extractor`.
    from .converter import kgf_to_N, rpm_to_ms
    from .figure_saver import save_relevant_figures
    from .schema import ALL_COLUMNS, get_schema_description
    from .validator import validate_csv
else:  # Supports `python src/extractor.py`.
    from converter import kgf_to_N, rpm_to_ms
    from figure_saver import save_relevant_figures
    from schema import ALL_COLUMNS, get_schema_description
    from validator import validate_csv

load_dotenv()

# Gemini 1.5 Flash and its legacy SDK were retired.  This current model is used
# through Google's supported `google-genai` client and retains native PDF input.
MODEL = "gemini-3.6-flash"
PROJECT_ROOT = Path(__file__).resolve().parents[1]
PAPERS_DIR = PROJECT_ROOT / "papers"
PDFS_DIR = PAPERS_DIR / "pdfs"
INDEX_PATH = PAPERS_DIR / "index.csv"
RAW_LLM_DIR = PROJECT_ROOT / "data" / "raw_llm"
LOGS_DIR = PROJECT_ROOT / "logs"


def _require_api_key() -> None:
    if not os.getenv("GEMINI_API_KEY"):
        raise RuntimeError("GEMINI_API_KEY is not set. Copy .env.example to .env and add your Google AI Studio key.")


_client: Any | None = None


def get_client() -> Any:
    """Return the configured Google Gen AI client used by all API operations."""
    global _client
    _require_api_key()
    if _client is None:
        _client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    return _client


def upload_pdf_to_gemini(pdf_path: str | Path):
    """Upload a PDF to Gemini Files API with three attempts and 5-second backoff."""
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
        except Exception as exc:  # SDK exception classes differ by installed version.
            if attempt == 3:
                raise RuntimeError(f"Unable to upload {pdf_path.name} after 3 attempts") from exc
            print(f"Upload attempt {attempt}/3 failed: {exc}. Retrying in 5 seconds.")
            time.sleep(5)
    raise AssertionError("unreachable")


def wait_for_file_active(gemini_file: Any, timeout: int = 120):
    """Poll Files API until the uploaded PDF becomes ACTIVE."""
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
            raise RuntimeError(f"Gemini failed to process uploaded file {current.name}")
        time.sleep(5)
    raise TimeoutError(f"Gemini file did not become ACTIVE within {timeout} seconds")


def delete_gemini_file(gemini_file: Any) -> None:
    """Delete a Files API object, avoiding Gemini storage-limit buildup."""
    if gemini_file is None:
        return
    try:
        get_client().files.delete(name=gemini_file.name)
        print(f"Deleted Gemini file: {gemini_file.name}")
    except Exception as exc:
        print(f"Warning: could not delete Gemini file {getattr(gemini_file, 'name', '?')}: {exc}")


def _is_rate_limited(error: Exception) -> bool:
    text = f"{type(error).__name__}: {error}".lower()
    return "resourceexhausted" in text or "resource exhausted" in text or "429" in text


def _append_api_error(message: str) -> None:
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    with (LOGS_DIR / "gemini_errors.log").open("a", encoding="utf-8") as handle:
        handle.write(f"{date.today().isoformat()} {message}\n")


def safe_gemini_call(prompt_parts: list[Any], max_retries: int = 3):
    """Call Gemini safely, backing off 30/60/120 seconds on rate limits.

    ``max_retries=3`` means the initial request plus up to three retries.  Other
    exceptions are logged and return ``None`` so batch extraction can continue.
    """
    backoffs = (30, 60, 120)
    client = get_client()
    for attempt in range(max_retries + 1):
        try:
            return client.models.generate_content(
                model=MODEL,
                contents=prompt_parts,
                config=types.GenerateContentConfig(max_output_tokens=8192),
            )
        except Exception as exc:
            if _is_rate_limited(exc) and attempt < max_retries:
                delay = backoffs[min(attempt, len(backoffs) - 1)]
                print(f"Gemini rate limit (attempt {attempt + 1}); retrying in {delay} seconds.")
                time.sleep(delay)
                continue
            _append_api_error(f"Gemini call failed: {type(exc).__name__}: {exc}")
            print(f"Gemini call failed: {exc}")
            return None
    return None


CONTEXT_PROMPT = """
You are a scientific data extraction assistant. Read this entire PA6/PA66 tribology
research paper and return ONLY a clean JSON object containing the paper-wide fixed
experimental context. Extract only explicitly stated information:
- counterface material (steel, alumina, etc.)
- test geometry (pin-on-disc, block-on-ring, block-on-plate)
- disc/pin diameter in mm if stated (needed for rpm-to-m/s conversion)
- environment (dry, humid, lubricated, water)
- PA6 grade if specified
- fabrication method (injection moulded, extruded, additive manufactured, cast)
- units used for load (N or kgf), speed (m/s or rpm), and wear (mm3/Nm, mg, mg/km, mm3)
- number of experimental conditions tested
- source DOI if visible

Use exactly these JSON keys, putting null where unknown:
paper_id, counterface, test_type, environment, disc_diameter_mm, load_unit,
speed_unit, wear_unit, fabrication, pa6_grade, source_doi, n_conditions.
"""

EXTRACTION_PROMPT = """
You are a scientific data extraction assistant for a tribology ML dataset.

DOMAIN KNOWLEDGE:
- Tribology = study of friction and wear between sliding surfaces
- PA6/PA66 = polyamide (nylon) plastic composites tested against metal or polymer
- COF = coefficient of friction, dimensionless, typical range 0.05–0.7 for PA6
- Specific wear rate = mm³/(N·m), typical range 1e-7 to 1e-3 for PA6 composites
- Test types: pin-on-disc (PoD), block-on-ring (BoR), block-on-plate (BoP)
- Taguchi L9/L16/L27 = Design of Experiment tables — each row = one test condition, extract all
- COF vs sliding distance graphs: plateau region = steady-state COF (extract this value)
- Wear may be reported as: wear rate (mm³/Nm), wear volume (mm³), mass loss (mg),
  linear wear (μm), or wear per distance (mg/km) — extract whichever is present
- Merged table cells: repeat the value for every sub-row it applies to
- Fixed conditions (same load/speed/counterface for all rows): apply to every extracted row

PAPER CONTEXT:
{context}

SCHEMA (extract into these exact columns):
{schema}

EXTRACTION RULES:
1. Extract ONLY explicitly stated values — never interpolate, estimate, or guess.
2. Apply fixed conditions from context to every row.
3. For Taguchi/DOE arrays: each experimental run = one row — extract every run.
4. For bar charts: read each bar value from y-axis gridlines as precisely as possible.
5. For COF-versus-sliding-distance graphs: extract a steady-state plateau only if
   clearly readable; otherwise write SAVE_FOR_MANUAL in notes.
6. Set extraction_method: table / prose / bar_chart / line_graph / mixed.
7. Set confidence: high (table or explicit prose) / medium (bar chart) / low (line graph estimate).
8. Leave columns blank if value is not stated — never fill from assumptions.
9. If wear is only mass loss: fill mass_loss_mg and leave wear_rate_mm3Nm blank.
10. Do not convert units — preserve reported numeric values and state source units in notes.
   converter.py performs auditable conversion later.

OUTPUT: Return ONLY valid CSV. The first row must be the exact header below;
no markdown, code fences, explanation, or extra rows.

COLUMNS (in this exact order):
paper_id,material_base,filler_1_type,filler_1_wt_pct,filler_2_type,filler_2_wt_pct,
filler_3_type,filler_3_wt_pct,load_N,speed_ms,distance_m,PV_factor,counterface,
test_type,environment,humidity_pct,temperature_C,fabrication,COF,wear_rate_mm3Nm,
wear_volume_mm3,mass_loss_mg,contact_temp_C,source_doi,extraction_method,confidence,notes
"""


def _strip_markdown_fence(text: str) -> str:
    text = text.lstrip("\ufeff").strip()
    match = re.fullmatch(r"```(?:csv|json)?\s*(.*?)\s*```", text, flags=re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else text


def _save_raw_response(paper_id: str, response_text: str, suffix: str = "raw_response") -> Path:
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    path = LOGS_DIR / f"{paper_id}_{suffix}.txt"
    path.write_text(response_text, encoding="utf-8")
    return path


def _repair_detectable_column_shift(df: pd.DataFrame, paper_id: str) -> pd.DataFrame:
    """Repair one common CSV positional error without guessing scientific values.

    Some model CSV responses emit an extra blank filler field and omit an optional
    contact-temperature field.  The condition block is then visibly shifted right:
    ``load_N`` and ``counterface`` are blank, while the next cells contain a
    plausible load, speed, distance, counterface, test type, and environment.
    This exact signature is safe to correct because every moved value is validated
    against its expected type/category afterwards.  The unmodified CSV response is
    retained in logs for auditability.
    """
    repaired = df.copy()
    repairs: list[int] = []
    counterfaces = {"steel", "PA6", "alumina", "cast-iron", "other"}
    test_types = {"PoD", "BoR", "BoP"}
    environments = {"dry", "humid", "water", "lubricated"}

    def as_float(value: Any) -> float | None:
        try:
            return float(value)
        except (TypeError, ValueError):
            return None

    for index, row in repaired.iterrows():
        # Expected shifted positions: speed_ms contains load, distance_m contains
        # speed, PV_factor contains distance, test_type contains counterface, etc.
        shifted_load = as_float(row["speed_ms"])
        shifted_speed = as_float(row["distance_m"])
        if not (
            not str(row["load_N"]).strip()
            and not str(row["counterface"]).strip()
            and shifted_load is not None
            and 1 <= shifted_load <= 500
            and shifted_speed is not None
            and 0.01 <= shifted_speed <= 5
            and str(row["test_type"]).strip() in counterfaces
            and str(row["environment"]).strip() in test_types
            and str(row["humidity_pct"]).strip() in environments
        ):
            continue

        # Shift the exact condition/measurement span left one field and restore
        # the omitted optional contact_temp_C blank at the end of the span.
        fields = [
            "load_N", "speed_ms", "distance_m", "PV_factor", "counterface",
            "test_type", "environment", "humidity_pct", "temperature_C",
            "fabrication", "COF", "wear_rate_mm3Nm", "wear_volume_mm3",
            "mass_loss_mg", "contact_temp_C",
        ]
        values = [row[field] for field in fields]
        repaired.loc[index, fields] = [*values[1:], ""]
        repairs.append(index + 1)

    if repairs:
        LOGS_DIR.mkdir(parents=True, exist_ok=True)
        report_path = LOGS_DIR / f"{paper_id}_column_repair_report.txt"
        report_path.write_text(
            "Corrected a detectable one-cell right shift in the experimental "
            f"condition block for CSV row(s): {', '.join(map(str, repairs))}.\n"
            "The original Gemini response is retained in logs/PAPERID_raw_response.txt; "
            "corrected values still undergo full validation.\n",
            encoding="utf-8",
        )
        print(f"Corrected a detectable Gemini column shift in row(s): {', '.join(map(str, repairs))}")
    return repaired


def _parse_json_response(response_text: str, paper_id: str) -> dict[str, Any]:
    cleaned = _strip_markdown_fence(response_text)
    try:
        context = json.loads(cleaned)
    except json.JSONDecodeError as exc:
        raw_path = _save_raw_response(paper_id, response_text, "context_raw_response")
        raise ValueError(f"Gemini context response was not valid JSON; saved to {raw_path}") from exc
    if not isinstance(context, dict):
        raise ValueError("Gemini context response must be a JSON object")
    return context


def extract_paper_context(gemini_file: Any, paper_id: str) -> dict[str, Any]:
    """Extract fixed test context from an entire uploaded PDF and save JSON."""
    response = safe_gemini_call([gemini_file, CONTEXT_PROMPT])
    if response is None:
        raise RuntimeError("Gemini did not return paper context")
    context = _parse_json_response(getattr(response, "text", ""), paper_id)
    # The registry/filename is the dataset authority, not a value inferred by
    # the model (which may return a DOI in its paper_id field).
    context["paper_id"] = paper_id
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    destination = LOGS_DIR / f"{paper_id}_context.json"
    destination.write_text(json.dumps(context, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Saved paper context: {destination}")
    return context


def extract_all_data(gemini_file: Any, paper_id: str, context: dict[str, Any]) -> pd.DataFrame:
    """Extract all experimental rows from a paper and robustly parse Gemini CSV."""
    prompt = EXTRACTION_PROMPT.format(
        context=json.dumps(context, indent=2, ensure_ascii=False),
        schema=get_schema_description(),
    )
    response = safe_gemini_call([gemini_file, prompt])
    if response is None:
        raise RuntimeError("Gemini did not return extracted CSV")
    raw_response = getattr(response, "text", "")
    cleaned = _strip_markdown_fence(raw_response)
    first_line = cleaned.splitlines()[0].lstrip("\ufeff") if cleaned.splitlines() else ""
    try:
        received_header = next(csv.reader([first_line]))
    except (csv.Error, StopIteration) as exc:
        raw_path = _save_raw_response(paper_id, raw_response)
        raise ValueError(f"Gemini response has no readable CSV header; saved to {raw_path}") from exc
    if received_header != ALL_COLUMNS:
        raw_path = _save_raw_response(paper_id, raw_response)
        raise ValueError(
            "Gemini response did not start with the required exact CSV header; "
            f"saved raw response to {raw_path}"
        )
    try:
        df = pd.read_csv(io.StringIO(cleaned), dtype=object, keep_default_na=False)
    except Exception as exc:
        raw_path = _save_raw_response(paper_id, raw_response)
        raise ValueError(f"Gemini response was not parseable CSV; saved to {raw_path}") from exc
    if list(df.columns) != ALL_COLUMNS or df.empty:
        raw_path = _save_raw_response(paper_id, raw_response)
        raise ValueError(f"Gemini CSV is missing schema columns or rows; saved to {raw_path}")
    # Preserve unmodified output before any strictly signature-based correction.
    _save_raw_response(paper_id, raw_response, "raw_response")
    df = _repair_detectable_column_shift(df, paper_id)
    print(f"Parsed {len(df)} experimental row(s) from Gemini response.")
    return df


def flag_manual_rows(df: pd.DataFrame, paper_id: str) -> pd.DataFrame:
    """Separate uncertain line-graph rows that need WebPlotDigitizer work."""
    notes = df.get("notes", pd.Series("", index=df.index)).fillna("").astype(str)
    manual_mask = notes.str.contains("SAVE_FOR_MANUAL", case=False, na=False)
    flagged = df.loc[manual_mask].copy()
    if not flagged.empty:
        LOGS_DIR.mkdir(parents=True, exist_ok=True)
        path = LOGS_DIR / f"{paper_id}_manual_needed.csv"
        flagged.to_csv(path, index=False)
        print(f"{len(flagged)} row(s) require manual digitization; saved to {path}")
        print(flagged.to_string(index=False))
    else:
        print("No rows flagged for manual digitization.")
    return df.loc[~manual_mask].copy()


def _append_note(df: pd.DataFrame, mask: pd.Series, message: str) -> None:
    existing = df.loc[mask, "notes"].fillna("").astype(str).str.strip()
    df.loc[mask, "notes"] = existing.apply(lambda note: f"{note}; {message}" if note else message)


def apply_unit_conversions(df: pd.DataFrame, context: dict[str, Any]) -> pd.DataFrame:
    """Apply only context-supported load/speed conversions and report every change."""
    converted = df.copy()
    converted["notes"] = converted["notes"].fillna("")
    load_unit = str(context.get("load_unit") or "").lower().replace(" ", "")
    speed_unit = str(context.get("speed_unit") or "").lower().replace(" ", "")
    changed = 0

    if "kgf" in load_unit or load_unit in {"kg-force", "kilogram-force", "kilogramforce"}:
        numeric_loads = pd.to_numeric(converted["load_N"], errors="coerce")
        mask = numeric_loads.notna()
        converted.loc[mask, "load_N"] = numeric_loads.loc[mask].apply(kgf_to_N)
        _append_note(converted, mask, "Converted from kgf to N using converter.py")
        changed += int(mask.sum())
    elif load_unit:
        print(f"Load unit already retained without conversion: {context.get('load_unit')}")

    diameter = context.get("disc_diameter_mm")
    if "rpm" in speed_unit or speed_unit in {"rev/min", "revolutionsperminute"}:
        numeric_speeds = pd.to_numeric(converted["speed_ms"], errors="coerce")
        if diameter is None or pd.isna(diameter):
            print("Skipped rpm-to-m/s conversion: disc_diameter_mm is not stated in paper context.")
        else:
            mask = numeric_speeds.notna()
            converted.loc[mask, "speed_ms"] = numeric_speeds.loc[mask].apply(
                lambda rpm: rpm_to_ms(rpm, float(diameter))
            )
            _append_note(converted, mask, f"Converted from rpm to m/s using {diameter} mm disc diameter")
            changed += int(mask.sum())
    elif speed_unit:
        print(f"Speed unit already retained without conversion: {context.get('speed_unit')}")

    wear_unit = str(context.get("wear_unit") or "").lower()
    if "mg" in wear_unit:
        print("Wear is reported as mass loss; mass-loss conversion is left for user review as requested.")
    print(f"=== Context Unit Conversion Report: {changed} value(s) converted ===")
    return converted


def _read_index() -> pd.DataFrame:
    if not INDEX_PATH.exists():
        return pd.DataFrame(
            columns=[
                "paper_id", "full_title", "authors", "journal", "year", "doi", "pdf_filename",
                "access_type", "extraction_status", "notes",
            ]
        )
    return pd.read_csv(INDEX_PATH, dtype=object, keep_default_na=False)


def _paper_status(paper_id: str) -> str | None:
    index = _read_index()
    matches = index.loc[index["paper_id"] == paper_id, "extraction_status"]
    return str(matches.iloc[0]) if not matches.empty else None


def _update_index_status(paper_id: str, status: str, note: str = "") -> None:
    index = _read_index()
    if "extraction_status" not in index.columns:
        index["extraction_status"] = "pending"
    match = index["paper_id"] == paper_id if "paper_id" in index.columns else pd.Series(False, index=index.index)
    if match.any():
        index.loc[match, "extraction_status"] = status
        if note and "notes" in index.columns:
            existing = index.loc[match, "notes"].fillna("").astype(str)
            index.loc[match, "notes"] = existing.apply(lambda value: f"{value}; {note}" if value else note)
    else:
        row = {column: "" for column in index.columns}
        row.update({"paper_id": paper_id, "pdf_filename": f"{paper_id}.pdf", "extraction_status": status, "notes": note})
        index = pd.concat([index, pd.DataFrame([row])], ignore_index=True)
    INDEX_PATH.parent.mkdir(parents=True, exist_ok=True)
    index.to_csv(INDEX_PATH, index=False)


def _append_extraction_log(paper_id: str, status: str, details: dict[str, Any]) -> None:
    LOGS_DIR.mkdir(parents=True, exist_ok=True)
    path = LOGS_DIR / "extraction_log.csv"
    columns = [
        "timestamp", "paper_id", "status", "raw_rows", "passing_rows", "failing_rows",
        "manual_rows", "figures_saved", "message",
    ]
    new_file = not path.exists()
    record = {
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "paper_id": paper_id,
        "status": status,
        "raw_rows": details.get("raw_rows", 0),
        "passing_rows": details.get("passing_rows", 0),
        "failing_rows": details.get("failing_rows", 0),
        "manual_rows": details.get("manual_rows", 0),
        "figures_saved": details.get("figures_saved", 0),
        "message": details.get("message", ""),
    }
    with path.open("a", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns)
        if new_file:
            writer.writeheader()
        writer.writerow(record)


def extract_paper(pdf_path: str | Path, paper_id: str) -> dict[str, Any]:
    """Run the complete extraction, validation, figure, and audit-log pipeline."""
    pdf_path = Path(pdf_path)
    if _paper_status(paper_id) == "done":
        print(f"Skipping {paper_id}: papers/index.csv already marks it done.")
        return {"status": "skipped", "paper_id": paper_id}
    if not pdf_path.exists():
        message = f"PDF not found: {pdf_path}"
        _update_index_status(paper_id, "failed", message)
        _append_extraction_log(paper_id, "failed", {"message": message})
        print(message)
        return {"status": "failed", "paper_id": paper_id, "message": message}

    RAW_LLM_DIR.mkdir(parents=True, exist_ok=True)
    gemini_file = None
    summary: dict[str, Any] = {"paper_id": paper_id, "status": "failed", "raw_rows": 0, "passing_rows": 0, "failing_rows": 0, "manual_rows": 0, "figures_saved": 0}
    try:
        print(f"=== Starting Extraction: {paper_id} ===")
        gemini_file = upload_pdf_to_gemini(pdf_path)
        gemini_file = wait_for_file_active(gemini_file)

        context = extract_paper_context(gemini_file, paper_id)
        time.sleep(4)  # Stay below the Gemini free-tier request rate.
        extracted_df = extract_all_data(gemini_file, paper_id, context)
        summary["raw_rows"] = len(extracted_df)
        cleaned_df = flag_manual_rows(extracted_df, paper_id)
        summary["manual_rows"] = len(extracted_df) - len(cleaned_df)
        converted_df = apply_unit_conversions(cleaned_df, context)

        raw_path = RAW_LLM_DIR / f"{paper_id}_llm.csv"
        converted_df.to_csv(raw_path, index=False)
        print(f"Saved cleaned raw LLM extraction: {raw_path}")
        passing_df, failing_df, _ = validate_csv(raw_path, paper_id)
        summary["passing_rows"] = len(passing_df)
        summary["failing_rows"] = len(failing_df)

        # Reuse the active PDF so graph classification does not consume another upload.
        time.sleep(4)
        try:
            figure_summary = save_relevant_figures(pdf_path, paper_id, gemini_file=gemini_file)
            summary["figures_saved"] = figure_summary["line_graphs_saved"]
        except Exception as figure_error:
            # The tabular dataset remains useful even if local Poppler/vision saving fails.
            summary["message"] = f"Figure scan warning: {figure_error}"
            print(summary["message"])

        _update_index_status(paper_id, "done")
        summary["status"] = "done"
        _append_extraction_log(paper_id, "done", summary)
        print(
            f"=== Extraction Complete: {paper_id} ===\n"
            f"Raw rows extracted: {summary['raw_rows']}\n"
            f"Rows passed validation: {summary['passing_rows']}\n"
            f"Rows failed validation: {summary['failing_rows']}\n"
            f"Rows flagged for manual digitization: {summary['manual_rows']}\n"
            f"Figures saved to papers/figures/: {summary['figures_saved']}\n"
            f"Output: {PROJECT_ROOT / 'data' / 'validated' / f'{paper_id}_validated.csv'}"
        )
        return summary
    except Exception as exc:
        summary["message"] = f"{type(exc).__name__}: {exc}"
        _update_index_status(paper_id, "failed", summary["message"])
        _append_extraction_log(paper_id, "failed", summary)
        print(f"=== Extraction Failed: {paper_id} ===\n{summary['message']}")
        return summary
    finally:
        delete_gemini_file(gemini_file)


def extract_all_papers(pdfs_dir: str | Path = PDFS_DIR) -> dict[str, int]:
    """Batch process all PDFs, skipping done papers and respecting rate limits."""
    pdfs_dir = Path(pdfs_dir)
    pdf_paths = sorted(pdfs_dir.glob("*.pdf"))
    processed = skipped = failed = total_rows = passed_rows = figures = 0
    for position, pdf_path in enumerate(pdf_paths, start=1):
        paper_id = pdf_path.stem
        result = extract_paper(pdf_path, paper_id)
        status = result["status"]
        if status == "done":
            processed += 1
            total_rows += int(result.get("raw_rows", 0))
            passed_rows += int(result.get("passing_rows", 0))
            figures += int(result.get("figures_saved", 0))
        elif status == "skipped":
            skipped += 1
        else:
            failed += 1
        print(f"Batch progress: {position}/{len(pdf_paths)} PDFs considered.")
        if position < len(pdf_paths):
            time.sleep(3)
    print(
        "=== Batch Extraction Complete ===\n"
        f"Papers processed: {processed} / {len(pdf_paths)}\n"
        f"Papers skipped (already done): {skipped}\n"
        f"Papers failed: {failed} (see logs/extraction_log.csv)\n"
        f"Total rows extracted: {total_rows}\n"
        f"Total rows passed validation: {passed_rows}\n"
        f"Total figures saved for manual digitization: {figures}"
    )
    return {"processed": processed, "skipped": skipped, "failed": failed}


def main() -> None:
    if len(sys.argv) == 2 and sys.argv[1] == "--all":
        extract_all_papers()
    elif len(sys.argv) == 3:
        extract_paper(sys.argv[1], sys.argv[2])
    else:
        raise SystemExit(
            "Usage: python src/extractor.py papers/pdfs/PAPERID.pdf PAPERID\n"
            "   or: python src/extractor.py --all"
        )


if __name__ == "__main__":
    main()

"""Merge validated Gemini and manually digitized PA6 tribology data into one CSV."""

from __future__ import annotations

from datetime import date
from pathlib import Path

import pandas as pd

try:
    from schema import ALL_COLUMNS
    from validator import validate_csv
except ImportError:  # pragma: no cover
    from .schema import ALL_COLUMNS
    from .validator import validate_csv

PROJECT_ROOT = Path(__file__).resolve().parents[1]
VALIDATED_DIR = PROJECT_ROOT / "data" / "validated"
MANUAL_DIR = PROJECT_ROOT / "data" / "raw_manual"
PROCESSED_DIR = PROJECT_ROOT / "data" / "processed"
FIGURES_DIR = PROJECT_ROOT / "papers" / "figures"


def _read_validated(path: Path) -> pd.DataFrame:
    df = pd.read_csv(path, dtype=object, keep_default_na=False)
    if "validation_status" not in df.columns:
        print(f"Skipping {path.name}: no validation_status column.")
        return pd.DataFrame(columns=ALL_COLUMNS)
    return df.loc[df["validation_status"].astype(str).str.lower() == "pass", ALL_COLUMNS].copy()


def _validate_manual_files() -> list[Path]:
    """Validate manual CSVs without overwriting same-paper LLM validated output."""
    MANUAL_DIR.mkdir(parents=True, exist_ok=True)
    destinations: list[Path] = []
    for path in sorted(MANUAL_DIR.glob("*_manual.csv")):
        paper_id = path.stem.removesuffix("_manual")
        destination = VALIDATED_DIR / f"{path.stem}_validated.csv"
        print(f"Validating manual data: {path.name}")
        validate_csv(path, paper_id, output_path=destination)
        destinations.append(destination)
    return destinations


def _format_range(series: pd.Series, suffix: str = "") -> str:
    numbers = pd.to_numeric(series, errors="coerce").dropna()
    if numbers.empty:
        return "not available"
    return f"{numbers.min():.3g} – {numbers.max():.3g}{suffix} (mean: {numbers.mean():.3g}{suffix})"


def _print_counts(df: pd.DataFrame, column: str) -> None:
    if df.empty:
        print("  No rows")
        return
    for value, count in df[column].fillna("").replace("", "blank").value_counts().items():
        print(f"  {value}: {count}")


def merge_all() -> pd.DataFrame:
    """Validate manual files, merge passing rows, de-duplicate, and save master CSV."""
    VALIDATED_DIR.mkdir(parents=True, exist_ok=True)
    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    _validate_manual_files()

    frames: list[pd.DataFrame] = []
    rejected_rows = 0
    for path in sorted(VALIDATED_DIR.glob("*_validated.csv")):
        annotated = pd.read_csv(path, dtype=object, keep_default_na=False)
        if "validation_status" in annotated.columns:
            rejected_rows += int((annotated["validation_status"].astype(str).str.lower() != "pass").sum())
        frames.append(_read_validated(path))

    if frames:
        master = pd.concat(frames, ignore_index=True)
    else:
        master = pd.DataFrame(columns=ALL_COLUMNS)

    for column in ALL_COLUMNS:
        if column not in master.columns:
            master[column] = ""
    master = master[ALL_COLUMNS].copy()
    master["date_added"] = date.today().isoformat()
    before_deduplication = len(master)
    dedupe_columns = ["paper_id", "load_N", "speed_ms", "filler_1_type", "filler_1_wt_pct", "COF"]
    master = master.drop_duplicates(subset=dedupe_columns, keep="first").reset_index(drop=True)
    duplicates_removed = before_deduplication - len(master)

    output_path = PROCESSED_DIR / "master_dataset.csv"
    master.to_csv(output_path, index=False)

    print(
        "=== Master Dataset Summary ===\n"
        f"Papers included: {master['paper_id'].replace('', pd.NA).nunique()}\n"
        f"Total rows: {len(master)}\n"
        f"Rows rejected by validation: {rejected_rows}\n"
        f"Duplicate rows removed: {duplicates_removed}\n\n"
        f"COF range: {_format_range(master['COF'])}\n"
        f"Wear rate range: {_format_range(master['wear_rate_mm3Nm'], ' mm³/Nm')}\n\n"
        "Rows by material_base:"
    )
    _print_counts(master, "material_base")
    print("\nRows by filler_1_type:")
    _print_counts(master, "filler_1_type")
    print("\nRows by environment:")
    _print_counts(master, "environment")
    print("\nMissing value rates:")
    for column in ("wear_rate_mm3Nm", "distance_m", "humidity_pct"):
        missing = master[column].isna() | master[column].astype(str).str.strip().eq("")
        rate = float(missing.mean() * 100) if len(master) else 0
        print(f"  {column}: {rate:.0f}% missing")
    figure_count = len(list(FIGURES_DIR.glob("*_context.txt"))) if FIGURES_DIR.exists() else 0
    print(
        f"\nFigures saved for manual digitization: {figure_count}\n"
        "→ Run WebPlotDigitizer on files in papers/figures/\n"
        "→ Read context from papers/figures/*_context.txt\n"
        "→ Save results to data/raw_manual/PAPERID_manual.csv\n"
        "→ Re-run merger to include manual data\n"
        f"Master dataset saved: {output_path}"
    )
    return master


if __name__ == "__main__":
    merge_all()

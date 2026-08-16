"""Validate extracted PA6 tribology CSV files against the canonical schema."""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any

import pandas as pd

try:  # Works both as `python src/validator.py` and as a package import.
    from schema import ALLOWED_VALUES, ALL_COLUMNS, NUMERIC_RANGES, REQUIRED_COLUMNS
except ImportError:  # pragma: no cover
    from .schema import ALLOWED_VALUES, ALL_COLUMNS, NUMERIC_RANGES, REQUIRED_COLUMNS

PROJECT_ROOT = Path(__file__).resolve().parents[1]
VALIDATED_DIR = PROJECT_ROOT / "data" / "validated"


def _is_blank(value: Any) -> bool:
    return pd.isna(value) or (isinstance(value, str) and not value.strip())


def _normalise_value(value: Any) -> str:
    return str(value).strip()


def _validation_output_path(paper_id: str, output_path: str | Path | None) -> Path:
    if output_path is not None:
        return Path(output_path)
    return VALIDATED_DIR / f"{paper_id}_validated.csv"


def validate_csv(
    filepath: str | Path, paper_id: str, output_path: str | Path | None = None
) -> tuple[pd.DataFrame, pd.DataFrame, str]:
    """Validate an extracted CSV and save an annotated validated copy.

    Missing optional schema fields are added as blanks so manually digitized files
    can be concise.  Missing required headers halt validation because the file
    cannot represent a valid experimental condition.
    """
    filepath = Path(filepath)
    df = pd.read_csv(filepath, dtype=object, keep_default_na=False)
    missing_required = [column for column in REQUIRED_COLUMNS if column not in df.columns]
    if missing_required:
        raise ValueError(f"Missing required columns in {filepath.name}: {', '.join(missing_required)}")

    original_columns = list(df.columns)
    unexpected_columns = [
        column for column in original_columns if column not in ALL_COLUMNS and column not in {"validation_status", "validation_notes"}
    ]
    missing_optional = [column for column in ALL_COLUMNS if column not in df.columns]
    for column in missing_optional:
        df[column] = ""
    df = df[[*ALL_COLUMNS, *[c for c in ("validation_status", "validation_notes") if c in df.columns]]].copy()

    all_errors: list[list[str]] = []
    for row_number, (_, row) in enumerate(df.iterrows(), start=1):
        errors: list[str] = []
        for column in REQUIRED_COLUMNS:
            if _is_blank(row[column]):
                errors.append(f"{column} is required")

        for column, allowed in ALLOWED_VALUES.items():
            value = row[column]
            if _is_blank(value):
                if "" not in allowed and column in REQUIRED_COLUMNS:
                    continue  # The missing-value error above is more useful.
                if "" not in allowed:
                    continue  # Optional categorical value may be unstated.
            elif _normalise_value(value) not in allowed:
                errors.append(f"{column}={value!r} not in allowed list")

        for column, (minimum, maximum) in NUMERIC_RANGES.items():
            value = row[column]
            if _is_blank(value):
                continue
            numeric_value = pd.to_numeric(pd.Series([value]), errors="coerce").iloc[0]
            if pd.isna(numeric_value):
                errors.append(f"{column}={value!r} is not numeric")
                continue
            if minimum is not None and numeric_value < minimum:
                errors.append(f"{column}={value} is below min {minimum}")
            if maximum is not None and numeric_value > maximum:
                errors.append(f"{column}={value} exceeds max {maximum}")

        if _is_blank(row["COF"]) and _is_blank(row["wear_rate_mm3Nm"]):
            errors.append("COF and wear_rate_mm3Nm are both blank")
        all_errors.append(errors)

    df["validation_status"] = ["pass" if not errors else "fail" for errors in all_errors]
    df["validation_notes"] = ["; ".join(errors) for errors in all_errors]
    passing_df = df.loc[df["validation_status"] == "pass"].copy()
    failing_df = df.loc[df["validation_status"] == "fail"].copy()

    missing_lines = []
    for column in ALL_COLUMNS:
        count = int(df[column].apply(_is_blank).sum())
        if count:
            percentage = (count / len(df) * 100) if len(df) else 0
            missing_lines.append(f"  {column}: {count} blank ({percentage:.0f}%)")

    report_lines = [
        f"=== Validation Report: {paper_id} ===",
        f"Total rows: {len(df)}",
        f"Passing rows: {len(passing_df)}",
        f"Failing rows: {len(failing_df)}",
    ]
    if unexpected_columns:
        report_lines.append(f"Ignored unexpected columns: {', '.join(unexpected_columns)}")
    if missing_optional:
        report_lines.append(f"Added missing optional columns as blank: {', '.join(missing_optional)}")
    for row_number, errors in enumerate(all_errors, start=1):
        if errors:
            report_lines.append(f"  Row {row_number}: {'; '.join(errors)}")
    report_lines.append("Missing value summary:")
    report_lines.extend(missing_lines or ["  No blank fields."])
    report = "\n".join(report_lines)

    destination = _validation_output_path(paper_id, output_path)
    destination.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(destination, index=False)
    print(report)
    print(f"Saved annotated CSV: {destination}")
    return passing_df, failing_df, report


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: python src/validator.py data/raw_llm/PAPERID_llm.csv PAPERID")
    validate_csv(sys.argv[1], sys.argv[2])


if __name__ == "__main__":
    main()

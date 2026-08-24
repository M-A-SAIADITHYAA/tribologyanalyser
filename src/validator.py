"""Validate extracted PA6 tribology CSV files against the canonical schema."""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any

import pandas as pd

try:  # Works both as `python src/validator.py` and as a package import.
    from composition import migrate_legacy_dataframe
    from schema import ALLOWED_VALUES, ALL_COLUMNS, NUMERIC_RANGES, REQUIRED_COLUMNS
except ImportError:  # pragma: no cover
    from .composition import migrate_legacy_dataframe
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

    A usable row must contain the four explicit composition fields and an
    experimentally reported COF. Test-condition metadata remains in the output
    but is deliberately non-blocking: malformed optional metadata is reported as
    a warning rather than rejecting an otherwise usable COF observation.
    """
    filepath = Path(filepath)
    df = pd.read_csv(filepath, dtype=object, keep_default_na=False)
    df = migrate_legacy_dataframe(df, paper_id)
    missing_required = [column for column in REQUIRED_COLUMNS if column not in df.columns]
    if missing_required:
        raise ValueError(f"Missing required columns in {filepath.name}: {', '.join(missing_required)}")

    original_columns = list(df.columns)
    unexpected_columns = [
        column
        for column in original_columns
        if column not in ALL_COLUMNS and column not in {"validation_status", "validation_notes", "validation_warnings"}
    ]
    missing_optional = [column for column in ALL_COLUMNS if column not in df.columns]
    for column in missing_optional:
        df[column] = ""
    df = df[[*ALL_COLUMNS, *[c for c in ("validation_status", "validation_notes") if c in df.columns]]].copy()

    all_errors: list[list[str]] = []
    all_warnings: list[list[str]] = []
    for row_number, (_, row) in enumerate(df.iterrows(), start=1):
        errors: list[str] = []
        warnings: list[str] = []
        for column in REQUIRED_COLUMNS:
            if _is_blank(row[column]):
                errors.append(f"{column} is required")

        for column, allowed in ALLOWED_VALUES.items():
            value = row[column]
            if _is_blank(value):
                continue
            elif _normalise_value(value) not in allowed:
                warnings.append(f"{column}={value!r} is outside the preferred encoding")

        for column, (minimum, maximum) in NUMERIC_RANGES.items():
            value = row[column]
            if _is_blank(value):
                continue
            numeric_value = pd.to_numeric(pd.Series([value]), errors="coerce").iloc[0]
            if pd.isna(numeric_value):
                target = errors if column in REQUIRED_COLUMNS else warnings
                target.append(f"{column}={value!r} is not numeric")
                continue
            if minimum is not None and numeric_value < minimum:
                target = errors if column in REQUIRED_COLUMNS else warnings
                target.append(f"{column}={value} is below min {minimum}")
            if maximum is not None and numeric_value > maximum:
                target = errors if column in REQUIRED_COLUMNS else warnings
                target.append(f"{column}={value} exceeds max {maximum}")

        composition_columns = ["pa6_pct", "pa66_pct", "glass_fiber_pct", "graphite_pct", "mos2_pct"]
        composition_values = pd.to_numeric(row[composition_columns], errors="coerce")
        if composition_values.notna().all() and composition_values.sum() > 100.000001:
            errors.append("formulation percentages exceed 100")
        all_errors.append(errors)
        all_warnings.append(warnings)

    df["validation_status"] = ["pass" if not errors else "fail" for errors in all_errors]
    df["validation_notes"] = ["; ".join(errors) for errors in all_errors]
    df["validation_warnings"] = ["; ".join(warnings) for warnings in all_warnings]
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
    warning_count = sum(len(warnings) for warnings in all_warnings)
    if warning_count:
        report_lines.append(f"Optional metadata warnings: {warning_count} (see validation_warnings column)")
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

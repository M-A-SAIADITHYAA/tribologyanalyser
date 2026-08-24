"""Migrate raw extraction CSVs from generic filler slots to formulation fields."""

from __future__ import annotations

import argparse
import io
from pathlib import Path
import subprocess

import pandas as pd

try:
    from composition import migrate_legacy_dataframe
    from validator import validate_csv
except ImportError:  # pragma: no cover
    from .composition import migrate_legacy_dataframe
    from .validator import validate_csv

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def _load_source(path: Path, from_head: bool) -> pd.DataFrame:
    """Read the current CSV, or its pre-migration committed version when asked."""
    if from_head:
        relative_path = path.relative_to(PROJECT_ROOT).as_posix()
        result = subprocess.run(
            ["git", "show", f"HEAD:{relative_path}"],
            cwd=PROJECT_ROOT,
            text=True,
            capture_output=True,
            check=False,
        )
        if result.returncode == 0:
            return pd.read_csv(io.StringIO(result.stdout), dtype=object, keep_default_na=False)
        print(f"{path.name}: no committed source available; using current file.")
    return pd.read_csv(path, dtype=object, keep_default_na=False)


def _migrate_directory(directory: Path, suffix: str, write: bool, from_head: bool) -> tuple[int, int]:
    migrated_files = migrated_rows = 0
    for path in sorted(directory.glob(f"*{suffix}.csv")):
        source = _load_source(path, from_head)
        if not any(column.startswith("filler_") for column in source.columns):
            continue
        paper_id = path.stem.removesuffix(suffix)
        converted = migrate_legacy_dataframe(source, paper_id)
        details = converted.attrs.get("composition_migration", {})
        repaired = details.get("paper_id_rows_repaired", [])
        filler_cell_repairs = details.get("filler_cell_rows_repaired", [])
        incomplete = details.get("rows_with_incomplete_composition", [])
        print(
            f"{path.name}: {len(converted)} row(s) converted"
            + (f"; repaired missing paper_id in row(s) {', '.join(map(str, repaired))}" if repaired else "")
            + (f"; repaired missing filler cell in row(s) {', '.join(map(str, filler_cell_repairs))}" if filler_cell_repairs else "")
            + (f"; {len(incomplete)} row(s) need composition review" if incomplete else "")
        )
        if write:
            converted.to_csv(path, index=False)
            validate_csv(path, paper_id)
        migrated_files += 1
        migrated_rows += len(converted)
    return migrated_files, migrated_rows


def migrate_all(write: bool = True, from_head: bool = False) -> None:
    """Migrate LLM/manual source data and revalidate all converted files."""
    raw_files, raw_rows = _migrate_directory(PROJECT_ROOT / "data" / "raw_llm", "_llm", write, from_head)
    manual_files, manual_rows = _migrate_directory(PROJECT_ROOT / "data" / "raw_manual", "_manual", write, False)
    action = "Migrated" if write else "Would migrate"
    print(f"{action} {raw_files + manual_files} file(s), {raw_rows + manual_rows} row(s).")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="Report changes without writing CSVs.")
    parser.add_argument(
        "--from-head",
        action="store_true",
        help="Use the committed pre-migration raw CSVs as source; useful when re-running this migration.",
    )
    args = parser.parse_args()
    migrate_all(write=not args.dry_run, from_head=args.from_head)


if __name__ == "__main__":
    main()

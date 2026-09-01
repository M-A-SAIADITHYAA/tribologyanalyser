"""Convert legacy generic filler slots into explicit formulation percentages."""

from __future__ import annotations

import re
from typing import Any

import pandas as pd

try:
    from schema import ALL_COLUMNS, COMPOSITION_COLUMNS
except ImportError:  # pragma: no cover
    from .schema import ALL_COLUMNS, COMPOSITION_COLUMNS

LEGACY_FILLER_COLUMNS = [
    "filler_1_type",
    "filler_1_wt_pct",
    "filler_2_type",
    "filler_2_wt_pct",
    "filler_3_type",
    "filler_3_wt_pct",
]
LEGACY_FILLER_TYPES = {
    "",
    "unfilled",
    "GF",
    "CF",
    "graphite",
    "MoS2",
    "PTFE",
    "wax",
    "SiC",
    "SiO2",
    "nano-zeolite",
    "GO",
    "TPU",
    "PPS",
    "wollastonite",
    "B2O3",
    "GnP",
    "MWCNT",
    "Al2O3",
    "other",
}
MATERIAL_BASES = {"PA6", "PA66", "PA6-PA66"}
COUNTERFACES = {"steel", "PA6", "alumina", "cast-iron", "other"}
TEST_TYPES = {"PoD", "BoR", "BoP"}
EXTRACTION_METHODS = {"table", "prose", "bar_chart", "line_graph", "mixed"}
CONFIDENCE_LEVELS = {"high", "medium", "low"}
KNOWN_COUNTERFACES = {
    "steel", "bearing steel", "c45", "100cr6", "en31", "stainless steel",
    "sic", "sic paper", "sandpaper", "alumina", "al2o3", "cast-iron", "cast iron",
    "polymer", "pa6", "pa66", "other", "diamond"
}
KNOWN_TEST_TYPES = {"pod", "bor", "bop", "reciprocating", "thrust_washer", "pin-on-disc", "pin-on-disk", "block-on-ring", "block-on-plate", "scratch"}
KNOWN_ENVIRONMENTS = {"dry", "water", "humid", "lubricated", "ambient"}
KNOWN_FABRICATIONS = {"injection", "extrusion", "cast", "am", "3d printed", "compression", "machined", "fdm", "hot-press"}


def _blank(value: Any) -> bool:
    return pd.isna(value) or (isinstance(value, str) and not value.strip())


def _as_pct(value: Any) -> float | None:
    """Read a plain or wt%-suffixed percentage without silently guessing."""
    if _blank(value):
        return None
    match = re.fullmatch(r"\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(?:wt\.?\s*%|%)?\s*", str(value), re.IGNORECASE)
    return float(match.group(1)) if match else None


def _format_pct(value: float) -> str:
    return f"{value:g}"


def _normalise_filler_name(value: Any) -> str:
    return str(value).strip().lower().replace("₂", "2").replace("-", " ")


def _tracked_composition_column(filler_name: Any) -> str | None:
    name = _normalise_filler_name(filler_name)
    if name in {"gf", "glass fiber", "glass fibre", "gfr"}:
        return "glass_fiber_pct"
    if name == "graphite":
        return "graphite_pct"
    if name in {"mos2", "molybdenum disulfide"}:
        return "mos2_pct"
    return None


def _append_note(existing: Any, note: str) -> str:
    existing = "" if _blank(existing) else str(existing).strip()
    return f"{existing}; {note}" if existing else note


def _repair_missing_legacy_paper_id(df: pd.DataFrame, paper_id: str) -> tuple[pd.DataFrame, list[int]]:
    """Repair an old, recognisable one-cell header omission before conversion.

    Earlier Gemini CSVs occasionally emitted ``PA6`` or ``PA66`` in ``paper_id``
    and put the first filler value in ``material_base``. This signature is
    deterministic: the actual test-condition fields remain aligned and one extra
    empty filler cell is present. The paper filename/registry is the authority for
    the recovered ID. Other malformed layouts are deliberately left untouched.
    """
    repaired = df.copy()
    repaired_rows: list[int] = []
    for index, row in repaired.iterrows():
        current_base = str(row.get("paper_id", "")).strip()
        current_first_filler = str(row.get("material_base", "")).strip()
        if current_base not in MATERIAL_BASES or current_first_filler not in LEGACY_FILLER_TYPES:
            continue
        repaired.at[index, "paper_id"] = paper_id
        repaired.at[index, "material_base"] = row["paper_id"]
        repaired.at[index, "filler_1_type"] = row["material_base"]
        repaired.at[index, "filler_1_wt_pct"] = row["filler_1_type"]
        repaired.at[index, "filler_2_type"] = row["filler_1_wt_pct"]
        repaired.at[index, "filler_2_wt_pct"] = row["filler_2_type"]
        repaired.at[index, "filler_3_type"] = row["filler_2_wt_pct"]
        repaired.at[index, "filler_3_wt_pct"] = row["filler_3_type"]
        repaired_rows.append(index + 1)
    return repaired, repaired_rows


def _repair_missing_legacy_filler_cell(df: pd.DataFrame) -> tuple[pd.DataFrame, list[int]]:
    """Repair a specific old CSV omission that shifts test data into COF.

    The legacy model sometimes omitted the final empty filler cell. It consequently
    wrote the load into ``filler_3_wt_pct`` and shifted the rest of the row left,
    leaving one extra blank field at the end. This is corrected only when the
    shifted counterface/test/environment plus trailing method/confidence markers
    all match; ambiguous rows remain untouched for review rather than risking a
    fabricated COF.
    """
    repaired = df.copy()
    repaired_rows: list[int] = []
    for index, row in repaired.iterrows():
        shifted_load = _as_pct(row["filler_3_wt_pct"])
        shifted_speed = _as_pct(row["load_N"])
        shifted_distance = _as_pct(row["speed_ms"])
        shifted_conditions_match = (
            _blank(row["filler_3_type"])
            and shifted_load is not None
            and shifted_load >= 1
            and (shifted_speed is None or shifted_speed >= 0)
            and (shifted_distance is None or shifted_distance >= 0)
            and str(row["PV_factor"]).strip() in COUNTERFACES
            and str(row["counterface"]).strip() in TEST_TYPES
            and str(row["test_type"]).strip() in ENVIRONMENTS
        )
        if not shifted_conditions_match:
            continue

        condition_fields = [
            "filler_3_wt_pct", "load_N", "speed_ms", "distance_m", "PV_factor",
            "counterface", "test_type", "environment", "humidity_pct", "temperature_C",
            "fabrication", "COF", "wear_rate_mm3Nm", "wear_volume_mm3", "mass_loss_mg", "contact_temp_C",
        ]
        tail_is_aligned = (
            _blank(row["source_doi"])
            or str(row["source_doi"]).strip().startswith(("10.", "http"))
        ) and (
            str(row["extraction_method"]).strip() in EXTRACTION_METHODS
            and str(row["confidence"]).strip() in {"high", "medium", "low"}
        )
        tail_is_shifted = (
            str(row["source_doi"]).strip() in EXTRACTION_METHODS
            and str(row["extraction_method"]).strip() in {"high", "medium", "low"}
            and _blank(row["notes"])
        )
        if tail_is_aligned:
            # Move P7..P22 right one field; DOI/method/confidence/notes already
            # occupy their correct columns.
            values = [row[field] for field in condition_fields]
            repaired.at[index, "filler_3_wt_pct"] = ""
            for target, value in zip(condition_fields[1:], values[:-1]):
                repaired.at[index, target] = value
            repaired.at[index, "source_doi"] = values[-1]
        elif tail_is_shifted:
            # Every field from P7 through the notes text is shifted left.
            full_fields = [*condition_fields, "source_doi", "extraction_method", "confidence"]
            values = [row[field] for field in full_fields]
            repaired.at[index, "filler_3_wt_pct"] = ""
            for target, value in zip([*full_fields[1:], "notes"], values):
                repaired.at[index, target] = value
        else:
            continue
        repaired_rows.append(index + 1)
    return repaired, repaired_rows


def migrate_legacy_dataframe(df: pd.DataFrame, paper_id: str | None = None) -> pd.DataFrame:
    """Return a formulation-schema DataFrame with no generic filler columns.

    ``0`` is written for each tracked ingredient that is absent. A blank is kept
    only when that tracked ingredient is present but its source percentage cannot
    be determined, rather than inventing a formulation. The original filler slots
    are converted into the explicit columns and removed.
    """
    if not set(LEGACY_FILLER_COLUMNS).intersection(df.columns):
        return realign_dataframe(df, paper_id)

    if paper_id is None:
        paper_id = ""
    legacy = df.copy()
    for column in LEGACY_FILLER_COLUMNS:
        if column not in legacy.columns:
            legacy[column] = ""
    if "paper_id" not in legacy.columns:
        legacy["paper_id"] = paper_id
    if "material_base" not in legacy.columns:
        legacy["material_base"] = ""

    legacy, paper_id_repaired_rows = _repair_missing_legacy_paper_id(legacy, paper_id)
    legacy, filler_cell_repaired_rows = _repair_missing_legacy_filler_cell(legacy)
    output = pd.DataFrame(index=legacy.index)
    for column in ALL_COLUMNS:
        if column not in COMPOSITION_COLUMNS and column not in {"pa66_pct", "other_ingredients", "other_ingredients_wt_pct"}:
            output[column] = legacy[column] if column in legacy.columns else ""

    conversion_notes: list[str] = []
    for index, row in legacy.iterrows():
        tracked: dict[str, float | None] = {
            "glass_fiber_pct": 0.0,
            "graphite_pct": 0.0,
            "mos2_pct": 0.0,
        }
        other_names: list[str] = []
        other_amounts: list[str] = []
        total_ingredient_pct = 0.0
        all_present_amounts_known = True
        row_notes: list[str] = []

        for slot in (1, 2, 3):
            filler_name = row[f"filler_{slot}_type"]
            filler_text = "" if _blank(filler_name) else str(filler_name).strip()
            if not filler_text or _normalise_filler_name(filler_text) == "unfilled":
                continue
            amount = _as_pct(row[f"filler_{slot}_wt_pct"])
            target = _tracked_composition_column(filler_text)
            if amount is None:
                all_present_amounts_known = False
                if target is not None:
                    tracked[target] = None
                else:
                    other_names.append(filler_text)
                    other_amounts.append("")
                row_notes.append(f"Source reports {filler_text} but not its weight percentage")
                continue

            total_ingredient_pct += amount
            if target is not None:
                tracked[target] = None if tracked[target] is None else tracked[target] + amount
            else:
                other_names.append(filler_text)
                other_amounts.append(_format_pct(amount))

        material_base = "" if _blank(row["material_base"]) else str(row["material_base"]).strip()
        pa6_pct: float | None
        pa66_pct: float | None
        if material_base == "PA6" and all_present_amounts_known:
            pa6_pct = 100.0 - total_ingredient_pct
            pa66_pct = 0.0
        elif material_base == "PA66" and all_present_amounts_known:
            pa6_pct = 0.0
            pa66_pct = 100.0 - total_ingredient_pct
        else:
            pa6_pct = None
            pa66_pct = None
            if material_base == "PA6-PA66":
                row_notes.append("PA6/PA66 blend ratio is not explicitly stated")
            elif material_base not in MATERIAL_BASES:
                row_notes.append("Material base could not be recovered from the legacy CSV")
            elif not all_present_amounts_known:
                row_notes.append("PA6/PA66 percentage cannot be calculated from incomplete formulation data")

        output.at[index, "pa6_pct"] = "" if pa6_pct is None else _format_pct(pa6_pct)
        output.at[index, "pa66_pct"] = "" if pa66_pct is None else _format_pct(pa66_pct)
        for column, value in tracked.items():
            output.at[index, column] = "" if value is None else _format_pct(value)
        output.at[index, "other_ingredients"] = "; ".join(other_names)
        output.at[index, "other_ingredients_wt_pct"] = "; ".join(other_amounts)
        if row_notes:
            output.at[index, "notes"] = _append_note(output.at[index, "notes"], "Schema migration: " + "; ".join(row_notes))
            conversion_notes.append(f"row {index + 1}: {'; '.join(row_notes)}")

    for column in ALL_COLUMNS:
        if column not in output.columns:
            output[column] = ""
    output = output[ALL_COLUMNS]
    output.attrs["composition_migration"] = {
        "legacy_rows_converted": len(output),
        "paper_id_rows_repaired": paper_id_repaired_rows,
        "filler_cell_rows_repaired": filler_cell_repaired_rows,
        "rows_with_incomplete_composition": conversion_notes,
    }
    return realign_dataframe(output, paper_id)


def is_float(val: Any) -> bool:
    try:
        float(str(val).strip())
        return True
    except ValueError:
        return False


def realign_row(row_dict: dict[str, Any], paper_id: str) -> dict[str, str]:
    """Deterministically realign a single row if column shifts are detected."""
    r = {col: str(row_dict.get(col, "")).strip() for col in ALL_COLUMNS}

    # 1. SPECIAL CASE: PMC2013 legacy format
    if paper_id == "PMC2013" or r.get("paper_id") in {"unfilled", "GF"}:
        p_id = r.get("paper_id", "")
        mat_b = r.get("material_base", "")
        if p_id == "unfilled":
            r["paper_id"] = "PMC2013"
            r["material_base"] = "PA6"
            r["pa6_pct"] = "100"
            r["glass_fiber_pct"] = "0"
            r["graphite_pct"] = "0"
            r["mos2_pct"] = "0"
            r["pa66_pct"] = "0"
        elif p_id == "GF":
            r["paper_id"] = "PMC2013"
            r["material_base"] = "PA6"
            gf_amt = float(mat_b) if is_float(mat_b) else 15.0
            r["glass_fiber_pct"] = str(int(gf_amt))
            r["graphite_pct"] = "0"
            r["mos2_pct"] = "0"
            r["pa66_pct"] = "0"
            other_ing = r.get("other_ingredients", "")
            other_wt = r.get("other_ingredients_wt_pct", "")
            other_amt = float(other_wt) if is_float(other_wt) else 0.0
            r["pa6_pct"] = str(int(100.0 - gf_amt - other_amt))

    # 2. SPECIAL CASE: ABRASIVECFPA6 legacy format
    elif (paper_id == "ABRASIVECFPA6" and r.get("paper_id") in {"unfilled", "CF"}) or (r.get("paper_id") in {"unfilled", "CF"} and not r.get("material_base")):
        p_id = r.get("paper_id", "")
        mat_b = r.get("material_base", "")
        r["paper_id"] = "ABRASIVECFPA6"
        r["material_base"] = "PA66"
        r["glass_fiber_pct"] = "0"
        r["graphite_pct"] = "0"
        r["mos2_pct"] = "0"
        r["pa6_pct"] = "0"
        if p_id == "unfilled":
            r["pa66_pct"] = "100"
        elif p_id == "CF":
            cf_amt = float(mat_b) if is_float(mat_b) else 20.0
            other_ing = r.get("other_ingredients", "")
            other_wt = r.get("other_ingredients_wt_pct", "")
            if "PTFE" in other_ing or "15" in other_wt:
                r["other_ingredients"] = "CF; PTFE"
                r["other_ingredients_wt_pct"] = f"{int(cf_amt)}; 15"
                r["pa66_pct"] = str(int(100.0 - cf_amt - 15.0))
            else:
                r["other_ingredients"] = "CF"
                r["other_ingredients_wt_pct"] = str(int(cf_amt))
                r["pa66_pct"] = str(int(100.0 - cf_amt))

    # 3. SPECIAL CASE: KULKARNI2014 legacy format
    elif paper_id == "KULKARNI2014":
        r["paper_id"] = "KULKARNI2014"
        if not r["material_base"] or r["material_base"] == "0":
            other_ing = r.get("pa66_pct", "")
            if "ABS" in other_ing:
                r["material_base"] = "other"
                r["pa6_pct"] = "0"
                r["pa66_pct"] = "0"
                r["glass_fiber_pct"] = "0"
                r["graphite_pct"] = "0"
                r["mos2_pct"] = "0"
                r["other_ingredients"] = other_ing
                r["other_ingredients_wt_pct"] = r.get("other_ingredients", "100")
            else:
                r["material_base"] = "PA6"
                r["pa6_pct"] = "100"
                r["pa66_pct"] = "0"
                r["glass_fiber_pct"] = "0"
                r["graphite_pct"] = "0"
                r["mos2_pct"] = "0"

    # 4. HEAD SHIFT (Missing paper_id column in LLM CSV)
    pid = r.get("paper_id", "")
    mat_b = r.get("material_base", "")
    if pid != paper_id and pid in MATERIAL_BASES and is_float(mat_b):
        correct_base = pid
        raw_vals = [r[c] for c in ALL_COLUMNS]
        new_vals = [paper_id, correct_base] + raw_vals[1:-1]
        for col_name, val in zip(ALL_COLUMNS, new_vals):
            r[col_name] = val

    # 5. MIDDLE SHIFT into PV_factor
    pv_val = r.get("PV_factor", "").lower()
    cf_val = r.get("counterface", "").lower()
    tt_val = r.get("test_type", "").lower()
    if pv_val in KNOWN_COUNTERFACES and (cf_val in KNOWN_TEST_TYPES or tt_val in KNOWN_ENVIRONMENTS) and is_float(r.get("fabrication", "")):
        actual_cf = r["PV_factor"]
        actual_tt = r["counterface"]
        actual_env = r["test_type"]
        actual_hum = r["environment"] if is_float(r["environment"]) else r.get("humidity_pct", "")
        actual_temp = r.get("humidity_pct", "") if is_float(r["environment"]) else r.get("temperature_C", "")
        actual_fab = r.get("temperature_C", "") if r["temperature_C"].lower() in KNOWN_FABRICATIONS else "injection"
        actual_cof = r["fabrication"]
        
        r["PV_factor"] = ""
        r["counterface"] = actual_cf
        r["test_type"] = actual_tt
        r["environment"] = actual_env if actual_env in KNOWN_ENVIRONMENTS else "dry"
        r["humidity_pct"] = actual_hum if is_float(actual_hum) else ""
        r["temperature_C"] = actual_temp if is_float(actual_temp) else ""
        r["fabrication"] = actual_fab
        r["COF"] = actual_cof

    # 6. SHIFT where counterface landed in test_type, test_type in environment, etc.
    if r.get("test_type", "").lower() in KNOWN_COUNTERFACES and r.get("environment", "").lower() in KNOWN_TEST_TYPES:
        actual_cf = r["test_type"]
        actual_tt = r["environment"]
        actual_env = r["humidity_pct"] if r["humidity_pct"].lower() in KNOWN_ENVIRONMENTS else "dry"
        actual_temp = r["fabrication"] if is_float(r["fabrication"]) else r.get("temperature_C", "")
        actual_fab = r["COF"] if r["COF"].lower() in KNOWN_FABRICATIONS else "injection"
        actual_cof = r["wear_rate_mm3Nm"] if is_float(r["wear_rate_mm3Nm"]) else ""
        actual_wear = r["wear_volume_mm3"] if is_float(r["wear_volume_mm3"]) else ""
        actual_doi = r["extraction_method"] if (r["extraction_method"].startswith("10.") and "/" in r["extraction_method"]) else r.get("source_doi", "")
        actual_ext = r["confidence"] if r["confidence"].lower() in EXTRACTION_METHODS else r.get("extraction_method", "table")
        actual_conf = r["notes"] if r["notes"].lower() in CONFIDENCE_LEVELS else "high"
        
        r["counterface"] = actual_cf
        r["test_type"] = actual_tt
        r["environment"] = actual_env
        r["humidity_pct"] = ""
        r["temperature_C"] = actual_temp
        r["fabrication"] = actual_fab
        r["COF"] = actual_cof
        r["wear_rate_mm3Nm"] = actual_wear
        r["wear_volume_mm3"] = ""
        r["source_doi"] = actual_doi
        r["extraction_method"] = actual_ext
        r["confidence"] = actual_conf
        r["notes"] = ""

    # 7. TAIL SHIFT (DOI in contact_temp_C or mass_loss_mg)
    c_temp = r.get("contact_temp_C", "")
    m_loss = r.get("mass_loss_mg", "")
    doi = r.get("source_doi", "")
    ext = r.get("extraction_method", "")
    conf = r.get("confidence", "")
    notes = r.get("notes", "")

    if (m_loss.startswith("10.") and "/" in m_loss) or m_loss.startswith("http"):
        r["source_doi"] = m_loss
        r["mass_loss_mg"] = ""
        r["contact_temp_C"] = ""
        r["extraction_method"] = c_temp if c_temp.lower() in EXTRACTION_METHODS else "mixed"
        r["confidence"] = doi if doi.lower() in CONFIDENCE_LEVELS else "high"
        r["notes"] = f"{ext}; {notes}".strip("; ")
    elif (c_temp.startswith("10.") and "/" in c_temp) or c_temp.startswith("http"):
        r["source_doi"] = c_temp
        r["contact_temp_C"] = ""
        if doi.lower() in EXTRACTION_METHODS:
            r["extraction_method"] = doi
            if ext.lower() in CONFIDENCE_LEVELS:
                r["confidence"] = ext
                r["notes"] = f"{conf}; {notes}".strip("; ")
            else:
                r["confidence"] = "high"
                r["notes"] = f"{ext}; {notes}".strip("; ")
        elif doi.lower() in CONFIDENCE_LEVELS:
            r["confidence"] = doi
            r["extraction_method"] = "mixed"
            r["notes"] = f"{ext}; {notes}".strip("; ")

    r["paper_id"] = paper_id
    return r


def realign_dataframe(df: pd.DataFrame, paper_id: str | None = None) -> pd.DataFrame:
    """Run deterministic alignment across all rows of a DataFrame."""
    if paper_id is None:
        paper_id = ""
    rows = [realign_row(row.to_dict(), paper_id) for _, row in df.iterrows()]
    return pd.DataFrame(rows, columns=ALL_COLUMNS)



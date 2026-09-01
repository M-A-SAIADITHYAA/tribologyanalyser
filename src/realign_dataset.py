"""Deterministic, safe column realignment and repair for extracted PA6 tribology CSVs."""

from __future__ import annotations

from pathlib import Path
from typing import Any
import pandas as pd

from schema import ALL_COLUMNS
from validator import validate_csv
from merger import merge_all

PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_LLM_DIR = PROJECT_ROOT / "data" / "raw_llm"
VALIDATED_DIR = PROJECT_ROOT / "data" / "validated"

EXTRACTION_METHODS = {"table", "prose", "bar_chart", "line_graph", "mixed"}
CONFIDENCE_LEVELS = {"high", "medium", "low"}
MATERIAL_BASES = {"PA6", "PA66", "PA6-PA66"}
KNOWN_COUNTERFACES = {
    "steel", "bearing steel", "c45", "100cr6", "en31", "stainless steel",
    "sic", "sic paper", "sandpaper", "alumina", "al2o3", "cast-iron", "cast iron",
    "polymer", "pa6", "pa66", "other", "diamond"
}
KNOWN_TEST_TYPES = {"pod", "bor", "bop", "reciprocating", "thrust_washer", "pin-on-disc", "pin-on-disk", "block-on-ring", "block-on-plate", "scratch"}
KNOWN_ENVIRONMENTS = {"dry", "water", "humid", "lubricated", "ambient"}
KNOWN_FABRICATIONS = {"injection", "extrusion", "cast", "am", "3d printed", "compression", "machined", "fdm", "hot-press"}


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
    elif paper_id == "ABRASIVECFPA6" or r.get("paper_id") in {"unfilled", "CF"}:
        p_id = r.get("paper_id", "")
        mat_b = r.get("material_base", "")
        r["paper_id"] = "ABRASIVECFPA6"
        r["material_base"] = "PA6"
        r["glass_fiber_pct"] = "0"
        r["graphite_pct"] = "0"
        r["mos2_pct"] = "0"
        r["pa66_pct"] = "0"
        if p_id == "unfilled":
            r["pa6_pct"] = "100"
        elif p_id == "CF":
            cf_amt = float(mat_b) if is_float(mat_b) else 20.0
            other_ing = r.get("other_ingredients", "")
            other_wt = r.get("other_ingredients_wt_pct", "")
            if "PTFE" in other_ing or "15" in other_wt:
                r["other_ingredients"] = "CF; PTFE"
                r["other_ingredients_wt_pct"] = f"{int(cf_amt)}; 15"
                r["pa6_pct"] = str(int(100.0 - cf_amt - 15.0))
            else:
                r["other_ingredients"] = "CF"
                r["other_ingredients_wt_pct"] = str(int(cf_amt))
                r["pa6_pct"] = str(int(100.0 - cf_amt))

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
        actual_doi = r["extraction_method"] if r["extraction_method"].startswith("10.") else r.get("source_doi", "")
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


def realign_all_files():
    files = sorted(VALIDATED_DIR.glob("*_validated.csv"))
    print(f"Scanning and repairing {len(files)} validated CSV files...")
    
    repaired_count = 0
    for f in files:
        paper_id = f.name.replace("_validated.csv", "")
        raw_path = RAW_LLM_DIR / f"{paper_id}_llm.csv"
        source_path = raw_path if raw_path.exists() else f
        df = pd.read_csv(source_path, dtype=object, keep_default_na=False)
        
        repaired_df = realign_dataframe(df, paper_id)
        if raw_path.exists():
            repaired_df[ALL_COLUMNS].to_csv(raw_path, index=False)
        
        validate_csv(source_path if not raw_path.exists() else raw_path, paper_id, f)
        repaired_count += 1

    print(f"\nDone! Realigned {repaired_count} files.")
    print("Re-running master merger...")
    merge_all()


if __name__ == "__main__":
    realign_all_files()

"""Deterministic column realignment and repair for extracted PA6 tribology CSVs."""

from __future__ import annotations

import re
from pathlib import Path
import pandas as pd

from schema import ALL_COLUMNS, REQUIRED_COLUMNS
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
    "polymer", "pa6", "pa66", "other"
}
KNOWN_TEST_TYPES = {"pod", "bor", "bop", "reciprocating", "thrust_washer", "pin-on-disc", "pin-on-disk", "block-on-ring", "block-on-plate"}
KNOWN_ENVIRONMENTS = {"dry", "water", "humid", "lubricated", "ambient"}
KNOWN_FABRICATIONS = {"injection", "extrusion", "cast", "am", "3d printed", "compression", "machined", "fdm"}


def realign_row(row_dict: dict[str, str], paper_id: str) -> dict[str, str]:
    """Deterministically realign a single row if column shifts are detected."""
    r = {col: str(row_dict.get(col, "")).strip() for col in ALL_COLUMNS}

    # =========================================================================
    # 1. SPECIAL CASE: PMC2013 legacy format
    # =========================================================================
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
            gf_amt = float(mat_b) if mat_b.replace(".", "", 1).isdigit() else 15.0
            r["glass_fiber_pct"] = str(int(gf_amt))
            r["graphite_pct"] = "0"
            r["mos2_pct"] = "0"
            r["pa66_pct"] = "0"
            other_ing = r.get("other_ingredients", "")
            other_wt = r.get("other_ingredients_wt_pct", "")
            other_amt = float(other_wt) if other_wt.replace(".", "", 1).isdigit() else 0.0
            r["pa6_pct"] = str(int(100.0 - gf_amt - other_amt))

    # =========================================================================
    # 2. SPECIAL CASE: ABRASIVECFPA6 legacy format
    # =========================================================================
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
            cf_amt = float(mat_b) if mat_b.replace(".", "", 1).isdigit() else 20.0
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

    # =========================================================================
    # 3. SPECIAL CASE: KULKARNI2014 legacy format
    # =========================================================================
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

    # =========================================================================
    # 4. HEAD SHIFT (Missing paper_id column in LLM CSV)
    # e.g. CHEN2022, ZAGHLOUL2023, OZSARIKAYA2025, GRAF2026
    # =========================================================================
    pid = r.get("paper_id", "")
    mat_b = r.get("material_base", "")
    
    if pid in MATERIAL_BASES and (mat_b.replace(".", "", 1).isdigit() or mat_b in {"0", "15", "20", "25", "30", "40", "50", "60", "70", "75", "80", "90", "100"}):
        correct_base = pid
        raw_vals = [r[c] for c in ALL_COLUMNS]
        new_vals = [paper_id, correct_base] + raw_vals[1:-1]
        for col_name, val in zip(ALL_COLUMNS, new_vals):
            r[col_name] = val

    # =========================================================================
    # 5. MIDDLE SHIFT into PV_factor
    # e.g. GRAF2026, SICPA62020, UNAL2023, ZAGHLOUL2023b, BIRYUKOV2023
    # =========================================================================
    pv_val = r.get("PV_factor", "").lower()
    cf_val = r.get("counterface", "").lower()
    tt_val = r.get("test_type", "").lower()

    if pv_val in KNOWN_COUNTERFACES and (cf_val in KNOWN_TEST_TYPES or tt_val in KNOWN_ENVIRONMENTS):
        actual_counterface = r["PV_factor"]
        actual_test_type = r["counterface"]
        actual_environment = r["test_type"]
        actual_humidity = r["environment"] if r["environment"].replace(".", "", 1).isdigit() else r.get("humidity_pct", "")
        actual_temp = r.get("humidity_pct", "") if r["environment"].replace(".", "", 1).isdigit() else r.get("temperature_C", "")
        actual_fab = r.get("temperature_C", "") if r["temperature_C"].lower() in KNOWN_FABRICATIONS else r.get("fabrication", "")
        actual_cof = r.get("fabrication", "") if r["fabrication"].replace(".", "", 1).isdigit() else r.get("COF", "")
        
        r["PV_factor"] = ""
        r["counterface"] = actual_counterface
        r["test_type"] = actual_test_type
        r["environment"] = actual_environment if actual_environment in KNOWN_ENVIRONMENTS else "dry"
        r["humidity_pct"] = actual_humidity if actual_humidity.replace(".", "", 1).isdigit() else ""
        r["temperature_C"] = actual_temp if actual_temp.replace(".", "", 1).isdigit() else "23"
        r["fabrication"] = actual_fab if actual_fab in KNOWN_FABRICATIONS else "injection"
        if actual_cof.replace(".", "", 1).isdigit():
            r["COF"] = actual_cof

    # =========================================================================
    # =========================================================================
    # 6. TAIL SHIFT (DOI placed in mass_loss_mg or contact_temp_C)
    # =========================================================================
    m_loss = r.get("mass_loss_mg", "")
    c_temp = r.get("contact_temp_C", "")
    doi = r.get("source_doi", "")
    ext = r.get("extraction_method", "")
    conf = r.get("confidence", "")
    notes = r.get("notes", "")

    # Subcase A: DOI landed in mass_loss_mg (shifted 2 columns left)
    if m_loss.startswith("10.") or m_loss.startswith("http"):
        r["source_doi"] = m_loss
        r["mass_loss_mg"] = ""
        actual_ext = c_temp if c_temp.lower() in EXTRACTION_METHODS else "mixed"
        actual_conf = doi if doi.lower() in CONFIDENCE_LEVELS else "high"
        actual_note = ext if ext else ""
        r["contact_temp_C"] = ""
        r["extraction_method"] = actual_ext
        r["confidence"] = actual_conf
        r["notes"] = f"{actual_note}; {notes}".strip("; ")

    # Subcase B: DOI landed in contact_temp_C (shifted 1 column left)
    elif c_temp.startswith("10.") or c_temp.startswith("http") or "doi" in c_temp.lower():
        r["source_doi"] = c_temp
        r["contact_temp_C"] = ""
        if doi.lower() in EXTRACTION_METHODS:
            r["extraction_method"] = doi
            if ext.lower() in CONFIDENCE_LEVELS:
                r["confidence"] = ext
                if conf:
                    r["notes"] = f"{conf}; {notes}" if notes and conf != notes else (conf or notes)
            else:
                r["confidence"] = "high"
                if ext:
                    r["notes"] = f"{ext}; {notes}" if notes and ext != notes else (ext or notes)
        elif doi.lower() in CONFIDENCE_LEVELS:
            r["confidence"] = doi
            r["extraction_method"] = "mixed"
            if ext:
                r["notes"] = f"{ext}; {notes}".strip("; ")
    # =========================================================================
    # 7. TAIL SHIFT (source_doi contains extraction method and notes in confidence)
    # =========================================================================
    if r.get("source_doi", "").lower() in EXTRACTION_METHODS and r.get("extraction_method", "").lower() in CONFIDENCE_LEVELS:
        method = r["source_doi"]
        confidence = r["extraction_method"]
        note_text = r.get("confidence", "")
        r["source_doi"] = ""
        r["extraction_method"] = method
        r["confidence"] = confidence
        if note_text:
            r["notes"] = f"{note_text}; {r.get('notes', '')}".rstrip("; ")

    r["paper_id"] = paper_id
    return r


def realign_all_files():
    files = sorted(VALIDATED_DIR.glob("*_validated.csv"))
    print(f"Scanning and repairing {len(files)} validated CSV files...")
    
    repaired_count = 0
    for f in files:
        paper_id = f.name.replace("_validated.csv", "")
        df = pd.read_csv(f, dtype=object, keep_default_na=False)
        
        repaired_rows = []
        for _, row in df.iterrows():
            repaired_rows.append(realign_row(row.to_dict(), paper_id))
            
        repaired_df = pd.DataFrame(repaired_rows, columns=ALL_COLUMNS)
        # Re-save raw cleaned version
        raw_path = RAW_LLM_DIR / f"{paper_id}_llm.csv"
        repaired_df[ALL_COLUMNS].to_csv(raw_path, index=False)
        # Re-run validator
        validate_csv(raw_path, paper_id, f)
        repaired_count += 1
        print(f"  [PROCESSED] {paper_id}")

    print(f"\nDone! Realigned {repaired_count} files.")
    print("Re-running master merger...")
    merge_all()

if __name__ == "__main__":
    realign_all_files()

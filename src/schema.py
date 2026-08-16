"""Canonical schema for the PA6 / PA66 tribology dataset."""

from __future__ import annotations

ALL_COLUMNS = [
    "paper_id",
    "material_base",
    "filler_1_type",
    "filler_1_wt_pct",
    "filler_2_type",
    "filler_2_wt_pct",
    "filler_3_type",
    "filler_3_wt_pct",
    "load_N",
    "speed_ms",
    "distance_m",
    "PV_factor",
    "counterface",
    "test_type",
    "environment",
    "humidity_pct",
    "temperature_C",
    "fabrication",
    "COF",
    "wear_rate_mm3Nm",
    "wear_volume_mm3",
    "mass_loss_mg",
    "contact_temp_C",
    "source_doi",
    "extraction_method",
    "confidence",
    "notes",
]

REQUIRED_COLUMNS = [
    "paper_id",
    "material_base",
    "filler_1_type",
    "load_N",
    "speed_ms",
    "counterface",
    "test_type",
    "environment",
    "extraction_method",
    "confidence",
]

FILLER_TYPES = [
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
]

# Blank is intentionally permitted only for optional categorical fields.  Values
# such as paper_id, source_doi, and notes are free text rather than categories.
ALLOWED_VALUES = {
    "material_base": ["PA6", "PA66", "PA6-PA66"],
    "filler_1_type": FILLER_TYPES,
    "filler_2_type": ["", *FILLER_TYPES],
    "filler_3_type": ["", *FILLER_TYPES],
    "counterface": ["steel", "PA6", "alumina", "cast-iron", "other"],
    "test_type": ["PoD", "BoR", "BoP"],
    "environment": ["dry", "humid", "water", "lubricated"],
    "fabrication": ["", "injection", "extrusion", "AM", "cast"],
    "extraction_method": ["table", "prose", "bar_chart", "line_graph", "mixed"],
    "confidence": ["high", "medium", "low"],
}

# Ranges are broad enough to retain unusual but plausible reported conditions;
# blank optional values are allowed by the validator.
NUMERIC_RANGES = {
    "filler_1_wt_pct": (0, 60),
    "filler_2_wt_pct": (0, 60),
    "filler_3_wt_pct": (0, 60),
    "load_N": (1, 500),
    "speed_ms": (0.01, 5),
    "distance_m": (0, 100000),
    "PV_factor": (0, None),
    "humidity_pct": (0, 100),
    "temperature_C": (-20, 300),
    "COF": (0.01, 0.9),
    "wear_rate_mm3Nm": (1e-8, 1e-2),
    "wear_volume_mm3": (0, None),
    "mass_loss_mg": (0, None),
    "contact_temp_C": (-20, 1000),
}


def get_schema_description() -> str:
    """Return an unambiguous, prompt-ready description of the dataset schema."""
    column_lines = []
    for column in ALL_COLUMNS:
        if column in ALLOWED_VALUES:
            column_lines.append(f"- {column}: one of {', '.join(repr(v) for v in ALLOWED_VALUES[column])}")
        elif column in NUMERIC_RANGES:
            low, high = NUMERIC_RANGES[column]
            maximum = "unbounded" if high is None else str(high)
            column_lines.append(f"- {column}: numeric; permitted range {low} to {maximum}; blank if not stated")
        else:
            column_lines.append(f"- {column}: free-text string; blank if not stated")

    return (
        "Return CSV using exactly this ordered header:\n"
        + ",".join(ALL_COLUMNS)
        + "\n\nColumn rules:\n"
        + "\n".join(column_lines)
        + "\n\nRequired non-empty columns: "
        + ", ".join(REQUIRED_COLUMNS)
        + ". Values must be explicitly reported; leave unknown optional fields blank."
    )

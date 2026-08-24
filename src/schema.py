"""Canonical schema for the PA6 / PA66 tribology dataset.

The dataset records a formulation directly rather than using generic filler slots.
The four requested formulation fields are always present in the CSV header:
``pa6_pct``, ``glass_fiber_pct``, ``graphite_pct``, and ``mos2_pct``.
"""

from __future__ import annotations

COMPOSITION_COLUMNS = [
    "pa6_pct",
    "glass_fiber_pct",
    "graphite_pct",
    "mos2_pct",
]

ALL_COLUMNS = [
    "paper_id",
    "material_base",
    *COMPOSITION_COLUMNS,
    "pa66_pct",
    "other_ingredients",
    "other_ingredients_wt_pct",
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

# A row is usable for the COF dataset only when its source-backed formulation and
# measured COF are available. Test settings remain valuable metadata but are not
# required for acceptance, which keeps validation intentionally lightweight.
REQUIRED_COLUMNS = ["paper_id", *COMPOSITION_COLUMNS, "COF"]

ALLOWED_VALUES = {
    "material_base": ["PA6", "PA66", "PA6-PA66"],
    "counterface": ["steel", "PA6", "alumina", "cast-iron", "other"],
    "test_type": ["PoD", "BoR", "BoP"],
    "environment": ["dry", "humid", "water", "lubricated"],
    "fabrication": ["", "injection", "extrusion", "AM", "cast"],
    "extraction_method": ["table", "prose", "bar_chart", "line_graph", "mixed"],
    "confidence": ["high", "medium", "low"],
}

# Composition and COF are validation gates. The other ranges produce warnings,
# so incomplete or unusual test metadata does not discard a valid COF row.
NUMERIC_RANGES = {
    "pa6_pct": (0, 100),
    "pa66_pct": (0, 100),
    "glass_fiber_pct": (0, 100),
    "graphite_pct": (0, 100),
    "mos2_pct": (0, 100),
    "load_N": (0, None),
    "speed_ms": (0, None),
    "distance_m": (0, 100000),
    "PV_factor": (0, None),
    "humidity_pct": (0, 100),
    "temperature_C": (-100, 500),
    # A coefficient is dimensionless and non-negative; values outside this broad
    # physical envelope usually indicate a shifted CSV field (for example a wear
    # rate or load copied into COF), not an experimental friction coefficient.
    "COF": (0.01, 3),
    "wear_rate_mm3Nm": (0, None),
    "wear_volume_mm3": (0, None),
    "mass_loss_mg": (0, None),
    "contact_temp_C": (-100, 1500),
}


def get_schema_description() -> str:
    """Return a prompt-ready description of the formulation-first schema."""
    column_lines = []
    for column in ALL_COLUMNS:
        if column in ALLOWED_VALUES:
            column_lines.append(f"- {column}: one of {', '.join(repr(v) for v in ALLOWED_VALUES[column])}; blank if unstated")
        elif column in NUMERIC_RANGES:
            low, high = NUMERIC_RANGES[column]
            maximum = "unbounded" if high is None else str(high)
            requirement = "required" if column in REQUIRED_COLUMNS else "blank if unstated"
            column_lines.append(f"- {column}: numeric; permitted range {low} to {maximum}; {requirement}")
        else:
            column_lines.append(f"- {column}: free-text string; blank if unstated")

    return (
        "Return CSV using exactly this ordered header:\n"
        + ",".join(ALL_COLUMNS)
        + "\n\nFormulation rules:\n"
        "- pa6_pct, glass_fiber_pct, graphite_pct, and mos2_pct are the required formulation fields.\n"
        "- Write 0 for each of those ingredients when it is absent from a formulation.\n"
        "- Use explicit reported mass percentages only. Derive pa6_pct as 100 minus all explicitly stated ingredients only when the full formulation is stated.\n"
        "- Never invent a composition percentage. If a present ingredient has no reported amount, leave that field blank and explain in notes; the row will be retained for review but is not usable.\n"
        "- Keep any non-GF/non-graphite/non-MoS2 ingredient in other_ingredients and its stated percentage(s) in other_ingredients_wt_pct.\n"
        "- COF is required. Omit rows with no explicitly reported COF; never infer or fabricate it.\n\n"
        "Column rules:\n"
        + "\n".join(column_lines)
        + "\n\nRequired non-empty columns: "
        + ", ".join(REQUIRED_COLUMNS)
        + "."
    )

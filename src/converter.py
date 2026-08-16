"""Unit conversion helpers for values reported in tribology papers."""

from __future__ import annotations

import math
from typing import Any

import pandas as pd


def _announce(name: str, source: Any, result: float, unit: str) -> float:
    print(f"{name}: {source} -> {result:.8g} {unit}")
    return result


def kgf_to_N(kgf: float) -> float:
    """Convert kilogram-force to Newtons."""
    return _announce("kgf_to_N", kgf, float(kgf) * 9.81, "N")


def rpm_to_ms(rpm: float, disc_diameter_mm: float) -> float:
    """Convert disc rotational speed to peripheral sliding speed in m/s."""
    result = math.pi * float(disc_diameter_mm) * float(rpm) / 60000
    return _announce("rpm_to_ms", f"{rpm} rpm at {disc_diameter_mm} mm", result, "m/s")


def vol_to_wt(vol_pct: float, filler_density: float, matrix_density: float = 1.14) -> float:
    """Convert filler volume percent to weight percent using component densities."""
    vf = float(vol_pct) / 100
    result = (vf * float(filler_density) / (vf * float(filler_density) + (1 - vf) * matrix_density)) * 100
    return _announce("vol_to_wt", f"{vol_pct} vol%", result, "wt%")


def compute_PV(load_N: float, speed_ms: float, contact_area_mm2: float) -> tuple[float, float]:
    """Return contact pressure (MPa) and pressure-velocity factor (MPa·m/s)."""
    if float(contact_area_mm2) <= 0:
        raise ValueError("contact_area_mm2 must be greater than zero")
    pressure_mpa = float(load_N) / float(contact_area_mm2)
    pv_factor = pressure_mpa * float(speed_ms)
    print(
        "compute_PV: "
        f"load={load_N} N, speed={speed_ms} m/s, area={contact_area_mm2} mm² "
        f"-> pressure={pressure_mpa:.8g} MPa, PV={pv_factor:.8g} MPa·m/s"
    )
    return pressure_mpa, pv_factor


def wear_volume_to_rate(wear_volume_mm3: float, load_N: float, distance_m: float) -> float:
    """Convert worn volume to specific wear rate in mm³/(N·m)."""
    denominator = float(load_N) * float(distance_m)
    if denominator <= 0:
        raise ValueError("load_N and distance_m must produce a positive denominator")
    return _announce("wear_volume_to_rate", f"{wear_volume_mm3} mm³", float(wear_volume_mm3) / denominator, "mm³/(N·m)")


def mass_loss_to_volume(mass_loss_mg: float, density_g_cm3: float = 1.14) -> float:
    """Convert mass loss in mg to volume loss in mm³."""
    if float(density_g_cm3) <= 0:
        raise ValueError("density_g_cm3 must be greater than zero")
    # 1 mg / (g cm⁻³) has the same numerical value in mm³.
    return _announce("mass_loss_to_volume", f"{mass_loss_mg} mg", float(mass_loss_mg) / float(density_g_cm3), "mm³")


def mass_loss_to_wear_rate(
    mass_loss_mg: float,
    load_N: float,
    distance_m: float,
    density_g_cm3: float = 1.14,
) -> float:
    """Convert mass loss directly to specific wear rate."""
    volume = mass_loss_to_volume(mass_loss_mg, density_g_cm3)
    result = wear_volume_to_rate(volume, load_N, distance_m)
    print(f"mass_loss_to_wear_rate result: {result:.8g} mm³/(N·m)")
    return result


def wear_per_distance_to_rate(
    wear_mg_per_km: float, load_N: float, density_g_cm3: float = 1.14
) -> float:
    """Convert mg/km wear to specific wear rate in mm³/(N·m)."""
    volume_mm3_per_km = mass_loss_to_volume(wear_mg_per_km, density_g_cm3)
    if float(load_N) <= 0:
        raise ValueError("load_N must be greater than zero")
    result = volume_mm3_per_km / (float(load_N) * 1000)
    return _announce("wear_per_distance_to_rate", f"{wear_mg_per_km} mg/km", result, "mm³/(N·m)")


def _has_unit_note(notes: Any, unit: str) -> bool:
    return unit.lower() in str(notes or "").lower()


def auto_convert_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """Apply transparent, conservative conversions inferred from column names/notes.

    It never guesses a disc diameter or material density.  Every changed value is
    printed and a ``conversion_report`` is stored in ``df.attrs`` for callers.
    """
    converted = df.copy()
    report: list[str] = []

    def note(message: str) -> None:
        report.append(message)
        print(message)

    if "load_kgf" in converted.columns:
        converted["load_N"] = converted["load_kgf"].apply(
            lambda value: kgf_to_N(value) if pd.notna(value) and str(value).strip() else value
        )
        note("Converted load_kgf to load_N.")
    elif "load_N" in converted.columns and "notes" in converted.columns:
        changed = 0
        for idx, value in converted["load_N"].items():
            if pd.notna(value) and str(value).strip() and _has_unit_note(converted.at[idx, "notes"], "kgf"):
                converted.at[idx, "load_N"] = kgf_to_N(float(value))
                changed += 1
        if changed:
            note(f"Converted {changed} load_N value(s) marked as kgf in notes.")

    if "speed_rpm" in converted.columns:
        diameter_col = next((c for c in ("disc_diameter_mm", "disc_dia_mm") if c in converted.columns), None)
        if diameter_col:
            converted["speed_ms"] = converted.apply(
                lambda row: rpm_to_ms(row["speed_rpm"], row[diameter_col])
                if pd.notna(row["speed_rpm"]) and pd.notna(row[diameter_col])
                else row.get("speed_ms", pd.NA),
                axis=1,
            )
            note(f"Converted speed_rpm to speed_ms using {diameter_col}.")
        else:
            note("Skipped speed_rpm conversion: disc_diameter_mm is unavailable.")

    if {"load_N", "speed_ms", "contact_area_mm2"}.issubset(converted.columns):
        if "PV_factor" not in converted.columns:
            converted["PV_factor"] = pd.NA
        count = 0
        for idx, row in converted.iterrows():
            if (
                pd.isna(row.get("PV_factor"))
                and pd.notna(row.get("load_N"))
                and pd.notna(row.get("speed_ms"))
                and pd.notna(row.get("contact_area_mm2"))
            ):
                _, pv_factor = compute_PV(row["load_N"], row["speed_ms"], row["contact_area_mm2"])
                converted.at[idx, "PV_factor"] = pv_factor
                count += 1
        if count:
            note(f"Computed PV_factor from load_N, speed_ms, and contact_area_mm2 for {count} row(s).")

    for filler_number in (1, 2, 3):
        vol_column = f"filler_{filler_number}_vol_pct"
        density_column = f"filler_{filler_number}_density_g_cm3"
        weight_column = f"filler_{filler_number}_wt_pct"
        if vol_column in converted.columns and density_column in converted.columns:
            converted[weight_column] = converted.apply(
                lambda row: vol_to_wt(row[vol_column], row[density_column])
                if pd.notna(row[vol_column]) and pd.notna(row[density_column])
                else row.get(weight_column, pd.NA),
                axis=1,
            )
            note(f"Converted {vol_column} to {weight_column}.")

    if {"wear_volume_mm3", "load_N", "distance_m"}.issubset(converted.columns):
        if "wear_rate_mm3Nm" not in converted.columns:
            converted["wear_rate_mm3Nm"] = pd.NA
        count = 0
        for idx, row in converted.iterrows():
            if (
                pd.isna(row.get("wear_rate_mm3Nm"))
                and pd.notna(row.get("wear_volume_mm3"))
                and pd.notna(row.get("load_N"))
                and pd.notna(row.get("distance_m"))
            ):
                converted.at[idx, "wear_rate_mm3Nm"] = wear_volume_to_rate(
                    row["wear_volume_mm3"], row["load_N"], row["distance_m"]
                )
                count += 1
        if count:
            note(f"Converted wear volume to wear rate for {count} row(s).")

    if {"mass_loss_mg", "load_N", "distance_m"}.issubset(converted.columns):
        if "wear_rate_mm3Nm" not in converted.columns:
            converted["wear_rate_mm3Nm"] = pd.NA
        count = 0
        for idx, row in converted.iterrows():
            if (
                pd.isna(row.get("wear_rate_mm3Nm"))
                and pd.notna(row.get("mass_loss_mg"))
                and pd.notna(row.get("load_N"))
                and pd.notna(row.get("distance_m"))
            ):
                converted.at[idx, "wear_rate_mm3Nm"] = mass_loss_to_wear_rate(
                    row["mass_loss_mg"], row["load_N"], row["distance_m"]
                )
                count += 1
        if count:
            note(f"Converted mass loss to wear rate for {count} row(s).")

    if {"wear_mg_per_km", "load_N"}.issubset(converted.columns):
        if "wear_rate_mm3Nm" not in converted.columns:
            converted["wear_rate_mm3Nm"] = pd.NA
        count = 0
        for idx, row in converted.iterrows():
            if (
                pd.isna(row.get("wear_rate_mm3Nm"))
                and pd.notna(row.get("wear_mg_per_km"))
                and pd.notna(row.get("load_N"))
            ):
                converted.at[idx, "wear_rate_mm3Nm"] = wear_per_distance_to_rate(
                    row["wear_mg_per_km"], row["load_N"]
                )
                count += 1
        if count:
            note(f"Converted wear_mg_per_km to wear rate for {count} row(s).")

    if not report:
        note("No automatic conversions were applied.")
    converted.attrs["conversion_report"] = report
    print("=== Conversion Report Complete ===")
    return converted

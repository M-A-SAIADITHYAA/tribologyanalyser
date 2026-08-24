# PA6 Tribology Data Extraction System

This project builds a machine-learning-ready dataset of PA6, PA66, and PA6–PA66 composite tribology tests reported in research papers. One row represents one experimental condition and captures its complete reported formulation, friction (COF), wear, processing, and test conditions. The pipeline sends full PDFs directly to Gemini 3.6 Flash through Google's current `google-genai` Python SDK, validates every extracted row, and routes complex line graphs to WebPlotDigitizer for manual digitization.

## Setup

```bash
pip install -r requirements.txt
```

Install Poppler for the figure-saving step (Gemini extraction itself uploads PDFs natively and does not require Poppler):

```bash
# Ubuntu
sudo apt install poppler-utils

# macOS
brew install poppler

# Windows: download from https://github.com/oschwartz10612/poppler-windows
```

Copy `.env.example` to `.env` and insert a Google AI Studio API key:

```bash
GEMINI_API_KEY=your_key_here
```

Create/manage keys in [Google AI Studio](https://aistudio.google.com). The extractor uses `gemini-3.6-flash` with an 8192-token response limit. Gemini 3.6 Flash does not support the former explicit temperature setting, so the SDK uses the model default. Do not commit `.env`.

## Workflow

1. Add a PDF as `papers/pdfs/PAPERID.pdf`.
2. Extract one paper:

   ```bash
   python src/extractor.py papers/pdfs/PAPERID.pdf PAPERID
   ```

   Or process all available PDFs:

   ```bash
   python src/extractor.py --all
   ```

3. Review `data/raw_llm/PAPERID_llm.csv` and the annotated `data/validated/PAPERID_validated.csv`.
4. Inspect `papers/figures/` for saved line-graph pages. Read each matching `PAPERID_fig_pgN_context.txt`, digitize it in [WebPlotDigitizer](https://automeris.io/WebPlotDigitizer/), and save rows as `data/raw_manual/PAPERID_manual.csv` using the same header.
5. Merge all passing LLM and manual rows:

   ```bash
   python src/merger.py
   ```

6. Use `data/processed/master_dataset.csv` for analysis/modeling.

The figure scanner may also be run independently:

```bash
python src/figure_saver.py papers/pdfs/PAPERID.pdf PAPERID
```

## Outputs and audit trail

- `papers/index.csv` tracks every planned paper (`pending`, `done`, or `failed`).
- `logs/PAPERID_context.json` stores paper-wide conditions inferred from explicitly stated methods.
- `logs/PAPERID_manual_needed.csv` contains line-graph rows marked `SAVE_FOR_MANUAL`.
- `logs/extraction_log.csv` records each extraction attempt.
- Uploaded Gemini Files API PDFs are deleted in a `finally` block after processing to avoid storage buildup.

Gemini's free tier is commonly limited to 15 requests/minute; the pipeline waits four seconds between extraction calls, waits three seconds between batch papers, and backs off 30/60/120 seconds on 429 responses. Confirm the current Google quota in your own AI Studio account before a large run.

## Column reference

| Column | Meaning / encoding |
| --- | --- |
| `paper_id` | `FIRSTAUTHORYEAR` identifier, e.g. `UNAL2012` |
| `material_base` | `PA6`, `PA66`, or `PA6-PA66` |
| `pa6_pct` | PA6 mass percentage in the reported formulation; required |
| `glass_fiber_pct` | Glass-fiber mass percentage; required and `0` when absent |
| `graphite_pct` | Graphite mass percentage; required and `0` when absent |
| `mos2_pct` | MoS₂ mass percentage; required and `0` when absent |
| `pa66_pct` | PA66 mass percentage, retained to represent PA66 formulations accurately |
| `other_ingredients` | Other stated ingredients, such as PTFE, carbon fiber, wax, or GO |
| `other_ingredients_wt_pct` | Matching stated percentages for `other_ingredients`, separated with semicolons if needed |
| `load_N` | Applied normal load, standardized to N |
| `speed_ms` | Sliding speed, standardized to m/s |
| `distance_m` | Sliding distance in m; blank if unstated |
| `PV_factor` | Derived pressure × velocity; blank without contact area |
| `counterface` | `steel`, `PA6`, `alumina`, `cast-iron`, or `other` |
| `test_type` | `PoD`, `BoR`, or `BoP` |
| `environment` | `dry`, `humid`, `water`, or `lubricated` |
| `humidity_pct` | Relative humidity if reported |
| `temperature_C` | Ambient test temperature if reported |
| `fabrication` | `injection`, `extrusion`, `AM`, `cast`, or blank |
| `COF` | Experimentally reported steady-state coefficient of friction; required for a usable row |
| `wear_rate_mm3Nm` | Specific wear rate in mm³/(N·m) |
| `wear_volume_mm3` | Worn volume where directly reported |
| `mass_loss_mg` | Mass loss where directly reported |
| `contact_temp_C` | Measured contact temperature |
| `source_doi` | DOI or source URL |
| `extraction_method` | `table`, `prose`, `bar_chart`, `line_graph`, or `mixed` |
| `confidence` | `high`, `medium`, or `low` |
| `notes` | Original units, unusual conditions, and manual-review cues |

## Validation and confidence

Run a standalone validation with:

```bash
python src/validator.py data/raw_llm/UNAL2012_llm.csv UNAL2012
```

Validation requires `paper_id`, `pa6_pct`, `glass_fiber_pct`, `graphite_pct`, `mos2_pct`, and a reported numeric `COF`. A reinforcement percentage of `0` is valid and expected when that ingredient is absent. Test-condition metadata and wear data are retained but generate warnings rather than rejecting an otherwise usable COF row. Passing and failing rows are retained with `validation_status`, `validation_notes`, and `validation_warnings`; failures are never silently discarded.

The project no longer uses `filler_1_*`, `filler_2_*`, or `filler_3_*` fields. To migrate an older extraction set and revalidate it, run:

```bash
python src/migrate_composition.py
python src/merger.py
```

The migration writes `0` for tracked ingredients that were absent in the legacy formulation. It does not invent a percentage for a reported ingredient whose amount is unknown; those rows remain in the validated review file with a failure note instead of entering the usable COF dataset.

- **High** — an explicit table entry or sentence.
- **Medium** — a clearly readable bar chart.
- **Low** — a readable line-graph plateau estimate.

Do not estimate unreadable values. Put `SAVE_FOR_MANUAL` in `notes`; the extractor will preserve the request in the manual-review log and exclude that placeholder row from the machine dataset until digitized.

# Creative Production Run SOP

## Objective

Turn approved Content System + MUSE briefs into export-ready Instagram asset packages.

## Default Sequence

### 1. Load Context

Read:

- account/brand context,
- content brief,
- MUSE copy brief,
- format brief,
- `playbooks/instagram-creative-production-layer.md`,
- relevant template from `templates/`.

### 2. Lock Strategy Before Production

Confirm or label assumptions for:

- objective,
- audience temperature,
- content pillar,
- hook,
- CTA/TTA,
- metric target,
- production constraints.

Do not let media generation rewrite these fields.

### 3. Build Asset Manifest

If the asset uses existing photos, screenshots, logos, product visuals, testimonials, charts, stock assets, or public images, create/update an asset manifest before rendering.

Record:

- local path,
- source URL or source note,
- usage risk,
- owner/license assumption,
- transformations needed,
- final slide/post/story usage.

Use `templates/asset-manifest.md`.

### 4. Select Backend Route

Use this default routing:

- Carousel/static/cover with exact text: local deterministic renderer.
- Generated background or B-roll: inference.sh or optional paid backend.
- Final text, subtitles, crop, resizing: deterministic renderer or FFmpeg.
- Premium AI video: only when the concept benefits from it and budget exists.

### 5. Build Assets

Create:

- final media assets,
- caption file,
- hashtags file,
- alt text file,
- publish notes,
- metadata,
- QA report.

### 6. QA Before Handoff

Check:

- dimensions,
- safe zones,
- mobile readability,
- brand fit,
- CTA/TTA,
- subtitles where needed,
- no unsupported claims,
- no unwanted watermark,
- file naming,
- asset usage/source risk recorded,
- export manifest complete.

### 7. Handoff To Publishing Layer

Provide:

- export folder path,
- posting window in WIB,
- engagement-window reminder,
- manual posting/scheduler/API notes,
- QA status.

### 8. Capture Learning After Metrics

Update experiment/template notes with:

- visual hook result,
- cover performance,
- template performance,
- production time/cost,
- backend quality notes,
- next iteration.

## Stop Conditions

Stop and mark `Production Blocker` if:

- brand kit is missing for client-facing work,
- claims cannot be verified,
- required product/person visual reference is missing,
- the requested format cannot meet Instagram dimensions,
- paid backend credentials/budget are required but unavailable,
- required asset source/usage risk is high and no approved substitute exists.

# InstaGrow Local Creative Renderer

This directory is reserved for the executable local renderer that will turn machine-readable creative briefs into Instagram-ready assets.

## Target Stack

```text
Node.js
Playwright
HTML/CSS templates
JSON input
local asset folders
```

## Why Local Rendering First

Use local deterministic rendering for:

- text-heavy carousels,
- resource drop / lead magnet posts,
- product posters,
- product benefit carousels,
- story promo assets,
- Reel covers.

This avoids per-image generation cost and keeps typography readable.

## Planned Command

```bash
node renderers/render.js templates/local-renderer-input.example.json
```

Expected output:

```text
exports/{content_id}/
├── assets/
│   ├── slide-01.png
│   ├── slide-02.png
│   └── slide-03.png
├── asset_manifest.json
├── caption.txt
├── alt_text.txt
├── publish_notes.md
├── qa_report.md
└── metadata.json
```

## First Template Families

```text
clean-narrative-carousel
resource-drop-lead-magnet
product-poster
product-benefit-carousel
```

## Boundary

This renderer is an execution runtime for the Creative Producer. It must not decide strategy, rewrite hooks, invent claims, or publish content. Strategy and copy come from Research + Content + MUSE handoff.

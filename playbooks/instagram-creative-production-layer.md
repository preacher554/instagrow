# Instagram Creative Production Layer

## Purpose

The Creative Production Layer turns Content System outputs into publish-ready Instagram assets.

It does **not** decide the strategy, audience, pillar, offer, or copy angle. Those belong to the Research Layer, Content System Layer, and MUSE Copywriting Engine. This layer owns asset finding, asset normalization, fabrication, rendering, editing direction, export packaging, and asset QA.

For v1, these are capabilities inside the Creative Producer, not separate agents:

```text
Asset Finder -> Asset Normalizer -> Creative Composer / Renderer -> Creative QA
```

```text
Research Layer
  ↓ validated signals, audience language, opportunity score
Content System Layer + MUSE
  ↓ pillar, format, hook, script/caption, TTA/CTA, media direction
Creative Production Layer
  ↓ visuals, video/audio assets, overlays, covers, subtitles, export package, QA report
Publishing Layer
  ↓ schedule/post/manual package/API handoff
Analytics + Learning Layer
  ↓ metric result, creative pattern, template update
```

## Strategic Boundary

```text
InstaGrow = brain, production orchestration, QA, and learning loop.
Media backend = execution runtime.
```

Never let a media generator decide the strategic angle. Media tools may propose visual variations, but InstaGrow must preserve:

- audience fit,
- topic-cluster clarity,
- MUSE hook logic,
- conversion path,
- brand consistency,
- measurement hypothesis.

## Recommended Backend Modes

### 1. Local Mode — Free Deterministic Factory

Use for MVP, repeatable carousels, quote cards, covers, Story cards, and any asset where text precision matters.

Default tools:

- Node.js + Playwright + HTML/CSS templates for static PNG/JPG rendering.
- HTML/CSS/SVG templates.
- Canvas, Sharp, or Pillow when useful.
- FFmpeg for video assembly, resizing, subtitles, and contact sheets.
- Local folder export with deterministic filenames.

Best for:

- carousel slides,
- Reel covers,
- quote/proof/static posts,
- Story frames,
- text overlays,
- branded templates,
- fast low-cost iteration.

### 2. inference.sh Mode — Premium AI Media Runtime

Use as the primary paid media backend when credentials and budget are available.

Reference source:

- `https://github.com/inference-sh/skills`

Relevant skill families observed:

- `guides/social/social-media-carousel`
- `guides/content/ai-content-pipeline`
- `guides/content/content-repurposing`
- `tools/image/ai-image-generation`
- `tools/image/background-removal`
- `tools/image/image-upscaling`
- `tools/video/ai-video-generation`
- `tools/video/image-to-video`
- `tools/video/google-veo`
- `tools/video/seedance`
- `tools/video/remotion-render`
- `tools/audio/text-to-speech`
- `tools/audio/elevenlabs-tts`

Useful app families:

- video: `google/veo-*`, `bytedance/seedance-*`, `alibaba/happyhorse-*`, `pruna/p-video`, `xai/grok-imagine-video`
- image: `openai/gpt-image-*`, `google/gemini-*-image`, `falai/flux-*`, `pruna/p-image`, `xai/grok-imagine-image`
- utility: `infsh/html-to-image`, `infsh/remotion-render`, `infsh/media-merger`, `infsh/stitch-images`
- audio: `infsh/kokoro-tts`, ElevenLabs-related skills where configured

Best for:

- AI B-roll generation,
- image-to-video concepts,
- background/scene generation,
- avatar/talking-head experiments,
- upscale/background removal,
- hosted HTML-to-image rendering,
- Remotion-based video rendering,
- media merging.

### 3. Optional Generative Backend Mode

EachLabs or other media-generation providers may be added later as optional adapters.

Use them for:

- lifestyle/product visuals,
- campaign visual variations,
- background generation,
- Reel cover concepts,
- 9:16 Story/Reel visual drafts.

Rule: generated images/video are raw material. Final text overlays and brand-critical claims should be rendered deterministically.

## Eight Production Pillars

### 1. Creative Brief Normalization

Convert Content System output into a production brief.

Required fields:

- content ID,
- account/brand,
- pillar,
- audience temperature,
- objective,
- format,
- hook,
- script/caption source,
- TTA/CTA,
- visual direction,
- brand kit,
- production constraints,
- backend mode: `local`, `inference_sh`, `optional_external`, or `hybrid`.

### 2. Format Fabrication Engine

Route each brief by format:

- Reel.
- Carousel.
- Story sequence.
- Static/single image.
- Reel cover.
- Quote/proof card.
- Product/offer visual.
- Repurposed multi-format package.

Each format must have its own dimensions, safe zones, export naming, and QA checklist.

### 3. Visual Direction Engine

Translate strategy into art direction:

- mood,
- palette,
- typography,
- composition,
- visual metaphor,
- lighting/style references,
- subject/product requirements,
- negative prompts/avoid list,
- Instagram safe zones,
- cover legibility rules.

### 4. Asset Finder + Normalizer

Create, collect, or receive raw media assets, then normalize them for rendering.

Possible sources/routes:

- local template rendering,
- inference.sh image/video/audio generation,
- existing brand photos/videos,
- stock/B-roll,
- screenshots/proof assets,
- screen recordings,
- founder/client footage,
- uploaded files from Chief/client,
- Google Drive assets,
- website screenshots,
- public URLs with usage-risk notes.

Create an asset manifest when using existing assets. Do not assume generated URLs are permanent. Save or mirror final assets into owned storage when possible.

### 5. Render + Post-Processing Engine

Finish assets into Instagram-ready outputs.

Responsibilities:

- text overlays,
- subtitle/caption burn-in,
- logo/handle placement,
- cropping/resizing,
- contact sheet/preview creation,
- file compression,
- slide ordering,
- audio leveling,
- final export packaging.

Default dimensions:

- Feed carousel/static: `1080x1350` preferred, `1080x1080` when square is required.
- Reels/Stories: `1080x1920`.
- Reel cover: design for `1080x1920`, verify center-crop readability for grid preview.

### 6. Creative QA Engine

Every asset package must pass QA before Publishing Layer handoff.

Checklist:

- correct dimensions/aspect ratio,
- no text overflow,
- high contrast and readable on mobile,
- safe zones respected,
- slide order correct,
- CTA/TTA present where required,
- captions/subtitles present for Reels when needed,
- brand kit respected,
- claims are not exaggerated or unsupported,
- no visible watermark from other platforms,
- product/person representation is accurate,
- filename and metadata are complete.

### 7. Export Package System

A finished package should include:

```text
exports/{content_id}/
├── assets/
│   ├── slide_01.png
│   ├── slide_02.png
│   ├── reel_final.mp4
│   ├── reel_cover.png
│   └── story_01.png
├── caption.txt
├── hashtags.txt
├── alt_text.txt
├── publish_notes.md
├── qa_report.md
└── metadata.json
```

Not every package needs every file. The export manifest must clearly say what is included.

### 8. Creative Learning Loop

After publishing and metrics review, update:

- winning visual hooks,
- losing production patterns,
- best cover styles,
- subtitle/readability notes,
- carousel template performance,
- AI media backend quality notes,
- reusable prompts/templates,
- cost/time estimates.

## MVP Build Recommendation

Start with **Local Creative Renderer v0**.

Why:

- lowest cost,
- easiest QA,
- repeatable for client work,
- strong save/share value,
- useful before complex video automation,
- deterministic text layout.

MVP input:

- topic,
- audience,
- pillar,
- angle,
- objective,
- slide count,
- brand kit,
- handle/logo,
- CTA/TTA,
- caption,
- hashtags,
- alt text.

MVP static renderer phases:

```text
Phase 1: clean narrative carousel from JSON -> PNG
Phase 2: asset-aware resource drop carousel with screenshots
Phase 3: product poster + product benefit carousel
Phase 4: optional video/render backend adapters
```

MVP output:

- `slide_01.png` through `slide_07.png` or requested slide count,
- `caption.txt`,
- `hashtags.txt`,
- `alt_text.txt`,
- `metadata.json`,
- `qa_report.md`,
- optional preview/contact sheet.

Starter template families:

- `hook_bold_claim`,
- `hook_question`,
- `context_problem`,
- `value_numbered`,
- `value_checklist`,
- `comparison_mistake_fix`,
- `proof_snapshot`,
- `cta_save_follow`,
- `cta_dm_keyword`.

## inference.sh Integration Notes

Use inference.sh only after a normalized creative brief exists.

Recommended abstraction:

```yaml
production_backend:
  mode: local | inference_sh | hybrid
  local:
    renderer: html_css_svg_ffmpeg
  inference_sh:
    provider: inference.sh
    skill_or_app: selected_per_job
    purpose: image | video | audio | render | utility
    cost_tier: draft | final | premium
```

Routing examples:

- Carousel with exact text → local HTML/CSS render first.
- Carousel with generated background → inference.sh image generation for background, local render for final text.
- Reel with AI B-roll → inference.sh video/image-to-video, local/FFmpeg edit and subtitle pass.
- Reel cover → local typography over generated/brand background.
- Product visual → inference.sh image generation or edit, then deterministic brand overlay.

## Handoff Contract From Content System

Creative Production should receive:

- content brief,
- MUSE copy brief,
- format-specific brief,
- brand kit,
- required assets/references,
- backend mode preference,
- metric target,
- experiment hypothesis.

If any field is missing, proceed only when the missing field does not materially affect production. Otherwise return a `Production Blocker` note.

## Common Failure Modes

1. **Letting the media model rewrite the strategy.** Fix: lock the content brief before generation.
2. **Using image generation for final text.** Fix: render text locally or via deterministic HTML/SVG/Canvas.
3. **No mobile readability QA.** Fix: preview at phone scale and validate contrast.
4. **Weak cover despite good Reel.** Fix: create cover as its own asset with hook + crop safety.
5. **No export manifest.** Fix: every package gets metadata and QA notes.
6. **Overpaying for AI media too early.** Fix: use local mode for deterministic assets and paid backend only when it adds value.
7. **No learning capture.** Fix: after metrics review, update template/backend notes.

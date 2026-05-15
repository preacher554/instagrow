# Asset-Aware Content Production

## Purpose

InstaGrow should not depend on generating every visual from scratch. The stronger default is asset-aware production:

```text
existing assets + locked copy + deterministic templates → Instagram-ready content
```

This lets InstaGrow create niche-specific content from real product photos, screenshots, logos, charts, course pages, founder photos, testimonials, app screenshots, and approved brand assets.

## Core Principle

```text
InstaGrow is not only an AI image generator.
InstaGrow is an Instagram content production system.
```

The system should assemble proof and assets into useful posts:

- text-heavy educational carousels,
- resource drop / lead magnet carousels,
- product posters,
- product benefit carousels,
- problem-solution visuals,
- comparisons,
- story promo assets,
- Reel covers.

## Ownership

This playbook belongs to the Creative Producer.

```text
Creative Producer
├── Asset Finder
├── Asset Normalizer
├── Creative Composer / Renderer
└── Creative QA Layer
```

## Workflow

```text
Content Operator handoff
  ↓ locked copy, format, CTA, visual direction
Asset Finder
  ↓ candidate visuals + source notes
Asset Normalizer
  ↓ production-ready images/screenshots/icons
Creative Composer / Renderer
  ↓ PNG/JPG/MP4 assets
Creative QA Layer
  ↓ qa_report + export manifest
Publishing Operator
```

## Asset Sources

Preferred source order:

1. Client/brand-owned assets.
2. Chief/Yuya uploaded assets.
3. Google Drive working folders.
4. Local client workspace assets.
5. First-party website screenshots.
6. Public screenshots with source notes.
7. Stock assets with license notes.
8. Generative media only when it adds value.

## Local Asset Folder Pattern

For core repo examples:

```text
assets/
├── brands/
│   └── example-brand/
│       ├── brand.json
│       ├── logo.png
│       ├── products/
│       ├── screenshots/
│       ├── backgrounds/
│       ├── icons/
│       └── references/
├── shared/
│   ├── icons/
│   ├── backgrounds/
│   └── patterns/
└── sources/
    └── source-log.jsonl
```

For client production, prefer per-client repos/workspaces rather than putting all private client assets inside the shared core repo.

## Asset Manifest

Each production package should include an asset manifest that records:

- asset ID,
- local path,
- source URL or source note,
- ownership/license assumption,
- usage risk,
- required transformations,
- final usage in slide/post/story,
- whether attribution/source mention is needed.

Use:

```text
templates/asset-manifest.md
```

## Local Renderer Default

Static/carousel assets should default to:

```text
Node.js + Playwright + HTML/CSS templates
```

Why:

- precise typography,
- deterministic text rendering,
- no image API cost,
- easy template variants,
- strong QA surface,
- no GPU requirement.

Reserve paid/generative backends for:

- new premium backgrounds,
- image-to-video,
- AI B-roll,
- product scene generation,
- upscale/background removal,
- cinematic/brand campaign visuals.

## First Template Families

Prioritize these templates before adding anything else:

1. `clean-narrative-carousel`
   - white/clean layout,
   - big headline,
   - readable paragraph rhythm,
   - save/share CTA.

2. `resource-drop-lead-magnet`
   - dark or high-contrast layout,
   - screenshot cards,
   - numbered resources,
   - comment keyword CTA.

3. `product-poster`
   - product photo,
   - brand logo/colors,
   - benefit bullets,
   - CTA block.

4. `product-benefit-carousel`
   - problem → solution → benefit → use cases → CTA.

## Niche Adaptation

Template structure can stay reusable, but each niche changes:

- hook logic,
- asset choice,
- proof type,
- claim risk,
- CTA,
- DM keyword,
- visual tone,
- buyer objection,
- conversion path.

Examples:

```text
AI tools → resource drops, tool breakdowns, prompt packs
Physical product → product posters, benefit carousels, problem-solution visuals
Fitness → mistake carousels, routine cards, checklist posts
Finance → myth/fact, calculators, risk disclaimers, framework slides
B2B service → pain, cost of inaction, case study, CTA consult
```

## QA Gates

Minimum QA before handoff:

- all expected files exist,
- dimensions match format,
- slide count matches brief,
- text is readable on mobile,
- safe zones respected,
- no missing/broken images,
- no asset looks stretched/pixelated,
- CTA/TTA present,
- claims have source notes,
- usage risk is labeled,
- export manifest complete.

## Stop Conditions

Mark `Production Blocker` if:

- a required product/person/brand asset is missing,
- asset usage risk is high and there is no approved substitute,
- product visual would misrepresent the offer,
- core claim cannot be supported,
- final text cannot fit the format readably,
- publishing is requested but QA/export is incomplete.

## MVP Implementation Target

Build the local renderer in phases:

```text
Phase 1: clean narrative carousel from JSON → PNG
Phase 2: asset-aware resource drop carousel with screenshots
Phase 3: product poster + product benefit carousel
Phase 4: optional video/render backend adapters
```

Do not start with MoneyPrinterTurbo, inference.sh, or auto-publishing. Start with reusable static production because it gives the fastest path to daily content volume.

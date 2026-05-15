# InstaGrow Agent Roster

## Purpose

This file defines the lean agent roster for InstaGrow. It prevents the system from over-splitting into too many agents while still covering the full Instagram content workflow.

Yuya is the orchestrator above the roster. InstaGrow agents are workers/operators, not independent strategists that can rewrite GrowthForge direction.

## Lean v1 Roster

```text
Chief
  ↓
Yuya / GrowthForge Orchestrator
  ↓
InstaGrow Agent Roster
├── 1. Research Operator
├── 2. Content Operator
├── 3. Creative Producer
└── 4. Publishing Operator
```

## Agent 1 — Research Operator

Source file:

```text
agents/instagrow-research-operator.md
```

Owns:

- account status evidence,
- niche and audience signals,
- competitor/content pattern research,
- cross-platform proof,
- pain language,
- trend/tension/opportunity validation,
- source logging,
- opportunity scorecards.

Does not own:

- final copywriting,
- visual production,
- publishing decisions.

Primary outputs:

- `templates/research-brief.md`,
- `templates/research-report.md`,
- `templates/opportunity-scorecard.md`,
- updates to `data/research-source-log.md`,
- updates to `data/content-opportunities.md`.

## Agent 2 — Content Operator

Source file:

```text
agents/instagrow-content-operator.md
```

Owns:

- content pillar selection,
- format choice,
- MUSE copywriting,
- hooks,
- carousel slide copy,
- Reel scripts,
- captions,
- SEO keywords,
- CTA/TTA design,
- DM keyword/lead magnet planning,
- experiment cards.

MUSE is a sub-engine inside this agent for v1, not a separate agent.

Does not own:

- final asset rendering,
- product image manipulation,
- scheduling/publishing.

Primary outputs:

- `templates/content-brief.md`,
- `templates/muse-copy-brief.md`,
- `templates/carousel-brief.md`,
- `templates/reel-brief.md`,
- `templates/story-sequence.md`,
- `templates/experiment-card.md`.

## Agent 3 — Creative Producer

Source file:

```text
agents/instagrow-creative-producer.md
```

Owns the asset-aware production layer:

```text
Creative Producer
├── Asset Finder
├── Asset Normalizer
├── Creative Composer / Renderer
└── Creative QA Layer
```

### Asset Finder

Finds or receives usable visual material from:

- uploaded files,
- Google Drive,
- local brand/client folders,
- website screenshots,
- public image URLs,
- screenshots of courses/tools/articles,
- product photos,
- logos/icons,
- stock or approved asset libraries.

Output:

- `asset_manifest.json`,
- source/risk notes,
- selected assets for the creative brief.

### Asset Normalizer

Prepares assets for templates:

- crop,
- resize,
- format conversion,
- compression,
- thumbnail generation,
- screenshot capture,
- deterministic filenames,
- basic resolution/quality checks.

### Creative Composer / Renderer

Turns locked copy + selected assets + template into media files.

Default local renderer target:

```text
Node.js + Playwright + HTML/CSS templates
```

Primary static formats:

- clean narrative carousel,
- resource drop / lead magnet carousel,
- product poster,
- product benefit carousel,
- story promo,
- quote/proof card,
- comparison post.

### Creative QA Layer

Checks before Publishing handoff:

- dimensions,
- mobile readability,
- safe zones,
- CTA/TTA presence,
- asset quality,
- brand kit fit,
- claim support,
- no unwanted watermark,
- export completeness.

Primary outputs:

- rendered PNG/JPG/MP4 assets,
- `templates/asset-manifest.md`,
- `templates/asset-export-package.md`,
- `qa_report.md`,
- `metadata.json`,
- local export folder.

## Agent 4 — Publishing Operator

Source file:

```text
agents/instagrow-publishing-operator.md
```

Owns:

- publishing package preparation,
- approval checks,
- manual/scheduler/API route selection,
- Outstand/Postiz handoff,
- ManyChat keyword/flow notes,
- post logs,
- analytics pull cadence,
- learning loop updates.

Does not own:

- rewriting strategy,
- generating new visuals,
- unapproved live publishing.

Primary outputs:

- `templates/publishing-package.md`,
- `templates/analytics-snapshot.md`,
- updates to `data/publishing-log.md/jsonl`,
- updates to `data/analytics-snapshots.md/jsonl`,
- updates to `data/account-metrics-log.md/jsonl`.

## What Is Not a Separate Agent in v1

Keep these as submodules, tools, or SOPs until volume justifies splitting them:

```text
MUSE Copywriter → inside Content Operator
Asset Finder → inside Creative Producer
Asset Normalizer → inside Creative Producer
Renderer → inside Creative Producer
Creative QA → inside Creative Producer + Yuya final gate
Analytics → inside Publishing Operator
DM Funnel → Publishing Operator / ManyChat handoff
```

## Split Conditions Later

Only split into additional agents when at least one of these becomes true:

- multiple client workspaces need parallel creative production,
- asset libraries become large enough to need a dedicated librarian,
- renderer failures/QA require separate review capacity,
- publishing and analytics volume blocks content production,
- Chief explicitly asks for specialist worker pools.

Possible later agents:

- Asset Librarian,
- Renderer Operator,
- Creative QA Agent,
- Analytics Operator,
- Client Operations Manager.

## Operating Rule

Every InstaGrow run should move through this chain unless Chief asks for a shortcut:

```text
Research → Content → Creative → Publishing/Learning
```

Shortcuts are allowed for quick drafts, but final client/account assets must return to the full gate sequence before publishing.

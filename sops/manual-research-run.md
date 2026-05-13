# Manual Research Run SOP

Use this SOP when Apify and Xpoz are not configured yet. The goal is to complete a useful Research Layer run with Hermes-native tools only.

## When to Use

Use manual mode when:

- the research question is new or fuzzy,
- the niche has not been validated yet,
- API credentials are missing,
- qualitative judgment matters more than collection volume,
- Chief wants speed before automation.

## Timebox

Default timeboxes:

- Quick scan: 45-60 minutes.
- Normal run: 2-3 hours.
- Deep run: 1 day.

Do not research forever. If evidence is weak after the timebox, mark it as weak signal and move on.

## Step 1 — Define Scope

Fill `templates/brand-intelligence-card.md` if this is a normal/deep run. For a quick scan, label assumptions clearly.

Then fill:

- Account status:
- Niche / topic cluster:
- Audience:
- Offer / monetization path:
- Research window:
- Platforms:
- Seed accounts:
- Keywords:
- Output needed:

## Step 2 — Build Query Map

Create:

- Core keywords.
- Pain keywords.
- Adjacent keywords.
- Competitor names.
- Offer/category keywords.

Example:

```text
Core: ai agents, workflow automation, business systems
Pain: too many tools, no time to execute, manual workflow
Adjacent: solopreneur systems, creator business, agency operations
```

## Step 3 — Platform Checks

### Instagram

Collect:

- 5-10 relevant Reels/posts/profiles.
- Cover hooks.
- Captions and visible keywords.
- Format patterns.
- Visible engagement/views if available.
- Visual style notes from screenshots when useful.

### X/Twitter

Collect:

- 5-10 posts/threads with sharp hooks or strong pain language.
- Contrarian takes.
- Emerging narratives.
- Repeated objections.

### TikTok

Collect:

- 3-8 short-form examples.
- First 3-second hook.
- Pacing, cuts, audio, visual format.
- Comment pain language if visible.

### YouTube / Shorts

Collect:

- 3-5 titles/thumbnails/transcripts or summaries.
- Long-form objections and evergreen angles.
- Repeated audience questions.

### Web / Forums

Collect:

- raw pain language,
- buyer objections,
- search demand language,
- competitor offers and lead magnets.

## Step 4 — Normalize Source Notes

For every useful source, capture:

```text
- Platform:
- URL/source:
- Creator/account:
- Format:
- Topic:
- Hook/opening:
- Pain:
- Promise:
- Objection:
- CTA:
- Visible metrics:
- Why it matters:
- Source mode: Hermes manual
```

Update `data/research-source-log.md` if the source should be reusable.

## Step 5 — Score Opportunities

Use the score in `agents/instagrow-research-operator.md` and `templates/opportunity-scorecard.md`.

Before scoring, apply `playbooks/research-engine-v2.md`:

- tag major claims with confidence,
- disclose bias and missing data,
- rewrite generic claims with evidence and mechanism,
- identify psychological mechanisms,
- check pattern/gap/tension/temporal status when depth is normal or deep.

Prioritize ideas with:

- strong pain,
- clear business relevance,
- visible platform proof,
- low-to-medium saturation,
- easy execution this week.

## Step 6 — Update Research Data Stores

Update as needed:

- `data/hook-bank.md`
- `data/keyword-bank.md`
- `data/competitor-map.md`
- `data/content-opportunities.md`
- `data/research-source-log.md`

Keep entries compact. The data stores are operational memory, not essays.

## Step 7 — Handoff

Create the report using `templates/research-report.md`.

The handoff must include:

- top 3 opportunities,
- confidence summary and bias notes,
- pattern/gap/tension/temporal findings when applicable,
- 3 Reel briefs,
- 2 carousel angles,
- 5 Story prompts,
- experiment backlog,
- unresolved API-dependent gaps.

## Definition of Done

A manual research run is done when:

- account status is clear,
- at least Instagram + one external platform were checked,
- sources are logged,
- opportunities are scored,
- major claims have confidence tags,
- bias and missing-data limitations are stated,
- brief/report is ready for Content System Layer,
- reusable findings are saved to data stores.

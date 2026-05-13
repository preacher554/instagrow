# InstaGrow Research Layer Workflow

## Purpose

The Research Layer turns scattered social signals into Instagram-native content opportunities for GrowthForge.

It must answer:

- what topics are moving,
- what pain language the audience is using,
- which hooks and formats are working,
- whether the signal is Instagram-native, cross-platform validated, emerging, or saturated,
- what should become Reels, carousels, Stories, captions, or experiments.

Research is not complete until it creates production-ready briefs.

## Default Tool Stack

InstaGrow should start with Hermes-native tools first. API collectors are optional accelerators, not hard requirements.

```text
Research Layer tool stack
├── Hermes-native mode: available by default
│   ├── Browser/public web research
│   ├── Vision/screenshot analysis
│   ├── Web/content extraction
│   ├── Terminal + Python processing
│   ├── File/repo storage
│   └── Subagents/delegation
└── API-assisted mode: request credentials when automation is needed
    ├── Apify: scalable public social collection
    └── Xpoz / ClawHub Instagram Search: Instagram keyword/content search
```


## Research Layer Operational Kit

Research Layer v1 is considered operational when these files are present and used together:

```text
Research Layer kit
├── agents/instagrow-research-operator.md
├── playbooks/instagram-research-layer.md
├── playbooks/cross-platform-research.md
├── sops/manual-research-run.md
├── sops/research-api-credential-checklist.md
├── templates/research-brief.md
├── templates/research-report.md
└── data/
    ├── hook-bank.md                  # data/hook-bank.md
    ├── competitor-map.md             # data/competitor-map.md
    ├── content-opportunities.md      # data/content-opportunities.md
    ├── keyword-bank.md               # data/keyword-bank.md
    └── research-source-log.md        # data/research-source-log.md
```

Use `templates/research-brief.md` at the start of a run, `templates/research-report.md` at the end, and update the `data/` files whenever a finding should survive beyond the current task.

## Mode 1 — Hermes-Native Manual Research

Use this mode when API keys are not configured yet.

### Built-in Hermes capabilities

- **Browser/public research**
  - inspect public Instagram, TikTok, X/Twitter, YouTube, forums, blogs, landing pages, newsletters, and competitor websites;
  - capture source links and visible signals;
  - validate whether a topic exists outside Instagram.

- **Vision/screenshot analysis**
  - analyze Instagram profile layouts, Reels covers, carousel covers, design patterns, visual hooks, and positioning;
  - summarize repeated visual patterns from screenshots.

- **Web/content extraction**
  - read public pages, articles, forum threads, and competitor offers;
  - extract audience pain language, objections, promises, and monetization clues.

- **Terminal + Python**
  - normalize collected items into JSON/CSV/Markdown;
  - deduplicate hooks and topics;
  - score opportunities;
  - generate summary reports.

- **File/repo tools**
  - update research briefs, hook banks, competitor maps, experiment logs, and playbooks inside this repo.

- **Subagents/delegation**
  - split research into platform-specific operators, then synthesize the result.

### Default manual workflow

```text
Manual research run
├── 0. Classify account status
│   ├── Zero/new
│   ├── Existing/active
│   └── Dormant/messy
├── 1. Define brief
│   ├── niche/topic cluster
│   ├── audience segment
│   ├── offer/monetization path
│   ├── research window
│   ├── seed accounts
│   └── keywords
├── 2. Collect evidence manually
│   ├── Instagram target-platform proof
│   ├── X/Twitter narrative and hooks
│   ├── TikTok short-form patterns
│   ├── YouTube evergreen depth
│   └── web/forum pain language
├── 3. Normalize into shared schema
├── 4. Score opportunities
├── 5. Synthesize patterns
└── 6. Produce content briefs and experiments
```

## Mode 2 — API-Assisted Research

Use this mode once Chief provides credentials for Apify and/or Xpoz.

### Preferred API stack

#### 1. Apify

Primary role: scalable public social collection.

Use Apify for:

- Instagram public profile/post/Reels collection,
- TikTok video/search collection,
- X/Twitter public post/search collection,
- competitor content snapshots,
- larger datasets than manual browser research can handle.

Credential to request:

```text
APIFY_TOKEN
```

Operational notes:

- Use only documented/allowed public collection flows.
- Respect platform terms, rate limits, and privacy boundaries.
- Store raw exports separately from synthesized briefs.
- Never treat raw scrape volume as strategy; still score by business relevance.

#### 2. Xpoz / ClawHub Instagram Search

Primary role: Instagram keyword/content discovery.

Use Xpoz for:

- Instagram keyword search across posts/Reels/profiles,
- competitor and creator discovery by niche,
- caption/subtitle/spoken-word search when available,
- author post history lookup,
- CSV-style export for larger research runs.

Credential/setup to request:

```text
XPOZ_API_KEY or Xpoz/ClawHub MCP access details
```

Operational notes:

- Xpoz fills a gap that Meta Graph API does not solve: broad Instagram search.
- Prefer Xpoz for Instagram discovery, then use Hermes vision/browser for qualitative inspection.
- If Xpoz is unavailable, fall back to browser/manual research and Apify where compliant.

## API Credential Reminder Rule

When the Research Layer needs to move beyond manual MVP research into automated collection, remind Chief to provide:

```text
APIFY_TOKEN
XPOZ_API_KEY or Xpoz/ClawHub MCP access details
```

Do not block manual research while waiting for these credentials. Continue in Hermes-native mode and mark API-dependent steps as pending.

## Research Operators

For larger runs, split work into these roles:

```text
Research operator team
├── Research Lead
│   └── owns brief, scope, synthesis, and final decision
├── Instagram Proof Scout
│   └── validates Instagram-native examples, covers, captions, formats
├── X/Twitter Narrative Scout
│   └── finds emerging narratives, hot takes, sharp hooks, pain language
├── TikTok Pattern Scout
│   └── extracts short-form pacing, visual/audio patterns, opening hooks
├── YouTube Depth Scout
│   └── finds evergreen angles, titles, objections, long-form frameworks
├── Web/Forum Pain Scout
│   └── captures raw audience language, buying triggers, complaints
└── Synthesis Operator
    └── deduplicates, scores, and creates production-ready briefs
```

## Shared Research Schema

Every collected item should be normalized into this shape:

```json
{
  "platform": "instagram|x|tiktok|youtube|web|forum",
  "url": "",
  "creator": "",
  "published_at": "",
  "format": "reel|carousel|post|tweet|thread|short|video|article|forum_post",
  "topic": "",
  "hook": "",
  "caption_or_text": "",
  "metrics": {
    "views": null,
    "likes": null,
    "comments": null,
    "shares": null,
    "saves": null,
    "bookmarks": null,
    "followers": null
  },
  "signals": {
    "pain": [],
    "promise": [],
    "objection": [],
    "cta": "",
    "visual_pattern": "",
    "retention_pattern": "",
    "monetization_clue": ""
  },
  "source_mode": "hermes_manual|apify|xpoz|other_api"
}
```

## Opportunity Scoring

Score each opportunity from 0 to 5 per component:

- `pain_intensity`: urgency and emotional weight.
- `business_relevance`: fit with GrowthForge monetization and trust path.
- `engagement_strength`: visible traction or outlier strength.
- `novelty`: fresh angle or underused framing.
- `instagram_format_fit`: can become a strong Reel, carousel, or Story.
- `saturation_penalty`: high if the topic is overused without a unique angle.

Formula:

```text
opportunity_score =
  pain_intensity
  + business_relevance
  + engagement_strength
  + novelty
  + instagram_format_fit
  - saturation_penalty
```

Classify each topic as:

1. **Cross-platform validated** — works across two or more platforms.
2. **Emerging arbitrage** — strong outside Instagram, not yet saturated on Instagram.
3. **Instagram-native proof** — already working in Instagram format.
4. **Saturated trend** — use only with a strong unique angle.

## Required Handoff

Every research run must produce:

- executive summary,
- evidence/source notes,
- top opportunities with scores,
- hook bank,
- competitor/creator map,
- platform notes,
- recommended Reels,
- recommended carousels,
- recommended Stories,
- experiment backlog,
- next actions.

Use `templates/research-brief.md` as the output format.

## Quality Rules

- Research Instagram plus at least one external platform.
- Do not confuse virality with business relevance.
- Do not copy hooks verbatim; translate them into GrowthForge-safe angles.
- Prefer repeatable systems over one-off content ideas.
- Preserve source links or source notes.
- Mark whether evidence came from Hermes-native manual research, Apify, Xpoz, or another source.
- If API credentials are missing, continue manually and record what would improve once APIs are available.

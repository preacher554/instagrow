# InstaGrow

InstaGrow is the GrowthForge operating repository for Instagram growth skills, agent instructions, research workflows, and repeatable SOPs.

Its purpose is simple: when Yuya spawns or directs an Instagram-focused subagent, this repo becomes the source of truth.

## Mission

Build a reusable Instagram growth system for GrowthForge that can:

- research cross-platform content opportunities,
- turn insights into Instagram-native Reels, carousels, Stories, and captions,
- preserve experiments and lessons learned,
- improve monetization-relevant content decisions,
- guide future Instagram specialist agents without starting from zero.

## Core Principles

- Reels drive organic discovery.
- Carousels build saves, depth, and framework authority.
- Stories build relationship and audience warmth.
- Instagram SEO matters: captions, bio, keywords, alt text, and niche clarity.
- Likes are not enough. Track retention, saves, shares, comments, profile visits, and conversion signals.
- GrowthForge content must serve business leverage, not vanity virality.
- Research must be cross-platform: Instagram, X/Twitter, TikTok, YouTube, and web/forum pain language.
- Analysis must start by classifying account status: zero/new, existing/active, or dormant/messy.
- Publishing should avoid direct Meta Graph API as the core integration; prefer Outstand or Postiz, with generate-only/manual as fallback.
- Analytics should be logged locally first, then synced to Notion only when a dashboard/client view is needed.

## Workflow Map

```text
InstaGrow workflow
├── Execution Gates & Guardrails
│   └── infer-first rules → report gates → stop/continue gates → approval gates
├── Cron Learning Loop
│   └── scheduled signal watch → analytics pull → weekly synthesis → playbook evolution
├── 0. Account Status Routing
│   ├── Zero / New Account
│   │   └── niche research → positioning → content pillars → launch experiments
│   ├── Existing / Active Account
│   │   └── current niche audit → winner/loser analysis → bottleneck diagnosis → optimization
│   └── Dormant / Messy Account
│       └── revive vs pivot vs reset decision → recovery plan
├── 1. Research Layer
│   ├── Hermes-native mode: browser + vision + web + terminal/Python + repo files + subagents
│   ├── API-assisted mode: Apify + Xpoz when credentials are provided
│   ├── data stores: hook bank + competitor map + opportunities + keyword bank + source log
│   └── Instagram + X/Twitter + TikTok + YouTube + web/forum signals
├── 2. Content System Layer
│   └── content pillars → MUSE copywriting engine → media briefs → weekly calendar → experiments
├── 3. Creative Production Layer
│   └── local/inference.sh fabrication → editing → subtitles → covers → export QA
├── 4. Publishing + Analytics Layer
│   ├── generate-only/manual posting → Outstand/Postiz adapters → posting QA
│   ├── analytics pull: post metrics + account metrics
│   └── storage: local Markdown/JSONL first, Notion optional
├── 5. Engagement Layer
│   └── warm-up → comment/DM response → Story interactions → relationship loops
└── 6. Analytics + Learning Layer
    └── metrics → experiment log → lessons learned → playbook updates
```

## Repository Structure

Current working structure:

```text
instagrow/
├── README.md
├── agents/
│   ├── instagrow-agent.md              # Main specialist-agent instruction layer
│   ├── instagrow-research-operator.md  # Dedicated Research Layer operator
│   ├── instagrow-content-operator.md   # Content System + MUSE copy operator
│   ├── instagrow-creative-producer.md  # Creative Production operator
│   └── instagrow-publishing-operator.md # Publishing + analytics operator
├── skills/
│   └── social-media/
│       └── instagrow-growth-operator/
│           └── SKILL.md                # Compact Hermes skill entrypoint for InstaGrow
├── playbooks/
│   ├── instagrow-execution-gates-guardrails.md # Agent guardrails, report gates, approval gates
│   ├── instagrow-cron-learning-loop.md # Scheduled learning loops via Hermes cron
│   ├── account-status-routing.md       # Step 0: zero/new vs existing/active vs dormant/messy
│   ├── instagram-operations.md         # Instagram fundamentals and operating rules
│   ├── instagram-research-layer.md     # Research workflow, Hermes-native stack, Apify/Xpoz adapters
│   ├── research-engine-v2.md           # ORACLE-style validation, scoring, tension, and handoff engine
│   ├── instagram-content-system-layer.md # Content pillars, briefs, calendar, experiment handoff
│   ├── muse-copywriting-engine.md      # Strategic copywriting/scriptwriting subsystem
│   ├── instagram-creative-production-layer.md # Asset fabrication, backend routing, export QA
│   ├── instagram-publishing-analytics-layer.md # Outstand/Postiz publishing, analytics, storage
│   └── cross-platform-research.md      # Cross-platform research workflow before content production
├── sops/
│   ├── weekly-content-cycle.md         # Weekly execution rhythm
│   ├── experiment-log.md               # Experiment tracking format
│   ├── manual-research-run.md          # Hermes-native no-key research SOP
│   ├── research-api-credential-checklist.md # When/how to request research/publishing credentials
│   ├── creative-production-run.md      # Asset production and export QA SOP
│   └── publishing-run.md               # Publish/schedule/log/analytics SOP
├── data/
│   ├── hook-bank.md                    # Reusable hooks and rewrites
│   ├── competitor-map.md               # Competitor/creator monitoring map
│   ├── content-opportunities.md        # Scored opportunity backlog
│   ├── keyword-bank.md                 # SEO/search/pain keywords
│   ├── copy-variant-log.md             # MUSE copy A/B test history
│   ├── research-source-log.md          # Source notes and evidence trail
│   ├── publishing-log.md               # Human-readable publishing ledger
│   ├── publishing-log.jsonl            # Machine-readable publishing ledger
│   ├── analytics-snapshots.md          # Human-readable analytics snapshots
│   ├── analytics-snapshots.jsonl       # Machine-readable analytics snapshots
│   ├── account-metrics-log.md          # Human-readable account metrics ledger
│   └── account-metrics-log.jsonl       # Machine-readable account metrics ledger
└── templates/
    ├── research-brief.md
    ├── research-report.md
    ├── brand-intelligence-card.md
    ├── content-analysis-10-plus-3.md
    ├── opportunity-scorecard.md
    ├── experiment-card.md
    ├── content-brief.md
    ├── muse-copy-brief.md
    ├── reel-brief.md
    ├── carousel-brief.md
    ├── story-sequence.md
    ├── creative-production-brief.md
    ├── asset-export-package.md
    ├── publishing-package.md
    └── analytics-snapshot.md
```

Target evolution as the system matures:

```text
instagrow/
├── README.md
├── agents/
│   ├── instagrow-agent.md
│   ├── instagrow-research-operator.md
│   ├── instagrow-content-operator.md
│   ├── instagrow-creative-producer.md
│   ├── instagrow-publishing-operator.md
│   └── instagrow-analytics-operator.md
├── skills/
│   └── social-media/
│       ├── instagrow-operations-playbook/
│       │   └── SKILL.md
│       ├── instagrow-cross-platform-research/
│       │   └── SKILL.md
│       ├── instagrow-account-status-routing/
│       │   └── SKILL.md
│       └── instagrow-growth-operator/
│           └── SKILL.md
├── playbooks/
│   ├── account-status-routing.md
│   ├── instagram-research-layer.md
│   ├── instagram-content-layer.md
│   ├── instagram-creative-production-layer.md
│   ├── instagram-publishing-analytics-layer.md
│   ├── instagram-analytics-layer.md
│   └── instagram-automation-layer.md
├── sops/
│   ├── weekly-content-cycle.md
│   ├── creative-production-run.md
│   ├── publishing-run.md
│   ├── experiment-log.md
│   ├── existing-account-audit.md
│   ├── zero-account-launch.md
│   └── dormant-account-revival.md
├── templates/
│   ├── research-brief.md
│   ├── content-brief.md
│   ├── weekly-report.md
│   ├── experiment-log.md
│   ├── reel-brief.md
│   ├── carousel-brief.md
│   ├── story-sequence.md
│   ├── creative-production-brief.md
│   ├── asset-export-package.md
│   ├── publishing-package.md
│   └── analytics-snapshot.md
├── evaluations/
│   └── clawhub-instagram-analyzer-review.md
└── scripts/
    └── validate_skills.py
```

## First Use

When creating an InstaGrow-focused agent, load:

1. `agents/instagrow-agent.md`
2. `playbooks/instagrow-execution-gates-guardrails.md`
3. `playbooks/instagrow-cron-learning-loop.md` when designing scheduled learning or recurring monitoring
4. `playbooks/account-status-routing.md`
5. `playbooks/instagram-operations.md`
6. `playbooks/instagram-research-layer.md`
7. `playbooks/research-engine-v2.md` for non-ambiguous Research Layer validation, scoring, and handoff rules
8. `agents/instagrow-research-operator.md` when running research
9. `playbooks/cross-platform-research.md`
10. `playbooks/instagram-content-system-layer.md` when turning research into content strategy
11. `playbooks/muse-copywriting-engine.md` when producing hooks, scripts, captions, variants, or copy audits
12. `agents/instagrow-content-operator.md` when running the Content System Layer
13. `playbooks/instagram-creative-production-layer.md` when turning briefs into assets
14. `agents/instagrow-creative-producer.md` when running Creative Production
15. `playbooks/instagram-publishing-analytics-layer.md` when scheduling/publishing or pulling metrics
16. `agents/instagrow-publishing-operator.md` when running Publishing + Analytics
17. Relevant SOP/template from `sops/` or `templates/`

The agent should output production-ready briefs, not just ideas.

## Status

Execution Gates & Guardrails are now added through `playbooks/instagrow-execution-gates-guardrails.md`. They define ask-less behavior, assumption rules, report gates, stop/continue gates, handoff contracts, execution modes, and live-publishing approval requirements.

Cron Learning Loop is now added through `playbooks/instagrow-cron-learning-loop.md`. It defines scheduled signal watching, analytics pulling, weekly learning synthesis, monthly playbook evolution, and Hermes cron job prompt templates.

Research Layer v2 clarification is now added through `playbooks/research-engine-v2.md`.

Content System Layer v1 is now added through `playbooks/instagram-content-system-layer.md`, `playbooks/muse-copywriting-engine.md`, `agents/instagrow-content-operator.md`, and the content/copy templates.

Creative Production Layer v1 is now added through `playbooks/instagram-creative-production-layer.md`, `agents/instagrow-creative-producer.md`, `sops/creative-production-run.md`, and production/export templates. It defines local deterministic rendering as the free MVP path and inference.sh as the primary paid media runtime.

Publishing + Analytics Layer v1 is now added through `playbooks/instagram-publishing-analytics-layer.md`, `agents/instagrow-publishing-operator.md`, `sops/publishing-run.md`, publishing/analytics templates, and local data ledgers. It defines Outstand as the primary automation-first adapter, Postiz as the scheduler/calendar adapter, local Markdown/JSONL as the MVP source of truth, and Notion as optional dashboard sync.

Next build targets:

1. Local Carousel Fabricator implementation.
2. Engagement Layer.
3. Analytics + Learning Layer expansion.
4. Concrete Hermes cron job creation for real client/account workspaces.
5. Adapter implementation scripts for Outstand/Postiz.

This repo is designed to evolve as GrowthForge develops stronger Instagram systems and real account data comes in.

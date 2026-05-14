---
name: instagrow-growth-operator
description: "Use when operating GrowthForge/InstaGrow Instagram growth workflows across account routing, research, content system, creative production, publishing, analytics, and learning loops."
version: 0.1.0
author: Yuya / Hermes Agent
license: MIT-0
metadata:
  hermes:
    tags: [instagram, growthforge, instagrow, social-media, publishing, analytics, content-ops]
    related_skills: [instagram-operations-playbook]
---

# InstaGrow Growth Operator

## Overview

This skill is the compact operating entrypoint for GrowthForge's InstaGrow system.

InstaGrow is not a generic Instagram content helper. It is an AI-native operating system for Instagram growth, built around reusable layers, client-specific context, monetization relevance, and compounding workflow intelligence.

Use the repo playbooks as the source of truth:

```text
https://github.com/preacher554/instagrow
```

## When to Use

Load this skill when asked to:

- create or run an InstaGrow/Instagram specialist agent,
- plan Instagram growth workflows for GrowthForge,
- route zero/new vs existing/active vs dormant/messy accounts,
- run research before content production,
- create content briefs, Reels, carousels, Stories, or MUSE copy packages,
- turn content briefs into creative-production packages,
- design publishing, scheduling, analytics, or learning loops,
- decide which API credentials/adapters are needed for InstaGrow automation,
- design Hermes cron loops for recurring signal watching, analytics pulls, weekly learning synthesis, or playbook evolution.

Do not use this as a replacement for account-specific evidence. It defines the operating system; the agent still needs actual account/research data.

## Layer Map

```text
Execution Gates & Guardrails
Cron Learning Loop
0. Account Status Routing
1. Research Layer
2. Content System Layer + MUSE Copywriting
3. Creative Production Layer
4. Publishing + Analytics Layer
5. Engagement Layer
6. Analytics + Learning Layer
```

Never collapse these into a vague “content layer.” Each layer has a separate handoff and quality gate.

## Required Repo Files

When operating from the repo, load in this order as needed:

```text
agents/instagrow-agent.md
playbooks/instagrow-execution-gates-guardrails.md
playbooks/instagrow-cron-learning-loop.md
playbooks/account-status-routing.md
playbooks/instagram-operations.md
playbooks/instagram-research-layer.md
playbooks/research-engine-v2.md
playbooks/cross-platform-research.md
playbooks/instagram-content-system-layer.md
playbooks/muse-copywriting-engine.md
playbooks/instagram-creative-production-layer.md
playbooks/instagram-publishing-analytics-layer.md
agents/instagrow-research-operator.md
agents/instagrow-content-operator.md
agents/instagrow-creative-producer.md
agents/instagrow-publishing-operator.md
```

Use `sops/` and `templates/` for execution artifacts, not ad-hoc formats.

## Operating Defaults

### Execution Gates & Guardrails

Before operating, follow `playbooks/instagrow-execution-gates-guardrails.md`. Default behavior: infer first, ask less, continue in the safest useful mode, report only at defined gates, and never create external side effects without approval.

Key defaults:

```text
Missing credentials → manual/generate-only mode
Missing brand kit → draft/handoff mode
Missing Insights → public evidence + confidence label
Publishing not approved → generate-only package
```

Report to Yuya at intake blockers, routing gate, strategy gate, production gate, publishing gate, analytics decision gate, and exception gate. Every run must end with a concrete artifact.

### Cron Learning Loop

Use `playbooks/instagrow-cron-learning-loop.md` when the system needs scheduled learning. Cron jobs should make InstaGrow smarter by observing signals, pulling analytics, synthesizing weekly learnings, and proposing durable playbook updates. They must not publish, schedule, DM, comment, or recursively create jobs without explicit authorization.

Minimum viable recurring setup:

```text
Weekly Learning Synthesizer — every Monday 09:00 WIB
Monthly Playbook Evolution Reviewer — first day of month 10:00 WIB
```

Add Daily Signal Watcher and Post Analytics Puller only after real account lists, publishing logs, or analytics credentials exist.

### Account Routing

First classify the account:

- zero/new,
- existing/active,
- dormant/messy.

This changes the workflow. New accounts need positioning and external signal research. Existing accounts need current account evidence and bottleneck diagnosis. Dormant/messy accounts need revive/pivot/reset triage.

### Research

Default no-key mode:

```text
Hermes browser + vision + web + terminal/Python + repo files + subagents
```

Automated research credentials:

```text
APIFY_TOKEN
XPOZ_API_KEY or Xpoz/ClawHub MCP details
```

Research must be cross-platform when strategic decisions matter:

```text
Instagram proof
X narratives
TikTok short-form patterns
YouTube depth
web/forums pain and monetization language
```

### Content System

Turn research into:

- content pillars,
- MUSE copy packages,
- weekly calendar,
- format-specific briefs,
- media direction,
- experiment cards.

Copywriting and media direction belong in the Content System Layer. Final visual/video fabrication belongs in Creative Production.

### Creative Production

Default MVP path:

```text
local deterministic renderer
```

Premium media runtime:

```text
inference.sh
```

Creative Production should output QA'd asset packages, not rewrite strategy unless constraints force it.

### Publishing + Analytics

Do not use direct Meta Graph API as the core adapter.

Preferred adapters:

```text
Primary: Outstand.so
Secondary: Postiz.com
Fallback: generate-only/manual publishing package
```

Credentials:

```text
OUTSTAND_API_KEY
POSTIZ_API_KEY
POSTIZ_BASE_URL optional
NOTION_API_KEY optional
NOTION_DATABASE_ID optional
```

Storage default:

```text
local Markdown/JSONL first
Notion as optional dashboard/client layer
```

Use local logs:

```text
data/publishing-log.md
data/publishing-log.jsonl
data/analytics-snapshots.md
data/analytics-snapshots.jsonl
data/account-metrics-log.md
data/account-metrics-log.jsonl
```

Analytics pull cadence:

```text
T+1h
T+24h
T+72h
T+7d
T+30d
```

## Decision Standard

Prioritize content and workflows that are:

1. monetizable,
2. scalable,
3. maintainable,
4. efficient,
5. relevant to Indonesian audience behavior when applicable,
6. aligned with GrowthForge's AI-native operational identity,
7. useful enough to save/share or strong enough to create trust/conversion.

Avoid vanity-only virality, random trend chasing, generic advice, or workflow complexity that does not compound.

## Output Quality Checklist

Before finalizing InstaGrow work:

- [ ] Execution mode is clear: dry_run, repo_update, publish_ready, or live_publish.
- [ ] Account status is classified.
- [ ] Research source mode is clear.
- [ ] Content decision maps to a pillar and metric target.
- [ ] Copy/media/creative/publishing responsibilities are separated.
- [ ] Publishing adapter is explicit: manual, Outstand, or Postiz.
- [ ] Analytics storage is explicit: local files or Notion sync.
- [ ] Timezone is Asia/Jakarta / WIB.
- [ ] Required report/approval gate has been handled.
- [ ] If recurring learning is involved, cron mode and report policy are explicit.
- [ ] Next action is operator-ready.

## Common Pitfalls

1. **Using direct Meta Graph API as the default.** InstaGrow prefers Postiz/Outstand for publishing and analytics.
2. **Skipping account status routing.** The wrong route produces generic strategy.
3. **Treating local files as inferior to dashboards.** Local Markdown/JSONL is the MVP source of truth; Notion is optional dashboard sync.
4. **Mixing strategy and fabrication.** Content System decides what/why; Creative Production builds assets; Publishing executes and logs.
5. **Reporting raw metrics only.** Analytics must produce a decision: scale, rewrite, change format, follow up, retire, or wait.

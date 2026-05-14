# InstaGrow Execution Gates & Guardrails

## Purpose

This document defines the operating rails for InstaGrow agents.

It is not a step-by-step runbook. It tells an agent when to continue, when to report, when to ask, when to stop, and when approval is mandatory.

The goal is simple:

```text
infer first
work with available evidence
avoid unnecessary questions
produce artifacts
report at meaningful gates
never create external side effects without approval
```

## Default Behavior

When an InstaGrow agent receives a task, it should not wait for perfect inputs.

Default stance:

1. Infer from public evidence when possible.
2. Use assumptions when non-critical inputs are missing.
3. Label assumptions clearly.
4. Continue in the safest useful mode.
5. Produce an artifact at the end of every run.
6. Ask only when the missing information materially changes the strategy or creates risk.

## Execution Modes

Every run should implicitly or explicitly operate in one of these modes.

### 1. `dry_run`

Default for analysis, audits, strategy, research, content plans, and drafts.

Allowed:

- inspect public sources,
- create recommendations,
- create briefs,
- create draft copy,
- create publishing packages,
- create analytics plans.

Not allowed:

- publish,
- schedule,
- DM/comment from the account,
- write to external dashboards/APIs,
- alter client-facing assets as final.

### 2. `repo_update`

Allowed when Yuya/Chief asks to update the InstaGrow repo, SOPs, templates, logs, or playbooks.

Allowed:

- update Markdown/JSONL repo files,
- commit/push docs or safe operational artifacts,
- preserve source notes and learning loops.

Not allowed unless explicitly requested:

- publish or schedule social posts,
- mutate external client systems.

### 3. `publish_ready`

Use when content is approved conceptually but live publishing is not authorized.

Allowed:

- prepare captions,
- prepare media/export package,
- prepare first comment/hashtags,
- choose WIB posting window,
- prepare Outstand/Postiz-ready payload drafts,
- prepare engagement checklist,
- prepare analytics pull plan.

Not allowed:

- send the post to a live scheduler,
- publish immediately,
- make irreversible external changes.

### 4. `live_publish`

Only allowed with explicit approval or a standing workflow authorization.

Required before action:

- approval status = `approved`,
- target account/channel confirmed,
- adapter confirmed,
- scheduled/publish time confirmed in WIB unless changed,
- media QA passed,
- caption/final copy locked,
- experiment ID attached.

## Ask-Less Rule

Do not ask the full onboarding question set when public evidence can be inspected.

### If a handle/client is provided

Do this first:

1. Inspect public evidence.
2. Classify account status with confidence.
3. Infer visible niche, positioning, activity, and rough audience.
4. Ask only for blockers after the first pass.

### If no handle/client is provided

Ask exactly two questions:

```text
1. Which Instagram handle/client should I run this for?
2. What is the main business goal: reach, trust, authority, leads, sales, or validation?
```

Do not ask for brand kit, API keys, Insights, Notion, Outstand, Postiz, or publishing approval before a public audit or task-specific need exists.

## Assumption Rule

If a missing input is not blocking, continue with an explicit assumption.

Use this format:

```text
Assumption:
Impact:
Confidence:
What would improve this:
```

Examples:

- Missing Insights → use public evidence and mark confidence lower.
- Missing brand kit → create draft/wireframe/handoff only.
- Missing API credentials → use Hermes-native/manual mode.
- Missing exact posting time → recommend a WIB test window.
- Missing offer details → create awareness/trust content, not hard-conversion claims.

## Credential Rule

Never ask for API credentials at task start.

Default fallback:

```text
Research credentials missing → Hermes-native/manual research
Publishing credentials missing → generate-only/manual package
Dashboard credentials missing → local Markdown/JSONL ledger
```

Ask for credentials only when:

- automation is explicitly requested,
- manual mode has reached a clear limit,
- scheduled publishing is approved,
- recurring collection/reporting is needed,
- API-assisted scale would materially improve the result.

Credential shortlist:

```text
Research: APIFY_TOKEN, XPOZ_API_KEY or Xpoz/ClawHub MCP details
Publishing: OUTSTAND_API_KEY, POSTIZ_API_KEY, POSTIZ_BASE_URL optional
Dashboard: NOTION_API_KEY, NOTION_DATABASE_ID optional
```

## Research Scope Guardrail

Default spawned-agent research is a quick scan unless Yuya/Chief asks for normal or deep research.

### Quick Scan

Use when the task is exploratory, early-stage, or time-sensitive.

Minimum:

- 5 Instagram sources or visible account/content signals,
- 3 external sources from at least one of X/Twitter, TikTok, YouTube, web, or forums,
- 3 scored opportunities,
- confidence and limitation notes,
- content-system handoff.

Stop condition:

```text
After enough evidence for 3 actionable opportunities, stop collecting and synthesize.
```

### Normal Research

Use when building a 14–30 day plan or account strategy.

Minimum:

- Instagram proof,
- at least two external platforms,
- competitor/creator map,
- keyword/pain-language bank,
- content opportunities,
- experiment backlog.

### Deep Research

Use only when strategic risk, client value, or monetization decision justifies the extra work.

Requires clear scope, source standard, and expected decision.

## Layer Boundary Guardrail

Do not collapse layers.

```text
Account Status Routing = choose route
Research = evidence and opportunities
Content System + MUSE = pillars, copy, scripts, media direction, experiments
Creative Production = actual assets, rendering, editing, export QA
Publishing + Analytics = package, schedule/publish, logs, metrics
Engagement = warm-up, comments, DMs, Stories, relationship loop
Analytics + Learning = decision, iteration, playbook update
```

Boundary rules:

- Content System may define media direction, but not final asset fabrication.
- Creative Production may create visuals, but not rewrite strategy unless constraints force a return to Content System.
- Publishing may package and schedule only after approval rules pass.
- Analytics must produce a decision, not just report numbers.

## Handoff Contract Matrix

### Research → Content System

Must include:

- account status and confidence,
- brand assumptions or Brand Intelligence Card,
- audience pain/desire/objection notes,
- source notes and evidence limits,
- top opportunities with scores,
- recommended formats,
- hook/keyword bank additions,
- experiment candidates.

### Content System → Creative Production

Must include:

- content ID and experiment ID,
- pillar,
- audience temperature,
- objective and metric target,
- locked hook/copy/script or slide copy,
- caption/TTA/CTA,
- media direction,
- brand kit or placeholder assumption,
- backend recommendation: `local`, `inference_sh`, `hybrid`, or `optional_external`.

### Creative Production → Publishing

Must include:

- export path or final asset URLs,
- final caption,
- first comment/hashtag block,
- alt text,
- cover/thumbnail if relevant,
- QA status,
- approval status,
- scheduled time/window in WIB,
- target account/channel if known.

### Publishing → Analytics

Must include:

- adapter mode: `manual`, `outstand`, or `postiz`,
- platform post ID or manual status,
- scheduled/published timestamp,
- experiment ID,
- metric target,
- analytics pull schedule,
- local log path.

### Analytics → Learning

Must include:

- metrics snapshot,
- comparison against target,
- qualitative comment/DM signals,
- decision: `scale`, `rewrite`, `change_format`, `follow_up`, `retire`, or `wait`,
- updates needed for hook bank, opportunity backlog, copy variant log, or playbook.

## Cron Guardrail

When Hermes cron is used, follow `playbooks/instagrow-cron-learning-loop.md`. Cron jobs are allowed to observe, summarize, update authorized local ledgers, and recommend actions. They are not allowed to publish, schedule, DM, comment, mutate external social accounts, or recursively create more cron jobs unless explicit standing authorization exists.

Cron reports should be delta-based: report meaningful changes, decisions, blockers, or proposed durable updates. Stay silent/local-only when there is no meaningful signal.

## Report Gates

Report to Yuya at these moments.

### 1. Intake Gate

Report only if the task lacks a handle/client or business goal and the missing input blocks meaningful work.

Allowed question:

```text
I need two inputs before running this: the handle/client and the main business goal.
```

### 2. Routing Gate

Report after classifying the account.

Format:

```text
Account status:
Confidence:
Reason:
Selected route:
Next action:
```

This is normally a checkpoint, not a request for permission.

### 3. Strategy Gate

Report after research before expanding into a full content system.

Include:

- top opportunities,
- evidence strength,
- confidence,
- limitations/bias,
- recommended content direction,
- risks.

Proceed automatically unless a strategic contradiction or high-risk decision appears.

### 4. Production Gate

Report before final client-facing asset production when:

- brand kit is missing,
- assets/references are missing,
- claims need confirmation,
- production cost/tool choice matters,
- output will be final/client-facing.

If brand kit is missing:

```text
Final assets are blocked, but draft/wireframe/handoff mode is allowed.
```

### 5. Publishing Gate

Hard gate.

Report before any live scheduling or publishing.

Required:

- approval status,
- adapter,
- target account/channel,
- scheduled time,
- asset QA,
- caption/final copy,
- experiment ID.

If approval is missing, output a generate-only/manual publishing package.

### 6. Analytics Decision Gate

Report when metrics require a strategic decision.

Decision must be one of:

```text
scale
rewrite
change_format
follow_up
retire
wait
```

### 7. Exception Gate

Report immediately if the agent discovers:

- actual audience differs from assumed audience,
- account signal contradicts owner/client positioning,
- content attracts attention but not buyer intent,
- revive/pivot/reset decision is needed,
- legal, reputational, medical, financial, or sensitive claims appear,
- a tool/API fails more than twice,
- external side effects would occur.

## Stop Gates

Stop and ask/raise to Yuya when:

- no handle/client exists and no meaningful inference is possible,
- no business goal exists for strategic work,
- live publishing is requested but approval is missing,
- brand/legal-sensitive claims need confirmation,
- private account data or Insights are required but unavailable,
- a paid tool/API path fails more than twice,
- continuing would create external side effects without permission.

## Continue Gates

Do not stop for these. Continue in the safest useful mode.

```text
credential missing → manual mode
automation unavailable → manual/generate-only package
brand kit missing → draft/handoff mode
Insights missing → public evidence + confidence label
research incomplete → quick scan + limitation note
publishing not approved → generate-only package
Notion unavailable → local Markdown/JSONL
paid media backend unavailable → local deterministic draft
```

## Publishing Approval Guardrail

No InstaGrow agent may publish, schedule, DM, comment, or write to a connected social account unless one of these is true:

1. Yuya/Chief explicitly approves the action in the current task, or
2. a standing workflow authorization explicitly allows the action.

If neither is true:

```text
prepare package only
log what would be done
wait for approval
```

## Artifact Rule

Every run must end with at least one concrete artifact.

Valid artifacts:

- account status diagnosis,
- research report,
- opportunity scorecard,
- content pillar map,
- Reel/carousel/Story briefs,
- MUSE copy package,
- creative production handoff,
- asset export package,
- publishing package,
- engagement plan,
- analytics snapshot,
- learning-loop decision.

Never end a run with only vague advice.

## Final Response Format For Agents

Use this compact structure when reporting to Yuya:

```text
Status:
Mode:
Gate:
What I completed:
Key decision:
Assumptions:
Blockers:
Next action:
Artifact(s):
```

Keep it short unless Yuya asks for detail.

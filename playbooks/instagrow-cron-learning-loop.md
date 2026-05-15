# InstaGrow Cron Learning Loop

## Purpose

This layer defines how InstaGrow can use Hermes cron jobs to keep learning from accounts, content performance, audience signals, and workflow outcomes without needing Yuya to manually restart the thinking loop every time.

The cron loop is not for uncontrolled autonomous posting. In the MVP it supports automation under explicit approval/standing authorization: scheduled publishing/status reconciliation, analytics pulls, local ledger updates, and weekly learning. Its core purpose is compounding intelligence:

```text
observe → summarize → decide → update memory/artifacts → recommend next action
```

## Core Principle

Cron jobs should make the system smarter, not noisier.

They should:

- collect signals on schedule,
- compare against previous baselines,
- detect changes,
- update local ledgers or repo artifacts when authorized,
- produce recommendations,
- report only meaningful deltas to Yuya.

They should not:

- publish, schedule, DM, comment, or change external social accounts without explicit approval or standing authorization,
- recursively create more cron jobs,
- spam Yuya with low-signal reports,
- overwrite strategic playbooks from one weak data point,
- treat daily noise as a conclusion.

## Relationship To Other Layers

```text
Execution Gates & Guardrails
→ Account Status Routing
→ Research
→ Content System + MUSE
→ Creative Production
→ Publishing + Analytics
→ Engagement
→ Analytics + Learning
→ Cron Learning Loop
```

Cron is the persistence layer around Analytics + Learning. It turns one-off runs into repeated observation and improvement.

## Default Cron Modes

### 1. Signal Watcher

Purpose: monitor external/public signals and identify new opportunities.

Use for:

- competitor/account changes,
- niche topic shifts,
- X/TikTok/YouTube/web pain-language changes,
- emerging content hooks,
- audience objections,
- Indonesian market timing.

Recommended cadence:

```text
Daily or 3x/week
```

Default output:

```text
Only report if meaningful change is found.
```

### 2. Automated Publisher / Status Reconciler

Purpose: publish/schedule approved packages and reconcile adapter/platform status.

Use for:

- approved content packages,
- standing posting authorization,
- Outstand/Postiz scheduled queues,
- failed/uncertain post status recovery,
- local publishing ledger updates.

Recommended cadence:

```text
Every 15-60 min while active scheduled posts exist, or daily for low-volume accounts
```

Default output:

- update `data/publishing-log.md`,
- update `data/publishing-log.jsonl`,
- record `scheduled`, `published`, `failed`, `reauth_needed`, or `manual_input_required`,
- report only if a live action is blocked, fails, or needs approval.

### 3. Analytics Puller

Purpose: pull or request post/account performance snapshots after publishing.

Use for:

- T+1h early velocity,
- T+24h first-day signal,
- T+72h stabilization,
- T+7d weekly decision,
- T+30d evergreen review.

Recommended cadence:

```text
Hourly/daily while posts are active, then weekly
```

Default output:

- update `data/analytics-snapshots.md`,
- update `data/analytics-snapshots.jsonl`,
- update `data/account-metrics-log.md` when available,
- produce decision: `scale`, `rewrite`, `change_format`, `follow_up`, `retire`, or `wait`.

### 4. Weekly Learning Synthesizer

Purpose: turn a week of activity into operating intelligence.

Use for:

- winner/loser review,
- hook mechanism analysis,
- pillar performance,
- creative pattern review,
- audience language extraction,
- next-week content priorities.

Recommended cadence:

```text
Every Monday 09:00 WIB
```

Default output:

- weekly learning report,
- top decisions,
- updates proposed for hook bank, content opportunities, copy variant log, and experiment log,
- next-week recommended content bets.

### 5. Playbook Evolution Reviewer

Purpose: identify durable lessons that should update SOPs or skills.

Use for:

- repeated patterns across several weeks,
- confirmed workflow bottlenecks,
- recurring publishing/analytics problems,
- improved prompts/templates,
- adapter lessons from Outstand/Postiz/manual workflows.

Recommended cadence:

```text
Monthly
```

Default output:

- proposed playbook/SOP changes,
- confidence level,
- evidence trail,
- whether the lesson is durable enough to save.

Do not patch playbooks from a single weak observation unless the issue is a clear bug or safety problem.

## Cron Job Safety Rules

1. Cron jobs must be self-contained.
2. Cron jobs must load the relevant InstaGrow skill/playbook context.
3. Cron jobs must not recursively schedule more cron jobs.
4. Cron jobs may publish/schedule only when a standing authorization or explicit approval exists and the job verifies target account, adapter credentials, quota, QA status, and fallback behavior.
5. Cron jobs should report only meaningful deltas, blocked states, or decisions needing Yuya.
6. Cron jobs must preserve source links, timestamps, and assumptions.
7. Cron jobs must use Asia/Jakarta / WIB for schedules and reporting.
8. Cron jobs should write structured outputs to local Markdown/JSONL before dashboard sync.
9. Cron jobs should prefer `dry_run` or `repo_update` mode unless explicitly authorized otherwise.

## Report Policy

### Report to Yuya when:

- a metric crosses a decision threshold,
- a post needs `scale`, `rewrite`, `change_format`, `follow_up`, `retire`, or `wait`,
- a competitor/niche signal materially changes,
- a recurring problem appears across multiple runs,
- a credential/token/account connection fails,
- a proposed SOP/playbook update is ready,
- a live action would require approval.

### Stay silent or local-only when:

- no meaningful signal changed,
- metrics are within expected noise,
- data is incomplete but not blocking,
- the output only updates local ledgers.

## Recommended Cron Job Set

### Job A — Daily Signal Watcher

Schedule:

```text
0 9 * * 1-5
```

Mode:

```text
dry_run or repo_update
```

Prompt skeleton:

```text
You are the InstaGrow Signal Watcher.

Load and follow:
- playbooks/instagrow-execution-gates-guardrails.md
- playbooks/instagrow-cron-learning-loop.md
- playbooks/instagram-research-layer.md
- playbooks/research-engine-v2.md
- playbooks/cross-platform-research.md

Task:
Monitor the configured account/niche/competitor list for meaningful new Instagram and cross-platform signals.

Rules:
- Do not publish, schedule, DM, or comment.
- Do not ask questions; make reasonable assumptions and label them.
- Use quick-scan scope unless a clear anomaly appears.
- Report only if there is a meaningful delta.
- Update local research/source notes only if execution mode allows repo_update.

Output:
- meaningful changes,
- evidence/source notes,
- opportunities,
- confidence,
- recommended next action.
```

### Job B — Automated Publisher / Status Reconciler

Schedule:

```text
Every 15-60 min while scheduled posts are active, or daily for low-volume accounts
```

Mode:

```text
repo_update or live_publish only with standing authorization
```

Prompt skeleton:

```text
You are the InstaGrow Automated Publisher / Status Reconciler.

Load and follow:
- playbooks/instagrow-execution-gates-guardrails.md
- playbooks/instagram-publishing-analytics-layer.md
- playbooks/instagrow-cron-learning-loop.md
- sops/automation-setup.md

Task:
Review approved publishing packages and scheduled posts. If standing authorization and adapter credentials are configured, schedule/publish due content via Outstand/Postiz. Reconcile existing adapter statuses and update local publishing ledgers.

Rules:
- Do not publish/schedule unless approval or standing authorization is explicit.
- Verify target account, quota, QA status, adapter credentials, and timezone before write actions.
- Do not DM/comment; ManyChat owns comment/DM automation.
- Do not duplicate posts when API state is uncertain; query adapter post ID first.
- Report only blocked writes, failures, reauth_needed, or approval-needed items.

Output:
- posts scheduled/published,
- status reconciled,
- logs updated,
- analytics checkpoints registered,
- blockers or next actions.
```

### Job C — Post Analytics Puller

Schedule:

```text
Every 1h or daily depending on active posts
```

Mode:

```text
repo_update
```

Prompt skeleton:

```text
You are the InstaGrow Analytics Puller.

Load and follow:
- playbooks/instagrow-execution-gates-guardrails.md
- playbooks/instagram-publishing-analytics-layer.md
- playbooks/instagrow-cron-learning-loop.md

Task:
Review active/published posts from data/publishing-log.md and data/publishing-log.jsonl, pull or request the next due analytics snapshot, and update the local analytics ledgers.

Rules:
- Use manual snapshot mode if Outstand/Postiz credentials are missing.
- Do not publish, schedule, DM, or comment.
- Report to Yuya only if a decision threshold is reached, a credential fails, or manual input is required.

Output:
- snapshots updated,
- posts needing decision,
- recommended action: scale/rewrite/change_format/follow_up/retire/wait.
```

### Job D — Weekly Learning Synthesizer

Schedule:

```text
0 9 * * 1
```

Mode:

```text
repo_update
```

Prompt skeleton:

```text
You are the InstaGrow Weekly Learning Synthesizer.

Load and follow:
- playbooks/instagrow-execution-gates-guardrails.md
- playbooks/instagrow-cron-learning-loop.md
- playbooks/instagram-content-system-layer.md
- playbooks/muse-copywriting-engine.md
- playbooks/instagram-publishing-analytics-layer.md

Task:
Synthesize the last 7 days of research notes, content experiments, publishing logs, analytics snapshots, and qualitative engagement signals into a weekly learning report.

Rules:
- Track weekly, not emotionally day by day.
- Produce decisions, not raw metrics only.
- Propose updates to hook bank, content opportunities, copy variant log, and experiment log.
- Do not patch playbooks unless the lesson is durable or fixes a clear workflow bug.

Output:
- week summary,
- winners/losers,
- audience signals,
- next-week content priorities,
- proposed repo updates,
- questions/blockers for Yuya only if needed.
```

### Job E — Monthly Playbook Evolution Reviewer

Schedule:

```text
0 10 1 * *
```

Mode:

```text
repo_update or dry_run
```

Prompt skeleton:

```text
You are the InstaGrow Playbook Evolution Reviewer.

Load and follow:
- playbooks/instagrow-execution-gates-guardrails.md
- playbooks/instagrow-cron-learning-loop.md
- skills/social-media/instagrow-growth-operator/SKILL.md

Task:
Review the last month of learning reports, experiment outcomes, workflow blockers, and repeated patterns. Identify durable improvements to SOPs, templates, guardrails, or skills.

Rules:
- Do not update from single weak signals.
- Separate durable lessons from temporary task progress.
- If updating skills/playbooks, include evidence and confidence.
- Do not create new cron jobs.

Output:
- durable lessons,
- proposed SOP/skill/playbook patches,
- confidence,
- evidence trail,
- recommended next action.
```

## Hermes Cron Creation Examples

Use Hermes cron from the current chat or CLI.

Example via CLI:

```bash
hermes cron create "0 9 * * 1" \
  --name "InstaGrow Weekly Learning Synthesizer"
```

When using the Hermes `cronjob` tool, configure:

```text
schedule: 0 9 * * 1
deliver: origin or local
skills: instagrow-growth-operator, instagram-operations-playbook
workdir: /absolute/path/to/instagrow
enabled_toolsets: web, browser, terminal, file, delegation
```

Use `deliver: local` for quiet background ledgers. Use `deliver: origin` when Yuya should receive the report.

## What Makes The Agent Smarter

Cron jobs improve InstaGrow only when their output feeds back into durable artifacts.

Preferred learning targets:

- `data/hook-bank.md`,
- `data/content-opportunities.md`,
- `data/keyword-bank.md`,
- `data/copy-variant-log.md`,
- `data/research-source-log.md`,
- `data/analytics-snapshots.md`,
- `data/account-metrics-log.md`,
- `sops/experiment-log.md`,
- weekly/monthly learning reports,
- playbooks/skills only after durable evidence.

Do not save temporary progress, stale task outcomes, one-off PR/commit numbers, or weak daily observations as long-term memory.

## Minimum Viable Cron Setup

For the current automation-first MVP, start with three jobs once a real account and adapter credentials exist:

```text
1. Automated Publisher / Status Reconciler — every 15-60 min while scheduled posts are active
2. Post Analytics Puller — hourly/daily depending on active posts and adapter limits
3. Weekly Learning Synthesizer — every Monday 09:00 WIB
```

Add Monthly Playbook Evolution after several weeks of real data. Add Daily Signal Watcher only after there are competitor lists or niche signals worth monitoring.

# Automation Setup SOP

## Purpose

Use this SOP when Chief wants InstaGrow to automate posting, logging, status reconciliation, analytics pulls, and weekly learning for a real Instagram account or client workspace.

The target is automation-first, not unsafe autonomy. InstaGrow may schedule/publish only when approval or standing authorization is explicit and the adapter path is verified.

## Automation Scope

Allowed when configured:

- schedule/publish approved content through Outstand or Postiz,
- write `data/publishing-log.md` and `data/publishing-log.jsonl`,
- reconcile scheduled/published/error status,
- pull T+1h/24h/72h/7d/30d analytics snapshots,
- write `data/analytics-snapshots.*` and `data/account-metrics-log.*`,
- run weekly learning synthesis from local ledgers,
- sync summaries to Notion when configured.

Not owned by InstaGrow MVP:

- comment/DM automation,
- inbox triage,
- auto-replies,
- lead nurture sequences.

Use ManyChat for those flows. InstaGrow may store the ManyChat keyword/flow name and interpret downstream metrics when available.

## Required Configuration

Minimum:

```text
TARGET_CLIENT_OR_ACCOUNT=
TIMEZONE=Asia/Jakarta
PUBLISHING_ADAPTER=outstand | postiz | manual
AUTOMATION_MODE=approval_required | approved_once | standing_authorization
POSTING_QUOTA_DAILY=
POSTING_QUOTA_WEEKLY=
```

Outstand path:

```text
OUTSTAND_API_KEY=[secret]
OUTSTAND_SOCIAL_ACCOUNT_ID=
```

Postiz path:

```text
POSTIZ_API_KEY=[secret]
POSTIZ_BASE_URL=
POSTIZ_INTEGRATION_ID=
```

Optional dashboard/sync:

```text
NOTION_API_KEY=[secret]
NOTION_DATABASE_ID=
MANYCHAT_FLOW_OR_KEYWORD=
LINK_IN_BIO_URL=
```

Never commit real secret values. Keep them in environment variables, Hermes secrets, or the client workspace configuration outside public docs.

## Standing Authorization Rules

Standing authorization must define:

- target account/client,
- allowed formats,
- daily/weekly quota,
- allowed content pillars,
- approval exceptions,
- restricted topics,
- adapter to use,
- fallback behavior when publishing fails.

Manual approval is still required for:

- new offers/campaigns,
- controversial topics,
- uncertain claims,
- brand-voice drift,
- failed media QA,
- quota exceptions,
- first-time client/account setup.

## Cron Job Set

Create only after a real account, adapter credentials, and at least one approved package exist.

### 1. Automated Publisher / Status Reconciler

Schedule options:

```text
every 30m while scheduled posts are active
# or low-volume:
0 8,12,18 * * *
```

Job behavior:

- read approved packages / publishing ledger,
- schedule/publish due content if authorized,
- reconcile adapter status,
- update publishing logs,
- register analytics checkpoints,
- report only blocked/failure/approval-needed states.

### 2. Post Analytics Puller

Schedule options:

```text
every 1h for active launch windows
# or low-volume:
0 9,15,21 * * *
```

Job behavior:

- find posts with due T+ checkpoints,
- pull post/account metrics through adapter,
- append Markdown/JSONL snapshots,
- label `scale`, `rewrite`, `change_format`, `follow_up`, `retire`, or `wait`,
- report only decision thresholds or missing manual input.

### 3. Weekly Learning Review

Schedule:

```text
0 9 * * 1
```

Job behavior:

- summarize top/bottom posts,
- identify save/follow/link-in-bio CTA patterns,
- update hook bank, content opportunities, copy variant log, and experiment log when authorized,
- recommend next week experiments.

## Completion Criteria

Automation is ready when:

- adapter account connection is verified,
- one test package can be scheduled or exported safely,
- local publishing log receives a structured entry,
- analytics checkpoint plan is created,
- failure fallback is documented,
- Chief understands what is automatic and what still requires approval.

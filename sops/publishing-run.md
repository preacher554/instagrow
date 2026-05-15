# Publishing Run SOP

## Purpose

Run this SOP whenever an approved InstaGrow content package is ready to be published, scheduled, logged, or tracked automatically. The default goal is automation-first: publish/schedule through Outstand/Postiz, write ledgers, register analytics pulls, and fall back to manual only when prerequisites are missing.

## Inputs

Required:

- content ID,
- experiment ID,
- client/account,
- platform,
- format,
- final caption,
- final media path or URL,
- first comment / hashtag block if used,
- alt text if relevant,
- scheduled time in WIB,
- approval status,
- metric target.

Use `templates/publishing-package.md` if the package is not already structured.

## Step 1 — Preflight QA

Check:

- [ ] caption is final,
- [ ] media exists and matches platform format,
- [ ] cover/thumbnail is readable,
- [ ] subtitles are present when needed,
- [ ] hashtags are niche-relevant,
- [ ] alt text exists where relevant,
- [ ] scheduled time is in WIB,
- [ ] approval is explicit,
- [ ] experiment ID is attached.

If approval is missing, stop and return a review package.

## Step 2 — Choose Adapter

Use this order:

1. Outstand if `OUTSTAND_API_KEY` is available, account is connected, and automation-first API publishing is desired.
2. Postiz if `POSTIZ_API_KEY` is available and calendar/review workflow is preferred.
3. Generate-only/manual handoff only if approval, credentials, QA, or account connection is missing.

Do not default to direct Meta Graph API.

## Step 3A — Outstand Flow

1. Verify target social account ID.
2. Upload media with Outstand Media API.
3. Confirm upload and collect `media_id`.
4. Create/schedule post with content, media IDs, account IDs, scheduled time, and first comment if supported.
5. Save returned post ID.
6. Append publishing result to local logs.
7. Define analytics pull schedule.

Record adapter as:

```text
adapter: outstand
```

## Step 3B — Postiz Flow

1. Verify target integration/channel ID.
2. Upload media through Postiz uploads endpoint or upload-from-URL endpoint.
3. Create/schedule post.
4. Save returned post/group ID.
5. Append publishing result to local logs.
6. Define analytics pull schedule.

Record adapter as:

```text
adapter: postiz
```

## Step 3C — Generate-only / Manual Flow

Export:

- caption,
- media files,
- first comment / hashtags,
- alt text,
- scheduled time recommendation,
- posting checklist,
- analytics checklist.

Record adapter as:

```text
adapter: manual
```

## Step 4 — Write Logs

Append to:

```text
data/publishing-log.md
data/publishing-log.jsonl
```

If analytics are immediately available, append to:

```text
data/analytics-snapshots.md
data/analytics-snapshots.jsonl
```

If account metrics are pulled, append to:

```text
data/account-metrics-log.md
data/account-metrics-log.jsonl
```

## Step 5 — Automation Registration

If automation prerequisites are satisfied, register or document:

- adapter post/schedule ID,
- platform post ID/URL when available,
- next status reconciliation time,
- analytics due timestamps,
- quota/cadence state,
- fallback owner if adapter fails.

If Hermes cron is available, use the Automated Publisher / Status Reconciler and Post Analytics Puller jobs from `playbooks/instagrow-cron-learning-loop.md`.

## Step 6 — Analytics Pull Plan

Use these default checkpoints:

```text
T+1h
T+24h
T+72h
T+7d
T+30d
```

If cron/scheduler is unavailable, record the pull plan in the publishing log.

## Step 7 — Learning Handoff

After each analytics snapshot, update or recommend updates to:

- `sops/experiment-log.md`,
- `data/hook-bank.md`,
- `data/content-opportunities.md`,
- `data/copy-variant-log.md`,
- weekly report / Notion dashboard if configured.

## Failure Handling

### API fails before publishing

- Mark status `failed_pre_publish`.
- Preserve package.
- Produce manual handoff.
- Record error summary without secrets.

### API fails after scheduling

- Mark status `schedule_uncertain`.
- Query post details/list endpoint.
- Avoid duplicate posting unless idempotency or cancellation is confirmed.

### Token/account issue

- Mark status `reauth_needed`.
- Notify Chief.
- Do not retry aggressively.

### Analytics unavailable

- Mark analytics status `pending_or_unavailable`.
- Keep post ID and retry at next checkpoint.

## Completion Criteria

A publishing run is complete when:

- post is scheduled/published or manual package is exported,
- local publishing log is updated,
- analytics pull checkpoints are registered or marked `manual_input_required`,
- next status reconciliation is clear,
- next action is clear.

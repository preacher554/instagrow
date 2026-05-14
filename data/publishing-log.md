# Publishing Log

This file is the human-readable ledger for InstaGrow publishing runs.

Machine-readable events should also be appended to `data/publishing-log.jsonl` when automation exists.

## Schema

```text
content_id:
experiment_id:
client_account:
platform:
format:
adapter: outstand | postiz | manual
adapter_post_id:
platform_post_id:
status: draft | scheduled | published | failed_pre_publish | schedule_uncertain | reauth_needed | manual_handoff
scheduled_at_wib:
published_at_wib:
caption_summary:
media_count:
approval_status:
metric_target:
analytics_pull_plan:
notes:
```

## Entries


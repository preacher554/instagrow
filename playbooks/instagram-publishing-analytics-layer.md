# Instagram Publishing + Analytics Layer

## Purpose

This layer turns approved InstaGrow content packages into scheduled/published posts, then pulls performance data back into the learning loop.

It deliberately avoids direct Meta Graph API as the primary integration path. InstaGrow should treat Meta as an underlying dependency handled by a publishing platform, not as the core adapter that GrowthForge maintains directly.

## Default Architecture

```text
Content System Layer
→ Creative Production Layer
→ Publishing + Analytics Layer
→ Engagement Layer
→ Analytics + Learning Layer
```

Operational routes:

```text
Publishing + Analytics Layer
├── Generate-only Mode
│   └── export caption, assets, first comment, hashtags, posting notes
├── Outstand Adapter
│   ├── upload media
│   ├── publish/schedule post
│   ├── schedule first comment when supported
│   ├── pull post analytics
│   ├── pull account metrics
│   └── handle webhook events
├── Postiz Adapter
│   ├── upload media
│   ├── publish/schedule post
│   ├── use visual calendar / approval workflow
│   ├── pull platform analytics
│   └── pull post analytics
└── Storage Adapter
    ├── local Markdown / JSONL source of truth
    └── Notion dashboard sync when needed
```

## Adapter Priority

### 1. Generate-only Mode

Use when credentials are missing, account access is unclear, or Chief wants manual posting.

Output must include:

- final caption,
- media file paths or asset URLs,
- first comment / hashtag block,
- alt text,
- cover notes,
- best posting window in WIB,
- engagement-window checklist,
- metric target,
- experiment ID.

This mode is never a failure. It is the safe MVP path.

### 2. Outstand — Primary API Adapter

Use Outstand when InstaGrow needs an automation-first publishing and analytics backend.

Best for:

- AI-native posting workflows,
- agent-driven scheduling,
- webhook-driven status updates,
- post analytics retrieval,
- account metrics retrieval,
- cheaper multi-client scaling,
- future GrowthForge productization.

Credential:

```text
OUTSTAND_API_KEY
```

Base API:

```text
https://api.outstand.so
```

Important capabilities:

- `POST /v1/posts` — create or schedule a post,
- `GET /v1/posts` — list posts,
- `GET /v1/posts/{id}` — get post details,
- `GET /v1/posts/{id}/analytics` — post analytics,
- `DELETE /v1/posts/{id}` — cancel/delete,
- `POST /v1/posts/{id}/replies` — publish comment/reply,
- `GET /v1/posts/{id}/replies` — retrieve replies/comments,
- `POST /v1/media/upload-url` — get upload URL,
- `POST /v1/media/{id}/confirm` — confirm upload,
- `GET /v1/social-accounts` — list connected social accounts,
- `GET /v1/social-accounts/{id}/metrics` — account metrics,
- `GET /v1/social-accounts/{id}/health` — account health.

Useful webhook events:

```text
post.published
post.error
account.token_expired
```

Storage behavior:

- save Outstand post ID,
- save target social account IDs,
- save scheduled/published timestamp,
- save platform post IDs when returned,
- append analytics snapshots to local JSONL/Markdown,
- sync summarized rows to Notion only if configured.

### 3. Postiz — Scheduler / Calendar Adapter

Use Postiz when InstaGrow needs a visual calendar, review/approval workflow, broad social-network coverage, or self-hostable scheduler.

Best for:

- human review before publishing,
- content calendar operations,
- social media manager workflows,
- multi-platform scheduling,
- MCP/CLI workflows,
- self-host option.

Credential:

```text
POSTIZ_API_KEY
```

Optional:

```text
POSTIZ_BASE_URL
```

Cloud base URL:

```text
https://api.postiz.com/public/v1
```

Important capabilities:

- `GET /integrations` — list connected channels,
- `POST /posts` — create/schedule post,
- `GET /posts` — list posts,
- `DELETE /posts` — delete post,
- `POST /uploads` — upload media,
- `POST /uploads/url` — upload from URL,
- `GET /analytics/{integration}` — platform/channel analytics,
- `GET /analytics/post/{postId}` — post analytics.

Postiz note:

- Docs mention a Public API rate limit of 30 requests/hour.
- API uses `integration`; UI calls the same object `channel`.
- It can be cloud-hosted or self-hosted.

## Storage Strategy

### MVP Source of Truth

Use local files first:

```text
data/publishing-log.md
data/publishing-log.jsonl
data/analytics-snapshots.md
data/analytics-snapshots.jsonl
data/account-metrics-log.md
data/account-metrics-log.jsonl
```

Why local first:

- no extra credential needed,
- versionable in GitHub,
- easy for agents to read/write,
- can be migrated to Notion later,
- keeps operational evidence close to playbooks and experiments.

### Notion Dashboard Sync

Use Notion when Chief needs a client-friendly dashboard, calendar, approval board, or reporting view.

Credentials:

```text
NOTION_API_KEY
NOTION_DATABASE_ID
```

Notion should be treated as a human dashboard, not the only system of record. Local JSONL/Markdown remains the agent-friendly ledger unless Chief decides otherwise.

Suggested Notion entities:

- Content Calendar,
- Published Posts,
- Analytics Snapshots,
- Experiments,
- Weekly Reports,
- Client Accounts.

## Required Handoff From Creative Production

Before publishing, the package must include:

- content ID / experiment ID,
- platform and format,
- final caption,
- final media paths or URLs,
- cover asset if relevant,
- alt text,
- first comment or hashtag block,
- scheduled date/time in WIB,
- target account/channel ID if known,
- CTA,
- metric target,
- approval status.

If any high-risk field is missing, stay in generate-only mode or mark the package `needs_review`.

## Publishing QA Checklist

Before scheduling or posting:

- [ ] Caption final and platform-safe.
- [ ] CTA is clear.
- [ ] Media aspect ratio is correct.
- [ ] Cover/thumbnail is readable.
- [ ] Subtitles are burned in or available when needed.
- [ ] Hashtags are relevant and not generic stuffing.
- [ ] Alt text exists for static/carousel assets.
- [ ] Account/channel is correct.
- [ ] Time is in Asia/Jakarta / WIB unless explicitly changed.
- [ ] Experiment ID is attached.
- [ ] Approval status is clear.

## Analytics Pull Schedule

Recommended snapshots:

```text
T+1h   early velocity
T+24h  first-day signal
T+72h  stabilization
T+7d   weekly decision
T+30d  evergreen/long-tail review
```

Minimum metrics to store when available:

- likes,
- comments,
- shares,
- saves,
- views,
- impressions,
- reach,
- engagement rate,
- profile visits,
- follows,
- link clicks / replies / leads when available.

For Instagram, priority interpretation:

- Reels: retention, views, shares, follows, profile visits.
- Carousels: saves, swipes if available, shares, comments.
- Stories: replies, sticker taps, link clicks, exits.
- Conversion content: DMs, clicks, lead intent, offer replies.

## Learning Loop

Each analytics pull should update:

```text
experiment log
hook bank
content opportunities
copy variant log
weekly report
```

Decision rules:

- Scale if reach plus save/share/follow quality is strong.
- Rewrite if hook underperforms but topic signal is strong.
- Change format if topic works elsewhere but Instagram format underperforms.
- Retire if repeated variants fail with no monetization or audience signal.

## Credential Policy

Never commit real credentials.

Use environment variables or secret manager:

```text
OUTSTAND_API_KEY
POSTIZ_API_KEY
POSTIZ_BASE_URL
NOTION_API_KEY
NOTION_DATABASE_ID
```

Direct Meta credentials are not part of InstaGrow's core adapter list. They may exist behind Outstand/Postiz connection flows, but GrowthForge should not maintain Meta Graph API publishing code unless Chief explicitly changes strategy.

# InstaGrow API Credential Checklist

Use this checklist when InstaGrow needs to move from Hermes-native/manual operation into API-assisted research, publishing, analytics, or dashboard storage.

## When to Ask Chief

Ask for credentials only when one of these is true:

- the research run needs more volume than browser/manual inspection can handle,
- the agent needs repeatable public social collection,
- the agent needs broad Instagram keyword/content search,
- the same research workflow will run repeatedly or on a schedule,
- manual evidence is not enough to identify outliers or competitor patterns,
- approved content needs automated scheduling/publishing,
- published content needs automated analytics pulls,
- client-facing dashboards or reports need Notion sync.

Do not block MVP research while credentials are missing. Continue with Hermes-native tools and mark API steps as pending.

## Research Credentials

### Apify

Request:

```text
APIFY_TOKEN
```

Use for:

- public Instagram collection,
- TikTok collection,
- X/Twitter public collection,
- competitor snapshots,
- larger-scale social research exports.

Validation target:

- agent can run a small test actor/search,
- export returns structured data,
- source mode is recorded as `apify` in the research brief.

### Xpoz / ClawHub Instagram Search

Request either:

```text
XPOZ_API_KEY
```

or:

```text
Xpoz/ClawHub MCP server details
```

Use for:

- Instagram keyword search,
- profile/account discovery,
- author post history,
- caption/subtitle/spoken-word search when available.

Validation target:

- agent can run a small Instagram keyword search,
- export returns posts or profiles,
- source mode is recorded as `xpoz` in the research brief.


## Publishing + Analytics Credentials

### Outstand

Request:

```text
OUTSTAND_API_KEY
```

Use for:

- upload media,
- create or schedule posts,
- schedule first comment when supported,
- pull post analytics,
- pull account metrics,
- receive webhook events such as `post.published`, `post.error`, and `account.token_expired`.

Validation target:

- agent can list connected social accounts,
- agent can create a test draft/scheduled post in a safe account or sandbox flow,
- agent can retrieve post/account analytics for a known published item,
- source mode is recorded as `outstand` in the publishing log.

### Postiz

Request:

```text
POSTIZ_API_KEY
```

Optional:

```text
POSTIZ_BASE_URL
```

Use for:

- visual-calendar scheduling,
- human approval/review workflows,
- media upload,
- create or schedule posts,
- pull platform/channel analytics,
- pull post analytics,
- MCP/CLI social media operations.

Validation target:

- agent can list integrations/channels,
- agent can create a safe draft/scheduled post,
- agent can retrieve analytics for an integration or published post,
- source mode is recorded as `postiz` in the publishing log.

## Storage / Dashboard Credentials

### Notion

Request only when Chief wants dashboard or client-facing reporting:

```text
NOTION_API_KEY
NOTION_DATABASE_ID
```

Use for:

- content calendar dashboard,
- published post database,
- analytics snapshots,
- experiment tracking,
- weekly reports.

Default source of truth remains local Markdown/JSONL unless Chief decides otherwise.

## Safe Handling Rules

- Never print credentials back into chat or commit them to the repo.
- Store secrets in the runtime environment or Hermes `.env`, not markdown files.
- Commit only docs, schemas, adapters, and examples with fake placeholders.
- If research credentials are unavailable, use Hermes-native mode.
- If publishing credentials are unavailable, use generate-only/manual publishing packages.
- Do not build direct Meta Graph API publishing unless Chief explicitly changes the adapter strategy.

## Reminder Copy

When automation is needed, use this concise prompt:

```text
Chief, for the next InstaGrow automation step, Yuya needs whichever applies:

Research automation:
- APIFY_TOKEN
- XPOZ_API_KEY or Xpoz/ClawHub MCP access details

Publishing + analytics:
- OUTSTAND_API_KEY and/or POSTIZ_API_KEY
- POSTIZ_BASE_URL if self-hosted

Dashboard sync, optional:
- NOTION_API_KEY
- NOTION_DATABASE_ID

Manual Hermes-native research and generate-only publishing can continue now; these credentials unlock automation.
```

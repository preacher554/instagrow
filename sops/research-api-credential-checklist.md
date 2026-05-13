# Research API Credential Checklist

Use this checklist when InstaGrow needs to move from Hermes-native manual research into API-assisted collection.

## When to Ask Chief

Ask for credentials only when one of these is true:

- the research run needs more volume than browser/manual inspection can handle,
- the agent needs repeatable public social collection,
- the agent needs broad Instagram keyword/content search,
- the same research workflow will run repeatedly or on a schedule,
- manual evidence is not enough to identify outliers or competitor patterns.

Do not block MVP research while credentials are missing. Continue with Hermes-native tools and mark API steps as pending.

## Preferred Credentials

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

## Safe Handling Rules

- Never print credentials back into chat or commit them to the repo.
- Store secrets in the runtime environment or Hermes `.env`, not markdown files.
- Commit only docs, schemas, adapters, and examples with fake placeholders.
- If credentials are unavailable, use Hermes-native mode.

## Reminder Copy

When automation is needed, use this concise prompt:

```text
Chief, for the next InstaGrow research automation step, Yuya needs:
- APIFY_TOKEN
- XPOZ_API_KEY or Xpoz/ClawHub MCP access details

Manual Hermes-native research can continue now, but those two unlock scalable collection.
```

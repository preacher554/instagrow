# Cross-Platform Social Research Playbook

## Principle

Do not research Instagram in isolation.

Instagram is the execution target, but strong strategy needs signal from:

- Instagram: target-platform proof.
- X/Twitter: emerging narratives, sharp hooks, hot takes.
- TikTok: short-form pacing, audio, visual patterns.
- YouTube: evergreen demand, depth, titles, objections.
- Web/forums: pain language, buying triggers, monetization clues.

## Mandatory First Step — Account Status Routing

Before research starts, load `playbooks/account-status-routing.md` and classify the account:

1. Zero / new account.
2. Existing / active account.
3. Dormant / messy account.

This classification determines whether the agent should build positioning from external research, optimize from internal account data, or first decide whether to revive/pivot/reset.

Do not run the same analysis flow for all accounts.

## Research Tool Stack

Use `playbooks/instagram-research-layer.md` as the operational source of truth for tooling.

Default stack:

- Hermes browser/public research.
- Hermes vision/screenshot analysis.
- Hermes web/content extraction.
- Terminal + Python for normalization/scoring.
- File/repo tools for research storage.
- Subagents for platform-specific scouting.

Preferred optional APIs:

- Apify for scalable public social collection across Instagram, TikTok, and X/Twitter.
- Xpoz / ClawHub Instagram Search for Instagram keyword/content/profile discovery.

If Apify or Xpoz credentials are missing, continue in Hermes-native mode and mark API-dependent collection as pending.

## Research Brief Inputs

Define:

- account status: zero/new, existing/active, or dormant/messy,
- target brand/account,
- niche/topic cluster,
- audience segment,
- offer or monetization path,
- research window,
- seed accounts,
- keywords,
- desired output.

## Query Types

Create three query groups:

1. Core keywords: niche phrases.
2. Pain keywords: problems and objections.
3. Adjacent keywords: nearby interests with same audience.

Example for GrowthForge:

- Core: AI agents, automation workflow, business systems.
- Pain: too many tools, manual operations, no time to execute.
- Adjacent: solopreneur systems, creator business, agency operations.

## Collection Checklist

### Instagram

Collect:

- Reels/posts by keyword,
- competitor content,
- hooks,
- captions,
- hashtags,
- visible engagement,
- carousel cover structure,
- profile positioning.

### X/Twitter

Collect:

- high-engagement posts/threads,
- contrarian takes,
- pain language,
- repeated arguments,
- fresh memes/narratives.

### TikTok

Collect:

- opening hooks,
- pacing,
- visual patterns,
- audio/sound usage,
- comments for pain/objections.

### YouTube

Collect:

- titles,
- thumbnails,
- transcripts,
- evergreen topics,
- objections and depth angles.

### Web / Forums

Collect:

- Google/search demand,
- Reddit/forum questions,
- reviews/complaints,
- competitor offers and lead magnets.

## Shared Research Schema

For each item:

```json
{
  "platform": "instagram",
  "url": "",
  "creator": "",
  "published_at": "",
  "format": "reel|carousel|tweet|thread|short|video|post",
  "topic": "",
  "hook": "",
  "caption_or_text": "",
  "metrics": {
    "views": null,
    "likes": null,
    "comments": null,
    "shares": null,
    "saves": null,
    "followers": null
  },
  "signals": {
    "pain": [],
    "promise": [],
    "objection": [],
    "cta": "",
    "visual_pattern": "",
    "retention_pattern": "",
    "psychological_mechanism": "",
    "monetization_clue": ""
  },
  "source_mode": "hermes_manual|apify|xpoz|other_api",
  "confidence": "verified|probable|hypothesis|speculation"
}
```

## Classification

Classify topics into:

1. Cross-platform validated.
2. Emerging arbitrage.
3. Instagram-native proof.
4. Saturated trend.

## Opportunity Score

Score 0–5:

- pain intensity,
- business relevance,
- engagement proof,
- novelty,
- Instagram format fit,
- client fit,
- trust potential,
- lead potential,
- execution ease,
- saturation penalty.

Formula:

```text
opportunity_score = pain + business_relevance + engagement_proof + novelty + format_fit + client_fit + trust_potential + lead_potential + execution_ease - saturation_penalty
```

## Required Output

A research run is not done until it produces:

- executive summary,
- top opportunities,
- hook bank,
- competitor/creator notes,
- platform notes,
- production-ready Reel/carousel/Story briefs,
- opportunity scorecards,
- bias/confidence notes,
- pattern/gap/tension/temporal findings,
- experiment recommendations.

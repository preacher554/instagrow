# Account Status Routing Playbook

This is the first step before any Instagram growth analysis.

The agent must classify the account state before choosing the research or optimization path.

## Step 0 — Classify Account Status

Classify the account as one of three states:

1. **Zero / New Account**
   - No meaningful content history.
   - Very few or no posts.
   - No reliable performance baseline.
   - Audience and algorithm have not learned the account yet.

2. **Existing / Active Account**
   - Has meaningful content history.
   - Has followers and visible performance signals.
   - Has enough posts/Reels to infer current niche, format patterns, and audience response.

3. **Dormant / Messy Account**
   - Account exists but posting is inactive, inconsistent, or niche is scattered.
   - Has old data, but the signal may be stale or misleading.
   - Needs a revive/pivot/reset decision before optimization.

## Routing Logic

```text
Start
↓
Detect account status
↓
If Zero/New:
  run Niche + Positioning Research Path
↓
If Existing/Active:
  run Existing Account Audit + Optimization Path
↓
If Dormant/Messy:
  run Dormant Account Triage Path
```

## Path A — Zero / New Account

Primary objective:

> Build positioning and market-content fit from external signals.

Because the account has no reliable internal data, do not pretend to optimize. Research first.

### Required Analysis

1. Define niche hypothesis.
2. Define target audience.
3. Map audience pains, desires, objections, and buying triggers.
4. Research competitors and adjacent creators.
5. Research cross-platform signals:
   - Instagram for target-platform proof.
   - X/Twitter for emerging narratives and sharp hooks.
   - TikTok for short-form patterns.
   - YouTube for depth and evergreen demand.
   - Web/forums for raw pain language.
6. Build content pillars.
7. Build profile positioning:
   - username/name field recommendation,
   - bio,
   - visual identity direction,
   - CTA/link direction.
8. Build first experiment batch.

### Output

The agent should produce:

- niche recommendation,
- positioning statement,
- audience definition,
- competitor map,
- keyword bank,
- content pillars,
- first 14–30 day content experiment plan,
- Reels/carousel/Story briefs.

### Success Criteria

The goal is not immediate viral growth. The first goal is to establish baseline signal:

- Which topics get attention?
- Which hooks create retention?
- Which format gets saves/shares?
- Which audience segment responds?
- What positioning is easiest for Instagram to understand?

## Path B — Existing / Active Account

Primary objective:

> Infer current positioning from actual account data, then optimize bottlenecks and scale winners.

Do not force a new niche before reading what the account already signals.

### Required Analysis

1. Audit profile:
   - username/name field,
   - bio,
   - CTA,
   - highlights,
   - visual trust,
   - niche clarity.
2. Audit content history:
   - top Reels,
   - top carousels,
   - weak posts,
   - posting consistency,
   - topic clusters.
3. Infer actual current niche:
   - what the owner thinks the niche is,
   - what the audience responds to,
   - what the algorithm likely understands.
4. Identify winners and losers:
   - hooks,
   - formats,
   - topics,
   - captions,
   - visual patterns,
   - CTAs.
5. Diagnose bottlenecks:
   - weak hook,
   - niche drift,
   - low retention,
   - low saves/shares,
   - poor profile conversion,
   - inconsistent cadence,
   - weak SEO,
   - visual mismatch,
   - content attracts attention but not buyers.
6. Build optimization plan.
7. Build scale plan from existing winners.

### Output

The agent should produce:

- current account positioning diagnosis,
- content winner/loser table,
- bottleneck diagnosis,
- optimization priorities,
- content formats to scale,
- content formats to stop or reduce,
- next 14–30 day experiment plan.

### Success Criteria

The goal is to improve existing baseline:

- higher Reels completion rate,
- higher saves/shares per 1,000 views,
- better profile visits,
- better follow conversion,
- clearer niche signal,
- more monetization-relevant engagement.

## Path C — Dormant / Messy Account

Primary objective:

> Decide whether to revive, pivot, or reset.

Dormant accounts are dangerous because old data can mislead the agent.

### Required Analysis

1. Check last active posting period.
2. Check whether old followers still match the desired audience.
3. Check topic drift and content inconsistency.
4. Identify any evergreen winners worth preserving.
5. Decide one of three actions:
   - **Revive:** same niche, stronger execution.
   - **Pivot:** adjacent niche, preserve useful audience equity.
   - **Reset:** treat like a new account if signal is too broken.

### Output

The agent should produce:

- revive/pivot/reset recommendation,
- reason for decision,
- risks,
- first 2-week recovery plan,
- content cleanup/profile repositioning suggestions.

## Decision Guardrails

- Do not apply existing-account optimization to a zero account.
- Do not apply zero-account positioning blindly to an existing account.
- Do not trust owner assumptions more than account data.
- Do not overreact to one viral post.
- Do not chase trend virality if it damages niche clarity.
- Always connect recommendations to GrowthForge business leverage and monetization relevance.

## Required First Question Set

When the account is provided, ask or infer:

1. Is this account new, active, or dormant?
2. What is the account handle?
3. What is the intended niche/business goal?
4. Is there access to Instagram Insights?
5. Is the goal reach, followers, leads, sales, authority, or validation?
6. Is the audience local Indonesian, global, or mixed?

If data is unavailable, classify based on public profile evidence and state confidence level.

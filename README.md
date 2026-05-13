# InstaGrow

InstaGrow is the GrowthForge operating repository for Instagram growth skills, agent instructions, research workflows, and repeatable SOPs.

Its purpose is simple: when Yuya spawns or directs an Instagram-focused subagent, this repo becomes the source of truth.

## Mission

Build a reusable Instagram growth system for GrowthForge that can:

- research cross-platform content opportunities,
- turn insights into Instagram-native Reels, carousels, Stories, and captions,
- preserve experiments and lessons learned,
- improve monetization-relevant content decisions,
- guide future Instagram specialist agents without starting from zero.

## Core Principles

- Reels drive organic discovery.
- Carousels build saves, depth, and framework authority.
- Stories build relationship and audience warmth.
- Instagram SEO matters: captions, bio, keywords, alt text, and niche clarity.
- Likes are not enough. Track retention, saves, shares, comments, profile visits, and conversion signals.
- GrowthForge content must serve business leverage, not vanity virality.
- Research must be cross-platform: Instagram, X/Twitter, TikTok, YouTube, and web/forum pain language.
- Analysis must start by classifying account status: zero/new, existing/active, or dormant/messy.

## Workflow Map

```text
InstaGrow workflow
├── 0. Account Status Routing
│   ├── Zero / New Account
│   │   └── niche research → positioning → content pillars → launch experiments
│   ├── Existing / Active Account
│   │   └── current niche audit → winner/loser analysis → bottleneck diagnosis → optimization
│   └── Dormant / Messy Account
│       └── revive vs pivot vs reset decision → recovery plan
├── 1. Research Layer
│   └── Instagram + X/Twitter + TikTok + YouTube + web/forum signals
├── 2. Content Layer
│   └── Reels + carousels + Stories + captions + CTAs
├── 3. Experiment Layer
│   └── hypothesis → metric target → result → decision
└── 4. Future Automation Layer
    └── analytics, scheduler, publishing, database, agent workers
```

## Repository Structure

Current working structure:

```text
instagrow/
├── README.md
├── agents/
│   └── instagrow-agent.md              # Main specialist-agent instruction layer
├── playbooks/
│   ├── account-status-routing.md       # Step 0: zero/new vs existing/active vs dormant/messy
│   ├── instagram-operations.md         # Instagram fundamentals and operating rules
│   └── cross-platform-research.md      # Research workflow before content production
├── sops/
│   ├── weekly-content-cycle.md         # Weekly execution rhythm
│   └── experiment-log.md               # Experiment tracking format
└── templates/
    ├── research-brief.md
    ├── reel-brief.md
    ├── carousel-brief.md
    └── story-sequence.md
```

Target evolution as the system matures:

```text
instagrow/
├── README.md
├── agents/
│   ├── instagrow-agent.md
│   ├── instagrow-research-operator.md
│   ├── instagrow-content-operator.md
│   └── instagrow-analytics-operator.md
├── skills/
│   └── social-media/
│       ├── instagrow-operations-playbook/
│       │   └── SKILL.md
│       ├── instagrow-cross-platform-research/
│       │   └── SKILL.md
│       ├── instagrow-account-status-routing/
│       │   └── SKILL.md
│       └── instagrow-growth-operator/
│           └── SKILL.md
├── playbooks/
│   ├── account-status-routing.md
│   ├── instagram-research-layer.md
│   ├── instagram-content-layer.md
│   ├── instagram-analytics-layer.md
│   └── instagram-automation-layer.md
├── sops/
│   ├── weekly-content-cycle.md
│   ├── experiment-log.md
│   ├── existing-account-audit.md
│   ├── zero-account-launch.md
│   └── dormant-account-revival.md
├── templates/
│   ├── research-brief.md
│   ├── content-brief.md
│   ├── weekly-report.md
│   ├── experiment-log.md
│   ├── reel-brief.md
│   ├── carousel-brief.md
│   └── story-sequence.md
├── evaluations/
│   └── clawhub-instagram-analyzer-review.md
└── scripts/
    └── validate_skills.py
```

## First Use

When creating an InstaGrow-focused agent, load:

1. `agents/instagrow-agent.md`
2. `playbooks/account-status-routing.md`
3. `playbooks/instagram-operations.md`
4. `playbooks/cross-platform-research.md`
5. Relevant template from `templates/`

The agent should output production-ready briefs, not just ideas.

## Status

Initial foundation. This repo is designed to evolve as GrowthForge develops stronger Instagram systems and real account data comes in.

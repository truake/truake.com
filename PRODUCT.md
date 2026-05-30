# Truake — Product Context

## Register
brand

## Purpose
Marketing and landing pages for Truake OPC (one-person company) and its two iOS products: Diffr and Pathoragy. Design IS the product — these pages establish brand credibility, communicate philosophy, and convert visitors to app downloads / beta sign-ups. No dashboard, no auth, no data tables.

## Products
- **truake.com** — Studio homepage. Positions Rock Lam as a principled one-person company builder. Gateway to both products.
- **truake.com/diffr** — App landing for Diffr (iOS). Converts visitors to TestFlight beta users. Core message: "one brand per slot, decision closed."
- **truake.com/pathoragy** — App landing + beta waitlist for Pathoragy (iOS). Converts to waitlist emails. Core message: "your life is a navigation problem."

## Target Users
- **Diffr**: Beginner consumers (18–35) who suffer from choice paralysis when starting a new hobby or buying category. They've done the research loop before and found it exhausting.
- **Pathoragy**: Adults (25–45) who feel their life is drifting — working hard but not toward anything coherent. They want structured long-horizon direction, not daily productivity apps.
- **Truake.com**: Both audiences above, plus people curious about how one person builds a company with AI tools.

## Brand Personality
Editorial. Principled. Warm but precise. Confident without being loud. Uses serif display type as a signal of considered slowness vs. generic SaaS speed. One human, no team, no VC — this shapes every word and layout choice.

## Anti-References
- Generic purple-gradient AI startup landing pages
- Three-column "Features" grids with emoji icons
- Centered hero on dark mesh background
- Glassmorphism on everything
- Infinite-loop micro-animations on every section
- Inter + slate-900 defaults
- "Seamless", "robust", "elevate", "empower" copy

## Design Principles
1. One decisive accent per page — not a rainbow
2. Warm neutrals are earned, not default — the warmth must come from typography and accent, not just the background tint
3. Serif display type at considered scale — editorial authority, not shouting
4. Every animation earns its place — no entrance animation that gates content visibility
5. Physical buttons — `:active` scale states make interactions feel real

## Accessibility
- Body text contrast ≥ 4.5:1 always
- No content gated behind JS-triggered transitions
- Reduce-motion media query always respected

## Tech Stack
Next.js 16 App Router (RSC), Tailwind CSS, motion/react (v12), inline React styles, Google Fonts via next/font

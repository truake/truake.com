# App Store Connect — Privacy Nutrition Label (Pathoragy)

## 30-word summary (paste into the Data Collection notes)

> Pathoragy collects no data. Your journal stays on your device — no servers, no trackers, no advertising ID. AI runs on your own key, sent straight to your chosen provider.

*(29 words.)*

## How to fill the App Store Connect "Data Collection" form

Recommended answer: **"Data Not Collected."** truake (the developer) collects, stores, and accesses **nothing** — the app is local-first, embeds no analytics/ads SDKs, and collects no IDFA. There is no developer data path.

If a reviewer asks about the AI and camera flows: those are **user-initiated, bring-your-own-key** requests that travel **directly from the user's device to a provider the user configured** (never through truake, never accessible to truake). They are fully disclosed in the Privacy Policy (§2B, §4, §5), which is linked from the app's App Store listing.

- Tracking: **No** (no IDFA, no cross-app/site tracking).
- Data linked to you: **None collected by the developer.**
- Data not linked to you: **None collected by the developer.**

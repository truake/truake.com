# Pathoragy — Privacy Policy

**Effective date:** 10 June 2026  
**Last updated:** 10 June 2026

This Privacy Policy explains what data Pathoragy handles, where it goes, and the control you have over it. We wrote it in plain English on purpose: you should be able to understand exactly what happens to your information without a law degree.

The short version: **Pathoragy is local-first. Your journal lives on your device, not on our servers — because we do not run any servers that store your data.** The only time information leaves your device is when *you* tap a button to send a request to an AI provider that *you* configured with *your own* API key, or when Apple processes a subscription you chose to buy.

---

## 1. Who we are

Pathoragy is an iOS app for intentional living — a private logbook and "Value Boat" you grow over time — and the companion to the book *The Value Boat*. It is built and operated by **truake LLC** ("truake", "we", "us", "our"), the studio of independent developer Rock Lam (Apple Developer Team ID `UH7D745P6G`).

This policy covers the **Pathoragy iOS app** and the **`truake.com/pathoragy`** website.

If you have any question after reading this, write to us at **[rocklam@truake.com](mailto:rocklam@truake.com)**.

## 2. What data we collect

We group everything Pathoragy touches into four buckets. Read all four — the headline is how *little* leaves your device.

### A. Stored locally on your device (never sent to us)

Saved in Apple's on-device SwiftData store and, where you enable it, your private iCloud. We cannot see any of it:

- Logbook titles, notes, and the "evidence" text you write for each entry
- Your Vitality four-axis score history
- Your Boat's customization — its name, paint, and companions
- Your notification preferences

### B. Requests you choose to send to your own AI provider (BYO key)

Pathoragy uses a **"bring your own key" (BYO key)** model. You configure an AI provider and API key in **Settings** — by default DeepSeek, optionally OpenAI, Cloudflare Workers AI, or any OpenAI-compatible endpoint. Nothing is sent to AI unless you actively trigger it:

- When you tap **"Generate this week's reflection,"** Pathoragy sends your current Boat composition, the types of Waypoints you completed, and your **most recent 8 evidence strings** to the AI provider you configured.
- When you tap **"Verify with photo,"** Pathoragy sends one freshly-captured photo (JPEG, resized to 1280px) to your configured AI Vision provider for content verification.

These requests go **directly from your device to the provider you selected, authenticated with your own API key.** **Pathoragy does not run any server, does not proxy these requests, and never holds, stores, or sees your data or your prompts.** What the AI provider then does with the request is governed by **that provider's** privacy policy, not ours — so review the policy of whichever provider you choose.

### C. Data necessarily handled by Apple

- **StoreKit 2** — if you subscribe to Pathoragy Pro, Apple processes the purchase and validates the receipt. Payment and billing are handled entirely by Apple; we never receive your card details.

### D. What we do NOT collect

We want to be explicit, because "we value your privacy" is meaningless without specifics. Pathoragy contains **no third-party tracking or analytics SDKs** — no Firebase, Mixpanel, Amplitude, or Sentry. We do **not** collect, and the app does **not** access:

- The **IDFA** / advertising identifier (no ad tracking, no IDFA collection)
- Device fingerprints
- Your **location**
- Your **contacts**
- Bulk access to your **photo library** (the camera is used only for a live photo you take in the moment — see §5)

We do not sell data. We do not share it for advertising. There is no cross-app or cross-site tracking, because there is no tracking at all.

### E. Notifications

- Reminders are **fully local notifications** (`UNCalendarNotificationTrigger`). They are scheduled and fire on your device and do **not** go through Apple Push Notification service (APNs) or any server.
- You choose during Onboarding whether to enable them, and can change this any time in iOS Settings.

## 3. How we use the data

Plainly, mapped to the buckets above:

- **Local data (A)** powers the app itself — drawing your Logbook, computing your Vitality scores, and growing your Boat — on your device. We never use it because we never receive it.
- **AI requests (B)** exist only to return the weekly reflection or photo verification *you* asked for, in the moment you ask. We are not in that data path.
- **Apple/StoreKit data (C)** is used solely to unlock and maintain the subscription you purchased.
- We do **not** use any of your data to build profiles, train models, target ads, or for any purpose beyond delivering the feature in front of you.

## 4. AI processing disclosure

This is the most important section, so we give it its own space.

Pathoragy's AI features are **opt-in, on-demand, and bring-your-own-key**:

- **You** add an AI provider and your **own** API key in Settings. Until you do, the AI features simply do nothing.
- The default provider is **DeepSeek**. You may instead choose **OpenAI**, **Cloudflare Workers AI**, or **any OpenAI-compatible endpoint** you control.
- AI is invoked **only when you tap a specific button** ("Generate this week's reflection" or "Verify with photo"). There is no background or automatic AI processing.
- Requests are sent **directly from your device to your chosen provider** using **your** key. **truake operates no server in this path** and never receives, stores, logs, or inspects your prompts, evidence, photos, or the AI's responses.
- You can **switch providers or clear your provider/key at any time** in Settings. Clearing it immediately stops all outbound AI requests.
- Because the request is made with your own account and key, the provider's handling of that data is subject to **their** terms and privacy policy. We encourage you to read the policy of whichever provider you select (for example, DeepSeek's or OpenAI's).

**AI output is generated text and is not professional advice** — see our Terms of Service for the full disclaimer.

## 5. Camera usage

Pathoragy can verify a Waypoint with a photo. When you tap **"Verify with photo,"** the app opens the camera so you can take a **live photo in the moment**. That single image is resized (JPEG, 1280px) and sent to your configured AI Vision provider for verification.

- Pathoragy uses the camera **only for live capture**. It does **not** read, scan, or import from your existing photo library.
- The photo is used for that one verification request and is not stored on any server by us (we have none).
- The system camera-permission prompt shows our usage description verbatim:

> **NSCameraUsageDescription:** "Pathoragy uses the camera so you can verify a Waypoint with a photo you take in the moment. The image is sent only to the AI provider you configured in Settings for verification, and is never uploaded to Pathoragy."

You can decline or revoke camera access at any time in iOS Settings; photo verification simply becomes unavailable.

## 6. Subscriptions

Pathoragy is free to use, with an optional **Pathoragy Pro** subscription:

- **Pathoragy Pro Monthly** — US$4.99 / month
- **Pathoragy Pro Annual** — US$34.99 / year (saves about 42%)

The **free tier** includes the 9 launch Lighthouse figures free forever, one truncated AI reflection per week, and the full Logbook and Boat-growing features.

Subscriptions are **auto-renewable** and processed through your **Apple ID** via **StoreKit 2**. Apple handles all payment and billing; we do not receive your payment information. You can view, manage, or cancel your subscription at any time in **Settings → Apple ID → Subscriptions** on your device.

## 7. Children's privacy

Pathoragy is **not directed at children under 13**, and we do not knowingly collect personal information from children under 13 (in line with COPPA). Because the app is local-first and collects no personal data on our servers, there is no children's data for us to hold. If you believe a child has used the app under a parent's Apple ID and you have a concern, email **[rocklam@truake.com](mailto:rocklam@truake.com)**.

## 8. Data retention

- **You control your local data entirely.** It is retained on your device for as long as you keep the app installed.
- **Deleting the app deletes the data.** Because Pathoragy stores your Logbook, scores, and Boat locally (and, if you enabled it, in your own iCloud), uninstalling the app removes the on-device data. If you used iCloud, manage that copy in iOS Settings → your name → iCloud.
- We retain **no copy** on our side, because we never receive one.
- AI providers may retain requests according to **their** retention policies — review the policy of the provider you choose.

## 9. International data transfers

Pathoragy itself **does not transfer your data across borders**, because it does not send your data anywhere — it stays on your device. The **only** cross-border movement that can occur is the AI request **you** trigger, which travels from your device to the **provider and region you selected** in Settings. That transfer is determined by your choice of provider and governed by that provider's terms. If you prefer to keep AI requests within a particular region, choose a provider/endpoint located there.

## 10. Your rights

Depending on where you live, you have rights under the **EU/UK GDPR (Articles 15–22)**, the **California CCPA/CPRA**, and **China's PIPL**, including the rights to **access, correct, delete, and port** your data, and to object to or restrict certain processing.

Because Pathoragy is **local-first and holds none of your data on our servers**, you exercise most of these rights directly and instantly on your own device:

- **Access / portability** — your data is on your device and yours to read and export through the app and your iCloud.
- **Correction** — edit any Logbook entry, score, or Boat detail directly in the app.
- **Deletion** — delete individual entries in the app, or **delete everything by uninstalling the app** (and removing the iCloud copy if you used one). Deletion is therefore equivalent to uninstalling.

We have **no personal data of yours to surrender or erase** on request, because we never collected it. We do **not** sell or "share" personal information as defined by the CCPA/CPRA. If you are in the EU, UK, or California, you also have the right to lodge a complaint with your local data-protection authority. For any rights question, email **[rocklam@truake.com](mailto:rocklam@truake.com)**.

## 11. Cookies and the website

The **`truake.com/pathoragy`** website is built to be privacy-friendly. It sets **no advertising or tracking cookies** and does not run third-party advertising trackers. Any analytics used are privacy-respecting and aggregate only; they do not build a profile of you or follow you across the web.

## 12. Changes to this policy

We may update this policy as the app evolves (for example, if we add a feature). When we make a material change, we will update the **"Last updated"** date at the top and, where appropriate, note the change in the app or on this page. Continued use of Pathoragy after an update means you accept the revised policy.

## 13. Contact

Questions, requests, or concerns about privacy:

**truake LLC — operating Pathoragy**  
Email: **[rocklam@truake.com](mailto:rocklam@truake.com)**

*(A postal address will be listed here once a registered mailing address is published.)*

## 14. Summary

Pathoragy keeps your reflective practice **on your device**. We run no servers that store your data, embed no trackers, and collect no advertising identifiers. The only data that ever leaves your phone is a request **you** consciously send — with **your own key** — to an AI provider **you** chose, or a subscription Apple processes for you. That is the whole story.

---

*truake — operating Pathoragy.*

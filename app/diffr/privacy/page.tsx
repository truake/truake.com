import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Diffr",
  description:
    "Diffr privacy policy. Explains what data we collect, why we collect it, how we use it, and the choices you have.",
  robots: { index: true, follow: true },
};

export default function DiffrPrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F0EBE3", color: "#2A2620", fontFamily: "var(--font-syne), Georgia, serif", padding: "0 0 80px" }}>
      <Header label="Privacy Policy" />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 32px 0" }}>

        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.meta}>Last updated: May 24, 2026</p>

        <p style={s.p}>
          This Privacy Policy explains what data Diffr collects, why we collect it, how we use it, and the choices you have. It reflects exactly what we have declared in Apple&apos;s App Store Privacy Nutrition Labels — what you see here matches what Apple shows on our App Store listing.
        </p>
        <p style={s.p}>
          If you have any question after reading, write us at <A href="mailto:diffr@truake.com">diffr@truake.com</A>.
        </p>

        <Hr />

        <H2>1. Who we are</H2>
        <p style={s.p}>
          Diffr (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a brand-discovery and shopping-companion iOS app operated by <strong>truake LLC</strong> (Apple Developer Team ID <code style={s.code}>UH7D745P6G</code>). This policy applies to the Diffr iOS app and the <code style={s.code}>truake.com/diffr</code> website.
        </p>

        <Hr />

        <H2>2. What we collect, and why</H2>
        <p style={s.p}>
          Everything below is <strong>linked to your account identity</strong> — there is no anonymous data path in Diffr. We do <strong>not</strong> sell any of it, and we do <strong>not</strong> track you across other apps or websites.
        </p>

        <Table
          headers={["Data", "Source", "Why we collect it"]}
          rows={[
            [<><strong>Email address</strong></>, "Sign in with Apple (you can hide it via Apple's relay)", "Account identification; you can sign back in even after reinstalling."],
            [<><strong>Name</strong></>, "Sign in with Apple (optional — you may omit)", "Shown on your Profile, comments, and tier lists."],
            [<><strong>User ID</strong></>, "Derived from your Apple identifier (one-way hash → UUID)", "Server-side data isolation. Your data is keyed by this ID across all of our tables."],
            [<><strong>Photos</strong></>, "You explicitly upload them via the Verification screen", "Verify your purchase to award Diffr Credits. We never request access to your photo library — Apple's PhotosPicker shows the system gallery and only the photos you tap are shared with Diffr."],
            [<><strong>User-generated content</strong></>, 'Your tier lists, scenes, brand ratings ("crowns"), comments', "Store and display your content; aggregate ratings inform Top Picks; your patterns feed personalised recommendations (PSY-Match)."],
            [<><strong>Product interaction</strong></>, 'Brand pages you open, scenes you save, "Buy on …" buttons you tap', "Improve sorting and recommendations; understand which categories are healthy enough to surface."],
            [<><strong>Purchase history</strong></>, "Which affiliate buttons you tapped (we do not see the actual purchase amount or your retailer account)", "Credit your account after verification; sharpen your PSY-Match profile over time."],
          ]}
        />

        <p style={s.p}>
          We do <strong>not</strong> collect: precise location, contacts, calendar, health data, financial account numbers, browsing history outside the app, or device-level identifiers used for advertising.
        </p>

        <Hr />

        <H2>3. How we use what we collect</H2>
        <p style={s.p}>In Apple&apos;s Privacy Label vocabulary, the purposes are:</p>
        <Ul>
          <Li><strong>App Functionality</strong> — every data type above. Without it, account, content, or core features wouldn&apos;t work.</Li>
          <Li><strong>Analytics</strong> — User Content, Product Interaction, Purchase History. We look at <em>aggregated</em> patterns to improve which brands rank well, which categories are healthy, and how the recommendation engine should evolve.</Li>
          <Li><strong>Product Personalization</strong> — User Content, Product Interaction, Purchase History. Your PSY-Match profile (your declared style, ratings, and shopping patterns) is what makes the recommendations <em>yours</em> rather than a generic Top 100.</Li>
        </Ul>
        <p style={s.p}>We do <strong>not</strong> use any data for:</p>
        <Ul>
          <Li>Third-party advertising</Li>
          <Li>Developer marketing or promotional messages (we don&apos;t send promotional email; account-related messages only, on your request)</Li>
          <Li>Other purposes outside what&apos;s listed here</Li>
        </Ul>

        <Hr />

        <H2>4. What we explicitly do not do</H2>
        <Ul>
          <Li>❌ We do not display third-party ads.</Li>
          <Li>❌ We do not share data with ad networks, data brokers, or attribution platforms.</Li>
          <Li>❌ We do not sell data.</Li>
          <Li>❌ We do not track you across other apps or websites.</Li>
          <Li>❌ We do not embed Meta Pixel, Google AdMob, TikTok Pixel, Adjust, AppsFlyer, Branch, or any similar SDK.</Li>
        </Ul>

        <Hr />

        <H2>5. Third-party services we use</H2>
        <p style={s.p}>
          Diffr is built on top of a small number of vendors. Each handles a slice of your data under their own privacy policy:
        </p>

        <Table
          headers={["Vendor", "What it processes", "Where"]}
          rows={[
            [<><strong>Apple — Sign in with Apple</strong></>, "Authentication, the email + name you grant", <><A href="https://www.apple.com/legal/privacy/" target="_blank">apple.com/legal/privacy</A></>],
            [<><strong>Supabase</strong></>, "Primary database (your account, content, ratings, follows, etc.)", <><A href="https://supabase.com/privacy" target="_blank">supabase.com/privacy</A></>],
            [<><strong>Cloudflare R2 / Amazon S3 / Cloudinary</strong></>, "Stores the photos you upload for verification + brand/product imagery", <><A href="https://www.cloudflare.com/privacypolicy/" target="_blank">cloudflare.com/privacypolicy/</A>, <A href="https://aws.amazon.com/privacy/" target="_blank">aws.amazon.com/privacy/</A>, <A href="https://cloudinary.com/privacy" target="_blank">cloudinary.com/privacy</A></>],
            [<><strong>Apple — StoreKit</strong></>, "If you subscribe to Diffr Pro, Apple handles all billing", <><A href="https://www.apple.com/legal/privacy/" target="_blank">apple.com/legal/privacy</A></>],
            [<><strong>OpenAI or Anthropic</strong> (only if you use the Pro &ldquo;AI Coach&rdquo; feature)</>, "We send the transcribed text of your spoken intent (not audio) and your PSY vector. The transcription itself happens on your device via Apple's on-device speech recognition, so the audio never leaves your phone.", <><A href="https://openai.com/policies/privacy-policy" target="_blank">openai.com/policies/privacy-policy</A>, <A href="https://www.anthropic.com/legal/privacy" target="_blank">anthropic.com/legal/privacy</A></>],
          ]}
        />

        <p style={s.p}>We do <strong>not</strong> share data with Google, Meta, TikTok, or any advertising platform.</p>

        <Hr />

        <H2>6. Account deletion</H2>
        <p style={s.p}>
          You can delete your Diffr account from <strong>Profile → Delete Account</strong> inside the app. When you confirm, we <strong>immediately</strong> cascade-delete every row keyed to your User ID across our database — including but not limited to:
        </p>
        <Ul>
          <Li>Profile and preferences</Li>
          <Li>Tier lists and tier items</Li>
          <Li>Scenes and pack tasks</Li>
          <Li>Brand ratings (&ldquo;crowns&rdquo;), comments, likes, saves</Li>
          <Li>Achievement unlocks and loyalty progress</Li>
          <Li>Verification photos (storage entries are unlinked; raw images age out within 30 days on the storage provider&apos;s backup retention)</Li>
          <Li>Credit transaction history</Li>
          <Li>Follow / follower relationships in both directions</Li>
        </Ul>
        <p style={s.p}>
          After this, your data is gone from our production database. <strong>Note:</strong> Apple&apos;s &ldquo;Sign in with Apple&rdquo; credential is a separate grant — to fully sever it, visit your phone&apos;s <strong>Settings → Apple ID → Sign in with Apple → Diffr → Stop Using Apple ID</strong>. We cannot revoke it for you because Apple&apos;s revocation API requires a server-side signing key.
        </p>
        <p style={s.p}>
          If you want a copy of your data before deleting, email <A href="mailto:diffr@truake.com">diffr@truake.com</A> at least 7 days before and we&apos;ll send you a JSON export.
        </p>

        <Hr />

        <H2>7. Data retention</H2>
        <Table
          headers={["What", "How long"]}
          rows={[
            ["Active account data", "While your account exists"],
            ["Deleted account data — production DB", "Removed within minutes of you tapping Delete"],
            ["Deleted account data — backups", "Naturally aged out within 30 days (rolling backups overwrite)"],
            ["Verification photo files in storage", "Linked while account active; unlinked on deletion; physically purged on the next storage provider lifecycle pass (≤30 days)"],
            ["Email logs (account-related transactional only)", "Up to 12 months"],
          ]}
        />

        <Hr />

        <H2>8. Your rights</H2>
        <p style={s.p}>Wherever you live, you can:</p>
        <Ul>
          <Li><strong>Access</strong> — email <A href="mailto:diffr@truake.com">diffr@truake.com</A> asking for a JSON export of everything tied to your User ID.</Li>
          <Li><strong>Delete</strong> — use the in-app &ldquo;Delete Account&rdquo; button. Or email <A href="mailto:diffr@truake.com">diffr@truake.com</A> if you can&apos;t sign in.</Li>
          <Li><strong>Correct</strong> — most fields are editable in app. For anything that isn&apos;t, email us.</Li>
          <Li><strong>Object / restrict</strong> — email us; we will stop processing and either delete or anonymise within 30 days.</Li>
        </Ul>
        <p style={s.p}>
          If you are in the EU, UK, or California (GDPR / UK GDPR / CCPA), you also have the right to lodge a complaint with your local data-protection authority. We do not sell personal information under CCPA&apos;s definition.
        </p>

        <Hr />

        <H2>9. Children</H2>
        <p style={s.p}>
          Diffr is rated <strong>4+</strong> on the App Store but the <em>feature set</em> (brand reviews, shopping recommendations) is built for adults and older teens. We do not knowingly collect data from children under 13. If you believe a child has signed up using their parent&apos;s Apple ID, email <A href="mailto:diffr@truake.com">diffr@truake.com</A> and we will delete the account.
        </p>

        <Hr />

        <H2>10. International data transfers</H2>
        <p style={s.p}>
          Your data may be processed in the United States and the European Union depending on the vendor (Supabase, AWS, Cloudflare regions). Where applicable we use the EU Standard Contractual Clauses to cover the transfer.
        </p>

        <Hr />

        <H2>11. Changes to this policy</H2>
        <p style={s.p}>
          If we materially change what we collect or how we use it, we will update this page and, where required by law, notify you in the app before the change takes effect. Minor wording changes (&ldquo;clarified definition of &hellip;&rdquo;) will just be reflected in the <strong>Last updated</strong> date at the top.
        </p>

        <Hr />

        <H2>12. Contact</H2>
        <p style={{ ...s.p, fontWeight: 700 }}>
          <A href="mailto:diffr@truake.com">diffr@truake.com</A>
        </p>
        <p style={s.p}>
          For questions, data requests, deletion help, or anything else about how we handle your data.
        </p>

        <FooterLinks current="privacy" />
      </article>
    </main>
  );
}

/* ── Shared layout pieces ── */

function Header({ label }: { label: string }) {
  return (
    <header style={{ borderBottom: "1px solid rgba(42,38,32,0.15)", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#F8F5F1" }}>
      <Link href="/diffr" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.08em", color: "#1B8BF5", textDecoration: "none", textTransform: "uppercase" as const }}>
        Diffr
      </Link>
      <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(42,38,32,0.45)" }}>{label}</span>
    </header>
  );
}

function FooterLinks({ current }: { current: "privacy" | "terms" | "support" }) {
  const links = [
    { href: "/diffr", label: "← Back to Diffr" },
    { href: "/diffr/privacy", label: "Privacy" },
    { href: "/diffr/terms", label: "Terms" },
    { href: "/diffr/support", label: "Support" },
  ].filter(l => !(l.href === `/diffr/${current}` || (l.href === "/diffr" && false)));

  return (
    <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(42,38,32,0.15)", display: "flex", gap: "24px", flexWrap: "wrap" as const }}>
      {links.map(l => (
        <Link key={l.href} href={l.href} style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: l.href === `/diffr/${current}` ? "rgba(42,38,32,0.35)" : "#1B8BF5", textDecoration: "none", pointerEvents: l.href === `/diffr/${current}` ? "none" as const : "auto" as const }}>
          {l.label}
        </Link>
      ))}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#2A2620", margin: "0 0 14px", paddingBottom: "8px", borderBottom: "2px solid #1B8BF5", display: "inline-block" }}>
      {children}
    </h2>
  );
}

function Hr() {
  return <hr style={{ border: "none", borderTop: "1px solid rgba(42,38,32,0.12)", margin: "36px 0" }} />;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>{children}</ul>;
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ fontSize: "0.93rem", lineHeight: 1.8, color: "#2A2620", paddingLeft: "16px", marginBottom: "5px", position: "relative" }}>
      <span style={{ position: "absolute", left: 0, top: "0.58em", width: "5px", height: "5px", borderRadius: "50%", background: "#F0522C", display: "inline-block" }} />
      {children}
    </li>
  );
}

function A({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) {
  return (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} style={{ color: "#1B8BF5", textDecoration: "underline", textDecorationColor: "rgba(27,139,245,0.4)", textUnderlineOffset: "3px" }}>
      {children}
    </a>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: (React.ReactNode | string)[][] }) {
  return (
    <div style={{ overflowX: "auto", margin: "0 0 16px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", lineHeight: 1.65 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ textAlign: "left", padding: "10px 14px", background: "#F0522C", color: "#fff", fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", borderRight: i < headers.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "#F8F5F1" : "#F0EBE3" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "10px 14px", color: "#2A2620", borderBottom: "1px solid rgba(42,38,32,0.08)", borderRight: ci < row.length - 1 ? "1px solid rgba(42,38,32,0.08)" : "none", verticalAlign: "top" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const s = {
  h1: { fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 10px", color: "#1B8BF5" },
  meta: { fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(42,38,32,0.5)", margin: "0 0 36px" },
  p: { fontSize: "0.93rem", lineHeight: 1.8, color: "#2A2620", margin: "0 0 14px" },
  code: { fontFamily: "var(--font-mono), monospace", fontSize: "0.82em", background: "rgba(27,139,245,0.1)", color: "#1B8BF5", padding: "1px 5px", borderRadius: "2px" },
};

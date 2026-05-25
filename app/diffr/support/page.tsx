import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Diffr",
  description:
    "Diffr support and FAQ. Get help with your account, Pro subscription, Credits, and more.",
  robots: { index: true, follow: true },
};

export default function DiffrSupportPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F0EBE3", color: "#2A2620", fontFamily: "var(--font-syne), Georgia, serif", padding: "0 0 80px" }}>
      <Header label="Support" />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 32px 0" }}>

        <h1 style={s.h1}>Support</h1>
        <p style={s.meta}>Diffr · diffr@truake.com</p>

        <p style={s.p}>
          Need help with Diffr? Most things are answered below. If not, write to <A href="mailto:diffr@truake.com">diffr@truake.com</A> — we read every message and reply within 2 business days.
        </p>

        <Hr />

        <H2>Contact</H2>
        <p style={{ ...s.p, fontSize: "1.05rem", fontWeight: 700 }}>
          📩 <A href="mailto:diffr@truake.com">diffr@truake.com</A>
        </p>
        <p style={s.p}>
          When you write, including your <strong>Apple email</strong> (the one you used with Sign in with Apple) helps us find your account fast.
        </p>

        <Hr />

        <H2>Frequently asked questions</H2>

        <H3>What is Diffr?</H3>
        <p style={s.p}>
          Diffr is a brand discovery app for people who don&apos;t know what to buy yet. You tell us what you want to start (fishing, coffee, running, &hellip;); we recommend the beginner-friendly brands that won&apos;t punish you for being new.
        </p>

        <H3>How do I sign in?</H3>
        <p style={s.p}>
          Tap <strong>Sign in with Apple</strong> on the welcome screen. That&apos;s it. We never ask for a password — Apple handles authentication, and we only see the email and name you choose to share.
        </p>

        <H3>What is Diffr Pro?</H3>
        <p style={s.p}>Pro is an optional auto-renewable subscription that unlocks:</p>
        <Ul>
          <Li><strong>AI Coach</strong> — speak what you want to start, get a personalised beginner Scene</Li>
          <Li><strong>Unlimited verification</strong> — earn Credits on every purchase, not just the first few</Li>
          <Li><strong>Premium avatar skins and profile card styles</strong></Li>
          <Li>(Future Pro features will be added without changing your price)</Li>
        </Ul>
        <p style={s.p}>Current price and renewal period are shown on the paywall before you confirm.</p>

        <H3>How do I cancel Pro?</H3>
        <p style={s.p}>Apple manages all subscriptions:</p>
        <Ol>
          <Li>Open the iPhone <strong>Settings</strong> app</Li>
          <Li>Tap your <strong>name</strong> at the top → <strong>Subscriptions</strong> (or <strong>Media &amp; Purchases → Subscriptions</strong>)</Li>
          <Li>Find <strong>Diffr</strong></Li>
          <Li>Tap <strong>Cancel Subscription</strong></Li>
        </Ol>
        <p style={s.p}>
          Cancellation takes effect at the end of your current billing period — you keep Pro features until then. Diffr cannot cancel for you because we don&apos;t have access to your Apple billing.
        </p>

        <H3>How do refunds work?</H3>
        <p style={s.p}>
          Refunds are handled by Apple, not Diffr. Go to <A href="https://reportaproblem.apple.com" target="_blank">reportaproblem.apple.com</A>, sign in with your Apple ID, find the Diffr charge, and request a refund. Apple decides based on their refund policy.
        </p>

        <H3>How does the Credits / verification system work?</H3>
        <p style={s.p}>When you buy a brand from your Pack list:</p>
        <Ol>
          <Li>Tap the <strong>Buy on Amazon / eBay / Walmart / &hellip;</strong> button — opens Safari with the affiliate link</Li>
          <Li>After purchasing, tap <strong>Upload photo to verify</strong> on the Pack screen</Li>
          <Li>Take a photo of the item (we ask for a clear angle showing the brand mark, sometimes 2 angles)</Li>
          <Li>Our AI confirms the brand — usually under 5 seconds</Li>
          <Li>Credits land in your wallet on success</Li>
        </Ol>
        <p style={s.p}>
          If verification fails repeatedly, try a clearer photo with better lighting and the logo visible. If it keeps failing on what&apos;s clearly a real product, email <A href="mailto:diffr@truake.com">diffr@truake.com</A> and we&apos;ll review manually.
        </p>

        <H3>How do retailer (Amazon, eBay, &hellip;) links work?</H3>
        <p style={s.p}>
          Those are <strong>affiliate links</strong>. When you buy through them, the retailer pays Diffr a small commission. <strong>This does not change the price you pay</strong>, and we disclose this in our <Link href="/diffr/terms#7-affiliate-disclosure" style={s.link}>Terms</Link>. It does not influence which brands we recommend — ranking is driven by the algorithm and community signals.
        </p>

        <H3>How is my data used?</H3>
        <p style={s.p}>Short version:</p>
        <Ul>
          <Li>Used <strong>for the app to work</strong> (account, your scenes, recommendations) ✅</Li>
          <Li>Used to <strong>improve recommendations</strong> ✅</Li>
          <Li><strong>Not</strong> sold ❌</Li>
          <Li><strong>Not</strong> shared with ad networks ❌</Li>
          <Li><strong>Not</strong> used for cross-app tracking ❌</Li>
        </Ul>
        <p style={s.p}>
          For the full version see <Link href="/diffr/privacy" style={s.link}>Privacy Policy</Link>.
        </p>

        <H3>How do I delete my account?</H3>
        <p style={s.p}>Inside the Diffr app:</p>
        <Ol>
          <Li>Tab <strong>Profile</strong></Li>
          <Li>Scroll to the bottom</Li>
          <Li>Tap <strong>Delete Account</strong> (the small grey link below &ldquo;Sign Out&rdquo;)</Li>
          <Li>Confirm</Li>
        </Ol>
        <p style={s.p}>
          This cascade-deletes every piece of data tied to your User ID — scenes, tier lists, comments, ratings, follows, photos, the lot. It is <strong>not recoverable</strong>.
        </p>
        <p style={s.p}>
          If you also want to revoke Diffr&apos;s Sign in with Apple grant (separate from deleting our data):
        </p>
        <Ol>
          <Li>Open iPhone <strong>Settings</strong></Li>
          <Li>Tap your <strong>name</strong> at the top → <strong>Sign in with Apple</strong></Li>
          <Li>Find <strong>Diffr</strong> → <strong>Stop Using Apple ID</strong></Li>
        </Ol>
        <p style={s.p}>
          We cannot do this revoke step for you — Apple&apos;s API requires their server signing key, which can&apos;t live in our app.
        </p>

        <H3>Can I get a copy of my data before deleting?</H3>
        <p style={s.p}>
          Yes. Email <A href="mailto:diffr@truake.com">diffr@truake.com</A> at least 7 days before you delete and we&apos;ll send you a JSON export of everything tied to your account.
        </p>

        <H3>Why am I seeing &ldquo;Coming soon&rdquo; on some category carousels?</H3>
        <p style={s.p}>
          Each carousel needs brands that are (a) <strong>scored</strong> by our algorithm and (b) <strong>have product imagery</strong> on file. Some categories (like Supplements, Pets, Baby) are still being filled in. The 12-icon grid at the top of Discover always lets you drill into any category directly, even if it doesn&apos;t have a carousel yet.
        </p>
        <p style={s.p}>
          You can also pick your own 5 carousels via <strong>Discover → &ldquo;Customize&rdquo;</strong> (top of the carousel section).
        </p>

        <H3>Why was my comment / tier list / scene removed?</H3>
        <p style={s.p}>
          If it violated our <Link href="/diffr/terms#4-acceptable-use" style={s.link}>Acceptable Use rules</Link> — harassment, hate, fake content, etc. — we remove it without notice. If you think we got it wrong, email <A href="mailto:diffr@truake.com">diffr@truake.com</A> with a screenshot.
        </p>

        <H3>How do I report a brand listing error?</H3>
        <p style={s.p}>
          The brand database is mostly accurate but not perfect (we&apos;re scoring 47k brands as of writing). If a brand has wrong info (founding year, logo, description), tap the brand → scroll to bottom → <strong>Feedback</strong> (coming soon), or email <A href="mailto:diffr@truake.com">diffr@truake.com</A> with the brand name and what&apos;s wrong.
        </p>

        <H3>How do I report a bug or crash?</H3>
        <p style={s.p}>Email <A href="mailto:diffr@truake.com">diffr@truake.com</A> with:</p>
        <Ul>
          <Li>Your iPhone model and iOS version (Settings → General → About)</Li>
          <Li>What you were doing when it happened</Li>
          <Li>Screenshots if you have them</Li>
          <Li>The Apple email you sign in with</Li>
        </Ul>
        <p style={s.p}>
          If the app actually crashed, Apple shows you a &ldquo;Share with developer?&rdquo; prompt when you next open the app — please tap <strong>Share</strong>. That sends us a crash log via Apple&apos;s standard system, which is far more useful than a description.
        </p>

        <Hr />

        <H2>Known issues</H2>
        <p style={{ ...s.p, fontStyle: "italic", color: "rgba(42,38,32,0.5)" }}>
          (Will be populated as users report things.)
        </p>

        <Hr />

        <H2>Feedback</H2>
        <p style={s.p}>
          We genuinely want to hear what doesn&apos;t work, what&apos;s missing, and what&apos;s confusing. Diffr is small and still finding its shape.
        </p>
        <p style={{ ...s.p, fontWeight: 700 }}>
          <A href="mailto:diffr@truake.com">diffr@truake.com</A>
        </p>

        <FooterLinks current="support" />
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
  ];
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.02em", color: "#2A2620", margin: "28px 0 8px" }}>
      {children}
    </h3>
  );
}

function Hr() {
  return <hr style={{ border: "none", borderTop: "1px solid rgba(42,38,32,0.12)", margin: "36px 0" }} />;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>{children}</ul>;
}

function Ol({ children }: { children: React.ReactNode }) {
  return <ol style={{ listStyle: "none", padding: 0, margin: "0 0 14px", counterReset: "steps" }}>{children}</ol>;
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

const s = {
  h1: { fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 10px", color: "#1B8BF5" },
  meta: { fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(42,38,32,0.5)", margin: "0 0 36px" },
  p: { fontSize: "0.93rem", lineHeight: 1.8, color: "#2A2620", margin: "0 0 14px" },
  code: { fontFamily: "var(--font-mono), monospace", fontSize: "0.82em", background: "rgba(27,139,245,0.1)", color: "#1B8BF5", padding: "1px 5px", borderRadius: "2px" },
  link: { color: "#1B8BF5", textDecoration: "underline", textDecorationColor: "rgba(27,139,245,0.4)", textUnderlineOffset: "3px" },
};

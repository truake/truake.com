import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Diffr",
  description:
    "Diffr Terms of Service. Rules governing your use of the Diffr iOS app and website.",
  robots: { index: true, follow: true },
};

export default function DiffrTermsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F0EBE3", color: "#2A2620", fontFamily: "var(--font-syne), Georgia, serif", padding: "0 0 80px" }}>
      <Header label="Terms of Service" />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 32px 0" }}>

        <h1 style={s.h1}>Terms of Service</h1>
        <p style={s.meta}>Last updated: May 24, 2026</p>

        <p style={s.p}>
          Welcome to Diffr. By creating an account or using the Diffr iOS app, you agree to these Terms. If you don&apos;t agree, please don&apos;t use Diffr.
        </p>
        <p style={s.p}>
          Diffr is operated by <strong>truake LLC</strong> (Apple Developer Team ID <code style={s.code}>UH7D745P6G</code>).
        </p>

        <Hr />

        <H2>1. Eligibility</H2>
        <p style={s.p}>
          You must be at least 13 years old to use Diffr. If you are under the age of majority in your jurisdiction, you must have a parent or guardian&apos;s permission. Diffr is rated <strong>4+</strong> on the App Store for content but the <em>shopping-decision</em> nature of the app is genuinely built for adults and older teens.
        </p>
        <p style={s.p}>
          You must sign in with <strong>Sign in with Apple</strong>. One Apple ID = one Diffr account.
        </p>

        <Hr />

        <H2>2. Your account</H2>
        <p style={s.p}>
          You are responsible for everything that happens under your account. If you suspect someone else is using your account, sign out, then revoke Diffr&apos;s Apple credential at <strong>Settings → Apple ID → Sign in with Apple → Diffr → Stop Using Apple ID</strong>, and email us at <A href="mailto:diffr@truake.com">diffr@truake.com</A>.
        </p>
        <p style={s.p}>
          We may suspend or terminate accounts that violate these Terms (see §4).
        </p>

        <Hr />

        <H2>3. What Diffr does</H2>
        <p style={s.p}>Diffr is a brand discovery and shopping companion. The app:</p>
        <Ul>
          <Li>Surfaces brands and curated <strong>Scenes</strong> matching your interests (PSY-Match profile)</Li>
          <Li>Lets you build <strong>tier lists</strong> and <strong>scenes</strong> with brands</Li>
          <Li>Offers an <strong>AI Coach</strong> (Pro) that generates a beginner-friendly Scene from your spoken intent</Li>
          <Li>Earns <strong>Credits</strong> when you verify real purchases via photo</Li>
          <Li>Links out to retailers (Amazon, eBay, Walmart, others) for the actual purchase — those transactions happen on the retailer&apos;s site, not in Diffr</Li>
        </Ul>
        <p style={s.p}>
          We are <strong>not</strong> the seller. We do not handle your money, your card, your shipping, or your retailer accounts. Disputes about a purchased item, return policies, refunds, shipping delays, etc. are between <strong>you and the retailer</strong>.
        </p>

        <Hr />

        <H2>4. Acceptable use</H2>
        <p style={s.p}>You agree <strong>not</strong> to:</p>
        <Ul>
          <Li>Upload fake verification photos (e.g. screenshots of someone else&apos;s product, AI-generated images, photos pulled from the web). We use anti-fraud signals; verified fraud results in <strong>account termination</strong> and forfeit of any unspent credits.</Li>
          <Li>Post harassment, hate speech, sexual content involving minors, threats, doxing, or anything illegal in comments, tier list names, or scene descriptions.</Li>
          <Li>Automate, scrape, or proxy your usage. The brand database is for human users in the app.</Li>
          <Li>Reverse-engineer the app or attempt to break the credit system.</Li>
          <Li>Impersonate Diffr, a brand, or another user.</Li>
          <Li>Use Diffr in a way that violates the App Store&apos;s own rules.</Li>
        </Ul>
        <p style={s.p}>Violation may result in immediate suspension or deletion of your account.</p>

        <Hr />

        <H2>5. User-generated content</H2>
        <p style={s.p}>
          When you create content in Diffr (tier lists, scenes, comments, ratings), <strong>you keep ownership</strong> of that content. You grant Diffr a non-exclusive, royalty-free, worldwide license to host, display, distribute within the app, and use it to improve our recommendation algorithms. This license lasts for as long as your content is on our servers. When you delete content (or your account), we lose this license and remove the content per the Privacy Policy.
        </p>
        <p style={s.p}>
          You represent that you have the right to post what you post — don&apos;t upload images you don&apos;t own the rights to.
        </p>

        <Hr />

        <H2>6. Diffr Pro subscription</H2>
        <p style={s.p}>
          Diffr Pro is an optional <strong>auto-renewable subscription</strong> billed through Apple&apos;s StoreKit. Current price and renewal period are shown in the paywall before you confirm. The subscription:
        </p>
        <Ul>
          <Li>Renews automatically at the end of each billing period unless you cancel at least 24 hours before the renewal date.</Li>
          <Li>Is managed entirely in <strong>iOS Settings → Apple ID → Subscriptions</strong>. Diffr does not have access to your payment method and cannot cancel for you.</Li>
          <Li>Includes (current list): the AI Coach, unlimited photo verifications, premium avatar skins, premium profile card styles, and any future Pro-only features. Specific contents may change with advance in-app notice.</Li>
          <Li>Free trials, if offered, convert to paid at the end of the trial unless cancelled.</Li>
        </Ul>
        <p style={s.p}>
          <strong>Refunds</strong> are handled exclusively by Apple under their App Store refund policy. Diffr cannot issue refunds. If you have a problem, request a refund at <A href="https://reportaproblem.apple.com" target="_blank">reportaproblem.apple.com</A>.
        </p>

        <Hr />

        <H2>7. Affiliate disclosure (FTC 16 CFR Part 255)</H2>
        <p style={{ ...s.p, background: "rgba(27,139,245,0.07)", padding: "14px 18px", borderLeft: "3px solid #1B8BF5" }}>
          <strong>Diffr earns affiliate commission when you purchase through retailer links (Amazon, eBay, Walmart, and others) presented in the app.</strong> This does not affect the price you pay. We are paid by the retailer per qualifying purchase. This income does not bias our recommendation algorithms — brand ranking is driven by the algorithm + your PSY-Match profile + community signals, independent of which retailers carry the brand.
        </p>

        <Hr />

        <H2>8. Disclaimers — please read</H2>
        <p style={s.p}>
          Diffr&apos;s recommendations are produced by algorithms and aggregated community signals. They are <strong>not professional advice</strong> of any kind (financial, medical, fitness, legal, or otherwise). Use your own judgment.
        </p>
        <p style={s.p}>We do <strong>not guarantee</strong>:</p>
        <Ul>
          <Li>That a recommended brand is appropriate for your specific needs, body, lifestyle, or budget</Li>
          <Li>That a brand will be in stock at any retailer</Li>
          <Li>That retailer prices, shipping, returns, or product quality will meet your expectations</Li>
          <Li>That a retailer&apos;s product matches our description (we surface the brand; the retailer controls the listing)</Li>
          <Li>That Diffr&apos;s content is error-free or always available</Li>
        </Ul>
        <p style={{ ...s.p, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.02em" }}>
          THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING (BUT NOT LIMITED TO) MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <Hr />

        <H2>9. Limitation of liability</H2>
        <p style={{ ...s.p, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.02em" }}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, truake LLC AND ITS OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING (BUT NOT LIMITED TO) LOST PROFITS, LOST DATA, OR INJURY ARISING OUT OF OR RELATED TO YOUR USE OF DIFFR, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p style={{ ...s.p, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.02em" }}>
          OUR AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATED TO THESE TERMS OR THE APP SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID US (IF ANY) IN THE 12 MONTHS PRECEDING THE CLAIM, OR US$100 — WHICHEVER IS GREATER.
        </p>
        <p style={s.p}>
          Some jurisdictions do not allow exclusion of certain warranties or limitation of liability for incidental damages — in those places, the above limitations apply only to the maximum extent permitted by law.
        </p>

        <Hr />

        <H2>10. Intellectual property</H2>
        <Ul>
          <Li><strong>Diffr brand, logos, app design, code, recommendation algorithms</strong> — owned by truake LLC.</Li>
          <Li><strong>Brand logos, names, and product images</strong> of third-party retailers and brands (Amazon, eBay, Walmart, the brands we rate) — owned by their respective owners. We use them under <em>nominative fair use</em> to identify the brands and retailers we discuss. We do not claim affiliation, endorsement, or sponsorship by any of them unless explicitly stated.</Li>
          <Li><strong>User-generated content</strong> — owned by the user who posted it (see §5).</Li>
        </Ul>

        <Hr />

        <H2>11. Termination</H2>
        <p style={s.p}>
          You can stop using Diffr at any time. To completely terminate, use <strong>Profile → Delete Account</strong> in the app. This deletes your data as described in the Privacy Policy.
        </p>
        <p style={s.p}>
          We may terminate your account if you violate these Terms (especially §4). If we do, we will tell you why where reasonably possible. Termination does not entitle you to a refund of any unused Pro subscription period — Apple&apos;s refund policy applies.
        </p>
        <p style={s.p}>
          Sections that by their nature should survive termination (intellectual property, disclaimers, limitation of liability, governing law) do so.
        </p>

        <Hr />

        <H2>12. Changes to these Terms</H2>
        <p style={s.p}>
          If we materially change these Terms, we&apos;ll update this page and, where required, notify you in the app before the change takes effect. Continued use after the effective date means you accept the new Terms. Minor edits (typos, link fixes) just bump the <strong>Last updated</strong> date.
        </p>

        <Hr />

        <H2>13. Governing law and disputes</H2>
        <p style={s.p}>
          These Terms are governed by the laws of <strong>Hong Kong</strong>, without regard to conflict-of-law rules. Any dispute that can&apos;t be resolved by email to <A href="mailto:diffr@truake.com">diffr@truake.com</A> first will be resolved in the courts of <strong>Hong Kong</strong>, and you and we agree to submit to the personal jurisdiction of those courts.
        </p>

        <Hr />

        <H2>14. Contact</H2>
        <p style={s.p}>For Terms questions, account issues, or legal notices:</p>
        <p style={{ ...s.p, fontWeight: 700 }}>
          <A href="mailto:diffr@truake.com">diffr@truake.com</A>
        </p>
        <p style={s.p}>Please put &ldquo;Terms&rdquo; in the subject line so we route it correctly.</p>

        <FooterLinks current="terms" />
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

function FooterLinks({ current }: { current: "privacy" | "terms" | "support" | "affiliate-disclosure" }) {
  const links = [
    { href: "/diffr", label: "← Back to Diffr" },
    { href: "/diffr/privacy", label: "Privacy" },
    { href: "/diffr/terms", label: "Terms" },
    { href: "/diffr/support", label: "Support" },
    { href: "/diffr/affiliate-disclosure", label: "Affiliate Disclosure" },
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

const s = {
  h1: { fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 10px", color: "#1B8BF5" },
  meta: { fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(42,38,32,0.5)", margin: "0 0 36px" },
  p: { fontSize: "0.93rem", lineHeight: 1.8, color: "#2A2620", margin: "0 0 14px" },
  code: { fontFamily: "var(--font-mono), monospace", fontSize: "0.82em", background: "rgba(27,139,245,0.1)", color: "#1B8BF5", padding: "1px 5px", borderRadius: "2px" },
};

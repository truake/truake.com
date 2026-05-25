import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./components/RevealOnScroll";

/* ─────────────────────────────────────────────────────────────
   SEO
───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Diffr — What to buy first when you're new to a hobby",
  description:
    "Beginner-friendly brand recommendations for fishing, coffee, running, photography, investing and 40+ other hobbies. 47,000+ brands scored across six axes. Free on iOS.",
  keywords: [
    "Diffr",
    "beginner brands",
    "brand recommendations",
    "shopping app",
    "iOS app",
    "47000 brands",
    "tier list",
    "scenes",
    "beginner packs",
  ],
  openGraph: {
    title: "Diffr — What to buy first when you're new to a hobby",
    description:
      "Beginner-friendly brand recommendations for fishing, coffee, running, photography and 40+ other hobbies. 47,000+ brands scored. Free on iOS.",
    url: "https://truake.com/diffr",
    images: [{ url: "/diffr-og.png", width: 1200, height: 630, alt: "Diffr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diffr — What to buy first when you're new to a hobby",
    description:
      "47,000+ brands scored across six axes. Beginner packs, curated Scenes, and AI Coach. Free on iOS.",
    images: ["/diffr-og.png"],
  },
  other: {
    "apple-itunes-app": `app-id=0000000000`,
  },
};

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/app/diffr/idTBD";

const proofStats = [
  { number: "47,000+", label: "brands scored" },
  { number: "6", label: "axes of brand truth" },
  { number: "0", label: "ad networks" },
  { number: "0", label: "data sold" },
  { number: "1", label: "person built it" },
];

const sceneCards = [
  {
    title: "Mobile & Casual Gaming",
    count: "12 brands",
    from: "#1E1B4B",
    to: "#4338CA",
    icon: "🎮",
  },
  {
    title: "Home Gym Essentials",
    count: "16 brands",
    from: "#0F172A",
    to: "#1B8BF5",
    icon: "🏋️",
  },
  {
    title: "Running Starter Kit",
    count: "11 brands",
    from: "#7C2D12",
    to: "#F0522C",
    icon: "🏃",
  },
  {
    title: "Yoga & Mindfulness",
    count: "9 brands",
    from: "#14532D",
    to: "#16A34A",
    icon: "🧘",
  },
  {
    title: "Film Photography",
    count: "14 brands",
    from: "#1C1917",
    to: "#57534E",
    icon: "📷",
  },
  {
    title: "Home Coffee Ritual",
    count: "10 brands",
    from: "#451A03",
    to: "#92400E",
    icon: "☕",
  },
];

const trustCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#1B8BF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#1B8BF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Privacy-first.",
    body: "We don't sell your data. We're not in any ad network. We don't track you across other apps.",
    link: { href: "/diffr/privacy", label: "Read the policy →" },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#1B8BF5" strokeWidth="1.5"/>
        <path d="M12 8v4l3 2" stroke="#1B8BF5" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Affiliate-funded, not algorithm-corrupted.",
    body: "We earn commission when you buy through retailer links (Amazon, eBay, Walmart). The six-axis score is calculated whether we earn $0 or $50 on a sale.",
    link: { href: "/diffr/terms#7-affiliate-disclosure", label: "Full disclosure →" },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#1B8BF5" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1B8BF5" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Built by one person.",
    body: "Diffr is built and operated by truake LLC. One developer. No VCs. No growth-hacking team. If something breaks, it's me you're emailing.",
    link: { href: "mailto:diffr@truake.com", label: "diffr@truake.com" },
  },
];

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */

function AppStoreBadge({ href, large = false }: { href: string; large?: boolean }) {
  return (
    <a
      href={href}
      data-app-store-href={href}
      className="diffr-badge-appstore"
      aria-label="Download Diffr on the App Store"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: large ? 14 : 10,
        background: "#000",
        color: "#fff",
        borderRadius: 14,
        padding: large ? "14px 24px" : "10px 18px",
        textDecoration: "none",
        fontFamily: "-apple-system, sans-serif",
        transition: "transform 150ms, box-shadow 150ms",
      }}
    >
      {/* Apple logo */}
      <svg
        width={large ? 30 : 22}
        height={large ? 36 : 27}
        viewBox="0 0 814 1000"
        fill="white"
        aria-hidden="true"
      >
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-107.9L74.1 680c-16.7-22.3-37.7-61.5-37.7-100.7 0-115.9 91.8-269.4 280.3-269.4 72 0 151.1 27.6 202.8 100.1C559.2 434.5 610.8 340.9 788.1 340.9zM551 115.3C590.5 72.6 619.3 11.2 619.3 0c0-.6-1-1.3-1.6-1.3C606.1 1.3 542.4 38.3 504 83.6c-32.4 38.1-63.4 103.2-51.8 160.4.6 3.2 2.6 6.4 4.5 6.4C462.3 250 511.7 157.9 551 115.3z"/>
      </svg>
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ fontSize: large ? 11 : 10, opacity: 0.8, letterSpacing: "0.04em", marginBottom: 2 }}>
          Download on the
        </div>
        <div style={{ fontSize: large ? 22 : 16, fontWeight: 700, letterSpacing: "-0.01em" }}>
          App Store
        </div>
      </div>
    </a>
  );
}

function PhoneFrame({
  src,
  alt,
  width = 280,
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
}) {
  const height = Math.round(width * (2556 / 1179));
  const radius = Math.round(width * (44 / 393));
  const islandW = Math.round(width * 0.38);
  const islandH = Math.round(width * 0.085);
  const islandTop = Math.round(width * 0.033);

  return (
    <div
      style={{
        position: "relative",
        width,
        flexShrink: 0,
        borderRadius: radius,
        border: "2.5px solid rgba(120,120,128,0.55)",
        overflow: "hidden",
        background: "#000",
        boxShadow:
          "0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.07), 0 28px 56px rgba(27,139,245,.09), 0 64px 100px rgba(0,0,0,.05)",
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: islandTop,
          left: "50%",
          transform: "translateX(-50%)",
          width: islandW,
          height: islandH,
          background: "#000",
          borderRadius: islandH,
          zIndex: 10,
        }}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={85}
        priority={priority}
        style={{ display: "block" }}
      />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-syne), sans-serif",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#1B8BF5",
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      style={{
        fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
        fontSize: Tag === "h1" ? "clamp(44px, 7vw, 88px)" : "clamp(32px, 5vw, 56px)",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        lineHeight: 1.05,
        color: "#2A2620",
        marginBottom: 20,
      }}
    >
      {children}
    </Tag>
  );
}

function HexBadge({ score, label = "OVERALL" }: { score: string; label?: string }) {
  return (
    <svg
      viewBox="0 0 120 138"
      width="100"
      height="115"
      aria-label={`${score} ${label}`}
      className="diffr-hex-badge"
    >
      <polygon
        points="60,4 116,34 116,104 60,134 4,104 4,34"
        fill="#1B8BF5"
        stroke="rgba(27,139,245,0.3)"
        strokeWidth="2"
      />
      <polygon
        points="60,16 104,41 104,97 60,122 16,97 16,41"
        fill="rgba(255,255,255,0.08)"
      />
      <text
        x="60"
        y="65"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="36"
        fontWeight="800"
        fontFamily="-apple-system, sans-serif"
        letterSpacing="-1"
      >
        {score}
      </text>
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="rgba(255,255,255,0.7)"
        fontSize="10"
        fontWeight="600"
        fontFamily="-apple-system, sans-serif"
        letterSpacing="2"
        textDecoration="uppercase"
      >
        {label}
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────── */
export default function DiffrPage() {
  return (
    <div className="diffr-root" style={{ minHeight: "100vh", background: "var(--d-bg)" }}>

      {/* ── Page-scoped animations + styles ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hero glow */
          @keyframes diffrGlow {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50%       { opacity: 1;   transform: scale(1.04); }
          }
          .diffr-glow { animation: diffrGlow 8s ease-in-out infinite; }

          /* Scene marquee */
          @keyframes diffrMarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .diffr-marquee { animation: diffrMarquee 28s linear infinite; }
          .diffr-marquee-wrap:hover .diffr-marquee { animation-play-state: paused; }

          /* Hex badge continuous slow spin */
          @keyframes diffrHexSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          /* Hex badge scale pulse */
          @keyframes diffrHexPulse {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(27,139,245,0.4)); }
            50%       { filter: drop-shadow(0 0 24px rgba(27,139,245,0.7)); }
          }
          .diffr-hex-badge { animation: diffrHexPulse 4s ease-in-out infinite; }
          .diffr-hex-spin  { animation: diffrHexSpin 40s linear infinite; }

          /* Mic rings for Pro section */
          @keyframes diffrMicRing {
            0%   { transform: scale(1);   opacity: 0.5; }
            100% { transform: scale(1.7); opacity: 0; }
          }
          .mic-ring-1 { animation: diffrMicRing 1.4s ease-out infinite; }
          .mic-ring-2 { animation: diffrMicRing 1.4s ease-out 0.25s infinite; }
          .mic-ring-3 { animation: diffrMicRing 1.4s ease-out 0.5s  infinite; }

          /* Pro section bg hue shift */
          @keyframes diffrProHue {
            0%, 100% { filter: hue-rotate(0deg); }
            50%       { filter: hue-rotate(12deg); }
          }
          .diffr-pro-bg { animation: diffrProHue 14s ease-in-out infinite; }

          /* Proof stat counters — stagger via nth-child */
          @keyframes diffrFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0);    }
          }

          /* Scroll reveal */
          .diffr-reveal {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 550ms cubic-bezier(0.16,1,0.3,1),
                        transform 550ms cubic-bezier(0.16,1,0.3,1);
          }
          .diffr-reveal.visible { opacity: 1; transform: translateY(0); }

          /* Button micro-interactions */
          .diffr-cta-primary {
            transition: transform 150ms ease, box-shadow 150ms ease;
          }
          .diffr-cta-primary:hover  { transform: scale(1.025); }
          .diffr-cta-primary:active { transform: scale(0.975); }
          .diffr-cta-primary:focus-visible {
            outline: 2px solid rgba(27,139,245,0.5);
            outline-offset: 3px;
          }

          .diffr-badge-appstore {
            transition: transform 150ms ease, opacity 150ms ease;
          }
          .diffr-badge-appstore:hover  { transform: scale(1.025); opacity: 0.92; }
          .diffr-badge-appstore:active { transform: scale(0.975); }
          .diffr-badge-appstore:focus-visible {
            outline: 2px solid rgba(27,139,245,0.5);
            outline-offset: 3px;
          }

          /* Scene card hover */
          .diffr-scene-card {
            transition: transform 150ms ease, box-shadow 150ms ease;
          }
          .diffr-scene-card:hover { transform: translateY(-4px); }

          /* Trust card hover */
          .diffr-trust-card {
            transition: border-color 200ms ease, box-shadow 200ms ease;
          }
          .diffr-trust-card:hover {
            border-color: rgba(27,139,245,0.3) !important;
            box-shadow: 0 8px 32px rgba(27,139,245,0.08);
          }

          /* Nav link hover */
          .diffr-nav-link { transition: color 150ms; }
          .diffr-nav-link:hover { color: #1B8BF5 !important; }

          /* Reduced motion: kill everything */
          @media (prefers-reduced-motion: reduce) {
            .diffr-glow, .diffr-marquee, .diffr-hex-badge,
            .diffr-hex-spin, .mic-ring-1, .mic-ring-2, .mic-ring-3,
            .diffr-pro-bg {
              animation: none !important;
            }
            .diffr-reveal {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
            .diffr-cta-primary:hover,
            .diffr-cta-primary:active,
            .diffr-badge-appstore:hover,
            .diffr-badge-appstore:active,
            .diffr-scene-card:hover {
              transform: none !important;
            }
          }
        `
      }} />

      {/* ── Structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "Diffr",
            operatingSystem: "iOS",
            applicationCategory: "ShoppingApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description:
              "Beginner-friendly brand recommendations. 47,000+ brands scored across six axes.",
            screenshot: [
              "https://truake.com/diffr-screens/screen-113.jpg",
              "https://truake.com/diffr-screens/screen-115.jpg",
              "https://truake.com/diffr-screens/screen-116.jpg",
            ],
            author: { "@type": "Organization", name: "truake LLC", url: "https://truake.com" },
          }),
        }}
      />

      {/* ════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(240,235,227,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(42,38,32,0.10)",
        }}
        aria-label="Diffr navigation"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Wordmark */}
          <Link
            href="/diffr"
            style={{ textDecoration: "none" }}
            aria-label="Diffr home"
          >
            <span
              style={{
                fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: 24,
                letterSpacing: "-0.02em",
                color: "#1B8BF5",
              }}
            >
              Diffr
            </span>
          </Link>

          {/* Nav links + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {[
                { href: "#discover", label: "Features" },
                { href: "#pro", label: "Pro" },
                { href: "/diffr/support", label: "Support" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="diffr-nav-link"
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "var(--d-text-45)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <AppStoreBadge href={appStoreUrl} />
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 0,
          paddingLeft: 32,
          paddingRight: 32,
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 64,
              alignItems: "flex-start",
            }}
            className="diffr-hero-grid"
          >
            {/* Left: copy */}
            <div style={{ paddingTop: 40, maxWidth: 620 }}>
              {/* Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(27,139,245,0.08)",
                  border: "1px solid rgba(27,139,245,0.2)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#1B8BF5",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#1B8BF5",
                  }}
                >
                  Now on iOS · TestFlight Beta
                </span>
              </div>

              {/* H1 */}
              <h1
                style={{
                  fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(44px, 7vw, 88px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.0,
                  color: "#2A2620",
                  marginBottom: 24,
                }}
              >
                Beginner&#8209;friendly brands.{" "}
                <em style={{ color: "#1B8BF5", fontStyle: "italic" }}>Without the regret.</em>
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--d-text-55, rgba(42,38,32,0.6))",
                  marginBottom: 36,
                  maxWidth: 520,
                  fontWeight: 400,
                }}
              >
                Tell us what you want to start — fishing, coffee, running, investing — and
                we&apos;ll show you exactly what to buy first. And what to skip until you&apos;re sure.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
                <AppStoreBadge href={appStoreUrl} large />
                <a
                  href="#discover"
                  className="diffr-cta-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "14px 24px",
                    border: "1.5px solid rgba(27,139,245,0.35)",
                    borderRadius: 12,
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "#1B8BF5",
                    textDecoration: "none",
                    background: "transparent",
                  }}
                >
                  See how it works
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: phone frame + glow */}
            <div
              style={{
                position: "relative",
                paddingBottom: 48,
                display: "flex",
                justifyContent: "center",
              }}
              className="diffr-hero-phone"
            >
              {/* Glow blob behind phone */}
              <div
                className="diffr-glow"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 360,
                  height: 360,
                  background: "radial-gradient(circle, rgba(27,139,245,0.22) 0%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <PhoneFrame
                  src="/diffr-screens/screen-113.jpg"
                  alt="Diffr app showing the Start Something New beginner pack picker with hobbies like Film Photography, Cycling Commute, Home Coffee"
                  width={288}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROOF BAR
      ════════════════════════════════════════════ */}
      <section
        style={{
          background: "#2A2620",
          padding: "28px 32px",
          marginTop: 64,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "20px 0",
          }}
        >
          {proofStats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                padding: "0 28px",
                borderRight: i < proofStats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono), 'IBM Plex Mono', monospace",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURE 1 — DISCOVER
      ════════════════════════════════════════════ */}
      <section
        id="discover"
        style={{
          padding: "128px 32px",
          background: "var(--d-bg2)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="diffr-feature-grid"
        >
          {/* Phone + floating hex badge */}
          <RevealOnScroll>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <PhoneFrame
                src="/diffr-screens/screen-115.jpg"
                alt="Diffr Discover screen showing Consumer, Business and ArtEnt modes with brand carousels and hexagon score badges"
                width={280}
              />
              {/* Floating hex badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15%",
                  right: -8,
                  zIndex: 10,
                  filter: "drop-shadow(0 8px 24px rgba(27,139,245,0.35))",
                }}
              >
                <HexBadge score="9.2" label="HERITAGE" />
              </div>
            </div>
          </RevealOnScroll>

          {/* Copy */}
          <RevealOnScroll delay={120}>
            <Eyebrow>Discover</Eyebrow>
            <SectionHeading>Brands, scored on what actually matters.</SectionHeading>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--d-text-50)", marginBottom: 28 }}>
              Heritage. Quality. Aesthetic. Innovation. Value. Cultural impact. Every brand in
              Diffr gets a six-axis score, surfaced as one of our signature hexagon badges.
              No paid placement. No &ldquo;sponsored picks.&rdquo; The algorithm doesn&apos;t
              know which retailer sells it.
            </p>
            {/* Six axes pill row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Heritage", "Quality", "Aesthetic", "Innovation", "Value", "Cultural"].map((axis) => (
                <span
                  key={axis}
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#1B8BF5",
                    background: "rgba(27,139,245,0.08)",
                    border: "1px solid rgba(27,139,245,0.2)",
                    borderRadius: 100,
                    padding: "4px 12px",
                  }}
                >
                  {axis}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURE 2 — BEGINNER PACKS
      ════════════════════════════════════════════ */}
      <section
        style={{
          padding: "128px 32px",
          background: "var(--d-bg)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="diffr-feature-grid"
        >
          {/* Copy — left */}
          <RevealOnScroll>
            <Eyebrow>Start Something New</Eyebrow>
            <SectionHeading>What to buy first. What to skip until you&apos;re sure.</SectionHeading>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--d-text-50)", marginBottom: 28 }}>
              Beginner Packs cover the most common &ldquo;I want to start X&rdquo; moments — from
              your first brokerage account to a coffee setup that won&apos;t humiliate you in three
              months. Each Pack is a 5–10 item Scene curated for people who are completely new.
              No upsell to the $4,000 tier.
            </p>
            {/* Sample hobbies */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Film Photography", "Cycling Commute", "Home Coffee", "Hiking", "Investing", "HYSA"].map((h) => (
                <span
                  key={h}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--d-text-60)",
                    background: "rgba(42,38,32,0.05)",
                    border: "1px solid rgba(42,38,32,0.1)",
                    borderRadius: 100,
                    padding: "5px 14px",
                  }}
                >
                  <span style={{ color: "#F0522C" }}>✦</span>
                  {h}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          {/* Phone */}
          <RevealOnScroll delay={120}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <PhoneFrame
                src="/diffr-screens/screen-113.jpg"
                alt="Diffr app Start Something New screen showing beginner packs for hobbies including Film Photography and Home Coffee"
                width={280}
              />
              {/* Orange callout bubble */}
              <div
                style={{
                  position: "absolute",
                  top: "8%",
                  right: -20,
                  background: "#F0522C",
                  color: "#fff",
                  borderRadius: 12,
                  padding: "10px 16px",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  boxShadow: "0 8px 24px rgba(240,82,44,0.35)",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                ✨ New to a hobby?
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURE 3 — CURATED SCENES (MARQUEE)
      ════════════════════════════════════════════ */}
      <section
        style={{
          padding: "128px 0",
          background: "var(--d-bg2)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", marginBottom: 56 }}>
          <RevealOnScroll>
            <Eyebrow>Scenes</Eyebrow>
            <SectionHeading>Whole setups, not random product pages.</SectionHeading>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--d-text-50)", maxWidth: 560 }}>
              Mobile gaming. Home gym. Running starter kit. Yoga and mindfulness. Each Scene is a
              complete answer to &ldquo;what does the kit look like?&rdquo; — assembled from the
              brands we trust, with the alternatives we&apos;d swap in if something&apos;s out of stock.
            </p>
          </RevealOnScroll>
        </div>

        {/* Marquee track — duplicated for seamless loop */}
        <div className="diffr-marquee-wrap" style={{ overflow: "hidden", cursor: "default" }}>
          <div
            className="diffr-marquee"
            style={{ display: "flex", gap: 20, width: "max-content" }}
          >
            {[...sceneCards, ...sceneCards].map((card, i) => (
              <div
                key={i}
                className="diffr-scene-card"
                style={{
                  width: 260,
                  height: 320,
                  borderRadius: 20,
                  flexShrink: 0,
                  background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    lineHeight: 1,
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), 'Playfair Display', serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {card.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURE 4 — BRAND DEPTH (117 + 118)
      ════════════════════════════════════════════ */}
      <section
        style={{
          padding: "128px 32px",
          background: "var(--d-bg)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealOnScroll>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <Eyebrow>Brand Profile</Eyebrow>
              <SectionHeading>All the way down to the product line.</SectionHeading>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
            className="diffr-feature-grid"
          >
            {/* Brand profile (screenshot 117) */}
            <RevealOnScroll>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
                <PhoneFrame
                  src="/diffr-screens/screen-117.jpg"
                  alt="Diffr brand profile for Seifried winery showing hexagon badge with 7.3 OVERALL score and six axis breakdown"
                  width={260}
                />
                <div style={{ textAlign: "center", maxWidth: 320 }}>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--d-text-55, rgba(42,38,32,0.6))", marginBottom: 0 }}>
                    Six-axis score, beginner notes, confidence rating, community ratings.
                    The whole story of a brand on one screen.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Product lines (screenshot 118) */}
            <RevealOnScroll delay={160}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
                <PhoneFrame
                  src="/diffr-screens/screen-118.jpg"
                  alt="Diffr MSR product lines screen showing 50 items including DromLite, Operator, Remote and Reactor product lines"
                  width={260}
                />
                <div style={{ textAlign: "center", maxWidth: 320 }}>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--d-text-55, rgba(42,38,32,0.6))", marginBottom: 0 }}>
                    Then drill into 50+ product lines per brand — so you know whether to start with
                    MSR&apos;s DromLite or their Reactor, not just whether to buy &ldquo;an MSR thing.&rdquo;
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURE 5 — TIER LISTS
      ════════════════════════════════════════════ */}
      <section
        style={{
          padding: "128px 32px",
          background: "var(--d-bg2)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="diffr-feature-grid"
        >
          {/* Phone */}
          <RevealOnScroll>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <PhoneFrame
                src="/diffr-screens/screen-114.jpg"
                alt="Diffr tier list Greatest Sneaker Brands Ever with GOAT, Elite, Solid, Mid and Bench tiers showing Nike, Adidas, Hoka and other brands"
                width={280}
              />
            </div>
          </RevealOnScroll>

          {/* Copy */}
          <RevealOnScroll delay={120}>
            <Eyebrow>Community</Eyebrow>
            <SectionHeading>Settle the GOAT debate.</SectionHeading>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--d-text-50)", marginBottom: 36 }}>
              Build tier lists for any category — sneakers, coffee, whatever. Drop brand circles
              into GOAT / Elite / Solid / Mid / Bench. Publish to the community or keep it
              private. There&apos;s no &ldquo;wrong&rdquo; S tier. Only your truth.
            </p>
            {/* Tier labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "GOAT", color: "#F0522C" },
                { label: "Elite", color: "#1B8BF5" },
                { label: "Solid", color: "#3B82F6" },
                { label: "Mid",   color: "#60A5FA" },
                { label: "Bench", color: "#93C5FD" },
              ].map((tier) => (
                <div
                  key={tier.label}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 28,
                      background: tier.color,
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#fff",
                      letterSpacing: "0.06em",
                      flexShrink: 0,
                    }}
                  >
                    {tier.label}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      height: 2,
                      background: tier.color,
                      opacity: 0.25,
                      borderRadius: 1,
                    }}
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRO — dark blue gradient
      ════════════════════════════════════════════ */}
      <section
        id="pro"
        className="diffr-pro-bg"
        style={{
          padding: "128px 32px",
          background: "linear-gradient(135deg, #0A2A6E 0%, #1B8BF5 60%, #5AB0FF 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
            className="diffr-feature-grid"
          >
            {/* Copy */}
            <div>
              {/* Pro eyebrow */}
              <p
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 16,
                }}
              >
                Diffr Pro
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  color: "#fff",
                  marginBottom: 20,
                }}
              >
                Skip the research. Speak it.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.72)", marginBottom: 36 }}>
                Open the AI Coach. Hold the mic. Say &ldquo;I want to get into film photography on a $300
                budget.&rdquo; Five seconds later, you have a beginner Scene built specifically for you,
                with the why behind every choice.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "AI Coach — voice → Scene in 5s",
                  "Unlimited photo verification (earn Credits on every purchase)",
                  "Premium avatar skins and profile card styles",
                  "All future Pro-only features at today's price",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: 18,
                        lineHeight: 1,
                        marginTop: 1,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing note */}
              <div
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                  $ — /mo
                </span>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: "4px 0 0", letterSpacing: "0.02em" }}>
                  Current price shown on the iOS paywall before you confirm
                </p>
              </div>
            </div>

            {/* Mic animation mock */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 200, height: 200 }}>
                {/* Pulse rings */}
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`mic-ring-${n}`}
                    style={{
                      position: "absolute",
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.4)",
                    }}
                  />
                ))}
                {/* Mic button */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    border: "2px solid rgba(255,255,255,0.5)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="9" y="2" width="6" height="11" rx="3"/>
                    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TRUST
      ════════════════════════════════════════════ */}
      <section
        style={{
          padding: "128px 32px",
          background: "var(--d-bg)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealOnScroll>
            <div style={{ marginBottom: 56, textAlign: "center" }}>
              <Eyebrow>Why it works</Eyebrow>
              <SectionHeading>Built different from day one.</SectionHeading>
            </div>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
            }}
            className="diffr-trust-grid"
          >
            {trustCards.map((card, i) => (
              <RevealOnScroll key={card.title} delay={i * 100}>
                <div
                  className="diffr-trust-card"
                  style={{
                    padding: "32px 28px",
                    background: "#fff",
                    border: "1px solid rgba(42,38,32,0.08)",
                    borderRadius: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(27,139,245,0.08)",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display), 'Playfair Display', serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#2A2620",
                        marginBottom: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--d-text-50)", marginBottom: 16 }}>
                      {card.body}
                    </p>
                    <a
                      href={card.link.href}
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: "#1B8BF5",
                        textDecoration: "none",
                      }}
                    >
                      {card.link.label}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════ */}
      <section
        style={{
          padding: "128px 32px",
          background: "var(--d-bg2)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.0,
                color: "#2A2620",
                marginBottom: 20,
              }}
            >
              Stop guessing what to buy.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--d-text-50)", marginBottom: 40 }}>
              Free to download. Pro is optional. Cancel any time in iOS Settings.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AppStoreBadge href={appStoreUrl} large />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════ */}
      <footer
        style={{
          background: "#2A2620",
          padding: "48px 32px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              marginBottom: 24,
            }}
          >
            {/* Wordmark */}
            <span
              style={{
                fontFamily: "var(--font-display), 'Playfair Display', serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: 22,
                color: "#fff",
                opacity: 0.9,
              }}
            >
              Diffr
            </span>

            {/* Nav links */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 24px",
                justifyContent: "center",
              }}
            >
              {[
                { href: "/diffr/privacy", label: "Privacy" },
                { href: "/diffr/terms", label: "Terms" },
                { href: "/diffr/support", label: "Support" },
                { href: "mailto:diffr@truake.com", label: "diffr@truake.com" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 150ms",
                  }}
                  className="diffr-nav-link"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              © 2026 truake LLC
            </p>
          </div>

          {/* Legal fine print */}
          <p
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              lineHeight: 1.6,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: 20,
              textAlign: "center",
            }}
          >
            Diffr is a trademark of truake LLC. Apple, the Apple logo, iPhone, App Store and Sign
            in with Apple are trademarks of Apple Inc., registered in the U.S. and other countries.
          </p>
        </div>
      </footer>

      {/* ── Responsive style overrides ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 900px) {
            .diffr-hero-grid  { grid-template-columns: 1fr !important; }
            .diffr-hero-phone { display: none !important; }
            .diffr-feature-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .diffr-trust-grid   { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            nav { padding: 0 16px !important; }
          }
        `
      }} />
    </div>
  );
}

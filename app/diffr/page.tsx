import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./components/RevealOnScroll";
import BlurText from "./components/BlurText";
import ShinyText from "./components/ShinyText";
import CountUp from "./components/CountUp";
import SpotlightCard from "./components/SpotlightCard";
import ScrollVelocity from "./components/ScrollVelocity";

/* ─────────────────────────────────────────────────────────────
   SEO
───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Diffr — What to buy first when you're new to a hobby",
  description:
    "Beginner-friendly brand picks for fishing, coffee, running, photography, investing and 40+ hobbies. 47,000+ brands scored across six axes. Free on iOS.",
  alternates: { canonical: "https://truake.com/diffr" },
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
    "apple-itunes-app": `app-id=6772870733`,
  },
};

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ?? "https://apps.apple.com/us/app/diffr/id6772870733";

const proofStats = [
  { number: "47,000+", label: "brands scored" },
  { number: "6", label: "axes of brand truth" },
  { number: "0", label: "ad networks" },
  { number: "0", label: "data sold" },
  { number: "1", label: "person built it" },
];

const proofStatsCounted = [
  { to: 47000, from: 0,   direction: "up"   as const, suffix: "+", separator: ",", label: "brands scored",     duration: 2.2, delay: 0 },
  { to: 6,     from: 0,   direction: "up"   as const, suffix: "",  separator: "",  label: "axes of brand truth", duration: 1.2, delay: 0.1 },
  { to: 0,     from: 0,   direction: "up"   as const, suffix: "",  separator: "",  label: "ad networks",        duration: 0.4, delay: 0.2 },
  { to: 0,     from: 0,   direction: "up"   as const, suffix: "",  separator: "",  label: "data sold",          duration: 0.4, delay: 0.3 },
  { to: 1,     from: 0,   direction: "up"   as const, suffix: "",  separator: "",  label: "person built it",    duration: 1,   delay: 0.4 },
];

const sceneCards = [
  { title: "Mobile & Casual Gaming", count: "12 brands", from: "#1E1B4B", to: "#4338CA",  icon: "gaming"       },
  { title: "Home Gym Essentials",    count: "16 brands", from: "#0F172A", to: "#1B8BF5",  icon: "gym"          },
  { title: "Running Starter Kit",    count: "11 brands", from: "#7C2D12", to: "#F0522C",  icon: "running"      },
  { title: "Yoga & Mindfulness",     count: "9 brands",  from: "#14532D", to: "#16A34A",  icon: "yoga"         },
  { title: "Film Photography",       count: "14 brands", from: "#1C1917", to: "#57534E",  icon: "photography"  },
  { title: "Home Coffee Ritual",     count: "10 brands", from: "#451A03", to: "#92400E",  icon: "coffee"       },
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
  const w = large ? 172 : 136;
  const h = large ? 51  : 40;
  return (
    <a
      href={href}
      data-app-store-href={href}
      className="diffr-badge-appstore"
      aria-label="Download Diffr on the App Store"
      style={{ display: "inline-block", textDecoration: "none", lineHeight: 0 }}
    >
      <Image
        src="/app-store-badge.png"
        alt="Download on the App Store"
        width={w}
        height={h}
        style={{ display: "block" }}
      />
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

function SceneIcon({ name }: { name: string }) {
  const s = { width: 44, height: 44, "aria-hidden": true as const, fill: "none", stroke: "white", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };
  if (name === "gaming") return (
    <svg {...s}>
      <rect x="2" y="7" width="20" height="13" rx="3"/>
      <path d="M8 13.5v-2m-1 1h2"/>
      <circle cx="16" cy="11.5" r=".9" fill="white" stroke="none"/>
      <circle cx="14" cy="13.5" r=".9" fill="white" stroke="none"/>
    </svg>
  );
  if (name === "gym") return (
    <svg {...s}>
      <path d="M6 4v16M18 4v16"/>
      <path d="M2 9.5h4M18 9.5h4"/>
      <path d="M2 14.5h4M18 14.5h4"/>
      <path d="M6 12h12"/>
    </svg>
  );
  if (name === "running") return (
    <svg {...s}>
      <circle cx="13.5" cy="3.5" r="1.5" fill="white" stroke="none"/>
      <path d="M7.5 21l3.5-7 2.5 3.5 2.5-5L19 16"/>
      <path d="M17.5 8.5c-1.2.2-2.8-.3-3.5-1.5l-1-2c-.5-1-1.7-1.2-2.3-.4L8.5 8"/>
    </svg>
  );
  if (name === "yoga") return (
    <svg {...s}>
      <circle cx="12" cy="4" r="1.5" fill="white" stroke="none"/>
      <path d="M5 14c2 0 4-1 7-1s5 1 7 1"/>
      <path d="M12 6v4"/>
      <path d="M9.5 18.5L7 21M14.5 18.5L17 21"/>
      <path d="M12 10l-2.5 5h5L12 10z"/>
    </svg>
  );
  if (name === "photography") return (
    <svg {...s}>
      <rect x="2" y="8" width="20" height="13" rx="2"/>
      <path d="M16 8V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <circle cx="12" cy="14.5" r="3"/>
    </svg>
  );
  // coffee (default)
  return (
    <svg {...s}>
      <path d="M18 8h1a3.5 3.5 0 010 7h-1"/>
      <path d="M3 8h15v8.5A4 4 0 0114.5 20.5h-7A4 4 0 013.5 16.5z"/>
      <path d="M7.5 2.5v1.8M11.5 2.5v1.8"/>
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

          /* Grain texture overlay — impeccable editorial aesthetic */
          .diffr-root::after {
            content: '';
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.028;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
            background-repeat: repeat;
            animation: diffrGrain 0.9s steps(3) infinite;
          }
          @keyframes diffrGrain {
            0%   { transform: translate(0, 0); }
            33%  { transform: translate(2%, -1%); }
            66%  { transform: translate(-1.5%, 2%); }
            100% { transform: translate(1%, 1%); }
          }

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

          /* ── Hero entrance stagger ── */
          @keyframes diffrFadeUp {
            from { opacity: 0; transform: translateY(22px); }
            to   { opacity: 1; transform: translateY(0);    }
          }
          @keyframes diffrFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          /* Spring-style easing: slight overshoot for lively feel */
          .diffr-hero-eyebrow { animation: diffrFadeUp 640ms cubic-bezier(0.22,1.2,0.36,1) 80ms  both; }
          .diffr-hero-h1      { animation: diffrFadeUp 700ms cubic-bezier(0.22,1.2,0.36,1) 200ms both; }
          .diffr-hero-body    { animation: diffrFadeUp 640ms cubic-bezier(0.22,1,0.36,1)   340ms both; }
          .diffr-hero-ctas    { animation: diffrFadeUp 640ms cubic-bezier(0.22,1,0.36,1)   460ms both; }
          .diffr-hero-phone-wrap { animation: diffrFadeUp 800ms cubic-bezier(0.22,1.2,0.36,1) 180ms both; }

          /* Proof bar stat stagger */
          .diffr-proof-stat:nth-child(1) { animation: diffrFadeUp 480ms cubic-bezier(0.22,1,0.36,1) 120ms both; }
          .diffr-proof-stat:nth-child(2) { animation: diffrFadeUp 480ms cubic-bezier(0.22,1,0.36,1) 200ms both; }
          .diffr-proof-stat:nth-child(3) { animation: diffrFadeUp 480ms cubic-bezier(0.22,1,0.36,1) 280ms both; }
          .diffr-proof-stat:nth-child(4) { animation: diffrFadeUp 480ms cubic-bezier(0.22,1,0.36,1) 360ms both; }
          .diffr-proof-stat:nth-child(5) { animation: diffrFadeUp 480ms cubic-bezier(0.22,1,0.36,1) 440ms both; }

          /* Scroll reveal — spring easing */
          .diffr-reveal {
            opacity: 0;
            transform: translateY(32px);
            transition: opacity 600ms cubic-bezier(0.22,1,0.36,1),
                        transform 600ms cubic-bezier(0.22,1.1,0.36,1);
          }
          .diffr-reveal.visible { opacity: 1; transform: translateY(0); }

          /* Button micro-interactions */
          .diffr-cta-primary {
            transition: transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease;
          }
          .diffr-cta-primary:hover  { transform: scale(1.03); }
          .diffr-cta-primary:active { transform: scale(0.96); transition-duration: 80ms; }
          .diffr-cta-primary:focus-visible {
            outline: 2px solid rgba(27,139,245,0.5);
            outline-offset: 3px;
          }

          .diffr-badge-appstore {
            transition: transform 200ms cubic-bezier(0.34,1.56,0.64,1),
                        opacity 150ms ease;
          }
          .diffr-badge-appstore:hover  { transform: scale(1.04); opacity: 0.9; }
          .diffr-badge-appstore:active {
            transform: scale(0.95);
            transition-duration: 70ms;
          }
          .diffr-badge-appstore:focus-visible {
            outline: 2px solid rgba(27,139,245,0.5);
            outline-offset: 3px;
          }

          /* Scene card hover — spring lift */
          .diffr-scene-card {
            transition: transform 280ms cubic-bezier(0.34,1.56,0.64,1),
                        box-shadow 280ms ease;
          }
          .diffr-scene-card:hover {
            transform: translateY(-6px) scale(1.015);
            box-shadow: 0 16px 48px rgba(0,0,0,0.22);
          }

          /* text-wrap: balance on editorial headings */
          .split-parent,
          .diffr-hero-h1 {
            text-wrap: balance;
          }

          /* Axis pill hover */
          .diffr-axis-pill {
            transition: background 160ms ease, border-color 160ms ease, transform 200ms cubic-bezier(0.34,1.56,0.64,1);
          }
          .diffr-axis-pill:hover {
            background: rgba(27,139,245,0.16) !important;
            transform: scale(1.04);
          }

          /* Trust card hover — subtle lift */
          .diffr-trust-card {
            transition: border-color 220ms ease, box-shadow 220ms ease,
                        transform 280ms cubic-bezier(0.34,1.56,0.64,1);
          }
          .diffr-trust-card:hover {
            border-color: rgba(27,139,245,0.3) !important;
            box-shadow: 0 12px 40px rgba(27,139,245,0.10);
            transform: translateY(-3px);
          }

          /* Nav link hover */
          .diffr-nav-link { transition: color 150ms ease; }
          .diffr-nav-link:hover { color: #1B8BF5 !important; }
          .diffr-social:hover { color: #fff !important; border-color: rgba(255,255,255,0.4) !important; }

          /* Tier label hover */
          .diffr-tier-row {
            transition: transform 200ms cubic-bezier(0.34,1.56,0.64,1);
          }
          .diffr-tier-row:hover { transform: translateX(4px); }

          /* Reduced motion: kill everything */
          @media (prefers-reduced-motion: reduce) {
            .diffr-glow, .diffr-hex-badge,
            .diffr-hex-spin, .mic-ring-1, .mic-ring-2, .mic-ring-3,
            .diffr-pro-bg,
            .diffr-hero-eyebrow, .diffr-hero-h1,
            .diffr-hero-ctas, .diffr-hero-phone-wrap,
            .diffr-proof-stat,
            .diffr-root::after {
              animation: none !important;
            }
            .diffr-reveal {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
            .diffr-cta-primary:hover, .diffr-cta-primary:active,
            .diffr-badge-appstore:hover, .diffr-badge-appstore:active,
            .diffr-scene-card:hover, .diffr-trust-card:hover,
            .diffr-tier-row:hover, .diffr-axis-pill:hover {
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
            downloadUrl: appStoreUrl,
            description:
              "Beginner-friendly brand recommendations. 47,000+ brands scored across six axes.",
            screenshot: [
              "https://truake.com/diffr-screens/screen-113.jpg",
              "https://truake.com/diffr-screens/screen-115.jpg",
              "https://truake.com/diffr-screens/screen-116.jpg",
            ],
            author: { "@type": "Organization", name: "truake LLC", url: "https://truake.com" },
            sameAs: ["https://x.com/Diffr_app", "https://www.facebook.com/diffrapp", "https://www.instagram.com/diffr.app", "https://www.tiktok.com/@diffr_app", "https://www.reddit.com/user/Diffr_app/", appStoreUrl],
          }),
        }}
      />

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
          background: [
            "radial-gradient(ellipse 55% 60% at 4% 12%, rgba(27,139,245,0.09) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 50% at 94% 85%, rgba(240,82,44,0.07) 0%, transparent 60%)",
            "radial-gradient(ellipse 35% 40% at 60% 5%, rgba(27,139,245,0.04) 0%, transparent 60%)",
            "var(--d-bg)",
          ].join(", "),
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
                className="diffr-hero-eyebrow"
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
                className="diffr-hero-h1"
                style={{
                  fontFamily: "var(--font-display), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(48px, 7.5vw, 96px)",
                  fontWeight: 700,
                  letterSpacing: "-0.040em",
                  lineHeight: 0.98,
                  color: "#2A2620",
                  marginBottom: 28,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                Beginner&#8209;friendly brands.{" "}
                <em style={{ fontStyle: "italic" }}>
                  <ShinyText text="Without the regret." color="#1B8BF5" shineColor="rgba(91,175,255,0.9)" speed={3.5} />
                </em>
              </h1>

              <BlurText
                text="Tell us what you want to start — fishing, coffee, running, investing — and we'll show you exactly what to buy first. And what to skip until you're sure."
                animateBy="words"
                direction="bottom"
                delay={80}
                stepDuration={0.38}
                threshold={0}
                style={{
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "var(--d-text-55, rgba(42,38,32,0.6))",
                  marginBottom: 36,
                  maxWidth: 520,
                  fontWeight: 400,
                }}
              />

              {/* CTAs */}
              <div className="diffr-hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
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
              className="diffr-hero-phone diffr-hero-phone-wrap"
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
          {proofStatsCounted.map((stat, i) => (
            <div
              key={stat.label}
              className="diffr-proof-stat"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                padding: "0 28px",
                borderRight: i < proofStatsCounted.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
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
                  display: "inline-block",
                }}
              >
                <CountUp
                  to={stat.to}
                  from={stat.from}
                  direction={stat.direction}
                  duration={stat.duration}
                  delay={stat.delay}
                  separator={stat.separator}
                  suffix={stat.suffix}
                />
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
                  className="diffr-axis-pill"
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
                    cursor: "default",
                    display: "inline-block",
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
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="#F0522C" aria-hidden="true"><polygon points="4,0 8,4 4,8 0,4"/></svg>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{display:"inline-block",verticalAlign:"middle",marginRight:6,marginBottom:1}}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>New to a hobby?
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

        {/* Velocity-scroll track — physics-based marquee via react-bits */}
        <ScrollVelocity
          velocity={55}
          numCopies={4}
          wrapperStyle={{ overflow: "hidden", cursor: "default", paddingBottom: 8 }}
          itemStyle={{ display: "inline-flex", gap: 20, paddingRight: 20 }}
          texts={[
            <span key="row" style={{ display: "inline-flex", gap: 20 }}>
              {sceneCards.map((card, i) => (
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
                    display: "inline-flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    verticalAlign: "top",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 14,
                      filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.25))",
                      flexShrink: 0,
                    }}
                  >
                    <SceneIcon name={card.icon} />
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
            </span>
          ]}
        />
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
                  className="diffr-tier-row"
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
            <RevealOnScroll>
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0,marginTop:2}}>
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                      <path d="M8 12l3 3 5-5"/>
                    </svg>
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
            </RevealOnScroll>

            {/* Mic animation mock */}
            <RevealOnScroll delay={180}>
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
            </RevealOnScroll>
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
                <SpotlightCard
                  className="diffr-trust-card"
                  spotlightColor="rgba(27,139,245,0.11)"
                  style={{
                    padding: "32px 28px",
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
                </SpotlightCard>
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
                { href: "/diffr/privacy",               label: "Privacy" },
                { href: "/diffr/terms",                 label: "Terms" },
                { href: "/diffr/support",               label: "Support" },
                { href: "/diffr/affiliate-disclosure",  label: "Affiliate Disclosure" },
                { href: "mailto:diffr@truake.com",      label: "diffr@truake.com" },
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

          {/* Social */}
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
            {[
              { href: "https://x.com/Diffr_app", label: "Diffr on X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { href: "https://www.facebook.com/diffrapp", label: "Diffr on Facebook", path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" },
              { href: "https://www.instagram.com/diffr.app", label: "Diffr on Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { href: "https://www.tiktok.com/@diffr_app", label: "Diffr on TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
              { href: "https://www.reddit.com/user/Diffr_app/", label: "Diffr on Reddit", path: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="diffr-social"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.55)",
                  transition: "color 150ms, border-color 150ms",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
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

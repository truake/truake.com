import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import WaitlistForm from "./waitlist-form";
import { Barlow_Condensed, IBM_Plex_Mono, Syne } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diffr — Curated Brand Guide. Zero Repeats.",
  description:
    "Diffr applies the Non-Repetition Principle to end choice overload. One brand per category. Curated by scenario. Visual-first. Built on Diff-Structism philosophy.",
  keywords: [
    "Diffr",
    "brand guide",
    "curated shopping",
    "non-repetition principle",
    "choice overload",
    "diff-structism",
    "intentional consumption",
    "shopping app",
    "brand curation",
  ],
  openGraph: {
    title: "Diffr — Curated Brand Guide. Zero Repeats.",
    description:
      "One brand per category. No noise. Diffr curates every consumption scenario down to its minimum units, then assigns the best brand to each — with zero repetition.",
    url: "https://truake.com/diffr",
    images: [
      {
        url: "/diffr-og.png",
        width: 1200,
        height: 630,
        alt: "Diffr — Curated Brand Guide",
      },
    ],
  },
};

const matrixRows = [
  { n: "01", slot: "Cast Iron Pan", brand: "Lodge" },
  { n: "02", slot: "Finishing Salt", brand: "Maldon" },
  { n: "03", slot: "Thermometer", brand: "Thermapen" },
  { n: "04", slot: "Carving Knife", brand: "Laguiole" },
  { n: "05", slot: "Cutting Board", brand: "BoardSmith" },
  { n: "06", slot: "Butter", brand: "Plugrá" },
  { n: "07", slot: "Wine Glass", brand: "Riedel" },
];

const features = [
  {
    icon: "⬡",
    title: "Scene Decomposition",
    desc: "Every consumption scenario — cooking steak, brewing coffee, setting up a home office — is broken into its minimum units. Each unit gets exactly one brand.",
    color: "#1B8BF5",
  },
  {
    icon: "◈",
    title: "Non-Repetition Principle",
    desc: "No brand appears twice in the same scenario. Even if a brand excels in multiple categories, the principle forces genuine diversity and discovery.",
    color: "#F0522C",
  },
  {
    icon: "◉",
    title: "Visual Curation",
    desc: "15 options, not 1,500. Each presented visually, letting you perceive differences the way your brain was designed to — through sight, not text.",
    color: "#1B8BF5",
  },
  {
    icon: "◎",
    title: "Cultural Value Layer",
    desc: "Every recommendation includes the brand's origin, founding philosophy, and cultural DNA. You're not just buying a product — you're choosing a world.",
    color: "#F0522C",
  },
];

const scenarios = [
  {
    label: "Steak dinner",
    items: 15,
    brands: ["Stone Axe", "De Buyer", "Maldon", "Laguiole", "+11 more"],
  },
  {
    label: "Home coffee ritual",
    items: 12,
    brands: ["Fellow", "Comandante", "Hario", "Illy", "+8 more"],
  },
  {
    label: "Minimalist desk setup",
    items: 10,
    brands: ["Keychron", "Ugmonk", "Moleskine", "+7 more"],
  },
];

export default function DiffrPage() {
  return (
    <div
      className={`diffr-root ${barlow.variable} ${ibmMono.variable} ${syne.variable}`}
      style={{ backgroundColor: "var(--d-bg)", color: "var(--d-text)", minHeight: "100vh" }}
    >
      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "var(--d-nav)",
          borderBottom: "1px solid var(--d-nav-border)",
          backdropFilter: "blur(16px)",
        }}
        aria-label="Diffr navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to Truake">
            <Image
              src="/truake-logo-web.png"
              alt="Truake"
              width={120}
              height={40}
              className="h-7 w-auto opacity-60"
            />
            <span style={{ color: "var(--d-text-20)" }}>/</span>
            <Image
              src="/diffr-wordmark.png"
              alt="Diffr"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <div
              className="hidden md:flex items-center gap-7 text-xs tracking-[0.15em] uppercase"
              style={{ color: "var(--d-text-40)" }}
            >
              <a href="#how-it-works" className="hover:opacity-100 transition-opacity">
                How it works
              </a>
              <a href="#philosophy" className="hover:opacity-100 transition-opacity">
                Philosophy
              </a>
              <Link
                href="/diffr/blog"
                className="hover:opacity-100 transition-opacity"
                style={{ color: "var(--d-text-40)" }}
              >
                Blog
              </Link>
            </div>
            <a
              href="#waitlist"
              className="px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#F0522C", color: "#fff" }}
            >
              Early Access →
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-36 pb-0 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Protocol label */}
          <div className="flex items-center gap-4 mb-10">
            <div
              style={{ width: 1, height: 36, backgroundColor: "rgba(42,38,32,0.12)" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "var(--d-text-30)",
                textTransform: "uppercase",
              }}
            >
              DIFFR PROTOCOL / NON-REPETITION ENGINE / EARLY ACCESS
            </span>
          </div>

          {/* Giant headline */}
          <h1
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontSize: "clamp(72px, 13vw, 168px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              fontWeight: 900,
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            <span style={{ color: "var(--d-text)", display: "block" }}>One Brand.</span>
            <span style={{ color: "#1B8BF5", display: "block" }}>Per Slot.</span>
            <span
              style={{
                display: "block",
                WebkitTextStroke: "2px rgba(27,139,245,0.35)",
                WebkitTextFillColor: "transparent",
              }}
            >
              Zero Repeats.
            </span>
          </h1>

          {/* Sub + CTAs row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mt-10 mb-12">
            <p style={{ fontSize: 17, color: "var(--d-text-50)", lineHeight: 1.65, maxWidth: 480 }}>
              Diffr decomposes any consumption scenario into its minimum units — then assigns
              exactly one brand to each. Non-Repetition is not a feature.{" "}
              <span style={{ color: "var(--d-text)" }}>It&apos;s a law.</span>
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#F0522C", color: "#fff" }}
              >
                Get Early Access →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
                style={{ border: "1px solid rgba(27,139,245,0.4)", color: "#1B8BF5" }}
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* ── Slot Assignment Matrix ── */}
          <div
            style={{
              border: "1px solid rgba(42,38,32,0.10)",
              backgroundColor: "rgba(42,38,32,0.025)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            {/* Matrix header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 28px",
                borderBottom: "1px solid rgba(42,38,32,0.08)",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  color: "#1B8BF5",
                  textTransform: "uppercase",
                }}
              >
                DIFFR / SLOT ASSIGNMENT MATRIX
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "var(--d-text-20)",
                    textTransform: "uppercase",
                  }}
                >
                  SCENARIO: STEAK DINNER
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "var(--d-text-20)",
                    textTransform: "uppercase",
                  }}
                >
                  15 SLOTS
                </span>
              </div>
            </div>

            {/* Column headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "32px 1fr 1fr 120px",
                gap: "0 16px",
                padding: "10px 28px",
                borderBottom: "1px solid rgba(42,38,32,0.06)",
              }}
            >
              {["#", "SLOT", "ASSIGNED BRAND", "STATUS"].map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    color: "var(--d-text-20)",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Rows */}
            {matrixRows.map((row) => (
              <div
                key={row.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "32px 1fr 1fr 120px",
                  gap: "0 16px",
                  padding: "9px 28px",
                  borderBottom: "1px solid rgba(42,38,32,0.06)",
                }}
              >
                <span style={{ fontSize: 11, color: "var(--d-text-18)" }}>{row.n}</span>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--d-text-45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {row.slot}
                </span>
                <span style={{ fontSize: 11, color: "var(--d-text-80)", letterSpacing: "0.04em" }}>
                  {row.brand}
                </span>
                <span style={{ fontSize: 10, color: "#1B8BF5", letterSpacing: "0.15em" }}>
                  ✓ ASSIGNED
                </span>
              </div>
            ))}

            {/* Ellipsis row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "32px 1fr 1fr 120px",
                gap: "0 16px",
                padding: "9px 28px",
                borderBottom: "1px solid rgba(42,38,32,0.06)",
              }}
            >
              <span style={{ fontSize: 11, color: "var(--d-text-15)" }}>···</span>
              <span style={{ fontSize: 11, color: "var(--d-text-20)" }}>+ 8 more slots</span>
              <span style={{ fontSize: 11, color: "var(--d-text-20)" }}>···</span>
              <span style={{ fontSize: 10, color: "var(--d-text-15)" }}>···</span>
            </div>

            {/* Footer stats */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 28px",
              }}
            >
              <div style={{ display: "flex", gap: 28 }}>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "var(--d-text-25)",
                    textTransform: "uppercase",
                  }}
                >
                  TOTAL:{" "}
                  <span style={{ color: "var(--d-text-60)" }}>15 BRANDS</span>
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "var(--d-text-25)",
                    textTransform: "uppercase",
                  }}
                >
                  REPEATS:{" "}
                  <span style={{ color: "#F0522C", fontWeight: 600 }}>0</span>
                </span>
              </div>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "#1B8BF5",
                  textTransform: "uppercase",
                }}
              >
                ✓ PRINCIPLE INTACT
              </span>
            </div>
          </div>

          {/* Diffr icon — small, below matrix */}
          <div className="flex items-center gap-4 mt-8 mb-0">
            <div
              style={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(27,139,245,0.25)",
                backgroundColor: "rgba(27,139,245,0.08)",
              }}
            >
              <Image
                src="/diffr-icon.png"
                alt="Diffr"
                width={30}
                height={30}
                className="w-7 h-7 object-contain"
                priority
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#1B8BF5",
                  display: "inline-block",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span style={{ color: "var(--d-text-30)" }}>Now in Early Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-20 px-6 mt-16" style={{ backgroundColor: "var(--d-bg2)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ width: 28, height: 1, backgroundColor: "#F0522C" }} />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "var(--d-text-30)",
                textTransform: "uppercase",
              }}
            >
              THE PROBLEM
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "var(--d-text)",
              marginBottom: 12,
            }}
          >
            The Fridge Magnet Problem
          </h2>
          <p className="text-base mb-12" style={{ color: "var(--d-text-50)", maxWidth: 540 }}>
            Open your refrigerator door. Dozens of delivery app magnets. Friday night. You&apos;re hungry.
            Twenty minutes later — you&apos;re still deciding.
          </p>

          {/* Stat columns */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: "1px solid var(--d-border)" }}
          >
            {[
              { stat: "200+", label: "brands in a typical supermarket toothpaste aisle", indicator: "↑ Overload" },
              { stat: "13 pts", label: "IQ drop from sustained decision fatigue", indicator: "↓ Impaired" },
              { stat: "∞", label: "scrolling before a single purchase decision", indicator: "∞ Wasted" },
            ].map((item, i) => (
              <div
                key={item.stat}
                style={{
                  padding: "36px 32px",
                  borderLeft: i > 0 ? "1px solid var(--d-border)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontSize: "clamp(48px, 7vw, 80px)",
                    fontWeight: 900,
                    color: "#1B8BF5",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                  }}
                >
                  {item.stat}
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--d-text-40)", lineHeight: 1.6 }}>
                  {item.label}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#F0522C",
                    textTransform: "uppercase",
                  }}
                >
                  {item.indicator}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              marginTop: 24,
              padding: "28px 32px",
              borderLeft: "2px solid #1B8BF5",
              backgroundColor: "rgba(27,139,245,0.04)",
            }}
          >
            <p
              className="text-base font-medium"
              style={{ color: "var(--d-text-70)", lineHeight: 1.75, fontStyle: "italic" }}
            >
              &ldquo;More options do not create better experiences. More options create anxiety.
              What you need isn&apos;t more doors — it&apos;s a better map.&rdquo;
            </p>
            <p
              className="mt-3 text-sm"
              style={{
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.1em",
                color: "#1B8BF5",
              }}
            >
              — Diff-Structism, Chapter 9
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div style={{ width: 28, height: 1, backgroundColor: "#1B8BF5" }} />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "var(--d-text-30)",
                textTransform: "uppercase",
              }}
            >
              PROTOCOL / THREE STEPS
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "var(--d-text)",
              marginBottom: 40,
            }}
          >
            How Diffr Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--d-border)" }}>
            {[
              {
                step: "01",
                title: "Choose a scenario",
                desc: "Tell Diffr what you're trying to accomplish. 'Cook steak.' 'Build a home office.' 'Start a coffee ritual.' Any consumption scenario works.",
              },
              {
                step: "02",
                title: "Diffr decomposes it",
                desc: "The engine breaks your scenario into its minimum units. Steak → cast iron pan, finishing salt, thermometer, cutting board, knife, butter… 15 slots.",
              },
              {
                step: "03",
                title: "One brand per slot. No repeats.",
                desc: "Each slot gets the best brand for that specific role, chosen for visual identity and cultural value. No brand appears twice. Ever.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{ padding: "40px 36px", backgroundColor: "var(--d-bg)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontSize: 80,
                    fontWeight: 900,
                    color: "rgba(27,139,245,0.12)",
                    lineHeight: 1,
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--d-text)",
                    marginBottom: 14,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--d-text-45)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scenario examples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {scenarios.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "20px 24px",
                  border: "1px solid var(--d-border)",
                  backgroundColor: "rgba(42,38,32,0.02)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold" style={{ color: "var(--d-text-70)" }}>
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      backgroundColor: "rgba(27,139,245,0.1)",
                      color: "#1B8BF5",
                      padding: "3px 8px",
                    }}
                  >
                    {s.items} SLOTS
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.brands.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2 py-0.5"
                      style={{
                        backgroundColor: "rgba(42,38,32,0.04)",
                        color: "var(--d-text-40)",
                        border: "1px solid var(--d-border)",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--d-bg2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div style={{ width: 28, height: 1, backgroundColor: "#1B8BF5" }} />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "var(--d-text-30)",
                textTransform: "uppercase",
              }}
            >
              WHAT MAKES DIFFR DIFFERENT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--d-border)" }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{ padding: "40px 36px", backgroundColor: "var(--d-bg2)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    color: f.color,
                    lineHeight: 1,
                    marginBottom: 20,
                    opacity: 0.9,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--d-text)",
                    marginBottom: 14,
                  }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--d-text-45)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section id="philosophy" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: 28, height: 1, backgroundColor: "#F0522C" }} />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "#F0522C",
                textTransform: "uppercase",
              }}
            >
              BUILT ON DIFF-STRUCTISM
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "var(--d-text)",
              marginBottom: 20,
            }}
          >
            A philosophy, not just an app.
          </h2>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            style={{
              paddingTop: 32,
              borderTop: "1px solid var(--d-border)",
              marginTop: 32,
            }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--d-text-60)" }}>
              Diff-Structism proposes that{" "}
              <strong style={{ color: "var(--d-text)", fontWeight: 600 }}>
                difference, not substance, is the fundamental fabric of reality
              </strong>
              . When applied to consumption, this means every purchase decision should be grounded
              in legitimate, structural difference — not marketing noise.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--d-text-60)" }}>
              Diffr is the anti-entropy tool that makes this philosophy practical. It doesn&apos;t
              just recommend products — it builds your personal{" "}
              <em>difference coordinate system</em>: a structured map of what matters to you, and
              why.
            </p>
          </div>
        </div>
      </section>

      {/* ── Book + Community ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--d-bg2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--d-border)" }}>
            {/* Book card */}
            <a
              href="https://diffr.gumroad.com/l/thedefaulttrap"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 transition-all hover:brightness-95"
              style={{ padding: "40px 36px", backgroundColor: "var(--d-bg2)" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#e53e3e",
                }}
              >
                Book
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "var(--d-text)",
                    marginBottom: 10,
                  }}
                >
                  The Default Trap
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--d-text-45)" }}>
                  Why Everything You Own Is Owning You. The philosophy behind Diffr — 44,000 words
                  on choice overload, the One-Brand Rule, and Original Priority.
                </p>
              </div>
              <div
                className="flex items-center justify-between mt-auto pt-4"
                style={{ borderTop: "1px solid var(--d-border)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    backgroundColor: "rgba(27,139,245,0.1)",
                    color: "#1B8BF5",
                    padding: "4px 10px",
                    textTransform: "uppercase",
                  }}
                >
                  Pay What You Want · incl. $0
                </span>
                <span
                  className="text-sm font-semibold transition-transform group-hover:translate-x-1"
                  style={{ color: "#1B8BF5" }}
                >
                  Read →
                </span>
              </div>
            </a>

            {/* Community card */}
            <div style={{ padding: "40px 36px", backgroundColor: "var(--d-bg2)" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--d-text-30)",
                  marginBottom: 20,
                }}
              >
                Follow The Build
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    href: "https://x.com/diffr_app",
                    icon: "𝕏",
                    label: "@Diffr_app",
                    sub: "Build logs, brand philosophy, launch updates",
                    external: true,
                  },
                  {
                    href: "https://reddit.com/u/Diffr_app",
                    icon: "🤿",
                    label: "u/Diffr_app",
                    sub: "r/minimalism · r/productivity · r/BuyItForLife",
                    external: true,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:opacity-100 transition-opacity"
                    style={{ color: "var(--d-text-50)" }}
                  >
                    <span
                      style={{
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(42,38,32,0.04)",
                        border: "1px solid var(--d-border)",
                        fontSize: 14,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--d-text-80)" }}>
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: 10,
                          color: "var(--d-text-30)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </a>
                ))}
                <Link
                  href="/diffr/blog"
                  className="flex items-center gap-3 text-sm hover:opacity-100 transition-opacity"
                  style={{ color: "var(--d-text-50)" }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(42,38,32,0.04)",
                      border: "1px solid var(--d-border)",
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--d-text-80)" }}>
                      Diffr Blog
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 10,
                        color: "var(--d-text-30)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      truake.com/diffr/blog
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waitlist ── */}
      <section id="waitlist" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              border: "1px solid var(--d-border)",
              padding: "56px 48px",
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                color: "var(--d-text-25)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              EARLY ACCESS / JOIN WAITLIST
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                fontSize: "clamp(40px, 6vw, 60px)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 1,
                color: "var(--d-text)",
                marginBottom: 16,
              }}
            >
              Join the Waitlist.
            </h2>
            <p className="text-sm mb-10" style={{ color: "var(--d-text-45)", lineHeight: 1.7 }}>
              Diffr is in early access. Be among the first to build your difference coordinate
              system.
            </p>

            <WaitlistForm />

            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "var(--d-text-25)",
                marginTop: 16,
                textTransform: "uppercase",
              }}
            >
              No spam. No newsletters. Just access when it&apos;s ready.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-10 px-6"
        style={{ borderTop: "1px solid var(--d-border)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/diffr-icon.png"
              alt="Diffr"
              width={20}
              height={20}
              className="w-5 h-5 object-contain opacity-40"
            />
            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--d-text-40)",
              }}
            >
              Diffr
            </span>
            <span style={{ color: "var(--d-text-15)" }}>&nbsp;by&nbsp;</span>
            <Link
              href="/"
              className="text-sm hover:opacity-100 transition-opacity"
              style={{ color: "var(--d-text-30)" }}
            >
              Truake
            </Link>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--d-text-18)",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} Truake. Built on Diff-Structism.
          </p>
          <div
            className="flex gap-6 text-xs"
            style={{
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--d-text-25)",
            }}
          >
            <Link href="/" className="hover:opacity-100 transition-opacity">
              ← Truake
            </Link>
            <Link href="/diffr/blog" className="hover:opacity-100 transition-opacity">
              Blog
            </Link>
            <a
              href="https://x.com/diffr_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              𝕏 @Diffr_app
            </a>
            <a
              href="https://diffr.gumroad.com/l/thedefaulttrap"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Book
            </a>
            <a href="mailto:hello@truake.com" className="hover:opacity-100 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

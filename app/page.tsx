import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Truake — One Person. Full Company.",
  description:
    "Truake is a one-person company by Rock Lam, building AI-powered products for intentional living. Creator of Diffr — the curated brand guide that ends choice overload.",
};

export default function Home() {
  return (
    <div
      className={cormorant.variable}
      style={{ backgroundColor: "#ECEDE0", color: "#2A2620", minHeight: "100vh" }}
    >
      {/* Paper grain */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          opacity: 0.022,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Nav ── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            backgroundColor: "rgba(236,237,224,0.94)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(42,38,32,0.1)",
          }}
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/" aria-label="Truake home">
              <Image
                src="/truake-logo.png"
                alt="Truake logo"
                width={100}
                height={40}
                className="h-7 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-10">
              <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
                {[
                  { href: "#products", label: "Products" },
                  { href: "#philosophy", label: "Philosophy" },
                  { href: "#about", label: "About" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:opacity-40 transition-opacity"
                    style={{ color: "#2A2620" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/diffr"
                className="text-xs font-medium tracking-[0.15em] uppercase px-5 py-2.5 transition-opacity hover:opacity-70"
                style={{ backgroundColor: "#2A2620", color: "#ECEDE0" }}
              >
                Try Diffr →
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="pt-40 pb-8 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center gap-5 mb-10">
              <div style={{ width: 48, height: 1, backgroundColor: "rgba(42,38,32,0.3)" }} />
              <span
                className="text-xs tracking-[0.35em] uppercase"
                style={{ color: "#6B6560" }}
              >
                Studio No. 001 · Rock Lam
              </span>
            </div>

            {/* Headline */}
            <div className="relative">
              <h1
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(52px, 8.5vw, 112px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.025em",
                  color: "#2A2620",
                  fontWeight: 600,
                  maxWidth: 860,
                }}
              >
                Building the future,
                <br />
                <em style={{ color: "#9DC870", fontStyle: "italic" }}>one product</em>
                <br />
                at a time.
              </h1>

              {/* Margin note */}
              <aside
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 196,
                  borderLeft: "1px solid rgba(42,38,32,0.14)",
                  paddingLeft: 20,
                }}
              >
                <p className="text-xs leading-loose" style={{ color: "#6B6560" }}>
                  Truake is an AI-powered one-person company. Every product, every line of code — built by one human with a clear philosophy: make things that reduce noise.
                </p>
              </aside>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mt-12">
              <Link
                href="/diffr"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-70"
                style={{ backgroundColor: "#2A2620", color: "#ECEDE0" }}
              >
                Explore Diffr <span>→</span>
              </Link>
              <Link
                href="#story"
                className="text-sm font-medium tracking-[0.12em] uppercase pb-px transition-opacity hover:opacity-40"
                style={{ color: "#2A2620", borderBottom: "1px solid rgba(42,38,32,0.35)" }}
              >
                Read the Story
              </Link>
            </div>

            {/* Cube — tilted, right-aligned */}
            <div className="flex justify-end" style={{ marginTop: "-72px" }}>
              <div style={{ position: "relative", transform: "rotate(4deg)" }}>
                <div
                  style={{
                    width: 300,
                    height: 300,
                    backgroundColor: "rgba(255,255,255,0.58)",
                    boxShadow: "24px 32px 64px rgba(42,38,32,0.13)",
                  }}
                >
                  <Image
                    src="/truake-cube-color.jpg"
                    alt="Truake cube — a symbol of structured thinking"
                    width={300}
                    height={300}
                    className="w-full h-full object-contain p-8"
                    priority
                  />
                </div>
                <div
                  className="absolute -top-3 -left-3 text-xs font-medium tracking-widest uppercase px-3 py-1.5"
                  style={{ backgroundColor: "#9DC870", color: "#2A2620" }}
                >
                  AI-Powered
                </div>
                <div
                  className="absolute -bottom-3 -right-3 text-xs font-medium tracking-widest uppercase px-3 py-1.5"
                  style={{ backgroundColor: "#A8C4D8", color: "#2A2620" }}
                >
                  OPC
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="max-w-7xl mx-auto px-8">
          <div style={{ height: 1, backgroundColor: "rgba(42,38,32,0.1)" }} />
        </div>

        {/* ── Products ── */}
        <section id="products" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-8 mb-12">
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 80,
                  fontStyle: "italic",
                  color: "rgba(42,38,32,0.07)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  fontWeight: 400,
                }}
              >
                02
              </span>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase mb-0.5" style={{ color: "#6B6560" }}>
                  Products
                </p>
                <p className="text-sm" style={{ color: "#6B6560" }}>
                  Less noise, more signal.
                </p>
              </div>
            </div>

            {/* Cards — sharp-edged flush grid */}
            <div
              className="grid grid-cols-1 lg:grid-cols-5"
              style={{ border: "1px solid rgba(42,38,32,0.12)" }}
            >
              {/* Diffr — 3 cols */}
              <Link href="/diffr" className="lg:col-span-3 group">
                <div
                  className="relative overflow-hidden transition-all duration-500 group-hover:brightness-110"
                  style={{
                    backgroundColor: "#080A0F",
                    color: "#fff",
                    minHeight: 380,
                    padding: "44px 48px",
                    borderRight: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Ghost watermark */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: -30,
                      right: -16,
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(90px, 14vw, 180px)",
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.025)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      pointerEvents: "none",
                    }}
                  >
                    Diffr
                  </div>
                  <div
                    className="relative z-10 flex flex-col justify-between"
                    style={{ minHeight: 292 }}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="w-11 h-11 flex items-center justify-center"
                        style={{
                          border: "1px solid rgba(27,139,245,0.25)",
                          backgroundColor: "rgba(27,139,245,0.1)",
                        }}
                      >
                        <Image
                          src="/diffr-icon.png"
                          alt="Diffr"
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      <span
                        className="text-xs tracking-[0.2em] uppercase px-3 py-1"
                        style={{
                          backgroundColor: "rgba(27,139,245,0.1)",
                          color: "#1B8BF5",
                          border: "1px solid rgba(27,139,245,0.2)",
                        }}
                      >
                        Live
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ width: 28, height: 1, backgroundColor: "#1B8BF5", marginBottom: 16 }}
                      />
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: 38,
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          marginBottom: 12,
                        }}
                      >
                        Diffr
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-8"
                        style={{ color: "rgba(255,255,255,0.45)", maxWidth: 360 }}
                      >
                        The curated brand guide that ends choice overload. One brand per category. No repeats. No noise. Built on the Non-Repetition Principle.
                      </p>
                      <span
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: "#1B8BF5" }}
                      >
                        Learn more{" "}
                        <span className="transition-transform group-hover:translate-x-1.5">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Pathoragy — 2 cols */}
              <Link href="/pathoragy" className="lg:col-span-2 group">
                <div
                  className="relative overflow-hidden transition-all duration-500 group-hover:brightness-110"
                  style={{
                    backgroundColor: "#060810",
                    color: "#fff",
                    minHeight: 380,
                    padding: "44px 48px",
                  }}
                >
                  {/* Ghost watermark — rotated */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(-75deg)",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "clamp(40px, 7vw, 88px)",
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "rgba(79,142,247,0.035)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      pointerEvents: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Pathoragy
                  </div>
                  <div
                    className="relative z-10 flex flex-col justify-between"
                    style={{ minHeight: 292 }}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="w-11 h-11 flex items-center justify-center text-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(124,58,237,0.2))",
                          border: "1px solid rgba(79,142,247,0.25)",
                        }}
                      >
                        ◈
                      </div>
                      <span
                        className="text-xs tracking-[0.2em] uppercase px-3 py-1"
                        style={{
                          backgroundColor: "rgba(79,142,247,0.1)",
                          color: "#4F8EF7",
                          border: "1px solid rgba(79,142,247,0.2)",
                        }}
                      >
                        iOS Beta
                      </span>
                    </div>
                    <div>
                      <div
                        style={{ width: 28, height: 1, backgroundColor: "#4F8EF7", marginBottom: 16 }}
                      />
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: 38,
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          marginBottom: 12,
                        }}
                      >
                        Pathoragy
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-8"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        A long-horizon life planning app for iOS. Turn wealth, knowledge, and interest goals into structured routes and evidence-backed tasks.
                      </p>
                      <span
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: "#4F8EF7" }}
                      >
                        Learn more{" "}
                        <span className="transition-transform group-hover:translate-x-1.5">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section id="philosophy" className="py-20 px-8" style={{ backgroundColor: "#2A2620" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-8 mb-16">
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 80,
                  fontStyle: "italic",
                  color: "rgba(236,237,224,0.055)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                03
              </span>
              <h2
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "rgba(236,237,224,0.3)" }}
              >
                Philosophy
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ borderTop: "1px solid rgba(236,237,224,0.07)" }}
            >
              {[
                {
                  num: "I",
                  title: "Anti-Entropy",
                  desc: "Everything tends toward chaos. Truake products fight that — by building structure into how you decide, buy, and live.",
                  accent: "#9DC870",
                },
                {
                  num: "II",
                  title: "Non-Repetition",
                  desc: "In any scenario, every slot gets one brand. No overlaps, no redundancy. The Non-Repetition Principle forces genuine diversity.",
                  accent: "#A8C4D8",
                },
                {
                  num: "III",
                  title: "One Person.",
                  desc: "No team, no investors, no committees. Every decision is made by one person who uses every product they build.",
                  accent: "#E8A0A8",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="py-10"
                  style={{
                    paddingLeft: i === 0 ? 0 : 40,
                    paddingRight: i === 2 ? 0 : 40,
                    borderLeft: i > 0 ? "1px solid rgba(236,237,224,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: 52,
                      fontStyle: "italic",
                      color: "rgba(236,237,224,0.06)",
                      lineHeight: 1,
                      marginBottom: 20,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{ width: 20, height: 2, backgroundColor: item.accent, marginBottom: 18 }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#ECEDE0",
                      marginBottom: 14,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-loose" style={{ color: "rgba(236,237,224,0.4)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline gap-8 mb-16">
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 80,
                  fontStyle: "italic",
                  color: "rgba(42,38,32,0.06)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                04
              </span>
              <h2
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#6B6560" }}
              >
                The Founder
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-2">
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 88,
                    fontStyle: "italic",
                    color: "rgba(168,196,216,0.45)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    fontWeight: 300,
                  }}
                >
                  RL
                </div>
                <div
                  style={{
                    width: 1,
                    height: 100,
                    backgroundColor: "rgba(42,38,32,0.1)",
                    marginTop: 16,
                  }}
                />
              </div>
              <div className="lg:col-span-8">
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 48,
                    fontWeight: 600,
                    marginBottom: 28,
                    letterSpacing: "-0.02em",
                    color: "#2A2620",
                  }}
                >
                  Rock Lam
                </h2>
                <p className="text-base leading-loose mb-5" style={{ color: "#6B6560" }}>
                  Designer turned builder. Rock Lam started Truake as a creative studio with a belief: that a single person, armed with the right tools and philosophy, can build something that lasts.
                </p>
                <p className="text-base leading-loose mb-5" style={{ color: "#6B6560" }}>
                  Today, Truake is a fully AI-operated one-person company. Rock uses AI for engineering, design, writing, and operations — not to replace human judgment, but to amplify it.
                </p>
                <p className="text-base leading-loose" style={{ color: "#6B6560" }}>
                  The current focus: Diffr — a tool born from the Diff-Structism philosophy, which
                  argues that{" "}
                  <em>difference, not substance, is the fundamental fabric of reality</em> — and
                  that how you shop reflects how you think.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          id="story"
          className="py-24 px-8 relative overflow-hidden"
          style={{ backgroundColor: "#A8C4D8" }}
        >
          <div
            aria-hidden="true"
            className="hidden lg:block"
            style={{
              position: "absolute",
              bottom: -60,
              right: -40,
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 260,
              fontStyle: "italic",
              color: "rgba(42,38,32,0.055)",
              lineHeight: 1,
              pointerEvents: "none",
              letterSpacing: "-0.04em",
            }}
          >
            Diffr
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-xl">
              <div
                style={{ width: 36, height: 1, backgroundColor: "#2A2620", marginBottom: 24 }}
              />
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "#2A2620",
                  marginBottom: 20,
                  letterSpacing: "-0.025em",
                }}
              >
                Stop drowning
                <br />
                <em>in options.</em>
              </h2>
              <p className="text-base mb-10" style={{ color: "rgba(42,38,32,0.58)" }}>
                Try Diffr — the curated brand guide built on the Non-Repetition Principle.
              </p>
              <Link
                href="/diffr"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-70"
                style={{ backgroundColor: "#2A2620", color: "#ECEDE0" }}
              >
                Discover Diffr →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="py-10 px-8" style={{ backgroundColor: "#2A2620" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/truake-logo.png"
              alt="Truake"
              width={72}
              height={28}
              className="h-5 w-auto brightness-0 invert opacity-40"
            />
            <p
              className="text-xs tracking-[0.08em]"
              style={{ color: "rgba(236,237,224,0.25)" }}
            >
              © {new Date().getFullYear()} Truake. Built by Rock Lam.
            </p>
            <div
              className="flex gap-8 text-xs tracking-[0.15em] uppercase"
              style={{ color: "rgba(236,237,224,0.35)" }}
            >
              <Link href="/diffr" className="hover:opacity-100 transition-opacity">
                Diffr
              </Link>
              <a href="mailto:hello@truake.com" className="hover:opacity-100 transition-opacity">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

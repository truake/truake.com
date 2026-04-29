import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import WaitlistForm from "./waitlist-form";

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
  { label: "Steak dinner", items: 15, brands: ["Stone Axe", "De Buyer", "Maldon", "Laguiole", "+11 more"] },
  { label: "Home coffee ritual", items: 12, brands: ["Fellow", "Comandante", "Hario", "Illy", "+8 more"] },
  { label: "Minimalist desk setup", items: 10, brands: ["Keychron", "Ugmonk", "Moleskine", "+7 more"] },
];

export default function DiffrPage() {
  return (
    <div
      className="diffr-root"
      style={{ backgroundColor: "var(--d-bg)", color: "var(--d-text)", minHeight: "100vh" }}
    >
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: "var(--d-nav)",
          borderColor: "var(--d-nav-border)",
          backdropFilter: "blur(12px)",
        }}
        aria-label="Diffr navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Back to Truake">
            <Image
              src="/truake-logo.png"
              alt="Truake"
              width={80}
              height={32}
              className="h-6 w-auto brightness-0 invert opacity-60"
            />
            <span style={{ color: "var(--d-text-30)" }}>/</span>
            <span className="font-bold text-sm" style={{ color: "#1B8BF5" }}>diffr</span>
          </Link>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--d-text-50)" }}>
            <a href="#how-it-works" className="hover:opacity-100 transition-opacity hidden md:block">How it works</a>
            <a href="#philosophy" className="hover:opacity-100 transition-opacity hidden md:block">Philosophy</a>
            <Link href="/diffr/blog" className="hover:opacity-100 transition-opacity hidden md:block" style={{ color: "var(--d-text-50)" }}>Blog</Link>
            <a
              href="#waitlist"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#F0522C", color: "#fff" }}
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(27,139,245,0.2), rgba(240,82,44,0.2))",
                border: "1px solid rgba(27,139,245,0.3)",
              }}
            >
              <Image
                src="/diffr-icon.png"
                alt="Diffr"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
                priority
              />
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(27,139,245,0.12)",
              color: "#1B8BF5",
              border: "1px solid rgba(27,139,245,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#1B8BF5" }}
            />
            Now in Early Access
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Stop choosing from
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #1B8BF5, #7FC3FA, #F0522C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              thousands.
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-4 max-w-2xl mx-auto"
            style={{ color: "var(--d-text-70)", lineHeight: 1.6 }}
          >
            Diffr decomposes any consumption scenario into its minimum units —
            then assigns exactly one brand to each. No repeats. No noise.
          </p>
          <p className="text-base mb-10" style={{ color: "var(--d-text-40)" }}>
            Built on the Non-Repetition Principle and Diff-Structism philosophy.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: "#F0522C", color: "#fff" }}
            >
              Get Early Access →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border transition-all hover:opacity-70"
              style={{ borderColor: "#1B8BF5", color: "#1B8BF5" }}
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--d-bg2)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Fridge Magnet Problem</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--d-text-50)" }}>
              Open your refrigerator door. Dozens of delivery app magnets. Friday night. You&apos;re hungry.
              Twenty minutes later — you&apos;re still deciding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "200+", label: "brands in a typical supermarket toothpaste aisle", icon: "↑" },
              { stat: "13 pts", label: "IQ drop from sustained decision fatigue", icon: "↓" },
              { stat: "∞", label: "scrolling before a single purchase decision", icon: "∞" },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: "var(--d-card2)", border: "1px solid var(--d-border)" }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: "#1B8BF5" }}>
                  {item.stat}
                </div>
                <p className="text-sm" style={{ color: "var(--d-text-50)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 rounded-3xl"
            style={{
              backgroundColor: "rgba(27,139,245,0.06)",
              border: "1px solid rgba(27,139,245,0.15)",
            }}
          >
            <p className="text-lg font-medium text-center" style={{ color: "var(--d-text-85)", lineHeight: 1.8 }}>
              &ldquo;More options do not create better experiences. More options create anxiety.
              What you need isn&apos;t more doors — it&apos;s a better map.&rdquo;
            </p>
            <p className="text-center mt-4 text-sm" style={{ color: "#1B8BF5" }}>
              — Diff-Structism, Chapter 9
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Diffr Works</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--d-text-50)" }}>
              Three steps from chaos to clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <div key={item.step} className="relative">
                <div
                  className="text-6xl font-bold mb-4"
                  style={{ color: "rgba(27,139,245,0.15)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--d-text-50)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scenario examples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "var(--d-card2)", border: "1px solid var(--d-border)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm">{s.label}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-mono"
                    style={{ backgroundColor: "rgba(27,139,245,0.12)", color: "#1B8BF5" }}
                  >
                    {s.items} items
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.brands.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "var(--d-card)", color: "var(--d-text-60)" }}
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

      {/* Features */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--d-bg2)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What makes Diffr different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "var(--d-card)", border: "1px solid var(--d-border)" }}
              >
                <div className="text-3xl mb-4" style={{ color: f.color }}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--d-text-50)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(240,82,44,0.12)",
              color: "#F0522C",
              border: "1px solid rgba(240,82,44,0.3)",
            }}
          >
            Built on Diff-Structism
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A philosophy, not just an app.
          </h2>
          <p className="text-base leading-relaxed mb-6 max-w-2xl mx-auto" style={{ color: "var(--d-text-60)" }}>
            Diff-Structism proposes that{" "}
            <strong style={{ color: "var(--d-text)" }}>
              difference, not substance, is the fundamental fabric of reality
            </strong>
            . When applied to consumption, this means every purchase decision should be
            grounded in legitimate, structural difference — not marketing noise.
          </p>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--d-text-60)" }}>
            Diffr is the anti-entropy tool that makes this philosophy practical.
            It doesn&apos;t just recommend products — it builds your personal{" "}
            <em>difference coordinate system</em>: a structured map of what
            matters to you, and why.
          </p>
        </div>
      </section>

      {/* Book + Community */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--d-bg2)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book card */}
            <a
              href="https://diffr.gumroad.com/l/thedefaulttrap"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-8 flex flex-col gap-4 transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "var(--d-card2)", border: "1px solid var(--d-border2)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "#e53e3e" }}>Book</div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Default Trap</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--d-text-50)" }}>
                  Why Everything You Own Is Owning You. The philosophy behind Diffr — 44,000 words on choice overload, the One-Brand Rule, and Original Priority.
                </p>
              </div>
              <div
                className="flex items-center justify-between mt-auto pt-4"
                style={{ borderTop: "1px solid var(--d-border)" }}
              >
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(27,139,245,0.12)", color: "#1B8BF5" }}
                >
                  Pay what you want · incl. $0
                </span>
                <span
                  className="text-sm font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: "#1B8BF5" }}
                >
                  Read →
                </span>
              </div>
            </a>

            {/* Community card */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{ backgroundColor: "var(--d-card2)", border: "1px solid var(--d-border2)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--d-text-40)" }}>Follow the build</div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://x.com/diffr_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:opacity-100 transition-opacity"
                  style={{ color: "var(--d-text-60)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold"
                    style={{ backgroundColor: "var(--d-card)" }}
                  >
                    𝕏
                  </span>
                  <div>
                    <div className="font-semibold" style={{ color: "var(--d-text)" }}>@Diffr_app</div>
                    <div className="text-xs" style={{ color: "var(--d-text-40)" }}>Build logs, brand philosophy, launch updates</div>
                  </div>
                </a>
                <a
                  href="https://reddit.com/u/Diffr_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:opacity-100 transition-opacity"
                  style={{ color: "var(--d-text-60)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ backgroundColor: "var(--d-card)" }}
                  >
                    🤿
                  </span>
                  <div>
                    <div className="font-semibold" style={{ color: "var(--d-text)" }}>u/Diffr_app</div>
                    <div className="text-xs" style={{ color: "var(--d-text-40)" }}>r/minimalism · r/productivity · r/BuyItForLife</div>
                  </div>
                </a>
                <Link
                  href="/diffr/blog"
                  className="flex items-center gap-3 text-sm hover:opacity-100 transition-opacity"
                  style={{ color: "var(--d-text-60)" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ backgroundColor: "var(--d-card)" }}
                  >
                    ✦
                  </span>
                  <div>
                    <div className="font-semibold" style={{ color: "var(--d-text)" }}>Diffr Blog</div>
                    <div className="text-xs" style={{ color: "var(--d-text-40)" }}>truake.com/diffr/blog</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-6" style={{ backgroundColor: "var(--d-bg2)" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join the waitlist.
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--d-text-50)" }}>
            Diffr is in early access. Be among the first to build your
            difference coordinate system.
          </p>

          <WaitlistForm />

          <p className="text-xs mt-4" style={{ color: "var(--d-text-30)" }}>
            No spam. No newsletters. Just access when it&apos;s ready.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 border-t"
        style={{ borderColor: "var(--d-border)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/diffr-icon.png"
              alt="Diffr"
              width={24}
              height={24}
              className="w-6 h-6 object-contain opacity-60"
            />
            <span className="font-bold text-sm" style={{ color: "var(--d-text-60)" }}>
              diffr
            </span>
            <span style={{ color: "var(--d-text-20)" }}>by</span>
            <Link href="/" className="text-sm hover:opacity-100 transition-opacity" style={{ color: "var(--d-text-40)" }}>
              Truake
            </Link>
          </div>
          <p className="text-xs" style={{ color: "var(--d-text-20)" }}>
            © {new Date().getFullYear()} Truake. Built on Diff-Structism.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "var(--d-text-30)" }}>
            <Link href="/" className="hover:opacity-100 transition-opacity">← Truake</Link>
            <Link href="/diffr/blog" className="hover:opacity-100 transition-opacity">Blog</Link>
            <a href="https://x.com/diffr_app" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">𝕏 @Diffr_app</a>
            <a href="https://diffr.gumroad.com/l/thedefaulttrap" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Book</a>
            <a href="mailto:hello@truake.com" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

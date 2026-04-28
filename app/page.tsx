import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truake — One Person. Full Company.",
  description:
    "Truake is a one-person company by Rock Lam, building AI-powered products for intentional living. Creator of Diffr — the curated brand guide that ends choice overload.",
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ECEDE0", color: "#2A2620", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        style={{ backgroundColor: "#ECEDE0" }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        aria-label="Main navigation"
      >
        <div
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          style={{ borderColor: "rgba(42,38,32,0.12)" }}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label="Truake home">
            <Image
              src="/truake-logo.png"
              alt="Truake logo"
              width={100}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium" style={{ color: "#6B6560" }}>
            <Link
              href="#products"
              className="transition-colors hover:opacity-70"
              style={{ color: "#2A2620" }}
            >
              Products
            </Link>
            <Link
              href="#story"
              className="transition-colors hover:opacity-70"
              style={{ color: "#2A2620" }}
            >
              Story
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:opacity-70"
              style={{ color: "#2A2620" }}
            >
              About
            </Link>
            <Link
              href="/diffr"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#2A2620", color: "#ECEDE0" }}
            >
              Try Diffr
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(42,38,32,0.08)", color: "#6B6560" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#9DC870" }}
              />
              One Person. Full Company.
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: "#2A2620" }}
            >
              Building the future,
              <br />
              <span style={{ color: "#A8C4D8" }}>one product</span>
              <br />
              at a time.
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "#6B6560" }}
            >
              Truake is an AI-powered one-person company. Every product, every
              line of code, every idea — all built by one human with a clear
              philosophy: make things that reduce noise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/diffr"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#2A2620", color: "#ECEDE0" }}
              >
                Explore Diffr
                <span>→</span>
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border transition-all hover:opacity-70"
                style={{
                  borderColor: "rgba(42,38,32,0.2)",
                  color: "#2A2620",
                }}
              >
                Read the Story
              </Link>
            </div>
          </div>

          {/* Cube illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div
                className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Image
                  src="/truake-cube-color.jpg"
                  alt="Truake cube — a symbol of structured thinking"
                  width={280}
                  height={280}
                  className="w-full h-full object-contain p-6"
                  priority
                />
              </div>
              {/* Floating tags */}
              <div
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm"
                style={{ backgroundColor: "#9DC870", color: "#2A2620" }}
              >
                AI-Powered
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm"
                style={{ backgroundColor: "#A8C4D8", color: "#2A2620" }}
              >
                OPC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#2A2620" }}
          >
            Products
          </h2>
          <p className="mb-12 text-lg" style={{ color: "#6B6560" }}>
            Built on a single philosophy — less noise, more signal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Diffr card */}
            <Link href="/diffr" className="group block">
              <div
                className="rounded-3xl p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: "#0A0A0F", color: "#FFFFFF" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(27,139,245,0.15)" }}
                  >
                    <Image
                      src="/diffr-icon.png"
                      alt="Diffr icon"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(27,139,245,0.15)", color: "#1B8BF5" }}
                  >
                    Live
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Diffr</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#C0C0C0" }}>
                  The curated brand guide that ends choice overload. One brand
                  per category. No repeats. No noise. Built on the Non-Repetition
                  Principle.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#1B8BF5" }}>
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* Pathoragy card */}
            <Link href="/pathoragy" className="group block">
              <div
                className="rounded-3xl p-8 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: "#07090E", color: "#FFFFFF" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(124,58,237,0.2))", border: "1px solid rgba(79,142,247,0.25)" }}
                  >
                    ◈
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(79,142,247,0.15)", color: "#4F8EF7" }}
                  >
                    iOS Beta
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Pathoragy</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#C0C0C0" }}>
                  A long-horizon life planning app for iOS. Turn wealth, knowledge,
                  and interest goals into structured routes, waypoints, and evidence-backed tasks.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#4F8EF7" }}>
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "#2A2620" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Anti-Entropy",
                desc: "Everything tends toward chaos. Truake products fight that — by building structure into how you decide, buy, and live.",
                color: "#9DC870",
              },
              {
                title: "Non-Repetition",
                desc: "In any scenario, every slot gets one brand. No overlaps, no redundancy. The Non-Repetition Principle forces genuine diversity.",
                color: "#A8C4D8",
              },
              {
                title: "One Person.",
                desc: "No team, no investors, no committees. Every decision is made by one person who uses every product they build.",
                color: "#E8A0A8",
              },
            ].map((item) => (
              <div key={item.title}>
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ backgroundColor: item.color }}
                />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#ECEDE0" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#A09890" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(42,38,32,0.08)", color: "#6B6560" }}
            >
              The Founder
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#2A2620" }}>
              Rock Lam
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6560" }}>
              Designer turned builder. Rock Lam started Truake as a creative studio
              with a belief: that a single person, armed with the right tools
              and philosophy, can build something that lasts.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6560" }}>
              Today, Truake is a fully AI-operated one-person company. Rock uses
              AI for engineering, design, writing, and operations — not to replace
              human judgment, but to amplify it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#6B6560" }}>
              The current focus: Diffr — a tool born from the Diff-Structism
              philosophy, which argues that <em>difference, not substance, is
              the fundamental fabric of reality</em> — and that how you shop
              reflects how you think.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="w-64 h-64 rounded-3xl flex items-center justify-center text-7xl font-bold select-none"
              style={{ backgroundColor: "rgba(168,196,216,0.25)", color: "#A8C4D8", border: "1px solid rgba(168,196,216,0.4)" }}
              aria-hidden="true"
            >
              RL
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "#A8C4D8" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#2A2620" }}>
            Stop drowning in options.
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(42,38,32,0.7)" }}>
            Try Diffr — the curated brand guide built on the Non-Repetition Principle.
          </p>
          <Link
            href="/diffr"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#2A2620", color: "#ECEDE0" }}
          >
            Discover Diffr →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6"
        style={{ backgroundColor: "#2A2620" }}
      >
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/truake-logo.png"
              alt="Truake"
              width={80}
              height={32}
              className="h-6 w-auto brightness-0 invert opacity-70"
            />
          </div>
          <p className="text-xs" style={{ color: "#A09890" }}>
            © {new Date().getFullYear()} Truake. Built by Rock Lam.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "#A09890" }}>
            <Link href="/diffr" className="hover:opacity-100 transition-opacity">
              Diffr
            </Link>
            <a
              href="mailto:hello@truake.com"
              className="hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

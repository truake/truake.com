import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PathoragyWaitlistForm from "./waitlist-form";

export const metadata: Metadata = {
  title: "Pathoragy — Route Your Life as Executable Waypoints",
  description:
    "Pathoragy is a long-horizon life planning app for iOS. Map wealth, knowledge, and interest goals into structured routes, waypoints, and evidence-backed tasks. iOS Beta in progress.",
  keywords: [
    "Pathoragy",
    "life planning app",
    "iOS life strategy",
    "long-horizon planning",
    "goal tracking",
    "life routes",
    "waypoints",
    "wealth planning",
    "knowledge goals",
    "AI advisor",
  ],
  openGraph: {
    title: "Pathoragy — Route Your Life as Executable Waypoints",
    description:
      "A long-horizon planning app for iOS. Turn ambition into routes, waypoints, tasks, and evidence. Wealth, knowledge, and interest — structured, not scattered.",
    url: "https://truake.com/pathoragy",
  },
};

/* ── Design tokens (matches iOS app) ─────────────────────────── */
const C = {
  bg:       "#F0EBE3",   /* warm cream — app background */
  bg2:      "#F8F5F1",   /* slightly lighter cream — alternating sections */
  card:     "#FFFFFF",
  text:     "#2A2620",
  text60:   "rgba(42,38,32,0.60)",
  text40:   "rgba(42,38,32,0.40)",
  text25:   "rgba(42,38,32,0.25)",
  accent:   "#E85435",   /* coral-orange — matches app CTA */
  border:   "rgba(42,38,32,0.08)",
  border2:  "rgba(42,38,32,0.13)",
};

const features = [
  {
    icon: "⛵",
    title: "Route logic",
    desc: "Choose a life direction first. Then unlock each stage through fixed waypoint gates — age-driven, sequenced, and deterministic. Life planning as navigation, not an endless to-do list.",
  },
  {
    icon: "⚓",
    title: "Evidence over vibes",
    desc: "Tasks store real records: reading progress, exam results, and conservative finance allocation snapshots. Progress is measurable, not aspirational.",
  },
  {
    icon: "🧭",
    title: "Advisor context",
    desc: "Every route, waypoint, and task links to an AI advisor thread. Future guidance attaches to the exact planning object you are working on.",
  },
  {
    icon: "📖",
    title: "Structured catalog",
    desc: "A curated content layer: books, reading lists, schools, exam banks, and conservative financial products — selected to match each waypoint, not pasted from a web scrape.",
  },
];

const routes = [
  { name: "Warren Buffett", path: "Knowledge → compounding → conservative capital allocation", initial: "W" },
  { name: "Marie Curie",   path: "Knowledge → research discipline → scientific contribution",  initial: "C" },
  { name: "Steve Jobs",    path: "Knowledge + challenge → product taste → founder route",       initial: "J" },
  { name: "Jensen Huang",  path: "Knowledge → technical depth → long-horizon company building", initial: "H" },
];

export default function PathoragyPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>

      {/* ── Nav ───────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(240,235,227,0.92)",
          borderBottom: `1px solid ${C.border}`,
          backdropFilter: "blur(14px)",
        }}
        aria-label="Pathoragy navigation"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Back to Truake">
            <Image
              src="/truake-logo.png"
              alt="Truake"
              width={80}
              height={32}
              className="h-6 w-auto opacity-60"
            />
            <span style={{ color: C.text25 }}>/</span>
            <span className="font-bold text-sm" style={{ color: C.accent }}>pathoragy</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="hidden md:block transition-opacity hover:opacity-60" style={{ color: C.text60 }}>
              How it works
            </a>
            <a href="#structure" className="hidden md:block transition-opacity hover:opacity-60" style={{ color: C.text60 }}>
              Structure
            </a>
            <Link href="/pathoragy/blog" className="hidden md:block transition-opacity hover:opacity-60" style={{ color: C.text60 }}>
              Blog
            </Link>
            <a
              href="#beta"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
            >
              Request Beta
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(232,84,53,0.10)",
                  color: C.accent,
                  border: `1px solid rgba(232,84,53,0.20)`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: C.accent }}
                />
                iOS Beta · In Progress
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                style={{ letterSpacing: "-0.02em", color: C.text }}
              >
                Route your life.
                <br />
                <span style={{ color: C.accent }}>Execute it.</span>
              </h1>

              <p className="text-lg mb-4 max-w-lg" style={{ color: C.text60, lineHeight: 1.75 }}>
                Pathoragy is a long-horizon planning app for iOS. It maps education, wealth,
                knowledge, and family-oriented life strategy into a route system that can
                actually be executed and reviewed.
              </p>

              <ul className="mb-10 space-y-2">
                {[
                  "English-first product language",
                  "iOS Beta running on simulator",
                  "Structured data: reading, exams, and conservative finance",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm" style={{ color: C.text60 }}>
                    <span style={{ color: C.accent }}>→</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#beta"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:opacity-90"
                  style={{ backgroundColor: C.accent, color: "#FFFFFF" }}
                >
                  Request Beta Access →
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border transition-all hover:opacity-70"
                  style={{ borderColor: C.border2, color: C.text60, backgroundColor: C.card }}
                >
                  See the structure
                </a>
              </div>
            </div>

            {/* Route card visual — warm card style */}
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: C.card,
                  border: `1px solid ${C.border2}`,
                  boxShadow: "0 2px 20px rgba(42,38,32,0.06)",
                }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: C.accent }}>
                  ⛵ Active Route
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: C.text }}>Excellent Family</h3>
                <p className="text-sm mb-5" style={{ color: C.text60 }}>
                  Conservative compounding, education funding, residency planning, and asset stewardship.
                </p>
                {/* Boat height indicator */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium" style={{ color: C.text40 }}>Boat Height</span>
                  <div className="flex gap-1">
                    {["#E85435","#9DC870","#A8C4D8","rgba(42,38,32,0.15)","rgba(42,38,32,0.15)"].map((c,i) => (
                      <div key={i} className="w-5 h-2 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="text-sm font-bold" style={{ color: C.text }}>0.08</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { idx: "01", title: "Age Range", desc: "Deterministic gate, not random branching." },
                  { idx: "02", title: "Knowledge Field", desc: "Medicine, IT, finance, design, humanities." },
                  { idx: "03", title: "Evidence Tasks", desc: "Reading logs, exam results, and allocation records." },
                ].map((wp) => (
                  <div
                    key={wp.idx}
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{
                      backgroundColor: C.card,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <span className="text-xs font-mono font-bold mt-0.5" style={{ color: C.accent }}>
                      {wp.idx}
                    </span>
                    <div>
                      <div className="text-sm font-semibold mb-1" style={{ color: C.text }}>{wp.title}</div>
                      <div className="text-xs" style={{ color: C.text40 }}>{wp.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: C.text }}>
              Most apps plan 14 days ahead.
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: C.text60 }}>
              A habit tracker won&apos;t tell you which school to choose at 16, which field
              to master at 22, or how to structure assets at 35. Life has long-horizon
              structure. Your tools should too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "3",   label: "life directions to choose from: Wealth, Knowledge, Interest" },
              { stat: "18+", label: "waypoint types spanning education, exams, capital, and family" },
              { stat: "40+", label: "curated books in the Beta catalog, mapped by age and field" },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: C.accent }}>
                  {item.stat}
                </div>
                <p className="text-sm" style={{ color: C.text60 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: C.text }}>How Pathoragy works</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.text60 }}>
              From life direction to executable task — four layers of structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "⛵",
                title: "Choose a direction",
                desc: "Wealth, Knowledge, or Interest. Each unlocks a different branch of routes and waypoints suited to that life goal.",
              },
              {
                step: "02",
                icon: "🗺️",
                title: "Enter your route",
                desc: "Routes are structured paths (e.g. Founder, Degree, Capital Accumulation). Each contains a fixed sequence of waypoints.",
              },
              {
                step: "03",
                icon: "⚓",
                title: "Work through waypoints",
                desc: "Waypoints are deterministic life stages: school selection, exam prep, knowledge field, capital structure. Unlock them in order.",
              },
              {
                step: "04",
                icon: "📖",
                title: "Log evidence",
                desc: "Each task stores real records — reading progress, exam scores, allocation snapshots. Progress is measured, not estimated.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "rgba(42,38,32,0.25)" }}
                >
                  Step {item.step}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: C.text }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.text60 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center" style={{ color: C.text }}>
            Pathoragy is not another generic productivity app.
          </h2>
          <p className="text-center mb-12 text-base" style={{ color: C.text60 }}>
            Life planning requires domain-specific structure, not generic checkboxes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: C.text }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.text60 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notable Routes ────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(232,84,53,0.08)",
                color: C.accent,
                border: `1px solid rgba(232,84,53,0.16)`,
              }}
            >
              Example routes
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: C.text }}>
              Notable lives, translated into route logic.
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: C.text40 }}>
              These are structural metaphors for the product, not literal biographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-6"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                  style={{
                    backgroundColor: "rgba(232,84,53,0.10)",
                    color: C.accent,
                    border: `1px solid rgba(232,84,53,0.18)`,
                  }}
                >
                  {r.initial}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: C.text }}>{r.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: C.text60 }}>{r.path}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Structure ─────────────────────────────────────────── */}
      <section id="structure" className="py-24 px-6" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: C.text }}>
              A life-planning stack with deterministic gates.
            </h2>
            <p className="text-base" style={{ color: C.text60 }}>
              Age-driven, branching, and sequenced — not a flat list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Age-driven */}
            <div
              className="rounded-2xl p-7"
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                borderLeft: `3px solid ${C.accent}`,
              }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: C.accent }}>
                Age-driven route map
              </div>
              <ul className="space-y-3">
                {[
                  { band: "3–16",  note: "Knowledge-first, education and book emphasis" },
                  { band: "17–30", note: "Degrees, exams, entrepreneurship, capital accumulation" },
                  { band: "31–40", note: "Family system, stewardship, advanced mastery" },
                  { band: "41+",   note: "Long-horizon asset and legacy planning" },
                ].map((item) => (
                  <li key={item.band} className="flex gap-3">
                    <span className="text-xs font-mono font-bold whitespace-nowrap pt-0.5" style={{ color: C.accent, minWidth: "3rem" }}>
                      {item.band}
                    </span>
                    <span className="text-sm" style={{ color: C.text60 }}>{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Three branches */}
            <div
              className="rounded-2xl p-7"
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                borderLeft: `3px solid #9DC870`,
              }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#7AA855" }}>
                Three primary branches
              </div>
              <ul className="space-y-4">
                {[
                  { branch: "Wealth",    note: "Entrepreneurship, capital accumulation, wealth management" },
                  { branch: "Knowledge", note: "Degrees, mastery, certifications, reading systems" },
                  { branch: "Interest",  note: "Challenge depth and experience breadth" },
                ].map((item) => (
                  <li key={item.branch}>
                    <div className="text-sm font-bold mb-1" style={{ color: C.text }}>{item.branch}</div>
                    <div className="text-xs" style={{ color: C.text60 }}>{item.note}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Life posture */}
            <div
              className="rounded-2xl p-7"
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                borderLeft: `3px solid #A8C4D8`,
              }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#6A9AB0" }}>
                Life posture
              </div>
              <ul className="space-y-4">
                {[
                  { posture: "Excellent Family", note: "Primary focus in current Beta", active: true },
                  { posture: "Lone Wolf",         note: "Reserved for future expansion", active: false },
                  { posture: "DINK",              note: "Reserved for future expansion", active: false },
                ].map((item) => (
                  <li key={item.posture} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.active ? C.accent : "rgba(42,38,32,0.15)" }}
                    />
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: C.text }}>{item.posture}</div>
                      <div className="text-xs" style={{ color: C.text40 }}>{item.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalog stats ─────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: C.bg }}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(232,84,53,0.08)",
              color: C.accent,
              border: `1px solid rgba(232,84,53,0.16)`,
            }}
          >
            Current Beta catalog
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: C.text }}>
            The content layer is already expanding beyond MVP scale.
          </h2>
          <p className="text-sm mb-14" style={{ color: C.text40 }}>
            Curated content mapped to waypoints — not generic recommendations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "40",  label: "Books" },
              { value: "17",  label: "Reading Lists" },
              { value: "20",  label: "Schools" },
              { value: "21",  label: "Finance Products" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: C.accent }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: C.text60 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog CTA strip ────────────────────────────────────── */}
      <section className="py-14 px-6" style={{ backgroundColor: C.bg2 }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: C.accent }}>
              From the blog
            </p>
            <h3 className="text-2xl font-bold mb-2" style={{ color: C.text }}>
              The science behind long-horizon planning.
            </h3>
            <p className="text-sm" style={{ color: C.text60 }}>
              Guides on hedonic treadmills, eudaimonia, intentional life design, and wealth, knowledge &amp; interest goals.
            </p>
          </div>
          <Link
            href="/pathoragy/blog"
            className="flex-shrink-0 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-105 whitespace-nowrap"
            style={{ backgroundColor: C.text, color: C.bg }}
          >
            Read the blog →
          </Link>
        </div>
      </section>

      {/* ── Beta CTA ──────────────────────────────────────────── */}
      <section id="beta" className="py-24 px-6" style={{ backgroundColor: C.bg }}>
        <div className="max-w-xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(232,84,53,0.08)",
              color: C.accent,
              border: `1px solid rgba(232,84,53,0.18)`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.accent }} />
            Beta Status
          </div>

          <h2 className="text-4xl font-bold mb-4" style={{ color: C.text }}>
            Early access for serious planners.
          </h2>
          <p className="text-base mb-4" style={{ color: C.text60 }}>
            The iOS Beta already runs on simulator, persists local route data, and supports
            structured result logging. This is controlled access for long-horizon thinkers —
            not a mass-market launch.
          </p>
          <p className="text-sm mb-10" style={{ color: C.text40 }}>
            English-first. Structured. No noise.
          </p>

          <PathoragyWaitlistForm />

          <p className="text-xs mt-4" style={{ color: C.text25 }}>
            No spam. No newsletter. Access when Beta opens.
          </p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="py-12 px-6" style={{ borderTop: `1px solid ${C.border}`, backgroundColor: C.bg2 }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm" style={{ color: C.accent }}>pathoragy</span>
            <span style={{ color: C.text25 }}>by</span>
            <Link href="/" className="text-sm transition-opacity hover:opacity-70" style={{ color: C.text60 }}>
              Truake
            </Link>
          </div>
          <p className="text-xs" style={{ color: C.text40 }}>
            © {new Date().getFullYear()} Truake. iOS Beta in progress.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: C.text40 }}>
            <Link href="/" className="transition-opacity hover:opacity-100">← Truake</Link>
            <Link href="/pathoragy/blog" className="transition-opacity hover:opacity-100">Blog</Link>
            <Link href="/diffr" className="transition-opacity hover:opacity-100">Diffr</Link>
            <a href="mailto:hello@truake.com" className="transition-opacity hover:opacity-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

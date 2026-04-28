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

const features = [
  {
    icon: "◈",
    title: "Route logic",
    desc: "Choose a life direction first. Then unlock each stage through fixed waypoint gates — age-driven, sequenced, and deterministic. Life planning like navigation, not an endless to-do list.",
    color: "#4F8EF7",
  },
  {
    icon: "◉",
    title: "Evidence over vibes",
    desc: "Tasks store real records: reading progress, mock exam results, and conservative finance allocation snapshots. Progress is measurable, not aspirational.",
    color: "#F59E0B",
  },
  {
    icon: "✦",
    title: "Advisor context",
    desc: "Every route, waypoint, and task links to an AI advisor thread. Future guidance attaches to the exact planning object you are working on.",
    color: "#4F8EF7",
  },
  {
    icon: "◎",
    title: "Structured catalog",
    desc: "A curated content layer: books, reading lists, schools, exam banks, and conservative financial products — selected to match each waypoint, not pasted from a web scrape.",
    color: "#F59E0B",
  },
];

const routes = [
  {
    name: "Warren Buffett",
    path: "Knowledge → compounding → conservative capital allocation",
  },
  {
    name: "Marie Curie",
    path: "Knowledge → research discipline → scientific contribution",
  },
  {
    name: "Steve Jobs",
    path: "Knowledge + challenge → product taste → founder route",
  },
  {
    name: "Jensen Huang",
    path: "Knowledge → technical depth → long-horizon company building",
  },
];

export default function PathoragyPage() {
  return (
    <div style={{ backgroundColor: "#07090E", color: "#FFFFFF", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: "rgba(7,9,14,0.95)",
          borderColor: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
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
              className="h-6 w-auto brightness-0 invert opacity-60"
            />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span className="font-bold text-sm" style={{ color: "#4F8EF7" }}>pathoragy</span>
          </Link>
          <div className="flex items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            <a href="#how-it-works" className="hover:opacity-100 transition-opacity hidden md:block">
              How it works
            </a>
            <a href="#structure" className="hover:opacity-100 transition-opacity hidden md:block">
              Structure
            </a>
            <a
              href="#beta"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #7C3AED)", color: "#fff" }}
            >
              Request Beta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(79,142,247,0.1)",
                  color: "#4F8EF7",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#4F8EF7" }}
                />
                iOS Beta · In Progress
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Route your life.
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Execute it.
                </span>
              </h1>

              <p
                className="text-lg mb-4 max-w-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}
              >
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
                  <li key={point} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <span style={{ color: "#4F8EF7" }}>→</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#beta"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #4F8EF7, #7C3AED)", color: "#fff" }}
                >
                  Request Beta Access →
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border transition-all hover:opacity-70"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
                >
                  See the structure
                </a>
              </div>
            </div>

            {/* Route card visual */}
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(79,142,247,0.12), rgba(124,58,237,0.12))",
                  border: "1px solid rgba(79,142,247,0.25)",
                }}
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "#4F8EF7" }}
                >
                  Route
                </div>
                <h3 className="text-xl font-bold mb-2">Excellent Family</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Conservative compounding, education funding, residency planning, and asset stewardship.
                </p>
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
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="text-xs font-mono font-bold mt-0.5"
                      style={{ color: "#F59E0B" }}
                    >
                      {wp.idx}
                    </span>
                    <div>
                      <div className="text-sm font-semibold mb-1">{wp.title}</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {wp.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "#0D1117" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most apps plan 14 days ahead.</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              A habit tracker won&apos;t tell you which school to choose at 16, which field
              to master at 22, or how to structure assets at 35. Life has long-horizon
              structure. Your tools should too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "3", label: "life directions to choose from: Wealth, Knowledge, Interest", icon: "◈" },
              { stat: "18+", label: "waypoint types spanning education, exams, capital, and family", icon: "◉" },
              { stat: "40+", label: "curated books in the Beta catalog, mapped by age and field", icon: "✦" },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-4xl font-bold mb-2" style={{ color: "#4F8EF7" }}>
                  {item.stat}
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Pathoragy works</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              From life direction to executable task — four layers of structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Choose a direction",
                desc: "Wealth, Knowledge, or Interest. Each unlocks a different branch of routes and waypoints suited to that life goal.",
              },
              {
                step: "02",
                title: "Enter your route",
                desc: "Routes are structured paths (e.g. Founder, Degree, Capital Accumulation). Each contains a fixed sequence of waypoints.",
              },
              {
                step: "03",
                title: "Work through waypoints",
                desc: "Waypoints are deterministic life stages: school selection, exam prep, knowledge field, capital structure. Unlock them in order.",
              },
              {
                step: "04",
                title: "Log evidence",
                desc: "Each task stores real records — reading progress, exam scores, allocation snapshots. Progress is measured, not estimated.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ color: "rgba(79,142,247,0.12)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "#0D1117" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Pathoragy is not another generic productivity app.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-3xl mb-4" style={{ color: f.color }}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Routes */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.2)" }}
            >
              Example routes
            </div>
            <h2 className="text-3xl font-bold mb-4">Notable lives, translated into route logic.</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
              These are structural metaphors for the product, not literal biographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(124,58,237,0.2))",
                    border: "1px solid rgba(79,142,247,0.2)",
                    color: "#4F8EF7",
                  }}
                >
                  {r.name[0]}
                </div>
                <h3 className="text-base font-bold mb-2">{r.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {r.path}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section
        id="structure"
        className="py-24 px-6"
        style={{ backgroundColor: "#0D1117" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">A life-planning stack with deterministic gates.</h2>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
              Age-driven, branching, and sequenced — not a flat list.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Age-driven */}
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: "rgba(79,142,247,0.05)", border: "1px solid rgba(79,142,247,0.15)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#4F8EF7" }}>
                Age-driven route map
              </div>
              <ul className="space-y-3">
                {[
                  { band: "3–16", note: "Knowledge-first, education and book emphasis" },
                  { band: "17–30", note: "Degrees, exams, entrepreneurship, capital accumulation" },
                  { band: "31–40", note: "Family system, stewardship, advanced mastery" },
                  { band: "41+", note: "Long-horizon asset and legacy planning" },
                ].map((item) => (
                  <li key={item.band} className="flex gap-3">
                    <span
                      className="text-xs font-mono font-bold whitespace-nowrap pt-0.5"
                      style={{ color: "#4F8EF7", minWidth: "3rem" }}
                    >
                      {item.band}
                    </span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Three branches */}
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#F59E0B" }}>
                Three primary branches
              </div>
              <ul className="space-y-4">
                {[
                  { branch: "Wealth", note: "Entrepreneurship, capital accumulation, wealth management" },
                  { branch: "Knowledge", note: "Degrees, mastery, certifications, reading systems" },
                  { branch: "Interest", note: "Challenge depth and experience breadth" },
                ].map((item) => (
                  <li key={item.branch}>
                    <div className="text-sm font-bold mb-1">{item.branch}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {item.note}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Life posture */}
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: "rgba(124,58,237,0.05)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#A78BFA" }}>
                Life posture
              </div>
              <ul className="space-y-4">
                {[
                  { posture: "Excellent Family", note: "Primary focus in current Beta", active: true },
                  { posture: "Lone Wolf", note: "Reserved for future expansion", active: false },
                  { posture: "DINK", note: "Reserved for future expansion", active: false },
                ].map((item) => (
                  <li key={item.posture} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.active ? "#A78BFA" : "rgba(255,255,255,0.15)" }}
                    />
                    <div>
                      <div className="text-sm font-semibold mb-0.5">{item.posture}</div>
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {item.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog stats */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(79,142,247,0.1)", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.2)" }}
          >
            Current Beta catalog
          </div>
          <h2 className="text-3xl font-bold mb-4">
            The content layer is already expanding beyond MVP scale.
          </h2>
          <p className="text-sm mb-14" style={{ color: "rgba(255,255,255,0.4)" }}>
            Curated content mapped to waypoints — not generic recommendations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "40", label: "Books" },
              { value: "17", label: "Reading Lists" },
              { value: "20", label: "Schools" },
              { value: "21", label: "Finance Products" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#4F8EF7" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section
        id="beta"
        className="py-24 px-6"
        style={{ backgroundColor: "#0D1117" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(79,142,247,0.1)", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#4F8EF7" }} />
            Beta Status
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Early access for serious planners.
          </h2>
          <p className="text-base mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            The iOS Beta already runs on simulator, persists local route data, and supports
            structured result logging. This is controlled access for long-horizon thinkers —
            not a mass-market launch.
          </p>
          <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.3)" }}>
            English-first. Structured. No noise.
          </p>

          <PathoragyWaitlistForm />

          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.25)" }}>
            No spam. No newsletter. Access when Beta opens.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              pathoragy
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>by</span>
            <Link href="/" className="text-sm hover:opacity-100 transition-opacity" style={{ color: "rgba(255,255,255,0.4)" }}>
              Truake
            </Link>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Truake. iOS Beta in progress.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Link href="/" className="hover:opacity-100 transition-opacity">← Truake</Link>
            <Link href="/diffr" className="hover:opacity-100 transition-opacity">Diffr</Link>
            <a href="mailto:hello@truake.com" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

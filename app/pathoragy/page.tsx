import Link from "next/link";
import PathoragyWaitlistForm from "./waitlist-form";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

/* ─── Design tokens ──────────────────────────────── */
const C = {
  bg:     "#F0EBE3",
  bg2:    "#F8F5F1",
  bgDark: "#1C1208",
  text:   "#2A2620",
  t60:    "rgba(42,38,32,0.60)",
  t40:    "rgba(42,38,32,0.40)",
  t20:    "rgba(42,38,32,0.20)",
  t08:    "rgba(42,38,32,0.08)",
  accent: "#E85435",
  border: "rgba(42,38,32,0.08)",
  bd2:    "rgba(42,38,32,0.14)",
} as const;

/* ─── Static data ────────────────────────────────── */
const CONCEPTS = [
  {
    n: "01", icon: "⛵", label: "Life directions", title: "Routes",
    body: "Up to 3 long-horizon arcs — one each for Wealth, Knowledge, and Interest. You can only hold three at once. That constraint makes them real.",
  },
  {
    n: "02", icon: "⚓", label: "Ordered milestones", title: "Waypoints",
    body: "The chapters of your Route. Each Waypoint unlocks the next, building irreversible momentum. You cannot skip ahead.",
  },
  {
    n: "03", icon: "📖", label: "Daily evidence", title: "Logbooks",
    body: "Concrete actions inside each Waypoint. You complete them and attach evidence — making progress visible and undeniable.",
  },
  {
    n: "04", icon: "🧭", label: "Progress metric", title: "Boat Height",
    body: "A single number that rises with hull vitality, waypoint progress, and recent waves. Not a productivity score — a proxy for sustainable meaning.",
  },
] as const;

const TICKER = ["Routes", "Waypoints", "Logbooks", "Boat Height", "Wealth", "Knowledge", "Interest", "The Value Boat"];

const NOTABLE = [
  { name: "Warren Buffett", route: "Compound Knowledge",  ship: "Expedition Ship" },
  { name: "Marie Curie",    route: "Scientific Mastery",  ship: "Merchant Ship"   },
  { name: "Steve Jobs",     route: "Product Vision",      ship: "Expedition Ship" },
  { name: "Jensen Huang",   route: "Technical Empire",    ship: "Fleet Admiral"   },
];

const SCREENSHOTS = [
  {
    src: "/pathoragy/screenshots/onboarding.png",
    alt: "Pathoragy onboarding screen",
    rotate: "rotate(2.5deg)",
    lift: "0px",
    label: "ようこそ",
    caption: "Meet Routes, Waypoints, Logbooks, and Boat Height.",
    accent: "#E85435",
  },
  {
    src: "/pathoragy/screenshots/posture.png",
    alt: "Life Posture Selection",
    rotate: "rotate(-3.5deg)",
    lift: "-100px",
    label: "Life Posture",
    caption: "Choose your dominant planning posture.",
    accent: "rgba(42,38,32,0.14)",
  },
  {
    src: "/pathoragy/screenshots/valueboard.png",
    alt: "バリューボート sharing screen",
    rotate: "rotate(1.5deg)",
    lift: "0px",
    label: "バリューボート",
    caption: "Share your snapshot — routes, boat height, progress.",
    accent: "rgba(42,38,32,0.14)",
  },
] as const;

/* ─── Page ───────────────────────────────────────── */
export default function PathoragyPage() {
  return (
    <div className={fraunces.variable} style={{ backgroundColor: C.bg, color: C.text, fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" }}>

      {/* ══ NAV ══════════════════════════════════════════════════════ */}
      <nav className="p-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: "60px",
        background: "rgba(240,235,227,0.90)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        borderBottom: `1px solid ${C.bd2}`,
      }}>
        <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 900, fontSize: "18px", letterSpacing: "-0.03em", color: C.accent, fontStyle: "italic" }}>
          pathoragy
        </span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Link href="/pathoragy/blog" className="p-nav-blog"
            style={{ color: C.t60, textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "-0.01em" }}>
            Blog
          </Link>
          <Link href="#beta" style={{
            background: C.accent, color: "#fff",
            padding: "9px 22px", borderRadius: "100px",
            textDecoration: "none", fontSize: "13px", fontWeight: 700, letterSpacing: "0.01em",
          }}>
            Join Beta
          </Link>
        </div>
      </nav>

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="p-hero" style={{
        display: "grid", gridTemplateColumns: "55% 45%",
        minHeight: "100svh", paddingTop: "60px",
        borderBottom: `1px solid ${C.bd2}`,
      }}>
        {/* Left — headline + form */}
        <div className="p-hero-left" style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "100px 72px 100px 40px",
          borderRight: `1px solid ${C.bd2}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "44px" }}>
            <div style={{ width: "32px", height: "2px", background: C.accent, flexShrink: 0 }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.accent }}>
              iOS · Now in Beta
            </span>
          </div>

          <h1 className="p-hero-h1" style={{
            fontSize: "clamp(52px, 5.8vw, 84px)",
            fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.045em",
            color: C.text, margin: "0 0 36px",
          }}>
            Your life is a<br />
            navigation<br />
            <em style={{ fontStyle: "italic", color: C.accent }}>problem.</em>
          </h1>

          <p style={{ fontSize: "17px", lineHeight: 1.75, color: C.t60, maxWidth: "420px", marginBottom: "52px" }}>
            Pathoragy maps your long-horizon goals into Routes, Waypoints, and Logbooks — then tracks your{" "}
            <strong style={{ color: C.text, fontWeight: 600 }}>Boat Height</strong>{" "}
            as a proxy for sustainable meaning.
          </p>

          <div style={{ maxWidth: "400px" }}>
            <PathoragyWaitlistForm />
          </div>
          <p style={{ marginTop: "16px", fontSize: "12px", color: C.t40, letterSpacing: "0.01em" }}>
            Built on <em>The Value Boat</em> (Lam, 2026) · Limited beta spots
          </p>

          {/* Mobile-only screenshot — visible only below 768px */}
          <div className="p-hero-mobile-shot">
            <img
              src="/pathoragy/screenshots/home.png"
              alt="Pathoragy app"
              style={{ width: "160px", borderRadius: "32px", filter: "drop-shadow(0 20px 40px rgba(42,38,32,0.22))" }}
            />
          </div>
        </div>

        {/* Right — hero screenshot (desktop only) */}
        <div className="p-hero-right" style={{
          background: C.bg2, position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "80px 40px",
        }}>
          <span aria-hidden="true" style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-52%, -48%)",
            fontSize: "clamp(200px, 28vw, 340px)", fontWeight: 900,
            lineHeight: 0.88, letterSpacing: "-0.08em",
            color: C.t08, userSelect: "none", pointerEvents: "none",
          }}>
            3
          </span>
          <img
            src="/pathoragy/screenshots/home.png"
            alt="Pathoragy マイルート home screen"
            style={{
              width: "min(240px, 54%)", borderRadius: "44px",
              transform: "rotate(-4deg)",
              filter: "drop-shadow(0 40px 80px rgba(42,38,32,0.26))",
              position: "relative", zIndex: 2,
            }}
          />
        </div>
      </section>

      {/* ══ TICKER ════════════════════════════════════════════════════ */}
      <div style={{ background: C.bgDark, borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0", overflow: "hidden" }}>
        <div className="p-ticker" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[0, 1].map(rep => (
            <span key={rep} style={{ display: "inline-flex", flexShrink: 0 }}>
              {TICKER.map((item, j) => (
                <span key={j} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{
                    color: "rgba(240,235,227,0.40)", fontSize: "12px",
                    fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase",
                    padding: "0 28px",
                  }}>
                    {item}
                  </span>
                  <span style={{ color: C.accent, fontSize: "15px" }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══ CONCEPTS ══════════════════════════════════════════════════ */}
      <section className="p-concepts-outer" style={{ padding: "140px 40px 100px", maxWidth: "1360px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "80px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.t40 }}>
            How it works
          </span>
          <div style={{ flex: 1, height: "1px", background: C.bd2 }} />
          <span style={{ fontSize: "11px", color: C.t40, fontVariantNumeric: "tabular-nums" }}>01 / 04</span>
        </div>

        <div className="p-concepts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {CONCEPTS.map((c, i) => (
            <div key={i} className="p-concept-cell" style={{
              padding: "56px 64px", position: "relative",
              borderRight:  i % 2 === 0 ? `1px solid ${C.bd2}` : "none",
              borderBottom: i < 2       ? `1px solid ${C.bd2}` : "none",
            }}>
              <span aria-hidden="true" style={{
                position: "absolute", top: "24px", right: "28px",
                fontSize: "88px", fontWeight: 900, lineHeight: 1,
                letterSpacing: "-0.04em", color: C.t08, userSelect: "none",
              }}>
                {c.n}
              </span>
              <span style={{ fontSize: "36px", display: "block", marginBottom: "28px", lineHeight: 1 }}>{c.icon}</span>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, marginBottom: "10px" }}>
                {c.label}
              </p>
              <h3 style={{
                fontSize: "clamp(28px, 3.2vw, 48px)", fontWeight: 800,
                letterSpacing: "-0.035em", lineHeight: 1.05,
                color: C.text, marginBottom: "20px",
              }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.82, color: C.t60, maxWidth: "340px" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PULL QUOTE ════════════════════════════════════════════════ */}
      <section className="p-quote" style={{ background: C.bgDark, padding: "128px 40px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "40px", height: "3px", background: C.accent, margin: "0 auto 52px" }} />
          <blockquote style={{
            fontSize: "clamp(24px, 4.5vw, 58px)",
            fontWeight: 700, lineHeight: 1.18, letterSpacing: "-0.03em",
            color: "rgba(240,235,227,0.92)", fontStyle: "italic", margin: 0,
          }}>
            &ldquo;Stop trying to be happy.<br />Start navigating toward meaning.&rdquo;
          </blockquote>
          <p style={{
            marginTop: "40px", fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "rgba(240,235,227,0.28)",
          }}>
            The Value Boat — Lam, 2026
          </p>
        </div>
      </section>

      {/* ══ EDITORIAL SCREENSHOTS ═════════════════════════════════════ */}
      <section className="p-shots-outer" style={{ padding: "160px 40px 120px", maxWidth: "1360px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "96px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.t40 }}>
            See it in action
          </span>
          <div style={{ flex: 1, height: "1px", background: C.bd2 }} />
        </div>

        <div className="p-shots-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.65fr 0.9fr", gap: "48px", alignItems: "end" }}>
          {SCREENSHOTS.map((s, i) => (
            <div key={i} className="p-shot-item" style={{ transform: `translateY(${s.lift})` }}>
              <div style={{ transform: s.rotate, filter: "drop-shadow(0 32px 64px rgba(42,38,32,0.20))" }}>
                <img src={s.src} alt={s.alt} style={{ width: "100%", borderRadius: "44px" }} />
              </div>
              <div style={{ marginTop: "24px", paddingLeft: "10px", paddingTop: "4px", paddingBottom: "4px", borderLeft: `2px solid ${s.accent}` }}>
                <strong style={{ fontSize: "13px", fontWeight: 700, color: C.text, display: "block", marginBottom: "4px" }}>
                  {s.label}
                </strong>
                <span style={{ fontSize: "13px", color: C.t40, lineHeight: 1.5 }}>{s.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ THE BOOK ══════════════════════════════════════════════════ */}
      <section className="p-book" style={{
        borderTop: `1px solid ${C.bd2}`,
        padding: "140px 40px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "100px", alignItems: "center",
        maxWidth: "1360px", margin: "0 auto",
      }}>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.accent, marginBottom: "28px" }}>
            The foundation
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.8vw, 72px)", fontWeight: 800,
            letterSpacing: "-0.045em", lineHeight: 1.02,
            color: C.text, marginBottom: "32px",
          }}>
            Built on<br />
            <em style={{ fontStyle: "italic" }}>The Value Boat</em>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.85, color: C.t60, maxWidth: "420px", marginBottom: "28px" }}>
            The app is the operating layer of a philosophy. The ocean always flows, the current is always on — Pathoragy teaches you how to make waves. You cannot make the tide. You can make waves.
          </p>
          <p style={{ fontSize: "14px", color: C.t40, fontStyle: "italic" }}>
            — The Value Boat (Lam, 2026)
          </p>
        </div>

        <div>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.t40, marginBottom: "28px" }}>
            Notable routes
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {NOTABLE.map((p, i) => (
              <div key={i} style={{
                padding: "28px",
                paddingLeft:  i % 2 === 1 ? "28px" : "0",
                paddingRight: i % 2 === 0 ? "28px" : "0",
                borderRight:  i % 2 === 0 ? `1px solid ${C.bd2}` : "none",
                borderBottom: i < 2       ? `1px solid ${C.bd2}` : "none",
              }}>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent, marginBottom: "8px" }}>
                  {p.ship}
                </p>
                <p style={{ fontSize: "16px", fontWeight: 700, color: C.text, letterSpacing: "-0.02em", marginBottom: "4px" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: "12px", color: C.t40, lineHeight: 1.5 }}>{p.route}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BETA CTA ══════════════════════════════════════════════════ */}
      <section id="beta" className="p-beta" style={{ background: C.bgDark, padding: "148px 40px 168px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "40px", height: "3px", background: C.accent, margin: "0 auto 52px" }} />
          <h2 className="p-beta-h2" style={{
            fontSize: "clamp(52px, 8vw, 108px)", fontWeight: 800,
            letterSpacing: "-0.05em", lineHeight: 0.96,
            color: "rgba(240,235,227,0.96)", marginBottom: "32px",
          }}>
            Navigate<br />your life.
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "rgba(240,235,227,0.42)", marginBottom: "52px" }}>
            iOS beta · Limited spots available.<br />
            Join the waitlist and we&apos;ll reach out when your access is ready.
          </p>
          <PathoragyWaitlistForm />
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════ */}
      <footer className="p-footer" style={{
        background: C.bgDark,
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontWeight: 800, fontSize: "15px", letterSpacing: "-0.035em", color: C.accent }}>
          pathoragy
        </span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Link href="/pathoragy/blog"
            style={{ color: "rgba(240,235,227,0.35)", textDecoration: "none", fontSize: "13px", fontWeight: 500 }}>
            Blog
          </Link>
          <span style={{ color: "rgba(240,235,227,0.22)", fontSize: "13px" }}>© 2026 Truake OPC</span>
        </div>
      </footer>

      {/* ══ CSS ════════════════════════════════════════════════════════ */}
      <style>{`
        /* Ticker animation */
        @keyframes p-ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .p-ticker { animation: p-ticker-scroll 24s linear infinite; }
        .p-ticker:hover { animation-play-state: paused; }

        /* Mobile-only hero phone — hidden on desktop */
        .p-hero-mobile-shot {
          display: none;
        }

        /* ── Mobile ≤ 768px ─────────────────────── */
        @media (max-width: 768px) {

          /* NAV */
          .p-nav { padding: 0 20px !important; }
          .p-nav-blog { display: none; }

          /* HERO — stack vertically */
          .p-hero {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .p-hero-left {
            padding: 88px 24px 64px !important;
            border-right: none !important;
          }
          .p-hero-h1 {
            font-size: clamp(40px, 10vw, 56px) !important;
          }
          .p-hero-right {
            display: none !important;
          }
          /* Show inline phone below form on mobile */
          .p-hero-mobile-shot {
            display: flex;
            justify-content: center;
            margin-top: 48px;
          }

          /* CONCEPTS */
          .p-concepts-outer { padding: 80px 24px 60px !important; }
          .p-concepts-grid  { grid-template-columns: 1fr !important; }
          .p-concept-cell   {
            padding: 40px 24px !important;
            border-right:  none !important;
            border-bottom: 1px solid rgba(42,38,32,0.14) !important;
          }
          .p-concept-cell:last-child { border-bottom: none !important; }

          /* PULL QUOTE */
          .p-quote { padding: 80px 24px !important; }

          /* SCREENSHOTS — horizontal snap scroll */
          .p-shots-outer { padding: 80px 0 60px !important; }
          .p-shots-outer > div:first-child { padding: 0 24px; margin-bottom: 48px !important; }
          .p-shots-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 24px !important;
            padding: 0 24px 32px !important;
            align-items: flex-end !important;
          }
          .p-shots-grid::-webkit-scrollbar { display: none; }
          .p-shot-item {
            flex: 0 0 72vw !important;
            transform: none !important;
            scroll-snap-align: center;
          }
          .p-shot-item > div:first-child {
            transform: none !important;
          }

          /* THE BOOK */
          .p-book {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 80px 24px !important;
          }

          /* BETA CTA */
          .p-beta { padding: 80px 24px 100px !important; }
          .p-beta-h2 { font-size: clamp(44px, 12vw, 72px) !important; }

          /* FOOTER */
          .p-footer { padding: 24px 20px !important; }
        }

        /* ── Tablet 769–1024px ──────────────────── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .p-hero { grid-template-columns: 58% 42% !important; }
          .p-hero-left { padding: 80px 48px 80px 32px !important; }
          .p-concepts-outer { padding: 100px 32px 80px !important; }
          .p-concept-cell { padding: 40px 40px !important; }
          .p-shots-outer { padding: 100px 32px 80px !important; }
          .p-book { padding: 100px 32px !important; gap: 60px !important; }
          .p-beta { padding: 100px 32px 120px !important; }
        }
      `}</style>
    </div>
  );
}

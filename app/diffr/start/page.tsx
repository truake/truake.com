import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllGuides, symbolToEmoji, toUrlSlug } from "./lib";

export const metadata: Metadata = {
  title: "Beginner Starter Guides — Diffr",
  description:
    "Diffr analyzed 6,800 brands to build the definitive beginner starter guides for hiking, coffee, gaming, skincare, photography, home office, cycling, cooking, and personal finance.",
  openGraph: {
    title: "Beginner Starter Guides — Diffr",
    description:
      "Stop overbuying. Start right. Every hobby, every budget tier — curated by Diffr.",
    url: "https://truake.com/diffr/start",
  },
};

const C = {
  bg: "#F0EBE3",
  bg2: "#F8F5F1",
  text: "#2A2620",
  t60: "rgba(42,38,32,0.60)",
  t30: "rgba(42,38,32,0.30)",
  t12: "rgba(42,38,32,0.12)",
  blue: "#1B8BF5",
  orange: "#F0522C",
  bd: "rgba(42,38,32,0.10)",
} as const;

export default async function StarterIndexPage() {
  const guides = await getAllGuides();

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: "60px",
        background: "rgba(240,235,227,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.bd}`,
      }}>
        <Link href="/diffr" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Image src="/truake-logo-web.png" alt="Truake" width={120} height={40} className="h-7 w-auto opacity-60" />
          <span style={{ color: C.t30, fontSize: 16 }}>/</span>
          <Image src="/diffr-wordmark.png" alt="Diffr" width={225} height={100} className="h-8 w-auto" />
        </Link>
        <a
          href="#guides"
          style={{
            background: C.blue, color: "#fff",
            padding: "9px 22px", borderRadius: "100px",
            textDecoration: "none", fontSize: "13px", fontWeight: 700,
          }}
        >
          Browse Guides
        </a>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: "120px", paddingBottom: "80px",
        paddingLeft: "40px", paddingRight: "40px",
        maxWidth: "800px", margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          marginBottom: "28px",
          padding: "6px 16px", borderRadius: "100px",
          background: `rgba(27,139,245,0.08)`,
          border: `1px solid rgba(27,139,245,0.20)`,
        }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.blue }}>
            Diffr analyzed 6,800 brands
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 5.5vw, 68px)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.04em",
          color: C.text, margin: "0 0 24px",
        }}>
          The Beginner{" "}
          <em style={{ fontStyle: "italic", color: C.blue }}>Starter Guide</em>
          <br />for Every Hobby
        </h1>

        <p style={{
          fontSize: "18px", lineHeight: 1.75, color: C.t60,
          maxWidth: "560px", margin: "0 auto 48px",
        }}>
          Stop buying the wrong things first. Diffr breaks down exactly what you need to start,
          how much to budget, and what mistakes will cost you.
        </p>
      </section>

      {/* Domain Grid */}
      <section id="guides" style={{
        padding: "0 40px 120px",
        maxWidth: "1200px", margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "16px",
        }}>
          {guides.map((guide) => {
            const urlSlug = toUrlSlug(guide.domain_slug);
            const emoji = symbolToEmoji(guide.icon_symbol);
            const basicBudget = guide.budget_tiers?.basic;

            return (
              <Link
                key={guide.id}
                href={`/diffr/start/${urlSlug}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  background: C.bg2,
                  border: `1px solid ${C.bd}`,
                  borderRadius: "16px",
                  padding: "28px",
                  cursor: "pointer",
                  transition: "border-color 0.15s, transform 0.15s",
                  height: "100%",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = C.blue;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = C.bd;
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon + Category Tag */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ fontSize: "32px", lineHeight: 1 }}>{emoji}</span>
                    {basicBudget && (
                      <span style={{
                        fontSize: "11px", fontWeight: 700,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        color: C.t60,
                        padding: "4px 10px",
                        background: `rgba(42,38,32,0.06)`,
                        borderRadius: "100px",
                      }}>
                        from ${Math.round(basicBudget.cents / 100)}
                      </span>
                    )}
                  </div>

                  <h2 style={{
                    fontSize: "20px", fontWeight: 700,
                    letterSpacing: "-0.02em", lineHeight: 1.2,
                    color: C.text, margin: "0 0 8px",
                  }}>
                    {guide.domain_name}
                  </h2>

                  <p style={{
                    fontSize: "14px", lineHeight: 1.6,
                    color: C.t60, margin: "0 0 20px",
                  }}>
                    {guide.short_pitch}
                  </p>

                  {/* Categories preview */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {guide.required_categories?.slice(0, 3).map((cat) => (
                      <span key={cat.category} style={{
                        fontSize: "11px", fontWeight: 600,
                        padding: "3px 9px", borderRadius: "100px",
                        background: `rgba(27,139,245,0.08)`,
                        color: C.blue,
                      }}>
                        {cat.category}
                      </span>
                    ))}
                    {(guide.required_categories?.length ?? 0) > 3 && (
                      <span style={{
                        fontSize: "11px", fontWeight: 600,
                        padding: "3px 9px", borderRadius: "100px",
                        background: `rgba(42,38,32,0.06)`,
                        color: C.t60,
                      }}>
                        +{guide.required_categories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}

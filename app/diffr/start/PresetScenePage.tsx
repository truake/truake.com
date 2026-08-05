import Link from "next/link";
import SceneBrandKit from "./SceneBrandKit";
import type { SceneBrandKit as Kit } from "./lib";

const C = {
  bg: "#F0EBE3",
  bg2: "#F8F5F1",
  text: "#2A2620",
  t60: "rgba(42,38,32,0.60)",
  t40: "rgba(42,38,32,0.40)",
  t30: "rgba(42,38,32,0.30)",
  blue: "#1B8BF5",
  orange: "#F0522C",
  bd: "rgba(42,38,32,0.10)",
} as const;

// Lean, DB-driven scene page for scenes with no domain_guide editorial shell.
// Editorial shell = the preset's own description; product data = the brand kit.
export default function PresetScenePage({
  kit,
  slug,
  blogSlug = null,
}: {
  kit: Kit;
  slug: string;
  blogSlug?: string | null;
}) {
  const year = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: `${kit.name} — Beginner Brand Picks`,
        description: kit.description ?? undefined,
        numberOfItems: kit.slots.length,
        itemListElement: kit.slots.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${s.productTypeName}: ${s.brandName}`,
        })),
      },
    ],
  };

  return (
    <div className="diffr-paper" style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "100px 40px 120px" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "40px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/diffr/start" style={{ fontSize: "13px", color: C.t40, textDecoration: "none" }}>Starter Guides</Link>
          <span style={{ color: C.t30, fontSize: 13 }}>›</span>
          <span style={{ fontSize: "13px", color: C.t60 }}>{kit.name}</span>
        </nav>

        {/* Eyebrow */}
        <p style={{
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em",
          textTransform: "uppercase", color: C.blue, margin: "0 0 16px",
        }}>
          Beginner&apos;s Brand Guide · {year}
        </p>

        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-display), 'Playfair Display', serif",
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em",
          color: C.text, margin: "0 0 24px",
          textWrap: "balance",
        } as React.CSSProperties}>
          {kit.name}
        </h1>

        {/* Description shell */}
        {kit.description && (
          <div style={{
            background: `rgba(27,139,245,0.06)`,
            border: `1px solid rgba(27,139,245,0.18)`,
            borderRadius: "12px",
            padding: "24px 28px",
            marginBottom: "52px",
          }}>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(42,38,32,0.82)", margin: 0 }}>
              {kit.description}
            </p>
          </div>
        )}

        {/* Brand kit — the DB-driven product data */}
        <SceneBrandKit kit={kit} />

        {/* Reciprocal link to the long-form editorial brand guide (blog). */}
        {blogSlug && (
          <div style={{
            marginTop: "-28px", marginBottom: "52px",
            paddingTop: "20px", borderTop: `1px solid ${C.bd}`,
          }}>
            <Link href={`/diffr/blog/${blogSlug}`} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              color: C.blue, textDecoration: "none", fontSize: "15px", fontWeight: 700,
            }}>
              Read the full {kit.name} brand guide →
            </Link>
            <p style={{ fontSize: "13px", color: C.t60, margin: "6px 0 0", lineHeight: 1.5 }}>
              The deep dive — why each brand wins its slot, and the mistakes that cost beginners the most.
            </p>
          </div>
        )}

        {/* CTA */}
        <section style={{
          background: `linear-gradient(135deg, rgba(27,139,245,0.08) 0%, rgba(240,82,44,0.06) 100%)`,
          border: `1px solid rgba(27,139,245,0.20)`,
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          marginBottom: "52px",
        }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.blue, margin: "0 0 12px" }}>
            Build Your Pack
          </p>
          <h3 style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            fontSize: "28px", fontWeight: 800, letterSpacing: "-0.02em",
            color: C.text, margin: "0 0 12px",
          }}>
            Build your {kit.name} kit in Diffr
          </h3>
          <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 28px", lineHeight: 1.6 }}>
            Open the Diffr app for a personalized starter pack — one brand per slot, zero repeats.
          </p>
          <a href={`diffr://scene/${slug}`} style={{
            display: "inline-block", background: C.blue, color: "#fff",
            padding: "14px 36px", borderRadius: "100px",
            textDecoration: "none", fontSize: "15px", fontWeight: 700,
          }}>
            Build This Pack in Diffr →
          </a>
          <p style={{ fontSize: "12px", color: C.t40, marginTop: "16px" }}>iOS · Free to download</p>
        </section>

        {/* Footer nav */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "32px", borderTop: `1px solid ${C.bd}`,
        }}>
          <Link href="/diffr/start" style={{ fontSize: "14px", color: C.t60, textDecoration: "none" }}>
            ← All Starter Guides
          </Link>
          <p style={{ fontSize: "12px", color: C.t40, margin: 0 }}>By Diffr Editorial</p>
        </div>
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides, symbolToEmoji, toUrlSlug } from "./lib";
import GuideCard from "./GuideCard";

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
          fontFamily: "var(--font-display), 'Playfair Display', serif",
          fontSize: "clamp(40px, 5.5vw, 68px)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.03em",
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
            return (
              <GuideCard key={guide.id} guide={guide} urlSlug={urlSlug} emoji={emoji} />
            );
          })}
        </div>
      </section>

    </div>
  );
}

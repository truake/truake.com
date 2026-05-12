"use client";

import Link from "next/link";
import type { DomainGuide } from "./lib";

const C = {
  bg2: "#F8F5F1",
  text: "#2A2620",
  t60: "rgba(42,38,32,0.60)",
  blue: "#1B8BF5",
  bd: "rgba(42,38,32,0.10)",
} as const;

interface Props {
  guide: DomainGuide;
  urlSlug: string;
  emoji: string;
}

export default function GuideCard({ guide, urlSlug, emoji }: Props) {
  const basicBudget = guide.budget_tiers?.basic;

  return (
    <Link href={`/diffr/start/${urlSlug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
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
        {/* Icon + Budget Tag */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <span style={{ fontSize: "32px", lineHeight: 1 }}>{emoji}</span>
          {basicBudget && (
            <span style={{
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: C.t60,
              padding: "4px 10px",
              background: "rgba(42,38,32,0.06)",
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

        {/* Category tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {guide.required_categories?.slice(0, 3).map((cat) => (
            <span key={cat.category} style={{
              fontSize: "11px", fontWeight: 600,
              padding: "3px 9px", borderRadius: "100px",
              background: "rgba(27,139,245,0.08)",
              color: C.blue,
            }}>
              {cat.category}
            </span>
          ))}
          {(guide.required_categories?.length ?? 0) > 3 && (
            <span style={{
              fontSize: "11px", fontWeight: 600,
              padding: "3px 9px", borderRadius: "100px",
              background: "rgba(42,38,32,0.06)",
              color: C.t60,
            }}>
              +{guide.required_categories.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

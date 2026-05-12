import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getAllGuides,
  getGuideBySlug,
  symbolToEmoji,
  toUrlSlug,
  formatBudget,
} from "../lib";

// ── Static generation ─────────────────────────────────────────
export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((g) => ({ slug: toUrlSlug(g.domain_slug) }));
}

// ── Metadata ──────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return { title: "Not Found" };

  const title = `How to Start ${guide.domain_name} in 2026 — Beginner's Gear Guide`;
  const description = `${guide.short_pitch}. Diffr analyzed 6,800 brands to give you the definitive starter kit — by budget tier, with zero fluff.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://truake.com/diffr/start/${slug}`,
    },
    alternates: {
      canonical: `https://truake.com/diffr/start/${slug}`,
    },
  };
}

// ── Design tokens ─────────────────────────────────────────────
const C = {
  bg: "#F0EBE3",
  bg2: "#F8F5F1",
  text: "#2A2620",
  t80: "rgba(42,38,32,0.82)",
  t60: "rgba(42,38,32,0.60)",
  t40: "rgba(42,38,32,0.40)",
  t30: "rgba(42,38,32,0.30)",
  t12: "rgba(42,38,32,0.12)",
  t08: "rgba(42,38,32,0.08)",
  blue: "#1B8BF5",
  orange: "#F0522C",
  bd: "rgba(42,38,32,0.10)",
  bd2: "rgba(42,38,32,0.16)",
} as const;

const priorityColors: Record<string, string> = {
  required: "#1B8BF5",
  recommended: "#F0522C",
  optional: "rgba(42,38,32,0.45)",
};

// ── Page ──────────────────────────────────────────────────────
export default async function StarterGuidePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const emoji = symbolToEmoji(guide.icon_symbol);
  const { basic, standard, pro } = guide.budget_tiers ?? {};
  const year = new Date().getFullYear();

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://truake.com/diffr/start/${slug}`,
        url: `https://truake.com/diffr/start/${slug}`,
        name: `How to Start ${guide.domain_name} in ${year} — Beginner's Gear Guide`,
        description: guide.short_pitch,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Diffr", item: "https://truake.com/diffr" },
            { "@type": "ListItem", position: 2, name: "Starter Guides", item: "https://truake.com/diffr/start" },
            { "@type": "ListItem", position: 3, name: guide.domain_name, item: `https://truake.com/diffr/start/${slug}` },
          ],
        },
        author: {
          "@type": "Organization",
          name: "Diffr Editorial",
          url: "https://truake.com/diffr",
        },
        publisher: {
          "@type": "Organization",
          name: "Diffr",
          url: "https://truake.com/diffr",
        },
        datePublished: guide.generated_at,
        dateModified: guide.generated_at,
      },
      {
        "@type": "HowTo",
        name: `How to Start ${guide.domain_name} as a Beginner`,
        description: guide.short_pitch,
        estimatedCost: basic
          ? { "@type": "MonetaryAmount", currency: "USD", value: (basic.cents / 100).toString() }
          : undefined,
        step: guide.required_categories?.map((cat, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: cat.category,
          text: cat.why,
        })) ?? [],
      },
      {
        "@type": "ItemList",
        name: `${guide.domain_name} Beginner Starter Kit`,
        description: `Diffr's curated list of essential ${guide.domain_name} categories for beginners`,
        numberOfItems: guide.required_categories?.length ?? 0,
        itemListElement: guide.required_categories?.map((cat, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: cat.category,
          description: cat.why,
        })) ?? [],
      },
    ],
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href="/diffr/start" style={{ fontSize: "13px", fontWeight: 500, color: C.t60, textDecoration: "none" }}>
            All Guides
          </Link>
          <a
            href={`diffr://start/${slug}`}
            style={{
              background: C.blue, color: "#fff",
              padding: "9px 22px", borderRadius: "100px",
              textDecoration: "none", fontSize: "13px", fontWeight: 700,
            }}
          >
            Open in Diffr ↗
          </a>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "100px 40px 120px" }}>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "40px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/diffr/start" style={{ fontSize: "13px", color: C.t40, textDecoration: "none" }}>Starter Guides</Link>
          <span style={{ color: C.t30, fontSize: 13 }}>›</span>
          <span style={{ fontSize: "13px", color: C.t60 }}>{guide.domain_name}</span>
        </nav>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "36px" }}>{emoji}</span>
          <span style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: C.blue,
          }}>
            Beginner's Guide · {year}
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.04em",
          color: C.text, margin: "0 0 24px",
        }}>
          How to Start{" "}
          <span style={{ color: C.blue }}>{guide.domain_name}</span>
          {" "}in {year}
          <br />
          <span style={{ fontSize: "0.72em", color: C.t60, fontWeight: 600 }}>
            A Beginner&apos;s Equipment Guide
          </span>
        </h1>

        {/* TL;DR box — GEO-critical */}
        <div style={{
          background: `rgba(27,139,245,0.06)`,
          border: `1px solid rgba(27,139,245,0.18)`,
          borderRadius: "12px",
          padding: "24px 28px",
          marginBottom: "52px",
        }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.blue, margin: "0 0 12px" }}>
            TL;DR
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: C.t80, margin: 0 }}>
            {guide.short_pitch}.{" "}
            {basic && <>Start with a <strong style={{ color: C.text }}>${Math.round(basic.cents / 100)} basic kit</strong> ({basic.items} items) before upgrading. </>}
            According to Diffr&apos;s analysis of 6,800 brands, beginners most often overbuy in the first month.
            Your first purchase should be: <strong style={{ color: C.text }}>{guide.required_categories?.[0]?.category}</strong>.
          </p>
        </div>

        {/* Section 1: Required Categories */}
        <section style={{ marginBottom: "52px" }}>
          <h2 style={{
            fontSize: "22px", fontWeight: 700, letterSpacing: "-0.025em",
            color: C.text, margin: "0 0 6px",
          }}>
            What You Actually Need
          </h2>
          <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 24px", lineHeight: 1.6 }}>
            Diffr breaks {guide.domain_name} into {guide.required_categories?.length ?? 0} essential categories.
            Required items are what every beginner needs. Recommended items are worth adding in month 2–3.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {guide.required_categories?.map((cat) => (
              <div key={cat.category} style={{
                display: "flex", alignItems: "flex-start", gap: "16px",
                background: C.bg2,
                border: `1px solid ${C.bd}`,
                borderRadius: "12px",
                padding: "18px 20px",
              }}>
                <span style={{
                  flexShrink: 0,
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: "100px",
                  background: `${priorityColors[cat.priority] ?? C.t60}18`,
                  color: priorityColors[cat.priority] ?? C.t60,
                  marginTop: "2px",
                }}>
                  {cat.priority}
                </span>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: C.text, margin: "0 0 4px" }}>
                    {cat.category}
                  </p>
                  <p style={{ fontSize: "14px", color: C.t60, margin: 0, lineHeight: 1.5 }}>
                    {cat.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Budget Tiers */}
        {(basic || standard || pro) && (
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{
              fontSize: "22px", fontWeight: 700, letterSpacing: "-0.025em",
              color: C.text, margin: "0 0 6px",
            }}>
              Budget Tiers
            </h2>
            <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 24px", lineHeight: 1.6 }}>
              According to Diffr&apos;s brand analysis, here&apos;s what a realistic starter budget looks like for {guide.domain_name}.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {[
                { key: "basic", tier: basic, label: "Basic", color: C.t60 },
                { key: "standard", tier: standard, label: "Standard", color: C.blue },
                { key: "pro", tier: pro, label: "Pro", color: C.orange },
              ].map(({ key, tier, label, color }) => tier && (
                <div key={key} style={{
                  background: C.bg2,
                  border: `1px solid ${key === "standard" ? C.blue + "44" : C.bd}`,
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                  position: "relative",
                }}>
                  {key === "standard" && (
                    <span style={{
                      position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)",
                      fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                      background: C.blue, color: "#fff", padding: "3px 10px", borderRadius: "100px",
                    }}>
                      Recommended
                    </span>
                  )}
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color, margin: "0 0 8px" }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.03em", color: C.text, margin: "0 0 4px" }}>
                    {formatBudget(tier.cents)}
                  </p>
                  <p style={{ fontSize: "13px", color: C.t60, margin: 0 }}>
                    {tier.items} {tier.items === 1 ? "item" : "items"}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Common Mistakes */}
        {guide.common_mistakes?.length > 0 && (
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{
              fontSize: "22px", fontWeight: 700, letterSpacing: "-0.025em",
              color: C.text, margin: "0 0 6px",
            }}>
              Common Beginner Mistakes
            </h2>
            <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 24px", lineHeight: 1.6 }}>
              Diffr&apos;s pick based on real beginner patterns. Avoid these and save your first $50–200.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {guide.common_mistakes.map((mistake, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "12px",
                  padding: "16px 20px",
                  background: `rgba(240,82,44,0.04)`,
                  border: `1px solid rgba(240,82,44,0.14)`,
                  borderRadius: "10px",
                }}>
                  <span style={{ color: C.orange, fontWeight: 700, flexShrink: 0, fontSize: "14px" }}>✕</span>
                  <p style={{ fontSize: "14px", color: C.t80, margin: 0, lineHeight: 1.55 }}>{mistake}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA — primary conversion block */}
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
            fontSize: "28px", fontWeight: 800, letterSpacing: "-0.03em",
            color: C.text, margin: "0 0 12px",
          }}>
            Start your {guide.domain_name} kit in Diffr
          </h3>
          <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 28px", lineHeight: 1.6 }}>
            Open the Diffr app to build a personalized starter pack — one brand per category, zero repeats.
          </p>
          <a
            href={`diffr://start/${guide.domain_slug}`}
            style={{
              display: "inline-block",
              background: C.blue, color: "#fff",
              padding: "14px 36px", borderRadius: "100px",
              textDecoration: "none", fontSize: "15px", fontWeight: 700,
              letterSpacing: "0.01em",
            }}
          >
            Build This Pack in Diffr →
          </a>
          <p style={{ fontSize: "12px", color: C.t40, marginTop: "16px" }}>
            iOS · Free to download
          </p>
        </section>

        {/* Footer nav */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "32px",
          borderTop: `1px solid ${C.bd}`,
        }}>
          <Link href="/diffr/start" style={{ fontSize: "14px", color: C.t60, textDecoration: "none" }}>
            ← All Starter Guides
          </Link>
          <p style={{ fontSize: "12px", color: C.t40, margin: 0 }}>
            By Diffr Editorial · Updated {new Date(guide.generated_at).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
          </p>
        </div>
      </article>
    </div>
  );
}

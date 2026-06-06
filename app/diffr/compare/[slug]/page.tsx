import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompareInsights, type RedditInsight } from "../../start/lib";

// ── Helpers ───────────────────────────────────────────────────

/** "hario-v60-vs-aeropress" → ["Hario V60", "Aeropress"] */
function parseBrandsFromSlug(slug: string): [string, string] | null {
  const parts = slug.split("-vs-");
  if (parts.length < 2) return null;
  const toTitle = (s: string) =>
    s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return [toTitle(parts[0]), toTitle(parts.slice(1).join("-vs-"))];
}

// ── Metadata ──────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const brands = parseBrandsFromSlug(slug);
  if (!brands) return { title: "Compare — Diffr" };
  const [a, b] = brands;
  const title = `${a} vs ${b} for Beginners — Which Should You Pick? | Diffr`;
  const description = `Diffr analyzed real r/ community discussions to compare ${a} and ${b}. See which brand beginners actually recommend, with real quotes and scores.`;
  return {
    title,
    description,
    openGraph: { title, description, url: `https://truake.com/diffr/compare/${slug}` },
    alternates: { canonical: `https://truake.com/diffr/compare/${slug}` },
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
  blue: "#1B8BF5",
  orange: "#F0522C",
  bd: "rgba(42,38,32,0.10)",
} as const;

// ── Sentiment scoring ─────────────────────────────────────────

/** Count how many times a brand is mentioned positively vs negatively in top_comments. */
function scoreSentiment(
  insights: RedditInsight[],
  brand: string
): { mentions: number; topQuotes: { body: string; author: string; score: number }[] } {
  const bLower = brand.toLowerCase();
  const mentions = insights.filter((r) =>
    r.brand_mentions?.some((b) => b.toLowerCase() === bLower)
  ).length;

  // Collect top comments that mention the brand
  const quotes: { body: string; author: string; score: number }[] = [];
  for (const insight of insights) {
    for (const c of insight.top_comments ?? []) {
      if (c.body.toLowerCase().includes(bLower)) {
        quotes.push(c);
      }
    }
  }
  quotes.sort((a, b) => b.score - a.score);

  return { mentions, topQuotes: quotes.slice(0, 3) };
}

// ── Page ──────────────────────────────────────────────────────
export default async function ComparePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const brands = parseBrandsFromSlug(slug);
  if (!brands) notFound();

  const [brandA, brandB] = brands;
  const insights = await getCompareInsights(brandA, brandB);

  const sentA = scoreSentiment(insights, brandA);
  const sentB = scoreSentiment(insights, brandB);

  const year = new Date().getFullYear();
  const subs = [...new Set(insights.map((i) => `r/${i.sub}`))].join(", ");

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://truake.com/diffr/compare/${slug}`,
        url: `https://truake.com/diffr/compare/${slug}`,
        name: `${brandA} vs ${brandB} for Beginners`,
        description: `Community-sourced comparison of ${brandA} and ${brandB} based on Diffr's analysis of ${insights.length} Reddit discussions.`,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Diffr", item: "https://truake.com/diffr" },
            { "@type": "ListItem", position: 2, name: "Compare", item: "https://truake.com/diffr/compare" },
            { "@type": "ListItem", position: 3, name: `${brandA} vs ${brandB}`, item: `https://truake.com/diffr/compare/${slug}` },
          ],
        },
        author: { "@type": "Organization", name: "Diffr Editorial", url: "https://truake.com/diffr" },
      },
      // FAQPage from co-mentioned posts
      ...insights.slice(0, 4).map((insight) => ({
        "@type": "Question",
        name: insight.title,
        url: `https://www.reddit.com${insight.permalink}`,
        answerCount: insight.num_comments,
        acceptedAnswer: insight.top_comments?.[0] ? {
          "@type": "Answer",
          text: insight.top_comments[0].body.slice(0, 300),
          author: { "@type": "Person", name: `u/${insight.top_comments[0].author}` },
        } : undefined,
      })),
    ],
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />


      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "100px 40px 120px" }}>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "40px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/diffr/start" style={{ fontSize: "13px", color: C.t40, textDecoration: "none" }}>Starter Guides</Link>
          <span style={{ color: C.t30, fontSize: 13 }}>›</span>
          <span style={{ fontSize: "13px", color: C.t60 }}>Compare</span>
          <span style={{ color: C.t30, fontSize: 13 }}>›</span>
          <span style={{ fontSize: "13px", color: C.t60 }}>{brandA} vs {brandB}</span>
        </nav>

        {/* Eyebrow */}
        <div style={{ marginBottom: "16px" }}>
          <span style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: C.blue,
          }}>
            Community Comparison · {year}
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "var(--font-display), 'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: C.text, margin: "0 0 16px",
        }}>
          <span style={{ color: C.blue }}>{brandA}</span>
          {" "}vs{" "}
          <span style={{ color: C.orange }}>{brandB}</span>
          {" "}for Beginners
        </h1>
        <p style={{ fontSize: "18px", color: C.t60, lineHeight: 1.7, margin: "0 0 40px" }}>
          Which should you pick? Diffr analyzed {insights.length > 0 ? insights.length : "community"} real discussions from{" "}
          {subs || "Reddit"} to give you the community verdict — no paid rankings, just upvotes.
        </p>

        {/* Score cards */}
        {insights.length > 0 && (
          <section style={{ marginBottom: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: "0", alignItems: "center" }}>
              {/* Brand A */}
              <div style={{
                background: C.bg2, border: `2px solid ${C.blue}44`,
                borderRadius: "16px 0 0 16px", padding: "28px 24px", textAlign: "center",
              }}>
                <p style={{ fontSize: "22px", fontWeight: 800, color: C.blue, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
                  {brandA}
                </p>
                <p style={{ fontSize: "32px", fontWeight: 800, color: C.text, margin: "0 0 4px" }}>
                  {sentA.mentions}
                </p>
                <p style={{ fontSize: "12px", color: C.t60, margin: 0 }}>co-mentions in top posts</p>
              </div>

              {/* VS divider */}
              <div style={{ textAlign: "center", fontSize: "13px", fontWeight: 700, color: C.t40 }}>
                vs
              </div>

              {/* Brand B */}
              <div style={{
                background: C.bg2, border: `2px solid ${C.orange}44`,
                borderRadius: "0 16px 16px 0", padding: "28px 24px", textAlign: "center",
              }}>
                <p style={{ fontSize: "22px", fontWeight: 800, color: C.orange, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
                  {brandB}
                </p>
                <p style={{ fontSize: "32px", fontWeight: 800, color: C.text, margin: "0 0 4px" }}>
                  {sentB.mentions}
                </p>
                <p style={{ fontSize: "12px", color: C.t60, margin: 0 }}>co-mentions in top posts</p>
              </div>
            </div>
            {insights.length > 0 && (
              <p style={{ fontSize: "12px", color: C.t40, textAlign: "center", marginTop: "12px" }}>
                Based on {insights.length} Reddit posts where both brands are discussed together
              </p>
            )}
          </section>
        )}

        {/* Posts where both brands appear */}
        {insights.length > 0 ? (
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em",
              color: C.text, margin: "0 0 6px",
            }}>
              What the Community Says
            </h2>
            <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 24px", lineHeight: 1.6 }}>
              Posts from {subs} where beginners compared {brandA} and {brandB} head-to-head.
              Sorted by community score (upvotes).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {insights.map((insight, idx) => {
                const topComment = insight.top_comments?.[0];
                const redditUrl = `https://www.reddit.com${insight.permalink}`;
                return (
                  <div key={idx} style={{
                    background: C.bg2,
                    border: `1px solid ${C.bd}`,
                    borderRadius: "14px",
                    padding: "20px 22px",
                    borderLeft: `3px solid rgba(255,69,0,0.35)`,
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "12px" }}>
                      <a
                        href={redditUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "15px", fontWeight: 600, color: C.text, textDecoration: "none", lineHeight: 1.4, flex: 1 }}
                      >
                        {insight.title}
                      </a>
                      <span style={{
                        flexShrink: 0, fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                        padding: "3px 8px", borderRadius: "100px",
                        background: "rgba(255,69,0,0.08)", color: "rgba(255,69,0,0.80)",
                      }}>
                        r/{insight.sub}
                      </span>
                    </div>

                    {topComment && (
                      <blockquote style={{
                        margin: "0 0 10px", padding: "10px 14px",
                        background: "rgba(42,38,32,0.04)", borderRadius: "8px",
                      }}>
                        <p style={{ fontSize: "13px", color: C.t80, margin: "0 0 4px", lineHeight: 1.55, fontStyle: "italic" }}>
                          &ldquo;{topComment.body.length > 240 ? topComment.body.slice(0, 240) + "…" : topComment.body}&rdquo;
                        </p>
                        <cite style={{ fontSize: "11px", color: C.t40, fontStyle: "normal" }}>
                          — u/{topComment.author} · ↑{topComment.score}
                        </cite>
                      </blockquote>
                    )}

                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <span style={{ fontSize: "12px", color: C.t40 }}>↑ {insight.score} · {insight.num_comments} comments</span>
                      <a href={redditUrl} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: "12px", color: C.blue, textDecoration: "none" }}>
                        View on Reddit →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          <section style={{
            marginBottom: "52px", padding: "40px",
            background: C.bg2, border: `1px solid ${C.bd}`, borderRadius: "16px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "16px", color: C.t60, margin: 0 }}>
              No Reddit discussions found comparing {brandA} and {brandB} directly.
              Try searching r/Coffee, r/photography, or similar hobby subreddits.
            </p>
          </section>
        )}

        {/* Top quotes per brand */}
        {(sentA.topQuotes.length > 0 || sentB.topQuotes.length > 0) && (
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{
              fontSize: "22px", fontWeight: 700, letterSpacing: "-0.025em",
              color: C.text, margin: "0 0 24px",
            }}>
              Community Quotes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Brand A quotes */}
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: C.blue, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {brandA}
                </p>
                {sentA.topQuotes.slice(0, 2).map((q, i) => (
                  <blockquote key={i} style={{
                    margin: "0 0 10px", padding: "12px 14px",
                    background: `rgba(27,139,245,0.05)`,
                    border: `1px solid rgba(27,139,245,0.14)`,
                    borderRadius: "10px",
                  }}>
                    <p style={{ fontSize: "13px", color: C.t80, margin: "0 0 4px", lineHeight: 1.5, fontStyle: "italic" }}>
                      &ldquo;{q.body.length > 180 ? q.body.slice(0, 180) + "…" : q.body}&rdquo;
                    </p>
                    <cite style={{ fontSize: "11px", color: C.t40, fontStyle: "normal" }}>
                      — u/{q.author} · ↑{q.score}
                    </cite>
                  </blockquote>
                ))}
              </div>

              {/* Brand B quotes */}
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: C.orange, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {brandB}
                </p>
                {sentB.topQuotes.slice(0, 2).map((q, i) => (
                  <blockquote key={i} style={{
                    margin: "0 0 10px", padding: "12px 14px",
                    background: `rgba(240,82,44,0.05)`,
                    border: `1px solid rgba(240,82,44,0.14)`,
                    borderRadius: "10px",
                  }}>
                    <p style={{ fontSize: "13px", color: C.t80, margin: "0 0 4px", lineHeight: 1.5, fontStyle: "italic" }}>
                      &ldquo;{q.body.length > 180 ? q.body.slice(0, 180) + "…" : q.body}&rdquo;
                    </p>
                    <cite style={{ fontSize: "11px", color: C.t40, fontStyle: "normal" }}>
                      — u/{q.author} · ↑{q.score}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
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
            Still Deciding?
          </p>
          <h3 style={{ fontFamily: "var(--font-display), 'Playfair Display', serif", fontSize: "26px", fontWeight: 800, letterSpacing: "-0.02em", color: C.text, margin: "0 0 12px" }}>
            Build your starter pack in Diffr
          </h3>
          <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 28px", lineHeight: 1.6 }}>
            Diffr picks one brand per category based on your style — so you never have to choose between {brandA} and {brandB} without context.
          </p>
          <a
            href="diffr://start"
            style={{
              display: "inline-block",
              background: C.blue, color: "#fff",
              padding: "14px 36px", borderRadius: "100px",
              textDecoration: "none", fontSize: "15px", fontWeight: 700,
            }}
          >
            Open Diffr App →
          </a>
          <p style={{ fontSize: "12px", color: C.t40, marginTop: "16px" }}>iOS · Free to download</p>
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
            By Diffr Editorial · {year}
          </p>
        </div>
      </article>
    </div>
  );
}

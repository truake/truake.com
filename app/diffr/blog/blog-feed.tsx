'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { BlogPost } from './posts'

// Editorial "front page" layout: a dominant lead + a "Latest" rail, then
// section fronts as ruled lists, with a sticky tag-classification filter.

const C = {
  text: '#2A2620',
  muted: 'rgba(42,38,32,0.62)',
  faint: 'rgba(42,38,32,0.4)',
  rule: 'rgba(42,38,32,0.16)',
  ruleLight: 'rgba(42,38,32,0.1)',
  blue: '#1B8BF5',
}

const CAT_META: Record<string, { label: string; color: string }> = {
  announcement: { label: 'Announcements', color: '#1A8F4C' },
  product: { label: 'Brand Guides', color: '#F0522C' },
  strategy: { label: 'Strategy', color: '#1d2088' },
  'build-log': { label: 'Build Logs', color: '#1B8BF5' },
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'announcement', label: 'Announcements' },
  { key: 'product', label: 'Brand Guides' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'build-log', label: 'Build Logs' },
]

const SECTION_ORDER = ['announcement', 'product', 'strategy', 'build-log']

const play = "var(--font-display), 'Playfair Display', Georgia, serif"
const sans = "var(--font-syne), -apple-system, sans-serif"

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function Kicker({ cat }: { cat: string }) {
  const m = CAT_META[cat]
  return (
    <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: m?.color ?? C.blue }}>
      {m?.label ?? cat}
    </span>
  )
}

export function BlogFeed({ posts, behindTheBuildCount = 0 }: { posts: BlogPost[]; behindTheBuildCount?: number }) {
  const [active, setActive] = useState('all')

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: posts.length }
    for (const p of posts) c[p.category] = (c[p.category] ?? 0) + 1
    return c
  }, [posts])

  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      {/* Sticky tag-classification filter */}
      <div
        style={{
          position: 'sticky', top: 64, zIndex: 20,
          background: 'rgba(240,235,227,0.9)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          margin: '0 -24px 40px', padding: '13px 24px',
          display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center',
          borderBottom: `1px solid ${C.rule}`,
        }}
      >
        {FILTERS.map(f => {
          const on = active === f.key
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              aria-pressed={on}
              className="blog-chip"
              style={{
                fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '7px 15px', borderRadius: 100, cursor: 'pointer',
                border: on ? `1px solid ${C.blue}` : `1px solid ${C.rule}`,
                background: on ? C.blue : 'transparent',
                color: on ? '#fff' : C.muted,
                transition: 'all .18s',
              }}
            >
              {f.label}{' '}
              <span style={{ color: on ? 'rgba(255,255,255,0.75)' : C.faint, fontWeight: 700 }}>{counts[f.key] ?? 0}</span>
            </button>
          )
        })}
      </div>

      {active === 'all'
        ? <FrontPage posts={posts} behindTheBuildCount={behindTheBuildCount} />
        : <SectionList title={CAT_META[active].label} posts={filtered} />}
    </>
  )
}

function FrontPage({ posts, behindTheBuildCount }: { posts: BlogPost[]; behindTheBuildCount: number }) {
  const lead = posts[0]
  const latest = posts.slice(1, 5)
  const shown = new Set([lead, ...latest].map(p => p.slug))
  const rest = posts.filter(p => !shown.has(p.slug))

  if (!lead) return null

  return (
    <>
      {behindTheBuildCount > 0 && (
        <Link
          href="/diffr/blog/behind-the-build"
          className="blog-link"
          style={{
            display: 'block',
            textDecoration: 'none',
            color: C.text,
            marginBottom: 40,
            padding: '28px 32px',
            border: `1px solid ${C.rule}`,
            borderLeft: `4px solid ${C.blue}`,
            background: 'rgba(255,255,255,0.35)',
          }}
        >
          <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue }}>
            Series
          </span>
          <h2 style={{ fontFamily: play, fontSize: 'clamp(22px, 2.8vw, 28px)', fontWeight: 700, lineHeight: 1.2, margin: '10px 0 8px' }}>
            Behind the Build
          </h2>
          <p style={{ fontFamily: play, fontSize: 16, lineHeight: 1.55, color: C.muted, margin: '0 0 12px', maxWidth: 620 }}>
            One name on the marquee. Many B2B brands behind each famous venue — verified supplier maps with sources.
          </p>
          <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.blue }}>
            {behindTheBuildCount} articles →
          </span>
        </Link>
      )}

      {/* Lead + Latest rail */}
      <div className="blog-lead" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, marginBottom: 48 }}>
        <Link
          href={`/diffr/blog/${lead.slug}`}
          className="blog-link blog-lead-story"
          style={{ textDecoration: 'none', color: C.text, paddingRight: 40, borderRight: `1px solid ${C.rule}` }}
        >
          <Kicker cat={lead.category} />
          <h2 className="blog-title" style={{ fontFamily: play, fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '12px 0 14px' }}>
            {lead.title}
          </h2>
          <p style={{ fontFamily: play, fontSize: 18, lineHeight: 1.55, color: C.muted, maxWidth: 560 }}>{lead.excerpt}</p>
          <p style={{ fontFamily: sans, fontSize: 12, color: C.faint, marginTop: 18, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {fmt(lead.date)} &nbsp;·&nbsp; {lead.readTime}
          </p>
        </Link>

        <div className="blog-latest" style={{ paddingLeft: 36 }}>
          <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: `2px solid ${C.text}`, paddingBottom: 8, margin: '0 0 4px' }}>
            Latest
          </p>
          {latest.map((p, i) => (
            <Link
              key={p.slug}
              href={`/diffr/blog/${p.slug}`}
              className="blog-link"
              style={{ display: 'block', textDecoration: 'none', color: C.text, padding: '15px 0', borderBottom: i < latest.length - 1 ? `1px solid ${C.ruleLight}` : 'none' }}
            >
              <Kicker cat={p.category} />
              <h3 className="blog-title" style={{ fontFamily: play, fontSize: 19, fontWeight: 700, lineHeight: 1.2, margin: '5px 0 0' }}>{p.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Section fronts (remaining posts, grouped) */}
      {SECTION_ORDER.map(cat => {
        const items = rest.filter(p => p.category === cat)
        if (!items.length) return null
        return <SectionList key={cat} title={CAT_META[cat].label} posts={items} />
      })}
    </>
  )
}

function SectionList({ title, posts }: { title: string; posts: BlogPost[] }) {
  return (
    <section style={{ marginTop: 44 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: `3px double ${C.text}`, paddingTop: 9, marginBottom: 2 }}>
        <h2 style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.text, margin: 0 }}>{title}</h2>
        <span style={{ fontFamily: sans, fontSize: 12, color: C.faint }}>{posts.length}</span>
      </div>
      {posts.map((p, i) => (
        <Link
          key={p.slug}
          href={`/diffr/blog/${p.slug}`}
          className="blog-link"
          style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, padding: '17px 0', borderBottom: i < posts.length - 1 ? `1px solid ${C.ruleLight}` : 'none', textDecoration: 'none', color: C.text }}
        >
          <span className="blog-title" style={{ fontFamily: play, fontSize: 'clamp(19px,2.2vw,22px)', fontWeight: 600, lineHeight: 1.25 }}>{p.title}</span>
          <span style={{ fontFamily: sans, fontSize: 12, color: C.faint, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{fmt(p.date)}</span>
        </Link>
      ))}
    </section>
  )
}

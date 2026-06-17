'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { BlogPost } from './posts'

// Editorial front page for the Pathoragy blog — lead + "Latest" rail, then
// section fronts as ruled lists, with a sticky category filter. Pathoragy
// theme (orange accent, Space Grotesk display).

const C = {
  text: '#2A2620',
  muted: 'rgba(42,38,32,0.62)',
  faint: 'rgba(42,38,32,0.4)',
  rule: 'rgba(42,38,32,0.16)',
  ruleLight: 'rgba(42,38,32,0.1)',
  accent: '#E85435',
}

const CAT_META: Record<string, { label: string; color: string }> = {
  pillar: { label: 'Pillar Guides', color: '#E85435' },
  guide: { label: 'Guides', color: '#1d2088' },
  science: { label: 'Science', color: '#0F6E56' },
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'pillar', label: 'Pillar Guides' },
  { key: 'guide', label: 'Guides' },
  { key: 'science', label: 'Science' },
]

const SECTION_ORDER = ['pillar', 'guide', 'science']

const disp = "'Space Grotesk', sans-serif"
const sans = "'Space Grotesk', -apple-system, sans-serif"

function fmt(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function Kicker({ cat }: { cat: string }) {
  const m = CAT_META[cat]
  return (
    <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: m?.color ?? C.accent }}>
      {m?.label ?? cat}
    </span>
  )
}

export function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState('all')

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: posts.length }
    for (const p of posts) c[p.category] = (c[p.category] ?? 0) + 1
    return c
  }, [posts])

  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active)

  return (
    <>
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
              className="patho-chip"
              style={{
                fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '7px 15px', borderRadius: 100, cursor: 'pointer',
                border: on ? `1px solid ${C.accent}` : `1px solid ${C.rule}`,
                background: on ? C.accent : 'transparent',
                color: on ? '#fff' : C.muted,
                transition: 'all .18s',
              }}
            >
              {f.label}{' '}
              <span style={{ color: on ? 'rgba(255,255,255,0.78)' : C.faint, fontWeight: 700 }}>{counts[f.key] ?? 0}</span>
            </button>
          )
        })}
      </div>

      {active === 'all'
        ? <FrontPage posts={posts} />
        : <SectionList title={CAT_META[active].label} posts={filtered} />}
    </>
  )
}

function FrontPage({ posts }: { posts: BlogPost[] }) {
  const lead = posts[0]
  const latest = posts.slice(1, 5)
  const shown = new Set([lead, ...latest].map(p => p.slug))
  const rest = posts.filter(p => !shown.has(p.slug))

  if (!lead) return null

  return (
    <>
      <div className="patho-lead" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, marginBottom: 48 }}>
        <Link
          href={`/pathoragy/blog/${lead.slug}`}
          className="patho-link patho-lead-story"
          style={{ textDecoration: 'none', color: C.text, paddingRight: 40, borderRight: `1px solid ${C.rule}` }}
        >
          <Kicker cat={lead.category} />
          <h2 className="patho-title" style={{ fontFamily: disp, fontSize: 'clamp(27px,3.2vw,38px)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em', margin: '12px 0 14px' }}>
            {lead.title}
          </h2>
          <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.6, color: C.muted, maxWidth: 560 }}>{lead.excerpt}</p>
          <p style={{ fontFamily: sans, fontSize: 12, color: C.faint, marginTop: 18, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {fmt(lead.date)} &nbsp;·&nbsp; {lead.readTime}
          </p>
        </Link>

        <div className="patho-latest" style={{ paddingLeft: 36 }}>
          <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: `2px solid ${C.text}`, paddingBottom: 8, margin: '0 0 4px' }}>
            Latest
          </p>
          {latest.map((p, i) => (
            <Link
              key={p.slug}
              href={`/pathoragy/blog/${p.slug}`}
              className="patho-link"
              style={{ display: 'block', textDecoration: 'none', color: C.text, padding: '15px 0', borderBottom: i < latest.length - 1 ? `1px solid ${C.ruleLight}` : 'none' }}
            >
              <Kicker cat={p.category} />
              <h3 className="patho-title" style={{ fontFamily: disp, fontSize: 18, fontWeight: 700, lineHeight: 1.22, margin: '5px 0 0' }}>{p.title}</h3>
            </Link>
          ))}
        </div>
      </div>

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
          href={`/pathoragy/blog/${p.slug}`}
          className="patho-link"
          style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, padding: '17px 0', borderBottom: i < posts.length - 1 ? `1px solid ${C.ruleLight}` : 'none', textDecoration: 'none', color: C.text }}
        >
          <span className="patho-title" style={{ fontFamily: disp, fontSize: 'clamp(18px,2.1vw,21px)', fontWeight: 600, lineHeight: 1.28 }}>{p.title}</span>
          <span style={{ fontFamily: sans, fontSize: 12, color: C.faint, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{fmt(p.date)}</span>
        </Link>
      ))}
    </section>
  )
}

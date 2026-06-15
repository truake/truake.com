'use client'

import { useMemo, useState } from 'react'
import type { BlogPost } from './posts'
import { FeaturedCard, PostCard } from './post-card'

// Top-level tag classification for the blog index. Maps the post `category`
// onto reader-facing buckets and powers the sticky filter bar.
const FILTERS: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'product', label: 'Brand Guides' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'build-log', label: 'Build Logs' },
]

export function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState('all')

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: posts.length }
    for (const p of posts) c[p.category] = (c[p.category] ?? 0) + 1
    return c
  }, [posts])

  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active)
  const showFeatured = active === 'all'
  const gridPosts = showFeatured ? filtered.slice(1) : filtered

  return (
    <>
      {/* Sticky filter bar — tag classification */}
      <div
        style={{
          position: 'sticky',
          top: 64,
          zIndex: 20,
          background: 'rgba(240,235,227,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          margin: '0 -24px 36px',
          padding: '14px 24px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(42,38,32,0.06)',
        }}
      >
        {FILTERS.map(f => {
          const isActive = active === f.key
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              aria-pressed={isActive}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '8px 16px',
                borderRadius: '100px',
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                border: isActive ? '1px solid #1B8BF5' : '1px solid rgba(42,38,32,0.14)',
                background: isActive ? '#1B8BF5' : 'transparent',
                color: isActive ? '#fff' : 'rgba(42,38,32,0.7)',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(27,139,245,0.5)'
                  e.currentTarget.style.color = '#1B8BF5'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(42,38,32,0.14)'
                  e.currentTarget.style.color = 'rgba(42,38,32,0.7)'
                }
              }}
            >
              {f.label}
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(42,38,32,0.35)',
                }}
              >
                {counts[f.key] ?? 0}
              </span>
            </button>
          )
        })}
      </div>

      {/* Featured post (only on the unfiltered view) */}
      {showFeatured && filtered[0] && <FeaturedCard post={filtered[0]} />}

      {/* Grid — CSS fade keyed on the active filter so it replays on change,
          and is visible without JS (no hydration-gated opacity). */}
      <div
        key={active}
        className="blog-grid-fade"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {gridPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {gridPosts.length === 0 && (
        <p style={{ textAlign: 'center', color: 'rgba(42,38,32,0.4)', padding: '48px 0' }}>
          Nothing here yet.
        </p>
      )}
    </>
  )
}

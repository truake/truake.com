'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

export type SceneGalleryItem = {
  slug: string
  title: string
  preset?: number
  categoryId: 'edc' | 'wimb' | 'ootd'
  categoryLabel: string
  coverSrc: string
  excerpt?: string
}

const C = {
  text: '#2A2620',
  muted: 'rgba(42,38,32,0.62)',
  rule: 'rgba(42,38,32,0.16)',
  orange: '#F0522C',
}

const CAT_ACCENT: Record<string, string> = {
  edc: '#1B8BF5',
  wimb: '#F0522C',
  ootd: '#1A8F4C',
}

const play = "var(--font-display), 'Playfair Display', Georgia, serif"
const sans = "var(--font-syne), -apple-system, sans-serif"

const PAGE_SIZE = 12

export function SceneSeriesGallery({ items }: { items: SceneGalleryItem[] }) {
  const [filter, setFilter] = useState<'all' | 'edc' | 'wimb' | 'ootd'>('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (filter === 'all') return items
    return items.filter((item) => item.categoryId === filter)
  }, [items, filter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const counts = useMemo(() => ({
    all: items.length,
    edc: items.filter((i) => i.categoryId === 'edc').length,
    wimb: items.filter((i) => i.categoryId === 'wimb').length,
    ootd: items.filter((i) => i.categoryId === 'ootd').length,
  }), [items])

  const handleFilter = (next: 'all' | 'edc' | 'wimb' | 'ootd') => {
    setFilter(next)
    setPage(1)
  }

  return (
    <div>
      <style>{`
        .scene-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 767px) {
          .scene-gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .scene-gallery-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border: 1px solid rgba(42,38,32,0.16);
          background: rgba(255,255,255,0.45);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .scene-gallery-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(42,38,32,0.08);
        }
      `}</style>

      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
        {(
          [
            { id: 'all', label: `All Scenes (${counts.all})` },
            { id: 'edc', label: `EDC (${counts.edc})` },
            { id: 'wimb', label: `WIMB (${counts.wimb})` },
            { id: 'ootd', label: `OOTD (${counts.ootd})` },
          ] as const
        ).map((tab) => {
          const active = filter === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleFilter(tab.id)}
              style={{
                fontFamily: sans,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '9px 16px',
                cursor: 'pointer',
                border: active ? `1px solid ${C.text}` : `1px solid ${C.rule}`,
                background: active ? C.text : 'rgba(255,255,255,0.4)',
                color: active ? '#FAF7F2' : C.text,
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Responsive 3-col Desktop / 1-col Mobile Grid */}
      <div className="scene-gallery-grid">
        {pageItems.map((item) => {
          const accent = CAT_ACCENT[item.categoryId] ?? C.orange
          return (
            <Link
              key={item.slug}
              href={`/diffr/blog/${item.slug}`}
              className="scene-gallery-card"
            >
              <div style={{ aspectRatio: '16 / 9', width: '100%', overflow: 'hidden', background: '#EDE8DF' }}>
                <img
                  src={item.coverSrc}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{
                    fontFamily: sans,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: accent,
                  }}>
                    {item.categoryId.toUpperCase()}
                  </span>
                  {item.preset && (
                    <span style={{ fontFamily: sans, fontSize: 11, color: C.muted }}>
                      Preset {item.preset}
                    </span>
                  )}
                </div>
                <h2 style={{
                  fontFamily: play,
                  fontSize: 19,
                  fontWeight: 700,
                  lineHeight: 1.28,
                  color: C.text,
                  margin: '0 0 8px',
                }}>
                  {item.title}
                </h2>
                {item.excerpt && (
                  <p style={{
                    fontFamily: play,
                    fontSize: 14,
                    lineHeight: 1.48,
                    color: C.muted,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {item.excerpt}
                  </p>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Scene pagination"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            marginTop: 40,
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => {
              setPage((p) => Math.max(1, p - 1))
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{
              fontFamily: sans,
              fontSize: 12,
              fontWeight: 600,
              padding: '8px 14px',
              border: `1px solid ${C.rule}`,
              background: 'rgba(255,255,255,0.45)',
              color: currentPage <= 1 ? C.muted : C.text,
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
            }}
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((p) => {
            const active = p === currentPage
            return (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setPage(p)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                style={{
                  fontFamily: sans,
                  fontSize: 12,
                  fontWeight: 700,
                  minWidth: 36,
                  padding: '8px 12px',
                  border: active ? `1px solid ${C.orange}` : `1px solid ${C.rule}`,
                  background: active ? C.orange : 'rgba(255,255,255,0.45)',
                  color: active ? '#FFF' : C.text,
                  cursor: 'pointer',
                }}
              >
                {p}
              </button>
            )
          })}

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => {
              setPage((p) => Math.min(totalPages, p + 1))
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{
              fontFamily: sans,
              fontSize: 12,
              fontWeight: 600,
              padding: '8px 14px',
              border: `1px solid ${C.rule}`,
              background: 'rgba(255,255,255,0.45)',
              color: currentPage >= totalPages ? C.muted : C.text,
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
            }}
          >
            Next →
          </button>
        </nav>
      )}
    </div>
  )
}

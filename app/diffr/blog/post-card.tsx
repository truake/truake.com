'use client'

import Link from 'next/link'
import type { BlogPost } from './posts'

const categoryLabel: Record<string, string> = {
  'build-log': 'Build Log',
  'strategy': 'Strategy',
  'product': 'Product',
}

const categoryColor: Record<string, string> = {
  'build-log': '#13ae67',
  'strategy': '#1d2088',
  'product': '#7c6af7',
}

export function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/diffr/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '40px' }}>
      <article
        className="blog-featured-card"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '40px',
          transition: 'border-color 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(19,174,103,0.4)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{
            background: `${categoryColor[post.category]}22`,
            color: categoryColor[post.category],
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '100px',
            border: `1px solid ${categoryColor[post.category]}44`,
          }}>
            {categoryLabel[post.category]}
          </span>
          <span style={{ color: 'rgba(232,232,232,0.4)', fontSize: '13px' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            {' · '}{post.readTime}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(22px, 3vw, 30px)',
          fontWeight: 700, lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: '#e8e8e8', marginBottom: '16px',
        }}>
          {post.title}
        </h2>
        <p style={{ color: 'rgba(232,232,232,0.6)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px', maxWidth: '680px' }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <span key={tag} style={{
              color: 'rgba(232,232,232,0.4)', fontSize: '12px',
              background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '100px',
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/diffr/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          padding: '28px',
          height: '100%',
          transition: 'border-color 0.2s, background 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(19,174,103,0.3)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{
            background: `${categoryColor[post.category]}22`,
            color: categoryColor[post.category],
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '3px 8px', borderRadius: '100px',
            border: `1px solid ${categoryColor[post.category]}44`,
          }}>
            {categoryLabel[post.category]}
          </span>
        </div>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '18px', fontWeight: 700, lineHeight: 1.3,
          letterSpacing: '-0.02em',
          color: '#e8e8e8', marginBottom: '12px',
        }}>
          {post.title}
        </h2>
        <p style={{ color: 'rgba(232,232,232,0.55)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
          {post.excerpt}
        </p>
        <p style={{ color: 'rgba(232,232,232,0.35)', fontSize: '12px' }}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          {' · '}{post.readTime}
        </p>
      </article>
    </Link>
  )
}

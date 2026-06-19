import { getAllPosts } from '../posts'

// Static RSS 2.0 feed for the Diffr blog, generated at build from posts.ts.
// Discoverable via <link rel="alternate" type="application/rss+xml"> on the
// blog index and a visible "RSS" link in the feed footer.
export const dynamic = 'force-static'

const SITE = 'https://truake.com'
const BLOG = `${SITE}/diffr/blog`

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function rfc822(date: string): string {
  return new Date(`${date}T08:00:00Z`).toUTCString()
}

export async function GET() {
  const posts = getAllPosts()

  const items = posts
    .map((p) => {
      const url = `${BLOG}/${p.slug}`
      const desc = p.excerpt || p.description || ''
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <description>${esc(desc)}</description>
    </item>`
    })
    .join('\n')

  const lastBuild = posts.length ? rfc822(posts[0].date) : rfc822('2026-06-19')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Diffr Blog</title>
    <link>${BLOG}</link>
    <atom:link href="${BLOG}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Beginner brand guides, build logs, and shopping psychology from the team building Diffr — one good brand per slot.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

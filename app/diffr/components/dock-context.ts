import { BLOG_SLUG_TO_START } from '../blog-slug-maps'

export const APP_STORE_ID = '6772870733'
export const APP_STORE_BASE = `https://apps.apple.com/us/app/diffr/id${APP_STORE_ID}`

export type DockMode = 'kit-blog' | 'kit-start' | 'app-only'

export type DockContext = {
  mode: DockMode
  startSlug: string | null
  kitPath: string | null
  kitUrl: string | null
  phoneUrl: string
  appStoreUrl: string
  kicker: string
  title: string
  ctaLabel: string
  ctaHref: string
  ctaExternal: boolean
}

function appStoreUrl(medium: string, content: string): string {
  const params = new URLSearchParams({
    utm_source: 'truake',
    utm_medium: medium,
    utm_campaign: 'app_cta',
    utm_content: content,
  })
  return `${APP_STORE_BASE}?${params.toString()}`
}

export function appleItunesApp(appArgument?: string): string {
  return appArgument
    ? `app-id=${APP_STORE_ID}, app-argument=${appArgument}`
    : `app-id=${APP_STORE_ID}`
}

export function resolveDockContext(pathname: string): DockContext {
  const path = pathname.replace(/\/$/, '') || '/'
  const blogMatch = path.match(/^\/diffr\/blog\/([^/]+)$/)
  const startMatch = path.match(/^\/diffr\/start\/([^/]+)$/)

  const startFromBlog = blogMatch ? BLOG_SLUG_TO_START[blogMatch[1]] ?? null : null
  const startSlug = startFromBlog ?? startMatch?.[1] ?? null
  const kitPath = startSlug ? `/diffr/start/${startSlug}` : null
  const kitUrl = kitPath ? `https://truake.com${kitPath}` : null
  const content = startSlug ?? blogMatch?.[1] ?? startMatch?.[1] ?? 'site'
  const store = appStoreUrl('sticky_dock', content)

  if (startFromBlog && kitPath && kitUrl) {
    return {
      mode: 'kit-blog',
      startSlug,
      kitPath,
      kitUrl,
      phoneUrl: kitUrl,
      appStoreUrl: store,
      kicker: 'This kit',
      title: 'Open the interactive Scene',
      ctaLabel: 'Open kit',
      ctaHref: kitPath,
      ctaExternal: false,
    }
  }

  if (startMatch && kitUrl) {
    return {
      mode: 'kit-start',
      startSlug,
      kitPath,
      kitUrl,
      phoneUrl: kitUrl,
      appStoreUrl: store,
      kicker: 'iPhone app',
      title: 'Take this kit with you',
      ctaLabel: 'App Store',
      ctaHref: store,
      ctaExternal: true,
    }
  }

  return {
    mode: 'app-only',
    startSlug: null,
    kitPath: null,
    kitUrl: null,
    phoneUrl: store,
    appStoreUrl: store,
    kicker: 'iPhone app',
    title: 'Build your kit in Diffr',
    ctaLabel: 'App Store',
    ctaHref: store,
    ctaExternal: true,
  }
}

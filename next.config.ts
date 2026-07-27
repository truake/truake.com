import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Serve AVIF (then WebP) instead of the source JPEGs — the hero phone
    // screenshot is the LCP element on mobile; AVIF cuts it ~30% over WebP.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
        ],
      },
      // Dynamic OG share cards — crawled via og:image meta, not indexable content.
      // Social bots are explicitly allowed in robots.ts; X-Robots-Tag keeps Google
      // from indexing the PNG endpoint in Search.
      {
        source: "/diffr/blog/:slug/og",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400",
          },
        ],
      },
      // Baked share cards — social crawlers fetch these via twitter:image / og:image.
      {
        source: "/diffr/blog/share/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/og/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

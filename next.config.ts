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
      {
        source: "/diffr/blog/:slug/og",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

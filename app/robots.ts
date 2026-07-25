import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/diffr/blog/*/og"],
    },
    sitemap: "https://truake.com/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";
import { getAllPosts as getDiffrPosts } from "./diffr/blog/posts";
import { getAllPosts as getPathoraGyPosts } from "./pathoragy/blog/posts";
import { getAllGuides, toUrlSlug } from "./diffr/start/lib";
import { START_SLUGS_WITH_BLOG_TWIN } from "./diffr/blog-slug-maps";
import { SITEMAP_EXCLUDE_SLUGS } from "./seo-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const diffrBlogPosts = getDiffrPosts()
    .filter((post) => !SITEMAP_EXCLUDE_SLUGS.has(post.slug))
    .map((post) => ({
    url: `https://truake.com/diffr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.slug.endsWith("-brand-guide") ? 0.85 : 0.7,
  }));

  const pathBlogPosts = getPathoraGyPosts().map((post) => ({
    url: `https://truake.com/pathoragy/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.category === "pillar" ? 0.85 : 0.75,
  }));

  // Diffr Beginner Starter Guides — dynamically fetched from Supabase
  let starterGuidePages: MetadataRoute.Sitemap = [];
  try {
    const guides = await getAllGuides();
    starterGuidePages = guides
      .filter((guide) => !START_SLUGS_WITH_BLOG_TWIN.has(toUrlSlug(guide.domain_slug)))
      .map((guide) => ({
      url: `https://truake.com/diffr/start/${toUrlSlug(guide.domain_slug)}`,
      lastModified: new Date(guide.generated_at),
      changeFrequency: "weekly" as const,
      priority: 0.88,
    }));
  } catch {
    // Non-fatal: sitemap still works without starter guide pages
  }

  return [
    {
      url: "https://truake.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://truake.com/diffr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://truake.com/diffr/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://truake.com/diffr/blog/behind-the-build",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: "https://truake.com/diffr/blog/behind-the-contract",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: "https://truake.com/diffr/start",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.90,
    },
    ...starterGuidePages,
    {
      url: "https://truake.com/pathoragy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://truake.com/pathoragy/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...diffrBlogPosts,
    ...pathBlogPosts,
  ];
}

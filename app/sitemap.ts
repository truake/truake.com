import type { MetadataRoute } from "next";
import { getAllPosts as getDiffrPosts } from "./diffr/blog/posts";
import { getAllPosts as getPathoraGyPosts } from "./pathoragy/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const diffrBlogPosts = getDiffrPosts().map((post) => ({
    url: `https://truake.com/diffr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pathBlogPosts = getPathoraGyPosts().map((post) => ({
    url: `https://truake.com/pathoragy/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.category === "pillar" ? 0.85 : 0.75,
  }));

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

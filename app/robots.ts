import type { MetadataRoute } from "next";

/** Social crawlers need blog OG PNG routes for twitter:card previews. */
const SOCIAL_BOTS = [
  "Twitterbot",
  "facebookexternalhit",
  "Facebot",
  "LinkedInBot",
  "Slackbot",
  "Slackbot-LinkExpanding",
  "Discordbot",
  "TelegramBot",
  "WhatsApp",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SOCIAL_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/diffr/blog/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/diffr/blog/*/og"],
      },
    ],
    sitemap: "https://truake.com/sitemap.xml",
  };
}

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
      // Social crawlers must fetch HTML *and* og:image assets (/og/, /diffr/blog/share/, etc.).
      // A narrow Allow: /diffr/blog/ blocks /og/*.png — X Card Validator warns and skips the image.
      ...SOCIAL_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
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

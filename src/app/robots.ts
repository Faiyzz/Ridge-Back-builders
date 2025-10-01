// src/app/robots.ts
import { MetadataRoute } from "next";

// Prefer an env; never include a trailing slash
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep crawlers out of server endpoints and any private areas
        disallow: [
          "/api/",
          "/api/*",
          "/private",
          "/private/*",
          "/_next", // Next.js internals
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

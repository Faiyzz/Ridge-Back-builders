// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { slugify } from "@/lib/slug";
// Your blogs live here per screenshot
import { BLOGS } from "./data";

// Prefer an env; never include a trailing slash
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";

// Helper to coerce a valid date
const asDate = (d?: string | number | Date) => {
  try {
    return d ? new Date(d) : new Date();
  } catch {
    return new Date();
  }
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1) Static routes that exist in your tree
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // 2) Dynamic blog routes from your data.ts
  type Blog = {
    id: string | number;
    title?: string;
    slug?: string;
    updatedAt?: string | number | Date;
  };

  const blogRoutes: MetadataRoute.Sitemap = (BLOGS as Blog[]).map((b) => {
    const slug = b.slug ?? slugify(b.title ?? String(b.id));
    return {
      url: `${SITE_URL}/blogs/${slug}`,
      lastModified: asDate(b.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}

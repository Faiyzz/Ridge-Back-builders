// app/sitemap.ts
import type { MetadataRoute } from "next";
import { BLOGS } from "./data";
import { slugify } from "@/lib/slug";

// Minimal shape needed for sitemap generation
type BlogForMap = {
  id: number | string;
  title: string;
  slug?: string;
  updatedAt?: string | Date;
  publishedAt?: string | Date;
};

// Type guard without `any`
function hasSlug(x: unknown): x is { slug: string } {
  return (
    typeof x === "object" &&
    x !== null &&
    "slug" in x &&
    typeof (x as { slug: unknown }).slug === "string" &&
    (x as { slug: string }).slug.length > 0
  );
}

function toDate(d?: string | Date): Date {
  if (!d) return new Date();
  return typeof d === "string" ? new Date(d) : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/projects",
    "/blogs",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  // Treat BLOGS as the minimal shape we need here
  const BLOG_LIST = BLOGS as readonly BlogForMap[];

  // Blogs (use slug if present, else derive from title)
  const blogPages: MetadataRoute.Sitemap = BLOG_LIST.map((b) => {
    const computedSlug =
      hasSlug(b) && b.slug ? b.slug : slugify(b.title ?? String(b.id));
    const lastModified = toDate(b.updatedAt ?? b.publishedAt ?? new Date());

    return {
      url: `${baseUrl}/blogs/${computedSlug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  // Projects root
  const projectPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogPages, ...projectPages];
}

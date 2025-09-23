import type { MetadataRoute } from "next";
import { BLOGS } from "./data";           
import { slugify } from "@/lib/slug";

function hasSlug(x: unknown): x is { slug: string } {
  return typeof (x as any)?.slug === "string" && (x as any).slug.length > 0;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"; 

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    "", "/about", "/services", "/projects", "/blogs", "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  // Blogs (use slug if present, else derive from title)
  const blogPages: MetadataRoute.Sitemap = BLOGS.map((b) => {
    const computedSlug = hasSlug(b) ? b.slug : slugify(b.title ?? String((b as any).id));
    const lastModSrc = (b as any).updatedAt ?? (b as any).publishedAt ?? new Date();
    const lastModified = typeof lastModSrc === "string" ? new Date(lastModSrc) : lastModSrc;

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

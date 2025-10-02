// app/blogs/page.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Metadata } from "next";
import { BLOGS } from "../data";
import { slugify } from "@/lib/slug";
import ClientSearch from "../components/ClientSearch";

const ACCENT = "#FFE241";

type BlogImage = { src: string; alt?: string };
type BlogBanner = { image?: BlogImage };
type Blog = {
  id: string | number;
  title: string;
  slug?: string;
  ogImage?: string;
  banner?: BlogBanner;
  excerpt?: string;
};

type Q = { q?: string | string[] };

// ======================
// Metadata (Server Component)
// ======================
export const metadata: Metadata = {
  title: "Blogs | Construction & Remodeling Insights",
  description:
    "Expert blogs on renovations, structural repair, and materials—written to help homeowners and investors make durable, high-value decisions.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blogs | Construction & Remodeling Insights",
    description:
      "Expert blogs on renovations, structural repair, and materials.",
    url: "/blogs",
    type: "website",
  },
};

// ======================
// JSON-LD Helper
// ======================
function BlogsItemListJsonLd() {
  const items = (BLOGS as readonly Blog[]).map((b: Blog, idx: number) => {
    const slug = b.slug ?? slugify(b.title ?? String(b.id));
    return {
      "@type": "ListItem",
      position: idx + 1,
      url: `/blogs/${slug}`,
      name: b.title,
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ======================
// Page (async, Promise-safe searchParams)
// ======================
export default async function BlogsIndexPage({
  searchParams,
}: {
  searchParams?: Promise<Q>;
}) {
  // resolve promise or fall back to {}
  const sp = (await searchParams) ?? {};
  const qRaw = Array.isArray(sp.q) ? sp.q[0] : sp.q ?? "";
  const q = qRaw.trim();

  const filteredBlogs =
    q.length > 0
      ? (BLOGS as Blog[]).filter((b) =>
          (b.title || "").toLowerCase().includes(q.toLowerCase())
        )
      : (BLOGS as Blog[]) ?? [];

  return (
    <main className="min-h-screen w-full bg-white">
      <section className="relative isolate">
        {/* ✅ fixed: correct Tailwind class syntax for height */}
        <div className="relative h-[min(100svh,900px)] w-full overflow-hidden bg-white">
          <Image
            src="/images/c1.jpg"
            alt="Construction site background image"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[.6]"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/45" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-b from-transparent via-white/25 to-white" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[clamp(5rem,30vh,18rem)]">
          <header className="mx-auto max-w-6xl px-4 text-center text-white">
            <h1 className="text-xl font-extrabold tracking-tight md:text-7xl md:-mt-65">
              Construction{" "}
              <span className="relative inline-block">
                <span style={{ color: ACCENT }}>Insights & Blogs</span>
                <span
                  className="absolute left-0 right-0 -bottom-2 h-0.5"
                  style={{ background: ACCENT }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-7xl text-m text-white/90 md:text-m">
              Discover expert tips, industry trends, and practical guides on
              building, remodeling, and repairs. From residential projects to
              commercial construction, our blogs help you make informed
              decisions that add safety, durability, and long-term value to
              every structure.
            </p>

            {/* 🔁 ONLY change: replace your form with the client-side search */}
            <ClientSearch initialValue={q} />
          </header>
        </div>
      </section>

      <section
        id="articles"
        aria-labelledby="articles-heading"
        className="relative z-20 -mt-[clamp(8rem,12vh,14rem)] pb-28 pt-4"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="articles-heading" className="sr-only">
            Articles
          </h2>

          {/* Mobile horizontal scroller */}
          <div
            className={[
              "md:hidden",
              "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory",
              "px-1 -mx-1 pb-2",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            ].join(" ")}
          >
            {filteredBlogs.map((b) => {
              const imgSrc =
                b.ogImage ?? b.banner?.image?.src ?? "/placeholder-hero.jpg";
              const imgAlt = b.banner?.image?.alt ?? b.title ?? "Blog cover";
              const slug = b.slug ?? slugify(b.title ?? String(b.id));
              const href = `/blogs/${slug}`;

              return (
                <article
                  key={b.id}
                  className={clsx(
                    "group shrink-0 snap-center w-[85%] first:ml-3 last:mr-3",
                    "relative overflow-hidden rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 bg-transparent"
                  )}
                >
                  <div className="relative h-[22rem] w-full">
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 85vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
                  </div>

                  <div className="absolute inset-x-2 bottom-2">
                    <div className="rounded-xl bg-neutral-900/60 p-4 text-white backdrop-blur-sm ring-1 ring-white/10 shadow-md">
                      <h3 className="text-[13px] font-extrabold leading-snug">
                        <Link
                          href={href}
                          aria-label={`Read blog: ${b.title}`}
                          className="hover:underline"
                        >
                          {b.title}
                        </Link>
                      </h3>

                      {b.excerpt ? (
                        <p className="mt-1 text-[11px] leading-snug text-white/85 line-clamp-2">
                          {b.excerpt}
                        </p>
                      ) : null}

                      <Link
                        href={href}
                        className="mt-2 inline-flex items-center text-[11px] font-semibold text-[#FFD333]"
                        aria-label={`Read more about ${b.title}`}
                      >
                        Read More <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Desktop grid */}
          <div className="hidden grid-cols-2 gap-7 md:grid lg:grid-cols-3">
            {filteredBlogs.map((b) => {
              const imgSrc =
                b.ogImage ?? b.banner?.image?.src ?? "/placeholder-hero.jpg";
              const imgAlt = b.banner?.image?.alt ?? b.title ?? "Blog cover";
              const slug = b.slug ?? slugify(b.title ?? String(b.id));
              const href = `/blogs/${slug}`;

              return (
                <article
                  key={b.id}
                  className="group relative overflow-hidden rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 bg-transparent"
                >
                  <div className="relative h-[30rem] lg:h-[22rem] w-full">
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
                  </div>

                  <div className="absolute inset-x-3 bottom-3">
                    <div className="rounded-[14px] bg-neutral-900/60 p-5 text-white backdrop-blur-sm ring-1 ring-white/10 shadow-md">
                      <h3 className="text-[14px] font-extrabold leading-snug">
                        <Link
                          href={href}
                          aria-label={`Read blog: ${b.title}`}
                          className="hover:underline"
                        >
                          {b.title}
                        </Link>
                      </h3>

                      {b.excerpt ? (
                        <p className="mt-1 text-[12px] leading-snug text-white/85 line-clamp-2">
                          {b.excerpt}
                        </p>
                      ) : null}

                      <Link
                        href={href}
                        className="mt-2 inline-flex items-center text-[12px] font-semibold text-[#FFD333]"
                        aria-label={`Read more about ${b.title}`}
                      >
                        Read More <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredBlogs.length === 0 && (
            <p className="mt-10 text-center text-gray-600">
              No blogs found for <span className="font-semibold">{q}</span>
            </p>
          )}
        </div>

        {/* JSON-LD */}
        <BlogsItemListJsonLd />
      </section>
    </main>
  );
}

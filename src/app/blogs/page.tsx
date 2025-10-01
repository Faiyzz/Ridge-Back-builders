import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Metadata } from "next";
import { BLOGS } from "../data";
import { slugify } from "@/lib/slug";
const ACCENT = "#FFE241";
// ✅ Types (same as yours)
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

const GOLD_TEXT =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)] bg-clip-text text-transparent";

// ✅ Keep metadata here (Server Component)
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

// 🔎 Server-side search using URL query (?q=...)
export default function BlogsIndexPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const q = (searchParams?.q ?? "").trim();
  const filteredBlogs = q
    ? (BLOGS as Blog[]).filter((b) =>
        (b.title || "").toLowerCase().includes(q.toLowerCase())
      )
    : (BLOGS as Blog[]) ?? [];

  return (
    <main className="min-h-screen w-full bg-white">
      <section className="relative isolate">
        <div className="relative h=[min(100svh,900px)] h-[min(100svh,900px)] w-full overflow-hidden bg-white">
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
            {/* <h1 className="text-xl font-extrabold tracking-tight md:text-7xl md:-mt-65">
              Construction {""}
              <span className={GOLD_TEXT}>Insights & Blogs</span>
              <span
                className="absolute left-0 right-0 -bottom-2 h-0.5 "
                style={{ background: ACCENT }}
                aria-hidden="true"
              />
            </h1> */}
            <h1 className="text-xl font-extrabold tracking-tight md:text-7xl md:-mt-65">
              Construction{" "}
              <span className="relative inline-block">
                <span style={{ color: ACCENT }}>Insights & Blogs</span>
                {/* yellow underline */}
                <span
                  className="absolute left-0 right-0 -bottom-2 h-0.5 "
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

            {/* 🔎 Glassy, rounded-full search with icon */}
            <form
              action="/blogs"
              method="get"
              className="mt-6 w-full max-w-xl mx-auto"
              role="search"
              aria-label="Search blogs"
            >
              <div
                className={[
                  "relative group",
                  // nice soft glow on focus
                  "",
                ].join(" ")}
              >
                {/* Search icon (inline SVG to keep Server Component) */}
                <span className="pointer-events-none absolute left-4 inset-y-0 flex items-center opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/80"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>

                <input
                  type="text"
                  name="q"
                  defaultValue={q}
                  placeholder="Search blogs by title…"
                  className={[
                    "w-full rounded-full",
                    // glass effect
                    "bg-white/10 backdrop-blur-xl",
                    // subtle inner highlight + outer shadow
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_40px_rgba(0,0,0,0.35)]",
                    // border/ring that brightens on focus
                    "ring-1 ring-white/20 focus:ring-2 focus:ring-yellow-300/60",
                    // spacing to make room for icon/clear
                    "pl-12 pr-20 py-3",
                    "text-sm md:text-base text-white placeholder:text-white/70",
                    "outline-none transition-all duration-300",
                  ].join(" ")}
                />

                {/* Clear button when q exists */}
                {q && (
                  <Link
                    href="/blogs"
                    aria-label="Clear search"
                    className={[
                      "absolute right-2 inset-y-0 my-auto h-9 px-3 rounded-full",
                      "text-xs font-medium",
                      "bg-white/20 hover:bg-white/30 text-white",
                      "backdrop-blur-md ring-1 ring-white/25",
                      "flex items-center transition-colors",
                    ].join(" ")}
                  >
                    Clear
                  </Link>
                )}

                {/* Decorative ring (subtle) */}
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
              </div>
            </form>
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

        {/* JSON-LD for ItemList */}
        <BlogsItemListJsonLd />
      </section>
    </main>
  );
}

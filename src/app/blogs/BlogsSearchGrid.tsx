"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { slugify } from "@/lib/slug";

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

// visual tokens
const GOLD = "#FFD333";
const GOLD_TEXT =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)] bg-clip-text text-transparent";

// utils
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, ""); // strip diacritics

function highlight(text: string, query: string) {
  if (!query) return text;
  const nText = normalize(text);
  const nQuery = normalize(query).trim();
  if (!nQuery) return text;

  const parts: React.ReactNode[] = [];
  let i = 0;
  while (i < text.length) {
    // find match in the normalized string against the same slice
    const idx = nText.indexOf(nQuery, i);
    if (idx === -1) {
      parts.push(text.slice(i));
      break;
    }
    if (idx > i) parts.push(text.slice(i, idx));
    parts.push(
      <mark
        key={`${idx}-${nQuery}`}
        className="rounded px-0.5 py-0 bg-yellow-300/60 text-black"
      >
        {text.slice(idx, idx + nQuery.length)}
      </mark>
    );
    i = idx + nQuery.length;
  }
  return <>{parts}</>;
}

export default function BlogsSearchGrid({ blogs }: { blogs: readonly Blog[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQ = searchParams.get("q") ?? "";
  const [q, setQ] = React.useState(initialQ);

  // write q to URL (debounced)
  React.useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (q) params.set("q", q);
      else params.delete("q");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const filtered = React.useMemo(() => {
    if (!q.trim()) return blogs;
    const nq = normalize(q.trim());
    return blogs.filter((b) => {
      const title = normalize(b.title || "");
      const excerpt = normalize(b.excerpt || "");
      return title.includes(nq) || excerpt.includes(nq);
    });
  }, [blogs, q]);

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Search Bar */}
      <div className="mb-6">
        <label
          htmlFor="blog-search"
          className="mb-2 block text-sm font-semibold text-neutral-700"
        >
          Search Blogs
        </label>

        <div
          className={clsx(
            "group relative flex items-center rounded-2xl",
            "bg-white/80 ring-1 ring-neutral-200 backdrop-blur-sm",
            "focus-within:ring-2 focus-within:ring-[--gold]",
            "shadow-[0_6px_20px_rgba(0,0,0,.08)]"
          )}
          style={
            {
              // custom property used in ring color
              ["--gold" as string]: GOLD,
            } as React.CSSProperties
          }
        >
          {/* icon */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="ml-3 h-5 w-5 opacity-70"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23A6.5 6.5 0 1 0 9.5 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.49 21.49 20 15.5 14zm-6 0A4.5 4.5 0 1 1 14 9.5 4.505 4.505 0 0 1 9.5 14z"
            />
          </svg>

          <input
            id="blog-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “foundation repair”, “kitchen remodel”, “structural cracks”…"
            className={clsx(
              "w-full bg-transparent px-3 py-3 outline-none",
              "text-[15px] md:text-base"
            )}
            aria-label="Search blogs"
            autoComplete="off"
          />

          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              className="mr-2 rounded-md px-2 py-1 text-xs font-medium text-neutral-600 hover:text-black"
              aria-label="Clear search"
              title="Clear"
            >
              Clear
            </button>
          )}
        </div>

        {/* tiny helper row */}
        <div className="mt-2 flex items-center justify-between text-xs text-neutral-600">
          <span>
            <span className={GOLD_TEXT}>{filtered.length}</span> result
            {filtered.length === 1 ? "" : "s"}
          </span>
          <span>
            Press <kbd className="rounded border px-1">/</kbd> to focus
          </span>
        </div>
      </div>

      {/* Mobile horizontal scroller */}
      <div
        className={[
          "md:hidden",
          "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory",
          "px-1 -mx-1 pb-2",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
      >
        {filtered.map((b) => {
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
                      {highlight(b.title, q)}
                    </Link>
                  </h3>

                  {b.excerpt ? (
                    <p className="mt-1 text-[11px] leading-snug text-white/85 line-clamp-2">
                      {highlight(b.excerpt, q)}
                    </p>
                  ) : null}

                  <Link
                    href={href}
                    className="mt-2 inline-flex items-center text-[11px] font-semibold"
                    style={{ color: GOLD }}
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
        {filtered.map((b) => {
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
                      {highlight(b.title, q)}
                    </Link>
                  </h3>

                  {b.excerpt ? (
                    <p className="mt-1 text-[12px] leading-snug text-white/85 line-clamp-2">
                      {highlight(b.excerpt, q)}
                    </p>
                  ) : null}

                  <Link
                    href={href}
                    className="mt-2 inline-flex items-center text-[12px] font-semibold"
                    style={{ color: GOLD }}
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

      {/* No results */}
      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed p-8 text-center text-neutral-600">
          No results for <span className="font-semibold">{q}</span>. Try broader
          terms like <span className="italic">“remodel”</span> or{" "}
          <span className="italic">“repair”.</span>
        </div>
      )}
    </div>
  );
}

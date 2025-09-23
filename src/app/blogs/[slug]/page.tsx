// app/blogs/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOGS } from "../../data";
import { slugify } from "@/lib/slug";

export const dynamic = "force-dynamic";
export const dynamicParams = true; // allow any slug at runtime

const ACCENT = "#FFE241";

type WithDesc = { Desc?: { paragraph?: string } };

function findPostBySlug(rawSlug: string) {
  const slug = decodeURIComponent((rawSlug || "").trim().toLowerCase());

  // 1) Exact slug field
  let post =
    BLOGS.find((p: any) => (p.slug || "").toLowerCase() === slug) ||
    // 2) Derived from title (must match index)
    BLOGS.find((p: any) => slugify(p.title ?? String(p.id)) === slug);

  // 3) Fallback: numeric id (in case some old links exist)
  if (!post) {
    const idNum = Number(slug);
    if (!Number.isNaN(idNum)) {
      post = BLOGS.find((p: any) => p.id === idNum);
    }
  }

  return post;
}

// Optional dynamic metadata
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = findPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt ?? "";
  const url = `/blogs/${params.slug}`;
  const ogImage = post.ogImage ?? post.banner?.image?.src ?? "/placeholder-hero.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: ogImage }],
    },
  };
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  if (!post) return notFound();

  const title = post.seoTitle ?? post.title;
  const excerpt = post.seoDescription ?? post.excerpt;
  const author = post.author ?? "Ridgeback Builders";
  const published = post.publishedAt ? new Date(post.publishedAt) : null;

  const heroImage =
    post.banner?.image?.src ?? post.ogImage ?? "/placeholder-hero.jpg";
  const heroAlt = post.banner?.image?.alt ?? post.title;

  const descParagraph = (post as WithDesc).Desc?.paragraph;

  return (
    <main className="relative isolate min-h-screen bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.28) , rgba(0,0,0,0.12) 18%, rgba(0,0,0,0.04) 32%, rgba(0,0,0,0.04) 68%, rgba(0,0,0,0.12) 82%, rgba(0,0,0,0.28))",
        }}
      />

      <div className="relative z-10">
        <section className="mx-auto max-w-4xl px-4 py-10 md:py-24">
          <h1 className="text-[28px] leading-tight md:text-[44px] md:leading-[1.1] font-extrabold tracking-tight">
            {title}
          </h1>

          {excerpt && (
            <p className="mt-3 max-w-2xl text-sm md:text-[17px] text-black/80">
              {excerpt}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-black/60">
            <span>By {author}</span>
            {published && (
              <time dateTime={published.toISOString()}>
                {published.toLocaleDateString()}
              </time>
            )}
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/10">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          {descParagraph && (
            <section className="mx-auto mt-8 max-w-5xl px-2 pb-4">
              <div className="p-2">
                <div className="mt-3 text-sm md:text-[17px] prose max-w-none text-black">
                  <ReactMarkdown>{descParagraph}</ReactMarkdown>
                </div>
              </div>
            </section>
          )}
        </section>

        {post.caseStudy?.paragraph && (
          <section className="mx-auto max-w-4xl px-4 pb-4">
            <div className="rounded-2xl border bg-gray-50 p-6 md:p-8">
              <h2 className="text-lg font-extrabold tracking-tight md:text-3xl">
                Case Study
              </h2>
              <div className="mt-3 text-sm md:text-[17px] prose max-w-none text-black">
                <ReactMarkdown>{post.caseStudy.paragraph}</ReactMarkdown>
              </div>
              {post.caseStudy.bullets?.length ? (
                <ul className="ml-5 mt-2 list-disc space-y-2 text-sm md:text-[17px] text-black/80">
                  {post.caseStudy.bullets.map((b: string, i: number) => (
                    <li key={i}>
                      <ReactMarkdown components={{ p: "span" }}>{b}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        )}

        {post.howWeDoIt?.steps?.length > 0 && (
          <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
            {!!post.howWeDoIt.heading && (
              <h2 className="text-xl font-extrabold tracking-tight md:text-3xl text-black">
                {post.howWeDoIt.heading}
              </h2>
            )}

            <div className="mt-8 space-y-14">
              {post.howWeDoIt.steps.map((step: any, idx: number) => {
                const key = `${step.number ?? "x"}-${step.title}-${idx}`;
                return (
                  <article key={key} className="flex flex-col gap-6">
                    {step.media?.src && (
                      <div className="flex justify-center">
                        <div className="relative w-full h-[200px] md:w-[35rem] md:h-[300px] overflow-hidden rounded-xl ring-1 ring-black/10">
                          <Image
                            src={step.media.src}
                            alt={step.media.alt ?? `${step.title} — example`}
                            fill
                            sizes="(max-width: 768px) 100vw, 560px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex">
                      {step.number !== undefined && (
                        <h2 className="mt-1.5 mr-2" aria-hidden>
                          <span
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full font-bold text-white"
                            style={{ background: ACCENT }}
                          >
                            {step.number}
                          </span>
                        </h2>
                      )}
                      <div>
                        <h3 className="mb-3 text-lg font-extrabold tracking-tight md:text-2xl text-black">
                          {step.title}
                        </h3>
                        {step.summary && (
                          <div className="mb-3 text-sm md:text-[17px] text-black/80">
                            <ReactMarkdown>{step.summary}</ReactMarkdown>
                          </div>
                        )}
                        {step.bullets?.length ? (
                          <ul className="ml-5 list-disc space-y-2 text-sm md:text-[17px] text-black/80">
                            {step.bullets.map((b: string, i: number) => (
                              <li key={i}>
                                <ReactMarkdown components={{ p: "span" }}>
                                  {b}
                                </ReactMarkdown>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        <section id="consult" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border border-yellow-300 bg-yellow-100/70 p-6 md:p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-extrabold tracking-tight md:text-3xl text-black">
              Ready to Start?
            </h3>
            <p className="mt-5 text-sm md:text-[17px] text-black/80 max-w-2xl">
              We blend smart design with technical excellence to build projects
              that last and impress.
            </p>
            <div className="mt-5">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold shadow"
                style={{ background: ACCENT, color: "#1a1a1a" }}
              >
                BOOK FREE CONSULTATION
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/blogs"
              className="rounded-full border border-black/10 px-4 py-2 text-xs text-black/80 hover:bg-black/5"
            >
              ← BACK TO ALL ARTICLES
            </Link>
          </div>

          {post.updatedAt && (
            <p className="mt-6 text-center text-xs text-black/50">
              Last updated: {new Date(post.updatedAt).toLocaleDateString()}
            </p>
          )}
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-12">
          <p className="text-center text-[11px] leading-relaxed text-black/50">
            Serving Lehigh Acres, Fort Myers, Naples, Port Charlotte, Sarasota,
            Tampa, Bradenton, West Palm Beach, Port St. Lucie, and nearby
            cities.
          </p>
        </section>
      </div>
    </main>
  );
}

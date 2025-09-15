import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { BLOGS } from "../../data";

export const dynamic = "force-dynamic";

const ACCENT = "#FFE241";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const post = BLOGS.find((p) => p.id === postId);
  if (!post) return notFound();

  // Derive basics from new structure
  const title = post.seoTitle ?? post.title;
  const excerpt = post.seoDescription ?? post.excerpt;
  const author = post.author ?? "Ridgeback Builders";
  const published = post.publishedAt ? new Date(post.publishedAt) : null;

  // Banner is image-only in your structure
  const heroImage =
    post.banner?.image?.src ?? post.ogImage ?? "/placeholder-hero.jpg";
  const heroAlt = post.banner?.image?.alt ?? post.title;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Title + meta */}
      <section className="mx-auto max-w-4xl px-4 py-10 md:py-24">
        <h1 className="text-[28px] leading-tight md:text-[44px] md:leading-[1.1] font-extrabold tracking-tight">
          {title}
        </h1>

        {excerpt && (
          <p className="mt-3 max-w-2xl text-sm md:text-[17px] text-white/70">
            {excerpt}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
          <span>By {author}</span>
          {published && (
            <time dateTime={published.toISOString()}>
              {published.toLocaleDateString()}
            </time>
          )}
        </div>

        {/* Banner image (image-only per your new structure) */}
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description (single paragraph) */}
        {post.Desc?.paragraph && (
          <section className="mx-auto mt-8 max-w-5xl px-2 pb-4">
            <div className="p-2">
              <div className="mt-3 text-sm md:text-[17px] text-white/80">
                <ReactMarkdown>{post.Desc.paragraph}</ReactMarkdown>
              </div>
            </div>
          </section>
        )}
      </section>

      {/* Case Study (single paragraph) */}
      {post.caseStudy?.paragraph && (
        <section className="mx-auto max-w-4xl px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-lg font-extrabold tracking-tight md:text-3xl">
              Case Study
            </h2>

            {/* Paragraph supports Markdown + line breaks */}
            <div className="mt-3 text-sm md:text-[17px] text-white/80 prose prose-invert max-w-none">
              <ReactMarkdown>{post.caseStudy.paragraph}</ReactMarkdown>
            </div>

            {post.caseStudy.bullets?.length ? (
              <ul className="ml-5 mt-2 list-disc space-y-2 text-sm md:text-[17px] text-white/80">
                {post.caseStudy.bullets.map((b, i) => (
                  <li key={i}>
                    <ReactMarkdown components={{ p: "span" }}>
                      {b}
                    </ReactMarkdown>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      )}

      {/* How We Do It (4 steps) */}
      {post.howWeDoIt?.steps?.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <h2 className="text-xl font-extrabold tracking-tight md:text-3xl">
            {post.howWeDoIt.heading || "How We Do It"}
          </h2>

          <div className="mt-8 space-y-14">
            {post.howWeDoIt.steps.map((step) => (
              <article key={step.number} className="flex flex-col gap-6">
                {/* Step media on top */}
                {step.media?.src && (
                  <div className="flex justify-center">
                    <div className="relative w-full h-[200px] md:w-[35rem] md:h-[300px] overflow-hidden rounded-xl ring-1 ring-white/10">
                      <Image
                        src={step.media.src}
                        alt={step.media.alt ?? `${step.title} — example`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Step content */}
                <div className="flex">
                  <h2 className="mt-1.5 mr-2" aria-hidden>
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full font-bold text-black"
                      style={{ background: ACCENT }}
                    >
                      {step.number}
                    </span>
                  </h2>
                  <div>
                    <h3 className="mb-3 text-lg font-extrabold tracking-tight md:text-2xl">
                      <span className="align-middle">{step.title}</span>
                    </h3>

                    {step.summary && (
                      <div className="mb-3 text-sm md:text-[17px] text-white/80">
                        <ReactMarkdown>{step.summary}</ReactMarkdown>
                      </div>
                    )}

                    {step.bullets?.length ? (
                      <ul className="ml-5 list-disc space-y-2 text-sm md:text-[17px] text-white/80">
                        {step.bullets.map((b, i) => (
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
            ))}
          </div>
        </section>
      )}

      {/* CTA Card */}
      <section id="consult" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col items-center justify-center">
          <h3 className="text-lg font-extrabold tracking-tight md:text-3xl">
            Ready to Start?
          </h3>
          <p className="mt-5 text-sm md:text-[17px] text-white/70">
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

        {/* Back link */}
        <div className="mt-8 flex justify-center">
          <a
            href="/blogs"
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 hover:bg-white/5"
          >
            ← BACK TO ALL ARTICLES
          </a>
        </div>

        {/* Updated info */}
        {post.updatedAt && (
          <p className="mt-6 text-center text-xs text-white/50">
            Last updated: {new Date(post.updatedAt).toLocaleDateString()}
          </p>
        )}
      </section>

      {/* Service areas footer (optional) */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <p className="text-center text-[11px] leading-relaxed text-white/50">
          Serving Lehigh Acres, Fort Myers, Naples, Port Charlotte, Sarasota,
          Tampa, Bradenton, West Palm Beach, Port St. Lucie, and nearby cities.
        </p>
      </section>
    </main>
  );
}

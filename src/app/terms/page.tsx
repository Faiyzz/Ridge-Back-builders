// app/terms-of-service/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

const BRAND = {
  name: "Ridgeback Construction",
  email: "info@ridgebackbuilt.com",
  phone: "(813) 921-1717",
  url: "https://www.ridgebackbuilt.com",
  accent: "#FFE241",
};

const LAST_UPDATED = "2025-09-04";

export const metadata: Metadata = {
  title: "Terms of Service | Ridgeback Construction",
  description:
    "Terms that govern your use of Ridgeback Construction's website and services.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Ridgeback Construction",
    description:
      "The terms that govern your use of Ridgeback Construction's website and services.",
    url: "/terms-of-service",
    siteName: BRAND.name,
    type: "article",
  },
};

export default function TermsOfServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    dateModified: LAST_UPDATED,
    url: `${BRAND.url}/terms-of-service`,
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
      contactPoint: {
        "@type": "ContactPoint",
        email: BRAND.email,
        telephone: BRAND.phone,
        contactType: "customer service",
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* JSON-LD */}
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-10 pt-36">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm md:text-base text-white/70">
          Last updated:{" "}
          <time dateTime={LAST_UPDATED}>
            {new Date(LAST_UPDATED).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <div
          className="mt-6 h-1 w-28 rounded"
          style={{ backgroundColor: BRAND.accent }}
        />
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 pb-24 grid gap-10 md:grid-cols-[260px_minmax(0,1fr)]">
        {/* TOC */}
        <nav className="md:sticky md:top-24 md:self-start rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">
            On this page
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:opacity-80">
                Services
              </a>
            </li>
            <li>
              <a href="#estimates-and-quotes" className="hover:opacity-80">
                Estimates and Quotes
              </a>
            </li>
            <li>
              <a href="#liability" className="hover:opacity-80">
                Liability
              </a>
            </li>
            <li>
              <a href="#contact-information" className="hover:opacity-80">
                Contact Information
              </a>
            </li>
          </ul>
        </nav>

        {/* Article */}
        <article className="prose prose-invert max-w-none">
          <p>
            These Terms of Service (“Terms”) govern your use of {BRAND.name}
            &apos;s services and website. By using our services, you agree to
            these Terms.
          </p>

          <h2 id="services" className="scroll-mt-24">
            Services
          </h2>
          <p>
            {BRAND.name} provides construction and renovation services. All
            services are subject to separate written agreements and contracts.
          </p>

          <h2 id="estimates-and-quotes" className="scroll-mt-24">
            Estimates and Quotes
          </h2>
          <p>
            All estimates and quotes provided are subject to change based on
            project scope, material costs, and other factors. Final pricing will
            be detailed in your service contract.
          </p>

          <h2 id="liability" className="scroll-mt-24">
            Liability
          </h2>
          <p>
            {BRAND.name} is fully licensed and insured. Our liability is limited
            as specified in individual service contracts.
          </p>

          <h2 id="contact-information" className="scroll-mt-24">
            Contact Information
          </h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>

          {/* Contact Card */}
          <div className="mt-4 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-5">
              <div className="text-sm font-medium uppercase tracking-wider">
                {BRAND.name}
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 font-medium hover:opacity-90"
                >
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: BRAND.accent }}
                    aria-hidden
                  />
                  {BRAND.email}
                </a>
                <a
                  href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 font-medium hover:opacity-90"
                >
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: BRAND.accent }}
                    aria-hidden
                  />
                  {BRAND.phone}
                </a>
              </div>
            </div>
            <div
              className="h-1 w-full"
              style={{ backgroundColor: BRAND.accent }}
            />
          </div>
        </article>
      </section>
    </main>
  );
}

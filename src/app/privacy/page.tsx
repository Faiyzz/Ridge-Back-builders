// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

const BRAND = {
  name: "Ridgeback Construction",
  email: "info@ridgebackbuilt.com",
  phone: "(813) 921-1717",
  url: "https://www.ridgebackbuilt.com",
  accent: "#FFE241", // golden yellow
};

const LAST_UPDATED = "2025-09-04"; // YYYY-MM-DD

export const metadata: Metadata = {
  title: "Privacy Policy | Ridgeback Construction",
  description:
    "How Ridgeback Construction collects, uses, and safeguards your information when you visit our website or request a quote.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Ridgeback Construction",
    description:
      "How Ridgeback Construction collects, uses, and safeguards your information.",
    url: "/privacy-policy",
    siteName: BRAND.name,
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    dateModified: LAST_UPDATED,
    url: `${BRAND.url}/privacy-policy`,
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
        id="privacy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pt-46 pb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Privacy Policy
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
              <a href="#intro" className="hover:opacity-80">
                Introduction
              </a>
            </li>
            <li>
              <a href="#information-we-collect" className="hover:opacity-80">
                Information We Collect
              </a>
            </li>
            <li>
              <a
                href="#how-we-use-your-information"
                className="hover:opacity-80"
              >
                How We Use Your Information
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:opacity-80">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Article */}
        <article className="prose prose-invert max-w-none">
          <p id="intro" className="scroll-mt-24">
            {BRAND.name} (“we”, “our,” or “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you visit our website.
          </p>

          <h2 id="information-we-collect" className="scroll-mt-24">
            Information We Collect
          </h2>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you contact us, request a quote, or use our services,
            including:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Project details and requirements</li>
            <li>Communication preferences</li>
          </ul>

          <h2 id="how-we-use-your-information" className="scroll-mt-24">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you project updates and communications</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 id="contact-us" className="scroll-mt-24">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
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

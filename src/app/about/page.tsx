// app/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About RidgebackBuilders — Trusted Residential & Commercial Construction",
  description:
    "Learn about RidgebackBuilders: licensed builders delivering residential & commercial construction, renovations, and structural repairs across Florida.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://www.ridgebackbuilders.com/about",
    siteName: "RidgebackBuilders",
    title: "About RidgebackBuilders — Trusted Residential & Commercial Construction",
    description:
      "Licensed team providing construction, renovations, and structural repair. Built strong, built right.",
    images: ["/og-default.png"],
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  // Minimal breadcrumbs JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ridgebackbuilders.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.ridgebackbuilders.com/about" },
    ],
  };

  // Organization JSON-LD (basic)
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RidgebackBuilders",
    url: "https://www.ridgebackbuilders.com",
    logo: "https://www.ridgebackbuilders.com/logo.png",
    sameAs: [],
  };

  return (
    <>
      <AboutClient />

      {/* JSON-LD */}
      <Script id="about-breadcrumbs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="about-organization" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
    </>
  );
}

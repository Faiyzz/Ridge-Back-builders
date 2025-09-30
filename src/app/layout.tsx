// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FFE241",
};

export const metadata: Metadata = {
  title: {
    default: "General Contractor & Home Builders in Florida",
    template: "%s | Ridgeback Builders",
  },
  description:
    "Florida general contractor for custom home building, kitchen remodeling, home renovations, and residential construction. Book a free consultation.",
  keywords: [
    "General Contractor",
    "custom home construction",
    "home renovations",
    "Florida contractors",
    "Tampa Bay builders",
    "Fort Myers construction",
    "Naples builders",
    "Sarasota renovations",
    "hurricane damage repair",
    "roof replacement",
    "home remodeling",
    "Construction Companies in Florida",
    "residential construction",
    "General Construction",
    "General Contractor in Florida",
    "Florida home builders",
    "Florida home renovations",
    "Florida construction services",
    "General Contractor Near Me",
    "Construction Companies Near Me",
    "Home Builders Near Me",
  ],
  authors: [{ name: "Ridgeback Builders" }],
  creator: "Ridgeback Builders",
  publisher: "Ridgeback Builders",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://www.ridgebackbuilt.com"),
  alternates: { canonical: "https://www.ridgebackbuilt.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ridgebackbuilt.com",
    title: "Ridgeback Builders - Residential Home Construction & Renovations",
    description:
      "Licensed Florida contractors specializing in custom home construction, renovations, and hurricane damage repair in Tampa Bay, Fort Myers, Naples, and Sarasota.",
    siteName: "Ridgeback Builders",
    images: [
      {
        url: "https://www.ridgebackbuilt.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Ridgeback Builders - Professional Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridgeback Builders - Residential Home Construction & Renovations",
    description:
      "Licensed Florida contractors serving Tampa Bay area with custom construction and renovation services.",
    images: ["https://www.ridgebackbuilt.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Zq-2dVD-N1R-DwRCD94XzGSBkyCR21KkDMfKyV5b1nA",
  },
  category: "construction",
  icons: { icon: [{ url: "/favicon.ico" }] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.ridgebackbuilt.com" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ridgeback Builders",
              "description": "Custom home construction, renovations, and project management services in Florida",
              "url": "https://www.ridgebackbuilt.com",
              "logo": "https://www.ridgebackbuilt.com/logo.png",
              "image": "https://www.ridgebackbuilt.com/logo.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "areaServed": [
                { "@type": "City", "name": "Tampa" },
                { "@type": "City", "name": "Fort Myers" },
                { "@type": "City", "name": "Naples" },
                { "@type": "City", "name": "Sarasota" },
                { "@type": "City", "name": "Bradenton" },
                { "@type": "City", "name": "Port St. Lucie" }
              ],
              "serviceType": [
                "Custom Home Construction",
                "Home Renovations",
                "Hurricane Damage Repair",
                "Roof Replacement",
                "Kitchen Remodeling",
                "Bathroom Remodeling",
                "Project Management"
              ],
              "hasCredential": "Licensed Florida Contractor"
            }`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-black antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

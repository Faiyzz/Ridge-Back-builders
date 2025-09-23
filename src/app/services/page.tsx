import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title:
    "Construction Services — Residential, Commercial, Renovation | RidgebackBuilders",
  description:
    "Residential & commercial construction, renovations, structural repair, landscaping, and design consultancy. Built with integrity, safety, and lasting value across Florida.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "https://www.ridgebackbuilders.com/services",
    siteName: "RidgebackBuilders",
    title:
      "Construction Services — Residential, Commercial, Renovation | RidgebackBuilders",
    description:
      "Residential & commercial construction, renovations, structural repair, landscaping, and design consultancy.",
    images: ["/default.png"],
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ServicesClient />;
}

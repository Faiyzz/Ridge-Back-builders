import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

const SITE_URL = "https://www.ridgebackbuilders.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RidgebackBuilders — Remodeling & Renovation Experts",
    template: "%s | RidgebackBuilders",
  },
  description:
    "Florida home remodeling — kitchens, bathrooms, and full-home renovations with craftsmanship you can trust.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "RidgebackBuilders",
    url: SITE_URL,
    title: "RidgebackBuilders — Remodeling & Renovation Experts",
    description:
      "Florida home remodeling — kitchens, bathrooms, and full-home renovations with craftsmanship you can trust.",
    images: ["/default.png"],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

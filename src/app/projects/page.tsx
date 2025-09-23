// app/projects/page.tsx
import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Latest Projects | Ridgeback Builders",
  description:
    "Explore Ridgeback Builders’ latest commercial, residential, renovation, and consultancy projects engineered for quality, efficiency, and long-term value.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Our Latest Projects | Ridgeback Builders",
    description:
      "Explore Ridgeback Builders’ latest commercial, residential, renovation, and consultancy projects.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/images/project.jpg",
        width: 1200,
        height: 630,
        alt: "Our Latest Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Latest Projects | Ridgeback Builders",
    description:
      "A curated look at our builds and consultancy work engineered for quality, efficiency, and lasting value.",
    images: ["/images/project.jpg"],
  },
};

export default function Page() {
  return <ProjectsClient />;
}

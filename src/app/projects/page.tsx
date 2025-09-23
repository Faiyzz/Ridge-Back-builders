"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";

/**
 * DocumentsSection
 * Next.js 15 + Tailwind CSS + TypeScript
 * - Hero with background image, dark overlay, fade to white bottom
 * - Centered hero text (no search bar)
 * - 4 animated cards; first overlaps the hero section
 * - Responsive; hover/tap shadows & motion
 *
 * Place images:
 * public/documents-hero.jpg
 * public/docs/1.jpg
 * public/docs/2.jpg
 * public/docs/3.jpg
 * public/docs/4.jpg
 */

// local hero image in /public
const HERO_BG = "/documents-hero.jpg";

// Toggle to alternate image side per card
const ALTERNATE_LAYOUT = true; // controls L-R-L alternation

// Demo docs (swap with real content)
const docs: Array<{
  id: number;
  index: string;
  title: string;
  excerpt: string;
  tag: string;
  href?: string; // optional link for View Details
  file?: string; // optional PDF path for download
}> = [
  {
    id: 1,
    index: "01",
    title: "Document",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Connection Permit",
    file: "/files/sample-1.pdf",
  },
  {
    id: 2,
    index: "02",
    title: "Design Brief",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tag: "Internal",
    file: "/files/sample-2.pdf",
  },
  {
    id: 3,
    index: "03",
    title: "Safety Checklist",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tag: "HSE",
    file: "/files/sample-3.pdf",
  },
  {
    id: 4,
    index: "04",
    title: "QA Hand‑off",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tag: "Quality",
    file: "/files/sample-4.pdf",
  },
];

export default function DocumentsSection() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
        {/* Background image */}
        <Image
          src={HERO_BG}
          alt="Documents background"
          fill
          priority
          className="object-cover object-center opacity-90"
        />

        {/* Dark overlay + fade to white bottom */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Centered hero text */}
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Our <span className="text-yellow-400">Document</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-balance text-sm/6 text-white/80 sm:text-base/7"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </div>
      </section>

      {/* CARDS */}
      <section className="relative -mt-24 pb-24 pt-6 sm:-mt-28 sm:pt-0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-2">
          {docs.map((d, i) => (
            <DocumentCard
              key={d.id}
              data={d}
              overlap={i === 0}
              // Alternate inner orientation: left, right, left, ...
              reverse={ALTERNATE_LAYOUT ? i % 2 === 1 : false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function DocumentCard({
  data,
  overlap,
  reverse,
}: {
  data: {
    id: number;
    index: string;
    title: string;
    excerpt: string;
    tag: string;
    href?: string;
    file?: string;
  };
  overlap?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group relative isolate overflow-hidden rounded-3xl bg-white/0 shadow-[0_10px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/5 transition-shadow",
        "hover:shadow-[0_22px_60px_rgba(0,0,0,0.2)]",
        overlap ? "sm:col-span-2 sm:-mt-16" : "",
      ].join(" ")}
    >
      <div
        className={[
          "grid h-full grid-cols-1 overflow-hidden rounded-3xl sm:grid-cols-12",
          reverse ? "sm:[direction:rtl]" : "",
        ].join(" ")}
      >
        {/* Top glossy strip */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[6px] bg-gradient-to-r from-cyan-400/60 via-white/60 to-cyan-400/60" />

        {/* Image side */}
        <div className="relative h-80 sm:col-span-6 sm:h-[26rem] lg:h-[28rem]">
          <Image
            src={`/docs/${data.id}.jpg`}
            alt={data.title}
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/25 to-transparent sm:block" />
        </div>

        {/* Content side */}
        <div className="relative flex min-h-80 flex-col justify-start bg-[rgba(96,22,22,0.55)] p-5 text-white backdrop-blur-md sm:col-span-6 sm:p-8">
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-extrabold text-yellow-400 sm:text-4xl">
              {data.index}
            </span>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {data.title}
            </h3>
          </div>
          <div className="mt-3 h-px w-full bg-white/25" />

          <div className="mt-4 space-y-3">
            <p className="text-sm/6 text-white/90 sm:text-base/7">
              {data.excerpt}
            </p>
            <p className="text-sm/6 text-white/90 sm:text-base/7">
              {data.excerpt}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 text-xs font-medium text-white/90">
              <FileText className="h-4 w-4" /> {data.tag}
            </span>
            <motion.a
              href={data.file || "#"}
              download
              rel="noopener"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-md transition hover:bg-white"
            >
              Download PDF <Download className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 ring-2 ring-yellow-400/40 transition-opacity duration-300 group-active:opacity-100" />
    </motion.article>
  );
}

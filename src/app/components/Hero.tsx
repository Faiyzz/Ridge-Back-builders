// app/page.tsx
"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import React, { useEffect, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";

export const metadata: Metadata = {
  title: "Florida Remodeling & Renovation — RidgebackBuilders",
  description:
    "Kitchens, bathrooms, and full-home renovations built to last. Transparent timelines, durable materials, and craftsmanship you can trust in Florida.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.ridgebackbuilders.com/",
    siteName: "RidgebackBuilders",
    title: "Florida Remodeling & Renovation — RidgebackBuilders",
    description:
      "Kitchens, bathrooms, and full-home renovations built to last. Transparent timelines, durable materials, and craftsmanship you can trust.",
    images: ["/default.png"],
    locale: "en_US",
  },
};

export const revalidate = 3600;

type Project = {
  id: number;
  title: string;
  blurb: string;
  priceNote: string;
  img: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Family Home Build",
    blurb:
      "Cozy, light-filled spaces with practical layouts and stress-free project updates.",
    priceNote: "From 50000 per M",
    img: "/images/building.jpg",
  },
  {
    id: 2,
    title: "Modern Duplex",
    blurb:
      "Smart two-unit design that maximizes space, privacy, and rental potential.",
    priceNote: "From 55000 per M",
    img: "/images/modrend.jpg",
  },
  {
    id: 3,
    title: "Quick Renovation",
    blurb:
      "Kitchen, bath, or full-home refresh—clean timelines, clear budgets, great finishes.",
    priceNote: "From 15000 per M",
    img: "/images/quick.jpeg",
  },
];

const GOLD_TEXT =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)] bg-clip-text text-transparent";

const GOLD_TEXT_SHINE = [
  "bg-clip-text text-transparent",
  "[background-image:linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%),linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent)]",
  "[background-size:100%_100%,200%_100%]",
  "[background-position:0%_0%,-200%_0%]",
  "transition-[background-position] duration-1000 ease-out",
  "group-hover:[background-position:0%_0%,200%_0%]",
  "drop-shadow-[0_0_8px_rgba(255,226,65,.45)]",
  "uppercase tracking-wider font-semibold",
].join(" ");

const GOLD_BG =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)]";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.28, ease: EASE },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
  exit: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1 },
  out: {
    opacity: 0.6,
    y: 10,
    scale: 0.995,
    transition: { duration: 0.25, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    transition: { duration: 0.28, ease: EASE },
  },
};

function InOutCard({
  children,
  as: Tag = motion.article,
  className,
}: {
  children: React.ReactNode;
  as?: typeof motion.article;
  className?: string;
}) {
  const controls = useAnimation();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.3, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    controls.start(inView ? "show" : "out");
  }, [inView, controls]);

  return (
    <Tag
      ref={ref}
      className={clsx(
        "transform-gpu will-change-transform will-change-opacity",
        className
      )}
      layout
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={cardVariants}
      whileHover={{ y: -2 }}
    >
      {children}
    </Tag>
  );
}

function ProjectCard({
  p,
  imageHeightClass,
}: {
  p: Project;
  imageHeightClass: string;
}) {
  return (
    <InOutCard
      className={clsx(
        "group relative overflow-visible rounded-[28px]",
        "shadow-[0_18px_60px_-12px_rgba(0,0,0,0.45)]"
      )}
    >
      <div
        className={clsx(
          "relative rounded-[28px] bg-neutral-950/90 ring-1 ring-white/10",
          "transition-transform duration-300"
        )}
      >
        {/* Image block */}
        <div
          className={clsx(
            "relative overflow-hidden rounded-[28px]",
            imageHeightClass
          )}
        >
          <Image
            src={p.img}
            alt={`${p.title} — RidgebackBuilders project`}
            fill
            className="object-cover transform-gpu will-change-transform transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div
            className="pointer-events-none absolute -inset-8 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
            style={{
              background:
                "radial-gradient(600px at 50% 20%, #ffe24133, transparent 60%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/1 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.55),transparent)] opacity-0 transition-all duration-700 group-hover:translate-x-[240%] group-hover:opacity-100"
          />
        </div>

        {/* Floating text panel */}
        <div className="relative -mt-8 px-5 pb-5 sm:px-6 sm:pb-6">
          <div
            className={clsx(
              "mx-auto max-w-[92%] rounded-2xl bg-neutral-900/85",
              "backdrop-blur-md ring-1 ring-white/10",
              "shadow-[0_12px_40px_-18px_rgba(0,0,0,0.9)]"
            )}
          >
            <div
              className="h-[3px] w-14 rounded-full mx-auto mt-4"
              style={{ background: "linear-gradient(90deg,#d4af37,#ffe241)" }}
            />
            <div className="px-5 py-5 text-center sm:px-6 sm:py-6">
              <h3 className="text-lg font-semibold text-white md:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/85 md:text-sm">
                {p.blurb}
              </p>
              <div className="mt-3 flex items-center justify-center">
                <span className={clsx(GOLD_TEXT_SHINE, "text-[12px]")}>
                  {p.priceNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InOutCard>
  );
}

const HomePage = () => {
  const prefersReduced = useReducedMotion();
  const POSTS = useMemo(() => PROJECTS, []);

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "RidgebackBuilders",
    url: "https://www.ridgebackbuilders.com",
    logo: "https://www.ridgebackbuilders.com/images/logo.png",
    areaServed: "Florida, USA",
    telephone: "+1-000-000-0000",
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.ridgebackbuilders.com",
    name: "RidgebackBuilders",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ridgebackbuilders.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.6 }}
      reducedMotion={prefersReduced ? "always" : "user"}
    >
      <main className="min-h-screen w-full bg-white">
        {/* HERO */}
        <section className="relative isolate" aria-label="Hero">
          <div className="relative h-[min(100svh,900px)] w-full overflow-hidden bg-white">
            <Image
              src="/images/h1.HEIC"
              alt="RidgebackBuilders — Florida skyline and construction backdrop"
              fill
              priority
              className="object-cover brightness-[.6] transform-gpu will-change-transform"
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/45" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-b from-transparent via-white/25 to-white" />
          </div>

          <motion.div
            className="absolute inset-0 z-10 flex items-end justify-center pb-[clamp(5rem,30vh,18rem)]"
            variants={heroVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            layout
          >
            <div className="mx-auto max-w-4xl px-4 text-center text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                BUILT <span className={GOLD_TEXT}>STRONG</span>,{" "}
                <span className={GOLD_TEXT}>BUILT</span> RIGHT
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 md:text-base">
                We specialize in commercial and residential construction,
                renovations, and structural repairs. Every project is handled
                with durable materials, skilled craftsmanship, and a commitment
                to doing the job the right way — ensuring strength, safety, and
                lasting value.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="#projects"
                  aria-label="View RidgebackBuilders projects"
                  className={clsx(
                    "group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-black",
                    "shadow-[0_10px_30px_-10px_rgba(255,226,65,.55)]",
                    "transform-gpu will-change-transform",
                    GOLD_BG
                  )}
                >
                  <span className="relative z-10">Our Projects</span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 translate-x-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.85),transparent)] transition-transform duration-1000 group-hover:translate-x-[300%]"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECT CARDS */}
        <section
          id="projects"
          aria-label="Featured projects"
          className="relative z-20 -mt-[clamp(8rem,12vh,14rem)] pb-28 pt-4"
        >
          <div className="mx-auto max-w-6xl px-4">
            {/* Mobile: horizontal snap */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key="mobile-list"
                className={[
                  "md:hidden",
                  "flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory",
                  "px-1 -mx-1 pb-2",
                  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                ].join(" ")}
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.2,
                  margin: "0px 0px -5% 0px",
                }}
                exit="exit"
                layout
              >
                {POSTS.map((p) => (
                  <div
                    key={`m-${p.id}`}
                    className="shrink-0 snap-center w-[85%] first:ml-3 last:mr-3"
                  >
                    <ProjectCard p={p} imageHeightClass="h-[22rem]" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Desktop/tablet: grid */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key="desktop-grid"
                className="hidden grid-cols-2 gap-8 md:grid lg:grid-cols-3"
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: false,
                  amount: 0.2,
                  margin: "0px 0px -5% 0px",
                }}
                exit="exit"
                layout
              >
                {POSTS.map((p) => (
                  <ProjectCard
                    key={`d-${p.id}`}
                    p={p}
                    imageHeightClass="h-[20rem] lg:h-[22rem] xl:h-[24rem]"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* JSON-LD (inject at end of page) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
      />
    </MotionConfig>
  );
};

export default HomePage;

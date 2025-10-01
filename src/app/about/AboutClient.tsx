"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReviewsSection from "@/app/components/AboutReviews";
import FadeInSection from "@/app/components/FadeInSection";
import { motion, AnimatePresence, Variants } from "framer-motion";

const ACCENT = "#FFE241";

const REVIEWS = [
  {
    id: 1,
    name: "M Dhaybal",
    role: "Home Owner",
    text: "Professional, reliable, and detail-oriented. The renovation exceeded our expectations and was completed on schedule!",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Real Estate Investor",
    text: "From start to finish, the team communicated clearly and delivered exactly what we needed. Highly recommended!",
  },
  {
    id: 3,
    name: "J. Rodriguez",
    role: "Contractor",
    text: "Quality workmanship and a crew that truly cares. Our office build-out looks fantastic and has impressed every client.",
  },
  {
    id: 4,
    name: "A. Williams",
    role: "Home Owner",
    text: "They handled our structural repairs with expertise and efficiency. We feel confident and secure in our home again.",
  },
  {
    id: 5,
    name: "Imran Ali",
    role: "Builder",
    text: "Outstanding experience from start to finish.",
  },
];

/** Motion variants */
const pageVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutClient() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="about-page"
        variants={pageVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="min-h-screen"
      >
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="about-hero-title"
        >
          <Image
            src="/images/aboutbg.jpg"
            alt="Construction site with crew at work"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white/100" />

          <div className="relative z-20 container mx-auto px-6 pt-24 md:pt-58 pb-24 md:pb-36">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="show"
              className="max-w-3xl mx-auto text-center"
            >
              <h1
                id="about-hero-title"
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm leading-tight"
              >
                About{" "}
                <span className="relative inline-block align-baseline">
                  <span className="shine-in-text px-1">US</span>
                  <span
                    className="absolute left-0 right-0 -bottom-2 h-0.5"
                    style={{ background: ACCENT }}
                    aria-hidden="true"
                  />
                </span>
              </h1>
              <p className="mt-3 text-white/85 text-m sm:text-base">
                Building Trust, One Project at a Time
              </p>
            </motion.div>

            {/* MOBILE / TABLET (unchanged): 2-card layout */}
            <div className="mt-8 md:mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:hidden">
              <motion.figure
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 aspect-[16/11] sm:aspect-[5/4]"
              >
                <Image
                  src="/images/abbg3.png"
                  alt="RidgebackBuilders crew with tools on site"
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 560px"
                  decoding="async"
                  className="object-cover"
                />
              </motion.figure>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] ring-1 ring-black/10 bg-emerald-900/30 backdrop-blur-md p-5 sm:p-7 md:p-8"
              >
                <div className="max-w-md md:max-w-none">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]">
                    We Are Experts in Building Dreams
                  </h2>
                  <p className="mt-2 text-[12px] sm:text-sm md:text-base text-gray-800/90">
                    At RidgeBackBuilders, we deliver trusted construction
                    solutions that stand the test of time. From residential
                    homes to commercial projects, our team combines
                    craftsmanship, innovation, and reliability to bring your
                    vision to life. Whether it’s new construction, remodeling,
                    or turnkey contracting, we build with integrity and
                    precision—on time and on budget.
                  </p>
                  <Link
                    href="/projects"
                    className="mt-4 inline-flex items-center justify-center bg-yellow-400 text-black text-xs sm:text-sm md:text-base px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                    aria-label="Read more about our projects"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* DESKTOP ONLY: single custom hero image */}
            {/* DESKTOP ONLY: single custom hero image (no crop) */}
            <motion.figure
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative max-w-6xl mx-auto mt-10"
            >
              <div className="relative overflow-hidden rounded-8xl ">
                {/* Responsive height: grows with viewport, capped so it doesn’t get too tall */}
                <div className="relative w-full h-[42vw] max-h-[620px] min-h-[360px] py-20">
                  <Image
                    src="/images/abtt.png"
                    alt="RidgebackBuilders – featured work"
                    fill
                    sizes="(min-width: 1024px) 1100px, 100vw"
                    className="object-contain" // <-- show entire image (no crop)
                    priority={false}
                  />
                </div>
              </div>
            </motion.figure>
          </div>
        </section>

        {/* ABOUT US */}
        <FadeInSection>
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 md:mt-24"
            aria-labelledby="about-us-heading"
          >
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2
                  id="about-us-heading"
                  className="text-2xl md:text-4xl font-bold text-gray-900"
                >
                  About Us
                </h2>
                {/* <Link
                  href="/about#details"
                  className="hidden sm:inline-flex bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-colors"
                  aria-label="Learn more about RidgebackBuilders"
                >
                  Learn more
                </Link> */}
              </div>

              <p className="pt-4 md:pt-6 text-gray-600 text-sm md:text-lg mb-8 max-w-2xl">
                At RidgebackBuilders, we deliver reliable construction,
                renovation, and structural repair services for both residential
                and commercial projects. With quality craftsmanship and durable
                materials, every build stands strong for years to come.
              </p>

              <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {[
                    {
                      k: "1.",
                      h: "Who We Are",
                      p: "A licensed team of builders, engineers, and project managers focused on safe, code-compliant work—commercial and residential.",
                    },
                    {
                      k: "2.",
                      h: "What We Do",
                      p: "Ground-up builds, renovations, tenant improvements, and critical structural repairs—delivered start to finish.",
                    },
                    {
                      k: "3.",
                      h: "How We Help",
                      p: "We handle permits, scheduling, site safety, and quality control so timelines hold and standards are met.",
                    },
                    {
                      k: "4.",
                      h: "The Outcome",
                      p: "On-spec, on-schedule delivery with documented inspections and a clean handover—built strong, built right.",
                    },
                  ].map(({ k, h, p }) => (
                    <motion.div
                      key={h}
                      variants={sectionVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">
                        {k}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {h}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 mt-1">
                        {p}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.figure
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full max-w-md md:max-w-none mx-auto aspect-[4/3] sm:aspect-[1/1] md:aspect-[4/3]"
                >
                  <Image
                    src="/images/4g.png"
                    alt="RidgebackBuilders project collage"
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 560px"
                    decoding="async"
                    className="object-contain"
                  />
                </motion.figure>
              </div>
            </div>
          </motion.section>
        </FadeInSection>

        {/* PROJECTS SECTION */}
        <FadeInSection>
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative py-16 md:py-20"
            aria-labelledby="about-projects-heading"
          >
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-start">
                <div>
                  <h2
                    id="about-projects-heading"
                    className="mb-4 md:mb-6 text-2xl sm:text-4xl font-bold tracking-wide text-black"
                  >
                    ABOUT OUR PROJECTS
                  </h2>

                  <p className="text-sm md:text-lg mb-8 md:mb-10 max-w-xl leading-7 md:leading-8 text-[#6C7278]">
                    Our projects reflect quality, durability, and attention to
                    detail. From residential builds to large-scale commercial
                    work, we deliver results that stand strong and create
                    lasting value.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 md:gap-5">
                    <Link
                      href="/projects"
                      className="rounded-[6px] bg-[#F1D54F] px-4 py-2 md:px-8 md:py-3 font-semibold text-black transition hover:brightness-105"
                      aria-label="Learn more about our projects"
                    >
                      LEARN MORE
                    </Link>

                    <Link
                      href="https://www.youtube.com/@RidgebackBuilt"
                      className="group inline-flex items-center gap-3 rounded-[6px] border border-[#F1D54F] px-5 py-2 md:px-8 md:py-3 font-semibold text-[#F1D54F]"
                      aria-label="Watch a project video"
                    >
                      Watch Video
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:translate-x-0.5"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="relative hidden lg:block" aria-hidden>
                  <div className="h-full w-px bg-[#2E2E2E]" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { n: "1000+", l: "Completed Projects" },
                    { n: "250+", l: "Ongoing Projects" },
                    { n: "500+", l: "Happy Clients" },
                    { n: "25", l: "Offices Worldwide" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.l}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: i * 0.06 }}
                      className={
                        i === 0
                          ? "relative overflow-hidden bg-white p-8 md:p-12 text-center text-[#3C3F42] shadow-[0_14px_28px_rgba(0,0,0,0.15)] rounded-md"
                          : "bg-[#ECECEC] p-8 md:p-12 text-center text-[#3C3F42] rounded-md"
                      }
                    >
                      <div className="text-2xl md:text-3xl font-bold text-[#2F3236]">
                        {m.n}
                      </div>
                      <div className="mt-2 text-xs md:text-sm text-[#6C7278]">
                        {m.l}
                      </div>
                      {i === 0 && (
                        <span className="pointer-events-none absolute left-4 right-4 -bottom-3 h-3 rounded-sm bg-[#2B2B2B]/70" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </FadeInSection>

        {/* REVIEWS */}
        {/* <FadeInSection>
          <section
            className="py-16 md:py-20 bg-gray-50"
            aria-labelledby="reviews-heading"
          >
            <h2 id="reviews-heading" className="sr-only">
              Client Reviews
            </h2>
            <ReviewsSection
              reviews={REVIEWS}
              accent="#F59E0B"
              pageSize={4}
              showAllHref="/reviews"
            />
          </section>
        </FadeInSection> */}

        {/* Shine effect */}
        <style jsx>{`
          .shine-in-text {
            --accent: ${ACCENT};
            background-image: linear-gradient(
              90deg,
              var(--accent) 0%,
              var(--accent) 40%,
              #ffffff 50%,
              var(--accent) 60%,
              var(--accent) 100%
            );
            background-size: 200% 100%;
            background-position: -100% 0%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: shine-scan 2.4s ease-in-out infinite;
          }
          @keyframes shine-scan {
            0% {
              background-position: -120% 0%;
            }
            55% {
              background-position: 120% 0%;
            }
            100% {
              background-position: 120% 0%;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";
import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ---- Animation helpers ----
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeUpProps = {
  initial: fadeUp.initial,
  whileInView: fadeUp.whileInView,
  viewport: { once: true, amount: 0.6 as const },
};

// ---- Card Type ----
interface DocCard {
  id: number;
  title: string;
  description: string;
  image: string; // /public path (replace with your images)
  align: "left" | "right"; // where the TEXT goes
}

const CARDS: DocCard[] = [
  {
    id: 1,
    title: "Commercial Construction",
    description:
      "End-to-end delivery for offices, retail, hospitality, and industrial builds. We coordinate approvals, structural works, MEP, and finishing with strict timelines and HSE compliance to keep your business moving.",
    image: "/images/comertial.webp", // e.g. /images/commercial.jpg
    align: "right",
  },
  {
    id: 2,
    title: "Residential Construction",
    description:
      "From single-family homes to multi-unit developments, we focus on durable materials, energy-efficient systems, and clean detailing. Transparent budgeting and on-site supervision ensure peace of mind.",
    image: "/images/reside.jpg", // e.g. /images/residential.jpg
    align: "left",
  },
  {
    id: 3,
    title: "Renovation & Fit-Out",
    description:
      "Adaptive reuse, remodels, and interior fit-outs that respect existing structures while upgrading functionality. Minimal downtime, phased execution, and premium finishes tailored to your space.",
    image: "/images/renovation.avif", // e.g. /images/renovation.jpg
    align: "right",
  },
  {
    id: 4,
    title: "Design Consultancy",
    description:
      "Concept to IFC drawings with 3D visualization, BOQs, and authority submissions. Our multidisciplinary team aligns architecture, structure, and MEP for a buildable, cost-smart design.",
    image: "/images/dc.avif", // e.g. /images/design.jpg
    align: "left",
  },
];

export default function DocumentsPage() {
  const hero = useMemo(
    () => ({
      bg: "/images/project.jpg",
      heading: (
        <>
          Our Latest <span className="text-yellow-400">Projects</span>
        </>
      ),
      sub: "A curated look at our commercial, residential, renovation, and consultancy work engineered for quality, efficiency, and lasting value.",
    }),
    []
  );

  return (
    <main className="min-h-screen w-full bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden text-center">
        {/* Background image */}
        <Image
          src={hero.bg}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom fade to white */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

        {/* Centered copy */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
              {hero.heading}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {hero.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARDS */}
      <div className="relative z-20 mx-auto -mt-40 flex max-w-6xl flex-col gap-16 px-4 pb-24 md:-mt-44 md:px-6">
        {CARDS.map((card, idx) => (
          <DocCard key={card.id} card={card} index={idx} />
        ))}
      </div>
    </main>
  );
}

function DocCard({ card, index }: { card: DocCard; index: number }) {
  const isTextLeft = card.align === "left";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative grid min-h-[500px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 md:grid-cols-2"
    >
      {/* Image side (edge-to-edge) */}
      <figure
        className={`${
          isTextLeft ? "md:order-2" : "md:order-1"
        } relative h-full w-full`}
      >
        <Image
          src={card.image}
          alt={card.title}
          width={1600}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent md:hidden" />
      </figure>

      {/* Content side with cement/dust background */}
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`${
          isTextLeft ? "md:order-1" : "md:order-2"
        } relative flex h-full flex-col justify-center gap-4 bg-neutral-200/70 p-8 md:p-12`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-yellow-600 md:text-3xl">
            {String(card.id).padStart(2, "0")}
          </span>
          <h3 className="text-2xl font-semibold md:text-3xl">{card.title}</h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-800 md:text-base">
          {card.description}
        </p>

        <div className="mt-6">
          <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-2xl active:scale-[0.98]">
            <span>Learn More</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* subtle hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 transition group-hover:ring-8 group-hover:ring-yellow-400/10" />
      </motion.div>
    </motion.article>
  );
}

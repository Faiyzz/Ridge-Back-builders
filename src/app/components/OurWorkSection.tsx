"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ACCENT = "#FFE241";

const WORK_IMAGES = [
  "/images/1.avif",
  "/images/2.avif",
  "/images/3.avif",
  "/images/4.avif",
  "/images/5.avif",
  "/images/6.avif",
  "/images/7.avif",
  "/images/8.avif",
  "/images/9.avif",
  "/images/10.avif",
  "/images/11.avif",
  "/images/12.avif",
  "/images/14.heic",
];

export default function OurWorkSection() {
  const [active, setActive] = useState<number | null>(null);
  const onCardClick = (i: number) =>
    setActive((prev) => (prev === i ? null : i));

  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 140, damping: 22, mass: 0.6 }}
    >
      <section className={`${poppins.className} bg-white py-14 md:py-20`}>
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Heading */}
          <header className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
              Our{" "}
              <span
                className="underline decoration-8 underline-offset-[10px]"
                style={{ textDecorationColor: ACCENT }}
              >
                Work
              </span>
            </h2>
            <p className="mx-auto mt-3 md:mt-4 max-w-2xl text-xs md:text-sm italic text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </header>

          {/* Equal gutters */}
          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-x-5 gap-y-5 md:gap-x-6 md:gap-y-6">
            {/* Row 1 (12) — all 4-col => same aspect */}
            <Figure
              src={WORK_IMAGES[0]}
              index={0}
              isActive={active === 0}
              onClick={() => onCardClick(0)}
              className="col-span-4"
              ratio="aspect-[4/5]"
            />
            <Figure
              src={WORK_IMAGES[1]}
              index={1}
              isActive={active === 1}
              onClick={() => onCardClick(1)}
              className="col-span-4"
              ratio="aspect-[4/5]"
            />
            <Figure
              src={WORK_IMAGES[2]}
              index={2}
              isActive={active === 2}
              onClick={() => onCardClick(2)}
              className="col-span-4"
              ratio="aspect-[4/5]"
            />

            {/* Row 2 (8 + 4) — 4-col aspect = (8-col aspect)/2 */}
            <Figure
              src={WORK_IMAGES[3]}
              index={3}
              isActive={active === 3}
              onClick={() => onCardClick(3)}
              className="col-span-8"
              ratio="aspect-[16/7]" // a1 ≈ 2.2857
            />
            <Figure
              src={WORK_IMAGES[4]}
              index={4}
              isActive={active === 4}
              onClick={() => onCardClick(4)}
              className="col-span-4"
              ratio="aspect-[8/7]" // a2 = a1/2 ≈ 1.1429
            />

            {/* Row 3 (6 + 3 + 3) — 3-col aspect = (6-col aspect)/2 */}
            <Figure
              src={WORK_IMAGES[5]}
              index={5}
              isActive={active === 5}
              onClick={() => onCardClick(5)}
              className="col-span-6"
              ratio="aspect-[16/10]" // a1 = 1.6
            />
            <Figure
              src={WORK_IMAGES[6]}
              index={6}
              isActive={active === 6}
              onClick={() => onCardClick(6)}
              className="col-span-3"
              ratio="aspect-[4/5]" // a2 = 0.8
            />
            <Figure
              src={WORK_IMAGES[7]}
              index={7}
              isActive={active === 7}
              onClick={() => onCardClick(7)}
              className="col-span-3"
              ratio="aspect-[4/5]" // a2 = 0.8
            />

            {/* Row 4 (8 + 4) — same pairing rule as Row 2 */}
            <Figure
              src={WORK_IMAGES[8]}
              index={8}
              isActive={active === 8}
              onClick={() => onCardClick(8)}
              className="col-span-8"
              ratio="aspect-[16/7]"
            />
            <Figure
              src={WORK_IMAGES[9]}
              index={9}
              isActive={active === 9}
              onClick={() => onCardClick(9)}
              className="col-span-4"
              ratio="aspect-[8/7]"
            />

            {/* Row 5 (4 + 4 + 4) — all same aspect */}
            <Figure
              src={WORK_IMAGES[10]}
              index={10}
              isActive={active === 10}
              onClick={() => onCardClick(10)}
              className="col-span-4"
              ratio="aspect-[4/5]"
            />
            <Figure
              src={WORK_IMAGES[11]}
              index={11}
              isActive={active === 11}
              onClick={() => onCardClick(11)}
              className="col-span-4"
              ratio="aspect-[4/5]"
            />
            <Figure
              src={WORK_IMAGES[12]}
              index={12}
              isActive={active === 12}
              onClick={() => onCardClick(12)}
              className="col-span-4"
              ratio="aspect-[4/5]"
            />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

type FigureProps = {
  src: string;
  className?: string;
  ratio?: string; // Tailwind aspect-ratio class (width/height)
  index: number;
  isActive: boolean;
  onClick: () => void;
};

function Figure({
  src,
  className = "",
  ratio = "aspect-[4/5]",
  index,
  isActive,
  onClick,
}: FigureProps) {
  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.06 },
    }),
    exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.25 } },
  };

  return (
    <motion.figure
      custom={index}
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      exit="exit"
      whileTap={{ scale: 0.995 }} // keep container fixed so gutters don't shift
      onClick={onClick}
      className={[
        "group relative w-full",
        ratio,
        "overflow-hidden rounded-2xl bg-neutral-200",
        "shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5",
        "transition-all duration-300 will-change-transform",
        isActive
          ? "ring-2 ring-[color:var(--accent)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          : "",
        className,
      ].join(" ")}
      style={{ "--accent": ACCENT } as React.CSSProperties}
    >
      {/* Image (hover scale on inner layer only) */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isActive ? 1.03 : 1 }}
        whileHover={{ scale: isActive ? 1.04 : 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <Image
          src={src}
          alt="Our work image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Shine */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.5),transparent)] opacity-0 transition-all duration-700 group-hover:translate-x-[240%] group-hover:opacity-100"
      />

      {/* Subtle top gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.15), transparent 60%)",
        }}
      />

      {/* Active overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="activeOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: `0 0 0 2px ${ACCENT}, 0 20px 50px rgba(0,0,0,0.35)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(400px at 50% 65%, rgba(255,226,65,0.18), transparent 60%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.figure>
  );
}

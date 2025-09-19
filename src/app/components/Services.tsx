"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, MotionConfig, Variants } from "framer-motion";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ACCENT = "#FFE241";
const SIDE_GAP = 24; // equal left/right gutter in px

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Renovation & Remodeling",
    description:
      "From kitchen refreshes to full-home overhauls, we upgrade spaces for function, style, and value.",
    image: "/images/renovation.avif",
  },
  {
    id: 2,
    title: "Residential Construction",
    description:
      "Ground-up builds and extensions crafted with precision, durability, and transparent communication.",
    image: "/images/residential.avif",
  },
  {
    id: 3,
    title: "Design Consultancy",
    description:
      "Expert guidance on layouts, materials, and finishes—tailored to your vision, budget, and timeline.",
    image: "/images/dc.avif",
  },
  {
    id: 4,
    title: "Construction Project Management",
    description:
      "We coordinate schedules, trades, budgets, and quality to deliver on time and on spec.",
    image: "/images/pm.avif",
  },
];

// Card variants (typed) — include reveal + active/inactive states
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
  active: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
  inactive: {
    scale: 0.965,
    opacity: 0.9,
    y: 4,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

// Parent stagger for load-in
const trackStagger: Variants = {
  hidden: { opacity: 1 }, // keep parent visible; children will animate
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.06 },
  },
};

export default function ServicesSection() {
  const items = useMemo(() => SERVICES, []);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // keep a ref mirror of active so callbacks can be stable
  const activeRef = useRef(0);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // --- smooth auto-snap helpers ---
  const snapTimer = useRef<number | null>(null);
  const pointerDownRef = useRef(false);

  const clearSnapTimer = useCallback(() => {
    if (snapTimer.current) {
      window.clearTimeout(snapTimer.current);
      snapTimer.current = null;
    }
  }, []);

  const scrollToIndex = useCallback((idx: number) => {
    const track = trackRef.current;
    const el = cardRefs.current[idx];
    if (!track || !el) return;
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }, []);

  const scheduleSnapTo = useCallback(
    (idx: number, delay = 140) => {
      clearSnapTimer();
      snapTimer.current = window.setTimeout(() => {
        scrollToIndex(idx);
      }, delay);
    },
    [clearSnapTimer, scrollToIndex]
  );

  const next = useCallback(() => {
    const idx = Math.min(activeRef.current + 1, items.length - 1);
    scrollToIndex(idx);
  }, [items.length, scrollToIndex]);

  const prev = useCallback(() => {
    const idx = Math.max(activeRef.current - 1, 0);
    scrollToIndex(idx);
  }, [scrollToIndex]);

  // Center first card on mount
  useEffect(() => {
    const tid = window.setTimeout(() => scrollToIndex(0), 0);
    return () => window.clearTimeout(tid);
  }, [scrollToIndex]);

  // Compute active by closest-to-center; auto-snap after scroll stops
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const viewCenter = track.scrollLeft + track.clientWidth / 2;
      let bestIdx = 0;
      let minDelta = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const cardCenter = el.offsetLeft + el.clientWidth / 2;
        const d = Math.abs(cardCenter - viewCenter);
        if (d < minDelta) {
          minDelta = d;
          bestIdx = i;
        }
      });

      setActive(bestIdx);

      if (!pointerDownRef.current) scheduleSnapTo(bestIdx, 150);
    };

    const onResize = () => onScroll();
    const onPointerDown = () => {
      pointerDownRef.current = true;
      clearSnapTimer();
    };
    const onPointerUp = () => {
      pointerDownRef.current = false;
      scheduleSnapTo(activeRef.current, 120);
    };

    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("resize", onResize);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);
      clearSnapTimer();
    };
  }, [items.length, scheduleSnapTo, clearSnapTimer]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Pre-compute the style object to avoid inline casting noise
  const trackStyle = useMemo<React.CSSProperties & Record<"--gap", string>>(
    () => ({
      "--gap": `${SIDE_GAP}px`,
      WebkitOverflowScrolling: "touch",
      maskImage:
        "linear-gradient(to right, transparent, black var(--gap), black calc(100% - var(--gap)), transparent)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black var(--gap), black calc(100% - var(--gap)), transparent)",
    }),
    []
  );

  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 22,
        mass: 0.5,
      }}
    >
      <section className="relative bg-white py-12 md:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl"
          >
            Our{" "}
            <span
              className="underline decoration-8 underline-offset-[10px]"
              style={{ textDecorationColor: ACCENT }}
            >
              Services
            </span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 sm:mt-10 md:mt-12">
          {/* Left/Right buttons */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 z-20 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:bg-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 z-20 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md transition hover:bg-black"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Track with equal gutters + mask fade */}
          <div
            ref={trackRef}
            className="no-scrollbar mx-auto w-full overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x"
            style={trackStyle}
          >
            <motion.div
              variants={trackStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto flex max-w-7xl gap-6 px-[var(--gap)] py-4"
            >
              {items.map((s, i) => {
                const isActive = i === active;

                return (
                  <motion.div
                    key={s.id}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    animate={isActive ? "active" : "inactive"}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`
                      group snap-center min-w-0 flex-shrink-0
                      basis-[90%] sm:basis-[80%] md:basis-[66%] lg:basis-[58%] xl:basis-[52%] 2xl:basis-[48%]
                      rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                      ring-1 ring-black/5
                      transform-gpu will-change-transform will-change-opacity
                      transition-shadow
                    `}
                    style={{
                      boxShadow: isActive
                        ? "0 16px 40px rgba(0,0,0,0.16)"
                        : "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="w-full">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-t-2xl h-44 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 18,
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={s.image}
                            alt={s.title}
                            fill
                            priority={i < 2}
                            className="object-cover"
                            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 66vw, (max-width: 1280px) 58vw, (max-width: 1536px) 52vw, 48vw"
                          />
                        </motion.div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 ">
                        <div className="flex items-start gap-4 ">
                          <span
                            className="shrink-0 text-3xl font-extrabold sm:text-4xl"
                            style={{ color: ACCENT }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <h3 className="truncate text-lg font-semibold text-black sm:text-xl ">
                              {s.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-neutral-700 ">
                              {s.description}
                            </p>
                          </div>
                        </div>

                        {/* Accent bar animates to full on active */}
                        <motion.div
                          className="mt-4 h-[3px] w-full rounded-full"
                          style={{ backgroundColor: ACCENT }}
                          initial={{ scaleX: 0.4, originX: 0 }}
                          animate={{ scaleX: isActive ? 1 : 0.6, originX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 26,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="pt-10 mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <motion.button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="h-2 rounded-full"
                animate={{
                  width: i === active ? 18 : 8,
                  backgroundColor: i === active ? ACCENT : "rgba(0,0,0,0.15)",
                }}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              />
            ))}
          </div>
        </div>

        {/* Helpers */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE 10+ */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </section>
    </MotionConfig>
  );
}

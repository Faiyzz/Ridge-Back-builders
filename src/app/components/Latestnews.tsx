"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
};

const ACCENT = "#FFE241";

const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Groundbreaking at Modern Avenue 20",
    excerpt:
      "Foundation work is underway—crews are setting rebar and pouring first footings.",
    image: "/images/rebar.jpg",
  },
  {
    id: 2,
    title: "New Energy Code ",
    excerpt:
      "Updated insulation and HVAC standards will cut utility costs for homeowners.",
    image: "/images/air.jpg",
  },
  {
    id: 3,
    title: "Prefab Panels Speed Up Duplex Builds",
    excerpt:
      "Factory-made wall panels reduce waste and shorten timelines by up to 20%.",
    image: "/images/module.jpg",
  },
  {
    id: 4,
    title: "Kitchen Remodel Cost Guide 2025",
    excerpt:
      "Transparent pricing for cabinetry, countertops, and timelines—no surprises.",

    image: "/images/kitchen.webp",
  },
  {
    id: 5,
    title: "Safety Week: Zero Incidents Across Sites",
    excerpt:
      "New drills and tool-box talks rolled out to keep every crew member safer.",
    image: "/images/safe.jpg",
  },
  {
    id: 6,
    title: "Client Spotlight: Rahman Residence",
    excerpt:
      "A light-filled four-bed plan optimized for family living and natural airflow.",
    image: "/images/new.webp",
  },
];

export default function LatestNews() {
  const items = useMemo(() => NEWS, []);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [dotWeights, setDotWeights] = useState<number[]>(() =>
    new Array(items.length).fill(0)
  );

  // keep refs array sized correctly
  useEffect(() => {
    if (cardRefs.current.length !== items.length) {
      cardRefs.current = new Array(items.length).fill(null);
    }
  }, [items.length]);

  // active card + dot weights on scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calc = () => {
      const viewCenter = track.scrollLeft + track.clientWidth / 2;

      let bestIdx = 0;
      let minDelta = Number.POSITIVE_INFINITY;
      const weights: number[] = new Array(items.length).fill(0);

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const cardCenter = el.offsetLeft + el.clientWidth / 2;
        const d = Math.abs(cardCenter - viewCenter);
        const w = Math.max(0, 1 - d / el.clientWidth);
        weights[i] = w;
        if (d < minDelta) {
          minDelta = d;
          bestIdx = i;
        }
      });

      setActive(bestIdx);
      setDotWeights(weights);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calc);
    };

    calc();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calc);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [items.length]);

  // center a card in the visible area
  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    const el = cardRefs.current[idx];
    if (!track || !el) return;
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  };

  const shell =
    "mx-auto w-full max-w-[1100px] md:max-w-[1200px] lg:max-w-[1280px] 2xl:max-w-[1440px]";

  return (
    <section
      className={`${poppins.className} relative bg-white py-12 md:py-20`}
    >
      {/* Heading */}
      <div className={`px-5 md:px-10 ${shell}`}>
        <h2 className="text-center font-extrabold tracking-tight text-3xl md:text-5xl text-black">
          Latest{" "}
          <span
            className="underline decoration-8 underline-offset-[10px]"
            style={{ textDecorationColor: ACCENT }}
          >
            News
          </span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative mt-10 md:mt-12">
        <div className={`px-5 md:px-10`}>
          <div
            ref={trackRef}
            className={`no-scrollbar scroll-smooth snap-x snap-mandatory overflow-x-auto ${shell}`}
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="
                flex justify-start gap-6
                px-6 md:px-8
              "
            >
              {items.map((n, i) => (
                <div
                  key={n.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className={`
                    group relative snap-center
                    flex-[0_0_88%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_31%] 2xl:flex-[0_0_28%]
                    max-w-[520px]
                    rounded-[22px] overflow-hidden
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5
                    transition-transform duration-300 hover:-translate-y-1
                    bg-neutral-100
                  `}
                  onClick={() => scrollToIndex(i)}
                >
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 md:h-72 lg:h-80">
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 88vw, (max-width: 768px) 70vw, (max-width: 1024px) 48vw, (max-width: 1536px) 31vw, 28vw"
                      priority={i < 3}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
                  </div>

                  {/* Text pill */}
                  <div className="pointer-events-none absolute left-3 bottom-3">
                    <div className="w-fit max-w-[85%] rounded-xl bg-black/45 ring-1 ring-white/10 text-white p-3 backdrop-blur-sm">
                      <h3 className="text-xs sm:text-sm font-semibold leading-tight">
                        {n.title}
                      </h3>
                      <p className="mt-1 text-[11px] sm:text-xs leading-5 text-white/85 line-clamp-2">
                        {n.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className={`mt-6 flex justify-center gap-2 ${shell} mx-auto`}>
            {items.map((_, i) => {
              const w = 8 + dotWeights[i] * 16;
              const bg =
                i === active
                  ? ACCENT
                  : `rgba(0,0,0,${0.15 + dotWeights[i] * 0.35})`;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className="h-2 rounded-full transition-[width,background-color] duration-200"
                  style={{ width: w, backgroundColor: bg }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string; // public path (e.g., /images/service-1.jpg)
};

const ACCENT = "#FFE241";

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Unique and Stylish Design",
    description:
      "Modern, minimal, and high-impact visuals tailored to your brand and audience.",
    image: "/images/service-1.jpg",
  },
  {
    id: 2,
    title: "Construction",
    description:
      "From concept to completion—structured delivery with consistent quality control.",
    image: "/images/service-2.jpg",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Fast, secure, SEO-ready websites built on modern frameworks and best practices.",
    image: "/images/service-3.jpg",
  },
  {
    id: 4,
    title: "Content Creation",
    description:
      "Short-form videos, brand packs, and campaigns designed to convert.",
    image: "/images/service-4.jpg",
  },
];

export default function ServicesSection() {
  const items = useMemo(() => SERVICES, []);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // Keep the card refs array length in sync
  cardRefs.current = [];

  // Compute active index based on the card center closest to viewport center
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
    };

    // Run once and on scroll
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    const el = cardRefs.current[idx];
    if (!track || !el) return;
    track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  };

  const next = () => scrollToIndex(Math.min(active + 1, items.length - 1));
  const prev = () => scrollToIndex(Math.max(active - 1, 0));

  return (
    <section className="relative bg-white py-12 md:py-20">
      {/* Heading */}
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-center font-extrabold tracking-tight text-3xl md:text-5xl text-black">
          Our{" "}
          <span
            className="underline decoration-8 underline-offset-[10px]"
            style={{ textDecorationColor: ACCENT }}
          >
            Services
          </span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative mt-10 md:mt-12">
        {/* Left/Right buttons (desktop) */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md hover:bg-black transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-md hover:bg-black transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar scroll-smooth snap-x snap-mandatory overflow-x-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            // soft edge fade so the peeking card feels natural
            maskImage:
              "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
          }}
        >
          <div
            className="
              mx-auto flex gap-6 px-5 md:px-10 max-w-7xl
              // Ensure some right padding so the 3rd card can 'peek'
              pr-12 md:pr-24
            "
          >
            {items.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`
                  group snap-start md:snap-center
                  // Widths tuned to show 2 full + 1 peeking on large screens
                  // sm: single w/ small peek, md: ~1.5 cards, lg+: 2.2 cards
                  flex-[0_0_90%] xs:flex-[0_0_85%] sm:flex-[0_0_78%]
                  md:flex-[0_0_62%] lg:flex-[0_0_47%] xl:flex-[0_0_46%]
                  2xl:flex-[0_0_45%]
                  max-w-[720px]
                  rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  ring-1 ring-black/5 transition-transform duration-300
                  hover:-translate-y-1
                `}
              >
                <div className="w-full">
                  {/* Image block */}
                  <div className="relative h-48 sm:h-60 md:h-64 lg:h-72 overflow-hidden rounded-t-2xl">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 62vw, 45vw"
                      priority={i < 2}
                    />
                    {/* subtle top shadow */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <span
                        className="shrink-0 text-3xl sm:text-4xl font-extrabold"
                        style={{ color: ACCENT }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-black">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-[15px] leading-6 text-neutral-700">
                          {s.description}
                        </p>
                      </div>
                    </div>

                    {/* Accent baseline */}
                    <div
                      className="mt-4 h-[3px] w-full rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className="h-2 w-2 rounded-full transition-[width,background-color] duration-300"
              style={{
                backgroundColor: i === active ? ACCENT : "rgba(0,0,0,0.15)",
                width: i === active ? 18 : 8,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { User } from "lucide-react"; 
import { CSSProperties } from "react";// 👈 profile icon

const ACCENT = "#FFE241";
type CSSVariables = {
  "--accent"?: string;
};

type Review = {
  text: string;
  author: string;
  role: string;
};

export default function ReviewsCarousel() {
    const sectionStyle: CSSProperties & CSSVariables = {
    "--accent": ACCENT,
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const reviews: Review[] = [
    {
      text: "From consultation to handover, the crew was professional and fast. Our kitchen reno looks incredible!",
      author: "Sarah Khan",
      role: "Home Owner",
    },
    {
      text: "Solid project management and clear timelines. Our office build-out finished on schedule and on budget.",
      author: "Imran Ali",
      role: "Operations Manager",
    },
    {
      text: "They handled permits and inspections seamlessly. Quality work and great communication throughout.",
      author: "Ayesha Noor",
      role: "Real Estate Investor",
    },
    {
      text: "Reliable team with excellent craftsmanship. The structural repair gave us peace of mind.",
      author: "J. Rodriguez",
      role: "Contractor",
    },
  ];

  return (
    <section
      className="mx-auto max-w-6xl px-6 py-16"
      style={sectionStyle}
      aria-label="Customer Reviews"
    >
      {/* Heading */}
      <div className="mb-10">
        <div className="mb-2 h-1 w-12 rounded" style={{ background: ACCENT }} />
        <h3 className="text-4xl font-bold">
          Customer <span style={{ color: ACCENT }}>Reviews</span>
        </h3>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {reviews.map((review, i) => (
          <figure
            key={i}
            className="keen-slider__slide rounded-2xl border border-gray-100 p-6 shadow-sm bg-white"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 ring-2"
                style={{ borderColor: ACCENT }}
              >
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <figcaption className="text-sm font-semibold text-gray-900">
                {review.author}{" "}
                <span className="ml-1 text-xs font-normal text-gray-500">
                  • {review.role}
                </span>
              </figcaption>
            </div>

            <blockquote className="text-sm leading-6 text-gray-700">
              “{review.text}”
            </blockquote>
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div
        className="mt-6 flex justify-center gap-2"
        aria-label="Slide selectors"
      >
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition ${
              currentSlide === idx
                ? "bg-[var(--accent,#FFE241)] w-4"
                : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

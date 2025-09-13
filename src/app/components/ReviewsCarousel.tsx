"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const ACCENT = "#FFE241";

export default function ReviewsCarousel() {
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

  const reviews = Array.from({ length: 4 }).map((_, i) => ({
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "M Shajeel",
    role: "Home Owner",
  }));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Heading */}
      <div className="mb-10">
        <div
          className="mb-2 h-1 w-12 rounded"
          style={{ background: ACCENT }}
        />
        <h3 className="text-4xl font-bold">
          Customer <span style={{ color: ACCENT }}>Reviews</span>
        </h3>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {reviews.map((review, i) => (
          <figure
            key={i}
            className="keen-slider__slide rounded-2xl border border-gray-100 p-6 shadow-sm"
          >
            <div className="mb-4 h-10 w-10 rounded-full bg-black/5" />
            <blockquote className="text-sm text-gray-700">
              {review.text}
            </blockquote>
            <figcaption className="mt-4 text-xs text-gray-500">
              {review.author}{" "}
              <span className="text-gray-400">• {review.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-2 w-2 rounded-full transition ${
              currentSlide === idx ? "bg-[var(--accent,#FFE241)] w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

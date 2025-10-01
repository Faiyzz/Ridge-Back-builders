"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  id: string | number;
  name: string;
  role: string;
  text: string;
  avatarUrl?: string;
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

export default function ReviewsSection({
  reviews,
  accent = "#F59E0B",
  pageSize = 4,
}: {
  reviews: Review[];
  accent?: string;
  pageSize?: number;
  showAllHref?: string;
  onShowAll?: () => void;
}) {
  const isMobile = useIsMobile();
  const [page, setPage] = useState(0);

  // Desktop/tablet pagination
  const totalPagesDesktop = Math.max(1, Math.ceil(reviews.length / pageSize));
  const pageReviews = useMemo(() => {
    if (isMobile) return reviews; // mobile uses slider with all items
    const start = page * pageSize;
    return reviews.slice(start, start + pageSize);
  }, [reviews, page, pageSize, isMobile]);

  // Dots: mobile → one per review; desktop → one per page
  const dotsCount = isMobile ? reviews.length : totalPagesDesktop;

  // Keep page in bounds when switching layouts
  useEffect(() => {
    if (isMobile) {
      if (page > reviews.length - 1) setPage(0);
    } else {
      if (page > totalPagesDesktop - 1) setPage(0);
    }
  }, [isMobile, page, reviews.length, totalPagesDesktop]);

  const handleDotClick = (idx: number) => setPage(idx);

  const initials = (fullName: string) =>
    fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((s) => s[0]?.toUpperCase() || "")
      .join("");

  // --- Mobile swipe handling ---
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (!isMobile) return;
    const threshold = 50; // px to trigger a slide
    if (deltaX.current > threshold && page > 0) {
      setPage((p) => p - 1);
    } else if (deltaX.current < -threshold && page < reviews.length - 1) {
      setPage((p) => p + 1);
    }
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-2 relative">
          <div
            className="-top-2 h-1 w-18 rounded absolute"
            style={{ background: accent }}
          />
          <h2 className="text-4xl font-bold text-gray-800">
            Customer <span className="text-yellow-400">Reviews</span>
          </h2>
        </div>

        <p className="text-gray-600 mb-12 max-w-2xl">
          Great team, fast turnaround, and excellent results. Will definitely
          work with them again!
        </p>

        {/* ===== Mobile: 1-up slider with swipe ===== */}
        <div
          className="md:hidden overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {reviews.map((r) => (
              <article
                key={r.id}
                className="shrink-0 basis-full px-1"
                aria-roledescription="slide"
                aria-label={`${r.name} review`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    {r.avatarUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={r.avatarUrl}
                        alt={`${r.name} avatar`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                        {initials(r.name) || "?"}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {r.text}
                  </p>

                  <div>
                    <div className="font-semibold text-gray-800">{r.name}</div>
                    <div className="text-gray-500 text-sm">{r.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ===== Desktop/Tablet: original grid with paging ===== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pageReviews.map((r) => (
            <article key={r.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {r.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.avatarUrl}
                    alt={`${r.name} avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                    {initials(r.name) || "?"}
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {r.text}
              </p>

              <div>
                <div className="font-semibold text-gray-800">{r.name}</div>
                <div className="text-gray-500 text-sm">{r.role}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / Position dots (mobile = one per review, desktop = one per page) */}
        {dotsCount > 1 && (
          <div
            className="flex justify-center mt-12 space-x-2"
            role="tablist"
            aria-label={isMobile ? "Review slides" : "Review pages"}
          >
            {Array.from({ length: dotsCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to ${isMobile ? "slide" : "page"} ${i + 1}`}
                aria-selected={page === i}
                role="tab"
                className={`w-2 h-2 rounded-full transition ${
                  page === i ? "bg-yellow-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

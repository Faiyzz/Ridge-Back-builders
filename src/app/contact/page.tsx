"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactSection from "../components/Faq";
import ContactUs from "../components/contactUs";

type HeroContactProps = {
  imageSrc: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaText?: string;
};

export default function HeroContact({
  imageSrc,
  title = "Contact",
  highlight = "US",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ctaHref,
  ctaText,
}: HeroContactProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="relative h-[70vh] sm:h-[72vh] md:h-[80vh] lg:h-[86vh]">
        <Image
          src="/images/c1.jpg"
          alt="Construction frame under a dramatic sky"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow md:text-6xl">
            {title} <span className="text-yellow-400">{highlight}</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            {subtitle}
          </p>

          {ctaHref && ctaText && (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-full border border-yellow-300/70 bg-white/90 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {ctaText}{" "}
                <span aria-hidden className="ml-2">
                  ›
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ContactUs />
      <ContactSection />
    </section>
  );
}

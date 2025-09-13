"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ACCENT = "#FFE241";

const WORK_IMAGES = [
  "/images/work-1.jpg",
  "/images/work-2.jpg",
  "/images/work-3.jpg",
  "/images/work-4.jpg",
  "/images/work-5.jpg",
  "/images/work-6.jpg",
  "/images/work-7.jpg",
  "/images/work-8.jpg",
  "/images/work-9.jpg",
  "/images/work-10.jpg",
  "/images/work-11.jpg",
  "/images/work-12.jpg",
  "/images/work-13.jpg",
];

export default function OurWorkSection() {
  return (
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

        {/* Constant 12-col grid on ALL breakpoints */}
        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-5 md:gap-6">
          {/* Row 1 (12) */}
          <Figure
            src={WORK_IMAGES[0]}
            className="col-span-4"
            ratio="aspect-[4/5]"
          />
          <Figure
            src={WORK_IMAGES[1]}
            className="col-span-4"
            ratio="aspect-[4/5]"
          />
          <Figure
            src={WORK_IMAGES[2]}
            className="col-span-4"
            ratio="aspect-[5/6]"
          />

          {/* Row 2 (12) */}
          <Figure
            src={WORK_IMAGES[3]}
            className="col-span-8"
            ratio="aspect-[16/7]"
          />
          <Figure
            src={WORK_IMAGES[4]}
            className="col-span-4"
            ratio="aspect-[4/5]"
          />

          {/* Row 3 (12) */}
          <Figure
            src={WORK_IMAGES[5]}
            className="col-span-6"
            ratio="aspect-[16/10]"
          />
          <Figure
            src={WORK_IMAGES[6]}
            className="col-span-3"
            ratio="aspect-[4/5]"
          />
          <Figure
            src={WORK_IMAGES[7]}
            className="col-span-3"
            ratio="aspect-[4/5]"
          />

          {/* Row 4 (12) */}
          <Figure
            src={WORK_IMAGES[8]}
            className="col-span-8"
            ratio="aspect-[16/7]"
          />
          <Figure
            src={WORK_IMAGES[9]}
            className="col-span-4"
            ratio="aspect-[4/5]"
          />

          {/* Row 5 (12) */}
          <Figure
            src={WORK_IMAGES[10]}
            className="col-span-4"
            ratio="aspect-[16/10]"
          />
          <Figure
            src={WORK_IMAGES[11]}
            className="col-span-4"
            ratio="aspect-[4/5]"
          />
          <Figure
            src={WORK_IMAGES[12]}
            className="col-span-4"
            ratio="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

function Figure({
  src,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  src: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <figure
      className={[
        "group relative w-full",
        ratio,
        "overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        "break-inside-avoid",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt="Our work image"
        fill
        className="object-cover"
        sizes="100vw"
      />
    </figure>
  );
}

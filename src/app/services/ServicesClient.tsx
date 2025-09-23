"use client";

import ReviewsCarousel from "@/app/components/ReviewsCarousel";
import FadeInSection from "@/app/components/FadeInSection";
import Image from "next/image";

type Card = {
  title: string;
  desc: string;
  img: string;
};

const ACCENT = "#FFE241";

const SERVICES: Card[] = [
  {
    title: "Residential",
    desc: "Smart, modern homes built with comfort, durability, and attention to every detail.",
    img: "/images/residential.avif",
  },
  {
    title: "Commercial",
    desc: "Efficient, code-compliant spaces designed to support business growth and operations.",
    img: "/images/comertial.webp",
  },
  {
    title: "Renovation",
    desc: "Transform existing spaces with upgrades that blend style, safety, and long-lasting value.",
    img: "/images/renovation.avif",
  },
  {
    title: "Design Consultancy",
    desc: "Expert planning and guidance to turn ideas into practical, cost-effective designs.",
    img: "/images/dc.avif",
  },
  {
    title: "Structural Repair",
    desc: "Reliable repair solutions that restore strength, safety, and peace of mind in your property.",
    img: "/images/rebar.jpg",
  },
  {
    title: "Landscaping",
    desc: "Functional outdoor layouts that enhance beauty, usability, and long-term sustainability.",
    img: "/images/land.webp",
  },
];

const PROJECTS: Card[] = [
  {
    title: "Modern Living Spaces",
    desc: "Homes styled for comfort and function, crafted with timeless detail.",
    img: "/images/a.jpg",
  },
  {
    title: "Commercial Excellence",
    desc: "Workplaces designed for growth, efficiency, and professional appeal.",
    img: "/images/b.jpg",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transforming old structures into renewed, modern environments.",
    img: "/images/c.jpg",
  },
  {
    title: "Structural Integrity",
    desc: "Expert repairs that restore safety, stability, and lasting strength.",
    img: "/images/d.webp",
  },
];

export default function ServicesClient() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <section className="relative min-h-[100dvh] overflow-visible">
        <Image
          src="/images/c1.jpg"
          alt="Construction"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-white/70 to-white" />

        <div className="absolute -top-36 inset-0 z-20 grid place-items-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Our{" "}
              <span className="relative inline-block">
                <span style={{ color: ACCENT }}>Services</span>
                {/* yellow underline */}
                <span
                  className="absolute left-0 right-0 -bottom-2 h-0.5 "
                  style={{ background: ACCENT }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-4 text-white/80 text-sm sm:text-base">
              Building with integrity and precision, we deliver lasting
              structures that stand strong and inspire confidence.
            </p>
            <button
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-black transition hover:brightness-110"
              style={{ background: ACCENT }}
            >
              Learn More{" "}
              <span className="translate-y-[1px]">&raquo;&raquo;</span>
            </button>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-0 z-30 w-full max-w-3xl -translate-x-1/2 translate-y-1/2 pointer-events-auto">
          <div className="rounded-[24px] border-[3px] border-amber-400">
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-[24px] shadow-xl"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.35)" }}
            >
              <Image
                src="/images/home.jpg"
                alt="Video cover"
                fill
                className="object-cover"
              />
              <button
                className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition hover:scale-105"
                aria-label="Play Video"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 translate-x-[2px]"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="relative mx-auto max-w-6xl px-6 pt-32 md:pt-[20rem]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="">
              <Image
                src="/images/Group10.png"
                alt=""
                width={500}
                height={500}
                className=" object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div
                className="mb-2 h-1 w-12 rounded"
                style={{ background: ACCENT }}
              />
              <h2 className="text-3xl sm:text-4xl font-bold">
                Take A Glimpse into Our{" "}
                <span style={{ color: ACCENT }}>Construction Voyage</span>
              </h2>
              <p className="mt-3 text-gray-600">
                Crafting spaces with precision and care, we turn blueprints into
                reality. From groundwork to finishing touches, our team builds
                with skill, safety, and dedication that lasts.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-extrabold">6000+</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold">9000+</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold">99%</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <div
                className="mb-2 h-1 w-12 rounded"
                style={{ background: ACCENT }}
              />
              <h3 className="text-4xl font-bold">
                Our <span style={{ color: ACCENT }}>Services</span>
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="group overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold">{s.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    <button
                      className="mt-3 text-sm font-semibold"
                      style={{ color: ACCENT }}
                    >
                      Learn more →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="mt-8 w-full bg-[#B29D9D]/40 py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div
                  className="mb-2 h-1 w-12 rounded"
                  style={{ background: ACCENT }}
                />
                <h3 className="text-4xl font-bold">
                  Recent <span style={{ color: ACCENT }}>Projects</span>
                </h3>
              </div>
              <button
                className="rounded-lg border-2 border-amber-300 text-amber-300 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-white/90 hidden md:block"
                aria-label="Show All"
              >
                Show All &nbsp; &raquo;
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 w-full">
              {PROJECTS.map((p, i) => (
                <article
                  key={i}
                  className="flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 md:w-[30rem] ring-1 ring-black/5"
                >
                  <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate text-base font-bold">{p.title}</h4>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                      {p.desc}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                      <span>Interior • Aug 2022</span>
                      <span className="inline-block rounded bg-gray-100 px-2 py-0.5">
                        •••
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <ReviewsCarousel />
        </section>
      </FadeInSection>
    </div>
  );
}

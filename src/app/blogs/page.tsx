// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Project = {
  id: number;
  title: string;
  blurb: string;
  priceNote: string; // not shown in new layout but kept for future use
  img: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Florida Hurricane / Flood Remediation & Mold Removal",
    blurb:
      "Essential guide to protecting your home from hurricane damage and preventing mold growth in Florida.",
    priceNote: "From 50000 per M",
    img: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Florida Hurricane / Flood Remediation & Mold Removal",
    blurb:
      "Essential guide to protecting your home from hurricane damage and preventing mold growth in Florida.",
    priceNote: "From 50000 per M",
    img: "/images/blog-1.jpg",
  },
  {
    id: 3,
    title: "Florida Hurricane / Flood Remediation & Mold Removal",
    blurb:
      "Essential guide to protecting your home from hurricane damage and preventing mold growth in Florida.",
    priceNote: "From 50000 per M",
    img: "/images/blog-1.jpg",
  },
];

// Gold gradient for the hero heading
const GOLD_TEXT =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)] bg-clip-text text-transparent";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* ===== HERO with bottom fade ===== */}
      <section className="relative isolate">
        <div className="relative h-[min(100svh,900px)] w-full overflow-hidden bg-white">
          <Image
            src="/images/c1.jpg"
            alt="Construction site"
            fill
            priority
            className="object-cover brightness-[.6]"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/45" />
          {/* bottom white fade so cards can overlap cleanly */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-b from-transparent via-white/25 to-white" />
        </div>

        {/* Hero text block */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-[clamp(5rem,30vh,18rem)]">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className={GOLD_TEXT}>Blogs</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CARDS (overlap hero) ===== */}
      <section
        id="projects"
        className="relative z-20 -mt-[clamp(8rem,12vh,14rem)] pb-28 pt-4"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* MOBILE: horizontal scroll with snap */}
          <div
            className={[
              "md:hidden",
              "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory",
              "px-1 -mx-1 pb-2",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            ].join(" ")}
          >
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className={clsx(
                  "group shrink-0 snap-center w-[85%] first:ml-3 last:mr-3",
                  "relative overflow-hidden rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 bg-transparent"
                )}
              >
                <div className="relative h-[22rem] w-full">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                  {/* subtle contrast boost across image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
                </div>

                {/* Bottom info slab inside the image */}
                <div className="absolute inset-x-2 bottom-2">
                  <div className="rounded-xl bg-neutral-900/60 p-4 text-white backdrop-blur-sm ring-1 ring-white/10 shadow-md">
                    <h3 className="text-[13px] font-extrabold leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-snug text-white/85 line-clamp-2">
                      {p.blurb}
                    </p>
                    <Link
                      href="#"
                      className="mt-2 inline-flex items-center text-[11px] font-semibold text-[#FFD333]"
                    >
                      Read More <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* DESKTOP/TABLET: grid of cards */}
          <div className="hidden grid-cols-2 gap-7 md:grid lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 bg-transparent"
              >
                <div className="relative h-[30rem] lg:h-[22rem] w-full">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
                </div>

                {/* Bottom info slab inside the image */}
                <div className="absolute inset-x-3 bottom-3">
                  <div className="rounded-[14px] bg-neutral-900/60 p-5 text-white backdrop-blur-sm ring-1 ring-white/10 shadow-md">
                    <h3 className="text-[14px] font-extrabold leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-snug text-white/85 line-clamp-2">
                      {p.blurb}
                    </p>
                    <Link
                      href="#"
                      className="mt-2 inline-flex items-center text-[12px] font-semibold text-[#FFD333]"
                    >
                      Read More <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

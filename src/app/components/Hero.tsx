// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Project = {
  id: number;
  title: string;
  blurb: string;
  priceNote: string;
  img: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Avenue 20",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.",
    priceNote: "From 50000 per M",
    img: "/images/c1.jpg",
  },
  {
    id: 2,
    title: "Modern Avenue 20",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.",
    priceNote: "From 50000 per M",
    img: "/images/c1.jpg",
  },
  {
    id: 3,
    title: "Modern Avenue 20",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.",
    priceNote: "From 50000 per M",
    img: "/images/c1.jpg",
  },
];

// Gold built from #FFE241
const GOLD_TEXT =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)] bg-clip-text text-transparent";
const GOLD_BG =
  "bg-[linear-gradient(130deg,#ffe241_0%,#f5d23a_28%,#e9c838_52%,#d4af37_76%,#b88c1a_100%)]";

export default function Hero() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* HERO: solid + dark to 80%, then last 20% fades to white */}
      <section className="relative isolate">
        <div className="relative h-[72vh] w-full overflow-hidden bg-white">
          <Image
            src="/images/home.jpg"
            alt="City highrise"
            fill
            priority
            className="
              object-cover
              brightness-[.55]
              [mask-image:linear-gradient(to_bottom,white_0%,white_00%,rgba(255,255,255,0)_100%)]
            "
          />
          {/* dark overlay for readability (kept over full image) */}
          <div className="pointer-events-none absolute inset-0 bg-black/40" />
        </div>

        {/* Centered hero copy (clear of floating nav) */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center pt-24 md:pt-28">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              BUILT <span className={GOLD_TEXT}>STRONG</span>,{" "}
              <span className={GOLD_TEXT}>BUILT</span> RIGHT
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="#projects"
                className={`group relative overflow-hidden ${GOLD_BG} rounded-full px-6 py-2.5 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(255,226,65,.55)]`}
              >
                <span className="relative z-10">Our Projects</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 translate-x-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.85),transparent)] transition-transform duration-1000 group-hover:translate-x-[300%]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section
        id="projects"
        className="relative z-20 -mt-36 pb-28 pt-4 md:-mt-32"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* MOBILE: center card full; side cards smaller & overlapped onto hero */}
          <div className="relative h-[24rem] md:hidden">
            {PROJECTS.map((p, i) => {
              const isCenter = i === 1;
              return (
                <article
                  key={p.id}
                  className={clsx(
                    "absolute bottom-0 overflow-hidden rounded-[28px] bg-neutral-900 shadow-2xl ring-1 ring-black/10",
                    // sizes & positions
                    isCenter
                      ? "left-1/2 w-[78%] -translate-x-1/2 z-[3]"
                      : i === 0
                      ? "left-1/2 w-[62%] -translate-x-[82%] scale-[.86] z-[2]"
                      : "left-1/2 w-[62%] translate-x-[52%] scale-[.86] z-[2]"
                  )}
                >
                  <div
                    className={clsx(
                      "relative w-full",
                      isCenter ? "h-[18.5rem]" : "h-[15.5rem]"
                    )}
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  </div>

                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-x-3 bottom-3",
                      isCenter ? "" : ""
                    )}
                  >
                    <div className="rounded-2xl bg-black/55 p-4 text-center backdrop-blur-md ring-1 ring-white/10">
                      <h3 className="text-base font-semibold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-relaxed text-white/85">
                        {p.blurb}
                      </p>
                      <div className="mt-2">
                        <span
                          className={`relative inline-block text-[11px] font-semibold tracking-wider uppercase ${GOLD_TEXT} drop-shadow-[0_0_8px_rgba(255,226,65,.45)]`}
                        >
                          {p.priceNote}
                          <span
                            aria-hidden
                            className="absolute inset-y-0 -left-full w-1/2 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.9),transparent)] transition-transform duration-1000 group-hover:translate-x-[260%]"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* DESKTOP/TABLET: classic 3-column with taller media */}
          <div className="hidden grid-cols-2 gap-7 md:grid lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-[28px] bg-neutral-900 shadow-2xl ring-1 ring-black/10"
              >
                <div className="relative h-[25rem] lg:h-[26rem] w-full">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                </div>

                <div className="pointer-events-none absolute inset-x-5 bottom-5">
                  <div className="rounded-2xl bg-black/55 p-5 text-center backdrop-blur-md ring-1 ring-white/10">
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/85 md:text-sm">
                      {p.blurb}
                    </p>
                    <div className="mt-3 flex items-center justify-center">
                      <span
                        className={`relative inline-block text-[12px] font-semibold tracking-wider uppercase ${GOLD_TEXT} drop-shadow-[0_0_8px_rgba(255,226,65,.45)]`}
                      >
                        {p.priceNote}
                        <span
                          aria-hidden
                          className="absolute inset-y-0 -left-full w-1/2 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.9),transparent)] transition-transform duration-1000 group-hover:translate-x-[260%]"
                        />
                      </span>
                    </div>
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

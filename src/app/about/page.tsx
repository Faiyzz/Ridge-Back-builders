import React from "react";
import Image from "next/image";
import ReviewsSection from "@/app/components/AboutReviews";
import FadeInSection from "@/app/components/FadeInSection";

const ACCENT = "#FFE241";

const REVIEWS = [
  {
    id: 1,
    name: "M Dhaybal",
    role: "Home Owner",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Real Estate Investor",
    text: "Great team, fast turnaround, and excellent results. Will definitely work with them again!",
  },
  {
    id: 3,
    name: "J. Rodriguez",
    role: "Contractor",
    text: "Professional and reliable. The communication was smooth and the quality was top-notch.",
  },
  {
    id: 4,
    name: "A. Williams",
    role: "Home Owner",
    text: "They delivered exactly what we needed on time and within budget. Highly recommend.",
  },
  {
    id: 5,
    name: "Imran Ali",
    role: "Builder",
    text: "Outstanding experience from start to finish.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section className="relative min-h-[100dvh] overflow-visible">
        <Image
          src="/images/aboutbg.jpg"
          alt="Construction"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-white/70 to-white" />

        <div className="absolute -top-48 inset-0 z-20 grid place-items-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              About{" "}
              <span className="relative inline-block">
                <span style={{ color: ACCENT }}>US</span>
                {/* yellow underline */}
                <span
                  className="absolute left-0 right-0 -bottom-2 h-0.5 "
                  style={{ background: ACCENT }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-4 text-white/80 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="mt-6 inline-flex items-center text-sm gap-2 rounded-full px-6 py-3 font-semibold text-black transition hover:brightness-110 md:hidden"
              style={{ background: ACCENT }}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="pt-10 absolute left-1/2 top-[15rem] md:top-32 z-30 w-full max-w-4xl -translate-x-1/2 translate-y-1/2 pointer-events-auto">
          <div className="flex items-end justify-end m-3 md:m-0 relative">
            <div className="absolute left-0">
              <Image
                src="/images/abbg3.png"
                alt="image"
                width={450}
                height={450}
                className="h-[10rem] md:h-[25rem] w-full object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/abbg2.png"
                alt="image"
                width={650}
                height={650}
                className="h-[12rem] md:h-[28rem] w-full object-cover"
              />
              <div className="absolute right-0 top-8 md:top-32 max-w-[13.5rem] md:max-w-[27rem]">
                <h1 className="font-medium text-sm md:font-bold md:text-4xl text-white">
                  We Are Experts in Building Dreams
                </h1>
                <p className="text-xs md:text-sm text-white mt-1 md:mt-3">
                  Construction is a general term meaning the art and science to
                  form objects, systems, or organizations, and comes from Latin
                  constructio and Old French construction.
                </p>
                <button className="bg-yellow-400 text-black text-xs md:text-lg px-3 py-1 md:px-6 md:py-2.5 mt-1 md:mt-4 rounded-lg md:font-semibold hover:bg-yellow-500 transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <FadeInSection>
        <section className="mt-40">
          <div className="container mx-auto px-6">
            {/* Header Row */}
            <div className="flex justify-between items-start mb-4 ">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                About Us
              </h2>
              <button className="bg-yellow-400 text-black px-4 py-1.5 md:px-6 md:py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition-colors">
                Learn more
              </button>
            </div>

            <p className="pt-10 text-gray-600 text-sm md:text-lg mb-8 md:mb-2 max-w-2xl">
              At Besnik Consultancy, we take pride in our values – service,
              integrity, and excellence.
            </p>

            {/* Grid with Text & Images */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-y-0 md:gap-x-5">
              {/* Left: Numbered Items */}
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                    1.
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Who We Are
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600">
                    You get a 2-week free trial to kick the Smarty tries. We
                    want you to.
                  </p>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                    2.
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    What Do We Do
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600">
                    We give you a free course that guides you through the
                    process.
                  </p>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                    3.
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    How Do We Help
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600">
                    Use our multimedia lecturers, videos, and coaching sessions.
                  </p>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                    4.
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Create success story
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600">
                    With access to online learning resources anyone can
                    transform.
                  </p>
                </div>
              </div>

              {/* Right: Images */}
              <div className="">
                <Image
                  src="/images/g4.png"
                  alt="image"
                  height={600}
                  width={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16 items-start">
              {/* LEFT — Copy + CTAs */}
              <div>
                <h2 className="mb-6 text-2xl sm:text-4xl font-bold tracking-wide text-black">
                  ABOUT OUR PROJECTS
                </h2>

                <p className="text-sm md:text-lg mb-10 max-w-xl leading-8 text-[#8F969C]">
                  And produce say the ten moments parties. Simple innate summer
                  fat appear basket his desire joy. Outward clothes promise at
                  gravity do excited. Sufficient particular impossible by
                  reasonable oh expression is. Yet preference connection
                  unpleasant yet melancholy but end appearance. And excellence
                  partiality estimating terminated day everything.
                </p>

                {/* CTAs row with floor shadow */}
                <div className="relative flex md:flex-wrap gap-x-4 md:gap-5">
                  <button className="relative rounded-[6px] bg-[#F1D54F] px-4 py-1.5 md:px-8 md:py-3 font-semibold text-black transition hover:brightness-105">
                    LEARN MORE
                  </button>

                  <button className="group relative inline-flex items-center gap-3 rounded-[6px] border border-[#F1D54F] px-5 py-1.5 md:px-8 md:py-3 font-semibold text-[#F1D54F]">
                    Watch Video
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 transition-transform group-hover:translate-x-0.5"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* CENTER — Vertical divider (only on lg+) */}
              <div className="relative hidden lg:block">
                <div className="h-full w-px bg-[#2E2E2E]" />
              </div>

              {/* RIGHT — 2x2 metric cards, staggered */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative overflow-hidden bg-white p-12 text-center text-[#3C3F42] shadow-[0_14px_28px_rgba(0,0,0,0.25)]">
                  <div className="text-3xl font-bold text-[#2F3236]">1000+</div>
                  <div className="mt-2 text-sm text-[#6C7278]">
                    Completed Projects
                  </div>

                  {/* thick underside strip like ref */}
                  <span className="pointer-events-none absolute left-4 right-4 -bottom-3 h-3 rounded-sm bg-[#2B2B2B]/70" />
                </div>

                <div className="bg-[#ECECEC] p-12 text-center text-[#3C3F42]">
                  <div className="text-3xl font-bold text-[#2F3236]">250+</div>
                  <div className="mt-2 text-sm text-[#6C7278]">
                    On Going Projects
                  </div>
                </div>

                <div className="bg-[#ECECEC] p-12 text-center text-[#3C3F42]">
                  <div className="text-3xl font-bold text-[#2F3236]">500+</div>
                  <div className="mt-2 text-sm text-[#6C7278]">
                    Happy Clients
                  </div>
                </div>

                <div className="bg-[#ECECEC] p-12 text-center text-[#3C3F42]">
                  <div className="text-3xl font-bold text-[#2F3236]">25</div>
                  <div className="mt-2 text-sm text-[#6C7278]">
                    Offices through out GLOB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Customer Reviews Section */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
          <ReviewsSection
            reviews={REVIEWS}
            accent="#F59E0B"
            pageSize={4}
            showAllHref="/reviews"
          />
        </section>
      </FadeInSection>
    </div>
  );
};

export default AboutPage;

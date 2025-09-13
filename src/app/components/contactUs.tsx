// components/ContactSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Big headline */}
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-6xl lg:text-4xl leading-[1.05]">
          Get in touch with us.
          <br /> We&apos;re here to assist you.
        </h2>

        {/* Content grid */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:mt-16 lg:grid-cols-12">
          {/* Left: image card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/10 overflow-hidden">
              <Image
                src="/images/contact.jpg" // <- replace with your asset
                alt="Scaffolding at sunset"
                width={900}
                height={1200}
                className="h-[420px] w-full object-cover md:h-[500px]"
                priority
              />
              {/* soft inner edge highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10" />
            </div>
          </div>

          {/* Right: form + details */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Form */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-semibold text-neutral-900">
                  Contact Us
                </h3>

                <form
                  className="mt-6 space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  {/* Full Name */}
                  <label className="block">
                    <span className="text-sm text-neutral-700">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="mt-2 block w-full bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                      placeholder="John Carter"
                    />
                  </label>

                  {/* Email */}
                  <label className="block">
                    <span className="text-sm text-neutral-700">E-mail</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="mt-2 block w-full bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                      placeholder="hi@green.com"
                    />
                  </label>

                  {/* Message */}
                  <label className="block">
                    <span className="text-sm text-neutral-700">Message</span>
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-2 block w-full resize-none bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                      placeholder="How can we help?"
                    />
                  </label>

                  {/* CTA */}
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
                  >
                    Contact Us
                  </button>
                </form>

                {/* Socials */}
                <div className="mt-8 flex items-center gap-5 text-neutral-900">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="transition hover:scale-110"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="transition hover:scale-110"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Twitter"
                    className="transition hover:scale-110"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Details column */}
              <div className="md:col-span-1">
                <dl className="space-y-6 text-[15px]">
                  <div>
                    <dt className="font-semibold text-neutral-900">Contact</dt>
                    <dd className="text-neutral-600">hi@green.com</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Based in</dt>
                    <dd className="text-neutral-600">
                      Los Angeles,
                      <br />
                      California
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle background flourish */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />
    </section>
  );
}

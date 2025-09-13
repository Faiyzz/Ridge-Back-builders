"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const ACCENT = "#FFE241";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: POST to your API route
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })
    setTimeout(() => setLoading(false), 600);
  }

  const inputBase =
    "w-full h-12 md:h-14 rounded-full bg-[#2A2A2A] px-5 text-white placeholder:text-white/60 " +
    "border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--acc)] focus:border-transparent transition";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1E1E1E] text-white"
      style={{ ["--acc" as any]: ACCENT }}
    >
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--acc)]/12 blur-[120px]" />
        <div className="absolute -bottom-28 -right-12 h-72 w-72 rounded-full bg-[var(--acc)]/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Heading */}
        <h2 className="text-center text-3xl leading-tight font-extrabold md:text-5xl md:leading-tight">
          Have Any Questions?{" "}
          <a
            href="#contact-form"
            className="underline decoration-[3px] md:decoration-[4px] underline-offset-[6px] md:underline-offset-[8px] text-[var(--acc)] hover:opacity-90"
          >
            Write Us
          </a>
        </h2>

        {/* Card container */}
        <div
          id="contact-form"
          className="mt-10 md:mt-12 rounded-2xl border border-white/10 bg-black/20 p-4 md:p-6 backdrop-blur"
        >
          <form
            onSubmit={onSubmit}
            className="
              grid gap-4 md:gap-5
              md:grid-cols-2
              md:[grid-template-rows:repeat(3,minmax(56px,auto))]
            "
          >
            {/* Row 1 */}
            <div className="col-span-1">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your Name"
                className={inputBase}
                required
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="theme" className="sr-only">
                Theme
              </label>
              <input
                id="theme"
                name="theme"
                placeholder="Theme"
                className={inputBase}
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-1">
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className={inputBase}
                required
              />
            </div>

            {/* Message spans full height (2 rows on desktop) */}
            <div className="col-span-1 md:row-span-2">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="
                  w-full min-h-[140px] md:min-h-[100%]
                  rounded-2xl bg-[#2A2A2A] p-5 text-white placeholder:text-white/60
                  border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--acc)] focus:border-transparent transition
                "
              />
            </div>

            {/* Row 3 */}
            <div className="col-span-1">
              <label htmlFor="phone" className="sr-only">
                Contact Phone
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="Contact Phone"
                className={inputBase}
              />
            </div>

            {/* Policy + Button */}
            <div className="md:col-span-2 mt-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex items-start gap-3 text-sm text-white/80">
                <input
                  type="checkbox"
                  name="policy"
                  className="mt-1 size-4 appearance-none rounded-[6px] border border-white/20 bg-transparent checked:bg-[var(--acc)] checked:border-[var(--acc)] focus:outline-none focus:ring-2 focus:ring-[var(--acc)]"
                  required
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="/privacy"
                    className="text-[var(--acc)] underline underline-offset-4 hover:opacity-90"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="
                  relative inline-flex items-center gap-2 self-start md:self-auto
                  rounded-full px-6 md:px-8 py-3 font-semibold text-black
                  bg-[var(--acc)]
                  shadow-[0_10px_30px_rgba(255,226,65,.35)]
                  transition hover:shadow-[0_16px_40px_rgba(255,226,65,.45)]
                  disabled:opacity-75
                "
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
                {/* soft glow */}
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-xl bg-[var(--acc)]/40" />
              </button>
            </div>
          </form>
        </div>

        {/* tiny helper copy (optional) */}
        <p className="mt-4 text-center text-sm text-white/60">
          We usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}

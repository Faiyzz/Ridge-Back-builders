"use client";

import { useState } from "react";
import type React from "react"; // for React.CSSProperties
import Link from "next/link";
import { Send } from "lucide-react";

const ACCENT = "#FFE241";

// Type helper for CSS variables in style={}
type CSSVars = React.CSSProperties & Record<"--acc", string>;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;

    // TODO: POST to your API route
    // await fetch("/api/subscribe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      form.reset();
    }, 600);
  }

  const inputBase =
    "w-full h-12 md:h-14 rounded-full bg-[#2A2A2A] px-5 text-white placeholder:text-white/60 " +
    "border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--acc)] focus:border-transparent transition";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1E1E1E] text-white"
      style={{ "--acc": ACCENT } as CSSVars}
    >
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--acc)]/12 blur-[120px]" />
        <div className="absolute -bottom-28 -right-12 h-72 w-72 rounded-full bg-[var(--acc)]/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Heading */}
        <h2 className="text-center text-3xl leading-tight font-extrabold md:text-5xl md:leading-tight">
          Subscribe for <span className="text-[var(--acc)]">Updates.</span>
        </h2>
        <p className="mt-3 text-center text-white/70">
          No spam. Just product drops, tips, and occasional perks.
        </p>

        {/* Card container */}
        <div
          id="contact-form"
          className="mt-10 md:mt-12 rounded-2xl border border-white/10 bg-black/20 p-4 md:p-6 backdrop-blur"
        >
          <form onSubmit={onSubmit} className="grid gap-4 md:gap-5">
            {/* Inputs row */}
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-4">
                <label htmlFor="name" className="sr-only">
                  Your Name (optional)
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name (optional)"
                  className={inputBase}
                />
              </div>

              <div className="md:col-span-5">
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

              <div className="md:col-span-3">
                <label htmlFor="phone" className="sr-only">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone (optional)"
                  className={inputBase}
                />
              </div>
            </div>

            {/* Policy + Button */}
            <div className="mt-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex items-start gap-3 text-sm text-white/80">
                <input
                  type="checkbox"
                  name="policy"
                  className="mt-1 size-4 appearance-none rounded-[6px] border border-white/20 bg-transparent checked:bg-[var(--acc)] checked:border-[var(--acc)] focus:outline-none focus:ring-2 focus:ring-[var(--acc)]"
                  required
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    className="text-[var(--acc)] underline underline-offset-4 hover:opacity-90"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="relative inline-flex items-center gap-2 self-start md:self-auto rounded-full px-6 md:px-8 py-3 font-semibold text-black bg-[var(--acc)] shadow-[0_10px_30px_rgba(255,226,65,.35)] transition hover:shadow-[0_16px_40px_rgba(255,226,65,.45)] disabled:opacity-75"
              >
                {loading ? "Subscribing..." : "Subscribe"}
                <Send className="h-4 w-4" />
                {/* soft glow */}
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-xl bg-[var(--acc)]/40" />
              </button>
            </div>

            {/* success message */}
            {success && (
              <p className="text-sm text-green-400">
                You’re in! Check your inbox for a confirmation email.
              </p>
            )}

            {/* honeypot (spam trap) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
          </form>
        </div>

        {/* tiny helper copy */}
      </div>
    </section>
  );
}

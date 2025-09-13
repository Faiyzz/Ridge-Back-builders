"use client";

import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  accentColor?: string; // button color
  newsletterApi?: string; // where to POST
};

export default function NewsletterSection({
  title = "Subscribe To Our Newsletter",
  subtitle = "Sign up today. Writing copy is time-consuming and difficult. Headline's artificial intelligence can take your thoughts.",
  ctaText = "Get Listed",
  accentColor = "#f59e0b", // amber-500 (matches your mock)
  newsletterApi = "/api/newsletter",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const r = await fetch(newsletterApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!r.ok) throw new Error();
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Copy */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">{subtitle}</p>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            aria-label="Newsletter subscription"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full rounded-full border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60"
              style={{ backgroundColor: accentColor }}
            >
              {status === "loading" ? "Submitting…" : ctaText}
            </button>

            <span
              className="mt-1 text-sm sm:ml-3 sm:mt-0"
              aria-live="polite"
              role="status"
            >
              {status === "ok" && (
                <span className="text-green-600">
                  Thanks! Check your inbox.
                </span>
              )}
              {status === "err" && (
                <span className="text-red-600">
                  Something went wrong. Try again.
                </span>
              )}
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}

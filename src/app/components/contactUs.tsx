// components/ContactSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUs() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((s) => ({ ...s, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        throw new Error("Please fill in name, email, and message.");
      }

      const res = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || "Failed to submit. Please try again.");
      }

      setSuccess("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong. Try again.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Big headline */}
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-6xl lg:text-4xl leading-[1.05]">
          Get in touch with us.
          <br /> We&apos;re here to assist you.
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:mt-16 lg:grid-cols-12">
          {/* Left image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/10 overflow-hidden">
              <Image
                src="/images/contact.webp"
                alt="Scaffolding at sunset"
                width={900}
                height={1200}
                className="h-[420px] w-full object-cover md:h-[500px]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/10" />
            </div>
          </div>

          {/* Right form + details */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Form */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-semibold text-neutral-900">
                  Contact Us
                </h3>

                <form className="mt-6 space-y-6" onSubmit={onSubmit}>
                  <label className="block">
                    <span className="text-sm text-neutral-700">Full Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChange("name")}
                      className="mt-2 block w-full bg-transparent border-0 border-b border-neutral-300 focus:border-yellow-400 focus:ring-0 placeholder:text-neutral-400"
                      placeholder="John Carter"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm text-neutral-700">E-mail</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={onChange("email")}
                      className="mt-2 block w-full bg-transparent border-0 border-b border-neutral-300 focus:border-yellow-400 focus:ring-0 placeholder:text-neutral-400"
                      placeholder="hi@green.com"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm text-neutral-700">Message</span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={onChange("message")}
                      className="mt-2 block w-full resize-none bg-transparent border-0 border-b border-neutral-300 focus:border-yellow-400 focus:ring-0 placeholder:text-neutral-400"
                      placeholder="How can we help?"
                    />
                  </label>

                  {success && (
                    <div className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-800 border border-green-200">
                      {success}
                    </div>
                  )}
                  {error && (
                    <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800 border border-red-200">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Contact Us"}
                  </button>
                </form>

                {/* Socials */}
                <div className="mt-8 flex items-center gap-6 text-neutral-700">
                  <Link
                    href="https://www.facebook.com/p/Ridgeback-Builders-100083112463811/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transition hover:text-yellow-400 hover:scale-110"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/ridgebackbuilders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition hover:text-yellow-400 hover:scale-110"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@RidgebackBuilt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="transition hover:text-yellow-400 hover:scale-110"
                  >
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-1">
                <dl className="space-y-6 text-[15px]">
                  <div>
                    <dt className="font-semibold text-neutral-900">Phone</dt>
                    <dd className="text-neutral-600 hover:text-yellow-500 transition">
                      <a href="tel:8139211717">(813) 921-1717</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Email</dt>
                    <dd className="text-neutral-600 hover:text-yellow-500 transition">
                      <a href="mailto:info@ridgebackbuilt.com">
                        info@ridgebackbuilt.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-900">Location</dt>
                    <dd className="text-neutral-600">
                      Tampa Bay,
                      <br />
                      Florida
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* yellow glow background */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />
    </section>
  );
}

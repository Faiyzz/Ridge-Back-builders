"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

type LinkItem = { label: string; href: string; external?: boolean };

const ACCENT = "#FFE241";

const groups: { heading: string; links: LinkItem[] }[] = [
  {
    heading: "Work",
    links: [
      { label: "Residence", href: "/residence" },
      { label: "Commercial", href: "/commercial" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Articles", href: "/articles" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documents", href: "/documents" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  // simple reveal-on-scroll
  React.useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("footer [data-animate]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-inview");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:gap-12 md:grid-cols-12">
          {/* Brand / Intro */}
          <section
            className="md:col-span-4 flex md:block flex-col items-center md:items-start text-center md:text-left"
            data-animate
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center md:justify-start gap-3"
            >
              <Image
                src="/images/logo.png"
                alt="Ridgeback Builders"
                width={220}
                height={80}
                className="h-14 md:h-12 w-auto transition-[transform,opacity] duration-300"
                priority={false}
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
              Design-first construction & remodeling in Lahore. Premium
              materials, transparent timelines, and craftsmanship that lasts.
            </p>

            {/* Social */}
            <nav
              aria-label="Social media"
              className="mt-6 flex items-center justify-center md:justify-start gap-4"
            >
              <SocialIcon label="Telegram" href="https://t.me/yourhandle">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21.6 3.2 2.9 10.4c-1.2.5-1.2 2.2.1 2.6l4.6 1.4 1.7 5c.2.7 1.1.9 1.6.3l2.7-2.8 4.9 3.6c.8.6 2 .1 2.2-.9l2.5-15c.2-1.1-.9-2-2.2-1.4zM8.3 13.4l9.7-6.1-7.7 7.5-.4 3.1-1.6-4.5z" />
                </svg>
              </SocialIcon>
              <SocialIcon
                label="Instagram"
                href="https://instagram.com/yourhandle"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.7.7.7.3 1.3.8 1.8 1.3.5.5 1 1.1 1.3 1.8.4.7.6 1.5.7 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.7 2.7a4.8 4.8 0 0 1-1.3 1.8 4.8 4.8 0 0 1-1.8 1.3c-.7.4-1.5.6-2.7.7-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.7-.7a4.8 4.8 0 0 1-1.8-1.3 4.8 4.8 0 0 1-1.3-1.8c-.4-.7-.6-1.5-.7-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .7-2.7.3-.7.8-1.3 1.3-1.8.5-.5 1.1-1 1.8-1.3.7-.4 1.5-.6 2.7-.7C8.4 2.2 8.8 2.2 12 2.2Zm0 2.2c-3.1 0-3.5 0-4.7.1-.9 0-1.5.2-2 .4-.5.2-.9.5-1.3.9-.4.4-.7.8-.9 1.3-.2.5-.4 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.5.4 2 .2.5.5.9.9 1.3.4.4.8.7 1.3.9.5.2 1 .4 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.5-.2 2-.4.5-.2.9-.5 1.3-.9.4-.4.7-.8.9-1.3.2-.5.4-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.5-.4-2a3.5 3.5 0 0 0-.9-1.3c-.4-.4-.8-.7-1.3-.9-.5-.2-1-.4-2-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.2a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8Zm0 2.2a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm5-2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </SocialIcon>
              <SocialIcon
                label="Facebook"
                href="https://facebook.com/yourhandle"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.4 22V12.9h3.1l.5-3.6h-3.6V7.1c0-1 .3-1.7 1.8-1.7h1.9V2.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7v2.6H7.1v3.6h3.1V22h3.2z" />
                </svg>
              </SocialIcon>
              <SocialIcon
                label="YouTube"
                href="https://youtube.com/@yourhandle"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23 7.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.2-.9C16.8 3.7 12 3.7 12 3.7h0s-4.8 0-8 .3c-.5 0-1.4.1-2.2.9C1.2 5.6 1 7.2 1 7.2S.8 9.2.8 11.2v1.6c0 2 .2 4 .2 4s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.8.3 7.8.3s4.8 0 8-.3c.5 0 1.4-.1 2.2-.9.6-.7.8-2.3.8-2.3s.2-2 .2-4v-1.6c0-2-.2-4-.2-4zM9.8 14.8V7.9l6.3 3.4-6.3 3.5z" />
                </svg>
              </SocialIcon>
            </nav>
          </section>

          {/* Link groups */}
          <section
            className="md:col-span-5 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left"
            data-animate
          >
            {groups.map((g) => (
              <nav
                key={g.heading}
                aria-labelledby={`footer-${g.heading.replace(/\s+/g, "-")}`}
                className="mx-auto md:mx-0"
                data-animate
              >
                <h3
                  id={`footer-${g.heading.replace(/\s+/g, "-")}`}
                  className="text-sm font-semibold tracking-wide text-neutral-200"
                >
                  {g.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        {...(l.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                        style={{ ["--tw-ring-color" as any]: ACCENT }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </section>

          {/* Contact */}
          <section
            className="md:col-span-3 lg:col-span-2 text-center md:text-left"
            data-animate
          >
            <h3 className="text-sm font-semibold tracking-wide text-neutral-200">
              Contact Us
            </h3>
            <address className="not-italic mt-4 space-y-2 text-sm text-neutral-400">
              <p>123 Main Street, Gulberg, Lahore, Pakistan</p>
              <p>
                <Link
                  href="tel:+923001234567"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  +92 300 1234567
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:hello@ridgebackbuilders.com"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  hello@ridgebackbuilders.com
                </Link>
              </p>
              <p>Mon–Sat: 9:00–18:00 PKT</p>
            </address>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                style={{ color: ACCENT, ["--tw-ring-color" as any]: ACCENT }}
              >
                Get a Quote
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-4 sm:flex-row items-center justify-between text-center">
          <p className="text-xs text-neutral-400">
            © {year} Ridgeback Builders. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-5 text-xs text-neutral-400">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
          <p className="text-xs text-neutral-400">
            Developed by{" "}
            <Link
              href="https://yourname.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              YourName
            </Link>
          </p>
        </div>
      </div>

      {/* scoped animation styles */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .reveal {
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 500ms ease, transform 500ms ease;
            will-change: opacity, transform;
          }
          .reveal.is-inview {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}

/* ---------- Helpers ---------- */
function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-neutral-300 hover:text-black hover:bg-[--accent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 transition-colors"
      style={
        {
          ["--accent" as any]: ACCENT,
          ["--tw-ring-color" as any]: ACCENT,
        } as React.CSSProperties
      }
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

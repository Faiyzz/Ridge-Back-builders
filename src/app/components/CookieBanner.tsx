"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import clsx from "clsx";
import { readConsent, writeConsent } from "../consent";

const GOLD = "#ffe241";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setOpen(true);
  }, []);

  function acceptAll() {
    writeConsent({ essential: true, analytics: true, marketing: true });
    setOpen(false);
  }
  function denyAll() {
    writeConsent({ essential: true, analytics: false, marketing: false });
    setOpen(false);
  }
  function saveCustom() {
    writeConsent({ essential: true, analytics, marketing });
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          exit={{ y: 40, opacity: 0, transition: { duration: 0.25 } }}
          className="fixed inset-x-0 bottom-0 z-[100] px-4 sm:px-6 pb-6"
          role="dialog"
          aria-labelledby="rb-cookie-title"
          aria-modal="true"
        >
          <div
            className={clsx(
              "mx-auto w-full max-w-5xl rounded-2xl p-5 sm:p-6",
              "border backdrop-blur",
              "shadow-[0_18px_60px_-12px_rgba(0,0,0,.55)]"
            )}
            style={{
              background: "rgba(11,11,18,.92)",
              borderColor: "rgba(255,255,255,.08)",
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="rb-cookie-title"
                  className="text-white tracking-[0.14em] uppercase font-semibold text-sm"
                >
                  Cookie Preferences
                </h2>
                <p className="mt-2 text-white/80 text-sm leading-relaxed max-w-2xl">
                  We use cookies to enhance your browsing experience and analyze
                  site traffic. Choose your preferences below.
                </p>
              </div>

              {/* Actions (desktop) */}
              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={acceptAll}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  Accept
                </button>
                <button
                  onClick={() => setCustomOpen((v) => !v)}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-white/90 hover:text-white"
                  style={{
                    backgroundColor: "rgba(184,140,26,.10)",
                    border: `1px solid ${GOLD}`,
                  }}
                >
                  Customize
                </button>
                <button
                  onClick={denyAll}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-black bg-neutral-300 hover:bg-neutral-200"
                >
                  Deny
                </button>
              </div>
            </div>

            {/* Customize link (mobile) */}
            <button
              onClick={() => setCustomOpen((v) => !v)}
              className="mt-3 inline-flex items-center gap-1 text-[13px] text-[#f5d23a] sm:hidden"
            >
              Customize Cookie Settings
              <span
                className={clsx(
                  "transition-transform",
                  customOpen && "rotate-180"
                )}
              >
                ▾
              </span>
            </button>

            {/* Customization panel */}
            <AnimatePresence initial={false}>
              {customOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.28 },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <PrefCard
                      title="Essential"
                      desc="Required for basic site functionality. Always on."
                      locked
                      checked
                    />
                    <PrefCard
                      title="Analytics"
                      desc="Anonymous usage data to improve performance and UX."
                      checked={analytics}
                      onChange={setAnalytics}
                    />
                    <PrefCard
                      title="Marketing"
                      desc="Personalized content and remarketing."
                      checked={marketing}
                      onChange={setMarketing}
                    />
                  </div>

                  {/* Save row (mobile) */}
                  <div className="mt-4 flex sm:hidden items-center gap-3">
                    <button
                      onClick={saveCustom}
                      className="rounded-lg px-4 py-2 text-sm font-semibold text-black"
                      style={{ backgroundColor: GOLD }}
                    >
                      Save
                    </button>
                    <button
                      onClick={denyAll}
                      className="rounded-lg px-4 py-2 text-sm font-semibold text-black bg-neutral-300"
                    >
                      Deny
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Save row (desktop, only when custom open) */}
            {customOpen && (
              <div className="mt-4 hidden sm:flex items-center justify-end gap-3">
                <button
                  onClick={saveCustom}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  Save Preferences
                </button>
              </div>
            )}

            {/* Bottom fine link (optional) */}
            <div className="mt-2 text-xs text-white/50">
              Your choices are stored for 12 months. You can update them anytime
              in the site footer.
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

/* --- Small preference card --- */
function PrefCard({
  title,
  desc,
  checked,
  onChange,
  locked,
}: {
  title: string;
  desc: string;
  checked?: boolean;
  onChange?: (v: boolean) => void;
  locked?: boolean;
}) {
  return (
    <div
      className="rounded-xl border p-4 bg-black/30"
      style={{ borderColor: "rgba(255,255,255,.08)" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-white font-medium">{title}</div>
          <div className="text-white/70 text-sm mt-1">{desc}</div>
        </div>

        {locked ? (
          <span
            className="text-[11px] rounded-full px-2 py-1 border"
            style={{ borderColor: "rgba(255,255,255,.18)", color: "#bbb" }}
          >
            Always on
          </span>
        ) : (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={!!checked}
              onChange={(e) => onChange?.(e.target.checked)}
            />
            <div className="w-11 h-6 rounded-full bg-white/15 peer-checked:bg-[#ffe241] transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
          </label>
        )}
      </div>
    </div>
  );
}

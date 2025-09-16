"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";

type Project = "Apartment" | "House" | "Office" | "Retail";
type Area = "Full Space" | "Living Area" | "Kitchen" | "Bedroom";
type BuildType = "Basic" | "Standard" | "Premium";

const ACCENT = "#FFE241";

const PROJECT_MULTIPLIER: Record<Project, number> = {
  Apartment: 1.0,
  House: 1.1,
  Office: 1.2,
  Retail: 1.25,
};

const BUILD_MULTIPLIER: Record<BuildType, number> = {
  Basic: 1.0,
  Standard: 1.15,
  Premium: 1.32,
};

export default function QuoteSection() {
  /* ------- state ------- */
  const [project, setProject] = useState<Project>("Apartment");
  const [area, setArea] = useState<Area>("Full Space");
  const [buildType, setBuildType] = useState<BuildType>("Standard");

  const [floors, setFloors] = useState(1); // 1–5
  const [sqm, setSqm] = useState(120); // 30–500
  const [sqmPrice, setSqmPrice] = useState(10000); // 1000–25000
  const [designerFinish, setDesignerFinish] = useState(false);

  const estimate = (() => {
    let base = sqm * sqmPrice * floors;
    base *= PROJECT_MULTIPLIER[project];
    base *= BUILD_MULTIPLIER[buildType];
    if (designerFinish) base *= 1.12;
    return Math.round(base);
  })();

  const resetAll = () => {
    setProject("Apartment");
    setArea("Full Space");
    setBuildType("Standard");
    setFloors(1);
    setSqm(120);
    setSqmPrice(10000);
    setDesignerFinish(false);
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);

  return (
    <section className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl">
      {/* BG image inside component */}
      <div className="absolute inset-0">
        <Image
          src="/images/c1.jpg"
          alt="Architectural backdrop"
          fill
          priority
          className="object-cover"
        />
        {/* Left → right dark overlay (≈70% on the left) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
      </div>

      {/* Layout */}
      <div className="relative grid min-h[540px] grid-cols-1 md:grid-cols-2">
        {/* Left panel */}
        <div className="flex items-center">
          <div className="w-full p-5 sm:p-8 md:p-10">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Get a <span style={{ color: ACCENT }}>Free</span> Quote
            </h2>

            {/* Dark themed custom selects (no double arrows) */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <PopoverSelect
                label="Select Project"
                value={project}
                onChange={(v) => setProject(v as Project)}
                options={["Apartment", "House", "Office", "Retail"]}
              />
              <PopoverSelect
                label="Select Area"
                value={area}
                onChange={(v) => setArea(v as Area)}
                options={["Full Space", "Living Area", "Kitchen", "Bedroom"]}
              />
              <PopoverSelect
                label="Type"
                value={buildType}
                onChange={(v) => setBuildType(v as BuildType)}
                options={["Basic", "Standard", "Premium"]}
              />
            </div>

            {/* Sliders: two small in a row, one big below */}
            <div className="mt-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Slider
                  compact
                  label="Floor"
                  value={floors}
                  min={1}
                  max={5}
                  step={1}
                  onChange={setFloors}
                />
                <Slider
                  compact
                  label="Square m²"
                  value={sqm}
                  min={30}
                  max={500}
                  step={1}
                  onChange={setSqm}
                />
              </div>

              <div className="mt-5">
                <Slider
                  label="Square area price (per m²)"
                  value={sqmPrice}
                  min={1000}
                  max={25000}
                  step={100}
                  onChange={setSqmPrice}
                  formatValue={(n) => `${fmt(n)}`}
                />
              </div>

              <label className="mt-4 flex items-center gap-2 text-sm text-white/80">
                <input
                  type="checkbox"
                  className="size-4 accent-[#FFE241]"
                  checked={designerFinish}
                  onChange={(e) => setDesignerFinish(e.target.checked)}
                />
                Designer Finish
              </label>
            </div>

            {/* Footer actions */}
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white/70">Estimated Total</p>
                <p className="text-2xl font-bold" style={{ color: ACCENT }}>
                  {fmt(estimate)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="rounded-full px-6 py-3 text-sm font-semibold text-black"
                  style={{ backgroundColor: ACCENT }}
                  onClick={() => alert(`Estimated Total: ${fmt(estimate)}`)}
                >
                  Get Quote
                </button>
                <button
                  className="text-xs text-white/70 underline underline-offset-4 hover:text-white"
                  onClick={resetAll}
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side left empty—shows the image cleanly */}
        <div className="hidden md:block" />
      </div>

      {/* Minimal global range styling */}
      <style jsx global>{`
        .quote-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            ${ACCENT} var(--filled, 0%),
            rgba(255, 255, 255, 0.18) var(--filled, 0%)
          );
          outline: none;
        }
        .quote-range.compact {
          height: 3px;
        }
        .quote-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: ${ACCENT};
          border: 2px solid #0a0a0a;
          cursor: pointer;
        }
        .quote-range::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: ${ACCENT};
          border: 2px solid #0a0a0a;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

/* ---------------- Helpers (dark custom select & slider) ---------------- */

function PopoverSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickAway = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  const current = value;

  return (
    <div className="relative" ref={ref}>
      <label className="mb-2 block text-xs text-white/70">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-white/10 bg-white/10 px-3 text-left text-sm text-white outline-none backdrop-blur-sm transition focus-visible:ring-2 focus-visible:ring-white/30"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{current}</span>
        <svg
          className={`size-4 transform text-white/70 transition ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-white/10 bg-neutral-900/95 p-1 shadow-xl backdrop-blur-sm"
          role="listbox"
        >
          {options.map((opt) => {
            const active = opt === value;
            return (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  role="option"
                  aria-selected={active}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  formatValue,
  compact = false,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
  formatValue?: (n: number) => string;
  compact?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  // Properly typed CSS variable for the track fill percent
  const styleVars: CSSProperties & Record<"--filled", string> = {
    "--filled": `${pct}%`,
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-white/70">{label}</span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white">
          {formatValue ? formatValue(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`quote-range ${compact ? "compact" : ""}`}
        style={styleVars}
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-[10px] text-white/50">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
}

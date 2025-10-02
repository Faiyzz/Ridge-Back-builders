"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ClientSearch({
  initialValue = "",
}: {
  initialValue?: string;
}) {
  const [value, setValue] = useState(initialValue);
  const sp = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Debounced client-side update of ?q= (no full reload)
  useEffect(() => {
    const t = setTimeout(() => {
      const currentQ = sp.get("q") ?? "";
      if (value === currentQ) return;

      const params = new URLSearchParams(sp.toString());
      if (value) params.set("q", value);
      else params.delete("q");

      router.replace(
        params.toString() ? `${pathname}?${params.toString()}` : pathname,
        { scroll: false }
      );
    }, 250);

    return () => clearTimeout(t);
  }, [value, sp, pathname, router]);

  const hasQ = useMemo(() => value.trim().length > 0, [value]);

  return (
    <div
      className="mt-6 w-full max-w-xl mx-auto"
      role="search"
      aria-label="Search blogs"
    >
      <div className="relative group">
        {/* search icon */}
        <span className="pointer-events-none absolute left-4 inset-y-0 flex items-center opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/80"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>

        <input
          type="text"
          name="q"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search blogs by title…"
          className={[
            "w-full rounded-full",
            "bg-white/10 backdrop-blur-xl",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_12px_40px_rgba(0,0,0,0.35)]",
            "ring-1 ring-white/20 focus:ring-2 focus:ring-yellow-300/60",
            "pl-12 pr-20 py-3",
            "text-sm md:text-base text-white placeholder:text-white/70",
            "outline-none transition-all duration-300",
          ].join(" ")}
        />

        {/* clear button */}
        {hasQ && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setValue("")}
            className={[
              "absolute right-2 inset-y-0 my-auto h-9 px-3 rounded-full",
              "text-xs font-medium",
              "bg-white/20 hover:bg-white/30 text-white",
              "backdrop-blur-md ring-1 ring-white/25",
              "flex items-center transition-colors",
            ].join(" ")}
          >
            Clear
          </button>
        )}

        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
      </div>
    </div>
  );
}

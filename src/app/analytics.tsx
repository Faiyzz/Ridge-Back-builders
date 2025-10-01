// app/analytics.tsx
"use client";
import { useEffect } from "react";
import { hasConsent } from "./consent";

export default function AnalyticsGate() {
  useEffect(() => {
    if (!hasConsent("analytics")) return;
    // Load your analytics here (gtag, plausible, etc.)
    const s = document.createElement("script");
    s.src = "https://plausible.io/js/script.js"; // example
    s.defer = true;
    s.setAttribute("data-domain", "ridgebackbuilders.com");
    document.head.appendChild(s);
  }, []);
  return null;
}

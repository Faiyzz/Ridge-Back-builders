// lib/consent.ts
export type Consent = {
  essential: true; // always true
  analytics: boolean;
  marketing: boolean;
  timestamp: number; // ms
  version: number; // bump if policy changes
};

const COOKIE_NAME = "rb_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year (seconds)
const VERSION = 1;

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(COOKIE_NAME + "="));
  if (!match) return null;
  try {
    const json = decodeURIComponent(match.split("=")[1] || "");
    const obj = JSON.parse(json) as Consent;
    if (typeof obj?.version !== "number") return null;
    return obj;
  } catch {
    return null;
  }
}

export function writeConsent(next: Omit<Consent, "timestamp" | "version">) {
  if (typeof document === "undefined") return;
  const value: Consent = { ...next, timestamp: Date.now(), version: VERSION };
  const encoded = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${COOKIE_NAME}=${encoded}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  try {
    localStorage.setItem(COOKIE_NAME, JSON.stringify(value));
  } catch {}
  window.dispatchEvent(new CustomEvent("rb:consent", { detail: value }));
}

export function hasConsent(kind: "analytics" | "marketing") {
  const c = readConsent();
  return !!c?.[kind];
}

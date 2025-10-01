// components/FooterNewsletter.tsx
"use client";

import * as React from "react";
import { toast } from "sonner";

export default function FooterNewsletter() {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const canSubmit =
    firstname.trim().length > 0 &&
    lastname.trim().length > 0 &&
    /^\S+@\S+\.\S+$/.test(email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email }),
      });
      const json = await res.json();

      if (res.ok && (json?.success ?? true)) {
        toast.success("Thanks for subscribing!");
        setDone(true);
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        toast.error(json?.message || "Error submitting data. Try again.");
      }
    } catch (err) {
      console.error("Newsletter submit error:", err);
      toast.error("Submission failed. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm text-zinc-100">
        🎉 You’re on the list! Watch your inbox for updates.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 md:p-5"
    >
      <h4
        className="mb-2 text-lg font-extrabold leading-tight text-[#FFE241]"
        style={{ fontFamily: "'Trobus Expanded', sans-serif" }}
      >
        Join Our Newsletter
      </h4>
      <p className="mb-4 text-sm text-zinc-300">
        Get project updates, tips, and offers. No spam—ever.
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <input
          placeholder="First name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          className="h-10 rounded-md border border-zinc-700 bg-zinc-800 px-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFE241]/40"
          aria-label="First name"
          required
        />
        <input
          placeholder="Last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          className="h-10 rounded-md border border-zinc-700 bg-zinc-800 px-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFE241]/40"
          aria-label="Last name"
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 rounded-md border border-zinc-700 bg-zinc-800 px-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFE241]/40"
          aria-label="Email address"
          required
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-xs text-zinc-400">
          By subscribing, you agree to receive emails from Ridgeback Builders.
        </span>
        <button
          type="submit"
          disabled={submitting || !canSubmit}
          className="shrink-0 rounded-md bg-[#FFE241] px-5 py-2 text-sm font-medium text-black transition hover:bg-[#ffd700] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Subscribe"}
        </button>
      </div>
    </form>
  );
}

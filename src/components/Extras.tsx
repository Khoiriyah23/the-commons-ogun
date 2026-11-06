"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Extras() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setState("loading");
    try {
      const r = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="bg-earth">
      <div className="mx-auto grid max-w-7xl gap-14 border-t border-sand/10 px-6 py-24 md:grid-cols-3 md:px-12">
        <Reveal>
          <p className="eyebrow text-clay">Next at The Commons</p>
          <div className="mt-6 flex items-center gap-5">
            <svg viewBox="0 0 80 80" className="size-20 shrink-0" aria-hidden>
              <circle cx="40" cy="40" r="39" fill="#3a2a1f" />
              <circle cx="40" cy="30" r="12" fill="#c06a35" fillOpacity="0.55" />
              <path d="M14 70c3-16 14-22 26-22s23 6 26 22a39 39 0 0 1-52 0Z" fill="#c06a35" fillOpacity="0.55" />
            </svg>
            <p className="font-serif text-3xl">Reveal soon</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="eyebrow text-clay">Stay close</p>
          {state === "done" ? (
            <p className="mt-6 font-serif text-2xl">Thank you. We’ll be in touch.</p>
          ) : (
            <form onSubmit={submit} className="mt-6">
              <label className="text-sm text-sand/70" htmlFor="nl">Get notified for the next gathering</label>
              <div className="mt-3 flex items-center gap-3 border-b border-sand/30 focus-within:border-clay">
                <input id="nl" name="email" type="email" required placeholder="Email" className="w-full bg-transparent py-3 text-lg outline-none placeholder:text-sand/30" />
                <Magnetic strength={0.5}>
                  <button disabled={state === "loading"} className="px-2 text-clay transition hover:text-sand" aria-label="Subscribe">→</button>
                </Magnetic>
              </div>
              {state === "error" && <p className="mt-2 text-sm text-clay">Something went wrong. Please try again.</p>}
            </form>
          )}
        </Reveal>

        <Reveal delay={0.24}>
          <p className="eyebrow text-clay">Location</p>
          <p className="mt-6 max-w-xs leading-relaxed text-sand/80">
            We gather somewhere quiet in Oke-Ogun. Location is shared upon invite.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

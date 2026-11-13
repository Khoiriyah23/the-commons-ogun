"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { openForm } from "@/lib/form";

const cards = [
  { label: "Guest", value: "To be announced", note: "" },
  { label: "Date", value: "Coming soon", note: "" },
  { label: "Location", value: "Oke Ogun", note: "The exact location is shared with confirmed guests." },
];

export default function NextUp() {
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
    <section id="next" className="bg-earth">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-40">
        <Reveal><p className="eyebrow text-clay">Next at The Commons</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">Who is coming to The Commons next?</h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-sand/15 p-8">
                <p className="eyebrow text-clay">{c.label}</p>
                <p className="mt-6 font-serif text-4xl">{c.value}</p>
                {c.note && <p className="mt-4 text-sm leading-relaxed text-sand/60">{c.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <Magnetic>
              <button onClick={() => openForm("member")} className="rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand transition hover:brightness-110">
                Request an Invitation
              </button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 max-w-xl border-t border-sand/15 pt-10">
            {state === "done" ? (
              <p className="font-serif text-3xl">Thank you. We will let you know.</p>
            ) : (
              <form onSubmit={submit}>
                <p className="text-lg text-sand/80">Want to know when the next guest is announced?</p>
                <p className="mt-1 text-sand/60">Leave your email and we will let you know.</p>
                <div className="mt-6 flex items-center gap-3 border-b border-sand/30 focus-within:border-clay">
                  <input name="email" type="email" required placeholder="Email address" className="w-full bg-transparent py-3 text-lg outline-none placeholder:text-sand/30" />
                  <button disabled={state === "loading"} className="shrink-0 px-2 text-sm text-clay transition hover:text-sand">Keep me posted →</button>
                </div>
                {state === "error" && <p className="mt-2 text-sm text-clay">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

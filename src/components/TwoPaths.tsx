"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import ApplyModal, { type Kind } from "./ApplyModal";

const paths = [
  {
    kind: "guest" as Kind,
    label: "For the builders",
    title: "Be Our Guest",
    desc: "For community champions, successful business owners, public servants, and builders who have something to pass on.",
    cta: "Apply to be a Guest →",
    tone: "bg-sand text-earth",
    sub: "text-earth/70",
  },
  {
    kind: "member" as Kind,
    label: "For the next builders",
    title: "Join The Commons",
    desc: "For young change-makers, founders, and community enthusiasts in Oke-Ogun who want to listen, ask, and build.",
    cta: "Request an Invite →",
    tone: "bg-clay text-sand",
    sub: "text-sand/85",
  },
];

export default function TwoPaths() {
  const [open, setOpen] = useState<Kind | null>(null);

  return (
    <section id="paths" className="bg-forest">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <Reveal><p className="eyebrow text-clay">03</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-4 font-serif text-5xl md:text-7xl">Two paths in.</h2></Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.kind} delay={i * 0.15} y={50}>
              <div className={`flex min-h-[34rem] flex-col items-center rounded-t-[220px] rounded-b-3xl px-8 pb-12 pt-28 text-center shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:-translate-y-2 ${p.tone}`}>
                <p className="eyebrow opacity-70">{p.label}</p>
                <h3 className="mt-5 font-serif text-5xl md:text-6xl">{p.title}</h3>
                <p className={`mt-6 max-w-sm leading-relaxed ${p.sub}`}>{p.desc}</p>
                <div className="mt-auto pt-10">
                  <Magnetic>
                    <button
                      onClick={() => setOpen(p.kind)}
                      className="rounded-full bg-earth px-8 py-4 text-sm font-medium text-sand transition hover:bg-black"
                    >
                      {p.cta}
                    </button>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ApplyModal kind={open} onClose={() => setOpen(null)} />
    </section>
  );
}

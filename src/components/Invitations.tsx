"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { openForm, type FormKind } from "@/lib/form";

const paths: { kind: FormKind; label: string; title: string; desc: string[]; cta: string; tone: string; sub: string }[] = [
  {
    kind: "guest",
    label: "For our guests",
    title: "Pass something on.",
    desc: [
      "The Commons invites people whose work and service have made their communities better.",
      "Share what experience has taught you with young people who are ready to learn from it.",
    ],
    cta: "Join us as a guest →",
    tone: "bg-sand text-earth",
    sub: "text-earth/70",
  },
  {
    kind: "member",
    label: "For young changemakers",
    title: "Come ready to learn.",
    desc: [
      "If you are trying to make a difference in your community, The Commons is a chance to learn from people who have been doing the work for years.",
      "Tell us what you are working on and what you want to learn.",
    ],
    cta: "Request an Invitation →",
    tone: "bg-clay text-sand",
    sub: "text-sand/85",
  },
];

export default function Invitations() {
  return (
    <section id="invitations" className="bg-forest">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <Reveal><p className="eyebrow text-clay">Who gets invited to The Commons?</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 font-serif text-5xl md:text-7xl">Two ways to take part.</h2></Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.kind} delay={i * 0.15} y={50}>
              <div className={`flex min-h-[36rem] flex-col items-center rounded-t-[220px] rounded-b-3xl px-8 pb-12 pt-28 text-center shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:-translate-y-2 ${p.tone}`}>
                <p className="eyebrow opacity-70">{p.label}</p>
                <h3 className="mt-5 font-serif text-5xl md:text-6xl">{p.title}</h3>
                <div className={`mt-6 max-w-sm space-y-4 leading-relaxed ${p.sub}`}>
                  {p.desc.map((d) => <p key={d}>{d}</p>)}
                </div>
                <div className="mt-auto pt-10">
                  <Magnetic>
                    <button onClick={() => openForm(p.kind)} className="rounded-full bg-earth px-8 py-4 text-sm font-medium text-sand transition hover:bg-black">
                      {p.cta}
                    </button>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

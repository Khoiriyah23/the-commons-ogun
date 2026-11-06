"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  { n: "1", t: "Invite-only", d: "Every seat is offered, never sold." },
  { n: "2", t: "Small Circle", d: "Few enough to hear every voice." },
  { n: "3", t: "Honest Conversation", d: "Questions asked. Answers shared." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-sand text-earth">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <Reveal><p className="eyebrow text-clay">04</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-4 font-serif text-5xl md:text-7xl">How It Works</h2></Reveal>
        <div className="relative mt-20">
          <motion.div
            className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-earth/30 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.2}>
                <div className="relative">
                  <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-clay font-serif text-xl text-sand">{s.n}</span>
                  <h3 className="mt-6 font-serif text-3xl md:text-4xl">{s.t}</h3>
                  <p className="mt-3 text-earth/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

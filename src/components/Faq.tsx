"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

// TODO: confirm answers with the client
const items = [
  { q: "Is it free?", a: "Yes. There is no fee to attend. Seats are limited and offered by invitation." },
  { q: "Who can join?", a: "Young change-makers, founders, and community enthusiasts in Oke-Ogun. Guests are community champions, business owners, public servants, and builders with something to pass on." },
  { q: "How often do you gather?", a: "We keep it small and intentional. Gatherings are announced ahead of time to those on our list." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-earth">
      <div className="mx-auto max-w-4xl px-6 pb-28 pt-8 md:px-12 md:pb-40">
        <Reveal><h2 className="font-serif text-5xl md:text-6xl">Questions</h2></Reveal>
        <div className="mt-12 border-t border-sand/15">
          {items.map((it, i) => (
            <div key={it.q} className="border-b border-sand/15">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-7 text-left font-serif text-2xl md:text-3xl">
                <span>{it.q}</span>
                <span className={`text-clay transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 leading-relaxed text-sand/70">{it.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

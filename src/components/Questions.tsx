"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { openForm } from "@/lib/form";

const items = [
  { q: "Who can attend?", a: "The Commons is for young people in Oke Ogun who care about their communities and are trying to make them better. Each gathering has limited seats. Attendance is by invitation." },
  { q: "Why is it invite only?", a: "We keep each gathering small enough for people to ask questions and have a real conversation with our guest." },
  { q: "How often does The Commons meet?", a: "Every two months." },
  { q: "Does it cost anything?", a: "No. There is no fee to attend." },
  { q: "Where does it happen?", a: "In Oke Ogun. The venue may change from one gathering to the next. We send the location to confirmed guests before the event." },
  { q: "Can I recommend someone?", a: "Yes. If you know a young person who should be in the room, tell us about them." },
];

export default function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="questions" className="bg-earth">
      <div className="mx-auto max-w-4xl px-6 pb-28 pt-8 md:px-12 md:pb-40 md:pt-12">
        <Reveal><p className="eyebrow text-clay">A few things you might want to know</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 font-serif text-5xl md:text-6xl">Questions</h2></Reveal>
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
        <div className="mt-10">
          <Magnetic>
            <button onClick={() => openForm("recommend")} className="rounded-full border border-clay px-7 py-3.5 text-sm text-clay transition hover:bg-clay hover:text-sand">
              Recommend someone
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

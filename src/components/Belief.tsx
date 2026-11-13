"use client";

import { motion } from "framer-motion";

const words = "The people who change a place rarely do it alone.".split(" ");

export default function Belief() {
  return (
    <section className="flex min-h-[85svh] flex-col items-center justify-center bg-clay px-6 py-32 text-center text-sand">
      <p className="eyebrow mb-10 text-sand/80">Our belief</p>
      <h2 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,8rem)] leading-[0.98]">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </h2>
    </section>
  );
}

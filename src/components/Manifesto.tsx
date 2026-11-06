"use client";

import { motion } from "framer-motion";

const words = "“Our future will not be outsourced.”".split(" ");

export default function Manifesto() {
  return (
    <section className="flex min-h-[90svh] items-center justify-center bg-clay px-6 py-32 text-center text-sand">
      <h2 className="max-w-6xl font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.95]">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
      </h2>
    </section>
  );
}

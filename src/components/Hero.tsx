"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { openForm } from "@/lib/form";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const back = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const mid = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const front = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentO = useTransform(scrollYProgress, [0.15, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const cueO = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <section id="top" ref={ref} className="relative h-[190vh]">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_bottom,#2b1b17_0%,#3d2218_50%,#8a4a27_100%)] text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[42%] size-[80vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,106,53,0.55),transparent_65%)]"
        />

        <div className="absolute inset-x-0 bottom-0 h-[58%]">
          <motion.svg style={{ y: back }} viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <path d="M0 320C180 220 320 260 480 300C640 340 760 180 960 210C1160 240 1280 300 1440 250V600H0Z" fill="#5a3322" fillOpacity="0.85" />
          </motion.svg>
          <motion.svg style={{ y: mid }} viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <path d="M0 400C220 330 380 420 600 370C820 320 980 400 1180 350C1300 320 1380 340 1440 360V600H0Z" fill="#1a2e1a" fillOpacity="0.92" />
          </motion.svg>
          <motion.svg style={{ y: front }} viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <path d="M0 480C260 430 480 500 720 460C960 420 1200 500 1440 450V600H0Z" fill="#120b09" />
          </motion.svg>
        </div>

        <motion.div style={{ opacity: contentO, y: contentY }} className="relative z-10 px-6 pt-16">
          <h1 className="mx-auto max-w-5xl font-serif text-[clamp(2.4rem,5.6vw,5.25rem)] leading-[1.02] tracking-tight">
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.5, delay: 0.3, ease }}>
                Learn from people who
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.5, delay: 0.55, ease }}>
                have made a <em className="text-clay">difference</em> here.
              </motion.span>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 1, ease }} className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-sand/85 md:text-lg">
            Every two months, young changemakers sit with people whose leadership and service have shaped communities across Oke Ogun.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 1, ease }} className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sand/70 md:text-lg">
            Come to listen, ask questions and learn what it takes to make a difference.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="mt-10">
            <Magnetic>
              <button onClick={() => openForm("member")} className="rounded-full bg-clay px-8 py-4 text-sm font-medium text-sand transition hover:brightness-110">
                Request an Invitation
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div style={{ opacity: cueO }} className="eyebrow absolute bottom-8 z-10 text-sand/70">
          ( scroll )
        </motion.div>
      </div>
    </section>
  );
}

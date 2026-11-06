"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function WhoWeAre() {
  return (
    <section id="who" className="bg-sand text-earth">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:gap-24 md:px-12 md:py-40">
        <div>
          <Reveal><p className="eyebrow text-clay">01</p></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 font-serif text-5xl md:text-7xl">Who We Are</h2></Reveal>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-earth/80">
            <Reveal delay={0.15}>
              <p>The Commons Oke-Ogun is a return to the old idea of the commons — a piece of land that belongs to everyone.</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>We are a small, invite-only community of young people in Oke-Ogun who believe our future will not be outsourced. We gather, we listen, we ask questions, and we build.</p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="font-serif text-2xl italic text-earth">No crowd. No noise. Just honest conversations about community, work, and service.</p>
            </Reveal>
          </div>
        </div>

        <Reveal y={40}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-earth shadow-[0_30px_60px_-20px_rgba(43,27,23,0.5)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(192,106,53,0.4),transparent_62%)]" />
            <Image
              src="/logo-light.png"
              alt="The Commons — a shared space for community and enterprise"
              width={552}
              height={400}
              className="absolute left-1/2 top-[54%] w-[74%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

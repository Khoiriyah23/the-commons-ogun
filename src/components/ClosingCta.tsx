"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { openForm } from "@/lib/form";

export default function ClosingCta() {
  return (
    <section className="bg-sand text-earth">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center md:px-12 md:py-40">
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">Want to join the next one?</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-earth/75">
            Tell us a little about yourself, what you are working on and what you hope to learn.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <Magnetic>
              <button onClick={() => openForm("member")} className="rounded-full bg-earth px-9 py-4 text-sm font-medium text-sand transition hover:bg-black">
                Request an Invitation
              </button>
            </Magnetic>
          </div>
          <p className="mt-6 text-sm text-earth/60">Invitations are free. Places are limited.</p>
        </Reveal>
      </div>
    </section>
  );
}

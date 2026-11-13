import Reveal from "./Reveal";

export default function Why() {
  return (
    <section id="why" className="bg-sand text-earth">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-[1fr_1.2fr] md:gap-24 md:px-12 md:py-40">
        <div>
          <Reveal><p className="eyebrow text-clay">Why The Commons exists</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">Experience is worth passing on.</h2>
          </Reveal>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-earth/80 md:pt-14">
          <Reveal delay={0.15}>
            <p>Across Oke Ogun, people have spent years solving problems, leading communities and learning lessons that rarely make it into a book or classroom.</p>
          </Reveal>
          <Reveal delay={0.25}><p>The Commons brings young people closer to that experience.</p></Reveal>
          <Reveal delay={0.35}>
            <p>Hear what worked. Learn from what did not. Find out what leadership looks like when the decisions are yours to make.</p>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="border-l-2 border-clay pl-6 font-serif text-3xl italic text-earth">Experience becomes more useful when it is shared.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

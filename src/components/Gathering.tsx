import Reveal from "./Reveal";

const asks = [
  "Ask how they started.",
  "Ask about the mistake that changed their thinking.",
  "Ask what they would do differently if they had to begin again.",
];

export default function Gathering() {
  return (
    <section id="gathering" className="bg-earth">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <Reveal><p className="eyebrow text-clay">The gathering</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">Get closer to the people doing the work.</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-sand/75">
            Our guest joins us to talk about their work as it happened, including the decisions they made and the lessons that took years to learn.
          </p>
        </Reveal>
        <div className="mt-16 border-t border-sand/15">
          {asks.map((a, i) => (
            <Reveal key={a} delay={i * 0.1}>
              <div className="flex items-baseline gap-6 border-b border-sand/15 py-8 md:gap-10">
                <span className="font-serif text-2xl italic text-clay md:text-3xl">0{i + 1}</span>
                <p className="font-serif text-3xl md:text-5xl">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-12 font-serif text-3xl italic text-clay md:text-4xl">That is The Commons.</p>
        </Reveal>
      </div>
    </section>
  );
}

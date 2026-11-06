import Reveal from "./Reveal";

const pillars = [
  { n: "01", t: "To imbibe the spirit of community development in our youth." },
  { n: "02", t: "To ignite an entrepreneurial spirit rooted in service." },
  { n: "03", t: "To connect the next generation with the builders of today." },
];

export default function Mission() {
  return (
    <section id="mission" className="bg-earth">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <Reveal><p className="eyebrow text-clay">02</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-4 font-serif text-5xl md:text-7xl">Our Mission</h2></Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <div className="border-t border-sand/20 pt-8">
                <span className="font-serif text-6xl italic text-clay">{p.n}</span>
                <p className="mt-6 text-xl leading-snug text-sand/90">{p.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

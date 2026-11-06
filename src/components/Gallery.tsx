import Image from "next/image";
import Reveal from "./Reveal";

type Item = { caption: string; label: string; ratio: string; bg: string; src?: string };

// TODO: add real photos to /public/gallery and set `src: "/gallery/name.jpg"`
const items: Item[] = [
  { caption: "First Gathering — Ahmed Raji, SAN", label: "Elders in conversation with youth", ratio: "aspect-[4/5]", bg: "linear-gradient(160deg,#c06a35,#2b1b17)" },
  { caption: "Guest Name — Date", label: "Oke-Ogun landscape", ratio: "aspect-[4/3]", bg: "linear-gradient(200deg,#5a7a4a,#1a2e1a)" },
  { caption: "Guest Name — Date", label: "Hands at work", ratio: "aspect-square", bg: "linear-gradient(140deg,#a0572b,#3a2218)" },
  { caption: "Guest Name — Date", label: "Chairs in a circle", ratio: "aspect-[3/4]", bg: "linear-gradient(180deg,#d8a77a,#5a3322)" },
  { caption: "Guest Name — Date", label: "The listening circle", ratio: "aspect-[4/3]", bg: "linear-gradient(120deg,#2b1b17,#c06a35)" },
  { caption: "Guest Name — Date", label: "Late afternoon light", ratio: "aspect-[4/5]", bg: "linear-gradient(190deg,#8a857c,#2b1b17)" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-earth">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <Reveal><p className="eyebrow text-clay">05</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-4 font-serif text-5xl md:text-7xl">Moments from The Commons</h2></Reveal>
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} className="mb-4 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-xl">
                <div className={`relative w-full overflow-hidden ${it.ratio}`}>
                  <div className="absolute inset-0 grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0">
                    {it.src ? (
                      <Image src={it.src} alt={it.label} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-end p-4" style={{ background: it.bg }}>
                        <span className="eyebrow text-sand/40">Placeholder · {it.label}</span>
                      </div>
                    )}
                  </div>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-[linear-gradient(to_top,rgba(43,27,23,0.92),transparent)] p-5 pt-16 text-sm opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {it.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

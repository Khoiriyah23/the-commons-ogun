import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#1d110e]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-20 md:flex-row md:px-12">
        <div>
          <p className="font-serif text-3xl tracking-wide">THE COMMONS OKE-OGUN</p>
          <p className="mt-3 text-sand/60">{site.tagline}</p>
        </div>
        <nav className="eyebrow flex flex-col gap-4 text-sand/80 md:items-end">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="transition hover:text-clay">Instagram</a>
          <a href={`mailto:${site.email}`} className="transition hover:text-clay">Email</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-clay">WhatsApp</a>
        </nav>
      </div>
      <p className="border-t border-sand/10 py-6 text-center text-xs text-sand/40">Built by young people in Oke-Ogun.</p>
    </footer>
  );
}

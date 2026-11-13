"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { openForm } from "@/lib/form";

const explore = [
  { href: "#why", label: "Why The Commons" },
  { href: "#gathering", label: "The gathering" },
  { href: "#invitations", label: "Invitations" },
  { href: "#next", label: "Next gathering" },
  { href: "#questions", label: "Questions" },
];

const link = "w-fit text-left text-sand/70 transition hover:text-clay";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-clay">{title}</p>
      <ul className="mt-6 flex flex-col gap-3.5">{children}</ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#1d110e]">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-12 md:pt-32">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image src="/mark-light.png" alt="" width={48} height={48} className="size-12" />
            <p className="mt-6 max-w-xs leading-relaxed text-sand/60">{site.tagline}</p>
            <p className="mt-6 text-sm text-clay">Every two months · Oke Ogun</p>
          </div>

          <Col title="Explore">
            {explore.map((l) => (
              <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>
            ))}
          </Col>

          <Col title="Take part">
            <li><button onClick={() => openForm("guest")} className={link}>Join us as a guest</button></li>
            <li><button onClick={() => openForm("member")} className={link}>Request an Invitation</button></li>
            <li><button onClick={() => openForm("recommend")} className={link}>Recommend someone</button></li>
          </Col>

          <Col title="Connect">
            <li><a href={site.instagram} target="_blank" rel="noreferrer" className={link}>Instagram ↗</a></li>
            <li><a href={`mailto:${site.email}`} className={link}>Email</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noreferrer" className={link}>WhatsApp ↗</a></li>
          </Col>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-sand/10 py-6 text-xs text-sand/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Commons. Invitations are free. Places are limited.</p>
          <a href="#top" className="transition hover:text-clay">Back to top ↑</a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none -mb-[0.14em] select-none whitespace-nowrap text-center font-serif text-[clamp(3.5rem,19.5vw,20rem)] leading-[0.85] text-sand/[0.06]"
      >
        THE COMMONS
      </div>
    </footer>
  );
}

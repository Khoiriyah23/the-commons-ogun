"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { href: "#why", label: "Why" },
  { href: "#gathering", label: "Gathering" },
  { href: "#invitations", label: "Invitations" },
  { href: "#next", label: "Next" },
  { href: "#questions", label: "Questions" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 400 && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open ? "border-b border-sand/10 bg-earth/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
          <a href="#top" aria-label="The Commons Oke-Ogun" className="flex items-center gap-3">
            <Image src="/mark-light.png" alt="" width={36} height={36} priority className="size-8 md:size-9" />
            <span className="font-serif text-lg tracking-[0.14em] md:text-xl">THE COMMONS</span>
          </a>

          <nav className="eyebrow hidden items-center gap-8 text-sand/80 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-clay">{l.label}</a>
            ))}
            <a href="#invitations" className="rounded-full border border-clay px-5 py-2.5 text-clay transition hover:bg-clay hover:text-sand">
              Request an Invitation
            </a>
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative size-10 lg:hidden"
          >
            <span className={`absolute left-2 right-2 h-px bg-sand transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-[14px]"}`} />
            <span className={`absolute left-2 right-2 h-px bg-sand transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "top-[26px]"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-earth px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-5xl"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#invitations"
                onClick={() => setOpen(false)}
                className="mt-6 self-start rounded-full bg-clay px-7 py-4 text-sm font-medium"
              >
                Request an Invitation →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

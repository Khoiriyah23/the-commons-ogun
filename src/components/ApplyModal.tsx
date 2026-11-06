"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";

export type Kind = "guest" | "member";
type Field = { name: string; label: string; type?: "text" | "number" | "area" };

const config: Record<Kind, { eyebrow: string; title: string; fields: Field[] }> = {
  guest: {
    eyebrow: "For the builders",
    title: "Apply to be a Guest",
    fields: [
      { name: "name", label: "Your name" },
      { name: "contact", label: "Email or WhatsApp" },
      { name: "build", label: "What do you build?", type: "area" },
      { name: "why", label: "Why do you want to share?", type: "area" },
    ],
  },
  member: {
    eyebrow: "For the next builders",
    title: "Request an Invite",
    fields: [
      { name: "name", label: "Your name" },
      { name: "age", label: "Age", type: "number" },
      { name: "lga", label: "LGA in Oke-Ogun" },
      { name: "contact", label: "Email or WhatsApp" },
      { name: "build", label: "What are you building?", type: "area" },
      { name: "why", label: "Why do you want to join?", type: "area" },
    ],
  },
};

const input =
  "mt-2 w-full border-b border-sand/30 bg-transparent py-3 text-lg text-sand outline-none transition placeholder:text-sand/30 focus:border-clay";

export default function ApplyModal({ kind, onClose }: { kind: Kind | null; onClose: () => void }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Record<string, string>>();
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    reset();
    setDone(false);
    setErr("");
  }, [kind, reset]);

  useEffect(() => {
    if (!kind) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [kind, onClose]);

  const onSubmit = async (data: Record<string, string>) => {
    setErr("");
    try {
      const r = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: kind, ...data }),
      });
      if (!r.ok) throw new Error();
      setDone(true);
    } catch {
      setErr("Something went wrong. Please try again.");
    }
  };

  const c = kind ? config[kind] : null;

  return (
    <AnimatePresence>
      {c && (
        <motion.div
          data-lenis-prevent
          className="fixed inset-0 z-[70] overflow-y-auto bg-earth/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl rounded-3xl border border-sand/10 bg-[#33211b] p-8 md:p-12"
            >
              <button onClick={onClose} aria-label="Close" className="absolute right-6 top-6 text-2xl text-sand/60 transition hover:text-clay">×</button>
              {done ? (
                <div className="py-10 text-center">
                  <h3 className="font-serif text-4xl">Thank you.</h3>
                  <p className="mt-4 text-sand/70">We’ve received your note. If there’s a seat for you, we’ll reach out.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <p className="eyebrow text-clay">{c.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-4xl md:text-5xl">{c.title}</h3>
                  <div className="mt-8 space-y-6">
                    {c.fields.map((f) => (
                      <label key={f.name} className="block text-xs uppercase tracking-[0.2em] text-sand/60">
                        {f.label}
                        {f.type === "area" ? (
                          <textarea rows={3} className={input} {...register(f.name, { required: true })} />
                        ) : (
                          <input type={f.type ?? "text"} className={input} {...register(f.name, { required: true })} />
                        )}
                        {errors[f.name] && <span className="mt-1 block normal-case tracking-normal text-clay">Required</span>}
                      </label>
                    ))}
                  </div>
                  {err && <p className="mt-6 text-clay">{err}</p>}
                  <button disabled={isSubmitting} className="mt-10 w-full rounded-full bg-clay py-4 font-medium text-sand transition hover:brightness-110 disabled:opacity-60">
                    {isSubmitting ? "Sending…" : "Send"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

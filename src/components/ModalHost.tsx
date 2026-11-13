"use client";

import { useEffect, useState } from "react";
import ApplyModal, { type Kind } from "./ApplyModal";

export default function ModalHost() {
  const [kind, setKind] = useState<Kind | null>(null);

  useEffect(() => {
    const handler = (e: Event) => setKind((e as CustomEvent<Kind>).detail);
    window.addEventListener("commons:open", handler);
    return () => window.removeEventListener("commons:open", handler);
  }, []);

  return <ApplyModal kind={kind} onClose={() => setKind(null)} />;
}

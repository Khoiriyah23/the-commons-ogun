export type FormKind = "guest" | "member" | "recommend";

export function openForm(kind: FormKind) {
  window.dispatchEvent(new CustomEvent("commons:open", { detail: kind }));
}

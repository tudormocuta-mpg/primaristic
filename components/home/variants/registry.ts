// Registry of all homepage variants. Adding a new variant: append here and
// create the corresponding component in this folder.

export type VariantId = "a" | "b" | "c" | "d";

export const VARIANT_IDS: readonly VariantId[] = ["a", "b", "c", "d"] as const;

export interface VariantMeta {
  id: VariantId;
  label: string;
  description: string;
}

export const VARIANT_META: Record<VariantId, VariantMeta> = {
  a: {
    id: "a",
    label: "A · Editorial Warmth",
    description: "Newsreader serif + cream + terracotta. Revistă editorială.",
  },
  b: {
    id: "b",
    label: "B · Clinical Index",
    description: "Funnel Display + off-white + roșu accent. Enciclopedie clinică.",
  },
  c: {
    id: "c",
    label: "C · Quiet Practice",
    description: "DM Sans + verde forestier. Produs digital de sănătate.",
  },
  d: {
    id: "d",
    label: "D · Movement & Earth",
    description: "Frank Ruhl Libre + paletă caldă. Curbe și mișcare.",
  },
};

export function isVariantId(value: string): value is VariantId {
  return (VARIANT_IDS as readonly string[]).includes(value);
}

// Registry of all homepage variants. Adding a new variant: append here and
// create the corresponding component in this folder.

export type VariantId = "editorial" | "clinic" | "modern" | "vibrant";

export const VARIANT_IDS: readonly VariantId[] = [
  "editorial",
  "clinic",
  "modern",
  "vibrant",
] as const;

export interface VariantMeta {
  id: VariantId;
  label: string;
  description: string;
}

export const VARIANT_META: Record<VariantId, VariantMeta> = {
  editorial: {
    id: "editorial",
    label: "Editorial",
    description: "Newsreader serif + cream + terracotta. Revistă editorială.",
  },
  clinic: {
    id: "clinic",
    label: "Clinic",
    description: "Funnel Display + off-white + roșu accent. Enciclopedie clinică.",
  },
  modern: {
    id: "modern",
    label: "Modern",
    description: "DM Sans + verde forestier. Produs digital de sănătate.",
  },
  vibrant: {
    id: "vibrant",
    label: "Vibrant",
    description: "Frank Ruhl Libre + paletă caldă. Curbe și mișcare.",
  },
};

export function isVariantId(value: string): value is VariantId {
  return (VARIANT_IDS as readonly string[]).includes(value);
}

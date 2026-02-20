import type { Dictionary } from "./ro";
import type { Locale } from "../config";

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  ro: () => import("./ro"),
  en: () => import("./en"),
  de: () => import("./de"),
  es: () => import("./es"),
  fr: () => import("./fr"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await dictionaries[locale]();
  return mod.default;
}

export type { Dictionary };

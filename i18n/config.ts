export const locales = ["ro", "en", "de", "es", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ro";

export const localeNames: Record<Locale, string> = {
  ro: "Română",
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
};

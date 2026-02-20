import { defaultLocale, type Locale } from "@/i18n/config";

export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

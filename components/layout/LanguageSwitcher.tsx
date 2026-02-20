"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  locales,
  localeNames,
  defaultLocale,
  type Locale,
} from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function getTargetPath(targetLocale: Locale): string {
    let path = window.location.pathname;
    // Strip current locale prefix
    for (const locale of locales) {
      if (path.startsWith(`/${locale}/`)) {
        path = path.slice(`/${locale}`.length);
        break;
      } else if (path === `/${locale}`) {
        path = "/";
        break;
      }
    }
    if (targetLocale === defaultLocale) return path || "/";
    return `/${targetLocale}${path || "/"}`;
  }

  function handleSwitch(targetLocale: Locale) {
    document.cookie = `NEXT_LOCALE=${targetLocale};path=/;max-age=31536000;SameSite=Lax`;
    setOpen(false);
    window.location.href = getTargetPath(targetLocale);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
        aria-label="Change language"
      >
        {currentLocale.toUpperCase()}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleSwitch(locale)}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted",
                locale === currentLocale
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              )}
            >
              <span className="text-xs font-bold uppercase">
                {locale.toUpperCase()}
              </span>
              <span>{localeNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

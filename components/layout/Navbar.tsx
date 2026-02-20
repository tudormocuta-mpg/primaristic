"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { localePath } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

function LogoIcon() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: dict.nav.profesori, href: localePath(locale, "/profesori") },
    { label: dict.nav.formare, href: localePath(locale, "/formare") },
    { label: dict.nav.evenimente, href: localePath(locale, "/evenimente") },
    { label: dict.nav.contact, href: localePath(locale, "/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link
          href={localePath(locale, "/")}
          className="flex items-center gap-3"
        >
          <LogoIcon />
          <span className="font-display text-xl tracking-wider text-foreground">
            PRIMARISTICA<sup className="text-xs">®</sup>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher currentLocale={locale} />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen ? dict.common.closeMenu : dict.common.openMenu
            }
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-3 py-3 text-sm font-medium uppercase tracking-widest transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

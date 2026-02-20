import Link from "next/link";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

function LogoIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
      <svg
        className="h-4 w-4"
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

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const navItems = [
    { label: dict.nav.profesori, href: localePath(locale, "/profesori") },
    { label: dict.nav.formare, href: localePath(locale, "/formare") },
    { label: dict.nav.evenimente, href: localePath(locale, "/evenimente") },
    { label: dict.nav.contact, href: localePath(locale, "/contact") },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <LogoIcon />
              <p className="font-display text-lg text-foreground">
                PRIMARISTICA<sup className="text-xs">®</sup>
              </p>
            </div>
            <p className="mt-4 text-sm font-light text-muted-foreground">
              {dict.metadata.siteDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
              {dict.common.navigation}
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-light text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
              {dict.common.contactLabel}
            </p>
            <ul className="space-y-3 text-sm font-light text-muted-foreground">
              <li>{siteConfig.contact.organization}</li>
              <li>
                {dict.common.phone}:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                {dict.common.schedule}: {dict.common.scheduleValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs font-light text-muted-foreground">
          <p>{dict.common.copyright}</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} {dict.metadata.siteName}.{" "}
            {dict.common.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

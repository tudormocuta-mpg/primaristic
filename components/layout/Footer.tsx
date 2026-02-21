import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

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
              <Image
                src="/images/logo-icon.jpg"
                alt="PRIMARISTICA®"
                width={32}
                height={32}
                className="h-8 w-8"
              />
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
              <li>{siteConfig.contact.address}</li>
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
              <li>
                <a
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs font-light text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {dict.metadata.siteName}.{" "}
            {dict.common.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

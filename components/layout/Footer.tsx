import Link from "next/link";
import { siteConfig } from "@/config/site";

function LogoIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
      <svg className="h-4 w-4" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export function Footer() {
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
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
              Navigare
            </p>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
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
              Contact
            </p>
            <ul className="space-y-3 text-sm font-light text-muted-foreground">
              <li>{siteConfig.contact.organization}</li>
              <li>
                Tel:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>Program: {siteConfig.contact.schedule}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs font-light text-muted-foreground">
          <p>{siteConfig.copyright}</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Toate
            drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

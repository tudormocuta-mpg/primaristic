import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-primary">
              PRIMARISTIC<sup className="text-xs">®</sup>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">
              Navigare
            </p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.contact.organization}</li>
              <li>
                Tel:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>Program: {siteConfig.contact.schedule}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>{siteConfig.copyright}</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

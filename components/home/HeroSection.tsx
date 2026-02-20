import Link from "next/link";
import { localePath } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeroSectionProps {
  dict: Dictionary["home"]["hero"];
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-primary opacity-10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent opacity-10 blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h1 className="font-display text-5xl italic leading-tight text-foreground md:text-7xl">
          {dict.tagline}.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          {dict.subtitle}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">
          <Link
            href="#ce-este"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
          >
            {dict.ctaPrimary}
          </Link>
          <Link
            href={localePath(locale, "/profesori")}
            className="inline-flex items-center justify-center border border-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-white"
          >
            {dict.ctaSecondary}
          </Link>
        </div>
      </div>
    </header>
  );
}

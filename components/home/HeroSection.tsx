import Image from "next/image";
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

      <div className="relative z-10 mx-auto max-w-7xl grid gap-12 px-6 lg:grid-cols-2 lg:px-8 items-center">
        {/* Left column: text */}
        <div className="text-center lg:text-left">
          <h1 className="font-display text-5xl italic leading-tight text-foreground md:text-7xl">
            {dict.tagline}.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
            {dict.subtitle}
          </p>

          <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row lg:justify-start">
            <Link
              href="#ce-este"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            >
              {dict.ctaPrimary}
            </Link>
            <Link
              href={localePath(locale, "/profesori")}
              className="inline-flex items-center justify-center rounded-sm border border-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-white"
            >
              {dict.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Right column: hero photo */}
        <div className="relative hidden min-h-[500px] lg:block">
          <Image
            src="/images/hero-2.jpg"
            alt="PRIMARISTICA®"
            fill
            className="rounded-2xl object-cover shadow-md grayscale transition-all duration-700 ease-in-out hover:shadow-xl hover:grayscale-0"
            priority
          />
        </div>
      </div>
    </header>
  );
}

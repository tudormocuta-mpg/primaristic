import Link from "next/link";
import { Button } from "@/components/ui/button";
import { localePath } from "@/lib/i18n-utils";
import { defaultLocale, type Locale } from "@/i18n/config";

interface ContactCTAProps {
  title?: string;
  description?: string;
  locale?: Locale;
  buttonLabel?: string;
}

export function ContactCTA({
  title = "Contactează-ne pentru informații",
  description = "Suntem aici pentru a răspunde întrebărilor tale despre PRIMARISTICA® și despre cum te poate ajuta.",
  locale = defaultLocale,
  buttonLabel = "Contactează-ne",
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-3xl font-normal text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg font-light text-white/85">
          {description}
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-white px-10 font-bold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
          >
            <Link href={localePath(locale, "/contact")}>{buttonLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

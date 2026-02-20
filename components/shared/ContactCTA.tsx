import Link from "next/link";
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
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl text-white md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80">
          {description}
        </p>
        <div className="mt-10">
          <Link
            href={localePath(locale, "/contact")}
            className="inline-block rounded bg-white px-10 py-4 font-bold text-primary shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-xl"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

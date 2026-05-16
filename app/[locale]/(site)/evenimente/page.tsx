import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { evenimente } from "@/data/evenimente";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale as Locale);
  return {
    title: dict.metadata.evenimente.title,
    description: dict.metadata.evenimente.description,
  };
}

export default async function EvenimentePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = dict.evenimente;

  const viitoare = evenimente.filter((e) => !e.trecut);
  const trecute = evenimente.filter((e) => e.trecut);

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />

      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        {/* Evenimente viitoare */}
        {viitoare.length > 0 && (
          <section className="mb-20">
            <div className="mb-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t.upcoming.label}
              </span>
              <h2 className="font-display text-3xl text-foreground">
                {t.upcoming.title}
              </h2>
            </div>
            <div className="space-y-5">
              {viitoare.map((ev) => (
                <div
                  key={ev.id}
                  className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:gap-6 sm:p-8"
                >
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15 sm:h-20 sm:w-20">
                    <span className="font-display text-xl text-primary sm:text-2xl">
                      {ev.data}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                      {ev.titlu[locale]}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-accent">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{ev.locatie}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {ev.descriere[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Evenimente trecute */}
        {trecute.length > 0 && (
          <section>
            <div className="mb-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {t.past.label}
              </span>
              <h2 className="font-display text-3xl text-foreground">
                {t.past.title}
              </h2>
            </div>
            <div className="space-y-5">
              {trecute.map((ev) => (
                <div
                  key={ev.id}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6 opacity-80 sm:gap-6 sm:p-8"
                >
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border border-border bg-muted sm:h-20 sm:w-20">
                    <span className="font-display text-xl text-muted-foreground sm:text-2xl">
                      {ev.data}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-foreground sm:text-xl">
                      {ev.titlu[locale]}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{ev.locatie}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {ev.descriere[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {viitoare.length === 0 && trecute.length === 0 && (
          <p className="text-center text-lg text-muted-foreground">
            {t.noEvents}
          </p>
        )}
      </div>

      <ContactCTA
        title={t.contactCTA.title}
        locale={locale}
        buttonLabel={dict.common.contactUs}
      />
    </>
  );
}

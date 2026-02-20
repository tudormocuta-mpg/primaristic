import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { profesori } from "@/data/profesori";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/lib/i18n-utils";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale as Locale);
  return {
    title: dict.metadata.profesori.title,
    description: dict.metadata.profesori.description,
  };
}

export default async function ProfesoriPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = dict.profesori;

  const activi = profesori.filter((p) => p.activ);
  const absolventi = profesori.filter((p) => !p.activ);

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {/* Profesori în Activitate */}
        {activi.length > 0 && (
          <section className="mb-20">
            <div className="mb-10 text-center">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t.activeTeam.label}
              </span>
              <h2 className="font-display text-3xl text-foreground">
                {t.activeTeam.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {activi.map((p) => (
                <div
                  key={p.id}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={p.imagine}
                      alt={`${t.portrait} ${p.nume}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                        {t.badges.active}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-foreground transition-colors duration-300 group-hover:text-primary">
                      {p.nume}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{p.locatie}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Comunitatea de Absolvenți */}
        {absolventi.length > 0 && (
          <section className="mb-20">
            <div className="mb-10 text-center">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {t.alumni.label}
              </span>
              <h2 className="font-display text-3xl text-foreground">
                {t.alumni.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {absolventi.map((p) => (
                <div
                  key={p.id}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={p.imagine}
                      alt={`${t.portrait} ${p.nume}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                        {t.badges.alumni}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-foreground transition-colors duration-300 group-hover:text-primary">
                      {p.nume}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{p.locatie}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Info box */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="mb-3 font-display text-xl text-foreground">
            {t.aboutTraining.title}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.aboutTraining.text}
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" className="rounded-full">
              <Link href={localePath(locale, "/formare")}>
                {t.aboutTraining.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ContactCTA
        title={t.contactCTA.title}
        description={t.contactCTA.description}
        locale={locale}
        buttonLabel={dict.common.contactUs}
      />
    </>
  );
}

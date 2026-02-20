import type { Metadata } from "next";
import Link from "next/link";
import { type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { ContactCTA } from "@/components/shared/ContactCTA";
import {
  IconPregnant,
  IconNewborn,
  IconToddler,
  IconStudent,
  IconYouth,
  IconAdult,
  IconSenior,
  IconFamily,
  IconNeural,
  IconWave,
  IconLesson,
  IconPractice,
  IconGrowth,
} from "@/components/shared/Icons";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/lib/i18n-utils";

const audienceIcons: ComponentType<{ className?: string }>[] = [
  IconPregnant,
  IconNewborn,
  IconToddler,
  IconStudent,
  IconYouth,
  IconAdult,
  IconSenior,
  IconFamily,
];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale as Locale);
  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = dict.home;

  return (
    <>
      <HeroSection dict={t.hero} locale={locale} />

      {/* Ce este Primaristica */}
      <section id="ce-este" className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.whatIs.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.whatIs.title}
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">{t.whatIs.paragraphs[0].split(".")[0]}.</strong>{" "}
              {t.whatIs.paragraphs[0].split(".").slice(1).join(".").trim()}
            </p>
            <p>{t.whatIs.paragraphs[1]}</p>
            <p>{t.whatIs.paragraphs[2]}</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Reflexele Primare */}
      <section id="concepte" className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.concepts.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.concepts.title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconNeural className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {t.concepts.primaryReflexes.title}
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {t.concepts.primaryReflexes.paragraphs.map((p, i) => (
                  <p key={i}>
                    {i === 2 ? (
                      <>
                        {p.split("98%")[0]}
                        <strong className="text-foreground">98%</strong>
                        {p.split("98%")[1]}
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconWave className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {t.concepts.muscleTone.title}
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {t.concepts.muscleTone.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <p className="text-lg font-light italic text-foreground">
              {t.concepts.quote.text}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.concepts.quote.attribution}
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Cui se adresează */}
      <section id="cui-se-adreseaza" className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.audience.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.audience.title}
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              {t.audience.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.audience.groups.map((group, i) => {
              const Icon = audienceIcons[i];
              return (
                <div
                  key={group.title}
                  className="group relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10 transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:ring-primary/20">
                    <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-dark" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {group.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {group.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Cum funcționează */}
      <section id="cum-functioneaza" className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.method.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.method.title}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.method.steps.map((step, i) => {
              const icons = [IconLesson, IconPractice, IconGrowth];
              const StepIcon = icons[i];
              return (
                <div
                  key={step.title}
                  className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                    <StepIcon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-8">
            <h3 className="font-bold text-foreground">
              {t.method.children.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.method.children.text}
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Beneficii / Testimoniale */}
      <section id="beneficii" className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.testimonials.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              {t.testimonials.intro}
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <svg
              className="h-10 w-10 text-primary/15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 7.5a4.5 4.5 0 00-4.5 4.5c0 1.38.63 2.63 1.6 3.48A6.73 6.73 0 013 21h1.5c0-2.66 1.83-4.9 4.28-5.54A4.49 4.49 0 0011 7.5zm-4 4.5a3 3 0 116 0 3 3 0 01-6 0zM22 7.5a4.5 4.5 0 00-4.5 4.5c0 1.38.63 2.63 1.6 3.48A6.73 6.73 0 0114 21h1.5c0-2.66 1.83-4.9 4.28-5.54A4.49 4.49 0 0022 7.5zm-4 4.5a3 3 0 116 0 3 3 0 01-6 0z" />
            </svg>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.testimonials.items.map((item) => (
              <div
                key={item}
                className="group relative rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/20"
              >
                <div className="absolute inset-y-3 left-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent transition-all duration-300 group-hover:via-primary/50" />
                <p className="text-sm font-light italic text-muted-foreground">
                  {"\u201E"}...{item}
                  {"\u201D"}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t.testimonials.outro}
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Istoric */}
      <section id="istoric" className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.history.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.history.title}
            </h2>
          </div>

          <div className="relative space-y-6">
            <div className="absolute bottom-8 left-[52px] top-8 hidden w-px bg-gradient-to-b from-primary/20 via-primary/10 to-primary/20 md:block" />

            {t.history.items.map((item) => (
              <div
                key={item.year}
                className="group flex gap-6 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="relative shrink-0">
                  <span className="relative z-10 inline-block rounded-lg bg-gradient-to-br from-primary/15 to-primary/10 px-3 py-1.5 text-sm font-bold text-primary ring-1 ring-inset ring-primary/10">
                    {item.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Profesori preview */}
      <section className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.profesoriPreview.sectionLabel}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.profesoriPreview.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-muted-foreground">
            {t.profesoriPreview.text}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-14 rounded-full px-10">
              <Link href={localePath(locale, "/profesori")}>
                {t.profesoriPreview.cta}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      <ContactCTA
        title={t.contactCTA.title}
        description={t.contactCTA.description}
        locale={locale}
        buttonLabel={dict.common.contactUs}
      />
    </>
  );
}

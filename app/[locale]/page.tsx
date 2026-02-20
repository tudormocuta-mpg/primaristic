import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { type ComponentType } from "react";
import { HeroSection } from "@/components/home/HeroSection";
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

      {/* ── Ce este PRIMARISTICA ── */}
      <section id="ce-este" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: photo */}
            <div className="relative">
              <div className="photo-placeholder flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl">
                <Image
                  src="/images/logo-icon.jpg"
                  alt=""
                  width={120}
                  height={120}
                  className="opacity-10"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="text-center lg:text-left">
              <span className="mb-4 block font-display text-xl italic text-accent">
                {t.whatIs.sectionLabel}
              </span>
              <h2 className="font-display text-3xl leading-snug text-foreground md:text-4xl">
                {t.whatIs.title}
              </h2>
              <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-muted-foreground">
                <p>
                  <strong className="font-semibold text-foreground">
                    {t.whatIs.paragraphs[0].split(".")[0]}.
                  </strong>{" "}
                  {t.whatIs.paragraphs[0].split(".").slice(1).join(".").trim()}
                </p>
                <p>{t.whatIs.paragraphs[1]}</p>
                <p>{t.whatIs.paragraphs[2]}</p>
              </div>
              <div className="mx-auto mt-12 h-px w-24 bg-primary lg:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Concepte cheie ── */}
      <section id="concepte" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left column: concepts */}
            <div className="space-y-12">
              {/* Reflexele Primare */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                  <IconNeural className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-3 font-display text-2xl text-foreground">
                    {t.concepts.primaryReflexes.title}
                  </h3>
                  <div className="space-y-3 leading-relaxed text-muted-foreground">
                    {t.concepts.primaryReflexes.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm">
                        {i === 2 ? (
                          <>
                            {p.split("98%")[0]}
                            <strong className="font-semibold text-foreground">
                              98%
                            </strong>
                            {p.split("98%")[1]}
                          </>
                        ) : (
                          p
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tonusul Muscular */}
              <div className="flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                  <IconWave className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-3 font-display text-2xl text-foreground">
                    {t.concepts.muscleTone.title}
                  </h3>
                  <div className="space-y-3 leading-relaxed text-muted-foreground">
                    {t.concepts.muscleTone.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: quote card */}
            <div className="relative rounded-2xl bg-card p-10 shadow-xl shadow-muted/50 lg:p-12">
              <div className="absolute inset-y-0 left-0 w-2 rounded-l-2xl bg-accent" />
              <svg
                className="mb-6 h-12 w-12 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <blockquote className="mb-6 font-display text-2xl italic leading-relaxed text-foreground">
                {t.concepts.quote.text}
              </blockquote>
              <cite className="text-sm font-semibold not-italic uppercase tracking-widest text-muted-foreground">
                {t.concepts.quote.attribution}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cui se adresează ── */}
      <section id="cui-se-adreseaza" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              {t.audience.title}
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              {t.audience.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.audience.groups.map((group, i) => {
              const Icon = audienceIcons[i];
              return (
                <div
                  key={group.title}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition duration-500 hover:border-primary/30 hover:shadow-xl"
                >
                  {/* Icon container */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-xl text-foreground">
                    {group.title}
                  </h3>
                  <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {group.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Metoda ── */}
      <section id="cum-functioneaza" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-2 block font-display text-lg italic text-accent">
              {t.method.sectionLabel}
            </span>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              {t.method.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.method.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl bg-card p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 font-display text-4xl text-accent/20">
                  0{i + 1}
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}

            {/* Photo slot in 4th column */}
            <div className="relative hidden min-h-[250px] overflow-hidden rounded-2xl lg:block">
              <div className="photo-placeholder flex h-full w-full items-center justify-center">
                <Image
                  src="/images/logo-icon.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="opacity-10"
                />
              </div>
            </div>
          </div>

          {/* Children note */}
          <div className="mt-10 rounded-2xl bg-card p-8 shadow-sm">
            <h3 className="mb-3 font-display text-lg text-foreground">
              {t.method.children.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.method.children.text}
            </p>
          </div>
        </div>
      </section>

      {/* ── Beneficii / Testimoniale ── */}
      <section id="beneficii" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-display text-3xl text-foreground">
            {t.testimonials.title}
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.testimonials.items.map((item) => (
              <div
                key={item}
                className="border-l-4 border-primary bg-muted/30 p-6"
              >
                <p className="text-sm italic text-muted-foreground">
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

      {/* ── Istoric ── */}
      <section id="istoric" className="bg-background py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-display text-3xl text-foreground">
            {t.history.title}
          </h2>

          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Left: portrait photo (sticky) */}
            <div className="relative order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="photo-placeholder flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/logo-icon.jpg"
                    alt=""
                    width={120}
                    height={120}
                    className="opacity-10"
                  />
                </div>
              </div>
            </div>

            {/* Right: timeline */}
            <div className="relative order-1 ml-6 space-y-16 border-l-2 border-primary/30 py-8 md:ml-0 lg:order-2">
              {t.history.items.map((item, i) => {
                const isLast = i === t.history.items.length - 1;
                return (
                  <div key={item.year} className="relative pl-8 md:pl-12">
                    <span
                      className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-background ${
                        isLast ? "bg-accent" : "bg-primary"
                      }`}
                    />
                    <span
                      className={`mb-2 inline-block rounded px-3 py-1 text-xs font-bold text-white ${
                        isLast ? "bg-accent" : "bg-primary"
                      }`}
                    >
                      {item.year}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comunitatea Noastră ── */}
      <section className="bg-card py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: community photo */}
            <div className="group relative order-2 overflow-hidden rounded-2xl lg:order-1">
              <div className="photo-placeholder flex h-[400px] w-full items-center justify-center">
                <Image
                  src="/images/logo-icon.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="opacity-10"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h2 className="font-display text-4xl text-foreground">
                {t.community.title}
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
                {t.community.paragraphs[0]}
              </p>
              <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
                {t.community.paragraphs[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Profesori preview ── */}
      <section className="bg-muted/30 py-24 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-4xl text-foreground">
            {t.profesoriPreview.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground">
            {t.profesoriPreview.text}
          </p>

          {/* Team photo */}
          <div className="group relative mx-auto mt-12 mb-16 w-full overflow-hidden rounded-2xl">
            <div className="photo-placeholder flex h-[500px] w-full items-center justify-center">
              <Image
                src="/images/logo-icon.jpg"
                alt=""
                width={120}
                height={120}
                className="opacity-10"
              />
            </div>
          </div>

          <Link
            href={localePath(locale, "/profesori")}
            className="inline-flex items-center gap-2 border-2 border-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition duration-300 hover:bg-primary hover:text-white"
          >
            {t.profesoriPreview.cta}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      <ContactCTA
        title={t.contactCTA.title}
        description={t.contactCTA.description}
        locale={locale}
        buttonLabel={dict.common.contactUs}
      />
    </>
  );
}

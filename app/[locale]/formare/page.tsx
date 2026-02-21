import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale as Locale);
  return {
    title: dict.metadata.formare.title,
    description: dict.metadata.formare.description,
  };
}

export default async function FormarePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = dict.formare;

  return (
    <>
      <PageHeader title={t.header.title} subtitle={t.header.subtitle} />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
        {/* Program overview */}
        <section className="mb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <div className="mb-8">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {t.program.label}
                </span>
                <h2 className="font-display text-3xl text-foreground">
                  {t.program.title}
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {t.program.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right: photo */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/formare.jpg"
                alt="PRIMARISTICA® — Formare"
                fill
                className="object-cover shadow-md grayscale transition-all duration-700 ease-in-out hover:shadow-xl hover:grayscale-0"
              />
            </div>
          </div>
        </section>

        {/* Structura cursului — Timeline */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {t.structure.label}
            </span>
            <h2 className="font-display text-3xl text-foreground">
              {t.structure.title}
            </h2>
          </div>

          <div className="relative">
            {/* Single continuous vertical line — spans from Year I icon center to bottom of container */}
            <div className="absolute left-1/2 top-7 bottom-0 hidden w-px -translate-x-1/2 bg-border md:block" />

            {/* Year 1 */}
            <div className="relative mb-12 md:mb-16">
              <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                  <span className="font-display text-lg text-primary">I</span>
                </div>
              </div>
              <div className="md:mr-[calc(50%+2rem)] md:pt-2">
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                    <span className="font-display text-base text-primary">I</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {t.structure.year1.title}
                  </h3>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="mb-1 hidden font-display text-xl text-foreground md:block">
                    {t.structure.year1.title}
                  </h3>
                  <span className="mb-4 block text-xs font-bold uppercase tracking-wider text-accent">
                    {t.structure.year1.label}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.structure.year1.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Year 2 */}
            <div className="relative mb-12 md:mb-16">
              <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                  <span className="font-display text-lg text-primary">II</span>
                </div>
              </div>
              <div className="md:ml-[calc(50%+2rem)] md:pt-2">
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                    <span className="font-display text-base text-primary">II</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {t.structure.year2.title}
                  </h3>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="mb-1 hidden font-display text-xl text-foreground md:block">
                    {t.structure.year2.title}
                  </h3>
                  <span className="mb-4 block text-xs font-bold uppercase tracking-wider text-accent">
                    {t.structure.year2.label}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.structure.year2.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="relative">
              {/* Mask: hides the vertical line below the diploma icon */}
              <div className="absolute left-1/2 top-14 bottom-0 z-[5] hidden w-3 -translate-x-1/2 bg-background md:block" />
              <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-card shadow-md shadow-accent/10">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
              </div>
              <div className="relative z-[6] md:mx-auto md:max-w-md md:pt-20">
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-card shadow-md shadow-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl text-foreground">
                    {t.structure.diploma.titleMobile}
                  </h3>
                </div>
                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
                  <h3 className="mb-2 hidden font-display text-xl text-foreground md:block">
                    {t.structure.diploma.title}
                  </h3>
                  <h3 className="mb-2 font-display text-xl text-foreground md:hidden">
                    {t.structure.diploma.titleMobile}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.structure.diploma.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educație continuă */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {t.continuingEd.label}
            </span>
            <h2 className="font-display text-3xl text-foreground">
              {t.continuingEd.title}
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.continuingEd.monthly.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.continuingEd.monthly.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.continuingEd.biannual.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.continuingEd.biannual.text}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.continuingEd.institute}
              </p>
            </div>
          </div>
        </section>

        {/* Info înscriere */}
        <section>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-3">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {t.enrollment.label}
              </span>
              <h2 className="font-display text-xl text-foreground">
                {t.enrollment.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.enrollment.text}
            </p>
          </div>
        </section>
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

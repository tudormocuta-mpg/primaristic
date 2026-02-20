import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Formare",
  description:
    "Programul de formare a Profesorilor de Primaristică® — doi ani de pregătire teoretică și practică, seminare postgraduale și certificare.",
};

export default function FormarePage() {
  return (
    <>
      <PageHeader
        title="Formare"
        subtitle="Programul de formare a Profesorilor de Primaristică®"
      />

      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        {/* Program overview */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Despre program
            </span>
            <h2 className="font-display text-3xl text-foreground">
              Programul de formare
            </h2>
          </div>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Formarea Profesorilor de Primaristică® se desfășoară pe parcursul a
              doi ani și include atât pregătire teoretică, cât și practică. La
              finalizarea cu succes a programului, absolvenții primesc{" "}
              <strong className="font-bold text-foreground">
                Diploma de Profesor de Primaristică®
              </strong>
              .
            </p>
            <p>
              Primul Curs de formare a Profesorilor de Primaristică din România a
              fost susținut de Prof. Dr. Herbert Pfeiffer în perioada 2012–2014.
              În Decembrie 2014 au absolvit opt Profesori de Primaristică.
            </p>
            <p>
              Al doilea Curs de formare din România a fost susținut tot de Prof.
              Dr. Herbert Pfeiffer, în perioada 2015–2017.
            </p>
          </div>
        </section>

        {/* Structura cursului — Timeline */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Structura cursului
            </span>
            <h2 className="font-display text-3xl text-foreground">
              Parcursul de doi ani
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

            {/* Year 1 */}
            <div className="relative mb-12 md:mb-16">
              {/* Timeline circle — center */}
              <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                  <span className="font-display text-lg text-primary">I</span>
                </div>
              </div>

              {/* Content — left side on desktop */}
              <div className="md:mr-[calc(50%+2rem)] md:pt-2">
                {/* Mobile circle */}
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                    <span className="font-display text-base text-primary">I</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground">Anul I</h3>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="mb-1 hidden font-display text-xl text-foreground md:block">
                    Anul I
                  </h3>
                  <span className="mb-4 block text-xs font-bold uppercase tracking-wider text-accent">
                    Bazele teoretice și practice
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Studiul aprofundat al dezvoltării senzo-motorii, al Reflexelor
                    Primare și al Tonusului Muscular. Introducere în exercițiile
                    PRIMARISTICA® și practicarea acestora sub supervizare.
                  </p>
                </div>
              </div>
            </div>

            {/* Year 2 */}
            <div className="relative mb-12 md:mb-16">
              {/* Timeline circle — center */}
              <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                  <span className="font-display text-lg text-primary">II</span>
                </div>
              </div>

              {/* Content — right side on desktop */}
              <div className="md:ml-[calc(50%+2rem)] md:pt-2">
                {/* Mobile circle */}
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card shadow-md shadow-primary/10">
                    <span className="font-display text-base text-primary">II</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground">Anul II</h3>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="mb-1 hidden font-display text-xl text-foreground md:block">
                    Anul II
                  </h3>
                  <span className="mb-4 block text-xs font-bold uppercase tracking-wider text-accent">
                    Practică și specializare
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Aprofundarea cunoștințelor, practică individuală și supervizată,
                    studii de caz. Pregătire pentru susținerea lecțiilor individuale
                    de Primaristică®.
                  </p>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="relative">
              {/* Timeline circle — center */}
              <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:block">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-accent/10 shadow-md shadow-accent/10">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Content — centered */}
              <div className="md:mx-auto md:max-w-md md:pt-20">
                {/* Mobile circle */}
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10 shadow-md shadow-accent/10">
                    <svg
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl text-foreground">Diplomă</h3>
                </div>

                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
                  <h3 className="mb-2 hidden font-display text-xl text-foreground md:block">
                    Diploma de Profesor de Primaristică®
                  </h3>
                  <h3 className="mb-2 font-display text-xl text-foreground md:hidden">
                    Diploma de Profesor
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    La finalizarea cu succes a programului de doi ani, absolvenții
                    primesc diploma oficială care atestă competențele dobândite.
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
              După absolvire
            </span>
            <h2 className="font-display text-3xl text-foreground">
              Educație continuă
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">Întruniri lunare</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Sesiuni regulate pentru menținerea standardelor ridicate de
                    predare și schimb de experiență.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">Seminare bi-anuale</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Actualizarea cunoștințelor și aprofundarea metodelor de lucru
                    în cadrul seminarelor organizate de institut.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Institutul de Primaristică din România, fondat în 2018, are ca
                scop principal formarea continuă a profesorilor și menținerea
                standardelor ridicate de predare.
              </p>
            </div>
          </div>
        </section>

        {/* Info înscriere */}
        <section>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-3">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Informații
              </span>
              <h2 className="font-display text-xl text-foreground">
                Informații despre înscriere
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Informațiile detaliate despre cerințele de admitere și procesul de
              înscriere la următorul curs de formare vor fi publicate pe această
              pagină. Pentru întrebări suplimentare, vă rugăm să ne contactați.
            </p>
          </div>
        </section>
      </div>

      <ContactCTA
        title="Contactează-ne pentru detalii despre formare"
        description="Suntem bucuroși să îți oferim toate informațiile necesare despre programul de formare în PRIMARISTICA®."
      />
    </>
  );
}

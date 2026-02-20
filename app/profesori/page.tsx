import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { profesori } from "@/data/profesori";

export const metadata: Metadata = {
  title: "Profesori de Primaristică®",
  description:
    "Profesorii de Primaristică® din România, formați printr-un program educațional de doi ani.",
};

export default function ProfesoriPage() {
  const activi = profesori.filter((p) => p.activ);
  const absolventi = profesori.filter((p) => !p.activ);

  return (
    <>
      <PageHeader
        title="Profesori de Primaristică®"
        subtitle="Profesori formați printr-un program educațional de doi ani, la sfârșitul căruia primesc Diploma de Profesor de Primaristică®."
      />

      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        {/* Profesori practicanți */}
        {activi.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Echipa activă
              </span>
              <h2 className="font-display text-3xl text-foreground">
                Profesori practicanți
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {activi.map((p) => (
                <div
                  key={p.id}
                  className="group flex items-center gap-5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-inset ring-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <span className="font-display text-2xl text-primary">
                      {p.nume.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {p.nume}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Profesor practicant de Primaristică®
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Absolvenți */}
        {absolventi.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Absolvenți
              </span>
              <h2 className="font-display text-3xl text-foreground">
                Absolvenți
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {absolventi.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-5 rounded-xl border border-border bg-card p-6 opacity-75"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                    <span className="font-display text-2xl text-muted-foreground">
                      {p.nume.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{p.nume}</p>
                    <span className="text-xs text-muted-foreground">
                      Absolvent cursuri Primaristică
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Info box */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="mb-3 font-display text-xl text-foreground">
            Despre formarea profesorilor
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Profesorii de Primaristică® sunt formați printr-un program
            educațional de doi ani, la finalul căruia primesc Diploma de
            Profesor de Primaristică®. Educația profesorilor continuă prin
            întruniri lunare și seminare bi-anuale, asigurând menținerea
            standardelor ridicate de predare.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/formare">Află detalii despre cursuri</Link>
            </Button>
          </div>
        </div>
      </div>

      <ContactCTA
        title="Dorești să devii profesor PRIMARISTICA®?"
        description="Alătură-te comunității de profesori dedicați dezvoltării senzo-motorii și echilibrului uman."
      />
    </>
  );
}

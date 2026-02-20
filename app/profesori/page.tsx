import type { Metadata } from "next";
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

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Profesori practicanți */}
        {activi.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Profesori practicanți
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {activi.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">
                      {p.nume.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{p.nume}</p>
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
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Absolvenți
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {absolventi.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 opacity-75"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <span className="text-xl font-bold text-muted-foreground">
                      {p.nume.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{p.nume}</p>
                    <span className="text-xs text-muted-foreground">
                      Absolvent cursuri Primaristică
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-2 text-lg font-bold text-foreground">
            Despre formarea profesorilor
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Profesorii de Primaristică® sunt formați printr-un program
            educațional de doi ani, la finalul căruia primesc Diploma de
            Profesor de Primaristică®. Educația profesorilor continuă prin
            întruniri lunare și seminare bi-anuale, asigurând menținerea
            standardelor ridicate de predare.
          </p>
        </div>
      </div>

      <ContactCTA title="Vrei să afli mai multe despre PRIMARISTICA®?" />
    </>
  );
}

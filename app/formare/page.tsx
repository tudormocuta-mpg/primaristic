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

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Program overview */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Programul de formare
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Formarea Profesorilor de Primaristică® se desfășoară pe parcursul a
              doi ani și include atât pregătire teoretică, cât și practică. La
              finalizarea cu succes a programului, absolvenții primesc{" "}
              <strong className="text-foreground">
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

        {/* Structura cursului */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Structura cursului
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-bold text-foreground">
                Anul 1 — Bazele teoretice și practice
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Studiul aprofundat al dezvoltării senzo-motorii, al Reflexelor
                Primare și al Tonusului Muscular. Introducere în exercițiile
                PRIMARISTICA® și practicarea acestora sub supervizare.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-bold text-foreground">
                Anul 2 — Practică și specializare
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Aprofundarea cunoștințelor, practică individuală și supervizată,
                studii de caz. Pregătire pentru susținerea lecțiilor individuale
                de Primaristică®.
              </p>
            </div>
          </div>
        </section>

        {/* Educație continuă */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Educație continuă
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            După absolvire, educația profesorilor continuă prin{" "}
            <strong className="text-foreground">întruniri lunare</strong> și{" "}
            <strong className="text-foreground">seminare bi-anuale</strong>,
            asigurând menținerea standardelor ridicate de predare și actualizarea
            cunoștințelor. Institutul de Primaristică din România, fondat în
            2018, are ca scop principal formarea continuă a profesorilor.
          </p>
        </section>

        {/* Cerințe */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Informații despre înscriere
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Informațiile detaliate despre cerințele de admitere și procesul de
            înscriere la următorul curs de formare vor fi publicate pe această
            pagină. Pentru întrebări suplimentare, vă rugăm să ne contactați.
          </p>
        </section>
      </div>

      <ContactCTA
        title="Contactează-ne pentru detalii despre formare"
        description="Suntem bucuroși să îți oferim toate informațiile necesare despre programul de formare în PRIMARISTICA®."
      />
    </>
  );
}

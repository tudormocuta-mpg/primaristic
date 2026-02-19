import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Formare",
  description:
    "Programul de formare în Profesori de PRIMARISTIC® — 2 ani de pregătire, seminare postgraduale și certificare.",
};

export default function FormarePage() {
  return (
    <>
      <PageHeader
        title="Formare"
        subtitle="Programul de formare în Profesori de PRIMARISTIC®"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Program overview */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Programul de formare
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Formarea Profesorilor de PRIMARISTIC® se desfășoară pe parcursul a 2
            ani și include atât pregătire teoretică, cât și practică. La
            finalizarea cu succes a programului, absolvenții primesc Diploma de
            Profesor de PRIMARISTIC®.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Primul Curs de formare a Profesorilor de PRIMARISTIC® în România a
            fost susținut de Prof. Dr. Herbert Pfeiffer în perioada 2012–2014. În
            Decembrie 2014 au absolvit opt Profesori de PRIMARISTIC®.
          </p>
        </section>

        {/* Structura cursului */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Structura cursului
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-2 font-bold text-foreground">
                Anul 1 — Bazele teoretice și practice
              </h3>
              <p className="text-sm text-muted-foreground">
                Studiul aprofundat al dezvoltării senzo-motorii, al Reflexelor
                Primare și al Tonusului Muscular. Introducere în exercițiile
                PRIMARISTIC® și practicarea acestora sub supervizare.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-2 font-bold text-foreground">
                Anul 2 — Practică și specializare
              </h3>
              <p className="text-sm text-muted-foreground">
                Aprofundarea cunoștințelor, practică individuală și supervizată,
                studii de caz. Pregătire pentru susținerea lecțiilor individuale
                de PRIMARISTIC®.
              </p>
            </div>
          </div>
        </section>

        {/* Seminare postgraduale */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Seminare postgraduale
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            După absolvire, Profesorii de PRIMARISTIC® participă la seminare
            postgraduale pentru perfecționare continuă și actualizarea
            cunoștințelor. Aceste seminare asigură menținerea standardelor
            ridicate de predare.
          </p>
        </section>

        {/* Cerințe */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Cerințe de admitere
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Informațiile detaliate despre cerințele de admitere și procesul de
            înscriere vor fi publicate în curând. Pentru întrebări, vă rugăm să
            ne contactați.
          </p>
        </section>
      </div>

      <ContactCTA
        title="Contactează-ne pentru detalii despre înscriere"
        description="Suntem bucuroși să îți oferim toate informațiile necesare despre programul de formare în PRIMARISTIC®."
      />
    </>
  );
}

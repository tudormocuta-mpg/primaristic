import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { profesori } from "@/data/profesori";

export const metadata: Metadata = {
  title: "Profesori de Primaristic®",
  description:
    "Găsește un profesor certificat de PRIMARISTIC® în România. Profesorii sunt formați printr-un program educațional de 2 ani.",
};

export default function ProfesoriPage() {
  return (
    <>
      <PageHeader
        title="Profesori de PRIMARISTIC®"
        subtitle="Profesori certificați din România, formați printr-un program educațional de 2 ani."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profesori.map((p) => (
            <Card key={p.id} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">{p.nume}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {p.specializare}
                </p>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{p.localitate}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a
                    href={`tel:${p.telefon.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {p.telefon}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a
                    href={`mailto:${p.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {p.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <h2 className="mb-2 text-lg font-bold text-foreground">
            Despre certificare
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Profesorii de PRIMARISTIC® sunt formați printr-un program educațional
            de 2 ani, la finalul căruia primesc Diploma de Profesor de
            PRIMARISTIC®. După absolvire, profesorii participă la seminare
            postgraduale pentru perfecționare continuă.
          </p>
        </div>
      </div>

      <ContactCTA title="Vrei să afli mai multe despre un profesor?" />
    </>
  );
}

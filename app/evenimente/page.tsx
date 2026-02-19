import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { evenimente } from "@/data/evenimente";

export const metadata: Metadata = {
  title: "Evenimente",
  description:
    "Evenimente PRIMARISTIC® — seminare, workshopuri și conferințe despre dezvoltarea senzo-motorie.",
};

export default function EvenimentePage() {
  const viitoare = evenimente.filter((e) => !e.trecut);
  const trecute = evenimente.filter((e) => e.trecut);

  return (
    <>
      <PageHeader
        title="Evenimente"
        subtitle="Seminare, workshopuri și conferințe PRIMARISTIC®"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Evenimente viitoare */}
        {viitoare.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Evenimente viitoare
            </h2>
            <div className="space-y-4">
              {viitoare.map((ev) => (
                <Card key={ev.id} className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{ev.titlu}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      <span>{ev.data}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{ev.locatie}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {ev.descriere}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Evenimente trecute */}
        {trecute.length > 0 && (
          <section>
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Evenimente trecute
            </h2>
            <div className="space-y-4">
              {trecute.map((ev) => (
                <Card
                  key={ev.id}
                  className="border-border bg-card opacity-75"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{ev.titlu}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      <span>{ev.data}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{ev.locatie}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {ev.descriere}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      <ContactCTA title="Vrei să participi la următorul eveniment?" />
    </>
  );
}

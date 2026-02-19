import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { articolePresa } from "@/data/presa";

export const metadata: Metadata = {
  title: "Presă",
  description:
    "Articole de presă, apariții media și interviuri despre PRIMARISTIC® și dezvoltarea senzo-motorie.",
};

export default function PresaPage() {
  return (
    <>
      <PageHeader
        title="Presă"
        subtitle="Articole, apariții media și interviuri despre PRIMARISTIC®"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="space-y-4">
          {articolePresa.map((articol) => (
            <Card key={articol.id} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">{articol.titlu}</CardTitle>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-medium text-primary">
                    {articol.publicatie}
                  </span>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>{articol.data}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">
                  {articol.descriere}
                </p>
                {articol.linkExtern !== "#" && (
                  <a
                    href={articol.linkExtern}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                  >
                    Citește articolul
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactCTA
        title="Ai o solicitare pentru presă?"
        description="Contactează-ne pentru interviuri, informații sau materiale de presă despre PRIMARISTIC®."
      />
    </>
  );
}

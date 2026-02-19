import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, HeartPulse } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Prevenție",
    description:
      "Prin PRIMARISTIC® putem preveni distorsiunile senzo-motorii care apar ca urmare a persistenței Reflexelor Primare după naștere.",
  },
  {
    icon: Brain,
    title: "Dezvoltare senzo-motorie",
    description:
      "Dezvoltarea senzo-motorie este temelia funcționării echilibrate a întregului organism și garanția împlinirii capacităților noastre superioare.",
  },
  {
    icon: HeartPulse,
    title: "Program de viață",
    description:
      "Un program zilnic de exerciții creat de Helga Pfeiffer-Meisel, practicat independent, acasă, la toate vârstele.",
  },
];

export function BenefitsCards() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          De ce PRIMARISTIC®?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="border-border bg-card">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Baby,
  Heart,
  Stethoscope,
  GraduationCap,
  Brain,
  Dumbbell,
  Users,
  PersonStanding,
} from "lucide-react";

const audiences = [
  { icon: Heart, label: "Mame" },
  { icon: PersonStanding, label: "Gravide" },
  { icon: Baby, label: "Copii" },
  { icon: Stethoscope, label: "Medici" },
  { icon: Brain, label: "Terapeuți" },
  { icon: GraduationCap, label: "Educatori" },
  { icon: Dumbbell, label: "Sportivi" },
  { icon: Users, label: "Adulți" },
];

export function AudienceGrid() {
  return (
    <section className="bg-card py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
          Cui i se adresează?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          PRIMARISTIC® se adresează fiecărei persoane, la orice vârstă, sănătoasă
          sau în stare de boală.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <a.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

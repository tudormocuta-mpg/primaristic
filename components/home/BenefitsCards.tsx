const benefits = [
  {
    emoji: "\u{1F6E1}\uFE0F",
    title: "Prevenție",
    description:
      "Prin PRIMARISTIC® putem preveni distorsiunile senzo-motorii care apar ca urmare a persistenței Reflexelor Primare după naștere.",
  },
  {
    emoji: "\u{1F9E0}",
    title: "Dezvoltare senzo-motorie",
    description:
      "Dezvoltarea senzo-motorie este temelia funcționării echilibrate a întregului organism și garanția împlinirii capacităților noastre superioare.",
  },
  {
    emoji: "\u{1F33F}",
    title: "Program de viață",
    description:
      "Un program zilnic de exerciții creat de Helga Pfeiffer-Meisel, practicat independent, acasă, la toate vârstele.",
  },
];

export function BenefitsCards() {
  return (
    <section className="bg-card py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 border-b border-border pb-8 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              De ce PRIMARISTIC®?
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              Abordarea noastră se bazează pe trei piloni fundamentali ai
              dezvoltării, asigurând o cale completă către echilibru.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden bg-background p-10 transition-all duration-500 hover:bg-[hsl(195,33%,93%)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <span className="text-4xl" role="img">
                  {b.emoji}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {b.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {b.description}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

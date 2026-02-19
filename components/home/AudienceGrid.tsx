const audiences = [
  { emoji: "\u{1F469}\u200D\u{1F37C}", label: "Mame" },
  { emoji: "\u{1F930}", label: "Gravide" },
  { emoji: "\u{1F476}", label: "Copii" },
  { emoji: "\u{1FA7A}", label: "Medici" },
  { emoji: "\u{1F932}", label: "Terapeuți" },
  { emoji: "\u{1F4DA}", label: "Educatori" },
  { emoji: "\u{1F3C3}", label: "Sportivi" },
  { emoji: "\u{1F9D8}", label: "Adulți" },
];

export function AudienceGrid() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Adresabilitate
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Cui i se adresează?
          </h2>
          <p className="mt-4 text-lg font-light text-muted-foreground">
            PRIMARISTIC® se adresează fiecărei persoane, la orice vârstă,
            sănătoasă sau în stare de boală.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-3xl" role="img">
                  {a.emoji}
                </span>
              </div>
              <h3 className="text-base font-bold tracking-wide text-foreground">
                {a.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

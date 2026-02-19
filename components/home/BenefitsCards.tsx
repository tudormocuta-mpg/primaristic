function PreventionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 170C100 170 160 145 160 65V40H40V65C40 145 100 170 100 170Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" className="text-primary" />
      <path d="M100 85C104.418 85 108 81.4183 108 77C108 72.5817 104.418 69 100 69C95.5817 69 92 72.5817 92 77C92 81.4183 95.5817 85 100 85Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M78 130C78 110 88 100 100 100C112 100 122 110 122 130" stroke="currentColor" strokeLinecap="round" strokeWidth="0.8" />
      <circle cx="100" cy="40" r="2" fill="#7A9E5F" />
      <circle cx="100" cy="170" r="2" fill="#7A9E5F" />
    </svg>
  );
}

function SensoryMotorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50C75 50 60 65 60 90C60 115 80 120 100 120C120 120 140 115 140 90C140 65 125 50 100 50Z" stroke="currentColor" strokeDasharray="4 4" strokeWidth="0.6" />
      <path d="M100 120V160" stroke="currentColor" strokeWidth="0.8" />
      <path d="M75 90C75 110 50 130 50 150" stroke="currentColor" strokeWidth="0.6" className="text-primary" />
      <path d="M125 90C125 110 150 130 150 150" stroke="currentColor" strokeWidth="0.6" className="text-primary" />
      <circle cx="100" cy="90" r="1.5" fill="#7A9E5F" />
      <circle cx="75" cy="90" r="1.5" fill="currentColor" />
      <circle cx="125" cy="90" r="1.5" fill="currentColor" />
      <circle cx="50" cy="150" r="2" fill="#7A9E5F" />
      <circle cx="150" cy="150" r="2" fill="#7A9E5F" />
      <circle cx="100" cy="160" r="2" fill="#7A9E5F" />
      <circle cx="85" cy="65" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="115" cy="65" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function LifeProgramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 100 m -50 0 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" />
      <path d="M100 40C133.137 40 160 66.8629 160 100C160 133.137 133.137 160 100 160" stroke="currentColor" strokeLinecap="round" strokeWidth="0.8" className="text-primary" />
      <path d="M100 160C66.8629 160 40 133.137 40 100C40 80 50 65 70 55" stroke="currentColor" strokeLinecap="round" strokeWidth="0.8" className="text-accent" />
      <circle cx="100" cy="85" r="2.5" fill="currentColor" />
      <line x1="100" y1="90" x2="100" y2="125" stroke="currentColor" strokeWidth="0.8" />
      <line x1="100" y1="125" x2="85" y2="145" stroke="currentColor" strokeWidth="0.8" />
      <line x1="100" y1="125" x2="115" y2="145" stroke="currentColor" strokeWidth="0.8" />
      <path d="M80 105L120 105" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

const benefits = [
  {
    Icon: PreventionIcon,
    title: "Prevenție",
    description:
      "Prin PRIMARISTIC® putem preveni distorsiunile senzo-motorii care apar ca urmare a persistenței Reflexelor Primare după naștere.",
  },
  {
    Icon: SensoryMotorIcon,
    title: "Dezvoltare senzo-motorie",
    description:
      "Dezvoltarea senzo-motorie este temelia funcționării echilibrate a întregului organism și garanția împlinirii capacităților noastre superioare.",
  },
  {
    Icon: LifeProgramIcon,
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
              <div className="mb-8 flex h-48 w-48 items-center justify-center text-foreground transition-transform duration-500 group-hover:scale-105">
                <b.Icon className="h-full w-full" />
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

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(30,33%,95%)] via-[hsl(30,25%,93%)] to-[hsl(160,15%,91%)] py-20 md:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[5%] -top-[10%] h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[5%] h-[35rem] w-[35rem] rounded-full bg-accent/5 blur-[80px]" />
        <div className="line-art-circle absolute right-[10%] top-[15%] h-[350px] w-[350px] opacity-20" />
        <div className="line-art-circle absolute right-[18%] top-[22%] h-[200px] w-[200px] opacity-10" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Cunoașterea și educarea dezvoltării senzo-motorii
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>

        <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-7xl lg:leading-[1.1]">
          <span className="italic text-primary">PRIMARISTICA</span>
          <sup className="text-lg md:text-xl">®</sup>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
          Disciplină teoretică și practică, de interes general, necesară și
          benefică tuturor vârstelor, fie că suntem sănătoși sau nu.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="h-14 rounded-full px-10 shadow-xl shadow-primary/10">
            <Link href="#ce-este">
              Descoperă metoda
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-full px-10">
            <Link href="/profesori">Găsește un profesor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

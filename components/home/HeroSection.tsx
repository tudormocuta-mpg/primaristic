import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Dezvoltare senzo-motorie
          <br />
          <span className="text-primary">la orice vârstă</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          PRIMARISTIC® analizează și susține dezvoltarea senzo-motorie normală —
          temelia funcționării echilibrate a întregului organism.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/primaristic">Află mai mult</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/profesori">Găsește un profesor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

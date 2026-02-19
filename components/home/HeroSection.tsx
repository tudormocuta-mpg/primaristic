import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(195,33%,93%)] via-[hsl(195,25%,90%)] to-[hsl(195,20%,88%)] py-16 md:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[5%] -top-[10%] h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[5%] h-[35rem] w-[35rem] rounded-full bg-accent/5 blur-[80px]" />
        <div className="line-art-circle absolute right-[10%] top-[20%] h-[400px] w-[400px] opacity-20" />
        <div className="line-art-circle absolute right-[15%] top-[25%] h-[260px] w-[260px] opacity-10" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="items-center gap-12 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left column — text */}
          <div className="z-10 mb-12 text-center lg:col-span-5 lg:mb-0 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Abordare clinică dovedită
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
              <span className="italic text-primary">Dezvoltare</span>{" "}
              senzo-motorie
              <span className="mt-2 block">la orice vârstă.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-lg font-light text-muted-foreground lg:mx-0">
              PRIMARISTIC® analizează și susține dezvoltarea senzo-motorie
              normală — temelia funcționării echilibrate a întregului organism.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 rounded-full px-10 shadow-xl shadow-primary/10">
                <Link href="/primaristic">
                  Află mai mult
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-full px-10">
                <Link href="/profesori">Găsește un profesor</Link>
              </Button>
            </div>
          </div>

          {/* Right column — hero illustration */}
          <div className="relative z-10 lg:col-span-7">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-[#F5F8F9] shadow-[0_32px_64px_-12px_rgba(91,127,139,0.15)] lg:rounded-[3rem]">
                <div className="relative flex aspect-[4/3] items-center justify-center lg:aspect-[16/10]">
                  {/* Organic blurred shapes */}
                  <div className="absolute right-[10%] top-[10%] h-64 w-64 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-accent/10 blur-2xl" />
                  <div className="absolute bottom-[20%] left-[10%] h-72 w-72 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary/10 blur-2xl" />

                  {/* SVG neural pathways */}
                  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" fill="none" viewBox="0 0 800 600">
                    <path d="M100,500 C200,400 300,550 400,300 C500,50 600,200 700,100" stroke="#5B7E8A" strokeDasharray="8 8" strokeWidth="1.5" />
                    <circle cx="400" cy="300" r="150" stroke="#7A9E5F" strokeWidth="0.5" />
                    <circle cx="400" cy="300" r="200" stroke="#5B7E8A" strokeOpacity="0.5" strokeWidth="0.5" />
                  </svg>

                  {/* Central figure illustration */}
                  <svg className="relative z-10 h-[70%] w-[70%] text-primary" fill="none" viewBox="0 0 300 400">
                    {/* Head */}
                    <circle cx="150" cy="70" r="35" stroke="currentColor" strokeWidth="1.5" />
                    {/* Body */}
                    <path d="M150 105V230" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Arms flowing */}
                    <path d="M150 140C120 150 90 170 70 160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M150 140C180 150 210 170 230 160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Legs balanced */}
                    <path d="M150 230C140 270 120 310 110 350" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M150 230C160 270 180 310 190 350" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Concentric circles — proprioception */}
                    <circle cx="150" cy="180" r="30" stroke="#7A9E5F" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="150" cy="180" r="50" stroke="#5B7E8A" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="150" cy="180" r="70" stroke="#5B7E8A" strokeOpacity="0.3" strokeWidth="0.5" strokeDasharray="4 4" />
                    {/* Equilibrium waves */}
                    <path d="M60,250 C90,240 110,260 150,250 C190,240 210,260 240,250" stroke="#7A9E5F" strokeWidth="0.8" strokeOpacity="0.6" />
                    <path d="M50,270 C85,260 115,280 150,270 C185,260 215,280 250,270" stroke="#5B7E8A" strokeWidth="0.5" strokeOpacity="0.4" />
                    {/* Energy points */}
                    <circle cx="150" cy="70" r="3" fill="#7A9E5F" />
                    <circle cx="150" cy="140" r="3" fill="#7A9E5F" />
                    <circle cx="150" cy="180" r="3" fill="#5B7E8A" />
                    <circle cx="150" cy="230" r="3" fill="#7A9E5F" />
                  </svg>
                </div>

                {/* Floating label — top left */}
                <div className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
                  <span className="text-xs italic text-primary">
                    Integrare senzorială
                  </span>
                </div>
              </div>

              {/* Decorative circles outside the card */}
              <div className="absolute -bottom-6 -left-6 -z-10 h-20 w-20 rounded-full border border-accent/30" />
              <div className="absolute -right-3 -top-3 -z-10 h-14 w-14 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

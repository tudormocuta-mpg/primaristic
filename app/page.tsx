import Link from "next/link";
import { type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { ContactCTA } from "@/components/shared/ContactCTA";
import {
  IconPregnant,
  IconNewborn,
  IconToddler,
  IconStudent,
  IconYouth,
  IconAdult,
  IconSenior,
  IconFamily,
  IconNeural,
  IconWave,
  IconLesson,
  IconPractice,
  IconGrowth,
} from "@/components/shared/Icons";

const testimonials = [
  "încordarea din corpul meu a dispărut treptat",
  "adorm repede și somnul meu este odihnitor",
  "mă trezesc ușor și binedispus",
  "îmi ordonez cu ușurință gândurile",
  "găsesc rapid cea mai bună soluție",
  "pot să lucrez mult mai mult fără să obosesc",
  "copilul meu citește acum cu plăcere",
  "copilul meu lucrează la matematică cu ușurință",
  "conduc mașina mult mai ușor, fără nervi în trafic",
  "îmi țin spatele drept fără efort",
  "zgomotele străzii nu mă mai copleșesc",
  "sarcina mult dorită a apărut",
  "bebelușul meu în sfârșit doarme",
  "mintea mea este mai limpede și învăț ușor",
  "tensiunile cu apropiații au dispărut",
  "sunt mai sănătos decât eram acum 10 ani",
];

const audienceGroups: {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}[] = [
  {
    Icon: IconPregnant,
    title: "Femeia gravidă",
    text: "Pregătește corpul și mintea pentru sarcină. Uterul și pelvisul devin un cuib potrivit pentru copil. Practicarea zilnică ușurează nașterea și evită complicațiile.",
  },
  {
    Icon: IconNewborn,
    title: "Nou-născut și sugar",
    text: "Din prima zi de viață. Mama este învățată să ofere copilului poziții libere de reflexele primare. Cu cât se începe mai devreme, cu atât dezvoltarea senzo-motorie este mai armonioasă.",
  },
  {
    Icon: IconToddler,
    title: "Copilul mic (1–3 ani)",
    text: "Maturarea posturală continuă — ridicarea de la orizontală la verticală. Primaristica asigură parcurgerea corectă a etapelor: controlul capului, rotația corpului, mersul în patru labe.",
  },
  {
    Icon: IconStudent,
    title: "Preșcolar și școlar",
    text: "Procesul de învățare depinde de funcționarea senzo-motorie corectă. Primaristica ajută la concentrare, echilibru emoțional și performanță școlară.",
  },
  {
    Icon: IconYouth,
    title: "Tineri",
    text: "Pe perioada pubertății și adolescenței, cât timp sunt sub influența patternurilor tonice, gândurile și acțiunile nu pot fi libere. Primaristica eliberează individualitatea.",
  },
  {
    Icon: IconAdult,
    title: "Adulți",
    text: "Au nevoie să fie liberi de patternuri fixe în comportament și atitudine. Întreruperea acestor patternuri permite o viață liberă, eficientă și echilibrată.",
  },
  {
    Icon: IconSenior,
    title: "Seniori",
    text: "Toate bolile pot fi agravate de reflexele primare. Prin reducerea hipertoniei musculare, mobilitatea și funcțiile cardiovasculare se îmbunătățesc.",
  },
  {
    Icon: IconFamily,
    title: "Familia",
    text: "Cu cât membrii unei familii sunt mai liberi de reflexele primare, cu atât mai ușor își vor rezolva conflictele. Primaristica aduce o bază comună de armonie.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Ce este Primaristica */}
      <section id="ce-este" className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Ce este
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ce este PRIMARISTICA®?
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Cunoașterea și educarea
              dezvoltării senzo-motorii a omului.</strong> PRIMARISTICA® este o
              disciplină teoretică și practică, de interes general, inerentă și
              benefică tuturor, la orice vârstă, fie că suntem sănătoși sau nu.
            </p>
            <p>
              PRIMARISTICA® analizează și susține dezvoltarea și maturizarea
              senzo-motorie normală, corectând eventualele distorsiuni.
              Senzația și mișcarea formează o unitate inseparabilă și
              interdependentă. Această unitate este temelia funcționării
              echilibrate a întregului organism și garanția împlinirii
              capacităților noastre superioare.
            </p>
            <p>
              PRIMARISTICA® aduce o <strong className="text-foreground">nouă
              înțelegere</strong> a sensului neuro-fizio-psihic al Reflexelor
              Primare, oferind totodată <strong className="text-foreground">
              soluția necesară</strong> unei vieți eliberate de acestea.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Reflexele Primare */}
      <section id="concepte" className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Concepte cheie
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Reflexele Primare și Tonusul Muscular
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconNeural className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Reflexele Primare
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Sunt tipare neurologice ereditare, înnăscute, vitale fătului
                  pe parcursul vieții intrauterine. La naștere, misiunea lor
                  fiind încheiată, necesitatea lor încetează.
                </p>
                <p>
                  După naștere, persistența sau reactivarea Reflexelor Primare
                  erodează funcționarea buclei senzo-motorii, generând
                  distorsiuni care constituie premisele insuficient cunoscute
                  dar redutabile ale îngrădirii sănătății.
                </p>
                <p>
                  Acest fenomen apare la aproximativ <strong className="text-foreground">98% dintre oameni</strong>.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconWave className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Tonusul Muscular
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Este acea {"\u201E"}vibrație{"\u201D"}, acel ton apărut în momentul
                  concepției. Se manifestă atât în mișcare cât și în repaus și
                  se stinge numai la moarte.
                </p>
                <p>
                  Unitatea dintre simțire și tonusul muscular asigură bunul
                  mers al întregului organism. Pe această buclă cibernetică
                  inseparabilă se clădește maturarea posturală.
                </p>
                <p>
                  Cauza majoră a tulburării tonusului muscular este
                  persistența reflexelor primare după naștere. Tulburarea
                  tonusului atrage tulburarea simțirii, generând un{" "}
                  <strong className="text-foreground">cerc vicios</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <p className="text-lg font-light italic text-foreground">
              {"\u201E"}Când corpul se eliberează, mintea se limpezește și sufletul se
              deschide.{"\u201D"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              — Practicantă de Primaristică
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Cui se adresează */}
      <section id="cui-se-adreseaza" className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Adresabilitate
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Cui se adresează?
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              Fiecăruia dintre noi. La orice vârstă, atât în stare de sănătate
              cât și în stare de boală.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audienceGroups.map((group) => (
              <div
                key={group.title}
                className="group relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Subtle top accent line */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10 transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:ring-primary/20">
                  <group.Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-dark" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">
                  {group.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {group.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Cum funcționează */}
      <section id="cum-functioneaza" className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Metoda
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              PRIMARISTICA® — Program de viață
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconLesson className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Lecția individuală</h3>
              <p className="text-sm font-light text-muted-foreground">
                Predată de profesoara de Primaristică®, lecția durează 45 de
                minute. O serie de minimum 10 lecții este necesară pentru
                inițiere.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconPractice className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Practică zilnică acasă</h3>
              <p className="text-sm font-light text-muted-foreground">
                Exercițiile senzo-motorii (pozițiile) sunt personalizate și se
                practică individual, acasă, în poziția culcat, într-o
                configurație care evită reflexele primare.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-inset ring-primary/10">
                <IconGrowth className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Evoluție continuă</h3>
              <p className="text-sm font-light text-muted-foreground">
                Urmărirea evoluției elevului este indispensabilă. Practicând
                zilnic, capacitățile personale înfloresc și se ordonează în
                vederea împlinirii țelurilor superioare.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-8">
            <h3 className="font-bold text-foreground">
              În cazul copiilor
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Mama (sau persoana care îl îngrijește) va fi învățată și
              călăuzită să aplice copilului pozițiile primaristice. Mama va
              practica zilnic cu copilul ei, acasă, astfel încât ea însăși
              își va educa propriul copil. Primaristica trebuie continuată
              până la desăvârșirea maturării posturale.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Beneficii / Testimoniale */}
      <section id="beneficii" className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Beneficii
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ce spun cei care practică
            </h2>
            <p className="mt-4 text-lg font-light text-muted-foreground">
              Cu Primaristica...
            </p>
          </div>

          {/* Decorative opening quote */}
          <div className="mb-8 flex justify-center">
            <svg className="h-10 w-10 text-primary/15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7.5a4.5 4.5 0 00-4.5 4.5c0 1.38.63 2.63 1.6 3.48A6.73 6.73 0 013 21h1.5c0-2.66 1.83-4.9 4.28-5.54A4.49 4.49 0 0011 7.5zm-4 4.5a3 3 0 116 0 3 3 0 01-6 0zM22 7.5a4.5 4.5 0 00-4.5 4.5c0 1.38.63 2.63 1.6 3.48A6.73 6.73 0 0114 21h1.5c0-2.66 1.83-4.9 4.28-5.54A4.49 4.49 0 0022 7.5zm-4 4.5a3 3 0 116 0 3 3 0 01-6 0z" />
            </svg>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t}
                className="group relative rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/20"
              >
                {/* Subtle left accent */}
                <div className="absolute inset-y-3 left-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent transition-all duration-300 group-hover:via-primary/50" />
                <p className="text-sm font-light italic text-muted-foreground">
                  {"\u201E"}...{t}{"\u201D"}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            ...spun cei care practică.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Istoric */}
      <section id="istoric" className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Istoric
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Istoric
            </h2>
          </div>

          <div className="relative space-y-6">
            {/* Timeline connecting line */}
            <div className="absolute bottom-8 left-[52px] top-8 hidden w-px bg-gradient-to-b from-primary/20 via-primary/10 to-primary/20 md:block" />

            {[
              {
                year: "Anii '70",
                text: "Helga Pfeiffer-Meisel (1941–2006), terapeut fizic pediatric, fondează Primaristica în Germania, prin cercetare și experiență practică, în colaborare cu soțul său, Dr. Herbert Pfeiffer, pediatru homeopat.",
              },
              {
                year: "Din 1979",
                text: "Helga Pfeiffer formează mai mult de 70 de profesori de Primaristică în Germania.",
              },
              {
                year: "2003",
                text: "PRIMARISTICA® este introdusă în România de Asociația ArsMedica, prin seminare și conferințe adresate specialiștilor și publicului larg.",
              },
              {
                year: "2012–2014",
                text: "Primul Curs de formare a Profesorilor de Primaristică din România, susținut de Prof. Dr. Herbert Pfeiffer.",
              },
              {
                year: "2015–2017",
                text: "Al doilea Curs de formare din România, de asemenea susținut de Prof. Dr. Herbert Pfeiffer.",
              },
              {
                year: "2018",
                text: "Se fondează Institutul de Primaristică din România, cu scopul principal de formare continuă a profesorilor de Primaristică.",
              },
              {
                year: "2019",
                text: "Primul Congres Internațional de Primaristică \u2014 \u201EFive decades of Primaristic\u201D \u2014 la Viena.",
              },
              {
                year: "2022",
                text: "Al doilea Congres \u2014 \u201EZece ani de Primaristică \u00een Rom\u00e2nia\u201D \u2014 la Barcelona, g\u0103zduit de Academia Medico Homeopatica de Barcelona, fondat\u0103 \u00een 1890.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="group flex gap-6 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="relative shrink-0">
                  <span className="relative z-10 inline-block rounded-lg bg-gradient-to-br from-primary/15 to-primary/10 px-3 py-1.5 text-sm font-bold text-primary ring-1 ring-inset ring-primary/10">
                    {item.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Profesori preview */}
      <section className="bg-card py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Profesori
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Cine ne învață?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-muted-foreground">
            Primaristica este predată de profesoarele de Primaristică, formate
            în cadrul unui program de doi ani, la sfârșitul căruia primesc
            Diploma de Profesor de Primaristică®. Educația profesorilor
            continuă prin întruniri lunare și seminare bi-anuale.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-14 rounded-full px-10">
              <Link href="/profesori">Vezi profesorii</Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider />

      <ContactCTA
        title="Contactează-ne"
        description="Suntem aici pentru a răspunde întrebărilor tale despre PRIMARISTICA® și despre cum te poate ajuta."
      />
    </>
  );
}

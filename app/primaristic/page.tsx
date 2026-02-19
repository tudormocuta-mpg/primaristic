import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "Ce este Primaristic®",
  description:
    "PRIMARISTIC® este cunoașterea și educarea dezvoltării senzo-motorii a omului. Fondată în anii 70 de Helga Pfeiffer-Meisel.",
};

export default function PrimaristicPage() {
  return (
    <>
      <PageHeader
        title="Ce este PRIMARISTIC®?"
        subtitle="Cunoașterea și educarea dezvoltării senzo-motorii a omului"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Introducere */}
        <section id="introducere" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Introducere
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Fondată în anii &apos;70 de Helga Pfeiffer-Meisel, terapeut fizic
            pediatru, PRIMARISTIC® este o disciplină de interes general, fiind
            necesară fiecăruia dintre noi, la orice vârstă, sănătos sau în stare
            de boală. PRIMARISTIC® analizează și susține dezvoltarea și
            maturizarea senzo-motorie normală. Dezvoltarea senzo-motorie este
            temelia funcționării echilibrate a întregului organism și garanția
            împlinirii capacităților noastre superioare. Distorsiunile
            senzo-motorii apar ca o consecință a acțiunii Reflexelor Primare după
            naștere. Prin PRIMARISTIC®, la orice vârstă, putem preveni și
            înlătura obstacolele apărute ca urmare a persistenței după naștere a
            Reflexelor Primare.
          </p>
        </section>

        {/* Definiție */}
        <section id="definitie" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Definiție</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            PRIMARISTIC® este cunoașterea și educarea dezvoltării senzo-motorii a
            omului. Dezvoltarea senzo-motorie se bazează pe ordinea naturală
            neurofiziologică. Neurofiziologia studiază funcționarea normală a
            sistemului nervos.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="rounded-lg border border-border bg-card p-4">
              <strong className="text-foreground">Senzo</strong> – privitor la
              simțuri. Sistemul nervos preia și procesează informațiile din afara
              și dinlăuntrul corpului (auz, văz, miros, gust, tact, echilibru,
              propriocepție, sensibilitate viscerală).
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <strong className="text-foreground">Motor</strong> – privitor la
              mișcare. Mișcarea este răspunsul final dat de organism ca urmare a
              procesării informațiilor. Senzația și mișcarea constituie o unitate
              inseparabilă.
            </li>
          </ul>
        </section>

        {/* Reflexele Primare */}
        <section id="reflexele-primare" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Reflexele Primare
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Conceptul central al PRIMARISTIC® este reprezentat de Reflexele
            Primare. Reflexele Primare sunt tipare neurologice ereditare,
            înnăscute, tonice, de necesitate vitală pe parcursul vieții
            intrauterine. La naștere, misiunea lor fiind îndeplinită, necesitatea
            lor încetează. Activarea Reflexelor Primare după naștere devine un
            obstacol în dezvoltarea senzo-motorie normală.
          </p>
        </section>

        {/* Tonusul Muscular */}
        <section id="tonusul-muscular" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Tonusul Muscular
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Tonusul Muscular este tensiunea din mușchi, necesară a fi adaptată
            funcțiilor corpului în fiecare moment. Postura și mișcarea sunt
            expresia Tonusului Muscular. Când tonusul este inadecvat crescut ca
            urmare a acțiunii Reflexelor Primare, calitatea senzațiilor și
            percepțiilor este modificată, creând un cerc vicios.
          </p>
        </section>

        {/* Program de Viață */}
        <section id="program-de-viata" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            PRIMARISTIC® — Program de Viață
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Emanciparea de Reflexele Primare se obține prin practicarea zilnică a
            unui program de exerciții creat de Helga Pfeiffer-Meisel. Este de
            dorit ca programul să fie practicat pe perioada întregii sarcini.
            Adulții învață exercițiile și le practică independent, acasă. Astfel,
            PRIMARISTIC® — Program de Viață se practică la toate vârstele.
          </p>
        </section>

        {/* Cui îi este de folos */}
        <section id="cui-se-adreseaza" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Cui îi este de folos
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            PRIMARISTIC® se adresează fiecărei persoane, la orice vârstă,
            bolnavă sau sănătoasă, femeii gravide, nou-născutului din prima sa zi
            de viață.
          </p>
        </section>

        {/* Istoric */}
        <section id="istoric" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Istoric</h2>
          <p className="leading-relaxed text-muted-foreground">
            PRIMARISTIC® s-a cristalizat în anii &apos;70, în Germania, și a
            fost numită ca atare de Helga Pfeiffer-Meisel (1941–2006). Din 2003,
            a început să fie cunoscută în România prin seminariile bianuale de
            homeopatie ale Asociației ArsMedica, susținute de Prof. Dr. Herbert
            Pfeiffer. Primul Curs de formare a Profesorilor de PRIMARISTIC® în
            România a fost susținut de Prof. Dr. Herbert Pfeiffer în perioada
            2012–2014. În Decembrie 2014 au absolvit opt Profesori de
            PRIMARISTIC®.
          </p>
        </section>

        {/* Lecția de Primaristic */}
        <section id="lectia" className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Cine ne învață / Lecția de Primaristic®
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            PRIMARISTIC® este predată de Profesorii de PRIMARISTIC®, formați
            printr-un program educațional de 2 ani, la finalul căruia primesc
            Diploma de Profesor de PRIMARISTIC®. Lecțiile sunt individuale, cu
            durata de 45 minute. În cazul nou-născutului și copilului, mama este
            învățată să aplice pozițiile primaristice.
          </p>
        </section>

        {/* Categorii profesionale */}
        <section id="categorii-profesionale">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Categorii profesionale interesate
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Mame",
              "Educatori",
              "Învățători",
              "Profesori",
              "Medici",
              "Psihologi",
              "Terapeuți",
              "Artiști",
              "Sportivi",
              "Traineri",
              "Coaches",
            ].map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
        </section>
      </div>

      <ContactCTA />
    </>
  );
}

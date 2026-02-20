import type { Locale } from "@/i18n/config";

export interface Eveniment {
  id: string;
  titlu: Record<Locale, string>;
  data: string;
  locatie: string;
  descriere: Record<Locale, string>;
  trecut: boolean;
}

export const evenimente: Eveniment[] = [
  {
    id: "1",
    titlu: {
      ro: "Primul Congres Internațional de Primaristică",
      en: "First International Congress of Primaristic",
      de: "Erster Internationaler Kongress für Primaristik",
      es: "Primer Congreso Internacional de Primarística",
      fr: "Premier Congrès International de Primaristique",
    },
    data: "2019",
    locatie: "Viena, Austria",
    descriere: {
      ro: "\u201EFive decades of Primaristic\u201D \u2014 primul congres internațional dedicat disciplinei PRIMARISTICA®.",
      en: "\u201CFive decades of Primaristic\u201D \u2014 the first international congress dedicated to the PRIMARISTICA® discipline.",
      de: "\u201EFive decades of Primaristic\u201C \u2014 der erste internationale Kongress, der der Disziplin PRIMARISTICA® gewidmet war.",
      es: "\u201CFive decades of Primaristic\u201D \u2014 el primer congreso internacional dedicado a la disciplina PRIMARISTICA®.",
      fr: "\u00AB Five decades of Primaristic \u00BB \u2014 le premier congrès international dédié à la discipline PRIMARISTICA®.",
    },
    trecut: true,
  },
  {
    id: "2",
    titlu: {
      ro: "Al doilea Congres Internațional de Primaristică",
      en: "Second International Congress of Primaristic",
      de: "Zweiter Internationaler Kongress für Primaristik",
      es: "Segundo Congreso Internacional de Primarística",
      fr: "Deuxième Congrès International de Primaristique",
    },
    data: "2022",
    locatie: "Barcelona, Spania",
    descriere: {
      ro: "\u201EZece ani de Primaristică în România\u201D \u2014 găzduit de Academia Medico Homeopatica de Barcelona, fondată în 1890.",
      en: "\u201CTen years of Primaristic in Romania\u201D \u2014 hosted by the Academia Medico Homeopatica de Barcelona, founded in 1890.",
      de: "\u201EZehn Jahre Primaristik in Rumänien\u201C \u2014 ausgerichtet von der Academia Medico Homeopatica de Barcelona, gegründet 1890.",
      es: "\u201CDiez años de Primarística en Rumanía\u201D \u2014 acogido por la Academia Médico Homeopática de Barcelona, fundada en 1890.",
      fr: "\u00AB Dix ans de Primaristique en Roumanie \u00BB \u2014 accueilli par l\u2019Academia Medico Homeopatica de Barcelona, fondée en 1890.",
    },
    trecut: true,
  },
];

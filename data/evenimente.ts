export interface Eveniment {
  id: string;
  titlu: string;
  data: string;
  locatie: string;
  descriere: string;
  trecut: boolean;
}

export const evenimente: Eveniment[] = [
  {
    id: "1",
    titlu: "Primul Congres Internațional de Primaristică",
    data: "2019",
    locatie: "Viena, Austria",
    descriere:
      "\u201EFive decades of Primaristic\u201D \u2014 primul congres interna\u021Bional dedicat disciplinei PRIMARISTICA\u00AE.",
    trecut: true,
  },
  {
    id: "2",
    titlu: "Al doilea Congres Internațional de Primaristică",
    data: "2022",
    locatie: "Barcelona, Spania",
    descriere:
      "\u201EZece ani de Primaristic\u0103 \u00een Rom\u00e2nia\u201D \u2014 g\u0103zduit de Academia Medico Homeopatica de Barcelona, fondat\u0103 \u00een 1890.",
    trecut: true,
  },
];

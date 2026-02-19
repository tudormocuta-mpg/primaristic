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
    titlu: "Seminar introductiv PRIMARISTIC®",
    data: "15 Martie 2025",
    locatie: "București, Asociația ArsMedica",
    descriere:
      "Seminar deschis pentru părinți, medici și terapeuți — introducere în principiile dezvoltării senzo-motorii și rolul Reflexelor Primare.",
    trecut: false,
  },
  {
    id: "2",
    titlu: "Workshop: PRIMARISTIC® pentru gravide",
    data: "20 Aprilie 2025",
    locatie: "Cluj-Napoca",
    descriere:
      "Workshop practic destinat femeilor gravide — exerciții de pregătire senzo-motorie pentru sarcină și naștere.",
    trecut: false,
  },
  {
    id: "3",
    titlu: "Conferința Anuală de Primaristică",
    data: "10 Noiembrie 2024",
    locatie: "București",
    descriere:
      "Conferință cu prezentări ale profesorilor de PRIMARISTIC® din România și invitați internaționali. Studii de caz și demonstrații practice.",
    trecut: true,
  },
];

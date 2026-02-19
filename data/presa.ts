export interface ArticolPresa {
  id: string;
  titlu: string;
  publicatie: string;
  data: string;
  linkExtern: string;
  descriere: string;
}

export const articolePresa: ArticolPresa[] = [
  {
    id: "1",
    titlu: "PRIMARISTIC® — o abordare revoluționară în dezvoltarea copilului",
    publicatie: "Revista Medicală Română",
    data: "Septembrie 2024",
    linkExtern: "#",
    descriere:
      "Articol despre principiile PRIMARISTIC® și impactul asupra dezvoltării senzo-motorii a copiilor, cu interviuri ale profesorilor certificați din România.",
  },
  {
    id: "2",
    titlu: "Reflexele Primare și importanța lor în primii ani de viață",
    publicatie: "Ziarul de Sănătate",
    data: "Iunie 2024",
    linkExtern: "#",
    descriere:
      "Interviu cu un profesor de PRIMARISTIC® despre cum Reflexele Primare influențează dezvoltarea normală și ce pot face părinții.",
  },
  {
    id: "3",
    titlu: "De la Germania în România: povestea disciplinei PRIMARISTIC®",
    publicatie: "Cotidianul",
    data: "Martie 2024",
    linkExtern: "#",
    descriere:
      "Reportaj despre istoricul PRIMARISTIC® și drumul parcurs de la fondarea sa de către Helga Pfeiffer-Meisel până la formarea profesorilor în România.",
  },
];

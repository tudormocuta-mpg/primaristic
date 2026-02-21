export interface Profesor {
  id: string;
  nume: string;
  activ: boolean;
  locatie: string;
  imagine: string;
}

// Fallback image for professors without a real photo
const fallbackImage = "/images/logo-icon.jpg";

export const profesori: Profesor[] = [
  // Profesori în Activitate
  {
    id: "7",
    nume: "Dr. Carmen Maria Sturza",
    activ: true,
    locatie: "București",
    imagine: "/images/profesori/Carmen Maria Sturza - 2.png",
  },
  {
    id: "1",
    nume: "Steluța Brebeanu",
    activ: true,
    locatie: "București",
    imagine: fallbackImage,
  },
  {
    id: "8",
    nume: "Rodica Mariana Țucra",
    activ: true,
    locatie: "București",
    imagine: "/images/profesori/Rodica Mariana Țucra - 2.png",
  },
  {
    id: "3",
    nume: "Ruxandra Oana Drăghicescu",
    activ: true,
    locatie: "București",
    imagine: fallbackImage,
  },
  {
    id: "4",
    nume: "Luiza Rodica Dumitrescu",
    activ: true,
    locatie: "București",
    imagine: fallbackImage,
  },
  {
    id: "5",
    nume: "Rodica Lesovici",
    activ: true,
    locatie: "București",
    imagine: fallbackImage,
  },
  {
    id: "2",
    nume: "Alina Dabija",
    activ: true,
    locatie: "București",
    imagine: "/images/profesori/Alina Dabija - 2.png",
  },
  {
    id: "6",
    nume: "Cristina Gabriela Petrescu",
    activ: true,
    locatie: "București",
    imagine: fallbackImage,
  },
  // Comunitatea de Absolvenți
  {
    id: "9",
    nume: "Dr. Loredana Manuela Cristescu",
    activ: false,
    locatie: "Cluj-Napoca",
    imagine: fallbackImage,
  },
  {
    id: "10",
    nume: "Dr. Iuliana Ștefania Tăbăraș",
    activ: false,
    locatie: "Timișoara",
    imagine: fallbackImage,
  },
  {
    id: "11",
    nume: "Magdalena Floriana Cozorici",
    activ: false,
    locatie: "Iași",
    imagine: fallbackImage,
  },
  {
    id: "12",
    nume: "Felicia Alexandra Georgescu",
    activ: false,
    locatie: "Brașov",
    imagine: fallbackImage,
  },
  {
    id: "13",
    nume: "Ionela Rodica Kokturk",
    activ: false,
    locatie: "București",
    imagine: fallbackImage,
  },
  {
    id: "14",
    nume: "Maria Alina Manta",
    activ: false,
    locatie: "Cluj-Napoca",
    imagine: fallbackImage,
  },
  {
    id: "15",
    nume: "Sînziana Tatiana Perez-Matauschek",
    activ: false,
    locatie: "București",
    imagine: "/images/profesori/Sinziana Tatiana Pere Matauschek.png",
  },
  {
    id: "16",
    nume: "Cristina Daniela Alexandru",
    activ: false,
    locatie: "București",
    imagine: fallbackImage,
  },
  {
    id: "17",
    nume: "Georgeta Kucukarikan",
    activ: false,
    locatie: "Iași",
    imagine: fallbackImage,
  },
  {
    id: "18",
    nume: "Adriana Iovița Mihai",
    activ: false,
    locatie: "Brașov",
    imagine: fallbackImage,
  },
  {
    id: "19",
    nume: "Livia Mihai",
    activ: false,
    locatie: "București",
    imagine: fallbackImage,
  },
];

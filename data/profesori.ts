export interface Profesor {
  id: string;
  nume: string;
  specializare: string;
  localitate: string;
  telefon: string;
  email: string;
}

export const profesori: Profesor[] = [
  {
    id: "1",
    nume: "Dr. Maria Ionescu",
    specializare: "Profesor de PRIMARISTIC®, Medic pediatru",
    localitate: "București",
    telefon: "0721 000 001",
    email: "maria.ionescu@example.com",
  },
  {
    id: "2",
    nume: "Ana Popescu",
    specializare: "Profesor de PRIMARISTIC®, Kinetoterapeut",
    localitate: "Cluj-Napoca",
    telefon: "0721 000 002",
    email: "ana.popescu@example.com",
  },
  {
    id: "3",
    nume: "Elena Dumitrescu",
    specializare: "Profesor de PRIMARISTIC®, Terapeut fizic",
    localitate: "Timișoara",
    telefon: "0721 000 003",
    email: "elena.dumitrescu@example.com",
  },
  {
    id: "4",
    nume: "Dr. Cristina Vasilescu",
    specializare: "Profesor de PRIMARISTIC®, Medic neurolog",
    localitate: "Iași",
    telefon: "0721 000 004",
    email: "cristina.vasilescu@example.com",
  },
  {
    id: "5",
    nume: "Laura Marinescu",
    specializare: "Profesor de PRIMARISTIC®, Psiholog",
    localitate: "București",
    telefon: "0721 000 005",
    email: "laura.marinescu@example.com",
  },
  {
    id: "6",
    nume: "Ioana Gheorghe",
    specializare: "Profesor de PRIMARISTIC®, Educator",
    localitate: "Brașov",
    telefon: "0721 000 006",
    email: "ioana.gheorghe@example.com",
  },
  {
    id: "7",
    nume: "Dr. Mihaela Stan",
    specializare: "Profesor de PRIMARISTIC®, Medic de familie",
    localitate: "Sibiu",
    telefon: "0721 000 007",
    email: "mihaela.stan@example.com",
  },
  {
    id: "8",
    nume: "Adriana Popa",
    specializare: "Profesor de PRIMARISTIC®, Terapeut ocupațional",
    localitate: "Constanța",
    telefon: "0721 000 008",
    email: "adriana.popa@example.com",
  },
];

# PRIMARISTIC® — Institutul de Primaristică România

Website de prezentare pentru disciplina PRIMARISTIC® — metodă de dezvoltare senzo-motorie fondată de Helga Pfeiffer-Meisel.

## Stack tehnic

- **Framework:** Next.js 14 (App Router)
- **Limbaj:** TypeScript
- **Styling:** Tailwind CSS
- **Componente UI:** shadcn/ui
- **Font:** Lato (Google Fonts)

## Rulare locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Structura proiectului

```
app/
├── layout.tsx              # Layout global (nav + footer)
├── page.tsx                # Home
├── primaristic/page.tsx    # Ce este Primaristic®
├── profesori/page.tsx      # Profesori certificați
├── formare/page.tsx        # Program de formare
├── evenimente/page.tsx     # Evenimente
├── presa/page.tsx          # Presă
└── contact/page.tsx        # Contact

components/
├── layout/                 # Navbar, Footer
├── home/                   # HeroSection, BenefitsCards, AudienceGrid
├── shared/                 # PageHeader, ContactCTA
└── ui/                     # shadcn/ui components

config/
└── site.ts                 # Titlu, descriere, contact, navigare

data/
├── profesori.ts            # Lista profesorilor certificați
├── evenimente.ts           # Lista evenimentelor
└── presa.ts                # Articole de presă
```

## Cum adaugi un profesor nou

Editează `data/profesori.ts` și adaugă un obiect în array-ul `profesori`:

```ts
{
  id: "9",
  nume: "Numele Profesorului",
  specializare: "Profesor de PRIMARISTIC®, Specializarea",
  localitate: "Orașul",
  telefon: "07xx xxx xxx",
  email: "email@example.com",
}
```

## Cum adaugi un eveniment nou

Editează `data/evenimente.ts` și adaugă un obiect în array-ul `evenimente`:

```ts
{
  id: "4",
  titlu: "Titlul evenimentului",
  data: "15 Iunie 2025",
  locatie: "Orașul, Locația",
  descriere: "Descrierea scurtă a evenimentului.",
  trecut: false,  // true pentru evenimente trecute
}
```

## Cum adaugi un articol de presă

Editează `data/presa.ts` și adaugă un obiect în array-ul `articolePresa`:

```ts
{
  id: "4",
  titlu: "Titlul articolului",
  publicatie: "Numele publicației",
  data: "Luna 2025",
  linkExtern: "https://link-catre-articol.ro",
  descriere: "Descriere scurtă a articolului.",
}
```

## Deploy

Proiectul este configurat pentru deploy pe Vercel. Conectează repository-ul GitHub la Vercel pentru deploy automat la fiecare push pe `main`.

## Contact

Asociația ArsMedica-România — Tel: 021 212 46 55

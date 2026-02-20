# CLAUDE.md — Convenții proiect primaristic.ro

## Despre proiect
Website de prezentare pentru Institutul de Primaristică România.
Totul este static — fără CMS, fără bază de date, fără autentificare.
Site multilingv: RO (implicit), EN, DE, ES, FR.

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Font: Lato (body) + DM Serif Display (headings), încărcate via `next/font/google`
- Paleta caldă: teal #5A8A7E (primary), terracotta #C4835A (accent), cream #F7F3EE (background)
- i18n: dicționare TypeScript type-safe (zero dependențe externe)
- Limbi: RO / EN / DE / ES / FR

## Convenții cod

### Structură fișiere
- Paginile sunt în `app/[locale]/<ruta>/page.tsx`
- Layout root: `app/layout.tsx` (passthrough) → `app/[locale]/layout.tsx` (layout real cu `<html lang>`)
- Componentele layout: `components/layout/` (Navbar, Footer, LanguageSwitcher)
- Componente specifice paginii home: `components/home/`
- Componente partajate: `components/shared/`
- Componente shadcn/ui: `components/ui/` (nu modifica manual)
- Date dinamice (profesori, evenimente): `data/*.ts`
- Configurare globală (contact): `config/site.ts` (doar date non-traduse: URL, telefon, email)
- Dicționare i18n: `i18n/dictionaries/{ro,en,de,es,fr}.ts`
- Config i18n: `i18n/config.ts` (Locale type, locales[], defaultLocale)
- Middleware: `middleware.ts` (locale detection, rewrite, redirect)

### i18n — Convenții
- Limba implicită (RO) se servește fără prefix: `/profesori`
- Celelalte limbi au prefix: `/en/profesori`, `/de/profesori`, etc.
- `/ro/profesori` face redirect la `/profesori` (canonical)
- `i18n/dictionaries/ro.ts` este sursa de adevăr — exportă tipul `Dictionary`
- Toate celelalte dicționare trebuie să satisfacă tipul `Dictionary`
- Textele traduse se accesează via `getDictionary(locale)` în server components
- Pentru client components (Navbar, Contact form): dict-ul se pasează ca props
- Link-uri locale-aware: folosește `localePath(locale, "/path")` din `lib/i18n-utils.ts`
- Metadata per pagină: `generateMetadata()` async cu `getDictionary()`
- NU hardcoda texte în română direct în JSX — totul vine din dicționar

### Stilizare
- Folosim variabile CSS HSL definite în `app/globals.css`
- Culorile din Tailwind config referă variabilele CSS (`hsl(var(--primary))`)
- Paleta caldă: teal #5A8A7E (primary), terracotta #C4835A (accent), cream #F7F3EE (background)
- Font headings: `font-display` (DM Serif Display) via clasa Tailwind
- Ton vizual: profesional-medical, curat, aerat, cald

### Date de contact
- NU hardcoda datele de contact — folosește `siteConfig` din `config/site.ts`
- Telefon, organizație, email — din config (non-traduse)
- Program, copyright, descriere — din dicționar (traduse per limbă)

### Componente
- `PageHeader` — header reutilizabil (title + subtitle, prop-driven)
- `ContactCTA` — bloc CTA cu props: title, description, locale, buttonLabel
- `Navbar` — sticky, responsive, cu LanguageSwitcher, primește locale + dict
- `Footer` — primește locale + dict, link-uri locale-aware
- `LanguageSwitcher` — dropdown limbă, setează cookie NEXT_LOCALE

### SEO
- Metadata per pagină via `generateMetadata()` async
- Layout-ul definește template-ul: `%s | PRIMARISTICA®`
- `<html lang={locale}>` setat dinamic per limbă

## Comenzi
- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint

## Ce să NU faci
- Fără animații complexe (framer-motion, GSAP)
- Fără CMS, bază de date sau backend
- Fără analytics/tracking
- Fără lorem ipsum — conținut real, tradus
- Fără dependențe noi fără aprobare
- Fără hardcodare texte în JSX — totul din dicționar

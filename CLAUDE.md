# CLAUDE.md — Convenții proiect primaristic.ro

## Despre proiect
Website de prezentare pentru Institutul de Primaristică România.
Totul este static — fără CMS, fără bază de date, fără autentificare.

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Font: Lato (Google Fonts), încărcat via `next/font/google`
- Limba: doar română (`<html lang="ro">`)

## Convenții cod

### Structură fișiere
- Paginile sunt în `app/<ruta>/page.tsx`
- Componentele layout: `components/layout/`
- Componente specifice paginii home: `components/home/`
- Componente partajate: `components/shared/`
- Componente shadcn/ui: `components/ui/` (nu modifica manual)
- Date dinamice (profesori, evenimente, presă): `data/*.ts`
- Configurare globală (contact, navigare, metadata): `config/site.ts`

### Stilizare
- Folosim variabile CSS HSL definite în `app/globals.css`
- Culorile din Tailwind config referă variabilele CSS (`hsl(var(--primary))`)
- Paleta: albastru-gri calm (#5B7E8A primary), verde subtil (#7A9E5F accent)
- Ton vizual: profesional-medical, curat, aerat, fără animații complexe

### Date de contact
- NU hardcoda datele de contact — folosește `siteConfig` din `config/site.ts`
- Telefon, organizație, program, copyright — toate din config

### Componente
- `PageHeader` — header reutilizabil pentru paginile interioare (title + subtitle opțional)
- `ContactCTA` — bloc CTA contact reutilizabil cu title/description customizabile
- Navbar — sticky, responsive, cu meniu mobil

### SEO
- Metadata per pagină exportată ca `export const metadata: Metadata`
- Layout-ul principal definește template-ul: `%s | PRIMARISTIC®`

## Comenzi
- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint

## Ce să NU faci
- Fără animații complexe (framer-motion, GSAP)
- Fără i18n/multilingv
- Fără CMS, bază de date sau backend
- Fără analytics/tracking
- Fără lorem ipsum — conținut real în română
- Fără dependențe noi fără aprobare

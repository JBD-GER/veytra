# Venture Studio Website

Produktionsnahe Next.js-Website für ein deutsches Venture Studio und AI Venture Studio. Die Website ist SEO-first aufgebaut, nutzt den App Router, TypeScript, Tailwind CSS und ein Kontaktformular mit Resend-Anbindung.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components
- Resend für den E-Mail-Versand
- Vercel-ready Deployment

## Installation

```bash
npm install
```

## Lokale Entwicklung

```bash
npm run dev
```

Die Website läuft danach unter `http://localhost:3000`.

## ENV Variablen

Lege lokal eine `.env.local` an:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_TAG_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
```

`CONTACT_FROM_EMAIL` muss zu einer in Resend verifizierten Domain passen. `CONTACT_TO_EMAIL` ist die Empfängeradresse für Projektanfragen.
Die Google-Variablen sind optional. Der Consent Mode startet standardmäßig abgelehnt; Google-Tags werden erst nach Einwilligung geladen.

## Resend-Konfiguration

1. Domain in Resend verifizieren.
2. `RESEND_API_KEY` erstellen.
3. `CONTACT_FROM_EMAIL` mit verifizierter Absenderdomain setzen.
4. `CONTACT_TO_EMAIL` als Zieladresse setzen.

## Deployment auf Vercel

1. Repository mit Vercel verbinden.
2. ENV Variablen in Vercel eintragen.
3. Production Domain setzen und `NEXT_PUBLIC_SITE_URL` auf die finale URL ändern.
4. Build ausführen lassen.

## SEO-Struktur

Enthalten sind eigene Metadaten, Canonicals, OpenGraph, Twitter Cards, `sitemap.ts`, `robots.ts`, Organization Schema, ProfessionalService Schema und FAQ Schema auf relevanten Seiten.

## Seitenübersicht

- `/`
- `/venture-studio`
- `/ai-venture-studio`
- `/leistungen`
- `/studio-os`
- `/prozess`
- `/fuer-gruender`
- `/fuer-startups`
- `/fuer-unternehmen`
- `/fuer-investoren`
- `/case-studies`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- `/agb`

## Rechtliche Hinweise

`/impressum`, `/datenschutz` und `/agb` enthalten konkrete Stammdaten und Tracking-Hinweise. Die Texte sollten vor Veröffentlichung rechtlich final geprüft werden.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

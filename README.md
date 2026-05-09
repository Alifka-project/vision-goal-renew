# Vision Goal — website

Redesign and rebuild of [visiongoal.ch](https://visiongoal.ch).

A premium Swiss platform for cohort-based intensives and curated business
access — three flagship programmes, hosted by practitioners, by application.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) on React 19
- [Tailwind CSS](https://tailwindcss.com/) with a custom design system
- TypeScript, no client-state library
- Cookie-persisted i18n across **EN / DE / FR / ES / ZH**
- Static export of every route via `generateStaticParams`

## Pages

```
/                           Home
/programmes                 Programmes index
/programmes/[slug]          Detail × 3 (access, banking, topic)
/private-office             HNWI introductions surface
/hosts                      Faculty index
/hosts/[slug]               Profile × 6 (Andreas Svoboda + 5 sample hosts)
/alumni                     Alumni & network
/insights                   Editorial index + 12 published research links
/insights/[slug]            Article × 6
/apply                      Multi-step application
/apply/private-consultation Confidential call request
/apply/private-cohort       Institutional enquiry
/about                      Founder, career, standards & registration
/contact                    Contact form + office details
/legal/imprint              Required Swiss imprint
/legal/privacy              Privacy (FADP / GDPR aligned)
/legal/cookies              Cookie register
/legal/application-terms    Application terms
/sitemap.xml                Auto-generated
/robots.txt                 Auto-generated
```

## Develop

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The dev server runs
in fast-refresh mode; saving any file under `src/` reloads instantly.

## Build

```bash
npm run build
npm run start
```

The build produces a fully static site (every route is prerendered) plus
`sitemap.xml` and `robots.txt` at the root.

## Project layout

```
src/
├── app/                    Routes (App Router)
├── components/
│   ├── chrome/             Header, Footer, MobileMenu, LangSwitcher
│   ├── modules/            Editorial blocks (Hero, TrustStrip, etc.)
│   ├── effects/            Reveal, Marquee, MagneticLink
│   └── ui/                 Eyebrow, Button, StatusPill, Field
├── i18n/
│   ├── config.ts           Locale list + cookie name
│   ├── dictionary.ts       All visible strings × 5 locales
│   └── I18nProvider.tsx    Client provider with cookie persistence
├── lib/
│   ├── content.ts          Programmes, hosts, cohorts, insights, publications
│   └── images.ts           Photographic placeholders (Unsplash)
└── styles/
    └── globals.css         Design tokens + utility layers
```

## Deploy

Built for [Vercel](https://vercel.com). Push to `main`; Vercel picks up the
Next.js framework automatically. No environment variables required for the
current build (forms render and validate client-side; CMS and form-delivery
wiring is the next phase).

## Status

Redesign / preview build. Programme prospectuses, real cohort host roster,
and translated long-form body copy land at the CMS-load stage per the BRD.

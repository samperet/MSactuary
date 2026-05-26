# MedicSolution Website — UI Kit

Interactive recreation of [medicsolution.com](https://www.medicsolution.com), the public B2B website for MedicSolution Nordic AB. Five clickable views composed from small, reusable React components.

## Pages

| Route | Component | What it shows |
|---|---|---|
| `home`       | `HomePage`       | Hero, business-areas grid, solutions list, stats block, reference cases |
| `max24`      | `MAX24Page`      | Sub-brand preparedness page — hero + spec strip + floorplan + CTA |
| `healthcare` | `HealthcarePage` | Business-area template — hero + care-functions grid + solutions + references |
| `contact`    | `ContactPage`    | Lead form + the three Swedish office addresses |

Navigation lives in the sticky top `<Header>`; clicking a top-nav item or any in-page link routes through the simple in-memory router in `app.jsx`.

## Components

```
Header.jsx          Sticky 72-px nav. MS+ symbol + wordmark left, links + EN/SV right.
Hero.jsx            Full-bleed photo + navy gradient + display headline + optional CTA.
BusinessAreas.jsx   4-up grid of card-outlined area links with hover lift.
SolutionsList.jsx   "With our solutions you get" — heading + bolded-promise rows.
StatsBlock.jsx      The 100% / 40+ / 30+ / 0% proof block on bone background.
ReferenceCases.jsx  Alternating image/text reference rows with meta-chips.
Footer.jsx          Navy plate, three address columns + LinkedIn + copyright bar.

HomePage.jsx        Composes the canonical home view.
MAX24Page.jsx       Sub-brand preparedness page (indigo accent).
HealthcarePage.jsx  Care-functions grid + solutions + references.
ContactPage.jsx     Lead form with focus rings + office aside.

app.jsx             Root component, in-memory router across the four pages.
```

## What's intentionally lossy

This is a **UI kit**, not a production build of the site.

- **No backend.** The contact form is local-state only; submitting flips to a thank-you panel.
- **No real CMS content.** Reference cases are illustrative; the live site has more.
- **News, About-us sub-pages, Newsletter, Film library** route to home — they exist on the live site but aren't reproduced.
- **EN/SV** is visual only; only English content is wired up.
- **Submenus** appear on hover but use illustrative children (Healthcare → Research → MAX24 → Services).

## What's faithful

- The **sticky top nav** + flyout submenu pattern (white bar, navy text, 1 px bottom border).
- The **hero plate** treatment — navy gradient over full-bleed photography, brand rule + eyebrow + display headline + optional CTA.
- **Spacing rhythm** — 96 px section padding, generous left/right gutters, 880 px max copy width.
- The **stats block** with 96 px display numerals and a thin navy top-rule per column.
- **Reference rows** alternate image/text left-right with mono-set meta chips.
- The **footer**'s exact three-column structure and the specific Swedish offices.
- All photography is **real, lifted from the live site** under `/assets/`.

## How to extend

The components are intentionally small and free of hard-coded data — pass props (or replace the `AREAS` / `CASES` arrays inline). Add a new business-area page by cloning `HealthcarePage.jsx` and swapping the `care-functions` grid content.

⚠️ Substitutions to flag: the **horizontal MedicSolution wordmark** is set in Familjen Grotesk because the brand publishes only the icon mark as a flat asset. The **fonts** (Familjen Grotesk + IBM Plex) are Google-Fonts substitutes — see project root `README.md` ▸ Typography.

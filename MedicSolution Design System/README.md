# MedicSolution Design System

A design system distilled from [medicsolution.com](https://www.medicsolution.com) — the public surface of **MedicSolution Nordic AB**, a Swedish manufacturer of prefabricated, modular medical infrastructure.

> _"Ultra-mobile buildings for civilian healthcare access."_ — public-site headline

This system is the design layer: colors, type, motion, voice, and a small UI kit you can mock against. Not the product itself.

---

## Index

| File | What it is |
|---|---|
| `README.md` | (this) brand context + content & visual foundations |
| `SKILL.md`  | Agent Skill manifest — load this in Claude Code to brand assets reliably |
| `colors_and_type.css` | Tokens (colors, type scale, spacing, radius, shadow, motion) + element styles |
| `assets/` | Logo (MS+ symbol), favicon, product photography, 3D module renders |
| `preview/` | Small swatch / specimen cards that populate the **Design System** tab |
| `ui_kits/website/` | React recreation of medicsolution.com — hero, business areas grid, references, footer |
| `fonts/` | (placeholder — Google Fonts substitutes are loaded from CDN; drop licensed files here when available) |

---

## 1. Company context

**MedicSolution Nordic AB** — HQ in Upplands Väsby, Sweden; regional offices in Malmö and Trollhättan. ~40 years of experience producing prefabricated medical modules together with their factory partner **Swedish Modules KeyPlants** (production plant in Emtunga, Sweden). They have delivered to 30+ countries.

The product is a kit-of-parts approach to medical buildings: ~95 % of construction happens indoors at the factory, modules ship as turnkey blocks, and a site team assembles them in 3–5 days followed by a 4–5 week installation. The pitch is **delivery time, quality control, and reuse** — you can rent or buy, and the modules can be relocated, renovated, and re-adapted.

### Business areas (and the way the site organises them)

| Area | What |
|---|---|
| **Healthcare** | Operating theaters, ICUs, diagnostics, clean rooms — permanent or temporary, attached to existing hospitals |
| **Research** | Laboratory facilities — pharma, life sciences, cGMP / FDA-compliant where required |
| **MAX24 — preparedness** | Sub-brand for ultra-mobile rapid-deployment care modules. Delivered in ≤24h. Currently offered as an operating-theater module (MAX24-OP). Available as service-level agreement or subscription, not just purchase. |
| **Services** | Lifecycle services — maintenance, refurbishment, re-deployment |

### Sources used to build this system

- Public website: <https://www.medicsolution.com> (English) / <https://www.medicsolution.com/sv/> (Swedish)
- Sub-brand splash images for **MAX24** found at `/wp-content/uploads/2024/12/`
- Logo (MS+ symbol) at `/wp-content/uploads/2026/03/cropped-medic-solution_symbol-*.png` — only the icon mark is published as a flat asset; the wordmark only appears burned into product renders
- The horizontal **"MedicSolution NORDIC AB"** lockup is reconstructed from the MAX24-OP module render and matched to the icon's navy
- Site is WordPress; no published Figma or open-source codebase was provided

⚠️ No design tokens, brand book, or font files were available from the company. Everything below is reverse-engineered from public photography and the rendered site. **Flag any inconsistency with the brand team's actual guidelines.**

---

## 2. Content fundamentals

### Voice

The voice is **engineering-led, plural, and confident** — Swedish B2B done well. It treats the reader as a procurement professional or clinical decision-maker, not a consumer.

- **We / our**, never _I_. The company is the subject. The reader is _you_, but addressed sparingly.
  > _"We have solutions for hospitals…"_
  > _"With our solutions you get…"_
- **No hype words.** No "revolutionary", no "world-class", no "next-gen". The strongest superlative on the site is "robust, flexible and reliable".
- **Numerics as proof.** Hard numbers do the bragging. _"95% of the construction work takes place in a production facility"_, _"40+ years"_, _"30+ countries"_, _"reduce delivery time by up to 50%"_.
- **Lists over prose** when listing benefits. Em-dash lead-in: _"– Operating theaters / – Laboratories / – Clean rooms"_.
- **Bold the promise, then explain it.** A short bolded fragment introduces a paragraph, then plain text supports it:
  > **A flexible solution** for both permanent and temporary facilities.
  > **Short delivery time** compared to site-built…

### Casing & punctuation

- **Sentence case** for headings (`Ultra-mobile buildings for civilian healthcare access`), not Title Case. The exception is product names: **MAX24**, **MAX24-OP**, **MedicSolution Nordic AB**.
- **British English** (`organisation`, `prefabrication`, `minimise`). Carry this through.
- **En-dash / em-dash** are used for asides — and to lead list items.
- **No exclamation marks.** Ever, on the public surface.
- **Footnoted asterisks** for citations — _"…confirmed in several studies, including the study Modular construction: From projects to products, by McKinsey & Company\*"_.

### Emoji & decorative glyphs

- **No emoji.** Anywhere. Removing them is part of the brand.
- **No decorative unicode** (no →, ✓, ⭐). The closest thing the site uses is a hyphen/en-dash before list items, and a typographic bullet (•) in nav separators.

### Vocabulary

- Use **module / modular / prefabrication / off-site / on-site** as core nouns
- **Care unit, care function, care capacity** — care, not "healthcare", when it's about the physical room
- **Cleanroom** is one word in product talk; **clean room** is two in marketing copy. Match context.
- **Operating theater** (US: operating room) — the site uses both; theatre/theater spelling drifts. Prefer **operating theatre** in British English.
- The phrase **"plug & play"** appears in the marketing — keep the ampersand-with-spaces style.

### Sample sentences (lift-and-adapt for any brand artefact)

> _Ensure access to the right healthcare capacity during serious incidents with SLA or subscription._

> _A functioning healthcare capacity is a crucial guarantee for a resilient society._

> _All equipment is installed prior to delivery, which saves considerable time and costs on site._

---

## 3. Visual foundations

A Swedish-clinical look. The brand reads as **engineered**, not decorative — flat-ish surfaces, lots of white space, the navy doing all the work, plenty of full-bleed photography of the actual product.

### Colour

| Role | Hex | Notes |
|---|---|---|
| **Navy 700** | `#0b426a` | THE brand colour. Sampled directly from the MS+ symbol. Primary CTAs, headers, footers, hero plates. |
| Navy 900 | `#051d31` | Hover / pressed darker variant; body text on light. |
| Navy 100 / 050 | `#e6eef6` / `#f3f7fb` | Tinted panels, table headers, faint sub-section backgrounds. |
| **Indigo 600** | `#3837cc` | Found as the Windows msapplication-TileColor — used as a digital accent: focus rings, MAX24 sub-brand emphasis, hover-link colour. **Used sparingly.** Don't let it compete with the navy. |
| Steel 050 → 900 | `#f6f8fa` → `#0a1820` | Cool neutrals. Backgrounds, dividers, secondary text. |
| **Bone 100** | `#f4f1ea` | Warm off-white pulled from the cream module-exterior. The right choice for editorial / about pages where pure white feels too cold. |
| Clinical blue | `#7fb1e0` | Surgical drape blue from product photos — data viz and imagery overlays. |
| Hi-vis | `#d7ee3a` | Construction yellow-green from site photography — emergency/alert moments only. Never decorative. |

**Single-page palette discipline:** at most navy + one accent + a neutral surface. Never navy + indigo + hi-vis on the same screen.

### Type

- **Display:** _Familjen Grotesk_ (Google Fonts) — a Swedish-designed geometric grotesk by Lettersoup. Stands in for whatever the brand's licensed display face is. Used for headings and large numerals.
- **Body:** _IBM Plex Sans_ (Google Fonts) — humanist sans with an engineering bias; pairs cleanly with the grotesque.
- **Mono:** _IBM Plex Mono_ — for dimensions, specs, code, tabular numerals.

⚠️ **Font substitution is a guess.** The live site uses WordPress block-theme fonts and no licensed brand font is exposed. If the brand team has a font file (Söhne and Söhne Mono would be plausible matches for this aesthetic), drop `.woff2` files into `fonts/` and rewrite the `@import` block in `colors_and_type.css`.

Hierarchy is generous: hero text is **64–80 px**, body **16 px**, line-heights are calm (1.5–1.65 in editorial blocks). Tracking is tight on display (`-0.022em`), open on eyebrow labels (`+0.08em` uppercase).

### Space

4 px base grid. Typical section padding is **96–128 px** vertical on desktop. Generous gutters (32 px). Containers cap at 1320 px wide; long-form copy narrows to 880 px max for readability. **More air than the average B2B site.**

### Backgrounds

The site alternates three background treatments — that's it.

1. **Plain white** (`--bg-1`) for the bulk of editorial copy.
2. **Navy hero plates** with a single full-bleed photograph or 3D module render, headline burned in white. Often a thin horizontal rule above the headline.
3. **Steel-050 / Bone-100 tinted sections** for "with our solutions you get" cards and stat blocks.

No gradients. No patterns. No textures. Photography carries all the visual texture the design needs.

### Photography

The photo set is highly recognisable and pretty narrow.

- **Clinical interiors** — operating theatres in action, surgical drapes (cool blue), bright LED OR lights. Cool white-balance, slightly desaturated.
- **Module 3D renders** — slate-grey background, soft top-down light, cutaway views with labels for rooms. The MAX24 hero is the canonical example.
- **Construction site** — hi-vis workers, scaffolding, factory-fresh white module wrapped in protective film. Bright daylight, slightly warm.
- **Architectural exteriors** — hospital extensions where the modules have been installed; usually a clear blue Nordic sky.

No stock photography. No people-pointing-at-screens. No abstract gradients.

### Iconography

Almost no iconography on the live site. The brand resists it. When marks _are_ needed, the **MS+** logo monogram does double duty. See `ICONOGRAPHY` below for the full guidance.

### Borders, corners, shadows

- **Corner radius:** very restrained. Buttons & inputs `2–4px`. Cards `8px`. Hero plates `12px`. Most surfaces are square.
- **Borders:** 1 px Steel-200 dividers, very subtle.
- **Shadows:** almost flat. A card lifts with `0 2px 8px rgba(7,27,46,0.08)` at most. No drop-shadow drama. The look is precision-engineered, not soft.

### Animation

Short, deterministic, no bounce.

- `--dur-base: 200ms` is the default. Hover/focus colour transitions land at `120ms`.
- `--ease-out: cubic-bezier(0.2, 0.7, 0.2, 1)` — soft landing, no overshoot.
- **No parallax. No scroll-jacking. No looping gradients.** A photograph may fade in once; nothing dances.

### Hover & press states

- Links: navy → indigo + underline.
- Primary button (filled navy): darken to Navy 900 on hover; on press, no scale change — just slightly deeper navy + lift removed.
- Secondary button (navy outline): fill flips to navy with white text on hover.
- **No `transform: scale()` on press.** Industrial brand — buttons shouldn't squish.

### Transparency, blur

Almost never. The only legitimate use is a 12 % white tint over a full-bleed photo to hold readable white headline text — never a backdrop-blur. The aesthetic is _matte_, not glassy.

### Cards

Three card patterns:

| Pattern | Surface | Border | Shadow | Use |
|---|---|---|---|---|
| **Flat tile** | Steel 050 / Bone 100 | none | none | Stat blocks, "with our solutions you get" lists |
| **Outlined card** | white | 1 px Steel 200 | none | Reference cases, business area cards |
| **Lifted card** | white | none | `--shadow-2` | Hover state of an outlined card, or floating CTA panel |

Cards stay square-ish (`--radius-3 = 8px`). They never tilt, never have coloured left-borders.

### Layout rules

- **One H1 per page.** It always sits on a navy hero plate.
- **Sticky top nav**, 72 px tall, white background, navy text. The logo is the MS+ symbol + "MedicSolution" wordmark.
- The footer is **navy 700 background, white text**, three columns: Contact / Mailing address / Visit (the three Swedish offices), with a LinkedIn icon and a thin "© 2024 MedicSolution Nordic AB" line at the bottom.

---

## 4. Iconography

The brand barely uses icons. When it does, the rules are tight.

### Inventory observed on the public site

- **MS+ symbol** — the only custom mark. A tall portrait monogram where the M and S share strokes and a tiny medical cross "+" sits on top of the S. Always rendered in Navy 700 (`#0b426a`) or knocked white on navy. **Never coloured otherwise.** Source: `assets/medic-solution_symbol.png`.
- **LinkedIn glyph** in the footer — the standard square LinkedIn icon, set in white on the navy footer.
- **MAX24 wordmark** — when it appears, it's set in the same display face as the rest of the brand, optionally with a hi-vis "24" if leaned into.
- **No icon font.** No Font Awesome, no Material, no Heroicons / Lucide.

### What this means for new designs

- **Default = no icon.** If a button or card works without one, leave it without one.
- When iconography is genuinely needed (UI affordances like _arrow-right_, _menu_, _close_, _search_, _check_), use **Lucide** (`https://unpkg.com/lucide@latest`) at **1.5 px stroke** in Navy 700 or current text colour. Lucide is a substitution — flag it.
- **Stroke icons only.** No fills. No two-tone. Matches the engineered/precision feel.
- **Size:** 16 px, 20 px, 24 px. Never under 16. Never decorative scale.
- **No emoji. No flag emoji.** Country lists use the locale code (SE, GB, NO) as text.
- **No coloured icons.** The accent palette is for type, not glyphs.

The **MS+ symbol** is reserved for branding moments — header logo, splash, favicon, deck masthead, paper-letterhead. It is **not** a UI icon. Don't use it as a list bullet.

### Where the assets live

- `assets/medic-solution_symbol.png` — primary mark, 512×512 transparent PNG (navy on transparent)
- `assets/cropped-medic-solution_symbol.png` — square-cropped variant
- `assets/cropped-medic-solution_symbol-180x180.png` — Apple touch icon
- `assets/cropped-medic-solution_symbol-192x192.png` — Android home-screen icon
- `assets/cropped-medic-solution_symbol-32x32.png` — favicon
- `assets/favicon.ico` — site favicon (ICO multi-size)

### Photography library

Bundled in `assets/` for offline use in mocks:

- `karlskoga-operationssal_krop.jpg` — operating theatre in use, surgical drape blue
- `max24_inuti_texter.jpg` — MAX24-OP 3D render with room labels (the canonical sub-brand image)
- `skarmavbild-2024-12-09-kl-102954.png` — MAX24 exterior render
- `swedish-modules-sodersjukhuset_mg_0505-1024x683.jpg` — Södersjukhuset module install, hi-vis workers
- `sodersjukhuset-hospital-video.jpg` — hospital exterior, completed install
- `swesaftey.jpg` — safety thumbnail
- `kvalitet.jpg` — quality thumbnail
- `v6a0137-1024x683.jpg` — factory interior
- `20151209-swedish-modules-operationsmoduler-115643-kopia.jpg` — module exteriors lineup

---

## Caveats

- No licensed brand fonts were available — **Familjen Grotesk** + **IBM Plex Sans / Mono** are substitutes. Replace if the company has a brand kit.
- No design tokens / brand book was provided — the palette is reverse-engineered from a single logo PNG and the meta tile colour. The accent indigo (`#3837cc`) is plausible but **unconfirmed**.
- The **horizontal MedicSolution wordmark** is reconstructed in the UI kit (set in the display face) rather than lifted from a vector — the company doesn't publish a flat wordmark asset.
- No iconography system was found in the wild — Lucide is a **substitution** for the rare moments UI icons are needed.

If you have access to brand guidelines, a Figma library, or font files, drop them into the project and I'll fold them in.

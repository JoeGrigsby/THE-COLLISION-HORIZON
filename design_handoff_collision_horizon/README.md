# Handoff: The Collision Horizon

## Overview
**The Collision Horizon** is a multi-page editorial web experience — a year-by-year scenario forecast (July 2026 → end of 2033) of how AI reshapes the marketing industry. It is built for a working group of practitioners (in partnership with AMA Chicago) to read, contest, and revise. It reads like a long-form research brief crossed with a terminal/lab UI: dark, monospace chrome around serif body copy.

It comprises **three production pages** plus one exploration file:
1. **The Collision Horizon** — the main long-scroll forecast (hero, abstract, two-curves chart, seven year sections, an interactive timeline explorer, an evidence-base section, an implications/actions section, footer).
2. **About** — the working group + contributor directory.
3. **POV: Production Design** — a long-form opinion essay linked from the 2027 section.
4. **Hero Directions** — design-exploration scratch file (alternate hero treatments). Reference only; not part of the shipped site.

## About the Design Files
The files in `files/` are **design references created in HTML** — prototypes that show the intended look, layout, copy, and behavior. They are **not production code to copy verbatim.** They use a small in-house template runtime (`support.js`, with `<x-dc>` custom tags and a `class Component extends DCLogic` script). **Do not port that runtime.** Your task is to **recreate these designs in the target codebase's environment** (React, Vue, Astro, plain HTML/CSS, a CMS, etc.) using its established patterns. If no environment exists yet, pick the most appropriate one — this is fundamentally a content/editorial site, so a static-site generator or a React/Next app with MDX-style content would both be natural fits.

Read the HTML for exact markup, colors, spacing, and copy; treat the `support.js`-specific bits (`<x-dc>`, `<helmet>`, `<sc-for>`, `{{ … }}` holes, `renderVals()`) as **structure to translate**, not literal syntax to keep.

## Fidelity
**High-fidelity (hifi).** Final colors, type, spacing, copy, and interactions. Recreate pixel-accurately using the values documented below.

---

## Design Tokens

### Color
| Token | Hex | Usage |
|---|---|---|
| Background (page) | `#06090a` | Near-black base, behind everything |
| Grid lines (bg) | `#0a110d` | 1px lines on a 38px×38px background grid |
| Surface / card | `#080e0b`, `#0a110d`, `#080d0a`, `#070d0a` | Slightly raised panels (several near-black greens) |
| Surface (inset/footer) | `#070b09` | "+ add" rows, footer-ish blocks |
| Callout bg | `#0b1210` | Collision-point / takeaway boxes |
| Border (primary) | `#16201b` | Default 1px borders, grid cell gutters |
| Border (faint) | `#0e1612` | Section top-rules, list-row dividers |
| Text (high) | `#eaf3ee` | Headlines, active labels |
| Text (body, serif) | `#a7b8ad`, `#9fb1a6` | Newsreader body copy |
| Text (emphasis) | `#cdd8d0` | Lead paragraphs, italic callouts |
| Text (muted) | `#6f8478` | Captions, source meta |
| Text (dim) | `#46564d`, `#4f5f56`, `#3f4f47`, `#2f3c35` | Eyebrows, inactive nav, fine print (progressively dimmer) |
| **Accent — green** | `#5be49b` | Primary accent: eyebrows, links, "industry" track, RESOLVED status, AMA dot |
| Accent — amber | `#e8b34a` | "Adaptation" curve, HIGH PRESSURE / STABILISING, prediction numbers |
| Accent — orange-red | `#e8584a` | CRITICAL status, "AI pressure" track |
| Accent — red | `#ff3b30` (label `#ff5a52`) | EXISTENTIAL status (2030) |
| Prediction chip bg / border | `#181206` / `#5a481c` | Amber numbered chips in prediction lists |
| Selection | bg `#5be49b`, text `#06090a` | `::selection` |

### Risk status → color map (drives dots, borders, labels)
- `high` → `#e8b34a` "HIGH PRESSURE"
- `critical` → `#e8584a` "CRITICAL"
- `existential` → `#ff3b30` "EXISTENTIAL"
- `stabilising` → `#e8b34a` "STABILISING"
- `resolved` → `#5be49b` "RESOLVED"

### Typography
- **Display / UI / mono:** `IBM Plex Mono` (weights 400/500/600). Used for headlines (H1/H2/H3), eyebrows, nav, labels, all-caps meta, numbers.
- **Body / editorial:** `Newsreader` (serif; weights 400/500/600 + italics, optical sizing `6..72`). Used for all running prose, callout quotes (italic), card descriptions.
- Loaded from Google Fonts (`Newsreader` + `IBM Plex Mono`).
- **Type scale (px):** hero H1 `66` (mobile `40`), section H2 `40`, sub-section H2 `30`, H3 `17`, essay H2 `21`, essay H3 `12` (uppercase, tracked), lead serif `19–22`, body serif `18` (line-height `1.8`), card/list serif `14–15`, eyebrow `10–12` (letter-spacing `0.14–0.22em`), fine meta `8–9`.
- **Letter-spacing:** headlines slightly negative (`-0.01em` to `-0.02em`); all-caps labels positive (`0.06em`–`0.22em`).
- Body line-heights: prose `1.7–1.8`; tight UI labels `1.35–1.6`.

### Spacing, radius, misc
- Content max-widths: narrow reading column `760px`; wider sections `900–960px`; hero band `1240px`.
- Section vertical padding: year sections `64px 56px`; feature sections `70–80px 56px`. Horizontal `56px` desktop, **`20px` on mobile** (≤760px).
- Border radius: cards/panels `3–6px`; pills/dots `50%`; small chips `3px`. Nothing is heavily rounded.
- Background grid: `linear-gradient(#0a110d 1px,transparent 1px)` + 90deg version, `background-size:38px 38px`, on `#06090a`.
- Left year-rail width: `138px` (fixed), `backdrop-filter: blur(6px)`, `background: rgba(6,9,10,0.82)`.
- No drop shadows anywhere — depth comes from 1px borders and near-black surface steps.

---

## Screens / Views

### 1. The Collision Horizon (main page) — `files/The Collision Horizon.dc.html`
Single long vertical scroll with a **fixed left year-rail** for navigation. `font-family: IBM Plex Mono`, dark grid background. Main content is offset `padding-left:138px` to clear the rail.

**A. Fixed left year-rail** (`.ch-rail`, fixed, 138px, full height, `border-right:1px solid #16201b`, blurred translucent bg)
- Top: `C/H` wordmark (9px green square + label).
- Year list: one button per timeline entry (2026 → 2033). Each = a 2px vertical bar + year number + tiny label (SETUP, THRESHOLD, …). The **active** year (tracked by scroll position) shows its risk-color on the bar, year text `#eaf3ee`, sub-label in the risk color; inactive = `transparent` bar, `#46564d` year, `#2f3c35` sub.
- Bottom: vertical `OPEN / FOR / REVIEW` micro-label in green.
- **Mobile (≤760px):** rail collapses to a horizontal scrolling strip pinned to the top; head/foot hidden.

**B. Hero / Abstract band** (`max-width:1240px`, centered, min-height ~96vh, flex-centered)
- Top bar: right-aligned `ABOUT & CONTRIBUTORS →` link (to About) + `v0.9 · build 2026.07`.
- Eyebrow: `RESEARCH BRIEF // SCENARIO FORECAST` (green, tracked).
- A terminal command line: `$ ./project --marketing --range 2026-33` with a **blinking green caret** (8×16px block, `@keyframes blink` 1.1s steps).
- **H1:** `THE / COLLISION / HORIZON` — 66px, weight 600, line-height 0.99, three lines.
- Lead serif paragraph (Newsreader, 19px, `#9fb1a6`, max-width 480px) describing the forecast.
- `IN PARTNERSHIP WITH` + AMA Chicago logo (`assets/ama-chicago.png`, 30px tall).
- Scroll cue: bobbing `↓` (`@keyframes bob`) + `SCROLL TO READ THE FORECAST`.

**C. Abstract section** (`max-width:760px`)
- Eyebrow `▸ ABSTRACT`. Four serif paragraphs (22px lead → 18px) defining the thesis: a falsifiable scenario forecast spanning the whole ecosystem (brands, agencies, publishers, platforms, consultancies). Key italic-emphasis terms in `#cdd8d0`. Defines the term *collision horizon*.

**D. The Two Curves** (`max-width:920px`, 2-col grid, gap 48px)
- Left: eyebrow `▸ THE TWO CURVES` + two serif paragraphs (capability compounds geometrically vs. industry adapts in budget cycles → divergence).
- Right: a **chart card** (`#080e0b`, border, padding 22px) containing an inline **SVG line chart** (viewBox `0 0 400 300`): axes, an area fill (green gradient `#hg`), and two polylines — green `#5be49b` (AI capability, steep) and amber `#e8b34a` (industry adaptation, shallow). X labels 2026/2029/2033, plus a legend. **On scroll into view, the lines draw on** (stroke-dashoffset animation, ~1700ms each, staggered 140ms) and dots/area fade in.

**E. Seven year sections** (`[data-section][data-year]`, `max-width:760px`, each `border-top:1px solid #0e1612`)
Years: **2026 SETUP** (high), **2027 THRESHOLD** (critical), **2028 ACCELERATION** (critical), **2029 RECKONING** (critical), **2030 INVERSION** (existential), **2031/32 NEW EQUILIBRIUM** (stabilising), **2033 DESTINATION** (resolved). Each section repeats this structure:
- Year + month-range meta (e.g. `2026` / `// 0—12 MONTHS`).
- **H2 title** (40px) + risk badge (colored dot + tracked risk label in the risk color).
- 2–3 serif body paragraphs.
- **Collision-point callout:** `#0b1210` box with a colored **left border (3px) in the risk color**, eyebrow `⚡ COLLISION POINT`, italic serif quote in `#cdd8d0`. (2033's is `⚡ THE TAKEAWAY`.)
- **Further Reading card:** bordered list of external source links (each = serif title + tracked source/year meta + `↗`), header `▸ FURTHER READING` / `EVIDENCE & POV · <year>`, footer `+ Add the working group's articles & POV for this period`. The 2027 card additionally features an **internal POV link** (to POV: Production Design) styled as a highlighted `◆ WORKING-GROUP POV` row with `→`.
- **Five Predictions card:** header `▣ FIVE PREDICTIONS TO MEASURE & VALIDATE` / `TESTABLE · <year>`; five numbered rows, each an amber square chip (`#181206` bg, `#5a481c` border, `#e8b34a` number) + serif prediction sentence.
- **2029 special:** also has a 3-cell stat band with **count-up animation** (`100%` of execution automatable, `3 hrs` to a strategy draft, `1` defensible moat) using `data-count`/`data-suf`.

**F. Interactive Timeline Explorer** (`max-width:960px`, `background:#070d0a`) — the most interactive component, see Interactions below.

**G. The Evidence Base** (`max-width:960px`)
- Eyebrow + H2 "What the research actually says" + intro.
- **2×2 grid** of the four research "camps" (Employer Surveys / Economic Modelling / Capability Extrapolation / Observed Usage), each cell = green eyebrow + named sources + serif description. 1px-gutter grid (cells `#0a110d` over `#16201b` gap).
- **5-col stat strip** `KEY DATED ESTIMATES` — five **count-up** figures: `~30%` (McKinsey), `7.5%` (Forrester), `2029` (METR, static), `−13%` (Stanford), `+78M` (WEF). Each uses `data-count` with `data-pre`/`data-suf`/`data-dec`. Mobile collapses to 2-col.
- Warning callout `⚠ READ THE FIGURES CAREFULLY` (amber left border): specificity vs. rigour caveat.

**H. Implications / Actions** (`max-width:960px`)
- Eyebrow + H2 "Four moves, while there is still pricing power" + intro.
- **2×2 grid** of four numbered moves (01–04): Move value up the stack / Own data and identity / Re-price for outcomes / Rebuild the talent pyramid. Each cell = green number, H3 (17px), serif description.

**I. Footer** (`max-width:960px`, `border-top`)
- Left: `C/H` mark + "living document" blurb + AMA logo + `ABOUT THE WORKING GROUP →` link.
- Right: metadata stack (`SCENARIO FORECAST v0.9`, `UPDATED JULY 2026`, `RANGE 2026 — 2033`, green `STATUS: OPEN FOR REVIEW`).

### 2. About — `files/About.dc.html`
`max-width:900px`. Top bar with `← THE COLLISION HORIZON` back-link + `ABOUT · v0.9`. Sections: intro (`▸ ABOUT THIS PROJECT`, H1 "The working group", two serif paragraphs); a **partnership card** (AMA Chicago logo 46px + description); a **contributor directory** — a 1px-gutter grid (3-col desktop, 1-col mobile) of contributor cards. Each card = a 48px square monogram tile (`#0c2018` bg, `#1f5a3f` border, green initials) + name (`#eaf3ee`) + role/affiliation + a `in VIEW LINKEDIN ↗` button (bordered, hover `border-color:#1f5a3f; background:#0b1512`). Final cell = a "Join the group" `+` invite tile. Fine print about titles being added. Footer mirrors the main page.

**Contributors (exact):** Bonnie Massa — Executive Director · AMA Chicago — linkedin.com/in/bonniemassainc · Matt Fairchild — linkedin.com/in/mattfairchild/ · Adam Poll — linkedin.com/in/adampoll/ · Joe Grigsby — linkedin.com/in/joegrigsby/ · Bill Krejci — linkedin.com/in/bill-krejci-5019127/ · Zack McQuiston — linkedin.com/in/zack-mcquiston-388b0324/. (All except Bonnie are "Working group contributor".)

### 3. POV: Production Design — `files/POV-Production-Design.dc.html`
`max-width:760px` single-column long-form essay, "When Making the Work Stops Being the Work" by Joe Grigsby (July 2026). Top bar back-link + `WORKING-GROUP POV`. Header: eyebrow `▸ PERSPECTIVE · PRODUCTION DESIGN`, H1 (50px), 21px serif standfirst, byline row (JG monogram + name + LinkedIn). Body = many 18px Newsreader paragraphs with monospace section H2s (each with a `border-top` rule + `padding-top:30px`) and uppercase tracked green H3 sub-heads. One pull-quote callout (`#0b1210`, green left border, 20px italic). Footer with back-links + AMA logo. **This is the full essay — copy verbatim from the file.**

### 4. Hero Directions — `files/Hero Directions.dc.html`
Exploration/scratch file of alternate hero treatments. **Not part of the production site** — keep for reference only; confirm with the team before using anything from it.

---

## Interactions & Behavior

### Scroll-driven (main page, `componentDidMount` + scroll listener)
- **Active-year tracking:** on scroll, the year whose `[data-section]` top has passed 50% of viewport height becomes the active rail item (updates rail highlight). Throttle/passive scroll listener; also runs on resize and twice on load (200ms, 800ms).
- **Reveal-on-view:** elements marked `[data-animate]` play once when their top enters the bottom 85% of the viewport. "Play" triggers, for descendants:
  - `[data-draw]` (SVG paths) — line-draw via `stroke-dasharray`/`stroke-dashoffset` animation, **1700ms**, `cubic-bezier(.22,.7,.2,1)`, staggered 140ms per path; commits to fully drawn at end.
  - `[data-fade]` — fade `opacity 0→1`, 900ms, staggered, `fill:forwards`.
  - `[data-count]` — **count-up** from 0 to `data-count` over **1300ms**, ease-out cubic; honors `data-pre` (prefix), `data-suf` (suffix), `data-dec` (decimal places). E.g. `data-count="7.5" data-dec="1" data-suf="%"` → animates to `7.5%`.
- **Rail nav click:** smooth-scrolls to the target `[data-section]` (offset −16px).

### Interactive Timeline Explorer (state machine)
State: `{ exIndex (0–6), exTab: "industry" | "ai" }`.
- **Year tabs** (top, horizontally scrollable): clicking sets `exIndex` and resets `exTab` to "industry". Active tab = `#eaf3ee` text + risk-color bottom border; inactive = `#556057` / transparent.
- **Status pill + quarter** update to the selected year's risk color/label and quarter range.
- **Collision callout** shows the selected year's collision sentence, left border = risk color.
- **Track toggle:** two tabs — **Industry Track** (active border `#5be49b`) and **AI Pressure** (active border `#e8584a`). Switching swaps the points list. Inactive tab text `#556057`.
- **Points list:** numbered rows for the active track. Industry rows use green-tinted number bubble (`#0c2018`/`#1f5a3f`/`#5be49b`); AI rows use red-tinted (`#241010`/`#5a2020`/`#e8847a`).
- **Progress bar:** 7 clickable segments at the bottom; each cell filled with its risk color when `index ≤ exIndex` (else `#16201b`); current segment opacity 1, past 0.55, future 0.4. Clicking a segment jumps `exIndex`.
- Full per-year content (industry list, AI list, collision line, quarter, risk) is in the `timeline` array in the page's `<script>` — **port that data structure intact** (it's the single source of truth for both the explorer and the rail).

### Links / navigation (relative, multi-page)
- Main → About (`About.dc.html`), Main 2027 → POV (`POV-Production-Design.dc.html`).
- About → Main (`The Collision Horizon.dc.html`), About is reachable from footer too.
- POV → Main + About.
- Many external source links (`target="_blank" rel="noopener"`) — Stanford, WEF, Anthropic, METR, Goldman Sachs, Science/OpenAI-Wharton, NBER/Acemoglu, Brookings, Forrester, McKinsey, PwC. Exact URLs are in the HTML.

### Hover states
- Links: muted → green (`#5be49b`) or green → white (`#eaf3ee`).
- Source-link rows: subtle bg tint (`#0b1512` / `#0c1c14`).
- LinkedIn buttons: `border-color:#1f5a3f; background:#0b1512`.

### Responsive
- Single breakpoint at **`max-width:760px`** in each page's `<style>`. Behavior: rail → top strip; reduced horizontal padding (56px → 20px); hero H1 66→40; multi-col grids collapse (2-col→1, 5-col→2); top bar wraps; command line shrinks. Match these rules.

---

## State Management
For the main page, the only stateful pieces:
- `activeYear` (string) — derived from scroll position; drives the left rail highlight.
- `exIndex` (0–6) and `exTab` ("industry" | "ai") — drive the interactive explorer.
- An imperative `played` Set tracks which `[data-animate]` blocks have already fired (animations play once).

No data fetching. All content is static and lives inline. The `timeline` array (7 entries: `year, navYear, label, quarter, risk, collision, industry[], ai[]`) and the `riskColors` map are the core data — model them as typed content/config in the target app.

## Assets
- `files/assets/ama-chicago.png` — AMA Chicago partner logo. Used on the main page (hero + footer), About (partnership card + footer), and POV (footer). Sizes: 28–46px tall, `border-radius:3–4px`. Provide an equivalent in the target app's asset pipeline.
- Fonts: Google Fonts — **Newsreader** and **IBM Plex Mono**. Self-host or load per the codebase's convention.
- No other raster/vector assets — the curves chart is inline SVG; all icons are unicode glyphs (`↗ → ↓ ⚡ ▸ ▣ ◆ ◇ ⚠ +`).

## Files
- `files/The Collision Horizon.dc.html` — main forecast page (markup + the `timeline` data + interaction logic in its `<script>`).
- `files/About.dc.html` — about + contributors.
- `files/POV-Production-Design.dc.html` — full POV essay (copy prose verbatim).
- `files/Hero Directions.dc.html` — hero exploration (reference only).
- `files/support.js` — the prototype's template runtime. **Do not port** — translate the structures it powers (`<sc-for>` loops → your framework's iteration, `{{ }}` holes → bindings, `renderVals()` → component state/derived values).
- `files/assets/ama-chicago.png` — partner logo.

### Translation cheat-sheet (in-house runtime → standard code)
- `<x-dc>…</x-dc>` → your component/page root. Ignore the `<!DOCTYPE>`/`<head>`/`support.js` wrapper.
- `<helmet>` → document head / `<svelte:head>` / Next `<Head>`: contains font `<link>`s and the only real CSS (`@keyframes blink/bob`, body reset, the `@media (max-width:760px)` block). Everything else is **inline `style=""`** — convert to your styling approach (CSS modules, Tailwind, styled-components — whatever the codebase uses).
- `<sc-for list="{{ items }}" as="x">` → map/`v-for`/`{#each}` over the array.
- `{{ path }}` → data binding; `onClick="{{ fn }}"` → event handler.
- `class Component extends DCLogic { renderVals(){…} }` → your component: `state` → component state, `renderVals()` returns are the derived/bound values, `componentDidMount`/`componentWillUnmount` map directly to lifecycle/effects.
- `style-hover="…"` → a `:hover` rule.

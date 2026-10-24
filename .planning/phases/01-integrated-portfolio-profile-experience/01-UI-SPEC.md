---
phase: 1
slug: integrated-portfolio-profile-experience
status: approved
shadcn_initialized: false
preset: none
created: 2026-10-24
---

# Phase 1 — UI Design Contract

> Content-only contract for the existing static portfolio. Source of truth for all visual decisions is the live implementation (`index.html`, `style.css`, `carousel-style.css`, `nav.js`, `animate.js`), constrained by the locked decisions in `.planning/STATE.md` and verified content in `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, and `.planning/ROADMAP.md`.

## Design System

| Property | Value |
|----------|-------|
| Tool | Manual — existing static HTML/CSS/JavaScript; no design-system package |
| Preset | Not applicable |
| Component library | None |
| Icon library | Existing inline SVGs and image assets; do not add an icon package |
| Font | Poppins (`--ff: 'Poppins', system-ui, sans-serif`) — follow the live site, not the older README's Roboto note |

No `components.json`, React/Next.js/Vite application, Tailwind configuration, or component registry is present. Do not initialize shadcn or add third-party registries for this content-only phase.

## Scope and Content Delta

This phase changes profile wording and verified experience data only. Do not redesign, change component structure, alter CSS geometry, or change behavior. Keep the existing page title/headline, summary, skills, and experience timeline in their current locations. Add concise summaries inside the existing timeline rows only where the supplied resumes confirm duties; this approved explanatory copy is the sole content addition and does not authorize new sections or layout changes.

This career-content phase makes no contact form changes. Preserve the existing form markup, native validation, POST submission, button label, and resulting external response behavior; do not add form UI.

**Visual hierarchy:** On the landing section, the name/display heading remains the primary anchor, the integrated role headline is the immediate supporting statement, and the existing portrait balances the composition. The existing orange `Contact me` CTA remains the primary action. In each timeline row, the confirmed role/organization label and date badge remain primary; its concise duty summary follows as secondary supporting text within the existing row.

### Profile copy

- **Document title:** `Noel Manalungsung | Technology & Growth`
- **Landing role headline:** `Technology & Growth Professional`
- **Landing supporting line:** `AI automation & integrations · Marketing operations · Software development`
- **About summary:** `I work across AI automation and integrations, marketing operations and data, technical support and client-facing solutions, software development, and creative content. My experience spans employment and independent work across technology, marketing, and creative disciplines.`
- Keep the existing `About me` heading and section eyebrow. Remove unsupported claims from replaced copy; do not add years-of-experience claims, tools, certifications, metrics, or outcomes unless separately verified.

### Skills copy

Retain the current Skills section and card/grid styling. Use concise category labels and avoid unverified tool names or achievement claims:

1. AI Automation & Integrations
2. Marketing Operations & Data
3. Technical Support & Client-Facing Solutions
4. Software & Front-End Development
5. Creative Content & Design

### Experience presentation

Keep the existing single-column timeline and its date badge/title/company hierarchy. Render one independent timeline row per entry, newest start date first. Use the confirmed label/organization and exact date range listed below. Include the following concise, source-supported duty summary in the same row for each listed role; do not create extra timeline rows. Where no duty summary is listed, show only confirmed role/organization and dates. Do not fill gaps with guessed titles, duties, locations, tools, metrics, or outcomes, and do not merge independent or concurrent entries.

| Timeline label / organization | Confirmed date |
|-------------------------------|----------------|
| Digital Marketing Executive / Data Manager — Joseph Engineering Services | Nov 2025–Present |
| Freelance Software Engineering / AI Integration / Automation | Mar 2023–Present |
| Self-employed Product Ownership | Mar 2023–Present |
| Exacot | Mar 2023–Mar 2025 |
| FCC Supermarket | Mar 2022–Feb 2023 |
| Majorel / AppleCare | Feb 2021–Mar 2022 |
| Sitel Group | Nov 2019–Jan 2021 |
| Sutherland | Oct 2019–Sep 2020 |
| Manager / Owner — 4N Internet Café and Printing Services | Sep 2015–Jan 2020 |
| Freelance Content Creation | Sep 2015–Present |

Dates and concurrent timelines follow the screenshot-confirmed history recorded in `.planning/PROJECT.md` and `.planning/REQUIREMENTS.md`; keep Sitel and Sutherland visibly overlapping. Exclude bracketed or otherwise unconfirmed CV placeholders. Do not invent formal titles for entries where the approved source does not provide one.

**CV-supported role summaries** (concise secondary copy within the matching existing timeline row). Each source reference names the original CV filename and the section supporting that entry. Bracketed source placeholders and their associated unconfirmed specifics are excluded.

| Timeline entry | Summary (claims stated in cited source) | Source evidence (CV filename — section) | Bracketed `[confirm]` details excluded |
|----------------|------------------------------------------|----------------------------------------|---------------------------------------|
| Digital Marketing Executive / Data Manager — Joseph Engineering Services | Leads digital marketing and data management, including AI integration and automated research workflows. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Professional Experience | Research scope, systems/channels, and metrics remain unconfirmed; omitted. |
| Freelance Software Engineering / AI Integration / Automation | Scopes, builds, and delivers AI integrations, automation, and websites from requirements through handover. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Freelance & Projects | Project-specific details/results and unconfirmed language/tool claims omitted. |
| Self-employed Product Ownership | Designs e-commerce products and manages listings, SEO, promotion, and customer service. | `Noel Manalungsung — CV (Growth & Marketing Operations).docx` — Freelance & Projects | Order and revenue metrics remain unconfirmed; omitted. |
| Exacot | Resolves hardware, software, network, and account-security issues by phone, chat, and email; documents recurring solutions. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Professional Experience | Satisfaction/resolution metrics and unconfirmed Identity Defender case details omitted. |
| FCC Supermarket | Monitors inventory movements and maintains the inventory database with Excel checks and reports. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Professional Experience | SKU/branch counts and error-reduction metric remain unconfirmed; omitted. |
| Majorel / AppleCare | Handles Apple-account inquiries and troubleshoots devices, including escalated iOS/macOS issues. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Professional Experience | Contact-volume and target claims remain unconfirmed; omitted. |
| Sitel Group | Uses consultative needs discovery and solution matching; do not name an unconfirmed product or customer. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Professional Experience | Product/customer specifics and quota claims remain unconfirmed; none are named. |
| Sutherland | Provides front-line IT support and client relations, resolving issues and escalations. | `Noel Manalungsung — CV (Solutions Consultant & Technical Account Management).docx` — Professional Experience | Client/account specifics and retention metrics remain unconfirmed; omitted. |
| Manager / Owner — 4N Internet Café and Printing Services | Manages daily operations, IT setup and maintenance, printing, and customer service. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Freelance & Projects | No bracketed details are used in this summary. |
| Freelance Content Creation | Creates graphics and logos, edits images and video, and produces social content. | `Noel Manalungsung — CV (AI Automation & Solutions).docx` — Freelance & Projects | Client industries and other bracketed specifics omitted. |

For FCC Supermarket, the source confirms monitoring stock movements, maintaining the inventory database, and Excel checks/reports to flag discrepancies. The bracketed `X%` error-reduction outcome is unconfirmed and is not included.

## Spacing Scale

Reference scale for any genuinely necessary content-only adjustment (in px): 4, 8, 16, 24, 32, 48, 64.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Existing compact gaps |
| sm | 8px | Existing small gaps |
| md | 16px | Existing default spacing |
| lg | 24px | Existing local spacing |
| xl | 32px | Existing larger gaps |
| 2xl | 48px | Existing section-scale spacing |
| 3xl | 64px | Existing page-scale spacing |

Exceptions: keep every existing selector's actual spacing, breakpoint, section padding, card gap, and timeline spacing exactly as implemented. The reference scale is not permission to normalize/refactor the live layout; introduce no spacing changes for this phase.

## Typography

Use the existing Poppins type system and selector rules. These four reference roles identify the current scale; they are not a new scale or a request to replace other existing selector-specific sizes.

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px (17px at ≥1024px) | 400 | 1.65 |
| Supporting copy | 14px (`0.875rem`) | 400 | Existing selector value (typically 1.75) |
| Section heading | `clamp(28px, 4vw, 40px)` | 700 | 1.15 |
| Landing display | `clamp(35.2px, 7vw, 68px)` | 700 | 1.08 |

Preserve all other existing role sizes, weights, letter spacing, and responsive clamps exactly as defined by the live selectors; do not add font overrides or force content into a new scale. Long role labels wrap using the existing text wrapping and `.timeline__meta` flex-wrap behavior; date badges remain unwrapped as currently styled.

## Color

Preserve the live CSS variables and their current placement; the older README palette is historical and must not override current tokens.

| Role | Value | Usage |
|------|-------|-------|
| Dominant (about 60%) | `--bg: hsl(0, 0%, 100%)`, with `--bg-subtle: hsl(198, 30%, 96%)` | Existing light page surface, About cards, and supporting surfaces |
| Secondary (about 30%) | `--bg-dark: hsl(198, 60%, 11%)`; `--bg-dark-card: hsl(198, 50%, 17%)` | Existing landing/contact/footer bands and dark form fields |
| Primary accent (about 10%) | `--accent: hsl(28, 93%, 52%)`; `--accent-dark: hsl(28, 89%, 42%)` | Existing primary CTA, active navigation treatment, timeline markers/date badge, focus treatment, and small section labels |
| Supporting brand accent | `--teal: hsl(198, 75%, 55%)`; `--teal-mid: hsl(198, 70%, 32%)` | Existing paired gradients, decorative highlights, and skill icons only; not a new semantic/action color |
| Destructive | None | No destructive actions in scope |

Accent reservation: keep orange limited to the existing emphasized elements above; keep teal in its existing supporting/decorative roles. Do not recolor surfaces or apply accents to every interactive element.

## Copywriting Contract

| Element | Copy |
|---------|------|
| Primary CTA | `Contact me` — preserve existing anchor label, target, and behavior |
| Secondary existing CTA | `Download CV` — preserve existing label, destination, and behavior |
| Form submit | `Send` — intentionally preserve the existing label and behavior; the checker’s copywriting flag remains non-blocking and is not part of this career-content update |
| Empty state heading | Not applicable: the profile, skills, timeline, and galleries are authored static content; do not add an empty-state section or replace verified content with a placeholder |
| Empty state body | Not applicable to the static profile/collections; the existing contact form remains initially blank with its current field labels/placeholders and native required-field validation |
| Error state | Name, Email, and Message are `required`; Email uses `type="email"`; Subject is optional. If a required field is empty or Email is invalid, browser-native constraint validation blocks the POST and points out the invalid field. The visitor corrects it and can submit again. After valid submission, the normal POST to `https://api.web3forms.com/submit` leaves response handling to Web3Forms. The static page has no page-authored JavaScript error/retry UI and specifies no server-error message or recovery UI; do not infer an external error message or page. Preserve this form behavior exactly: no contact-form changes or new form UI are in this career-content phase. |
| Destructive confirmation | None — this phase introduces no destructive actions |

## Layout and Interaction Preservation

- Preserve the current section sequence, single-page structure, content containers, cards, timeline, and existing portrait/graphics/video/web portfolio assets.
- Keep existing responsive breakpoints and layout behavior: mobile navigation toggle below the current desktop breakpoint; current 599px and 1024px layout transitions; current gallery grid/carousel behavior and mobile indicator/desktop arrow controls.
- Preserve existing anchor navigation, active-section highlighting, scroll reveal, navigation scroll shadow, carousel controls, lazy media loading, contact links, CV link, and contact form markup and behavior, including browser-native validation and its normal POST to Web3Forms.
- Do not introduce new page sections, routes, modal states, filtering, animation, controls, form behavior, or form UI. This career-content phase makes no contact form changes. The approved role summaries are supporting text inside existing timeline rows; let them wrap naturally using current responsive rules without changing layout geometry.
- No experience item is removed because its date overlaps another role; keep all ten entries.

## UI Considerations

> State coverage for existing static surfaces only. “Backstop” means the implementation should be checked against the existing visual/interaction behavior; it does not authorize a redesign or new state UI.

Applicable state considerations resolved: 11 covered, 23 backstop, 0 unresolved.

| Category | Element(s) | Status | Resolution / Reason |
|----------|------------|--------|---------------------|
| empty | Experience timeline, Skills cards, portfolio galleries, contact form | ✅ covered | Keep all ten approved timeline entries, five skill categories, and current gallery assets present; do not add collection empty-state copy/placeholders. The form keeps its current blank initial fields and labels/placeholders. |
| loading | Timeline, skills, portfolio media, contact form, navigation | 🧪 backstop | These are authored/static surfaces except existing lazy/embedded media and form submission; preserve current behavior and verify no new loading UI or behavior is introduced. |
| error | Timeline, skills, portfolio media, contact form, navigation | 🧪 backstop | Preserve current static rendering and browser/embedded-media behavior. For the contact form, native validation blocks POST for empty required fields or invalid Email, identifies the field, and allows correction and resubmission; after valid POST, Web3Forms owns the response. The page defines no server-error copy or recovery UI. Do not add form UI or imply an external error message/page. |
| populated | Experience timeline, Skills cards, portfolio galleries | ✅ covered | Render all ten timeline entries, five skill categories, and existing galleries in their current components and styling. |
| partial | Timeline, skills, galleries, contact form | ✅ covered | Timeline entries contain confirmed labels/organizations and dates, plus only the role summaries explicitly listed in this contract; galleries retain their authored assets; existing required form controls keep native incomplete-field validation. Do not fill gaps with guessed content. |
| overflow | Profile copy, navigation, timeline, skills, galleries | 🧪 backstop | Keep existing responsive grid and wrapping rules; verify no horizontal page overflow at current mobile/tablet/desktop breakpoints. |
| zero-one-many | Experience timeline, Skills cards, portfolio galleries | 🧪 backstop | Preserve the current collection/grid layout; verify that the populated source set (10 entries, 5 skill categories, existing gallery assets) remains readable without grouping concurrent roles. |
| long-text | Navigation labels, role titles and summaries, about summary, skill labels, form fields | 🧪 backstop | Allow natural wrapping through existing `overflow-wrap` and timeline flex-wrap rules; preserve no-wrap date badges and verify at the existing narrow viewport layout. |

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| None (no shadcn initialization) | None | Not applicable — no registry components are used |

## Checker Sign-Off

- [x] Dimension 1 Copywriting: FLAG — latest checker result; the existing `Send` form CTA is intentionally unchanged and documented. This non-blocking flag does not prevent approval.
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved (2026-10-24) — role summaries now meet the approved CV-supported copy decision; retain the single non-blocking `Send` CTA flag as intentionally out of scope.

**Revision note:** Added per-entry CV filename/section evidence and clarified the implemented native-validation and Web3Forms boundary without changing the approved visual, color, typography, spacing, registry, or CTA decisions. This document revision is not a new checker run; the recorded checker findings above remain the prior approved results.

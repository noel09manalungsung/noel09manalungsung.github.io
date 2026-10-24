# Phase 1: Integrated Portfolio Profile & Experience - Pattern Map

**Mapped:** 2026-10-24  
**Files analyzed:** 1  
**Analogs found:** 1 / 1

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `index.html` | component (static page/document) | request-response (static HTML rendered in the browser; no application data flow) | Existing page sections in `index.html` | exact structural match |

The only expected code change is content in the existing document title, landing role/supporting headline, About summary, Skills cards, and Experience timeline. Preserve the existing section locations and markup/CSS class structure. Do not change stylesheets, navigation, galleries, scripts, form markup, or behavior. The meta description is not named in the approved content delta; do not expand scope to it.

## Pattern Assignments

### `index.html` (component, static request-response page)

**Analog:** `index.html` itself — its existing sections are the closest and direct pattern to extend. No separate component, template, API, model, authentication, or error-handling layer exists or is needed for this content-only update.

#### Document title and landing headline

**Existing pattern** (`index.html`, lines 8, 39–46):

```html
<title>Noel Manalungsung | Digital Marketing Executive & Designer</title>
...
<section class="section landing-page" id="landing-section">
  <div class="landing-page__left" data-reveal>
    <h1 class="landing-page__h1">
      Hi there! My name is <span>Noel</span>.
    </h1>
    <h2 class="landing-page__h2">Digital Marketing Executive · Front-end Developer · Graphic Designer · UI/UX</h2>
    <div class="contact-links flex-group">
      <a href="#contact-section" class="btn">Contact me</a>
```

Keep the existing title and `h2.landing-page__h2` positions/classes. The UI contract's replacement text is:

- Title: `Noel Manalungsung | Technology & Growth`
- Role headline: `Technology & Growth Professional`
- Supporting line: `AI automation & integrations · Marketing operations · Software development`

Keep the name `h1`, contact CTA, social links, and landing layout unchanged.

#### About summary

**Existing pattern** (`index.html`, lines 96–124):

```html
<section class="section about-me" id="about-section">
  <div class="section-header" data-reveal>
    <p class="section-header__eyebrow">Get to know me</p>
    <h2 class="section__title">About me</h2>
  </div>
  <div class="about-me__content-container" data-reveal>
    ...
    <div class="about-me__left">
      <h3 class="about-me__h3">Something about me</h3>
      <p>
        [existing summary paragraphs]
      </p>
    </div>
    <div class="about-me__right">
      <h3 class="about-me__h3">List of things about me</h3>
      <ul class="about-me__ul">
        <li><b>Current Role:</b> ...</li>
      </ul>
      <a href="[existing CV destination]" class="btn download-cv">Download CV</a>
    </div>
```

Replace the summary in the existing left `<p>` with the exact UI-SPEC-approved copy (do not add claims or a new section):

> I work across AI automation and integrations, marketing operations and data, technical support and client-facing solutions, software development, and creative content. My experience spans employment and independent work across technology, marketing, and creative disciplines.

Keep the existing right-hand list structure and CV destination. Its current-role and first-job bullets include older role wording and location/customer references; do not assume that content is accurate or must be kept verbatim. Review any changed bullet against the context's source-accuracy constraints, while preserving unrelated personal details and the CV link.

#### Skills cards

**Existing pattern** (`index.html`, lines 130–205):

```html
<section class="section skills" id="skills-section">
  <div class="section-header" data-reveal>
    <p class="section-header__eyebrow">What I do</p>
    <h2 class="section__title">Skills</h2>
  </div>
  <div class="skill__container" data-reveal-stagger>
    <div class="skill-card">
      <div class="skill-card-background flex-group">
        <img src="./images/FRONT-END-PROGRAMMING-ICON.png" alt="" loading="lazy" />
      </div>
      <h3>Front-end Web Developer</h3>
      <p>[existing concise card description]</p>
    </div>
```

Retain the Skills section, `.skill__container`, and `.skill-card` pattern and existing grid styling. The UI spec calls for these five concise labels, in this category order:

1. `AI Automation & Integrations`
2. `Marketing Operations & Data`
3. `Technical Support & Client-Facing Solutions`
4. `Software & Front-End Development`
5. `Creative Content & Design`

The existing page has seven cards; update its skills content to the five approved categories without adding a section or changing CSS geometry. Do not invent new tools, proficiency claims, or achievements. Any supporting card copy should remain only if approved/source-backed; category labels are the explicit copy contract. Reuse the existing card wrapper and icon/image treatment rather than introducing new dependencies or visual patterns.

#### Experience timeline rows

**Existing pattern** (`index.html`, lines 208–245; repeated per entry):

```html
<section class="section experience" id="experience-section">
  <div class="section-header" data-reveal>
    <p class="section-header__eyebrow">Career journey</p>
    <h2 class="section__title">Experience</h2>
  </div>
  <div class="timeline" data-reveal>
    <div class="timeline__item">
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <div class="timeline__meta">
          <h3 class="timeline__title">Digital Marketing Executive</h3>
          <span class="timeline__date">Nov 2025 – Present</span>
        </div>
        <p class="timeline__company">Joseph Engineering Services · Dubai, UAE</p>
        <p class="timeline__desc">[existing role description]</p>
      </div>
    </div>
```

Extend this row pattern to one independent `.timeline__item` per role. Retain `.timeline__dot`, `.timeline__content`, `.timeline__meta`, title/date ordering, company paragraph, and optional `.timeline__desc`. Use the existing em-dash-spaced date style (`Nov 2025 – Present`); the UI-SPEC's source dates use en dashes as ranges. For entries without a confirmed summary, omit the description paragraph rather than inserting filler. Sort newest start date first, keeping both Sitel and Sutherland as separate, visibly overlapping entries. Preserve organization/title/date truth without inferring missing titles, locations, or duties.

Approved timeline data and concise summaries (the UI-SPEC is authoritative for these; do not copy the legacy unsupported role descriptions):

| Entry label / organization | Dates | Approved summary |
|----------------------------|-------|------------------|
| Digital Marketing Executive / Data Manager — Joseph Engineering Services | Nov 2025–Present | Leads digital marketing and data management, including AI integration and automated research workflows. |
| Freelance Software Engineering / AI Integration / Automation | Mar 2023–Present | Scopes, builds, and delivers AI integrations, automation, and websites from requirements through handover. |
| Self-employed Product Ownership | Mar 2023–Present | Designs e-commerce products and manages listings, SEO, promotion, and customer service. |
| Exacot | Mar 2023–Mar 2025 | Resolves hardware, software, network, and account-security issues by phone, chat, and email; documents recurring solutions. |
| FCC Supermarket | Mar 2022–Feb 2023 | Monitors inventory movements and maintains the inventory database with Excel checks and reports. |
| Majorel / AppleCare | Feb 2021–Mar 2022 | Handles Apple-account inquiries and troubleshoots devices, including escalated iOS/macOS issues. |
| Sitel Group | Nov 2019–Jan 2021 | Uses consultative needs discovery and solution matching; do not name an unconfirmed product or customer. |
| Sutherland | Oct 2019–Sep 2020 | Provides front-line IT support and client relations, resolving issues and escalations. |
| Manager / Owner — 4N Internet Café and Printing Services | Sep 2015–Jan 2020 | Manages daily operations, IT setup and maintenance, printing, and customer service. |
| Freelance Content Creation | Sep 2015–Present | Creates graphics and logos, edits images and video, and produces social content. |

The UI-SPEC identifies CV filename/section evidence for every summary. Omit all bracketed `[confirm]` details, including unconfirmed tools, metrics, outcomes, customers, locations, and case specifics. In particular, do not add FCC's unconfirmed error-reduction percentage.

**Title-source reconciliation:** The UI-SPEC timeline table was updated to match `01-CONTEXT.md` D-04 and the LinkedIn screenshots. Use the explicit confirmed titles and organizations listed there for all ten entries; do not infer additional labels or omit a confirmed title.

## Shared Patterns

### Existing section structure and styling hooks
**Source:** `index.html` sections above; associated layout selectors are in `style.css` (`.about-me__*`, `.skill__container`, `.skill-card`, `.timeline__*`).  
**Apply to:** All profile and experience content updates.

- Keep existing semantic section IDs and heading hierarchy.
- Preserve CSS class names and structural wrappers so the existing responsive static page and styling continue to apply.
- Do not edit CSS to accommodate copy; long timeline titles already use `.timeline__meta` flex wrapping and date badges remain unwrapped (`style.css`, lines 563–590).

### Static content and preservation boundary
**Source:** `index.html` (single-page static markup); phase decisions D-08 through D-10 and `01-UI-SPEC.md`.  
**Apply to:** The entire change.

- No imports, auth/guards, runtime data fetch, validation, or error handling apply to these static content sections.
- Keep navigation, portrait, portfolio galleries, contact/social links, CV destination, scripts, and form behavior intact.
- The page includes separate external behavior scripts/stylesheets; this scope is content-only and does not add dependencies.

## No Analog Found

None. The existing page contains direct same-role markup patterns for the title/headline, About content, skill cards, and timeline rows.

## Metadata

**Analog search scope:** Root static-page markup (`index.html`), relevant visual selectors (`style.css`), approved phase materials (`01-CONTEXT.md`, `01-UI-SPEC.md`, `ROADMAP.md`, `REQUIREMENTS.md`, `STATE.md`, `PROJECT.md`).  
**Files scanned:** 1 primary implementation file; stylesheet reviewed for preservation constraints.  
**Pattern extraction date:** 2026-10-24

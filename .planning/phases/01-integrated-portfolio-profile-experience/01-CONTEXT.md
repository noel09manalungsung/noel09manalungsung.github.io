# Phase 1: Integrated Portfolio Profile & Experience - Context

**Gathered:** 2026-10-24
**Status:** Ready for planning
**Source:** PRD Express Path (.planning/REQUIREMENTS.md)

<domain>
## Phase Boundary

Update the existing single-page portfolio's professional positioning, About summary, skills, and Experience timeline using the three supplied CVs and LinkedIn screenshots. Present all ten verified experiences with source-supported summaries where available. Preserve the site's existing design, layout, navigation, portfolio galleries, contact behavior, and responsive presentation.

</domain>

<decisions>
## Implementation Decisions

### Integrated Profile
- **D-01:** Position Noel as an integrated technology-and-growth professional, not only as a digital marketer, developer, designer, or support specialist.
- **D-02:** Update the document title, meta description, landing headline/supporting line, and About summary in the existing page locations only.
- **D-03:** Retain five concise skill categories representing AI automation/integrations, marketing operations/data, technical support/client-facing solutions, software/front-end development, and creative content/design.

### Verified Experience
- **D-04:** Use screenshot-confirmed role names and dates for all ten entries: Digital Marketing Executive / Data Manager — Joseph Engineering Services (Nov 2025–Present); Freelance Software Engineer, AI Integration, and Automation Specialist (Mar 2023–Present); Product Owner / self-employed (Mar 2023–Present); Information Technology Support Specialist — Exacot (Mar 2023–Mar 2025); Data Manager — FCC Supermarket (Mar 2022–Feb 2023); AppleCare Advisor — Majorel (Feb 2021–Mar 2022); Sales Executive — Sitel Group (Nov 2019–Jan 2021); IT Support / Client Relations Specialist — Sutherland (Oct 2019–Sep 2020); Manager / Owner — 4N Internet Café and Printing Services (Sep 2015–Jan 2020); and Freelance Content Creator (Sep 2015–Present).
- **D-05:** Keep each experience distinct in the existing timeline. Present Sitel and Sutherland as overlapping/concurrent roles; do not reconcile or alter the confirmed dates.
- **D-06:** Add concise summaries only where duties are supported by the source CVs. Follow the source map and exact summary guidance in `01-UI-SPEC.md`; entries without confirmed duties show only role, organization, and dates.
- **D-07:** Do not publish bracketed `[confirm]` placeholders or unverified tools, metrics, certifications, customer names, locations, or outcomes. Do not infer extra claims from titles or dates.

### Preservation and Verification
- **D-08:** Keep the existing visual design, component structure, CSS geometry, section locations, and responsive behavior. Do not redesign or add a section.
- **D-09:** Preserve navigation, portrait, graphics/video/web portfolio assets and links, contact/social links, CV destination, carousel/reveal behavior, form submission endpoint, native validation, and existing `Send` label. Do not add form UI or change form behavior.
- **D-10:** Verify the updated text and all ten roles against the CV and screenshot sources, then check the existing static page for valid markup and responsive overflow/layout regressions.
- **D-11:** Replace the existing meta description's unconfirmed UI/UX title and Dubai location claims with the source-supported integrated profile summary. The user explicitly approved this correction after independent verification identified the unsupported metadata.

### the agent's Discretion
- Choose concise, natural wording that fits existing components without changing their structure or style.
- Use existing semantic HTML patterns and lightweight repository-appropriate validation; add no dependencies.
- Keep existing role descriptions only when they match the source-backed summary decisions above; otherwise replace or remove unsupported copy.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project and Requirements
- `.planning/PROJECT.md` — project value, approved scope, source rules, and constraints
- `.planning/REQUIREMENTS.md` — nine approved, testable v1 requirements and traceability
- `.planning/ROADMAP.md` — Phase 1 goal, boundaries, and success criteria
- `.planning/STATE.md` — current project state and recorded decisions

### UI and Content Contract
- `.planning/phases/01-integrated-portfolio-profile-experience/01-UI-SPEC.md` — exact profile/skill/experience copy, source citations for role summaries, preservation rules, form behavior, and responsive checks

### Existing Site
- `index.html` — live portfolio content, section structure, form, and existing page behavior
- `style.css` — current visual styles and responsive breakpoints
- `carousel-style.css` — existing portfolio carousel styles
- `nav.js` — existing navigation behavior
- `carousel.js` — existing gallery behavior
- `animate.js` — existing reveal behavior

### Source Materials
- `/Users/jesmarketing/Documents/Noel Manalungsung — CV (AI Automation & Solutions).docx` — confirmed AI, support, data, sales, freelance, creative, and business experience details; per-role section citations are in `01-UI-SPEC.md`
- `/Users/jesmarketing/Documents/Noel Manalungsung — CV (Growth & Marketing Operations).docx` — confirmed marketing, data, support, sales, e-commerce, freelance, and creative experience details; per-role section citations are in `01-UI-SPEC.md`
- `/Users/jesmarketing/Documents/Noel Manalungsung — CV (Solutions Consultant & Technical Account Management).docx` — confirmed technical support, client relations, consultative sales, freelance, creative, and business experience details; per-role section citations are in `01-UI-SPEC.md`
- User-provided LinkedIn screenshots — source of truth for confirmed role titles, organizations, concurrent work, and employment dates

</canonical_refs>

<specifics>
## Specific Ideas

- Keep the existing one-page portfolio and update copy in place rather than adding an Education or new career page.
- Keep newest-start-date ordering while allowing ongoing independent roles to overlap employed roles.
- Use the exact updated headline, About summary, skill labels, timeline labels, dates, and role summaries in `01-UI-SPEC.md`.
- The documents are source materials only; do not copy the CV files into the repository or modify them.

</specifics>

<deferred>
## Deferred Ideas

- Visual redesign, site rebuild, additional page sections, or new backend/application functionality.
- Any metric, tool, certification, project result, visa status, or other detail marked for confirmation.
- Contact-form copy, behavior, or error/recovery changes.

</deferred>

---

*Phase: 01-integrated-portfolio-profile-experience*
*Context gathered: 2026-10-24 via PRD Express Path*

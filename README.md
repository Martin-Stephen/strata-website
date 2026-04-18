# Strata — marketing website

**The rails for private credit.**
New Zealand's credit managers, now open to every investor. Regulated, tokenised, PIE-wrapped.

Live at: (to be set once DNS flips)
GitHub Pages fallback: https://martin-stephen.github.io/strata-website/

---

## What this is

A 6-page static marketing site for Strata — regulated private-credit infrastructure for AU/NZ. Built to match the visual system of the pitch deck ([strata-pitch](https://github.com/Martin-Stephen/strata-pitch)) so the two artefacts read as one company.

Site structure:

| Path | Purpose |
|---|---|
| `/` | Home — dual-audience entry point, three-door role selector |
| `/how-it-works.html` | The product, explained in plain language |
| `/fund-managers.html` | Commercial page — the buyer conversion surface |
| `/regulation.html` | Regulator furniture, legal counsel, compliance |
| `/about.html` | Team, press, contact |
| `/investors.html` | Retail waitlist (Squirrel-warm register) |
| `/legal/*.html` | Privacy, disclaimers, terms |

## Design system

Locked, ported from the pitch deck:

- **Palette** — ink `#0C0A08` · paper `#F5EEE0` · warm gold `#B8923B` / `#E5C470`
- **Type** — Fraunces (display serif) · Geist (body sans) · JetBrains Mono (meta)
- **Motion** — IntersectionObserver scroll reveal (1500ms safety-net) · counter animation on stats · smooth anchor scroll
- **Grain** — subtle radial-gradient overlay on dark surfaces
- **A11y** — WCAG 2.2 AA targets, `prefers-reduced-motion` respected, skip link, 44×44 min interactive targets, visible focus ring

All styling lives in `assets/css/strata.css`. All runtime in `assets/js/strata.js`. No build step. No framework.

## Editing content

Each page is a standalone HTML file. Copy is inline. The nav and footer are duplicated in every page and must be updated in all places if changed. A single source of truth for nav/footer lives at the top of `index.html` — use that as the reference.

## Deployment

GitHub Pages from `main` branch, root directory.

Custom domain (when ready): point CNAME at `martin-stephen.github.io` and commit a `CNAME` file with `strata.co.nz`.

## Analytics

Plausible (cookieless). `data-domain` is `strata.co.nz` — update if the domain changes.

## Forms

Currently stubbed with a placeholder endpoint (`FORMSPARK_ID_HERE`). Wire up:

1. Create a free Formspark form at https://formspark.io
2. Paste the form action into the two `<form>` tags (investor waitlist on `/investors.html`, fund-manager contact form wherever used)
3. Test submission.

Honeypot spam defence is in place.

## TODOs for Martin to fill in

These are flagged inline with `<!-- TBC -->` comments in the HTML:

- [ ] Legal entity name for fine-print (e.g. "Strata is a trading name of Namaco Ltd")
- [ ] Physical address line for the footer
- [ ] Formspark form endpoint(s)
- [ ] Founder portrait photo (optional — `/assets/img/founder.jpg`, landscape 1600×1200)
- [ ] Strata wordmark SVG (optional — `/assets/img/wordmark.svg`)
- [ ] Partner logos as SVG (optional — `/assets/img/partners/*.svg`)
- [ ] Custom OG image (1200×627, `/assets/og/og.png`)

## Regulatory review

Before flipping DNS to a custom domain, send draft URLs to Jeremy Muir at MERW for a 3–5 business-day review of regulatory language (see `strata_website_plan_20260418.md` §7.1).

## Licence

Proprietary. © Strata.

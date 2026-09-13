# Renew Construction Group — renewcg.com.au

Marketing site for a NSW-licensed builder positioned across THREE EQUAL
PILLARS: residential construction & renovations (architectural/high-end
tone, never the word "luxury"), class 2 remedial works (as a registered
building practitioner), and commercial projects. Never mention insurance
sub-limits, project size caps, or reasons the company can or cannot take
on any type of project. Next.js 15 (App Router) + React 19 + Tailwind CSS
v4, deployed on Vercel. The look comes from an approved design handoff
(`design_handoff_renew_landing`) and follows the scroll feel of
rmwatson.com.au.

## Brand

- **Logo (wordmark):** `public/logo.png` — "renew / CONSTRUCTION GROUP" in
  brand blue. In the nav it renders white over hero images via
  `brightness-0 invert` until the bar turns solid.
- **Logo (square mark / favicon):** `src/app/icon.png` — the "rcg" tile,
  taken from the owner's supplied file. NEVER redraw or recreate either
  logo; always use the supplied files.
- **Brand blue** `#1327BE` was sampled from the logo.

## Colour tokens

Defined as Tailwind v4 `@theme` variables in `src/app/globals.css` — always
use the token names (`text-ink`, `bg-tint`, `border-hairline`…), never raw
hex in components.

| Token          | Hex       | Use                                    |
| -------------- | --------- | -------------------------------------- |
| `blue`         | `#1327BE` | Brand accent, buttons, links, icons    |
| `blue-dark`    | `#0E1E96` | Button/link hover                      |
| `ink`          | `#14183C` | Headings, dark hero scrims             |
| `body`         | `#4A5068` | Body text (default on `<body>`)        |
| `muted`        | `#8A91B4` | Eyebrows, labels, footer legal         |
| `hairline`     | `#E9EBF2` | 1px section dividers                   |
| `hairline-2`   | `#DFE2EE` | Dividers on tint backgrounds           |
| `input-line`   | `#D5D9E8` | Form underlines                        |
| `tint`         | `#F4F5FA` | Alternate section background, icon discs |
| `paper`        | `#FDFDFE` | Page background                        |
| `error`        | `#B3261E` | Form validation                        |

## Copy style

- **Never use em dashes (—)** in any user-visible copy, titles, or meta
  descriptions — owner preference. Use commas, colons, semicolons,
  parentheses or separate sentences instead. Middots (·) as separators
  and the → arrow glyph are fine.
- **No cute taglines** — owner preference. Lines like "done properly,
  once" or "for owners who care how things are finished" were explicitly
  rejected as tacky. Copy states facts plainly; long-standing lines such
  as "do the work properly the first time" in the About story are
  owner-approved and stay.
- **Service area** is Sydney, specifically the Eastern Suburbs, North
  Shore and Northern Beaches. Never say "greater Sydney", "NSW-wide",
  Inner West or Sutherland Shire.
- Home title tag starts with "Sydney's Trusted Residential, Remedial &
  Commercial Builders" (owner-specified).

## Typography & design style

- **Instrument Sans** (Google font, weights 400/500/600) via
  `next/font`; exposed as `--font-instrument` / `font-sans`.
- Clean editorial style: generous whitespace, **hairline dividers instead
  of boxes, no drop shadows** (single exception: the nav dropdown panel).
- Headings: `font-medium`, tight tracking (`-0.01em`…`-0.02em`), `text-ink`.
- Eyebrow labels: `text-xs font-semibold tracking-[0.18em] uppercase
  text-muted`.
- Buttons: `rounded-[10px] bg-blue … hover:bg-blue-dark`, 14px semibold.
- Images: square edges (no rounding) on heroes; content images may use
  `rounded-[6px]`/`[12px]` sparingly.
- Icons: thin-line SVG, 24×24 viewBox, 1.5px stroke, `currentColor`, round
  caps (see `src/components/ServiceIcon.tsx`).
- Layout container: `max-w-[1440px]` with `px-6 sm:px-12 lg:px-24`.
  Two-column sections use `lg:grid-cols-[0.55fr_1.45fr]` with a sticky
  left heading (`lg:sticky lg:top-32`).

## Motion

- Lenis smooth scroll + eased anchor links (`SmoothScroll.tsx`).
- Reveal-on-scroll primitives `.rv` / `.rv-line` / `.rv-img` in
  `globals.css`, driven by `Reveal.tsx`; hero text uses `.hero-rise`.
- Everything respects `prefers-reduced-motion`.

## Page pattern

- Home: full-viewport photo hero (`min-h-[100svh]`) with overlaid
  transparent nav that turns into a solid `bg-paper/95` bar on scroll,
  scroll-cue arrow, services list with icons, About, quote form.
- Interior pages (services/about/faq): photo hero band (`min-h-[52–60vh]`,
  `items-end`) with bottom scrim `from-ink/90 via-ink/45 to-ink/30` plus a
  top scrim `from-ink/55` for nav legibility.
- Hero photos: owner-supplied only, processed to ≤2400px wide JPEG q85
  (PIL, `exif_transpose` first) into `public/*-hero.jpg`. Per owner request,
  the /services overview and the facade-upgrades, remedial-repairs,
  cladding-compliance and service-maintenance pages currently use the navy
  placeholder band (no photo) until replacement photos are supplied; stock
  photo sites are unreachable from this environment (network policy).
- SEO keyword landing pages are static routes beside the `[slug]` template
  (`/services/concrete-cancer-repair`, `/services/balcony-repairs-waterproofing`,
  `/services/strata-remedial-builders`) — each carries Service + FAQPage +
  Breadcrumb JSON-LD. They are listed once in the `landingPages` export of
  `src/lib/site.ts`, which drives the `/services` overview page, the footer
  and `sitemap.ts`; new ones only need a route file plus a `landingPages`
  entry.
- `/services` is the overview page (all services + landing pages). Interior
  heroes show a visible breadcrumb trail (`src/components/Breadcrumbs.tsx`)
  in place of the old eyebrow label, matching each page's BreadcrumbList
  JSON-LD; the "Services" crumb points to `/services`.

## Business facts (never invent others)

Single source of truth: `src/lib/site.ts` (`site`, `services`, `faqs`).
NSW Builders Licence 490706C · ABN 44 693 358 888 · 0422 453 966 ·
Joshua@renewcg.com.au · founder Joshua Mott (2025, 15+ yrs experience) ·
Greater Sydney. **Never fabricate** testimonials, projects, history or
credentials, and never copy RM Watson's company-specific claims.

## Conventions

- SEO: per-page metadata + JSON-LD (`LocalBusiness` in `layout.tsx`,
  `Service`+breadcrumbs on service pages, `FAQPage` on /faq); keep
  `sitemap.ts` in sync when adding pages. Canonical domain
  `https://renewcg.com.au`.
- Quote form posts to `/api/quote` (Resend; needs `RESEND_API_KEY`,
  optional `QUOTE_FROM_EMAIL` / `QUOTE_TO_EMAIL`), falls back to mailto.
- Verify changes with `npm run build`, then screenshot via Playwright
  (`/opt/node22/lib/node_modules/playwright`, executablePath
  `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`) — spawn
  `next start` as a non-detached child inside the Node script (foreground
  `sleep`/detached servers get killed in this environment).

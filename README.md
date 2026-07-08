# Renew Construction Group — Website

Single-page marketing site for **Renew Construction Group**, a NSW-licensed
remedial construction company serving greater Sydney. Built from the approved
design handoff (`design_handoff_renew_landing`) with Next.js (App Router) +
Tailwind CSS, deployed on Vercel.

## Scroll experience

- **Lenis** smooth scrolling with eased anchor navigation
- Scroll-triggered reveals: headings rise, hairlines draw in, imagery unmasks
- Gentle parallax on the hero image
- Everything respects `prefers-reduced-motion`

## Quote form

The form requires a name plus a phone number or email, includes a honeypot
for spam, and posts to `/api/quote`, which delivers to **Joshua@renewcg.com.au**
via [Resend](https://resend.com).

**To activate email delivery** (Vercel → Project → Settings → Environment
Variables):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Required — from resend.com (free tier is fine) |
| `QUOTE_FROM_EMAIL` | Optional verified sender, e.g. `Renew website <quotes@renewcg.com.au>` |

Until the key is set, the form gracefully falls back to opening the visitor's
email app with the enquiry pre-filled — nothing breaks.

## Placeholders still to supply

- **Hero photo** — the wide 430px panel is a styled placeholder; drop a real
  project photo into `public/` and swap it into the `Parallax` block in
  `src/app/page.tsx` (use `next/image`).
- **Production domain** — update `site.url` in `src/lib/site.ts` after
  connecting the domain on Vercel.

Business details (phone, email, licence 490706C, ABN) live in
`src/lib/site.ts`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Deploying to Vercel

Push to the production branch — Vercel auto-detects Next.js (also pinned in
`vercel.json`) and redeploys. Add the custom domain under
**Project → Settings → Domains**.

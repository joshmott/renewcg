# Renew Construction Group — Website

Marketing website for **Renew Construction Group**, a NSW-licensed residential
& commercial builder specialising in Class 2 remedial building works.

Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS](https://tailwindcss.com), designed around the RCG brand
palette (royal blue & cream) with the logo recreated in code
(`src/components/Logo.tsx`).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, services overview, Class 2 remedial feature, process, projects, testimonials |
| `/services` | All services overview |
| `/services/[slug]` | Detail page per service (5 services) |
| `/projects` | Project showcase (placeholder content) |
| `/about` | Company story, values, credentials |
| `/contact` | Quote request form + contact details |

## Before you launch — replace the placeholders

All business details live in **`src/lib/site.ts`** and are marked
`[PLACEHOLDER]`:

- Phone, mobile & email
- NSW contractor licence number & ABN
- Production domain (`site.url`) — used for SEO metadata and the sitemap

Also placeholder:

- **Projects** — `src/lib/projects.ts` contains representative sample
  projects. Replace with real ones; drop photos into `public/projects/` and
  set each project's `image` field to swap the illustrated placeholders for
  photography.
- **Testimonials** — sample quotes in `src/app/page.tsx` (marked in code).

## Contact form

The form is zero-backend: submitting opens the visitor's email app with a
pre-filled enquiry (so it works on Vercel with no setup). To upgrade to
server-side delivery, wire `src/components/ContactForm.tsx` to a form
service (Formspree, Basin) or a Next.js route handler with an email API
(e.g. Resend).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this there).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel
   auto-detects Next.js; no configuration needed.
3. Click **Deploy**. Every push to the production branch redeploys
   automatically.
4. Add your custom domain under **Project → Settings → Domains**, then update
   `site.url` in `src/lib/site.ts` to match.

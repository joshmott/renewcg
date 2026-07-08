/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — Renew Construction Group
 *
 *  All business details live here so they can be updated in one place.
 *  Every value marked [PLACEHOLDER] should be replaced with the real detail
 *  before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Renew Construction Group",
  shortName: "Renew",
  abbreviation: "rcg",
  tagline: "Remedial building specialists. Licensed across NSW.",
  description:
    "Renew Construction Group is a NSW-licensed residential and commercial builder specialising in Class 2 remedial building works, renovations, extensions, new builds and commercial fit outs.",

  // [PLACEHOLDER] Replace with the production domain once connected on Vercel.
  url: "https://renewconstructiongroup.com.au",

  contact: {
    phone: "(02) 0000 0000", // [PLACEHOLDER]
    phoneHref: "tel:+61200000000", // [PLACEHOLDER]
    mobile: "0400 000 000", // [PLACEHOLDER]
    mobileHref: "tel:+61400000000", // [PLACEHOLDER]
    email: "hello@renewconstructiongroup.com.au", // [PLACEHOLDER]
    address: "Sydney, NSW", // [PLACEHOLDER]
    hours: "Mon – Fri, 7:00am – 5:00pm",
  },

  credentials: {
    licence: "NSW Contractor Licence No. 000000C", // [PLACEHOLDER]
    abn: "ABN 00 000 000 000", // [PLACEHOLDER]
    insurance: "Fully insured — public liability & home building compensation",
    serviceArea: "Sydney metro & greater NSW",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

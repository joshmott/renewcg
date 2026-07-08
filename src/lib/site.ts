/**
 * SITE CONFIG — Renew Construction Group
 * Business details from the approved design handoff (design_handoff_renew_landing).
 */

export const site = {
  name: "Renew Construction Group",
  tagline: "Remedial Construction, Sydney",
  description:
    "Renew Construction Group diagnoses and repairs the root cause of building defects for strata, commercial and residential properties across greater Sydney — licensed, insured, and accountable from inspection to sign-off.",

  // [PLACEHOLDER] Replace with the production domain once connected on Vercel.
  url: "https://renewconstructiongroup.com.au",

  contact: {
    phone: "0422 453 966",
    phoneHref: "tel:+61422453966",
    email: "Joshua@renewcg.com.au",
    serviceArea: "Greater Sydney",
  },

  credentials: {
    licence: "NSW Licence 490706C",
    licenceLong: "NSW Builders Licence 490706C",
    registration: "Registered Building Practitioner",
    insurance: "Public Liability & Workers Comp",
    abn: "ABN 44 693 358 888",
  },
} as const;

export type Service = { title: string; description: string };

export const services: Service[] = [
  {
    title: "Concrete cancer repair",
    description:
      "Spalling and reinforcement corrosion diagnosed and rectified before it threatens structural integrity.",
  },
  {
    title: "Waterproofing",
    description:
      "Membrane systems and leak rectification for roofs, balconies, planter boxes and wet areas.",
  },
  {
    title: "Facade remediation",
    description:
      "Render, cladding, brickwork and external finishes restored to compliant, watertight condition.",
  },
  {
    title: "Structural repairs",
    description:
      "Engineer-backed repairs to slabs, beams, columns and load-bearing elements.",
  },
  {
    title: "Carpentry works",
    description:
      "Structural and detailed carpentry — framing, decks, doors, trims and finishes.",
  },
  {
    title: "Window & glass installation",
    description:
      "Supply and installation of compliant window and glazing systems.",
  },
];

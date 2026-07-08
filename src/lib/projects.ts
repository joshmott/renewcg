/**
 * [PLACEHOLDER] Sample projects — replace with real completed projects and
 * photography. Drop photos into /public/projects and set the `image` field
 * on each project (see ProjectCard for how images are rendered).
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  scope: string[];
  /** Optional path to a photo in /public. Falls back to a graphic placeholder. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "harbourside-facade-remediation",
    title: "Harbourside Apartments Façade Remediation",
    category: "Class 2 Remedial Works",
    location: "Sydney, NSW",
    summary:
      "Full façade rectification of a 48-unit residential building — concrete spalling repair, waterproofing renewal and balustrade replacement, staged around residents in occupation.",
    scope: [
      "Concrete cancer investigation & repair",
      "Façade waterproofing & membrane renewal",
      "Compliant balustrade replacement",
      "Delivered under the DBP Act with declared designs",
    ],
  },
  {
    slug: "podium-waterproofing-rectification",
    title: "Podium & Planter Waterproofing Rectification",
    category: "Class 2 Remedial Works",
    location: "Wollongong, NSW",
    summary:
      "Diagnosis and rectification of chronic water ingress through a podium slab and planter boxes above basement parking, ending years of failed patch repairs.",
    scope: [
      "Water ingress diagnosis & scope of works",
      "Full podium membrane replacement",
      "Planter box reconstruction & drainage",
      "Basement concrete repair & coatings",
    ],
  },
  {
    slug: "federation-home-extension",
    title: "Federation Home Extension",
    category: "Extensions",
    location: "Inner West, Sydney",
    summary:
      "A rear ground-floor extension and full renovation of a Federation cottage — new open-plan living, kitchen and outdoor room, matched sympathetically to the original home.",
    scope: [
      "Rear extension with raked ceilings",
      "New kitchen & living spaces",
      "Heritage-sensitive façade restoration",
      "Landscaping & outdoor entertaining area",
    ],
  },
  {
    slug: "northern-beaches-new-build",
    title: "Coastal New Build",
    category: "New Builds",
    location: "Northern Beaches, Sydney",
    summary:
      "A four-bedroom custom home on a sloping coastal block — split-level design, off-form concrete elements and durable detailing for the marine environment.",
    scope: [
      "Split-level custom home",
      "Site cut, retaining & civil works",
      "Off-form concrete & timber detailing",
      "Full project management to handover",
    ],
  },
  {
    slug: "parramatta-office-fit-out",
    title: "Commercial Office Fit Out",
    category: "Commercial Fit Outs",
    location: "Parramatta, NSW",
    summary:
      "Turnkey fit out of a 900m² office floor — workstations for 80 staff, meeting suites, kitchen breakout and end-of-trip upgrade, delivered over a six-week program.",
    scope: [
      "Full floor strip-out & fit out",
      "Partitioning, ceilings & custom joinery",
      "Mechanical, electrical & data coordination",
      "Delivered while adjacent floors traded",
    ],
  },
  {
    slug: "sutherland-shire-renovation",
    title: "Whole-Home Renovation",
    category: "Renovations",
    location: "Sutherland Shire, Sydney",
    summary:
      "Complete internal renovation of a 1970s brick home — structural wall removals, two new bathrooms, kitchen and full re-wire and re-plumb, completed in fourteen weeks.",
    scope: [
      "Structural alterations & steelwork",
      "Kitchen & two bathroom renovations",
      "Full electrical & plumbing renewal",
      "New flooring, joinery & finishes",
    ],
  },
];

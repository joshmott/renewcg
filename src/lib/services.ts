export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  flagship?: boolean;
  intro: string;
  description: string[];
  capabilities: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    slug: "class-2-remedial-works",
    title: "Class 2 Remedial Building Works",
    shortTitle: "Class 2 Remedial Works",
    flagship: true,
    intro:
      "Our core specialty — diagnosing and rectifying building defects in Class 2 residential apartment buildings, delivered in line with the NSW Design and Building Practitioners Act.",
    description: [
      "Defects in apartment buildings rarely stay small. Water finds its way in, concrete keeps spalling, and every year of deferral adds cost and risk for the owners corporation. We specialise in taking Class 2 buildings from defect report to durable, compliant rectification.",
      "We work directly with strata managers, owners corporations and building consultants, and we understand what the work demands: regulated designs from registered design practitioners, transparent staging around residents who are still living in the building, and documentation that stands up to scrutiny at completion.",
      "Every remedial project is delivered under the Design and Building Practitioners Act 2020 (NSW), with declared designs, verifiable workmanship and a clear line of accountability from first inspection to final sign-off.",
    ],
    capabilities: [
      "Façade remediation & recladding",
      "Concrete spalling (concrete cancer) repair",
      "Waterproofing rectification — roofs, planters, podiums & wet areas",
      "Balcony & balustrade rectification",
      "Structural crack injection & repair",
      "Fire safety & compliance upgrades",
      "Defect rectification from expert reports",
      "Common property repairs for strata schemes",
    ],
    idealFor:
      "Owners corporations, strata managers and building consultants managing defects in residential apartment buildings.",
  },
  {
    slug: "residential-renovations",
    title: "Residential Renovations",
    shortTitle: "Renovations",
    intro:
      "Whole-home transformations, kitchens and bathrooms — renovations that respect your home, your neighbours and your timeline.",
    description: [
      "A renovation should feel like a fresh start, not a year of disruption. We plan the sequence of works up front, keep the site clean and secure, and communicate in plain language every week so you always know what's happening and what's next.",
      "From structural reconfigurations that open up living spaces to precision kitchen and bathroom fit-offs, our trades are held to the same standard we bring to our remedial work — because a beautiful finish only counts if what's behind it is built right.",
    ],
    capabilities: [
      "Whole-home renovations",
      "Kitchen & bathroom renovations",
      "Structural alterations & wall removals",
      "Heritage & period home restorations",
      "Re-roofing, cladding & external upgrades",
      "Waterproofing & tiling",
    ],
    idealFor:
      "Homeowners upgrading, reconfiguring or restoring an existing house or apartment.",
  },
  {
    slug: "home-extensions",
    title: "Home Extensions & Additions",
    shortTitle: "Extensions",
    intro:
      "Ground-floor extensions, first-floor additions and granny flats — more space without the cost and upheaval of moving.",
    description: [
      "Extending is the art of joining new structure to old without it ever reading as an afterthought. We manage the junction details — footings, framing, roofing, waterproofing — so the finished extension performs and reads as one building.",
      "We coordinate engineers, certifiers and council requirements on your behalf, and we stage the build so your family can keep living at home safely through construction wherever possible.",
    ],
    capabilities: [
      "Ground-floor extensions",
      "First-floor & second-storey additions",
      "Granny flats & secondary dwellings",
      "Garage conversions & studios",
      "Decks, pergolas & outdoor living",
      "Underpinning & structural works",
    ],
    idealFor:
      "Growing families and owners who love their location but need more room.",
  },
  {
    slug: "new-builds",
    title: "New Builds",
    shortTitle: "New Builds",
    intro:
      "Custom homes, knockdown-rebuilds and duplexes — built once, built properly, from slab to handover.",
    description: [
      "A new build is hundreds of decisions made in the right order. We bring a disciplined program, fixed points of accountability and a fanatical attention to the parts you'll never see — structure, waterproofing, flashings — because that's what determines how a home performs in year twenty, not just day one.",
      "Whether you come to us with an architect's drawings or a rough sketch, we'll give you honest feasibility advice, transparent costings and a build schedule we actually keep.",
    ],
    capabilities: [
      "Custom new homes",
      "Knockdown-rebuild projects",
      "Duplexes & dual occupancies",
      "Architect-designed builds",
      "Site cuts, retaining & civil works",
      "Full project management to handover",
    ],
    idealFor:
      "Owners and investors building a new home, duplex or small residential development.",
  },
  {
    slug: "commercial-fit-outs",
    title: "Commercial Fit Outs",
    shortTitle: "Commercial Fit Outs",
    intro:
      "Offices, retail and hospitality spaces delivered fast, compliant and ready to trade.",
    description: [
      "In commercial work the program is the product — every week of delay is rent paid on a space that isn't earning. We build fit outs to tight, realistic schedules with after-hours and staged works where your business needs to keep operating.",
      "From make-good and base-build upgrades to full turnkey fit outs, we handle services coordination, compliance and certification so you get a defect-free space that opens on the date we agreed.",
    ],
    capabilities: [
      "Office fit outs & refurbishments",
      "Retail & hospitality fit outs",
      "Medical & allied health suites",
      "Make-good & end-of-lease works",
      "Partitioning, ceilings & joinery",
      "Services coordination & compliance",
    ],
    idealFor:
      "Business owners, tenants and landlords fitting out or refurbishing commercial space.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

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

export type ServiceCategory = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  /** Short one-liner used in the home-page services list. */
  summary: string;
  /** Hero tagline on the service page. */
  tagline: string;
  /** Overview heading on the service page. */
  overview: string;
  /** Overview paragraphs. */
  intro: string[];
  /** "What's involved" sub-service cards. */
  categories: ServiceCategory[];
};

export const services: Service[] = [
  {
    slug: "facade-upgrades",
    title: "Facade Upgrades",
    summary:
      "New facades, over-cladding and coatings that add value and street appeal.",
    tagline:
      "Structural and design solutions to breathe new life into your asset.",
    overview: "Looking to reinvigorate your property portfolio?",
    intro: [
      "Our bespoke facade upgrade solutions help transform your asset. We look at every project to identify options that not only address the underlying problems, but also add value to the finished product — whether that's a new facade, an upgraded aesthetic, or restored facilities and structural integrity.",
      "A considered facade upgrade reduces your building's ongoing maintenance costs while lifting both its market value and the way it's perceived.",
    ],
    categories: [
      {
        title: "Over Cladding",
        description:
          "Whether a concrete facade is suffering corrosion-related deterioration or simply needs modernising, we can install a new compliant over-cladding system — addressing future safety concerns while enhancing the value of the asset.",
      },
      {
        title: "Balustrade Replacement",
        description:
          "Deteriorating and non-compliant balustrades pose a significant safety and legal hazard. We design and install replacement systems that comply with Australian Standards while reinvigorating the appearance of your asset.",
      },
      {
        title: "Balcony Refurbishment",
        description:
          "From retiling to the rectification of leaks through waterproof membrane upgrades, we identify the root cause of your balcony defects so the repair methodology and materials are robust and fit for purpose.",
      },
      {
        title: "Facade Coatings",
        description:
          "Facade coatings are an economical way to protect your asset against our harsh, salt-rich environment — from architectural coatings to high-build acrylic membrane systems, matched to the requirements of the site.",
      },
      {
        title: "Window & Door Replacement",
        description:
          "Replacing windows and doors is an effective way to increase the value and energy efficiency of your asset. We work with established consultants and manufacturers to design and install the best solution for your building.",
      },
      {
        title: "Render Repairs",
        description:
          "Render can crack or delaminate for a number of reasons. Accurate diagnosis of the cause is essential to a lasting repair, and we offer permanent solutions to unsightly and sometimes unsafe facade issues.",
      },
    ],
  },
  {
    slug: "remedial-repairs",
    title: "Remedial Repairs",
    summary:
      "Diagnosing and repairing structural and aesthetic defects, built to last.",
    tagline: "Responding to the most complicated of repair needs.",
    overview: "Remedial solutions that deliver long-term results.",
    intro: [
      "Renew is a remedial building specialist. Our focus is identifying and solving the structural and aesthetic issues affecting your building or asset.",
      "We specialise in the repair and upgrade of commercial, residential and strata structures. Our solutions are built to last and reduce the need for ongoing maintenance costs.",
      "We work on occupied buildings, collaborating with asset managers, owners corporations and property managers to deliver solutions that impose minimal disruption on occupants — and ensure their absolute safety.",
    ],
    categories: [
      {
        title: "Concrete Repairs",
        description:
          "Cracked, drummy or rust-stained concrete are all symptoms of spalling. We identify the root cause and carry out repairs that address the ongoing safety and structural issues affecting the asset.",
      },
      {
        title: "Magnesite Repairs",
        description:
          "Magnesite-affected slabs can impact every resident in a block, not just one unit. Our process addresses the immediate area and applies corrosion inhibitors to slow the rate of deterioration and reduce ongoing impact.",
      },
      {
        title: "Render Repairs",
        description:
          "Render can crack or delaminate from the substrate for a number of reasons. Accurate diagnosis of the cause of deterioration is essential in ensuring the repair is a permanent one.",
      },
      {
        title: "Waterproofing",
        description:
          "The main cause of water penetration is poor detailing — incorrect flashings, inadequate turn-ups, wrong material selection or band-aid repairs. We diagnose the source, select the right membrane, and install it properly.",
      },
      {
        title: "Balcony Refurbishment",
        description:
          "From retiling to the rectification of leaks through waterproof membrane upgrades, we identify the root cause of balcony defects so the repair is robust and fit for purpose.",
      },
      {
        title: "Structural Strengthening",
        description:
          "From corroding reinforcement to overloaded retaining walls, structures can fail over time. From carbon-fibre strengthening to underpinning and supplementary supports, we design and install a solution to the most challenging issues.",
      },
    ],
  },
  {
    slug: "heritage-restoration",
    title: "Heritage Restoration",
    summary:
      "Sympathetic restoration of stone, brick, render and steel-framed heritage buildings.",
    tagline:
      "Successful heritage restoration is defined by what the eye does not see.",
    overview:
      "The commitment and detail required to restore assets to their former glory.",
    intro: [
      "Heritage structures demand a different kind of care. We understand the commitment and attention to detail required to restore these assets to their former glory without compromising the character and defining elements that make them significant.",
      "Our heritage techniques are designed to last, minimising repeat work on site. Enduring structural and facade integrity — repairs that hold for decades — is how we define success.",
    ],
    categories: [
      {
        title: "Steel Window Repairs & Replacement",
        description:
          "In-situ repair of steel windows is only successful if carried out before corrosion distorts the frame. Where glass has cracked and sashes have jammed, we remove and either repair or replace — choosing the method that offers a long-term solution.",
      },
      {
        title: "Stone Masonry Upgrades",
        description:
          "Our stonemasonry work restores and protects the grand stone buildings that define our cities. Through careful selection and installation of replacement stone and specialist repair techniques, we repair the damage done by the harsh Australian environment.",
      },
      {
        title: "Brick Repairs",
        description:
          "The success of brick repair is measured by what the eye does not see. From brick replacement and crack repair to lintel replacement and brick ties, the secret to a great job is not being able to see any work once it's complete.",
      },
      {
        title: "Render Repairs",
        description:
          "Render can crack or delaminate for a number of reasons. Accurate diagnosis of the cause is essential to a lasting repair of these often unsightly, sometimes unsafe facade issues.",
      },
      {
        title: "Facade Coatings",
        description:
          "Facade coatings are an economical way to protect a heritage asset against our harsh, salt-rich environment — from architectural coatings to high-build acrylic membrane systems suited to the site.",
      },
      {
        title: "Lead Paint Removal",
        description:
          "Widely used until the 1970s, lead paint can have serious health consequences as it deteriorates. We have the specialised equipment and monitoring in place to remove lead-based paints safely, without contaminating the surrounding area.",
      },
    ],
  },
  {
    slug: "cladding-compliance",
    title: "Cladding & Compliance",
    summary:
      "Combustible cladding replacement, fire upgrades and compliance, end to end.",
    tagline:
      "Specialists in the rectification of flammable, non-compliant cladding systems.",
    overview: "Assets that aren't just compliant — they're 100% safe.",
    intro: [
      "One of the most common issues facing buildings today is the widespread use of non-compliant ACP cladding systems. We combine experience across a range of facade solutions with careful methods for working on occupied sites to deliver compliant, high-quality rectification.",
      "We offer a comprehensive, end-to-end approach for combustible cladding replacement — from statutory approvals and full design through to delivery and final certification — so your liability issues and legal responsibilities are satisfied, giving you complete peace of mind in the safety and durability of your asset.",
    ],
    categories: [
      {
        title: "Combustible Cladding Replacement",
        description:
          "Aluminium composite panels with a flammable core pose a significant risk of combustion. Our process ensures all identified ACP cladding is removed, recycled and replaced with a compliant, certified cladding system.",
      },
      {
        title: "Passive Fire Upgrades",
        description:
          "Addressing shortfalls in fire separation usually disrupts finished surfaces. We achieve certifiable fire chambers and then return units to at least their pre-commencement condition — leaving owners with peace of mind and their home restored.",
      },
      {
        title: "Asbestos Removal",
        description:
          "Safely removing asbestos-containing materials requires trained, licensed professionals. Our process ensures identified materials are removed and disposed of in the safest and most efficient manner.",
      },
      {
        title: "Lead Paint Removal",
        description:
          "As it deteriorates, lead paint forms hazardous dust. We have the specialised equipment and monitoring in place to remove lead-based paints safely, without contaminating the surrounding area or damaging the structure.",
      },
      {
        title: "Balustrade Replacement",
        description:
          "Deteriorating and non-compliant balustrades pose a significant safety and legal hazard. We design replacement systems that comply with Australian Standards while reinvigorating the appearance of your asset.",
      },
      {
        title: "Preliminary Investigation",
        description:
          "Unsure whether your cladding is combustible? We offer preliminary laboratory testing to determine the nature of the cladding installed, plus deconstructive investigation to guide the most suitable rectification methodology.",
      },
    ],
  },
  {
    slug: "service-maintenance",
    title: "Service & Maintenance",
    summary:
      "Ongoing inspections, corrosion treatment and make-safe across your asset's life.",
    tagline: "Taking the stress and hassle out of your building maintenance.",
    overview: "Commercial, residential and strata asset maintenance.",
    intro: [
      "Our expertise extends to the ongoing service and maintenance of commercial, residential and strata assets. From annual building inspections to periodic corrosion treatment, we have the capacity and experience to address the repair needs across the full lifetime of your asset.",
    ],
    categories: [
      {
        title: "Asset Make Safe",
        description:
          "Some building issues require immediate attention. We can mobilise an experienced team to make safe dangerous building defects within hours of your request.",
      },
      {
        title: "Corrosion Treatment",
        description:
          "Preparation of corroding steel is as important as the coating itself. Without careful cleaning and decontamination, even quality coatings fail early — our team ensures every stage is completed so the full life cycle of the treatment is achieved.",
      },
      {
        title: "Cathodic Protection",
        description:
          "Correctly designed and monitored, cathodic protection can form part of an effective strategy to extend the life expectancy of your concrete structure. We install and monitor bespoke cathodic protection solutions.",
      },
      {
        title: "Survey & Testing",
        description:
          "Causes of building defects are often difficult to source and even harder to remedy. Preliminary testing and investigative works are an effective way to ensure certainty of project cost and programming.",
      },
      {
        title: "Inspection & Reporting",
        description:
          "Prevention is the best form of cure. Regular building inspections are an effective way to identify and remedy defects in their early stages, before they become costly structural issues.",
      },
      {
        title: "Structural Strengthening",
        description:
          "From corroding reinforcement to overloaded retaining walls, structures deteriorate over time. We design and install bespoke strengthening solutions to avoid the worst-case scenario.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

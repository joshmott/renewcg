/**
 * SITE CONFIG — Renew Construction Group
 * Business details from the approved design handoff (design_handoff_renew_landing).
 */

export const site = {
  name: "Renew Construction Group",
  tagline: "Remedial Construction, Sydney",
  description:
    "Sydney remedial builders — concrete cancer, waterproofing, facade and cladding repairs for strata, commercial and residential buildings. Licensed & insured.",

  // Production domain — matches the business email (@renewcg.com.au).
  // [CONFIRM] Update if the live site uses a different domain.
  url: "https://renewcg.com.au",

  founder: "Joshua Mott",
  foundingYear: "2025",
  hours: "Mon–Fri, 7:00am – 5:00pm", // [CONFIRM] trading hours

  contact: {
    phone: "0422 453 966",
    phoneHref: "tel:+61422453966",
    phoneE164: "+61422453966",
    email: "Joshua@renewcg.com.au",
    serviceArea: "Greater Sydney",
  },

  // Regions used for local-SEO "areaServed" signals.
  areasServed: [
    "Sydney",
    "Greater Sydney",
    "Eastern Suburbs",
    "North Shore",
    "Northern Beaches",
    "Inner West",
    "Sutherland Shire",
    "New South Wales",
  ],

  credentials: {
    licence: "NSW Licence 490706C",
    licenceLong: "NSW Builders Licence 490706C",
    licenceNumber: "490706C",
    registration: "Registered Building Practitioner",
    insurance: "Public Liability & Workers Comp",
    abn: "ABN 44 693 358 888",
    abnNumber: "44 693 358 888",
    buyNswUrl: "https://buy.nsw.gov.au/supplier/profile/12462863",
    abrUrl: "https://abr.business.gov.au/ABN/View?abn=44693358888",
  },
} as const;

/** Common questions — powers the FAQ section and FAQPage structured data. */
export const faqs = [
  {
    question: "What areas of Sydney do you service?",
    answer:
      "We're a Sydney-based builder working right across the greater Sydney metropolitan area and New South Wales — including the Eastern Suburbs, North Shore, Northern Beaches, Inner West and Sutherland Shire.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Renew Construction Group holds NSW Builders Licence 490706C and is a registered building practitioner, backed by public liability and workers compensation insurance. Our ABN is 44 693 358 888.",
  },
  {
    question: "What is concrete cancer and can you repair it?",
    answer:
      "Concrete cancer (concrete spalling) happens when the steel reinforcement inside concrete corrodes and expands, cracking the surrounding concrete. We diagnose the underlying cause and carry out lasting repairs before it threatens the structure — it's one of our core remedial services.",
  },
  {
    question: "Do you work on strata and apartment buildings?",
    answer:
      "Yes. We work extensively with owners corporations, strata managers and commercial property managers on occupied buildings, staging the works to keep disruption to residents and tenants to a minimum.",
  },
  {
    question: "How much does concrete cancer repair cost in Sydney?",
    answer:
      "It depends on how far the corrosion has progressed and how accessible the affected areas are — an early-stage patch repair is a fraction of the cost of rebuilding a structural element. We inspect and diagnose first, then provide a clear itemised quote. As a rule: the earlier spalling is treated, the less it costs.",
  },
  {
    question:
      "Who pays for repairs in a strata building — the owners corporation or the lot owner?",
    answer:
      "As a general rule in NSW, defects in common property — the building structure, external walls, balcony slabs, waterproofing membranes and balustrades — are the owners corporation's responsibility, while finishes inside a lot belong to the owner. It varies with the strata plan and by-laws, so we help scope which is which as part of an inspection.",
  },
  {
    question: "How long do remedial repairs take?",
    answer:
      "Minor repairs can be completed in days. Larger programs — balcony refurbishments across a building, facade repairs over multiple levels, cladding replacement — are staged over weeks or months, planned around residents and tenants. Dangerous defects can be made safe within hours.",
  },
  {
    question: "Do you replace combustible cladding?",
    answer:
      "Yes — end to end. We manage the rectification of non-compliant ACP cladding from statutory approvals and design through removal, replacement with a certified compliant system, and final certification.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Tell us what you're seeing through our contact form, or call 0422 453 966. We'll come back to you within one business day with straight answers and a clear next step.",
  },
] as const;

export type ServiceCategory = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  /** SEO <title> (keyword + location targeted). */
  metaTitle: string;
  /** SEO meta description. */
  metaDescription: string;
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
    metaTitle: "Facade Upgrades Sydney",
    metaDescription:
      "Facade upgrades, over-cladding, balustrades and coatings across Sydney. Renew Construction Group transforms tired building facades — licensed, insured, NSW-wide.",
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
    metaTitle: "Remedial Building Repairs Sydney",
    metaDescription:
      "Sydney remedial building specialists. Concrete cancer, waterproofing, render, balcony and structural repairs for strata, commercial and residential buildings.",
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
    metaTitle: "Heritage Restoration Sydney",
    metaDescription:
      "Sympathetic heritage restoration across Sydney — stonemasonry, brick and render repairs, steel window restoration and facade coatings, built to last.",
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
    metaTitle: "Combustible Cladding Replacement Sydney",
    metaDescription:
      "Non-compliant ACP cladding replacement, passive fire upgrades and compliance across Sydney. End-to-end rectification from statutory approvals to final certification.",
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
    metaTitle: "Building Maintenance Sydney",
    metaDescription:
      "Ongoing building service and maintenance for strata, commercial and residential assets in Sydney — inspections, corrosion treatment, make-safe and reporting.",
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

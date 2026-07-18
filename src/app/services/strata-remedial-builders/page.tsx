import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import heroImage from "../../../../public/hero.jpg";

export const metadata: Metadata = {
  title: "Strata Remedial Builders Sydney",
  description:
    "Remedial builders for Sydney owners corporations — concrete cancer, waterproofing, cladding and common property repairs with one accountable, licensed team.",
  alternates: { canonical: "/services/strata-remedial-builders" },
  openGraph: {
    url: `${site.url}/services/strata-remedial-builders`,
    siteName: site.name,
    images: "/opengraph-image",
  },
};

const url = `${site.url}/services/strata-remedial-builders`;

const faqs = [
  {
    question: "Do you work directly with strata managers?",
    answer:
      "Yes — strata managers, owners corporations and building managers are the core of our work. We provide inspection reports and itemised quotes ready for committee review, and one point of contact from first inspection to final sign-off.",
  },
  {
    question: "Who pays for repairs — the owners corporation or the lot owner?",
    answer:
      "As a general rule in NSW, defects in common property — the building structure, external walls, balcony slabs, waterproofing membranes and balustrades — are the owners corporation's responsibility, while finishes inside a lot belong to the owner. It varies with the strata plan, so we help scope which is which as part of an inspection.",
  },
  {
    question: "Can residents stay in the building during works?",
    answer:
      "Yes. We plan remedial programs specifically for occupied buildings — staging the works, maintaining safe access, and communicating clearly with residents so daily life keeps moving while the repairs get done.",
  },
  {
    question: "Do you provide reports our committee can review?",
    answer:
      "Yes. Every engagement starts with an inspection and a written scope: what's failing, why, what the repair involves and an itemised price — in plain language a committee can make a decision on.",
  },
  {
    question: "Are you licensed and insured for strata work?",
    answer:
      "Yes. Renew Construction Group holds NSW Builders Licence 490706C, is a registered building practitioner, and carries public liability and workers compensation insurance. ABN 44 693 358 888.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Strata Remedial Building — Sydney",
      serviceType: "Strata remedial building",
      description:
        "Remedial building services for owners corporations and strata managers across greater Sydney — concrete cancer, waterproofing, facades, cladding and common property repairs.",
      url,
      provider: { "@id": `${site.url}/#business` },
      areaServed: site.areasServed.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${site.url}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Strata Remedial Builders",
          item: url,
        },
      ],
    },
  ],
};

const eyebrowClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";

const scope = [
  {
    title: "Concrete cancer & spalling",
    description:
      "Diagnosis and lasting repair of corroding reinforcement in slabs, balconies, columns and facades — treated at the cause.",
  },
  {
    title: "Balconies & waterproofing",
    description:
      "Failed membranes, leaking balconies, planter boxes and rooftops — stripped back, re-membraned and rebuilt to drain properly.",
  },
  {
    title: "Facade & render repairs",
    description:
      "Cracked render, drummy finishes and tired facades repaired and recoated to protect the building and lift its street presence.",
  },
  {
    title: "Cladding rectification",
    description:
      "End-to-end replacement of combustible ACP cladding, from statutory approvals through to final certification.",
  },
  {
    title: "Common property repairs",
    description:
      "Driveways, walkways, foyers, fences and shared amenities — the everyday repairs that keep a scheme safe and presentable.",
  },
  {
    title: "Make-safe & urgent works",
    description:
      "Dangerous defects — falling render, loose concrete, failed balustrades — made safe quickly, then permanently repaired.",
  },
];

const process = [
  {
    title: "Inspect & report",
    description:
      "We inspect the defect, identify the cause, and put the findings in writing — what's failing, why, and what fixing it properly involves.",
  },
  {
    title: "Itemised quotation",
    description:
      "Clear, itemised pricing your committee can review and compare — no vague allowances or surprise variations.",
  },
  {
    title: "Approvals & scheduling",
    description:
      "Once approved, we plan the works around the building: access, notifications to residents, and staging that keeps the scheme functioning.",
  },
  {
    title: "Staged delivery",
    description:
      "Works proceed in planned stages on the occupied building, with safety maintained and residents kept informed throughout.",
  },
  {
    title: "Handover & maintenance",
    description:
      "Completed works are documented for the owners corporation's records, with recommendations for ongoing inspection and maintenance.",
  },
];

const related = [
  {
    title: "Concrete Cancer Repair",
    href: "/services/concrete-cancer-repair",
    summary: "Spalling diagnosis and lasting structural repairs.",
  },
  {
    title: "Balcony Repairs & Waterproofing",
    href: "/services/balcony-repairs-waterproofing",
    summary: "Leak diagnosis, membranes, retiling and compliant balustrades.",
  },
  {
    title: "Cladding & Compliance",
    href: "/services/cladding-compliance",
    summary: "Combustible cladding replacement, fire upgrades and compliance, end to end.",
  },
];

export default function StrataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[56vh] items-end overflow-hidden bg-ink">
        <Image
          src={heroImage}
          alt="Residential strata building repaired by Renew Construction Group in Sydney"
          placeholder="blur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/55 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pt-40 pb-16 sm:px-12 lg:px-24 lg:pb-20">
          <p className="hero-rise text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
            Services
          </p>
          <h1 className="hero-rise mt-4 max-w-[900px] text-[38px] leading-[1.08] font-medium tracking-[-0.02em] text-white sm:text-[50px] lg:text-[60px]">
            Strata Remedial Builders Sydney
          </h1>
          <p
            className="hero-rise mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            One accountable team for your owners corporation — from defect
            report to final sign-off.
          </p>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className={eyebrowClasses}>Overview</p>
              <h2 className="mt-4 max-w-[360px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
                Built for how strata actually works.
              </h2>
            </Reveal>
          </div>
          <div>
            <div className="max-w-[640px] space-y-5">
              <Reveal>
                <p className="text-[16px] leading-[1.75]">
                  Strata remedial work isn&rsquo;t just construction — it&rsquo;s
                  committees that need clear information to make decisions,
                  residents who live on site while the work happens, and strata
                  managers juggling both. We build our whole process around
                  that.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-[16px] leading-[1.75]">
                  Owners corporations across greater Sydney work with Renew on
                  the defects that age apartment buildings: concrete cancer,
                  leaking balconies and failed waterproofing, cracked render,
                  tired facades and non-compliant cladding. Every job starts
                  with a written diagnosis and an itemised quote your committee
                  can actually evaluate.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-[16px] leading-[1.75]">
                  And because you deal with the builder directly — a
                  NSW-licensed, registered building practitioner — questions get
                  answered straight away, not relayed through layers of
                  subcontractors.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <Link
                href="/#contact"
                className="mt-9 inline-flex rounded-[10px] bg-blue px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Request an inspection
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Scope ─────────────────────────────────────────────────────── */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <p className={eyebrowClasses}>What we handle</p>
            <h2 className="mt-4 max-w-[560px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              Common property, covered.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] border border-hairline-2 bg-hairline-2 sm:grid-cols-2 lg:grid-cols-3">
            {scope.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col bg-tint p-7 lg:p-8">
                  <h3 className="text-[18px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className={eyebrowClasses}>How we work</p>
              <h2 className="mt-4 max-w-[320px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
                From report to sign-off.
              </h2>
            </Reveal>
          </div>
          <div>
            {process.map((step, i) => (
              <div key={step.title}>
                <Reveal variant="line" delay={i * 60}>
                  <div className="h-px w-full bg-hairline" />
                </Reveal>
                <Reveal delay={i * 60}>
                  <div className="grid items-start gap-2 py-6 sm:grid-cols-[auto_1fr] sm:gap-7">
                    <span className="text-[15px] font-semibold text-blue sm:w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[600px] text-[15px] leading-[1.7]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
            <div className="h-px w-full bg-hairline" />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <p className={eyebrowClasses}>FAQ</p>
            <h2 className="mt-4 max-w-[560px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              Questions strata managers ask us.
            </h2>
          </Reveal>
          <dl className="mt-10 max-w-[860px]">
            {faqs.map((faq, i) => (
              <div key={faq.question}>
                <Reveal variant="line" delay={i * 50}>
                  <div className="h-px w-full bg-hairline-2" />
                </Reveal>
                <Reveal delay={i * 50}>
                  <div className="py-6">
                    <dt className="text-[17px] font-semibold text-ink">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 max-w-[720px] text-[15px] leading-[1.7]">
                      {faq.answer}
                    </dd>
                  </div>
                </Reveal>
              </div>
            ))}
            <div className="h-px w-full bg-hairline-2" />
          </dl>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <Reveal>
          <p className={eyebrowClasses}>Related services</p>
          <h2 className="mt-4 text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
            Explore what else we do.
          </h2>
        </Reveal>
        <div className="mt-10">
          {related.map((s, i) => (
            <Link key={s.href} href={s.href} className="group block">
              <Reveal variant="line" delay={i * 50}>
                <div className="h-px w-full bg-hairline" />
              </Reveal>
              <Reveal delay={i * 50}>
                <div className="flex items-center justify-between gap-6 py-6">
                  <div>
                    <h3 className="text-[20px] font-semibold text-ink transition-colors group-hover:text-blue lg:text-[22px]">
                      {s.title}
                    </h3>
                    <p className="mt-1 max-w-[560px] text-[14.5px] leading-[1.6] text-body">
                      {s.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-blue transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Reveal>
            </Link>
          ))}
          <div className="h-px w-full bg-hairline" />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="border-t border-hairline bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <h2 className="max-w-[640px] text-[28px] leading-[1.2] font-medium tracking-[-0.01em] text-ink lg:text-[38px]">
              Managing a building with defects?
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
              Tell us what&rsquo;s been reported and we&rsquo;ll come back with
              an inspection, a written diagnosis and an itemised quote your
              committee can act on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/#contact"
                className="rounded-[10px] bg-blue px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Request a quote
              </Link>
              <a
                href={site.contact.phoneHref}
                className="border-b border-ink pb-0.5 text-[14px] font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
              >
                {site.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

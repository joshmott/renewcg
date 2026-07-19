import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import heroImage from "../../../../public/facade-hero.jpg";

export const metadata: Metadata = {
  title: "Concrete Cancer Repair Sydney",
  description:
    "Concrete cancer and spalling repair across Sydney, diagnosed at the cause and repaired to last. Strata, commercial and residential. NSW-licensed builders.",
  alternates: { canonical: "/services/concrete-cancer-repair" },
  openGraph: {
    url: `${site.url}/services/concrete-cancer-repair`,
    siteName: site.name,
    images: "/opengraph-image",
  },
};

const url = `${site.url}/services/concrete-cancer-repair`;

const faqs = [
  {
    question: "What is concrete cancer?",
    answer:
      "Concrete cancer (concrete spalling) happens when the steel reinforcement inside concrete corrodes. Rusting steel expands to several times its original volume, cracking the concrete around it and letting in more moisture, which accelerates the corrosion. Left untreated, the cycle compounds.",
  },
  {
    question: "Is concrete cancer dangerous?",
    answer:
      "Early on it can look cosmetic, but corroding reinforcement progressively weakens the structure, and falling concrete from balconies, awnings and facades is a genuine safety risk. The earlier it's treated, the smaller, safer and cheaper the repair.",
  },
  {
    question: "How much does concrete cancer repair cost?",
    answer:
      "It depends on how far the corrosion has progressed and how accessible the affected areas are. An early-stage patch repair is a fraction of the cost of rebuilding a structural element. We inspect and diagnose first, then provide a clear itemised quote.",
  },
  {
    question: "Who is responsible for concrete cancer in a strata building?",
    answer:
      "Spalling in the building structure (slabs, columns, balcony soffits and external walls) is generally common property in NSW, making it the owners corporation's responsibility. We work with strata managers and committees on inspection reports, quotes and staged repairs.",
  },
  {
    question: "How long do concrete cancer repairs take?",
    answer:
      "Small repairs are typically completed in days. Larger programs across multiple balconies or facade elements are staged over weeks, planned around residents and tenants on occupied buildings.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Concrete Cancer Repair Sydney",
      serviceType: "Concrete cancer repair",
      description:
        "Diagnosis and lasting repair of concrete cancer and spalling for strata, commercial and residential buildings across greater Sydney.",
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
          name: "Concrete Cancer Repair",
          item: url,
        },
      ],
    },
  ],
};

const eyebrowClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";

const signs = [
  {
    title: "Cracked or drummy concrete",
    description:
      "Concrete that cracks along lines or sounds hollow when tapped has separated from the reinforcement behind it, a classic early sign of spalling.",
  },
  {
    title: "Rust stains",
    description:
      "Brown staining bleeding from cracks, joints or slab edges usually means the reinforcement behind the surface is already corroding.",
  },
  {
    title: "Exposed reinforcement",
    description:
      "Steel visible through broken concrete has lost its protective cover and corrodes on contact with air and moisture. It needs prompt attention.",
  },
  {
    title: "Bubbling render or paint",
    description:
      "Coatings that bubble, blister or delaminate often signal moisture and corrosion working away behind the surface.",
  },
  {
    title: "Leaks after rain",
    description:
      "Water ingress through slabs, planter boxes and balconies both causes and accelerates concrete cancer; the two almost always go together.",
  },
  {
    title: "Cracking balcony edges",
    description:
      "Persistent cracking or movement in balcony edges and soffits can indicate corroding reinforcement inside the slab.",
  },
];

const process = [
  {
    title: "Inspect & diagnose",
    description:
      "We identify the extent of the spalling and the cause of the corrosion (carbonation, chloride attack from salt air, or a failed membrane) before pricing the repair.",
  },
  {
    title: "Break out & treat",
    description:
      "Damaged concrete is broken out to sound material, corroded steel is cleaned or replaced, and the reinforcement is treated with corrosion inhibitors.",
  },
  {
    title: "Reinstate",
    description:
      "The section is rebuilt with purpose-designed repair mortars matched to the structure, restoring full protective cover to the reinforcement.",
  },
  {
    title: "Protect",
    description:
      "Membranes and protective coatings address the moisture path that caused the corrosion in the first place, so the repair lasts.",
  },
  {
    title: "Sign off & prevent",
    description:
      "We document the completed works and recommend an inspection cycle to catch any future deterioration while it's still minor.",
  },
];

const related = [
  {
    title: "Remedial Repairs",
    href: "/services/remedial-repairs",
    summary: "Diagnosing and repairing structural and aesthetic defects, built to last.",
  },
  {
    title: "Balcony Repairs & Waterproofing",
    href: "/services/balcony-repairs-waterproofing",
    summary: "Leak diagnosis, membranes, retiling and compliant balustrades.",
  },
  {
    title: "Strata Remedial Builders",
    href: "/services/strata-remedial-builders",
    summary: "One accountable team for owners corporations and strata managers.",
  },
];

export default function ConcreteCancerPage() {
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
          alt="Concrete and facade repair project by Renew Construction Group in Sydney"
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
            Concrete Cancer Repair Sydney
          </h1>
          <p
            className="hero-rise mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            Spalling concrete never repairs itself. Early diagnosis is the
            difference between a patch and a structural rebuild.
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
                Stop the corrosion, not just the symptoms.
              </h2>
            </Reveal>
          </div>
          <div>
            <div className="max-w-[640px] space-y-5">
              <Reveal>
                <p className="text-[16px] leading-[1.75]">
                  Concrete cancer, also called concrete spalling, happens when
                  the steel reinforcement inside concrete corrodes. As the steel rusts it
                  expands, cracking the surrounding concrete and letting in more
                  moisture, which speeds the corrosion further. Left alone, the
                  cycle only accelerates.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-[16px] leading-[1.75]">
                  We repair concrete cancer across greater Sydney for strata,
                  commercial and residential buildings. Every repair starts with
                  diagnosis: establishing why the reinforcement is corroding
                  (carbonation, chloride attack, cracked cover concrete or a
                  failed membrane) so the repair treats the cause, not just the
                  visible damage.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-[16px] leading-[1.75]">
                  Sydney&rsquo;s harbour and coastal suburbs are especially
                  exposed: salt-laden air accelerates corrosion in balconies,
                  awnings and facades from the Eastern Suburbs to the Northern
                  Beaches. The earlier spalling is treated, the smaller and
                  cheaper the repair.
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

      {/* ── Signs ─────────────────────────────────────────────────────── */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <p className={eyebrowClasses}>Signs to look for</p>
            <h2 className="mt-4 max-w-[560px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              How concrete cancer shows itself.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] border border-hairline-2 bg-hairline-2 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((item, i) => (
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
              <p className={eyebrowClasses}>Our process</p>
              <h2 className="mt-4 max-w-[320px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
                Repairs that treat the cause.
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
              Concrete cancer questions, answered.
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
              Seeing cracks, rust stains or drummy concrete?
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
              Send us a photo of what you&rsquo;re seeing and we&rsquo;ll come
              back with straight answers and a clear next step.
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

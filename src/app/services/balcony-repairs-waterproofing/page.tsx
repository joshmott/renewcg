import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Balcony Repairs & Waterproofing Sydney",
  description:
    "Leaking balcony? We repair balconies and failed waterproofing membranes across Sydney: strip back, re-membrane, retile and certify. Strata specialists.",
  alternates: { canonical: "/services/balcony-repairs-waterproofing" },
  openGraph: {
    url: `${site.url}/services/balcony-repairs-waterproofing`,
    siteName: site.name,
    images: "/opengraph-image",
  },
};

const url = `${site.url}/services/balcony-repairs-waterproofing`;

const faqs = [
  {
    question: "Why is my balcony leaking?",
    answer:
      "Almost always a failed or badly detailed waterproofing membrane: wrong material, inadequate turn-ups, missing flashings or falls that pool water. Tiles and grout are not waterproof; once the membrane beneath them fails, water finds its way into the slab and the rooms below.",
  },
  {
    question: "Can you just regrout or seal the tiles instead?",
    answer:
      "Surface sealing can slow a minor leak, but if the membrane has failed it's a temporary fix; the water is still getting in. A lasting repair means stripping back to the substrate, installing the right membrane system and retiling.",
  },
  {
    question: "Who pays for balcony repairs in a strata building?",
    answer:
      "In NSW, balcony slabs, waterproofing membranes and balustrades are generally common property, making them the owners corporation's responsibility, while tiles and finishes can vary by strata plan. We help strata managers and committees scope exactly what's involved.",
  },
  {
    question: "How long does a balcony repair take?",
    answer:
      "A straightforward strip-back, membrane and retile is typically completed within one to two weeks per balcony, allowing for curing times between stages. Multiple balconies are staged to keep disruption to residents to a minimum.",
  },
  {
    question: "Do you replace balustrades as well?",
    answer:
      "Yes. Deteriorating or non-compliant balustrades are a safety and legal hazard. We design and install replacement systems that comply with Australian Standards as part of the balcony refurbishment.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Balcony Repairs & Waterproofing Sydney",
      serviceType: "Balcony repair and waterproofing",
      description:
        "Balcony leak diagnosis, waterproofing membranes, retiling and compliant balustrades for strata, commercial and residential buildings across Sydney.",
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
          item: `${site.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Balcony Repairs & Waterproofing",
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
    title: "Water stains below",
    description:
      "Damp patches, drip marks or peeling paint on the ceiling or wall beneath a balcony are the most common first sign the membrane above has failed.",
  },
  {
    title: "Drummy or lifting tiles",
    description:
      "Tiles that sound hollow, lift or crack point to water moving beneath them and breaking down the bed and membrane.",
  },
  {
    title: "Efflorescence",
    description:
      "White, salt-like deposits on tile edges, grout lines or the slab edge mean water is passing through the structure and carrying minerals with it.",
  },
  {
    title: "Pooling water",
    description:
      "Water that sits rather than drains indicates falls were never right or have moved, and standing water finds every weakness in a membrane.",
  },
  {
    title: "Rusting fixings & rot",
    description:
      "Corroding balustrade posts, door frames or rotting timber reveals moisture trapped where it shouldn't be.",
  },
  {
    title: "Leaking planter boxes",
    description:
      "Built-in planters are a classic hidden source of water ingress: constantly wet, rarely membraned properly, and directly against the structure.",
  },
];

const process = [
  {
    title: "Find the moisture path",
    description:
      "We investigate where the water is actually getting in (membrane, flashings, junctions, planters or the slab itself) before any work is priced.",
  },
  {
    title: "Strip back",
    description:
      "Tiles, beds and the failed membrane are removed back to a sound substrate, and any concrete spalling in the slab is repaired while it's exposed.",
  },
  {
    title: "Waterproof properly",
    description:
      "The right membrane system for the situation, installed with correct falls, turn-ups and flashings. The detailing is what makes it last.",
  },
  {
    title: "Retile & finish",
    description:
      "New tiling and finishes bring the balcony back better than before, with drainage that works.",
  },
  {
    title: "Balustrade & sign-off",
    description:
      "Balustrades are checked and, where needed, replaced with compliant systems, and the completed works are documented.",
  },
];

const related = [
  {
    title: "Concrete Cancer Repair",
    href: "/services/concrete-cancer-repair",
    summary: "Spalling diagnosis and lasting structural repairs.",
  },
  {
    title: "Remedial Repairs",
    href: "/services/remedial-repairs",
    summary: "Diagnosing and repairing structural and aesthetic defects, built to last.",
  },
  {
    title: "Strata Remedial Builders",
    href: "/services/strata-remedial-builders",
    summary: "One accountable team for owners corporations and strata managers.",
  },
];

export default function BalconyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[56vh] items-end overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.9]"
          style={{
            backgroundImage:
              "radial-gradient(120% 130% at 85% 0%, #1b2159 0%, #14183c 55%, #0d1030 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pt-40 pb-16 sm:px-12 lg:px-24 lg:pb-20">
          <Breadcrumbs
            className="hero-rise"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Balcony Repairs & Waterproofing" },
            ]}
          />
          <h1 className="hero-rise mt-4 max-w-[900px] text-[38px] leading-[1.08] font-medium tracking-[-0.02em] text-white sm:text-[50px] lg:text-[60px]">
            Balcony Repairs &amp; Waterproofing Sydney
          </h1>
          <p
            className="hero-rise mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            A leaking balcony rarely fixes itself. The membrane underneath
            decides everything.
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
                Fix the waterproofing, then the tiles.
              </h2>
            </Reveal>
          </div>
          <div>
            <div className="max-w-[640px] space-y-5">
              <Reveal>
                <p className="text-[16px] leading-[1.75]">
                  Leaking balconies are one of the most common defects in Sydney
                  buildings, and one of the most commonly mis-repaired. Damp
                  ceilings below, drummy tiles and white efflorescence all trace
                  back to the same place: a waterproofing membrane that has
                  failed or was never detailed correctly.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-[16px] leading-[1.75]">
                  Band-aid fixes like regrouting, surface sealers and patch
                  repairs buy months, not years. We strip back to the substrate,
                  identify the actual moisture path, repair any spalling in the
                  slab while it&rsquo;s exposed, then install the right membrane
                  system with correct falls, turn-ups and flashings before
                  retiling.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-[16px] leading-[1.75]">
                  We refurbish balconies for owners corporations, commercial
                  owners and homeowners across Sydney, staging
                  multi-balcony programs on occupied buildings so residents can
                  keep living normally while the work gets done.
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
              How a failed balcony shows itself.
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
                Repaired once, properly.
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
              Balcony and waterproofing questions.
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
              Got a damp ceiling or a leaking balcony?
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

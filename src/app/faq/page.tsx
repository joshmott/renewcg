import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { faqs, site } from "@/lib/site";
import faqHero from "../../../public/faq-hero.jpg";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about our Sydney remedial building services: licensing, insurance, service areas, concrete cancer and how to get a quote.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: `${site.url}/faq`,
    siteName: site.name,
    images: "/opengraph-image",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${site.url}/faq#faqpage`,
      url: `${site.url}/faq`,
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
          name: "FAQ",
          item: `${site.url}/faq`,
        },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Header ────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-ink">
        <Image
          src={faqHero}
          alt="Timber batten screen and louvre window on a Renew Construction Group project in Sydney"
          placeholder="blur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* bottom scrim carries the title; top scrim keeps the nav legible */}
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
            FAQ
          </p>
          <h1 className="hero-rise mt-4 max-w-[900px] text-[40px] leading-[1.06] font-medium tracking-[-0.02em] text-white sm:text-[54px] lg:text-[62px]">
            Frequently asked questions
          </h1>
          <p
            className="hero-rise mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            Straight answers on how we work, what we&rsquo;re licensed to do, and
            how to get started.
          </p>
        </div>
      </section>

      {/* ── Questions ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <dl className="mx-auto max-w-[820px]">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <Reveal variant="line" delay={i * 50}>
                <div className="h-px w-full bg-hairline" />
              </Reveal>
              <Reveal delay={i * 50}>
                <div className="py-8">
                  <dt className="text-[20px] font-semibold text-ink lg:text-[22px]">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 max-w-[680px] text-[16px] leading-[1.75]">
                    {faq.answer}
                  </dd>
                </div>
              </Reveal>
            </div>
          ))}
          <div className="h-px w-full bg-hairline" />
        </dl>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="border-t border-hairline bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <h2 className="max-w-[640px] text-[28px] leading-[1.2] font-medium tracking-[-0.01em] text-ink lg:text-[38px]">
              Still have a question? Just ask.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
              Tell us what you&rsquo;re seeing and we&rsquo;ll come back to you
              within one business day with straight answers and a clear next
              step.
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

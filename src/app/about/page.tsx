import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: Sydney Remedial Builders",
  description:
    "Renew Construction Group is a NSW-licensed Sydney remedial builder founded by Joshua Mott, with 15+ years' experience. Deal directly with the builder.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${site.url}/about`,
    siteName: site.name,
    images: "/opengraph-image",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.url}/about#aboutpage`,
      url: `${site.url}/about`,
      name: `About ${site.name}`,
      about: { "@id": `${site.url}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${site.url}/about`,
        },
      ],
    },
  ],
};

const eyebrowClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";

const principles = [
  {
    title: "Diagnosis first",
    description:
      "Every engagement starts with understanding the root cause. We investigate before we quote, so the repair methodology and materials are genuinely fit for purpose. We repair causes, not symptoms.",
  },
  {
    title: "Deal direct",
    description:
      "You work with one accountable team from first inspection through to final sign-off. No chain of subcontractors, no account managers, no runaround.",
  },
  {
    title: "Built to last",
    description:
      "Our solutions are designed to reduce ongoing maintenance costs and hold for the long term, not just to pass the next inspection.",
  },
  {
    title: "Minimal disruption",
    description:
      "We stage works carefully on occupied buildings, keeping residents and tenants safe and comfortable while the work gets done.",
  },
];

const credentials: { label: string; value: string; href?: string }[] = [
  { label: "Founded", value: `${site.foundingYear}, Sydney` },
  {
    label: "Builders licence",
    value: "NSW 490706C",
    href: site.credentials.licenceUrl,
  },
  { label: "Registration", value: "Building Practitioner NSW" },
  { label: "Insurance", value: site.credentials.insurance },
  { label: "ABN", value: site.credentials.abnNumber },
  {
    label: "Office",
    value: site.address.full,
    href: site.address.mapsUrl,
  },
  {
    label: "Service area",
    value: "Eastern Suburbs · North Shore · Northern Beaches",
  },
  {
    label: "NSW Government",
    value: "Registered supplier on buy.nsw",
    href: site.credentials.buyNswUrl,
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Header ────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink">
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
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
          <h1 className="hero-rise mt-4 max-w-[900px] text-[40px] leading-[1.06] font-medium tracking-[-0.02em] text-white sm:text-[54px] lg:text-[62px]">
            A licensed builder you deal with directly.
          </h1>
          <p
            className="hero-rise mt-5 max-w-[600px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            Renew Construction Group is a Sydney remedial builder, founded on a
            simple idea: diagnose the real problem and do the work properly the
            first time.
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className={eyebrowClasses}>Our story</p>
              <h2 className="mt-4 max-w-[320px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
                Built on doing it properly.
              </h2>
            </Reveal>
          </div>
          <div className="max-w-[680px] space-y-5">
            <Reveal>
              <p className="text-[16px] leading-[1.75]">
                Renew Construction Group was founded in 2025 by Joshua Mott, who
                brings more than fifteen years of experience in the construction
                industry to every project.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-[16px] leading-[1.75]">
                After years working across remedial and commercial construction,
                Joshua started Renew on a straightforward belief: building owners
                deserve to deal with the builder directly, not a chain of
                subcontractors and account managers. When you work with Renew,
                you deal with the person accountable for the work.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[16px] leading-[1.75]">
                We&rsquo;re a remedial building specialist based in Sydney. Our
                focus is diagnosing the real cause of a building&rsquo;s
                problems, from concrete cancer and water ingress to failing
                facades and non-compliant cladding, and repairing them so they
                stay fixed.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-[16px] leading-[1.75]">
                We work across strata, commercial and residential buildings
                across Sydney, often on occupied sites,
                collaborating with owners corporations, strata managers and
                property managers to keep disruption to residents and tenants to
                a minimum, from first inspection through to final sign-off.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────────────────── */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <p className={eyebrowClasses}>How we work</p>
            <h2 className="mt-4 max-w-[560px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              The principles behind every project.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] border border-hairline-2 bg-hairline-2 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 70}>
                <div className="flex h-full flex-col bg-tint p-7 lg:p-8">
                  <h3 className="text-[18px] font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7]">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className={eyebrowClasses}>Credentials</p>
              <h2 className="mt-4 max-w-[320px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
                Licensed, insured, accountable.
              </h2>
              <p className="mt-5 max-w-[320px] text-[15px] leading-[1.7]">
                A NSW-licensed builder and registered building practitioner, so
                you know exactly who is standing behind the work.
              </p>
            </Reveal>
          </div>
          <div>
            {credentials.map((row, i) => (
              <div key={row.label}>
                <Reveal variant="line" delay={i * 60}>
                  <div className="h-px w-full bg-hairline-2" />
                </Reveal>
                <Reveal delay={i * 60}>
                  <div className="flex items-baseline justify-between gap-6 py-4">
                    <span className="text-[14px] text-muted">{row.label}</span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-right text-[14px] font-semibold text-blue transition-colors hover:text-blue-dark"
                      >
                        {row.value}&nbsp;&#8599;
                      </a>
                    ) : (
                      <span className="text-right text-[14px] font-semibold text-ink">
                        {row.value}
                      </span>
                    )}
                  </div>
                </Reveal>
              </div>
            ))}
            <Reveal variant="line" delay={credentials.length * 60}>
              <div className="h-px w-full bg-hairline-2" />
            </Reveal>
            <Reveal delay={credentials.length * 60}>
              <div className="mt-8">
                <p className="text-[13px] font-semibold tracking-[0.14em] text-muted uppercase">
                  Areas we service
                </p>
                <p className="mt-3 max-w-[620px] text-[16px] leading-[1.75]">
                  {site.contact.serviceArea}, with a focus on the Eastern
                  Suburbs, North Shore and Northern Beaches.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="border-t border-hairline bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <h2 className="max-w-[640px] text-[28px] leading-[1.2] font-medium tracking-[-0.01em] text-ink lg:text-[38px]">
              Got a project in mind? We&rsquo;re here to help.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
              Tell us about your project and we&rsquo;ll come back to you with
              straight answers and a clear next step.
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

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { landingPages, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Building & Remedial Services Sydney",
  description:
    "Remedial repairs, facade upgrades, heritage restoration, cladding compliance, maintenance and renovations: every Renew Construction Group service across Sydney.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: `${site.url}/services`,
    siteName: site.name,
    images: "/opengraph-image",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": `${site.url}/services#services`,
      name: "Renew Construction Group services",
      itemListElement: [
        ...services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          url: `${site.url}/services/${s.slug}`,
        })),
        ...landingPages.map((p, i) => ({
          "@type": "ListItem",
          position: services.length + i + 1,
          name: p.title,
          url: `${site.url}/services/${p.slug}`,
        })),
      ],
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
      ],
    },
  ],
};

const eyebrowClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-ink">
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
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <h1 className="hero-rise mt-4 max-w-[900px] text-[40px] leading-[1.06] font-medium tracking-[-0.02em] text-white sm:text-[54px] lg:text-[62px]">
            Our services
          </h1>
          <p
            className="hero-rise mt-5 max-w-[600px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            Diagnosis-first building services for strata, commercial and
            residential properties across Sydney.
          </p>
        </div>
      </section>

      {/* ── Core services ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className={eyebrowClasses}>What we do</p>
              <h2 className="mt-4 max-w-[300px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
                Every way we bring buildings back.
              </h2>
              <p className="mt-5 max-w-[300px] text-[15px] leading-[1.7]">
                Every engagement starts with diagnosis. We repair causes, not
                symptoms.
              </p>
            </Reveal>
          </div>
          <div>
            {services.filter((s) => !s.hidden).map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <Reveal variant="line" delay={i * 50}>
                  <div className="h-px w-full bg-hairline" />
                </Reveal>
                <Reveal delay={i * 50}>
                  <div className="grid items-start gap-3 py-[26px] sm:grid-cols-[auto_1fr_1.2fr] sm:gap-x-7 sm:gap-y-2">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-tint p-[11px] text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white"
                    >
                      <ServiceIcon slug={service.slug} />
                    </div>
                    <h3 className="flex items-center gap-2 text-[19px] font-semibold text-ink transition-colors group-hover:text-blue sm:mt-2">
                      {service.title}
                      <span
                        aria-hidden="true"
                        className="text-blue opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </h3>
                    <p className="text-[15px] leading-[1.7] sm:mt-2">
                      {service.summary}
                    </p>
                  </div>
                </Reveal>
              </Link>
            ))}
            <Reveal variant="line" delay={300}>
              <div className="h-px w-full bg-hairline" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Specialist pages ──────────────────────────────────────────── */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <p className={eyebrowClasses}>Specialist services</p>
            <h2 className="mt-4 max-w-[560px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              Deep expertise in the defects Sydney buildings face most.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] border border-hairline-2 bg-hairline-2 sm:grid-cols-3">
            {landingPages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  href={`/services/${p.slug}`}
                  className="group flex h-full flex-col bg-tint p-7 transition-colors hover:bg-paper lg:p-8"
                >
                  <h3 className="flex items-center gap-2 text-[18px] font-semibold text-ink transition-colors group-hover:text-blue">
                    {p.title}
                    <span
                      aria-hidden="true"
                      className="text-blue opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7]">{p.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <h2 className="max-w-[640px] text-[28px] leading-[1.2] font-medium tracking-[-0.01em] text-ink lg:text-[38px]">
              Not sure which service you need?
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
              Tell us what you&rsquo;re seeing and we&rsquo;ll diagnose the
              cause and point you to the right fix, with straight answers and a
              clear next step.
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

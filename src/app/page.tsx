import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/hero.jpg";
import { Parallax } from "@/components/Parallax";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const eyebrowClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";

const aboutRows = [
  { label: "Builders licence", value: "NSW 490706C" },
  { label: "Registration", value: "Building Practitioner NSW" },
  { label: "Insurance", value: site.credentials.insurance },
  { label: "ABN", value: "44 693 358 888" },
];

function Hairline({ delay = 0 }: { delay?: number }) {
  return (
    <Reveal variant="line" delay={delay}>
      <div className="h-px w-full bg-hairline" />
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero — full-screen image with overlaid nav + text ────────── */}
      <section className="relative isolate flex min-h-[100svh] items-center">
        <Parallax className="absolute inset-0" strength={30}>
          <Image
            src={heroImage}
            alt="Contemporary residential terraces in Sydney"
            placeholder="blur"
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </Parallax>
        {/* top scrim keeps the overlaid nav legible against the sky */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/55 to-transparent"
        />
        {/* left scrim carries the hero copy */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25"
        />
        {/* overlaid hero text, aligned to the site container */}
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-6 py-28 sm:px-12 lg:px-24">
          <h1 className="hero-rise max-w-[840px] text-[34px] leading-[1.15] font-medium tracking-[-0.015em] text-white sm:text-[42px] lg:text-[52px] lg:leading-[1.12]">
            Renewing Australia&rsquo;s History
          </h1>
          <p
            className="hero-rise mt-6 max-w-[520px] text-[16px] leading-[1.7] text-white/85"
            style={{ "--rise-delay": "160ms" } as React.CSSProperties}
          >
            Renew Construction Group is a licensed Sydney builder working
            across architectural homes and renovations, specialist remedial
            works and commercial projects.
          </p>
        </div>
        {/* scroll-down indicator */}
        <a
          href="#services"
          aria-label="Scroll down to our services"
          className="hero-rise absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
          style={{ "--rise-delay": "500ms" } as React.CSSProperties}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="11" />
            <path d="M12 7v9" />
            <path d="M8.5 12.5L12 16l3.5-3.5" />
          </svg>
        </a>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-24">
        {/* ── Three pillars ──────────────────────────────────────────── */}
        <section className="grid gap-10 py-16 sm:grid-cols-3 sm:gap-8 lg:py-20">
          {[
            {
              eyebrow: "Residential",
              title: "Architectural homes & renovations",
              body: "New builds, whole-home renovations and extensions.",
              href: "/services/residential-construction",
              label: "Residential construction",
            },
            {
              eyebrow: "Remedial",
              title: "Class 2 & remedial works",
              body: "Apartment and strata remediation: concrete cancer, waterproofing, facades and heritage.",
              href: "/services/remedial-repairs",
              label: "Remedial services",
            },
            {
              eyebrow: "Commercial",
              title: "Commercial projects",
              body: "Fit-outs, make-good, upgrades and repairs.",
              href: "/services/commercial-construction",
              label: "Commercial construction",
            },
          ].map((pillar, i) => (
            <div key={pillar.eyebrow}>
              <Reveal variant="line" delay={i * 80}>
                <div className="h-px w-full bg-hairline" />
              </Reveal>
              <Reveal delay={i * 80}>
                <div className="pt-6">
                  <p className={eyebrowClasses}>{pillar.eyebrow}</p>
                  <h2 className="mt-3 text-[21px] leading-[1.3] font-semibold text-ink">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-[1.7]">
                    {pillar.body}
                  </p>
                  <Link
                    href={pillar.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue transition-colors hover:text-blue-dark"
                  >
                    {pillar.label}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>
          ))}
        </section>

        {/* ── Services ─────────────────────────────────────────────────── */}
      <section id="services" className="grid gap-12 py-20 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px] lg:py-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className={eyebrowClasses}>Services</p>
            <h2 className="mt-4 max-w-[300px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              What we do.
            </h2>
            <p className="mt-5 max-w-[300px] text-[15px] leading-[1.7]">
              One licensed team across residential, remedial and commercial
              work.
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
              <Hairline delay={i * 60} />
              <Reveal delay={i * 60}>
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
          <Hairline delay={360} />
        </div>
      </section>

      {/* ── Who we help — SEO-supporting copy ─────────────────────────── */}
      <section className="grid gap-12 border-t border-hairline py-20 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px] lg:py-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className={eyebrowClasses}>Who we help</p>
            <h2 className="mt-4 max-w-[360px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              One builder across residential, remedial and commercial.
            </h2>
          </Reveal>
        </div>
        <div className="max-w-[640px] space-y-5">
          <Reveal>
            <p className="text-[16px] leading-[1.75]">
              Homeowners engage Renew for architectural{" "}
              <Link
                href="/services/residential-construction"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                new builds, renovations and extensions
              </Link>
              . Owners corporations and{" "}
              <Link
                href="/services/strata-remedial-builders"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                strata managers
              </Link>{" "}
              work with a registered building practitioner on class 2 remedial
              works:{" "}
              <Link
                href="/services/concrete-cancer-repair"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                concrete cancer
              </Link>
              ,{" "}
              <Link
                href="/services/balcony-repairs-waterproofing"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                balconies and waterproofing
              </Link>
              , render, facades and{" "}
              <Link
                href="/services/cladding-compliance"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                cladding
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[16px] leading-[1.75]">
              <Link
                href="/services/commercial-construction"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                Commercial owners and tenants
              </Link>{" "}
              get the same direct, accountable approach to{" "}
              <Link
                href="/services/remedial-repairs"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                remedial repairs
              </Link>
              ,{" "}
              <Link
                href="/services/facade-upgrades"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                facade upgrades
              </Link>{" "}
              and{" "}
              <Link
                href="/services/service-maintenance"
                className="font-semibold text-blue transition-colors hover:text-blue-dark"
              >
                ongoing maintenance
              </Link>
              . Whatever the project, you deal directly with the builder,
              across Sydney&rsquo;s Eastern Suburbs, North Shore and Northern
              Beaches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="-mx-6 bg-tint px-6 py-20 sm:-mx-12 sm:px-12 lg:-mx-24 lg:px-24 lg:py-[88px]"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-[72px]">
          <Reveal>
            <p className={eyebrowClasses}>About</p>
            <h2 className="mt-4 max-w-[420px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              A licensed builder you deal with directly.
            </h2>
            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.75]">
              Renew Construction Group was founded in 2025 by Joshua Mott, who
              brings over fifteen years of experience in the construction
              industry. It&rsquo;s built on a simple idea: deal with the builder
              directly and do the work properly the first time.
            </p>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <p className="text-[16px] leading-[1.75]">
                Renew Construction Group is a NSW-licensed builder and
                registered building practitioner serving Sydney, from the
                Eastern Suburbs to the North Shore and Northern Beaches. Strata
                managers, commercial owners and homeowners work with one
                accountable team, from first walkthrough to final sign-off.
              </p>
            </Reveal>
            <div className="mt-9">
              {aboutRows.map((row, i) => (
                <div key={row.label}>
                  <Reveal variant="line" delay={i * 80}>
                    <div className="h-px w-full bg-hairline-2" />
                  </Reveal>
                  <Reveal delay={i * 80}>
                    <div className="flex items-baseline justify-between gap-6 py-3.5">
                      <span className="text-[13.5px] text-muted">{row.label}</span>
                      <span className="text-right text-[13.5px] font-semibold text-ink">
                        {row.value}
                      </span>
                    </div>
                  </Reveal>
                </div>
              ))}
              <Reveal variant="line" delay={320}>
                <div className="h-px w-full bg-hairline-2" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote form ───────────────────────────────────────────────── */}
      <section id="contact" className="grid gap-12 py-20 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px] lg:py-24">
        <Reveal>
          <p className={eyebrowClasses}>Request a quote</p>
          <h2 className="mt-4 max-w-[320px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
            Tell us about your project.
          </h2>
          <div className="mt-8 flex flex-col gap-2">
            <a
              href={site.contact.phoneHref}
              className="w-fit text-[15px] font-semibold text-ink transition-colors hover:text-blue"
            >
              {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="w-fit text-[15px] font-semibold text-blue transition-colors hover:text-blue-dark"
            >
              {site.contact.email}
            </a>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-fit max-w-[300px] text-[14px] leading-[1.6] text-body transition-colors hover:text-blue"
            >
              {site.address.full}
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <QuoteForm />
        </Reveal>
      </section>
      </div>
    </>
  );
}

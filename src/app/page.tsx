import type { Metadata } from "next";
import Image from "next/image";
import heroImage from "../../public/hero.jpg";
import { Parallax } from "@/components/Parallax";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
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
            alt="Metal-clad building facade against a clear blue sky"
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
          <p className="hero-rise text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
            Remedial · Commercial · Residential — Sydney
          </p>
          <h1
            className="hero-rise mt-6 max-w-[840px] text-[34px] leading-[1.15] font-medium tracking-[-0.015em] text-white sm:text-[42px] lg:text-[52px] lg:leading-[1.12]"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            Remedial construction, done properly the first time.
          </h1>
          <p
            className="hero-rise mt-6 max-w-[520px] text-[16px] leading-[1.7] text-white/85"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            We diagnose and repair the root cause of building defects for
            strata, commercial and residential properties — licensed, insured,
            and accountable from inspection to sign-off.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-24">
        {/* ── Services ─────────────────────────────────────────────────── */}
      <section id="services" className="grid gap-12 py-20 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[72px] lg:py-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className={eyebrowClasses}>Services</p>
            <h2 className="mt-4 max-w-[300px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              Six ways we bring buildings back.
            </h2>
            <p className="mt-5 max-w-[300px] text-[15px] leading-[1.7]">
              Every engagement starts with diagnosis — we repair causes, not
              symptoms.
            </p>
          </Reveal>
        </div>
        <div>
          {services.map((service, i) => (
            <div key={service.title}>
              <Hairline delay={i * 60} />
              <Reveal delay={i * 60}>
                <div className="grid gap-2 py-[26px] sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                  <h3 className="text-[19px] font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7]">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
          <Hairline delay={360} />
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
              directly, diagnose the real problem, and do the work properly the
              first time.
            </p>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <p className="text-[16px] leading-[1.75]">
                Renew Construction Group is a NSW-licensed builder and
                registered building practitioner serving greater Sydney. Strata
                managers, commercial owners and homeowners work with one
                accountable team — from first inspection through to final
                sign-off.
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
            Tell us what you&rsquo;re seeing.
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

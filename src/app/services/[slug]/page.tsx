import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { getService, services, site } from "@/lib/site";
import facadeHero from "../../../../public/facade-hero.jpg";
import remedialHero from "../../../../public/remedial-hero.jpg";
import heritageHero from "../../../../public/heritage-hero.jpg";
import claddingHero from "../../../../public/cladding-hero.jpg";
import maintenanceHero from "../../../../public/maintenance-hero.jpg";
import residentialHero from "../../../../public/faq-hero.jpg";

/** Optional per-service hero photo. Services without one use the navy band. */
const serviceHeroImages: Record<string, StaticImageData> = {
  "facade-upgrades": facadeHero,
  "remedial-repairs": remedialHero,
  "heritage-restoration": heritageHero,
  "cladding-compliance": claddingHero,
  "service-maintenance": maintenanceHero,
  "residential-construction": residentialHero,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      url: `${site.url}/services/${slug}`,
      siteName: site.name,
      images: "/opengraph-image",
    },
  };
}

const eyebrowClasses =
  "text-xs font-semibold tracking-[0.18em] uppercase text-muted";

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const heroImage = serviceHeroImages[service.slug];
  const url = `${site.url}/services/${service.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${service.title} Sydney`,
        serviceType: service.title,
        description: service.metaDescription,
        url,
        provider: { "@id": `${site.url}/#business` },
        areaServed: site.areasServed.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title}: what's involved`,
          itemListElement: service.categories.map((cat) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: cat.title },
          })),
        },
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
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt={`${service.title} project by Renew Construction Group in Sydney`}
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
          </>
        ) : (
          <>
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
          </>
        )}
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pt-40 pb-16 sm:px-12 lg:px-24 lg:pb-20">
          <Breadcrumbs
            className="hero-rise"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="hero-rise mt-4 max-w-[900px] text-[40px] leading-[1.06] font-medium tracking-[-0.02em] text-white sm:text-[54px] lg:text-[66px]">
            {service.title}
          </h1>
          <p
            className="hero-rise mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/80"
            style={{ "--rise-delay": "140ms" } as React.CSSProperties}
          >
            {service.tagline}
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
                {service.overview}
              </h2>
            </Reveal>
          </div>
          <div>
            <div className="max-w-[640px] space-y-5">
              {service.intro.map((para, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-[16px] leading-[1.75]">{para}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <Link
                href="/#contact"
                className="mt-9 inline-flex rounded-[10px] bg-blue px-7 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Request a quote
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What's involved ───────────────────────────────────────────── */}
      <section className="bg-tint">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
          <Reveal>
            <p className={eyebrowClasses}>What&rsquo;s involved</p>
            <h2 className="mt-4 max-w-[560px] text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
              How we approach {service.title.toLowerCase()}.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[6px] border border-hairline-2 bg-hairline-2 sm:grid-cols-2 lg:grid-cols-3">
            {service.categories.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col bg-tint p-7 lg:p-8">
                  <h3 className="text-[18px] font-semibold text-ink">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7]">
                    {cat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <Reveal>
          <p className={eyebrowClasses}>More services</p>
          <h2 className="mt-4 text-[26px] leading-[1.25] font-medium tracking-[-0.01em] text-ink lg:text-[32px]">
            Explore what else we do.
          </h2>
        </Reveal>
        <div className="mt-10">
          {others.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
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
              Got a project in mind? We&rsquo;re here to help.
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
              Tell us what you&rsquo;re seeing and we&rsquo;ll come back to you
              with straight answers and a clear next step.
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

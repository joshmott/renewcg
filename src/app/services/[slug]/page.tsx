import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceIcon } from "@/components/art";
import {
  Arrow,
  ButtonLink,
  Check,
  Container,
  CtaBanner,
  Eyebrow,
} from "@/components/ui";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="blueprint-grid border-b border-brand-100 bg-cream-100">
        <Container className="py-16 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-ink/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/services" className="hover:text-brand-600 hover:underline">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-brand-700">
                {service.shortTitle}
              </li>
            </ol>
          </nav>
          <div className="mt-8 flex items-start gap-5">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-cream-100 sm:flex">
              <ServiceIcon slug={service.slug} className="h-9 w-9" />
            </span>
            <div>
              {service.flagship && <Eyebrow>Our specialty</Eyebrow>}
              <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-balance text-brand-800 sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
                {service.intro}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              {service.description.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-brand-800">
              What this covers
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4 text-sm font-semibold text-ink/85"
                >
                  <Check />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-brand-600 p-8 text-cream-100">
                <h2 className="text-xl font-bold">Start the conversation</h2>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/85">
                  {service.idealFor}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink href="/contact" variant="cream">
                    Request a quote <Arrow />
                  </ButtonLink>
                  <a
                    href={site.contact.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream-100/60 px-6 py-3 text-sm font-bold text-cream-100 transition-colors hover:border-cream-100 hover:bg-cream-100 hover:text-brand-800"
                  >
                    Call {site.contact.phone}
                  </a>
                </div>
                <p className="mt-5 text-xs text-cream-100/70">
                  {site.credentials.licence}
                  <br />
                  {site.credentials.insurance}
                </p>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-white p-8">
                <h2 className="text-xs font-bold tracking-[0.2em] text-brand-500 uppercase">
                  Other services
                </h2>
                <ul className="mt-4 space-y-3">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between gap-3 text-sm font-bold text-brand-700 hover:text-brand-600"
                      >
                        <span className="group-hover:underline">
                          {s.shortTitle}
                        </span>
                        <Arrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <CtaBanner
        title={`Talk to us about ${service.shortTitle.toLowerCase()}`}
        lede="Send through drawings, defect reports or just a description of what you need — we'll respond with straight answers and a clear next step."
      />
    </>
  );
}

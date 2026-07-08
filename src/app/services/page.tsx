import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/art";
import {
  Arrow,
  ButtonLink,
  Check,
  Container,
  CtaBanner,
  PageHero,
} from "@/components/ui";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Class 2 remedial building works, residential renovations, home extensions, new builds and commercial fit outs — licensed across NSW.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Licensed for every stage of a building's life"
        lede="Our specialty is Class 2 remedial building work — and the forensic standard that demands shapes everything else we build, from home renovations to commercial fit outs."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-8">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className={`grid gap-8 rounded-3xl border p-8 sm:p-10 lg:grid-cols-2 lg:gap-14 ${
                service.flagship
                  ? "border-brand-700 bg-brand-900 text-cream-100"
                  : "border-brand-100 bg-white"
              }`}
            >
              <div>
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                      service.flagship
                        ? "bg-cream-100 text-brand-700"
                        : "bg-brand-50 text-brand-600"
                    }`}
                  >
                    <ServiceIcon slug={service.slug} className="h-8 w-8" />
                  </span>
                  <p
                    className={`text-xs font-bold tracking-[0.2em] uppercase ${
                      service.flagship ? "text-cream-100/60" : "text-brand-500"
                    }`}
                  >
                    {service.flagship ? "Our specialty" : `Service ${String(i + 1).padStart(2, "0")}`}
                  </p>
                </div>
                <h2
                  className={`mt-5 text-2xl font-bold tracking-tight text-balance sm:text-3xl ${
                    service.flagship ? "text-cream-100" : "text-brand-800"
                  }`}
                >
                  {service.title}
                </h2>
                <p
                  className={`mt-4 leading-relaxed ${
                    service.flagship ? "text-cream-100/80" : "text-ink/70"
                  }`}
                >
                  {service.intro}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    service.flagship ? "text-cream-100/70" : "text-ink/60"
                  }`}
                >
                  <span className="font-bold">Ideal for: </span>
                  {service.idealFor}
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <ButtonLink
                    href={`/services/${service.slug}`}
                    variant={service.flagship ? "cream" : "primary"}
                  >
                    Service details <Arrow />
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    variant={service.flagship ? "creamOutline" : "outline"}
                  >
                    Request a quote
                  </ButtonLink>
                </div>
              </div>
              <div className="lg:pt-2">
                <h3
                  className={`text-xs font-bold tracking-[0.2em] uppercase ${
                    service.flagship ? "text-cream-100/60" : "text-brand-500"
                  }`}
                >
                  What&apos;s included
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className={`flex items-start gap-2.5 text-sm font-medium ${
                        service.flagship ? "text-cream-100/90" : "text-ink/80"
                      }`}
                    >
                      <Check tone={service.flagship ? "cream" : "blue"} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-brand-100 bg-white py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-brand-800">
            Something outside these categories?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            If it involves building work in NSW, there&apos;s a good chance we
            can help — or point you to someone who can.{" "}
            <Link href="/contact" className="font-bold text-brand-600 underline">
              Ask us
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

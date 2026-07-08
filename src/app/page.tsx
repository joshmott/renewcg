import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { ServiceCard, ProjectCard } from "@/components/cards";
import {
  Arrow,
  ButtonLink,
  Check,
  Container,
  CtaBanner,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const heroStats = [
  { value: "Class 2", label: "Remedial works specialists" },
  { value: "NSW", label: "Licensed, residential & commercial" },
  { value: "DBP Act", label: "Compliant delivery & declared designs" },
  { value: "End-to-end", label: "Inspection to warranty" },
];

const whyUs = [
  {
    title: "Licensed & insured, residential and commercial",
    body: "We hold a NSW contractor licence covering both residential and commercial building work, backed by full public liability insurance — one accountable builder across every class of project.",
  },
  {
    title: "Remedial expertise behind everything we build",
    body: "We spend our days fixing other builders' defects. That forensic understanding of how buildings fail — water, movement, corrosion — is designed out of everything we construct new.",
  },
  {
    title: "Transparent scopes, honest programs",
    body: "Detailed scopes of work, itemised pricing and build programs we actually keep. You'll never be guessing where your project is up to or what a variation really costs.",
  },
  {
    title: "Compliance you can hand to a lawyer",
    body: "On Class 2 work we deliver under the Design and Building Practitioners Act — regulated designs, declared variations and a documentation trail that protects the owners corporation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consult & inspect",
    body: "We visit the site, listen to what you need, and — on remedial work — investigate the defect properly before anyone talks numbers.",
  },
  {
    step: "02",
    title: "Scope & proposal",
    body: "You receive a detailed scope of works and transparent, itemised pricing. No allowances hiding surprises, no ambiguity about inclusions.",
  },
  {
    step: "03",
    title: "Delivery",
    body: "Our team and trusted trades deliver to program, with weekly plain-language updates and a site kept safe, clean and considerate of neighbours and residents.",
  },
  {
    step: "04",
    title: "Handover & warranty",
    body: "Completion documentation, compliance certificates and statutory warranties — and we stay reachable long after the scaffold comes down.",
  },
];

/* [PLACEHOLDER] Sample testimonials — replace with real client quotes. */
const testimonials = [
  {
    quote:
      "After years of failed patch repairs, Renew found the actual source of the water ingress and fixed it once. Their reporting made my job with the owners corporation easy.",
    name: "Strata Manager",
    detail: "48-unit residential building, Sydney",
  },
  {
    quote:
      "The program they gave us at the start was the program they delivered. Our fit out opened on the day they promised, fully certified.",
    name: "Business Owner",
    detail: "Commercial fit out, Parramatta",
  },
  {
    quote:
      "They treated our home like their own — clean site, honest updates every week, and a finish our architect called the best she'd seen from a builder.",
    name: "Homeowner",
    detail: "Extension & renovation, Inner West",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="blueprint-grid relative overflow-hidden border-b border-brand-100 bg-cream-100">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-brand-600"
              />
              NSW licensed builder — residential &amp; commercial
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-brand-800 sm:text-5xl lg:text-6xl">
              Buildings fail.
              <br />
              <span className="text-brand-600">We renew them.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Renew Construction Group specialises in Class 2 remedial building
              works — and brings that same forensic standard to renovations,
              extensions, new builds and commercial fit outs across NSW.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">
                Request a quote <Arrow />
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore our services
              </ButtonLink>
            </div>
            <p className="mt-8 text-sm font-semibold text-ink/60">
              {site.credentials.licence} · {site.credentials.serviceArea}
            </p>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl border-2 border-brand-200"
              />
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-2xl border-2 border-dashed border-brand-300"
              />
              <LogoMark className="rotate-[-4deg] text-8xl shadow-2xl shadow-brand-600/30" />
            </div>
          </div>
        </Container>

        <div className="border-t border-brand-100 bg-white/70 backdrop-blur">
          <Container>
            <ul className="grid grid-cols-2 divide-brand-100 py-6 max-lg:gap-6 lg:grid-cols-4 lg:divide-x">
              {heroStats.map((stat) => (
                <li key={stat.value} className="lg:px-8 lg:first:pl-0">
                  <p className="text-2xl font-bold text-brand-700">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="One builder, every stage of a building's life"
              lede="From rectifying defects in occupied apartment buildings to delivering brand-new homes and commercial spaces — licensed for it all in NSW."
            />
            <ButtonLink href="/services" variant="outline" className="mb-1">
              All services <Arrow />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-brand-600 p-7 text-cream-100">
              <h3 className="text-xl font-bold">Not sure where to start?</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/85">
                Send us a defect report, an architect&apos;s drawing or just a
                description of the problem — we&apos;ll tell you honestly
                whether we&apos;re the right builder for it.
              </p>
              <ButtonLink href="/contact" variant="cream" className="mt-6 self-start">
                Get in touch <Arrow />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Flagship: Class 2 remedial ───────────────────────────────────── */}
      <section className="bg-brand-900 text-cream-100">
        <div className="blueprint-grid-dark">
          <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                tone="cream"
                eyebrow="Our specialty"
                title="Class 2 remedial building works, done once and done right"
                lede="Apartment building defects demand more than a builder with a caulking gun. They demand investigation, regulated design, careful staging around residents — and a contractor whose paperwork protects the owners corporation."
              />
              <div className="mt-8 space-y-4 text-cream-100/80">
                <p className="leading-relaxed">
                  We work with strata managers, owners corporations and building
                  consultants to take Class 2 buildings from defect report to
                  durable rectification, delivered in line with the{" "}
                  <em className="not-italic font-semibold text-cream-100">
                    Design and Building Practitioners Act 2020 (NSW)
                  </em>
                  .
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/services/class-2-remedial-works" variant="cream">
                  Remedial services <Arrow />
                </ButtonLink>
                <ButtonLink href="/contact" variant="creamOutline">
                  Discuss a defect report
                </ButtonLink>
              </div>
            </div>
            <div className="lg:pt-10">
              <ul className="grid gap-3 sm:grid-cols-2">
                {services[0].capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-cream-100/15 bg-brand-800/60 p-4 text-sm font-semibold"
                  >
                    <Check tone="cream" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Renew"
            title="Built on the discipline of fixing what others got wrong"
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-cream-100"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="blueprint-grid border-y border-brand-100 bg-cream-100 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A straight line from first call to final sign-off"
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="rounded-2xl border border-brand-100 bg-white p-7"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-brand-500">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Featured projects ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent work"
              title="Projects that show the standard"
            />
            <ButtonLink href="/projects" variant="outline" className="mb-1">
              All projects <Arrow />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="border-t border-brand-100 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What clients say" title="Word from the people we build for" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.detail}
                className="flex flex-col rounded-2xl border border-brand-100 bg-cream-50 p-7"
              >
                <span
                  aria-hidden="true"
                  className="text-5xl leading-none font-bold text-brand-300"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 leading-relaxed text-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-brand-100 pt-4">
                  <p className="font-bold text-brand-800">{t.name}</p>
                  <p className="text-sm text-ink/60">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink/40">
            Sample testimonials shown — replaced with verified client reviews
            at launch.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

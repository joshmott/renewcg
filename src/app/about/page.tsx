import type { Metadata } from "next";
import { LogoMark } from "@/components/Logo";
import {
  Arrow,
  ButtonLink,
  Check,
  Container,
  CtaBanner,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Renew Construction Group is a NSW-licensed builder specialising in Class 2 remedial works and delivering residential and commercial projects, founded on the belief that buildings deserve a second life done right.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Fix the cause, not the symptom",
    body: "Patch repairs are how small defects become big ones. We diagnose properly, then rectify once — even when that's the harder conversation to have up front.",
  },
  {
    title: "Paperwork is part of the build",
    body: "Declared designs, compliance certificates, warranties, weekly reports. On regulated work the documentation is the protection — so we treat it with the same care as the workmanship.",
  },
  {
    title: "Respect for the people in the building",
    body: "Most of our remedial work happens around residents in occupation. Clean sites, clear notice, considerate hours — the way we'd want our own homes treated.",
  },
  {
    title: "Say it straight",
    body: "Honest feasibility advice, itemised pricing, and bad news delivered early instead of buried in a variation. Clients stay with us because they always know where they stand.",
  },
];

const credentials = [
  site.credentials.licence + " — verifiable via the NSW Fair Trading public register",
  site.credentials.dbpRegistration +
    " — Class 2 work under the Design and Building Practitioners Act 2020 (NSW)",
  site.credentials.insurance,
  "Residential & commercial projects across " + site.credentials.serviceArea,
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Builders who believe buildings deserve a second life"
        lede="Renew Construction Group exists because too many good buildings are let down by bad building work. We renew them — and we build new work to the standard renewal demands."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80 lg:col-span-7">
            <p>
              Renew Construction Group is a NSW-licensed building company
              working across residential and commercial projects, with a core
              specialty in{" "}
              <strong className="text-brand-800">
                Class 2 remedial building works
              </strong>{" "}
              — rectifying defects in apartment buildings on behalf of owners
              corporations and strata managers.
            </p>
            <p>
              Remedial work is unforgiving. You inherit someone else&apos;s
              mistakes, you work around residents, and every repair has to hold
              up to expert scrutiny under the Design and Building Practitioners
              Act. That discipline is our foundation — and it travels with us
              onto every renovation, extension, new build and fit out we
              deliver.
            </p>
            <p>
              We keep the team deliberately lean and the standard deliberately
              high: a core crew of directly-engaged builders, backed by
              long-standing specialist trades who know how we work and what we
              accept. One point of accountability, from first inspection to
              final certificate.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="blueprint-grid flex aspect-square items-center justify-center rounded-3xl border border-brand-100 bg-cream-100">
              <LogoMark className="rotate-[-4deg] text-5xl shadow-2xl shadow-brand-600/30 sm:text-6xl" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-100 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="The standards behind the name"
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-cream-100"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-800">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Licences & assurance"
              title="Credentials you can verify"
              lede="Every claim on this site is backed by a licence number you can check with NSW Fair Trading, and insurance certificates we'll provide with any proposal."
            />
            <ButtonLink href="/contact" className="mt-8">
              Request our credentials <Arrow />
            </ButtonLink>
          </div>
          <ul className="space-y-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-5 font-semibold text-ink/85"
              >
                <Check />
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        title="Let's talk about your building"
        lede="Whether it's a defect report that needs actioning or a project still on paper, we're happy to have the first conversation with no obligation."
      />
    </>
  );
}

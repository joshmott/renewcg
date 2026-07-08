import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards";
import { Container, CtaBanner, PageHero } from "@/components/ui";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of remedial, residential and commercial building projects delivered by Renew Construction Group across NSW.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that shows the standard"
        lede="A cross-section of what we deliver — remedial rectifications for owners corporations, family homes renewed and extended, and commercial spaces built to trade."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-ink/40">
            Representative projects shown with illustrative graphics — project
            photography added as case studies are published.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Want yours on this page?"
        lede="Every project here started with a conversation. Tell us what you're planning and we'll tell you honestly how we'd deliver it."
      />
    </>
  );
}

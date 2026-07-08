import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";
import type { Project } from "@/lib/projects";
import { ProjectArt, ServiceIcon } from "@/components/art";
import { Arrow } from "@/components/ui";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-brand-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/10"
    >
      {service.flagship && (
        <span className="absolute top-5 right-5 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-cream-100 uppercase">
          Our specialty
        </span>
      )}
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-cream-100">
        <ServiceIcon slug={service.slug} className="h-8 w-8" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-brand-800">
        {service.shortTitle}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
        {service.intro}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:underline">
        Learn more <Arrow />
      </span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/10">
      <div className="relative aspect-[5/3] overflow-hidden border-b border-brand-100 bg-cream-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="blueprint-grid flex h-full items-end justify-center text-brand-600">
            <ProjectArt category={project.category} className="h-[88%] w-auto" />
          </div>
        )}
        <span className="absolute top-4 left-4 rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-cream-100 uppercase">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-500 uppercase">
          {project.location}
        </p>
        <h3 className="mt-2 text-xl font-bold text-brand-800">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
          {project.summary}
        </p>
        <ul className="mt-5 space-y-1.5 border-t border-brand-100 pt-5 text-sm text-ink/75">
          {project.scope.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="font-bold text-brand-500">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

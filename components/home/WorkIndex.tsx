"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { workSection } from "@/content/site";
import { publishedProjects } from "@/content/projects";
import type { Project } from "@/content/types";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

/**
 * La captura real, apilada como un mazo de pantallas. Sólo la de
 * adelante es nítida: las de atrás son la misma imagen, desenfocada,
 * y sugieren que hay más pantallas detrás de la que se ve.
 */
function ProjectMockup({ project }: { project: Project }) {
  const shot = project.shots?.[0];
  if (!shot) return null;

  return (
    <div className="relative">
      {/* Las dos capas de atrás: mismo recorte, corridas y difuminadas. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rotate-1 rounded-sm border border-rule bg-paper-sunken opacity-40 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[0.5deg] rounded-sm border border-rule bg-paper-raised opacity-70"
      />

      <div className="relative overflow-hidden rounded-sm border border-rule bg-paper-raised shadow-[0_18px_36px_-24px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-1">
        {/* Barra de ventana: ancla la captura como producto, no como imagen suelta. */}
        <div className="flex items-center gap-1.5 border-b border-rule bg-paper-sunken px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-rule-strong" />
          <span className="h-2 w-2 rounded-full bg-rule-strong" />
          <span className="h-2 w-2 rounded-full bg-rule-strong" />
        </div>
        <Image
          src={shot.src}
          alt=""
          aria-hidden="true"
          width={1800}
          height={1125}
          sizes="(max-width: 1024px) 90vw, 520px"
          className="block w-full"
        />
      </div>
    </div>
  );
}

function ProjectRow({ index, project }: { index: number; project: Project }) {
  const { t } = useLang();

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group grid grid-cols-1 gap-x-10 gap-y-8 border-t border-rule py-12 first:border-t-0 md:grid-cols-12 md:items-center md:py-16"
    >
      <div className="md:col-span-6 md:order-1">
        <span className="tnum font-mono text-[13px] text-correction">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display-tight mt-2 text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[0.98] text-ink">
          {project.name}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-2">
          {t(project.tagline)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.chips.map((chip) => (
            <li
              key={chip.slug}
              className="flex items-center gap-1.5 rounded-sm border border-rule bg-paper-raised px-2 py-1"
            >
              <TechIcon slug={chip.slug} className="h-[12px] w-[12px] shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-2">
                {chip.name}
              </span>
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-2 transition-colors duration-200 group-hover:text-correction">
          {t(workSection.caseLabel)}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>

      <div className="md:col-span-6 md:order-2">
        <ProjectMockup project={project} />
      </div>
    </Link>
  );
}

export function WorkIndex() {
  const { t } = useLang();

  return (
    <section id="proyectos" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <SectionHead
          number="03"
          eyebrow={t(workSection.eyebrow)}
          title={t(workSection.title)}
          lede={t(workSection.intro)}
        />

        <RevealGroup className="mt-4" stagger={0.08}>
          {publishedProjects.map((project, index) => (
            <RevealItem key={project.slug}>
              <ProjectRow index={index} project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

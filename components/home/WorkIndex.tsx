"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { workSection } from "@/content/site";
import { publishedProjects } from "@/content/projects";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Índice de trabajo, no galería de tarjetas.
 * Cada proyecto es una entrada del registro: año, nombre, qué es, con qué.
 * El hover no decora: revela el bloque completo como una ficha abierta.
 */
export function WorkIndex() {
  const { t } = useLang();

  return (
    <section id="trabajo" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div>
            <p className="label">{t(workSection.eyebrow)}</p>
            <h2 className="font-display-tight mt-3 text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-tight text-ink">
              {t(workSection.title)}
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-2">
            {t(workSection.intro)}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 border-t border-rule" stagger={0.07}>
          {publishedProjects.map((project) => (
            <RevealItem key={project.slug}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="group relative block border-b border-rule py-7 transition-transform duration-200 ease-[var(--ease-out)] active:scale-[0.995] sm:py-8"
              >
                {/* El fondo se descubre de izquierda a derecha, como si se
                    corriera una ficha del fichero. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-[-1.25rem] inset-y-0 -z-10 rounded-sm bg-paper-raised transition-[clip-path] duration-[420ms] ease-[var(--ease-out)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-12 md:items-baseline">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:col-span-2 md:block">
                    <span className="label tnum">{project.year}</span>
                    <span className="label md:mt-2.5 md:block">{t(project.kind)}</span>
                    <span className="label text-correction md:hidden">
                      {t(project.status)}
                    </span>
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="font-display text-[clamp(1.6rem,3vw,2.15rem)] font-semibold leading-none text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-2">
                      {t(project.tagline)}
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <p className="label hidden text-correction md:block">
                      {t(project.status)}
                    </p>
                    <ul className="mt-0 flex flex-wrap gap-x-3 gap-y-1 md:mt-3">
                      {project.chips.map((chip) => (
                        <li key={chip} className="font-mono text-[12px] text-ink-3">
                          {chip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden justify-end md:col-span-1 md:flex">
                    <span
                      aria-hidden="true"
                      className="font-mono text-lg text-ink-3 transition-[transform,color] duration-300 ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:text-correction"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

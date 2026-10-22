"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { hero, contact, site } from "@/content/site";
import { getProject } from "@/content/projects";
import { CountUp } from "@/components/motion/Correction";
import { TechIcon } from "@/components/ui/TechIcon";
import { MailIcon, LinkedInMark, DownloadIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import { CopyIconButton } from "@/components/ui/CopyIconButton";
import { SECTIONS } from "@/components/chrome/Header";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const SECTION_IDS = SECTIONS.map((s) => s.id);

/** Entrada orquestada al cargar: cada pieza sale de la anterior. */
function enter(delay: number, reduced: boolean | null) {
  return {
    initial: { opacity: 0, transform: reduced ? "none" : "translateY(16px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  };
}

/** Fila superior: cómo contactar sin bajar, y el CV. */
function TopActions() {
  const { t } = useLang();
  const links = [
    site.whatsapp
      ? { href: site.whatsapp, label: "WhatsApp", icon: <TechIcon slug="whatsapp" className="h-[15px] w-[15px]" /> }
      : null,
    site.github
      ? { href: site.github, label: "GitHub", icon: <TechIcon slug="github" className="h-[15px] w-[15px]" /> }
      : null,
    site.linkedin
      ? { href: site.linkedin, label: "LinkedIn", icon: <LinkedInMark className="h-[15px] w-[15px]" /> }
      : null,
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <div className="flex items-center gap-2">
        <CopyIconButton
          value={site.email}
          label="Email"
          icon={<MailIcon className="h-[15px] w-[15px] text-ink-2" />}
        />
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={item.label}
            title={item.label}
            className="grid h-8 w-8 place-items-center rounded-full border border-rule bg-paper-raised transition-[transform,border-color] duration-150 ease-[var(--ease-out)] hover:border-rule-strong active:scale-[0.94]"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <a
        href={t(contact.cvHref)}
        download
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 transition-colors duration-200 hover:text-ink"
      >
        <DownloadIcon className="h-[13px] w-[13px]" />
        {t(contact.cvLabel)}
      </a>
    </div>
  );
}

/**
 * El menú grande: seis píldoras, la misma numeración que el header
 * condensado. El color marca dónde está parado el visitante — el
 * mismo criterio de todo el sitio, aplicado a su elemento más grande.
 */
function SectionPills() {
  const { t } = useLang();
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav aria-label={t({ es: "Secciones", en: "Sections" })} className="flex flex-col items-start gap-2">
      {SECTIONS.map((item) => {
        // En Inicio no se marca nada: la píldora más saturada de la
        // primera pantalla no puede ser la que lleva a donde ya estás.
        const isActive = active === item.id && item.id !== "inicio";
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "group flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-[background-color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-out)] active:scale-[0.98]",
              isActive
                ? "border-correction bg-correction text-paper"
                : "border-rule bg-paper-raised text-ink hover:translate-x-1 hover:border-correction hover:shadow-[0_10px_28px_-8px_rgba(195,53,43,0.35)]",
            )}
          >
            <span
              className={cn(
                "tnum font-mono text-[11px]",
                isActive ? "text-paper/70" : "text-ink-3",
              )}
            >
              {item.num}
            </span>
            <span className="font-display text-[15px] font-semibold leading-none">
              {t(item.label)}
            </span>
            <ArrowUpRightIcon
              className={cn(
                "h-3 w-3 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                isActive ? "text-paper/70" : "text-ink-3",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}

export function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const featured = getProject(hero.featured.slug);

  return (
    <section id="inicio" className="relative overflow-clip pb-24 pt-32 md:pb-32 md:pt-40">
      {/* Retícula de plano: la superficie sobre la que se anota. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--rule) 1px, transparent 1px), linear-gradient(to bottom, var(--rule) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(120% 80% at 15% 0%, #000 0%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 15% 0%, #000 0%, transparent 68%)",
        }}
      />

      {/* Tres piezas en la grilla: presentación, ficha y menú. En celular
          van en ese orden, así la ficha aparece antes que las seis píldoras;
          en escritorio la ficha ocupa la columna derecha a lo alto. */}
      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10">
        <div className="lg:col-span-7 lg:row-start-1">
          <motion.div {...enter(0, reduced)}>
            <TopActions />
          </motion.div>

          <motion.h1
            className="font-display-tight mt-8 text-[clamp(2.6rem,7.5vw,5.5rem)] font-bold leading-[0.94] text-ink"
            {...enter(0.08, reduced)}
          >
            {site.name}
          </motion.h1>

          <motion.div className="mt-5" {...enter(0.12, reduced)}>
            <p className="font-display text-[clamp(1.15rem,2.2vw,1.45rem)] font-semibold leading-snug text-ink">
              {t(hero.role)}
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              {hero.stack.map((tech) => (
                <li key={tech.slug} className="flex items-center gap-1.5">
                  <TechIcon slug={tech.slug} className="h-[14px] w-[14px] shrink-0" />
                  <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-2">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            className="mt-6 max-w-lg text-[clamp(1.1rem,1.7vw,1.3rem)] leading-snug text-ink"
            {...enter(0.15, reduced)}
          >
            {t(hero.headline)}
          </motion.p>
        </div>

        {/* La ficha: el proyecto más fuerte, legible sin contexto previo. */}
        {featured && (
          <motion.figure
            className="relative self-start lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:pt-3"
            {...enter(0.3, reduced)}
          >
            <div className="rounded-sm border border-rule bg-paper-raised p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="label">{t(hero.featured.label)}</p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-correction" />
                  {t(hero.featured.status)}
                </span>
              </div>

              <figcaption className="mt-4">
                <p className="font-display-tight text-[2rem] font-bold leading-none text-ink">
                  {featured.name}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                  {t(hero.featured.summary)}
                </p>
              </figcaption>

              {featured.testimonial?.short && (
                <blockquote className="mt-5 border-l-2 border-correction pl-4">
                  <p className="text-[14px] leading-snug text-ink">
                    “{t(featured.testimonial.short)}”
                  </p>
                  <footer className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
                    {featured.testimonial.name} · {featured.testimonial.org}
                  </footer>
                </blockquote>
              )}

              {featured.metrics && (
                <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-rule bg-rule">
                  {featured.metrics.map((metric, index) => (
                    <div key={metric.value} className="bg-paper-raised px-4 py-4">
                      <dt className="sr-only">{t(metric.label)}</dt>
                      <dd>
                        <CountUp
                          value={metric.value}
                          delay={0.6 + index * 0.08}
                          className="font-display-tight block text-[1.9rem] font-bold leading-none text-ink"
                        />
                        <span aria-hidden="true" className="mt-2 block text-[12px] leading-snug text-ink-3">
                          {t(metric.label)}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="mt-5 flex flex-wrap gap-2">
                {featured.chips.map((chip) => (
                  <li
                    key={chip.slug}
                    className="flex items-center gap-1.5 rounded-sm border border-rule px-2 py-1"
                  >
                    <TechIcon slug={chip.slug} className="h-[12px] w-[12px] shrink-0" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-2">
                      {chip.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-5">
                <Link
                  href={`/proyectos/${featured.slug}`}
                  className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-correction transition-transform duration-150 ease-[var(--ease-out)] active:scale-[0.98]"
                >
                  {t(hero.featured.linkLabel)}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-2 transition-colors duration-200 hover:text-ink"
                  >
                    {t(hero.featured.liveLabel)}
                    <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span className="normal-case tracking-normal text-ink-3">· {t(hero.featured.liveNote)}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.figure>
        )}

        <motion.div className="lg:col-span-7 lg:row-start-2" {...enter(0.24, reduced)}>
          <SectionPills />
        </motion.div>
      </div>
    </section>
  );
}

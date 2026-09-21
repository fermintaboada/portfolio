"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { hero, caseLabels, contact, site } from "@/content/site";
import { CountUp, StrikeOut } from "@/components/motion/Correction";
import { TechIcon } from "@/components/ui/TechIcon";
import { MailIcon, LinkedInMark, DownloadIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
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
  const items = [
    { href: `mailto:${site.email}`, label: "Email", icon: <MailIcon className="h-[15px] w-[15px] text-ink-2" /> },
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
        {items.map((item) => (
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
        const isActive = active === item.id;
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

      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div {...enter(0, reduced)}>
            <TopActions />
          </motion.div>

          <motion.h1
            className="font-display-tight mt-8 text-[clamp(2.6rem,7.5vw,5.5rem)] font-bold leading-[0.94] text-ink"
            {...enter(0.08, reduced)}
          >
            {site.name}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-2"
            {...enter(0.15, reduced)}
          >
            {t(hero.headline)}
          </motion.p>

          <motion.div className="mt-10" {...enter(0.24, reduced)}>
            <SectionPills />
          </motion.div>
        </div>

        {/* La ficha: el gesto que define la página. */}
        <motion.figure
          className="relative lg:col-span-5 lg:pt-3"
          {...enter(0.3, reduced)}
        >
          <div className="rounded-sm border border-rule bg-paper-raised p-6 sm:p-7">
            <figcaption className="max-w-[36ch] font-mono text-[12px] leading-relaxed text-ink-3">
              {t(hero.proof.caption)}
            </figcaption>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="label w-20 shrink-0">{t(caseLabels.showed)}</span>
              <StrikeOut className="font-display text-[2.1rem] font-semibold leading-none text-ink-3">
                {hero.proof.wrong}
              </StrikeOut>
            </div>

            <div className="mt-5 flex items-baseline gap-3 border-t border-rule pt-5">
              <span className="label w-20 shrink-0 text-correction">{t(caseLabels.was)}</span>
              <CountUp
                value={hero.proof.right}
                delay={0.75}
                className="font-display-tight text-[clamp(2.6rem,7vw,3.6rem)] font-bold leading-none text-ink"
              />
            </div>

            <p className="mt-6 border-t border-rule pt-5 text-[14px] leading-relaxed text-ink-2">
              {t(hero.proof.note)}
            </p>

            <Link
              href={hero.proof.href}
              className="group mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-correction transition-transform duration-150 ease-[var(--ease-out)] active:scale-[0.98]"
            >
              {t(hero.proof.linkLabel)}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

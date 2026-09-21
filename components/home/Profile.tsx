"use client";

import { useLang } from "@/lib/i18n";
import { profile } from "@/content/profile";
import { workSection } from "@/content/site";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

/** Fila de la experiencia o la formación: número, cargo, cuerpo y chips. */
function RoleRow({
  index,
  period,
  title,
  org,
  body,
  chips,
}: {
  index: number;
  period: string;
  title: string;
  org: string;
  body: string;
  chips?: { name: string; slug: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-2 border-t border-rule py-6 sm:grid-cols-12">
      <div className="flex items-baseline gap-3 sm:col-span-1">
        <span className="tnum font-mono text-[12px] text-correction">
          {String(index + 1).padStart(1, "0")}
        </span>
      </div>
      <div className="sm:col-span-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h4 className="font-display text-[16px] font-semibold leading-snug text-ink">{title}</h4>
          <span className="tnum font-mono text-[11px] text-ink-3 sm:hidden">{period}</span>
        </div>
        <p className="mt-0.5 text-[13px] text-ink-3">{org}</p>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-2">{body}</p>
        {chips && chips.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {chips.map((chip) => (
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
        )}
      </div>
      <span className="tnum hidden text-right font-mono text-[11px] text-ink-3 sm:col-span-3 sm:block">
        {period}
      </span>
    </div>
  );
}

export function Profile() {
  const { t } = useLang();

  return (
    <section id="perfil" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <SectionHead number="01" eyebrow={t(profile.eyebrow)} title={t(profile.title)} />

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* Izquierda: experiencia, la mitad del relato que un CV cuenta con fechas. */}
          <div className="lg:col-span-7">
            <Reveal className="flex items-baseline justify-between border-b border-rule pb-3">
              <p className="label">{t(profile.experienceLabel)}</p>
            </Reveal>
            <RevealGroup stagger={0.06}>
              {profile.experience.map((role, index) => (
                <RevealItem key={role.org.es}>
                  <RoleRow
                    index={index}
                    period={role.period}
                    title={t(role.title)}
                    org={t(role.org)}
                    body={t(role.body)}
                    chips={role.chips}
                  />
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.05}>
              <a
                href="#proyectos"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-2 transition-colors duration-200 hover:text-ink"
              >
                <span className="relative">
                  {t(workSection.eyebrow)}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-rule-strong transition-transform duration-300 ease-[var(--ease-out)] group-hover:bg-correction"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            </Reveal>
          </div>

          {/* Derecha: la tesis y los cuatro datos que responden lo primero
              que alguien pregunta — de dónde, cómo, en qué, en qué idioma. */}
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <p className="font-display max-w-sm text-[22px] font-semibold leading-snug text-ink">
                {t(profile.lede)}
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-2 border-y border-rule" stagger={0.04}>
              {profile.facts.map((fact, index) => (
                <RevealItem
                  key={fact.label.es}
                  className={
                    index % 2 === 0
                      ? "border-r border-rule py-5 pr-4"
                      : "py-5 pl-4"
                  }
                >
                  <p className="label">{t(fact.label)}</p>
                  <p className="mt-2 text-[14px] leading-snug text-ink">{t(fact.value)}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1} className="mt-10">
              <p className="label border-b border-rule pb-3">{t(profile.educationLabel)}</p>
              <div>
                {profile.education.map((edu, index) => (
                  <RoleRow
                    key={edu.org.es}
                    index={index}
                    period={edu.period}
                    title={t(edu.title)}
                    org={t(edu.org)}
                    body={t(edu.body)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

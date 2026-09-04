"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang, type L } from "@/lib/i18n";
import { caseLabels, nav } from "@/content/site";
import type { Finding, Project, Shot, Step } from "@/content/types";
import { Reveal, RevealGroup, RevealItem, ClipReveal } from "@/components/motion/Reveal";
import { CountUp, StrikeOut } from "@/components/motion/Correction";

function SectionHead({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return (
    <Reveal>
      <p className="label">{eyebrow}</p>
      {title && (
        <h2 className="font-display-tight mt-3 max-w-2xl text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-tight text-ink">
          {title}
        </h2>
      )}
    </Reveal>
  );
}

function Note({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-rule py-4 sm:grid-cols-12">
      <dt className="label sm:col-span-3">{label}</dt>
      <dd className="text-[15px] leading-relaxed text-ink-2 sm:col-span-9">{children}</dd>
    </div>
  );
}

/** Una captura con su pie. El marco es fino a propósito: la imagen manda. */
function ShotFigure({ shot, priority = false }: { shot: Shot; priority?: boolean }) {
  const { t } = useLang();

  return (
    <figure>
      <div className="overflow-hidden rounded-sm border border-rule bg-paper-raised">
        <Image
          src={shot.src}
          alt={t(shot.alt)}
          width={1800}
          height={1125}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1240px) 90vw, 1160px"
          className="block w-full transition-transform duration-[600ms] ease-[var(--ease-out)] hover:scale-[1.012]"
        />
      </div>
      <figcaption className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-2">
        {t(shot.caption)}
      </figcaption>
    </figure>
  );
}

function Shots({ shots }: { shots: Shot[] }) {
  const { t } = useLang();
  const [lead, ...rest] = shots;

  return (
    <section className="border-b border-rule py-16 md:py-20">
      <div className="shell">
        <SectionHead eyebrow={t(caseLabels.shots)} />
        <Reveal className="mt-8">
          <ShotFigure shot={lead} priority />
        </Reveal>

        {rest.length > 0 && (
          <RevealGroup className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2" stagger={0.08}>
            {rest.map((shot) => (
              <RevealItem key={shot.src}>
                <ShotFigure shot={shot} />
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  );
}

/**
 * Una secuencia numerada. La numeración se gana: estos pasos ocurren
 * en ese orden y el orden es parte de lo que se explica.
 */
function StepsSection({
  eyebrow,
  block,
}: {
  eyebrow: string;
  block: { title: L; intro: L; steps: Step[] };
}) {
  const { t } = useLang();

  return (
    <section className="border-b border-rule py-16 md:py-20">
      <div className="shell">
        <SectionHead eyebrow={eyebrow} title={t(block.title)} />
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-2">{t(block.intro)}</p>
        </Reveal>

        <RevealGroup className="mt-12" stagger={0.06}>
          {block.steps.map((step, index) => (
            <RevealItem key={step.title.es}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-rule py-7 sm:grid-cols-12">
                <span className="label tnum sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[18px] font-semibold leading-snug text-ink sm:col-span-4">
                  {t(step.title)}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-2 sm:col-span-7">
                  {t(step.body)}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function FindingBlock({ finding }: { finding: Finding }) {
  const { t } = useLang();

  return (
    <article
      id={finding.id}
      className="scroll-mt-28 border-t border-rule-strong py-10 first:border-t-0 md:py-12"
    >
      <ClipReveal>
        <h3 className="font-display max-w-2xl text-[clamp(1.3rem,2.4vw,1.75rem)] font-semibold leading-snug text-ink">
          {t(finding.headline)}
        </h3>
      </ClipReveal>

      <Reveal delay={0.06} className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* El par de números: lo que se mostraba contra lo que era. */}
        <div className="lg:col-span-4">
          <div className="rounded-sm border border-rule bg-paper-raised p-6">
            <p className="label">{t(caseLabels.showed)}</p>
            <StrikeOut className="mt-2 block font-display text-[1.9rem] font-semibold leading-none text-ink-3">
              {finding.wrong}
            </StrikeOut>

            <p className="label mt-6 text-correction">{t(caseLabels.was)}</p>
            <CountUp
              value={finding.right}
              delay={0.5}
              className="mt-2 block font-display-tight text-[2.6rem] font-bold leading-none text-ink"
            />
          </div>
        </div>

        <dl className="lg:col-span-8">
          <Note label={t(caseLabels.cause)}>{t(finding.cause)}</Note>
          {finding.verification && (
            <Note label={t(caseLabels.verification)}>{t(finding.verification)}</Note>
          )}
          {finding.impact && <Note label={t(caseLabels.impact)}>{t(finding.impact)}</Note>}
          <Note label={t(caseLabels.fix)}>{t(finding.fix)}</Note>
        </dl>
      </Reveal>
    </article>
  );
}

export function CaseView({ project, next }: { project: Project; next?: Project }) {
  const { t, tl } = useLang();

  return (
    <main className="flex-1">
      {/* ── Cabecera del expediente ── */}
      <section className="border-b border-rule pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="shell">
          <Reveal>
            <p className="label">{t(project.domain)}</p>
            <h1 className="font-display-tight mt-5 text-[clamp(2.6rem,7vw,5rem)] font-bold leading-[0.95] text-ink">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-[clamp(1.05rem,2vw,1.35rem)] leading-snug text-ink-2">
              {t(project.tagline)}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-8 sm:grid-cols-4">
              {[
                { label: t(caseLabels.year), value: project.year },
                { label: t(caseLabels.status), value: t(project.status) },
                { label: t(caseLabels.role), value: t(project.role) },
                { label: t(caseLabels.domain), value: t(project.domain) },
              ].map((row) => (
                <div key={row.label}>
                  <dt className="label">{row.label}</dt>
                  <dd className="mt-2 text-[14px] leading-snug text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] uppercase tracking-[0.12em] text-correction hover:underline"
                  >
                    {t(caseLabels.live)} ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-2 hover:text-ink"
                  >
                    {t(caseLabels.repo)} ↗
                  </a>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── Qué es ── */}
      <section className="border-b border-rule py-16 md:py-20">
        <div className="shell grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead eyebrow={t(caseLabels.overview)} />
            <Reveal delay={0.05}>
              <p className="font-display mt-4 max-w-xs text-[19px] font-semibold leading-snug text-ink">
                {t(project.thesis)}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <RevealGroup className="space-y-5">
              {tl(project.overview).map((paragraph) => (
                <RevealItem key={paragraph.slice(0, 24)}>
                  <p className="max-w-2xl text-[16px] leading-relaxed text-ink-2">{paragraph}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── Capturas del producto real ── */}
      {project.shots && project.shots.length > 0 && <Shots shots={project.shots} />}

      {/* ── Números del proyecto ── */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="border-b border-rule py-14">
          <div className="shell">
            <RevealGroup
              className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
              stagger={0.05}
            >
              {project.metrics.map((metric) => (
                <RevealItem key={metric.value + metric.label.es}>
                  <p className="font-display-tight text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold leading-none text-ink">
                    <CountUp value={metric.value} />
                  </p>
                  <p className="mt-3 max-w-[22ch] text-[14px] leading-snug text-ink-2">
                    {t(metric.label)}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ── Arquitectura: acá el orden sí es información ── */}
      {project.flow && <StepsSection eyebrow={t(caseLabels.architecture)} block={project.flow} />}

      {/* ── Cómo se verifica que hace lo que dice ── */}
      {project.evaluation && (
        <StepsSection eyebrow={t(caseLabels.evaluation)} block={project.evaluation} />
      )}

      {/* ── Hallazgos ── */}
      {project.findings && project.findings.length > 0 && (
        <section className="border-b border-rule py-16 md:py-20">
          <div className="shell">
            <SectionHead eyebrow={t(caseLabels.findings)} />
            <Reveal delay={0.05}>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-2">
                {t(caseLabels.findingsIntro)}
              </p>
            </Reveal>
            <div className="mt-12">
              {project.findings.map((finding) => (
                <FindingBlock key={finding.id} finding={finding} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Decisiones ── */}
      {project.decisions && project.decisions.length > 0 && (
        <section className="border-b border-rule py-16 md:py-20">
          <div className="shell">
            <SectionHead eyebrow={t(caseLabels.decisions)} />
            <RevealGroup className="mt-10" stagger={0.05}>
              {project.decisions.map((decision) => (
                <RevealItem key={decision.title.es}>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-rule py-7 sm:grid-cols-12">
                    <div className="sm:col-span-5">
                      <h3 className="font-display text-[18px] font-semibold leading-snug text-ink">
                        {t(decision.title)}
                      </h3>
                      <p className="mt-2 font-mono text-[12px] leading-relaxed text-correction">
                        {t(decision.instead)}
                      </p>
                    </div>
                    <p className="text-[15px] leading-relaxed text-ink-2 sm:col-span-7">
                      {t(decision.body)}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ── Stack ── */}
      {project.stack && project.stack.length > 0 && (
        <section className="border-b border-rule py-16">
          <div className="shell">
            <SectionHead eyebrow={t(caseLabels.stack)} />
            <RevealGroup
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6"
              stagger={0.04}
            >
              {project.stack.map((group) => (
                <RevealItem key={group.label.es}>
                  <p className="label border-t border-rule pt-4">{t(group.label)}</p>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-[13px] leading-snug text-ink-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ── Testing e integración continua ── */}
      {project.engineering && (
        <section className="border-b border-rule py-16 md:py-20">
          <div className="shell grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead
                eyebrow={t(caseLabels.engineering)}
                title={t(project.engineering.title)}
              />
            </div>
            <RevealGroup className="lg:col-span-8" stagger={0.05}>
              {tl(project.engineering.items).map((item) => (
                <RevealItem key={item.slice(0, 24)}>
                  <p className="max-w-2xl border-t border-rule py-5 text-[15px] leading-relaxed text-ink-2">
                    {item}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* ── Cierre ── */}
      {project.closing && (
        <section className="py-20 md:py-24">
          <div className="shell">
            <ClipReveal>
              <p className="font-display max-w-3xl text-[clamp(1.25rem,2.6vw,1.9rem)] font-medium leading-snug text-ink">
                {t(project.closing)}
              </p>
            </ClipReveal>
          </div>
        </section>
      )}

      {/* ── Navegación al siguiente caso ── */}
      <section className="border-t border-rule">
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-10">
          <Link
            href="/"
            className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-2 transition-colors duration-200 hover:text-ink"
          >
            ← {t(nav.back)}
          </Link>
          {next && (
            <Link href={`/proyectos/${next.slug}`} className="group text-right">
              <span className="label">{t(caseLabels.next)}</span>
              <span className="font-display mt-1 block text-[22px] font-semibold text-ink transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-x-1">
                {next.name} →
              </span>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

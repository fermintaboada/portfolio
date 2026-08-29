"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { hero, caseLabels } from "@/content/site";
import { CountUp, StrikeOut } from "@/components/motion/Correction";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Entrada orquestada al cargar: cada pieza sale de la anterior. */
function enter(delay: number, reduced: boolean | null) {
  return {
    initial: { opacity: 0, transform: reduced ? "none" : "translateY(16px)" },
    animate: { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  };
}

export function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-clip pb-24 pt-32 md:pb-32 md:pt-40">
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
          <motion.p className="label" {...enter(0, reduced)}>
            {t(hero.eyebrow)}
          </motion.p>

          <motion.h1
            className="font-display-tight mt-6 text-[clamp(2.35rem,5.6vw,4.4rem)] font-bold leading-[0.96] text-ink"
            {...enter(0.09, reduced)}
          >
            {t(hero.headline)}
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-2"
            {...enter(0.2, reduced)}
          >
            {t(hero.lede)}
          </motion.p>
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

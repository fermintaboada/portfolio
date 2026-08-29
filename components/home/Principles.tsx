"use client";

import { useLang } from "@/lib/i18n";
import { principles } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Principles() {
  const { t } = useLang();

  return (
    <section id="criterios" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="label">{t(principles.eyebrow)}</p>
            <h2 className="font-display-tight mt-3 text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-tight text-ink">
              {t(principles.title)}
            </h2>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-2">
              {t(principles.intro)}
            </p>
          </div>
        </Reveal>

        <RevealGroup className="lg:col-span-8" stagger={0.06}>
          {principles.items.map((item, index) => (
            <RevealItem key={item.title.es}>
              <article
                className={`grid grid-cols-1 gap-x-8 gap-y-2 py-7 sm:grid-cols-12 ${
                  index === 0 ? "border-t border-rule" : ""
                } border-b border-rule`}
              >
                <h3 className="font-display text-[19px] font-semibold leading-snug text-ink sm:col-span-5">
                  {t(item.title)}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-2 sm:col-span-7">
                  {t(item.body)}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

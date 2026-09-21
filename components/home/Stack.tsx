"use client";

import { useLang } from "@/lib/i18n";
import { stack } from "@/content/profile";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

/** Una tecnología: logo con su color de marca y el nombre al lado. */
function Pill({ name, slug }: { name: string; slug: string }) {
  return (
    <li className="flex items-center gap-2 rounded-sm border border-rule bg-paper-raised px-2.5 py-1.5">
      <TechIcon slug={slug} className="h-[15px] w-[15px] shrink-0" />
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2">{name}</span>
    </li>
  );
}

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="scroll-mt-24 border-t border-rule py-20 md:py-28">
      <div className="shell">
        <SectionHead number="02" eyebrow={t(stack.eyebrow)} title={t(stack.title)} lede={t(stack.lede)} />

        <div className="mt-14 space-y-8">
          {stack.groups.map((group) => (
            <Reveal key={group.label.es}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-rule pt-6 md:grid-cols-12">
                <p className="label md:col-span-2">{t(group.label)}</p>
                <RevealGroup className="contents" stagger={0.03}>
                  <ul className="flex flex-wrap gap-2 md:col-span-10">
                    {group.items.map((tech) => (
                      <RevealItem key={tech.slug} distance={6}>
                        <Pill name={tech.name} slug={tech.slug} />
                      </RevealItem>
                    ))}
                  </ul>
                </RevealGroup>
              </div>
            </Reveal>
          ))}

          {/* Lo que no tiene logo va por su nombre: mejor que inventarle uno. */}
          <Reveal>
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-rule pt-6 md:grid-cols-12">
              <p className="label md:col-span-2">{t(stack.alsoLabel)}</p>
              <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-ink-3 md:col-span-10">
                {stack.also.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

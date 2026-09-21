"use client";

import { Reveal } from "@/components/motion/Reveal";

/**
 * Cabecera de sección: número al margen, título grande a la izquierda
 * y bajada a la derecha. El número es la única pieza de color de la fila,
 * y es lo que ata la sección con su entrada en el menú.
 */
export function SectionHead({
  number,
  eyebrow,
  title,
  lede,
}: {
  number: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-12">
        <div className="flex items-start gap-4 md:col-span-7">
          <span className="tnum mt-2 font-mono text-[12px] tracking-[0.1em] text-correction">
            {number}
          </span>
          <div>
            <p className="label mb-3">{eyebrow}</p>
            <h2 className="font-display-tight text-[clamp(2rem,4.6vw,3.2rem)] font-bold uppercase leading-[0.98] text-ink">
              {title}
            </h2>
          </div>
        </div>
        {lede && (
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-2 md:col-span-5 md:pt-9">
            {lede}
          </p>
        )}
      </div>
    </Reveal>
  );
}

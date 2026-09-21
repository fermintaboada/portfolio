import * as icons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

/** "nextdotjs" → "siNextdotjs", que es como los exporta el paquete. */
function buscar(slug: string): SimpleIcon | null {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  const icon = (icons as unknown as Record<string, SimpleIcon | undefined>)[key];
  return icon ?? null;
}

/**
 * Luminancia relativa (WCAG). Por debajo de este umbral el logo es
 * negro o casi negro — GitHub, Vercel, Next.js, Express y varios más
 * usan su marca así a propósito, pensada para superficies claras.
 * En modo oscuro esa marca se vuelve invisible sobre el papel oscuro.
 */
const UMBRAL_MONOCROMO = 0.12;

function luminancia(hex: string): number {
  const [r, g, b] = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(
    (c) => parseInt(c, 16) / 255,
  );
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/**
 * Logo de una tecnología.
 *
 * Los logos con color de marca real (React, Tailwind, Postgres...) se
 * dibujan con ese color siempre: se leen igual de bien sobre papel claro
 * u oscuro. Los que la marca definió en negro o casi negro se dibujan
 * con currentColor en cambio, así siguen la tinta del tema — invisibles
 * en negro sobre negro es peor que no llevar el color exacto de marca.
 *
 * Si el slug no existe no dibuja nada: preferible a un hueco o un
 * icono equivocado.
 */
export function TechIcon({ slug, className }: { slug: string; className?: string }) {
  const icon = buscar(slug);
  if (!icon) return null;

  const monocromo = luminancia(icon.hex) < UMBRAL_MONOCROMO;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={monocromo ? undefined : { fill: `#${icon.hex}` }}
    >
      <path d={icon.path} fill={monocromo ? "currentColor" : undefined} />
    </svg>
  );
}

/** Para decidir el layout antes de renderizar, sin repetir la búsqueda. */
export function tieneIcono(slug: string): boolean {
  return buscar(slug) !== null;
}

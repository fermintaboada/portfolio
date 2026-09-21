import * as icons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

/** "nextdotjs" → "siNextdotjs", que es como los exporta el paquete. */
function buscar(slug: string): SimpleIcon | null {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  const icon = (icons as unknown as Record<string, SimpleIcon | undefined>)[key];
  return icon ?? null;
}

/**
 * Logo de una tecnología, con el color de su marca.
 *
 * Si el slug no existe no dibuja nada: una tecnología sin logo se muestra
 * igual por su nombre, y es preferible a un hueco o a un icono equivocado.
 */
export function TechIcon({ slug, className }: { slug: string; className?: string }) {
  const icon = buscar(slug);
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ fill: `#${icon.hex}` }}
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Para decidir el layout antes de renderizar, sin repetir la búsqueda. */
export function tieneIcono(slug: string): boolean {
  return buscar(slug) !== null;
}

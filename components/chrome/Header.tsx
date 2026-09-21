"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "./Theme";
import { useActiveSection } from "@/lib/useActiveSection";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Las seis secciones del home, en orden. El mismo array numera la nav
 * del header y la píldora grande de la portada: cambiar el orden acá
 * los cambia en los dos lugares a la vez.
 */
export const SECTIONS = [
  { id: "inicio", num: "00", label: nav.home },
  { id: "perfil", num: "01", label: nav.profile },
  { id: "stack", num: "02", label: nav.stack },
  { id: "proyectos", num: "03", label: nav.projects },
  { id: "ahora", num: "04", label: nav.now },
  { id: "contacto", num: "05", label: nav.contact },
] as const;

const SECTION_IDS = SECTIONS.map((s) => s.id);

/**
 * Selector de idioma con indicador recortado: en vez de cruzar dos colores
 * de texto, se duplica la fila y se recorta la copia invertida.
 * El color queda perfecto en todo el recorrido.
 */
function LangToggle() {
  const { lang, setLang, t } = useLang();
  const clip = lang === "es" ? "inset(0 50% 0 0 round 999px)" : "inset(0 0 0 50% round 999px)";

  return (
    <div
      className="relative isolate flex h-8 select-none items-center rounded-full border border-rule bg-paper-raised"
      role="group"
      aria-label={t(nav.language)}
    >
      <div className="flex">
        {(["es", "en"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className="w-11 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 transition-transform duration-150 ease-[var(--ease-out)] active:scale-[0.94]"
          >
            {code}
          </button>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex rounded-full bg-ink transition-[clip-path] duration-[260ms] ease-[var(--ease-out)]"
        style={{ clipPath: clip }}
      >
        {(["es", "en"] as const).map((code) => (
          <span
            key={code}
            className="w-11 py-1 text-center font-mono text-[11px] uppercase leading-6 tracking-[0.14em] text-paper"
          >
            {code}
          </span>
        ))}
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t(nav.theme)}
      className="grid h-8 w-8 place-items-center rounded-full border border-rule bg-paper-raised text-ink-2 transition-[transform,color] duration-150 ease-[var(--ease-out)] hover:text-ink active:scale-[0.94]"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
        <circle
          cx="10"
          cy="10"
          r="4.2"
          stroke="currentColor"
          strokeWidth="1.4"
          className={cn(
            "origin-center transition-[transform,opacity] duration-300 ease-[var(--ease-out)]",
            dark ? "scale-90 opacity-100" : "scale-100 opacity-100",
          )}
        />
        {/* Los rayos se retraen hacia el centro al pasar a oscuro. */}
        <g
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          className={cn(
            "origin-center transition-[transform,opacity] duration-300 ease-[var(--ease-out)]",
            dark ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        >
          <path d="M10 1.6v1.8M10 16.6v1.8M18.4 10h-1.8M3.4 10H1.6M15.9 4.1l-1.3 1.3M5.4 14.6l-1.3 1.3M15.9 15.9l-1.3-1.3M5.4 5.4 4.1 4.1" />
        </g>
        {/* Y aparece la mordida de la luna. */}
        <circle
          cx="14.2"
          cy="7"
          r="4.2"
          fill="var(--paper-raised)"
          className={cn(
            "transition-[transform,opacity] duration-300 ease-[var(--ease-out)]",
            dark ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0",
          )}
        />
      </svg>
    </button>
  );
}

/**
 * La nav numerada del header: utilitaria y compacta, para saltar de
 * sección desde cualquier punto del scroll. La pieza vistosa —la fila
 * grande de píldoras— vive en la portada; acá sólo hace falta que
 * funcione y que el número marque, con el mismo color de siempre,
 * dónde está parado el visitante.
 */
function SectionNav({ compact }: { compact: boolean }) {
  const { t } = useLang();
  const active = useActiveSection(compact ? [] : SECTION_IDS);

  if (compact) return null;

  return (
    <nav className="mr-1 hidden items-center gap-0.5 md:flex">
      {SECTIONS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="group flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition-colors duration-200"
        >
          <span
            className={cn(
              "tnum font-mono text-[11px] transition-colors duration-200",
              active === item.id ? "text-correction" : "text-ink-3 group-hover:text-ink-2",
            )}
          >
            {item.num}
          </span>
          <span
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200",
              active === item.id ? "text-ink" : "text-ink-3 group-hover:text-ink-2",
            )}
          >
            {t(item.label)}
          </span>
        </a>
      ))}
    </nav>
  );
}

export function Header({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  // En el home, la portada ya trae su propio menú grande de píldoras:
  // un segundo nav arriba, encima de eso, es ruido. Se mantiene fuera
  // de la vista hasta que el visitante pasa la portada y ese menú deja
  // de estar a mano. En un caso (compact) no hay ese menú propio, así
  // que el header siempre está — es la única forma de volver al índice.
  const [pastHero, setPastHero] = useState(compact);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!compact) setPastHero(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-rule bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
        pastHero
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0",
      )}
    >
      <div className="shell flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 transition-transform duration-150 ease-[var(--ease-out)] active:scale-[0.985]"
        >
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
            {site.name}
          </span>
          <span className="label hidden sm:inline">
            {compact ? t(nav.back) : "Full-stack"}
          </span>
        </Link>

        <div className="flex items-center gap-2.5">
          <SectionNav compact={compact} />
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "./Theme";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

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

export function Header({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-[var(--ease-out)]",
        scrolled
          ? "border-b border-rule bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
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
          {!compact && (
            <nav className="mr-1 hidden items-center gap-5 md:flex">
              {[
                { href: "#trabajo", label: t(nav.work) },
                { href: "#criterios", label: t(nav.principles) },
                { href: "#contacto", label: t(nav.contact) },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="label transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

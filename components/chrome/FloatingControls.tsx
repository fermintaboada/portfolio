"use client";

import { useLang } from "@/lib/i18n";
import { useTheme } from "./Theme";
import { nav } from "@/content/site";
import { SunIcon, MoonIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/**
 * Selector de idioma con un puntito bajo el activo — mismo gesto que
 * un indicador de "estás acá", sin cruzar dos colores de texto.
 */
function LangSwitch() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="flex items-center" role="group" aria-label={t(nav.language)}>
      {(["es", "en"] as const).map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            disabled={isActive}
            className={cn(
              "relative flex h-8 w-8 items-center justify-center rounded-full font-mono text-[10px] uppercase tracking-[0.06em] transition-all duration-200 active:scale-90",
              isActive ? "cursor-default text-ink" : "cursor-pointer text-ink-3 hover:bg-paper-sunken hover:text-ink-2",
            )}
          >
            {code}
            {isActive && (
              <span aria-hidden="true" className="absolute bottom-1 h-1 w-1 rounded-full bg-correction" />
            )}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Sol y luna con formas propias, sin animación intermedia que las
 * vuelva ambiguas: en cualquier instante del cambio se lee cuál es.
 */
function ThemeSwitch() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t(nav.theme)}
      title={t(nav.theme)}
      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-3 transition-all duration-200 hover:bg-paper-sunken hover:text-ink-2 active:scale-90"
    >
      {dark ? <MoonIcon className="h-[15px] w-[15px]" /> : <SunIcon className="h-4 w-4" />}
    </button>
  );
}

/**
 * Idioma y tema, sacados de la nav para que no le pese el ancho, y
 * acoplados en la misma píldora flotante que la referencia usa para
 * su selector de idioma — abajo a la derecha, siempre a mano.
 */
export function FloatingControls() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="flex items-center gap-1 rounded-full border border-rule bg-paper-raised/95 p-1 shadow-[0_14px_45px_-16px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <LangSwitch />
        <span aria-hidden="true" className="h-4 w-px bg-rule" />
        <ThemeSwitch />
      </div>
    </div>
  );
}

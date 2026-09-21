"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { useActiveSection } from "@/lib/useActiveSection";
import { nav } from "@/content/site";
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
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * La nav flotante del home: una píldora sólida centrada, con un fondo
 * oscuro que se desliza detrás de la sección activa — el mismo gesto
 * de la referencia, en vez de la barra transparente de ancho completo
 * que teníamos antes. Idioma y tema ya no viven acá: están en el
 * dock flotante de abajo a la derecha, para que esta píldora se quede
 * chica y liviana.
 */
function SectionNav() {
  const { t } = useLang();
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav className="relative flex items-center gap-0.5 rounded-full border border-rule bg-paper-raised p-1 shadow-[0_14px_45px_-14px_rgba(0,0,0,0.4)]">
      {SECTIONS.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative z-10 flex items-center gap-1.5 rounded-full px-3.5 py-2 transition-colors duration-200"
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 -z-10 rounded-full bg-ink shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)]"
                transition={{ duration: 0.4, ease: EASE_OUT }}
              />
            )}
            <span
              className={cn(
                "tnum font-mono text-[11px] transition-colors duration-200",
                isActive ? "text-correction" : "text-ink-3 group-hover:text-ink-2",
              )}
            >
              {item.num}
            </span>
            <span
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200",
                isActive ? "text-paper" : "text-ink-2 group-hover:text-ink",
              )}
            >
              {t(item.label)}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

/**
 * Header del home: sólo la píldora de secciones, oculta hasta pasar
 * la portada (que ya trae su propio menú grande) y flotando centrada
 * arriba — sin barra ni logo detrás, como en la referencia.
 */
function HomeHeader() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:flex",
        "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        pastHero ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
      )}
    >
      <SectionNav />
    </div>
  );
}

/**
 * Header de una página de caso: no hay secciones ancladas que navegar
 * acá, así que se reduce a una píldora chica y siempre visible con la
 * única acción que hace falta — volver al índice.
 */
function CaseHeader() {
  const { t } = useLang();

  return (
    <div className="fixed left-4 top-4 z-50 sm:left-6 sm:top-5">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full border border-rule bg-paper-raised px-4 py-2.5 shadow-[0_14px_45px_-14px_rgba(0,0,0,0.4)] transition-[transform,border-color] duration-200 ease-[var(--ease-out)] hover:border-rule-strong active:scale-[0.98]"
      >
        <span
          aria-hidden="true"
          className="text-ink-3 transition-transform duration-200 ease-[var(--ease-out)] group-hover:-translate-x-0.5"
        >
          ←
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink">{t(nav.back)}</span>
      </Link>
    </div>
  );
}

export function Header({ compact = false }: { compact?: boolean }) {
  return compact ? <CaseHeader /> : <HomeHeader />;
}

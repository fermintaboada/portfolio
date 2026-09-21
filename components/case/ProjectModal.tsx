"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { nav } from "@/content/site";
import { CloseIcon } from "@/components/ui/Icons";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * La vista expandida de un proyecto: se monta encima del home (que
 * sigue ahí debajo, con su scroll intacto) en vez de reemplazarlo.
 * La cruz vuelve con router.back(), así el visitante encuentra el
 * home exactamente donde lo dejó — es la ruta la que cambia, no la
 * página.
 */
export function ProjectModal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLang();
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => {
    window.__preserveScrollOnBack = true;
    router.back();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Saltar de un caso al siguiente sin cerrar el modal reutiliza el
  // mismo panel: sin esto, arrancaría scrolleado donde quedó el anterior.
  useEffect(() => {
    panelRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="fixed inset-0 z-[100]">
      <motion.div
        ref={panelRef}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
        className="flex h-full flex-col overflow-y-auto overflow-x-clip bg-paper"
        initial={reduced ? false : { opacity: 0, transform: "translateY(28px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.42, ease: EASE_OUT }}
      >
        {children}
      </motion.div>

      <button
        type="button"
        onClick={close}
        aria-label={t(nav.close)}
        title={t(nav.close)}
        className="fixed right-5 top-5 z-[110] grid h-10 w-10 place-items-center rounded-full border border-rule bg-paper-raised text-ink-2 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] transition-[transform,color,border-color] duration-150 ease-[var(--ease-out)] hover:border-rule-strong hover:text-ink active:scale-[0.94] md:right-8 md:top-8"
      >
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

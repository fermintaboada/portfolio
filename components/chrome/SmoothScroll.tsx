"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Scroll suavizado. Es el soporte de toda la página: los revelados
 * se leen mejor cuando el desplazamiento tiene inercia.
 * Con reduced-motion no se monta: se usa el scroll nativo.
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Lenis guarda el alto del documento para saber hasta dónde puede
    // desplazarse. Si ese alto cambia y nadie se lo dice, topa el scroll
    // en el valor viejo: la rueda deja de avanzar y sólo responde el
    // teclado, que no pasa por acá. Observar el body lo mantiene al día
    // cuando entran imágenes o terminan de cargar las tipografías.
    const observer = new ResizeObserver(() => lenis.resize());
    observer.observe(document.body);

    // Los saltos por ancla tienen que pasar por Lenis o se pelean con él.
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.("a[href^='#']");
      if (!target) return;
      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;
      const destination = document.querySelector(hash);
      if (!destination) return;
      event.preventDefault();
      lenis.scrollTo(destination as HTMLElement, { offset: -96 });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Al navegar entre páginas el documento cambia de alto sin que se
  // recargue nada. Se recalcula después de que el navegador pintó la
  // ruta nueva; antes de eso, el alto que mediría todavía es el anterior.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        lenis.resize();
        // Una ruta nueva empieza arriba, salvo que apunte a una sección.
        if (!window.location.hash) lenis.scrollTo(0, { immediate: true });
      });
    });

    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [pathname]);

  return null;
}

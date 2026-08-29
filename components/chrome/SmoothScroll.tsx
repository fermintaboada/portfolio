"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Scroll suavizado. Es el soporte de toda la página: los revelados
 * se leen mejor cuando el desplazamiento tiene inercia.
 * Con reduced-motion no se monta: se usa el scroll nativo.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

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
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

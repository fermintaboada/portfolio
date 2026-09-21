"use client";

import { useEffect, useState } from "react";

/**
 * Cuál de las secciones está en pantalla.
 *
 * Se queda con la que cruza una línea imaginaria al 40% del alto de la
 * ventana: elegir "la más visible" hace que el indicador parpadee entre
 * dos secciones cuando ambas ocupan media pantalla.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    let frame = 0;
    const recalcular = () => {
      const linea = window.innerHeight * 0.4;
      let elegida = nodes[0].id;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= linea) elegida = node.id;
      }
      // Al llegar al final, la última sección gana aunque no cruce la línea:
      // si no, la anteúltima queda marcada para siempre.
      const fin = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (fin) elegida = nodes[nodes.length - 1].id;
      setActive(elegida);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(recalcular);
    };

    recalcular();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

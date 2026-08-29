"use client";

import { motion, useInView, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** useLayoutEffect avisa en el servidor; en el servidor no hay nada que medir. */
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Separa "$29,5M" en prefijo, número y sufijo para poder animar sólo la cifra. */
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d.,]+)([^\d]*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  // Formato local: el punto separa miles, la coma es decimal.
  const normalised = digits.replace(/\./g, "").replace(",", ".");
  const numeric = Number(normalised);
  if (!Number.isFinite(numeric)) return null;
  const decimals = normalised.includes(".") ? normalised.split(".")[1].length : 0;
  return { prefix, suffix, numeric, decimals };
}

function format(n: number, decimals: number) {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Cuenta hasta el valor real cuando entra en pantalla.
 * El número no aparece de golpe porque el punto del bloque es
 * la distancia entre lo que se mostraba y lo que era.
 */
export function CountUp({
  value,
  className,
  delay = 0,
}: {
  value: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduced = useReducedMotion();
  const parsed = parseValue(value);

  // El valor real es el estado inicial: así es lo que sale del servidor y lo
  // que ve alguien sin JavaScript. Un contador que arranca en cero y no llega
  // nunca no es una animación perdida, es un número equivocado.
  const [display, setDisplay] = useState(value);

  const spring = useSpring(0, { duration: 1.1, bounce: 0 });

  // Ya en el cliente y antes de pintar, se baja a cero para que haya algo que contar.
  useIsomorphicLayoutEffect(() => {
    if (!parsed || reduced) return;
    setDisplay(`${parsed.prefix}${format(0, parsed.decimals)}${parsed.suffix}`);
    // Sólo al montar: después manda la animación.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!parsed || reduced) return;
    const unsubscribe = spring.on("change", (v) => {
      setDisplay(`${parsed.prefix}${format(v, parsed.decimals)}${parsed.suffix}`);
    });
    return unsubscribe;
  }, [parsed, reduced, spring]);

  useEffect(() => {
    if (!parsed) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const timer = window.setTimeout(() => spring.set(parsed.numeric), delay * 1000);
    return () => window.clearTimeout(timer);
  }, [inView, parsed, reduced, spring, delay, value]);

  if (!parsed) {
    return (
      <motion.span
        ref={ref}
        className={cn("tnum", className)}
        initial={{ opacity: 0, transform: "translateY(6px)" }}
        animate={inView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
        transition={{ duration: 0.5, ease: EASE_OUT, delay }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={cn("tnum", className)}>
      {display}
    </span>
  );
}

/**
 * El tachado del corrector: un trazo a mano sobre el valor que estaba mal.
 * Se dibuja, no aparece — el gesto es el que dice "esto no era".
 */
export function StrikeOut({
  children,
  className,
  delay = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduced = useReducedMotion();

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      {children}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[-4%] top-1/2 h-[0.5em] w-[108%] -translate-y-1/2 overflow-visible"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M1.5 7.2 C 18 4.1, 34 6.8, 52 4.4 S 82 5.6, 98.5 2.9"
          stroke="var(--correction)"
          strokeWidth={2.4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0.9 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: reduced ? 0 : 0.42, ease: EASE_OUT, delay: reduced ? 0 : delay }}
        />
      </svg>
    </span>
  );
}

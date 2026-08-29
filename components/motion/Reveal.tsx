"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * Revelado al entrar en viewport.
 * Sólo transform y opacity: sin layout ni paint.
 * Con reduced-motion queda el fundido, se va el desplazamiento.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 14,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  as?: "div" | "section" | "li" | "span" | "p";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        transform: reduced ? "none" : `translateY(${distance}px)`,
      }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.62, ease: EASE_OUT, delay }}
    >
      {children}
    </Tag>
  );
}

const groupVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.055 } },
};

/** Contenedor que escalona a sus hijos <RevealItem>. */
export function RevealGroup({
  children,
  className,
  stagger = 0.055,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{ ...groupVariants, shown: { transition: { staggerChildren: stagger } } }}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  distance = 12,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          transform: reduced ? "none" : `translateY(${distance}px)`,
        },
        shown: {
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.55, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Revelado por recorte: el texto se descubre de abajo hacia arriba.
 * Se usa sólo en titulares, donde el gesto tiene peso.
 */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)", transform: "translateY(8px)" }}
      whileInView={{ clipPath: "inset(0 0 -8% 0)", transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.78, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

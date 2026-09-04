import type { L, LL } from "@/lib/i18n";

/** Un número que estaba mal y el número que era. El corazón del portafolio. */
export type Finding = {
  id: string;
  headline: L;
  /** El valor que mostraba el sistema antes del fix. */
  wrong: string;
  /** El valor verificado contra la fuente real. */
  right: string;
  cause: L;
  /** Cómo se confirmó la causa antes de tocar código. Opcional. */
  verification?: L;
  /** El tamaño real del error, cuando se pudo medir. Opcional. */
  impact?: L;
  fix: L;
};

/** Una decisión tomada contra una alternativa más fácil. */
export type Decision = {
  title: L;
  /** La alternativa que se descartó, en pocas palabras. */
  instead: L;
  body: L;
};

/** Un paso del flujo del sistema. El orden importa: los datos pasan por acá. */
export type Step = {
  title: L;
  body: L;
};

/**
 * Una clase de verificación. Lo que importa acá es el criterio,
 * no el caso puntual: el caso ilustra, el criterio se reutiliza.
 */
export type Check = {
  /** Cómo se llama esta verificación. */
  kind: L;
  /** Qué queda garantizado cuando pasa. */
  ensures: L;
  /** Qué apareció al correrla, o por qué importa que exista. */
  found: L;
};

export type StackGroup = {
  label: L;
  items: string[];
};

export type Metric = {
  value: string;
  label: L;
};

/** Captura del proyecto real. El pie dice qué mirar, no repite lo evidente. */
export type Shot = {
  /** Ruta bajo /public. Todas se capturaron a 1800×1125. */
  src: string;
  alt: L;
  caption: L;
};

export type Project = {
  slug: string;
  name: string;
  /** Una línea. Qué es, sin adjetivos. */
  tagline: L;
  year: string;
  /** Naturaleza del trabajo: producto propio, encargo de cliente, equipo. */
  kind: L;
  status: L;
  role: L;
  /** Rubro del cliente o del producto. */
  domain: L;
  /** Stack resumido para la lista del home: 4 items como máximo. */
  chips: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** La tesis del proyecto: qué problema real resuelve. */
  thesis: L;
  overview: LL;
  /** Capturas del producto real, en el orden en que se muestran. */
  shots?: Shot[];
  metrics?: Metric[];
  flow?: { title: L; intro: L; steps: Step[] };
  /** Cómo se verifica que el sistema hace lo que dice hacer. */
  evaluation?: {
    title: L;
    intro: L;
    steps: Step[];
    /** Las clases de verificación: qué se prueba, qué garantiza y qué apareció. */
    checks?: { title: L; intro: L; items: Check[] };
  };
  stack?: StackGroup[];
  decisions?: Decision[];
  findings?: Finding[];
  engineering?: { title: L; items: LL };
  closing?: L;
  /** true mientras falten datos reales del proyecto. */
  draft?: boolean;
};

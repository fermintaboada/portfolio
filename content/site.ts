import type { L, LL } from "@/lib/i18n";

/**
 * Datos de contacto y textos del home.
 * Todo lo editable del sitio vive acá: no hay copy suelto en los componentes.
 */
export const site = {
  name: "Fermín Taboada",
  /** Aparece en el pie y en los metadatos. Cambiar si preferís no exponer el mail. */
  email: "fermintaboada10@gmail.com",
  github: "https://github.com/fermintaboada",
  linkedin: "https://www.linkedin.com/in/fermin-taboada-dev/",
  /** Dominio final del portafolio, para los metadatos de Open Graph. */
  url: "https://fermintaboada.vercel.app",
};

export const hero = {
  eyebrow: {
    es: "Desarrollador full-stack",
    en: "Full-stack developer",
  } as L,
  headline: {
    es: "Cada número que muestra un sistema mío tiene que poder rastrearse hasta una query verificable.",
    en: "Every number a system of mine displays has to trace back to a verifiable query.",
  } as L,
  lede: {
    es: "Construyo productos completos — frontend, backend, base de datos, deploy — y me ocupo de que sigan siendo ciertos cuando entran datos reales de un cliente real.",
    en: "I build complete products — frontend, backend, database, deploy — and I make sure they stay true once real data from a real client comes in.",
  } as L,
  /** El hallazgo que abre la página. Es real: está documentado en el caso de Upscale Lab. */
  proof: {
    caption: {
      es: "Un panel en producción informaba los seguidores de Instagram de un cliente:",
      en: "A production dashboard was reporting a client Instagram followers:",
    } as L,
    wrong: "42",
    right: "103.286",
    note: {
      es: "La API devolvía el cambio del día, no el total. Encontrado, verificado contra la cuenta real y corregido antes de que el cliente lo notara.",
      en: "The API was returning the daily change, not the total. Found, verified against the live account and fixed before the client noticed.",
    } as L,
    href: "/proyectos/upscale-lab#instagram-followers",
    linkLabel: { es: "Ver el caso completo", en: "Read the full case" } as L,
  },
};

export const workSection = {
  eyebrow: { es: "Trabajo", en: "Work" } as L,
  title: { es: "Trabajo seleccionado", en: "Selected work" } as L,
  intro: {
    es: "Tres están en producción con clientes reales. El cuarto se construyó entre once desarrolladores de distintos países.",
    en: "Three run in production with real clients. The fourth was built by eleven developers across different countries.",
  } as L,
};

export const principles = {
  eyebrow: { es: "Criterios", en: "How I work" } as L,
  title: { es: "Decisiones, no reflejos", en: "Decisions, not reflexes" } as L,
  intro: {
    es: "Cada una de estas fue una elección frente a una alternativa más fácil, y quedó escrita como tal en el repositorio.",
    en: "Each of these was a choice against an easier alternative, and it was written down as such in the repo.",
  } as L,
  items: [
    {
      title: { es: "El error se encuentra antes que el cliente", en: "Catch the error before the client does" } as L,
      body: {
        es: "Cuatro bugs de datos en producción, cada uno confirmado leyendo la causa real contra la fuente en vivo antes de tocar código, y verificado después del fix. Ninguno fue un parche de síntoma.",
        en: "Four production data bugs, each confirmed by reading the real cause against the live source before touching code, and verified again after the fix. None was a symptom patch.",
      } as L,
    },
    {
      title: { es: "Determinístico donde hay que contar", en: "Deterministic where counting happens" } as L,
      body: {
        es: "Un modelo de lenguaje no cuenta: interpreta. El código calcula los números verificables y la IA razona sobre esas señales ya cerradas, con la regla explícita de decir que no sabe antes que inventar.",
        en: "A language model does not count: it interprets. Code computes the verifiable numbers and the AI reasons over those closed signals, under an explicit rule to say it does not know rather than invent.",
      } as L,
    },
    {
      title: { es: "Sin infraestructura anticipada", en: "No premature infrastructure" } as L,
      body: {
        es: "Nada de colas ni cachés distribuidas antes de necesitarlas. Cuando descarto una pieza, dejo escrito el gatillo concreto que obliga a reevaluarla.",
        en: "No queues or distributed caches before they are needed. When I rule a piece out, I write down the concrete trigger that forces a rethink.",
      } as L,
    },
    {
      title: { es: "El trade-off se escribe", en: "The trade-off gets written down" } as L,
      body: {
        es: "Los tests no pegan contra una base real y eso está documentado como decisión, con su consecuencia de diseño: la lógica de negocio tiene que ser función pura. Un atajo sin explicar es deuda; explicado, es una restricción de diseño.",
        en: "Tests do not hit a real database, and that is documented as a decision with its design consequence: business logic has to be a pure function. An unexplained shortcut is debt; an explained one is a design constraint.",
      } as L,
    },
  ],
};

export const contact = {
  eyebrow: { es: "Contacto", en: "Contact" } as L,
  title: {
    es: "Disponible para trabajar",
    en: "Available for work",
  } as L,
  body: {
    es: "Si estás evaluando el perfil para una búsqueda, escribime y te paso acceso a la demo en vivo de Upscale Lab con datos de prueba.",
    en: "If you are evaluating this profile for a role, write to me and I will give you access to the live Upscale Lab demo with test data.",
  } as L,
  /** Aclaración honesta: el proyecto más grande es más nuevo que el perfil público. */
  note: {
    es: "Upscale Lab lo terminé esta semana y todavía no figura en mi LinkedIn. El caso completo está acá.",
    en: "I finished Upscale Lab this week and it is not on my LinkedIn yet. The full case is here.",
  } as L,
};

export const nav = {
  work: { es: "Trabajo", en: "Work" } as L,
  principles: { es: "Criterios", en: "How I work" } as L,
  contact: { es: "Contacto", en: "Contact" } as L,
  back: { es: "Volver al índice", en: "Back to index" } as L,
  theme: { es: "Cambiar tema", en: "Toggle theme" } as L,
  language: { es: "Cambiar idioma", en: "Toggle language" } as L,
};

export const caseLabels = {
  role: { es: "Rol", en: "Role" } as L,
  year: { es: "Año", en: "Year" } as L,
  status: { es: "Estado", en: "Status" } as L,
  domain: { es: "Rubro", en: "Field" } as L,
  live: { es: "Ver en vivo", en: "View live" } as L,
  repo: { es: "Código", en: "Code" } as L,
  stack: { es: "Stack", en: "Stack" } as L,
  decisions: { es: "Decisiones", en: "Decisions" } as L,
  findings: { es: "Hallazgos", en: "Findings" } as L,
  findingsIntro: {
    es: "Bugs reales, verificados contra datos en vivo. Cada uno se confirmó leyendo la causa antes de tocar código.",
    en: "Real bugs, verified against live data. Each one was confirmed by reading the cause before touching code.",
  } as L,
  showed: { es: "Mostraba", en: "Showed" } as L,
  was: { es: "Era", en: "Was" } as L,
  cause: { es: "Causa", en: "Cause" } as L,
  verification: { es: "Verificación", en: "Verification" } as L,
  impact: { es: "Impacto medido", en: "Measured impact" } as L,
  fix: { es: "Fix", en: "Fix" } as L,
  overview: { es: "Qué es", en: "What it is" } as L,
  architecture: { es: "Arquitectura", en: "Architecture" } as L,
  engineering: { es: "Ingeniería", en: "Engineering" } as L,
  next: { es: "Siguiente proyecto", en: "Next project" } as L,
};

export const footerNote: LL = {
  es: ["Construido con Next.js y desplegado en Vercel.", "Tipografías: Bricolage Grotesque, Instrument Sans, Spline Sans Mono."],
  en: ["Built with Next.js, deployed on Vercel.", "Typefaces: Bricolage Grotesque, Instrument Sans, Spline Sans Mono."],
};

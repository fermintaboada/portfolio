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
  /** Formato wa.me: 54 (Argentina) + 9 (celular) + código de área + número. */
  whatsapp: "https://wa.me/5491122339430",
  /** Dominio final del portafolio, para los metadatos de Open Graph. */
  url: "https://fermin-taboada.vercel.app",
};

export const hero = {
  /** Rol y stack debajo del nombre: la misma línea que abre el CV. */
  role: {
    es: "Desarrollador Full Stack con IA",
    en: "Full Stack Developer with AI",
  } as L,
  stack: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "PostgreSQL", slug: "postgresql" },
  ],
  /** La historia antes que el principio: el negocio vino primero, el código después. */
  headline: {
    es: "Vendí online cinco años antes de programar. Ahora construyo el software que me faltaba.",
    en: "I sold online for five years before I wrote code. Now I build the software I was missing.",
  } as L,
  /**
   * La ficha del hero: el proyecto más fuerte, contado en lo que un
   * reclutador lee en cinco segundos — qué es, en qué estado y cuánto.
   * Los números salen del propio proyecto, no se duplican acá.
   */
  featured: {
    slug: "upscale-lab",
    label: { es: "Proyecto destacado", en: "Featured project" } as L,
    status: { es: "En producción", en: "In production" } as L,
    summary: {
      es: "La hice de punta a punta, del dato al agente de IA, y mido si el agente responde bien. Ya la usa su primer cliente.",
      en: "I built it end to end, from the data to the AI agent, and I measure whether the agent answers correctly. Its first client is already using it.",
    } as L,
    linkLabel: { es: "Ver el caso completo", en: "Read the full case" } as L,
    liveLabel: { es: "Probá la demo", en: "Try the demo" } as L,
    liveNote: { es: "sin registro", en: "no sign-up" } as L,
  },
};

export const workSection = {
  eyebrow: { es: "Trabajo", en: "Work" } as L,
  title: { es: "Proyectos que hice.", en: "Projects I built." } as L,
  intro: {
    es: "Productos para negocios que venden: una plataforma con IA para marcas de e-commerce, una ticketera hecha en equipo y sitios para clientes.",
    en: "Products for businesses that sell: an AI platform for e-commerce brands, a ticketing app built as a team, and sites for clients.",
  } as L,
  caseLabel: { es: "Ver caso completo", en: "View full case" } as L,
};

export const contact = {
  eyebrow: { es: "Contacto", en: "Contact" } as L,
  title: {
    es: "Disponible para trabajar",
    en: "Available for work",
  } as L,
  body: {
    es: "Si estás armando un equipo que construye producto con IA, escribime. Mientras tanto, podés probar la demo de Upscale Lab sin registrarte.",
    en: "If you are building a team that ships AI products, write to me. In the meantime, you can try the Upscale Lab demo without signing up.",
  } as L,
  cvLabel: { es: "Descargar CV", en: "Download CV" } as L,
  emailCopied: { es: "Copiado", en: "Copied" } as L,
  /** Un archivo por idioma: el botón sirve el que corresponde al activo. */
  cvHref: { es: "/cv-es.pdf", en: "/cv-en.pdf" } as L,
};

export const nav = {
  work: { es: "Trabajo", en: "Work" } as L,
  contact: { es: "Contacto", en: "Contact" } as L,
  home: { es: "Inicio", en: "Home" } as L,
  profile: { es: "Perfil", en: "Profile" } as L,
  stack: { es: "Stack", en: "Stack" } as L,
  now: { es: "Ahora", en: "Now" } as L,
  projects: { es: "Proyectos", en: "Projects" } as L,
  menu: { es: "Secciones", en: "Sections" } as L,
  back: { es: "Volver al índice", en: "Back to index" } as L,
  close: { es: "Cerrar", en: "Close" } as L,
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
    es: "Bugs reales. Cada uno se confirmó leyendo la causa antes de tocar código, y se verificó después del fix.",
    en: "Real bugs. Each one was confirmed by reading the cause before touching code, and verified again after the fix.",
  } as L,
  showed: { es: "Mostraba", en: "Showed" } as L,
  was: { es: "Era", en: "Was" } as L,
  cause: { es: "Causa", en: "Cause" } as L,
  verification: { es: "Verificación", en: "Verification" } as L,
  impact: { es: "Impacto medido", en: "Measured impact" } as L,
  fix: { es: "Fix", en: "Fix" } as L,
  overview: { es: "Qué es", en: "What it is" } as L,
  shots: { es: "En pantalla", en: "On screen" } as L,
  architecture: { es: "Arquitectura", en: "Architecture" } as L,
  evaluation: { es: "Evaluación", en: "Evaluation" } as L,
  ensures: { es: "Qué garantiza", en: "What it guarantees" } as L,
  found: { es: "Qué apareció", en: "What it surfaced" } as L,
  engineering: { es: "Ingeniería", en: "Engineering" } as L,
  next: { es: "Siguiente proyecto", en: "Next project" } as L,
  moreDivider: {
    es: "Lo de arriba es el resumen. Lo que sigue es el criterio completo.",
    en: "That was the summary. What follows is the full reasoning.",
  } as L,
};

export const footerNote: LL = {
  es: ["Construido con Next.js y desplegado en Vercel.", "Tipografías: Bricolage Grotesque, Instrument Sans, Spline Sans Mono."],
  en: ["Built with Next.js, deployed on Vercel.", "Typefaces: Bricolage Grotesque, Instrument Sans, Spline Sans Mono."],
};

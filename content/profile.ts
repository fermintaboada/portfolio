import type { L } from "@/lib/i18n";

/**
 * Perfil, stack y trabajo en curso.
 * Contenido puro: los componentes no traen texto propio.
 */

/** Dato del panel de perfil: una etiqueta y un valor corto. */
export type Fact = { label: L; value: L };

/** Un puesto. Los chips son las tecnologías reales de ese trabajo. */
export type Role = {
  period: string;
  title: L;
  org: L;
  body: L;
  chips?: string[];
};

export const profile = {
  eyebrow: { es: "Perfil", en: "Profile" } as L,
  /** El titular de la sección. Tres palabras que resumen el oficio. */
  title: {
    es: "Datos · sistemas · criterio.",
    en: "Data · systems · judgement.",
  } as L,
  lede: {
    es: "Construyo productos completos y me ocupo de que sigan siendo ciertos cuando entran datos reales.",
    en: "I build complete products and I make sure they stay true once real data comes in.",
  } as L,
  facts: [
    {
      label: { es: "Base", en: "Based in" } as L,
      value: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" } as L,
    },
    {
      label: { es: "Modalidad", en: "Availability" } as L,
      value: { es: "Remoto · jornada completa", en: "Remote · full time" } as L,
    },
    {
      label: { es: "Especialidad", en: "Focus" } as L,
      value: { es: "Full-stack con IA aplicada", en: "Full-stack with applied AI" } as L,
    },
    {
      label: { es: "Idiomas", en: "Languages" } as L,
      value: { es: "Español nativo · inglés C1", en: "Native Spanish · English C1" } as L,
    },
  ] as Fact[],
  experienceLabel: { es: "Experiencia", en: "Experience" } as L,
  experience: [
    {
      period: "2024 — hoy",
      title: { es: "Desarrollador full-stack freelance", en: "Freelance full-stack developer" } as L,
      org: { es: "Proyectos independientes", en: "Independent projects" } as L,
      body: {
        es: "Plataformas web de punta a punta para clientes reales: base de datos, API, integraciones, despliegue y soporte. Dos de los sitios que hice están en producción y son los que sus dueños comparten cuando les piden presupuesto.",
        en: "End-to-end web platforms for real clients: database, API, integrations, deployment and support. Two of the sites I built are in production and are what their owners share when someone asks for a quote.",
      } as L,
      chips: ["Next.js", "Fastify", "PostgreSQL", "Claude", "Vercel"],
    },
    {
      period: "2019 — hoy",
      title: { es: "Operaciones y atención al cliente", en: "Operations and customer service" } as L,
      org: { es: "Fiskyn", en: "Fiskyn" } as L,
      body: {
        es: "Post-venta y comunicación con clientes de alto volumen en una marca de calzado. Conocer el negocio desde adentro es lo que después me dejó construir métricas que significan algo para quien las lee, en vez de gráficos lindos.",
        en: "Post-sale and communication with high-volume customers at a footwear brand. Knowing the business from the inside is what later let me build metrics that mean something to whoever reads them, instead of pretty charts.",
      } as L,
    },
    {
      period: "2019 — 2024",
      title: { es: "Cofundador y operaciones digitales", en: "Co-founder and digital operations" } as L,
      org: { es: "Waikama", en: "Waikama" } as L,
      body: {
        es: "Cofundé una marca de calzado con venta online: estrategia digital, identidad visual y operación de cara al cliente.",
        en: "Co-founded a footwear brand selling online: digital strategy, visual identity and customer-facing operations.",
      } as L,
    },
  ] as Role[],
  educationLabel: { es: "Formación", en: "Education" } as L,
  education: [
    {
      period: "2025 — 2026",
      title: {
        es: "Desarrollo web full-stack y metodologías ágiles",
        en: "Full-stack web development and agile methods",
      } as L,
      org: { es: "Henry", en: "Henry" } as L,
      body: {
        es: "Más de 800 horas en React, Node.js, TypeScript, bases de datos y trabajo en equipo bajo Scrum.",
        en: "Over 800 hours of React, Node.js, TypeScript, databases and Scrum teamwork.",
      } as L,
    },
    {
      period: "2019 — 2024",
      title: { es: "Licenciatura en Psicología", en: "BSc in Psychology" } as L,
      org: { es: "Universidad del Salvador", en: "Universidad del Salvador" } as L,
      body: {
        es: "Cinco años leyendo cómo la gente decide y qué la confunde. Se nota en cómo redacto un error y en dónde pongo un número en pantalla.",
        en: "Five years reading how people decide and what confuses them. It shows in how I word an error and where I put a number on screen.",
      } as L,
    },
  ] as Role[],
};

/** Una tecnología del stack. El slug es el de simple-icons. */
export type Tech = { name: string; slug: string };

export const stack = {
  eyebrow: { es: "Stack", en: "Stack" } as L,
  title: {
    es: "Con qué trabajo.",
    en: "What I work with.",
  } as L,
  lede: {
    es: "Nada de esto está acá por haberlo probado una vez: todo sostiene alguno de los proyectos de abajo.",
    en: "None of this is here because I tried it once: all of it holds up one of the projects below.",
  } as L,
  groups: [
    {
      label: { es: "Frontend", en: "Frontend" } as L,
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "TypeScript", slug: "typescript" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Motion", slug: "framer" },
      ] as Tech[],
    },
    {
      label: { es: "Backend", en: "Backend" } as L,
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Fastify", slug: "fastify" },
        { name: "NestJS", slug: "nestjs" },
        { name: "Express", slug: "express" },
        { name: "Zod", slug: "zod" },
        { name: "Vitest", slug: "vitest" },
      ] as Tech[],
    },
    {
      label: { es: "Datos", en: "Data" } as L,
      items: [
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Prisma", slug: "prisma" },
        { name: "TypeORM", slug: "typeorm" },
        { name: "Supabase", slug: "supabase" },
        { name: "Neon", slug: "neon" },
      ] as Tech[],
    },
    {
      label: { es: "IA", en: "AI" } as L,
      items: [
        { name: "Claude", slug: "anthropic" },
        { name: "Gemini", slug: "googlegemini" },
      ] as Tech[],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" } as L,
      items: [
        { name: "Vercel", slug: "vercel" },
        { name: "GitHub Actions", slug: "githubactions" },
        { name: "Sentry", slug: "sentry" },
        { name: "Docker", slug: "docker" },
        { name: "Git", slug: "git" },
      ] as Tech[],
    },
  ],
};

/**
 * En qué estoy trabajando. El texto lo escribe Fermín; la actividad
 * la lee el sitio de la API pública de GitHub.
 */
export const now = {
  eyebrow: { es: "Ahora", en: "Now" } as L,
  title: {
    es: "En qué estoy trabajando.",
    en: "What I am working on.",
  } as L,
  /** Fecha de la última vez que se revisó este texto. */
  updated: "2026-09-21",
  updatedLabel: { es: "Actualizado", en: "Updated" } as L,
  /** PENDIENTE: reemplazar con el tema que definas. */
  body: {
    es: [
      "PENDIENTE — acá va el texto que definas.",
    ],
    en: [
      "PENDING — the text you define goes here.",
    ],
  },
  activityLabel: { es: "Actividad reciente", en: "Recent activity" } as L,
  activityNote: {
    es: "Leído en vivo de la API pública de GitHub.",
    en: "Read live from the public GitHub API.",
  } as L,
  activityEmpty: {
    es: "Sin actividad pública reciente.",
    en: "No recent public activity.",
  } as L,
};

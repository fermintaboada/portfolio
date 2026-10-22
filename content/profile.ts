import type { L } from "@/lib/i18n";

/**
 * Perfil, stack y trabajo en curso.
 * Contenido puro: los componentes no traen texto propio.
 */

/** Dato del panel de perfil: una etiqueta y un valor corto. */
export type Fact = { label: L; value: L };

/** Un puesto. Los chips son las tecnologías reales de ese trabajo. */
export type Role = {
  /** Mismo formato que el CV: si cambia una fecha, cambia en los dos. */
  period: L;
  title: L;
  org: L;
  body: L;
  chips?: Tech[];
};

/** Una tecnología con su logo. El slug es el de simple-icons. */
export type Tech = { name: string; slug: string };

export const profile = {
  eyebrow: { es: "Perfil", en: "Profile" } as L,
  /** El titular de la sección. Tres palabras que resumen el oficio. */
  title: {
    es: "Del negocio al código.",
    en: "From business to code.",
  } as L,
  lede: {
    es: "Construyo productos web completos, de la base de datos a la interfaz, y me ocupo de que lo que muestran siga siendo correcto en producción.",
    en: "I build complete web products, from the database to the interface, and I make sure what they show stays correct in production.",
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
      period: { es: "Dic 2025 — hoy", en: "Dec 2025 — present" },
      title: { es: "Desarrollador full-stack freelance", en: "Freelance full-stack developer" } as L,
      org: { es: "Proyectos independientes", en: "Independent projects" } as L,
      body: {
        es: "Plataformas web de punta a punta para clientes: base de datos, API, integraciones, despliegue y soporte. Dos de los sitios que hice están en producción y son los que sus dueños comparten cuando les piden presupuesto.",
        en: "End-to-end web platforms for clients: database, API, integrations, deployment and support. Two of the sites I built are in production and are what their owners share when someone asks for a quote.",
      } as L,
      chips: [
        { name: "Next.js", slug: "nextdotjs" },
        { name: "Fastify", slug: "fastify" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Claude", slug: "anthropic" },
        { name: "Vercel", slug: "vercel" },
      ],
    },
    {
      period: { es: "2019 — hoy", en: "2019 — present" },
      title: { es: "Operaciones y atención al cliente", en: "Operations and customer service" } as L,
      org: { es: "Fiskyn", en: "Fiskyn" } as L,
      body: {
        es: "Post-venta y comunicación con clientes en una marca de calzado con mucho volumen. Ahí aprendí qué número le sirve a quien tiene que decidir, y con ese criterio armo hoy las métricas de mis proyectos.",
        en: "Post-sale and customer communication at a high-volume footwear brand. That is where I learned which number helps someone who has to make a decision, and I use that when I design the metrics in my projects.",
      } as L,
    },
    {
      period: { es: "2019 — 2024", en: "2019 — 2024" },
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
      period: { es: "Feb 2025 — Jun 2026", en: "Feb 2025 — Jun 2026" },
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
      period: { es: "2019 — 2024", en: "2019 — 2024" },
      title: { es: "Estudios de Psicología", en: "Psychology Studies" } as L,
      org: { es: "Universidad del Salvador", en: "Universidad del Salvador" } as L,
      body: {
        es: "Cinco años leyendo cómo la gente decide y qué la confunde. Se nota en cómo redacto un error y en dónde pongo un número en pantalla.",
        en: "Five years reading how people decide and what confuses them. It shows in how I word an error and where I put a number on screen.",
      } as L,
    },
  ] as Role[],
};


export const stack = {
  eyebrow: { es: "Stack", en: "Stack" } as L,
  title: {
    es: "Con qué trabajo.",
    en: "What I work with.",
  } as L,
  lede: {
    es: "Todo lo que aparece acá lo usé en alguno de los proyectos de arriba.",
    en: "Everything listed here is used in at least one of the projects above.",
  } as L,
  groups: [
    {
      label: { es: "Frontend", en: "Frontend" } as L,
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "TypeScript", slug: "typescript" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Vite", slug: "vite" },
        { name: "shadcn/ui", slug: "shadcnui" },
        { name: "Motion", slug: "framer" },
        { name: "TanStack Query", slug: "reactquery" },
        { name: "Formik", slug: "formik" },
        { name: "Axios", slug: "axios" },
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
      ] as Tech[],
    },
    {
      label: { es: "Testing", en: "Testing" } as L,
      items: [
        { name: "Vitest", slug: "vitest" },
        { name: "Jest", slug: "jest" },
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
      label: { es: "Integraciones", en: "Integrations" } as L,
      items: [
        { name: "Stripe", slug: "stripe" },
        { name: "Mapbox", slug: "mapbox" },
        { name: "Resend", slug: "resend" },
        { name: "JWT", slug: "jsonwebtokens" },
      ] as Tech[],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" } as L,
      items: [
        { name: "Vercel", slug: "vercel" },
        { name: "Render", slug: "render" },
        { name: "GitHub Actions", slug: "githubactions" },
        { name: "Sentry", slug: "sentry" },
        { name: "Docker", slug: "docker" },
        { name: "Git", slug: "git" },
      ] as Tech[],
    },
  ],
  /** Lo que sostiene los proyectos pero no es una marca con logo. */
  alsoLabel: { es: "También", en: "Also" } as L,
  also: [
    "React Server Components",
    "Tool use / agentes",
    "Evals propios",
    "OAuth 2.0",
    "AES-256-GCM",
    "Webhooks HMAC",
    "Recharts",
    "Tienda Nube API",
    "Instagram Graph API",
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
  /** Sin fecha ni plazos: un texto que no envejece si nadie lo toca. */
  statusLabel: { es: "En curso", en: "In progress" } as L,
  body: {
    es: [
      "Appointment Platform: una plataforma de turnos para varios negocios sobre el mismo producto, donde el cliente reserva escribiendo por WhatsApp. El modelo interpreta el mensaje; la disponibilidad y la reserva las resuelve código propio, con reglas que se pueden testear.",
      "Ya corre sobre un consultorio de prueba con cinco profesionales y pasan 26 escenarios automatizados. Lo que sigue es conectar WhatsApp.",
    ],
    en: [
      "Appointment Platform: a booking platform for several businesses on the same product, where clients book by writing on WhatsApp. The model interprets the message; availability and the booking itself are handled by my own code, with rules that can be tested.",
      "It already runs on a test clinic with five professionals, and 26 automated scenarios pass. Next is connecting WhatsApp.",
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

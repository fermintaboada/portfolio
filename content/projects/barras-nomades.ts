import type { Project } from "../types";

export const barrasNomades: Project = {
  slug: "barras-nomades",
  name: "Barras Nómades",
  tagline: {
    es: "Landing para un servicio de barra con veinte años de oficio, sin una sola librería de animación.",
    en: "Landing page for a bar service with twenty years of craft, without a single animation library.",
  },
  year: "2026",
  kind: { es: "Encargo de cliente", en: "Client commission" },
  status: { es: "Entregado y en línea", en: "Delivered and live" },
  role: {
    es: "Diseño, desarrollo y SEO técnico — proyecto completo",
    en: "Design, development and technical SEO — end to end",
  },
  domain: { es: "Landing · Cliente real", en: "Landing page · Real client" },
  chips: ["React · Next.js 16", "Tailwind v4", "next/og", "JSON-LD"],
  liveUrl: "https://barras-nomades.vercel.app",
  repoUrl: "https://github.com/fermintaboada/barras-nomades",
  thesis: {
    es: "Que un negocio que vive del boca en boca tenga una página que convierta y que Google entienda.",
    en: "Giving a business that lives on word of mouth a page that converts and that Google understands.",
  },
  overview: {
    es: [
      "Barras Nómades es un servicio de barra para eventos en Buenos Aires: veinte años de oficio, hoy un proyecto familiar. El encargo era concreto — una página a la altura del servicio, que cargue rápido en el teléfono donde la va a abrir la mayoría, y que empuje a la única conversión que importa: escribir por WhatsApp.",
      "El trabajo incluyó el diseño, la escritura de todo el contenido, el desarrollo y el SEO técnico. Está en producción y es la página que el cliente comparte cuando le piden presupuesto.",
    ],
    en: [
      "Barras Nómades is an event bar service in Buenos Aires: twenty years of craft, today a family business. The brief was specific — a page worthy of the service, loading fast on the phone where most people will open it, driving the only conversion that matters: sending a WhatsApp message.",
      "The work covered design, all the copy, development and technical SEO. It is in production and it is the page the client shares when someone asks for a quote.",
    ],
  },
  shots: [
    {
      src: "/proyectos/barras-1-hero.webp",
      alt: {
        es: "Portada de Barras Nómades con foto de una barra en un evento",
        en: "Barras Nómades home page with a photo of a bar at an event",
      },
      caption: {
        es: "La entrada del hero es CSS puro: arranca apenas pinta el navegador, sin esperar a que hidrate y sin mover el layout.",
        en: "The hero entrance is pure CSS: it starts the moment the browser paints, without waiting for hydration and without shifting the layout.",
      },
    },
    {
      src: "/proyectos/barras-2-servicio.webp",
      alt: {
        es: "Sección de servicio con navegación numerada y foto del montaje",
        en: "Service section with numbered navigation and a photo of the setup",
      },
      caption: {
        es: "Qué incluye el servicio, punto por punto. El cliente cobra por un paquete cerrado y la página tenía que dejarlo tan claro como él lo explica por teléfono.",
        en: "What the service includes, item by item. The client charges for a fixed package, and the page had to make it as clear as he does on the phone.",
      },
    },
    {
      src: "/proyectos/barras-3-carta.webp",
      alt: {
        es: "Galería de fotos de eventos de Barras Nómades",
        en: "Photo gallery of Barras Nómades events",
      },
      caption: {
        es: "La galería es la prueba del oficio. Imágenes en WebP con carga diferida: pesa poco en el teléfono, que es donde se abre.",
        en: "The gallery is the proof of the craft. WebP images with lazy loading: light on the phone, which is where it gets opened.",
      },
    },
  ],
  metrics: [
    {
      value: "1",
      label: {
        es: "componente de cliente en todo el sitio",
        en: "client component in the entire site",
      },
    },
    {
      value: "40",
      label: {
        es: "líneas del componente de revelado por scroll",
        en: "lines in the scroll-reveal component",
      },
    },
    {
      value: "0",
      label: {
        es: "dependencias de animación",
        en: "animation dependencies",
      },
    },
  ],
  decisions: [
    {
      title: { es: "Sin librería de animación", en: "No animation library" },
      instead: {
        es: "en vez de sumar kilobytes por un fundido",
        en: "instead of shipping kilobytes for a fade",
      },
      body: {
        es: "Los revelados por scroll los resuelve un componente propio de cuarenta líneas sobre IntersectionObserver, con soporte de dirección y retardo escalonado. Para lo que esta página necesita, una librería sería peso muerto en el bundle y trabajo extra en tiempo de ejecución.",
        en: "Scroll reveals are handled by a forty-line component of my own built on IntersectionObserver, with direction support and staggered delays. For what this page needs, a library would be dead weight in the bundle and extra work at runtime.",
      },
    },
    {
      title: { es: "La entrada del hero es CSS puro", en: "The hero entrance is pure CSS" },
      instead: {
        es: "en vez de esperar a que hidrate",
        en: "instead of waiting for hydration",
      },
      body: {
        es: "La animación de entrada usa keyframes con retardos en línea. Al no depender de JavaScript, arranca apenas pinta el navegador y no produce desplazamiento de layout: lo primero que ve el visitante nunca queda en blanco esperando.",
        en: "The entrance animation uses keyframes with inline delays. Because it does not depend on JavaScript, it starts the moment the browser paints and produces no layout shift: the first thing a visitor sees never sits blank waiting.",
      },
    },
    {
      title: { es: "Componentes de servidor por defecto", en: "Server components by default" },
      instead: {
        es: "en vez de marcar todo como cliente",
        en: "instead of marking everything as client",
      },
      body: {
        es: "El único componente de cliente del proyecto es el del revelado por scroll, porque necesita IntersectionObserver. Todo lo demás — incluidas las secciones que lo usan — se queda en el servidor.",
        en: "The only client component in the project is the scroll-reveal one, because it needs IntersectionObserver. Everything else — including the sections that use it — stays on the server.",
      },
    },
    {
      title: { es: "Una sola fuente de verdad para la URL", en: "One source of truth for the URL" },
      instead: {
        es: "en vez de repetir el dominio en cinco archivos",
        en: "instead of repeating the domain across five files",
      },
      body: {
        es: "La URL del sitio se define una vez y se resuelve en cascada: variable de entorno, después la que inyecta Vercel, después localhost. La usan los metadatos, el robots.txt, el sitemap y el JSON-LD. Un solo lugar para cambiar el día que el cliente compre su dominio.",
        en: "The site URL is defined once and resolves in cascade: environment variable, then the one Vercel injects, then localhost. Metadata, robots.txt, sitemap and JSON-LD all read from it. One place to change the day the client buys their own domain.",
      },
    },
  ],
  engineering: {
    title: { es: "SEO técnico, no plugin de SEO", en: "Technical SEO, not an SEO plugin" },
    items: {
      es: [
        "Imagen de Open Graph generada en tiempo de ejecución con next/og, servida en /opengraph-image y compuesta con la tipografía del sitio. El link se ve como corresponde cuando el cliente lo manda por WhatsApp o lo pone en Instagram, que es exactamente por donde circula.",
        "Datos estructurados JSON-LD con esquema LocalBusiness, para que Google entienda que es un negocio local de Buenos Aires y no una página cualquiera.",
        "robots.txt y sitemap.xml generados por las convenciones de archivo del App Router, no escritos a mano: no pueden quedar desactualizados respecto de las rutas reales.",
        "Metadatos expandidos con Open Graph y Twitter card, imágenes servidas en WebP con carga diferida y prioridad explícita en el hero.",
        "Analytics de Vercel para ver desde qué dispositivo llega la gente, que en este rubro es casi todo teléfono.",
      ],
      en: [
        "Open Graph image generated at runtime with next/og, served at /opengraph-image and composed in the site's own typeface. The link looks right when the client sends it over WhatsApp or posts it on Instagram, which is exactly where it travels.",
        "JSON-LD structured data with LocalBusiness schema, so Google understands this is a local Buenos Aires business and not just another page.",
        "robots.txt and sitemap.xml generated through App Router file conventions rather than written by hand: they cannot drift out of sync with the real routes.",
        "Expanded metadata with Open Graph and Twitter card, images served as WebP with lazy loading and explicit priority on the hero.",
        "Vercel Analytics to see what devices people arrive on, which in this business is almost entirely phones.",
      ],
    },
  },
  stack: [
    {
      label: { es: "Framework", en: "Framework" },
      items: ["React", "Next.js 16 (App Router)", "TypeScript", "React Server Components"],
    },
    {
      label: { es: "Estilos", en: "Styling" },
      items: ["Tailwind CSS v4", "Playfair Display + Inter", "next/font"],
    },
    {
      label: { es: "SEO", en: "SEO" },
      items: ["next/og", "JSON-LD LocalBusiness", "sitemap.ts", "robots.ts"],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel", "Vercel Analytics", "next/image (WebP)"],
    },
  ],
  closing: {
    es: "Una landing de cliente es el caso donde es más fácil justificar cualquier atajo: total, es una sola página. Acá el criterio fue el contrario — si va a estar en producción representando a alguien que vive de esto, se hace con el mismo cuidado que un producto.",
    en: "A client landing page is the easiest place to justify any shortcut: it is only one page, after all. Here the standard was the opposite — if it goes to production representing someone whose living depends on it, it gets the same care as a product.",
  },
};

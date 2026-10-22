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
    es: "Diseño, desarrollo y SEO técnico, de punta a punta",
    en: "Design, development and technical SEO, end to end",
  },
  domain: { es: "Landing · Cliente", en: "Landing page · Client" },
  chips: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Vercel", slug: "vercel" },
  ],
  liveUrl: "https://barras-nomades.vercel.app",
  repoUrl: "https://github.com/fermintaboada/barras-nomades",
  thesis: {
    es: "Que un negocio que vive del boca en boca tenga una página que convierta y que Google entienda.",
    en: "Giving a business that lives on word of mouth a page that converts and that Google understands.",
  },
  overview: {
    es: [
      "Barras Nómades es un servicio de barra para eventos en Buenos Aires, con veinte años de oficio y hoy un proyecto familiar. Me pidieron una página a la altura del servicio, que cargara rápido en el teléfono, que es donde la abre casi todo el mundo, y que llevara a una sola acción: escribir por WhatsApp.",
      "Hice el diseño, escribí todo el contenido y me ocupé del desarrollo y del SEO técnico. Está en producción y es la página que el cliente comparte cuando le piden presupuesto.",
    ],
    en: [
      "Barras Nómades is an event bar service in Buenos Aires, with twenty years of craft and now a family business. The brief was a page worthy of the service that loads fast on a phone, where almost everyone opens it, and leads to one action: sending a WhatsApp message.",
      "I did the design, wrote all the copy, and handled development and technical SEO. It is in production, and it is the page the client shares when someone asks for a quote.",
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
        es: "La animación de entrada del hero es CSS puro, así que arranca apenas pinta el navegador, sin esperar la hidratación y sin mover el layout.",
        en: "The hero entrance is pure CSS, so it starts as soon as the browser paints, without waiting for hydration and without shifting the layout.",
      },
    },
    {
      src: "/proyectos/barras-2-servicio.webp",
      alt: {
        es: "Sección de servicio con navegación numerada y foto del montaje",
        en: "Service section with numbered navigation and a photo of the setup",
      },
      caption: {
        es: "Qué incluye el servicio, punto por punto. El cliente cobra un paquete cerrado y la página lo tenía que explicar tan claro como él por teléfono.",
        en: "What the service includes, item by item. The client charges for a fixed package, and the page had to explain it as clearly as he does on the phone.",
      },
    },
    {
      src: "/proyectos/barras-3-carta.webp",
      alt: {
        es: "Galería de fotos de eventos de Barras Nómades",
        en: "Photo gallery of Barras Nómades events",
      },
      caption: {
        es: "La galería muestra eventos reales del servicio. Las imágenes van en WebP con carga diferida para que pesen poco en el teléfono.",
        en: "The gallery shows real events from the service. Images are WebP with lazy loading so they stay light on a phone.",
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
        es: "Los revelados por scroll los resuelve un componente propio de cuarenta líneas sobre IntersectionObserver, con dirección y retardo escalonado. Para lo que necesita esta página, una librería sumaría peso al bundle y trabajo en tiempo de ejecución sin aportar nada.",
        en: "Scroll reveals come from a forty-line component of my own built on IntersectionObserver, with direction and staggered delays. For what this page needs, a library would add bundle weight and runtime work for nothing.",
      },
    },
    {
      title: { es: "La entrada del hero es CSS puro", en: "The hero entrance is pure CSS" },
      instead: {
        es: "en vez de esperar a que hidrate",
        en: "instead of waiting for hydration",
      },
      body: {
        es: "La animación de entrada usa keyframes con retardos en línea. Como no depende de JavaScript, arranca apenas pinta el navegador, no mueve el layout y el visitante nunca ve la pantalla en blanco.",
        en: "The entrance animation uses keyframes with inline delays. Because it does not depend on JavaScript, it starts as soon as the browser paints, causes no layout shift, and the visitor never sees a blank screen.",
      },
    },
    {
      title: { es: "Componentes de servidor por defecto", en: "Server components by default" },
      instead: {
        es: "en vez de marcar todo como cliente",
        en: "instead of marking everything as client",
      },
      body: {
        es: "El único componente de cliente del proyecto es el del revelado por scroll, porque necesita IntersectionObserver. Todo lo demás, incluidas las secciones que lo usan, se renderiza en el servidor.",
        en: "The only client component in the project is the scroll-reveal one, because it needs IntersectionObserver. Everything else, including the sections that use it, renders on the server.",
      },
    },
    {
      title: { es: "Una sola fuente de verdad para la URL", en: "One source of truth for the URL" },
      instead: {
        es: "en vez de repetir el dominio en cinco archivos",
        en: "instead of repeating the domain across five files",
      },
      body: {
        es: "La URL del sitio se define una vez y se resuelve en cascada: primero la variable de entorno, después la que inyecta Vercel y por último localhost. De ahí la toman los metadatos, el robots.txt, el sitemap y el JSON-LD, así que el día que el cliente compre su dominio hay un solo lugar para cambiar.",
        en: "The site URL is defined once and resolves in cascade: first the environment variable, then the one Vercel injects, and finally localhost. Metadata, robots.txt, sitemap and JSON-LD all read from it, so the day the client buys their own domain there is one place to change.",
      },
    },
  ],
  engineering: {
    title: { es: "SEO técnico", en: "Technical SEO" },
    items: {
      es: [
        "Imagen de Open Graph generada en tiempo de ejecución con next/og, servida en /opengraph-image y armada con la tipografía del sitio. El link se ve bien cuando el cliente lo manda por WhatsApp o lo pone en Instagram, que es por donde circula.",
        "Datos estructurados JSON-LD con esquema LocalBusiness, para que Google sepa que es un negocio local de Buenos Aires.",
        "robots.txt y sitemap.xml se generan con las convenciones de archivo del App Router, así que siempre coinciden con las rutas del sitio.",
        "Metadatos expandidos con Open Graph y Twitter card, imágenes servidas en WebP con carga diferida y prioridad explícita en el hero.",
        "Analytics de Vercel para ver desde qué dispositivo llega la gente, que en este rubro es casi todo teléfono.",
      ],
      en: [
        "Open Graph image generated at runtime with next/og, served at /opengraph-image and set in the site's own typeface. The link looks right when the client sends it over WhatsApp or posts it on Instagram, which is where it gets shared.",
        "JSON-LD structured data with LocalBusiness schema, so Google knows this is a local Buenos Aires business.",
        "robots.txt and sitemap.xml are generated through App Router file conventions, so they always match the site's routes.",
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
    es: "En una landing de cliente es fácil justificar atajos porque es una sola página. Esta va a estar en producción representando a alguien que vive de su servicio, así que la hice con el mismo cuidado que un producto.",
    en: "On a client landing page it is easy to justify shortcuts because it is a single page. This one represents someone who makes a living from their service, so I built it with the same care as a product.",
  },
};

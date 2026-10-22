import type { Project } from "../types";

export const petotatts: Project = {
  slug: "petotatts",
  name: "peto.tatts",
  tagline: {
    es: "Sitio de un tatuador de Recoleta, donde el trabajo se elige por estética y la reserva termina en un mensaje.",
    en: "Site for a tattoo artist in Recoleta, where the work is chosen on aesthetics and the booking ends in a message.",
  },
  year: "2026",
  kind: { es: "Encargo de cliente", en: "Client commission" },
  status: { es: "Entregado y en línea", en: "Delivered and live" },
  role: {
    es: "Diseño, desarrollo, contenido y SEO, de punta a punta",
    en: "Design, development, copy and SEO, end to end",
  },
  domain: { es: "Sitio de autor · Cliente", en: "Portfolio site · Client" },
  chips: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Vercel", slug: "vercel" },
  ],
  liveUrl: "https://peto-tatts.vercel.app",
  thesis: {
    es: "Que el sitio tenga la misma estética que el trabajo que muestra.",
    en: "Making the site look like the work it shows.",
  },
  overview: {
    es: [
      "peto.tatts es un tatuador independiente de Recoleta especializado en blackwork, fineline, estética japonesa y realismo. En este rubro la decisión es visual: alguien mira el trabajo, decide si le gusta ese trazo y escribe. Por eso el sitio deja que hablen las imágenes y usa poco texto.",
      "Son seis páginas, entre ellas trabajos, inspiración, turnos, sobre mí y contacto. Explican con claridad el proceso creativo, los estilos y las condiciones de reserva, para que la conversación por WhatsApp empiece con las dudas ya resueltas.",
    ],
    en: [
      "peto.tatts is an independent tattoo artist in Recoleta specialising in blackwork, fineline, Japanese aesthetics and realism. In this field the decision is visual: someone looks at the work, decides whether they like that line, and writes. So the site lets the images do the talking and keeps the text short.",
      "It has six pages, including work, inspiration, booking, about and contact. They explain the creative process, the styles and the booking terms plainly, so the WhatsApp conversation starts with the questions already answered.",
    ],
  },
  shots: [
    {
      src: "/proyectos/peto-1-hero.webp",
      alt: {
        es: "Portada de peto.tatts con estética japonesa",
        en: "peto.tatts home page with Japanese-inspired imagery",
      },
      caption: {
        es: "La portada muestra el estilo antes que cualquier texto, para que quien llega reconozca el trazo en los primeros dos segundos.",
        en: "The home page shows the style before any text, so whoever lands recognises the line within two seconds.",
      },
    },
    {
      src: "/proyectos/peto-2-trabajos.webp",
      alt: {
        es: "Galería de tatuajes destacados agrupados por estilo",
        en: "Gallery of featured tattoos grouped by style",
      },
      caption: {
        es: "Los destacados están etiquetados por estilo (blackwork, japonés, realismo) porque el visitante ya sabe cuál busca.",
        en: "Featured work is tagged by style (blackwork, Japanese, realism) because visitors already know which one they came for.",
      },
    },
    {
      src: "/proyectos/peto-3-inspiracion.webp",
      alt: {
        es: "Sección de inspiración con el proceso de trabajo paso a paso",
        en: "Inspiration section describing the working process step by step",
      },
      caption: {
        es: "El proceso está escrito antes de que alguien lo pregunte, en el orden en que pasa: la conversación, el diseño, la sesión y el resultado.",
        en: "The process is written out before anyone asks, in the order it happens: the conversation, the design, the session and the result.",
      },
    },
  ],
  decisions: [
    {
      title: { es: "La galería manda", en: "The gallery leads" },
      instead: {
        es: "en vez de abrir con un texto de venta",
        en: "instead of opening with a sales pitch",
      },
      body: {
        es: "Toda la estructura está pensada para mostrar trabajo: una portada con una obra a pantalla completa, destacados por estilo y una sección de inspiración que muestra el proceso y las referencias antes que el precio. Como la gente elige por el trazo, el texto queda en segundo plano.",
        en: "The whole structure is built to show work: a full-screen piece on the home page, highlights by style, and an inspiration section that shows process and references before price. Since people choose by the line, the text stays in the background.",
      },
    },
    {
      title: { es: "Las condiciones, escritas antes", en: "The terms, written up front" },
      instead: {
        es: "en vez de discutirlas por chat cada vez",
        en: "instead of negotiating them in chat every time",
      },
      body: {
        es: "La página de turnos deja explícitas la seña del diez por ciento, el plazo de cancelación de veinticuatro horas y los únicos canales por los que se reserva. Es un cambio de contenido, y es el que más roce le ahorra al negocio.",
        en: "The booking page states the ten percent deposit, the twenty-four hour cancellation window and the only channels through which bookings happen. It is a content change, and it is the one that saves the business the most friction.",
      },
    },
    {
      title: { es: "Datos estructurados de negocio local", en: "Local business structured data" },
      instead: {
        es: "en vez de solo poner la dirección en el pie",
        en: "instead of just putting the address in the footer",
      },
      body: {
        es: "El sitio declara un esquema JSON-LD de estudio de tatuajes con nombre, descripción, teléfono, correo y rango de precio. A un negocio de barrio le sirve más aparecer bien en una búsqueda local que optimizar palabras clave.",
        en: "The site declares a tattoo parlour JSON-LD schema with name, description, phone, email and price range. A neighbourhood business gets more out of showing up properly in a local search than out of keyword optimisation.",
      },
    },
  ],
  stack: [
    {
      label: { es: "Framework", en: "Framework" },
      items: ["React", "Next.js (App Router)", "TypeScript", "next/image"],
    },
    {
      label: { es: "Estilos", en: "Styling" },
      items: ["Tailwind CSS", "Cinzel Decorative", "Playfair Display", "Inter"],
    },
    {
      label: { es: "SEO", en: "SEO" },
      items: ["JSON-LD TattooParlor", "Open Graph", "Metadatos por página"],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel"],
    },
  ],
  closing: {
    es: "El encargo era una página para mostrar tatuajes. La mayor parte del trabajo fue decidir qué decir y qué dejar afuera, para que la primera conversación con un cliente arranque con lo importante ya claro.",
    en: "The brief was a page to show tattoos. Most of the work was deciding what to say and what to leave out, so the first conversation with a client starts with the important things already clear.",
  },
};

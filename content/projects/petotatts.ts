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
  status: { es: "En producción", en: "In production" },
  role: {
    es: "Diseño, desarrollo, contenido y SEO — proyecto completo",
    en: "Design, development, copy and SEO — end to end",
  },
  domain: { es: "Sitio de autor · Cliente real", en: "Portfolio site · Real client" },
  chips: ["Next.js", "Tailwind CSS", "JSON-LD", "next/image"],
  liveUrl: "https://peto-tatts.vercel.app",
  thesis: {
    es: "Que el sitio tenga la misma estética que el trabajo que muestra.",
    en: "Making the site look like the work it shows.",
  },
  overview: {
    es: [
      "peto.tatts es un tatuador independiente de Recoleta especializado en blackwork, fineline, estética japonesa y realismo. En este rubro la decisión de compra es puramente visual: alguien mira el trabajo, decide si le gusta ese trazo, y escribe. El sitio tenía que sostener esa mirada, no explicarla.",
      "Son seis páginas — trabajos, inspiración, turnos, sobre mí y contacto — con el proceso creativo, los estilos y las condiciones de reserva escritas con claridad, para que la conversación por WhatsApp empiece con las dudas ya resueltas.",
    ],
    en: [
      "peto.tatts is an independent tattoo artist in Recoleta specialising in blackwork, fineline, Japanese aesthetics and realism. In this field the decision is purely visual: someone looks at the work, decides whether that line speaks to them, and writes. The site had to hold that gaze, not explain it.",
      "It is six pages — work, inspiration, booking, about and contact — with the creative process, the styles and the booking terms written plainly, so the WhatsApp conversation starts with the questions already answered.",
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
        es: "La portada compromete el estilo antes que el texto: quien llega tiene que reconocer el trazo en los primeros dos segundos.",
        en: "The opening commits to the style before the copy does: whoever lands has to recognise the line within two seconds.",
      },
    },
    {
      src: "/proyectos/peto-2-trabajos.webp",
      alt: {
        es: "Galería de tatuajes destacados agrupados por estilo",
        en: "Gallery of featured tattoos grouped by style",
      },
      caption: {
        es: "Los destacados vienen etiquetados por estilo — blackwork, japonés, realismo — porque el visitante ya sabe cuál busca.",
        en: "Featured work is tagged by style — blackwork, Japanese, realism — because visitors already know which one they came for.",
      },
    },
    {
      src: "/proyectos/peto-3-inspiracion.webp",
      alt: {
        es: "Sección de inspiración con el proceso de trabajo paso a paso",
        en: "Inspiration section describing the working process step by step",
      },
      caption: {
        es: "El proceso, escrito antes de que lo pregunten. Acá el orden sí es información: la conversación, el diseño, la sesión, el resultado.",
        en: "The process, written before anyone asks. Here the order really is information: the conversation, the design, the session, the result.",
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
        es: "La estructura entera está subordinada a mostrar trabajo: portada con obra a pantalla completa, destacados por estilo, y una sección de inspiración que muestra el proceso y las referencias antes que el precio. En un rubro donde se elige por trazo, el copy acompaña.",
        en: "The whole structure is subordinate to showing work: a full-bleed opening piece, highlights by style, and an inspiration section that shows process and references before price. In a field where people choose by the line, the copy plays support.",
      },
    },
    {
      title: { es: "Las condiciones, escritas antes", en: "The terms, written up front" },
      instead: {
        es: "en vez de discutirlas por chat cada vez",
        en: "instead of negotiating them in chat every time",
      },
      body: {
        es: "La página de turnos deja explícitas la seña del diez por ciento, el plazo de cancelación de veinticuatro horas y los únicos canales por los que se reserva. Es contenido, no diseño, pero es lo que evita la fricción real del negocio.",
        en: "The booking page states the ten percent deposit, the twenty-four hour cancellation window and the only channels through which bookings happen. It is content, not design, but it is what removes the actual friction in this business.",
      },
    },
    {
      title: { es: "Datos estructurados de negocio local", en: "Local business structured data" },
      instead: {
        es: "en vez de sólo poner la dirección en el pie",
        en: "instead of just putting the address in the footer",
      },
      body: {
        es: "El sitio declara un esquema JSON-LD de estudio de tatuajes con nombre, descripción, teléfono, correo y rango de precio. Para un negocio de barrio, aparecer bien en una búsqueda local vale más que cualquier optimización de palabra clave.",
        en: "The site declares a tattoo parlour JSON-LD schema with name, description, phone, email and price range. For a neighbourhood business, showing up properly in a local search is worth more than any keyword optimisation.",
      },
    },
  ],
  stack: [
    {
      label: { es: "Framework", en: "Framework" },
      items: ["Next.js (App Router)", "TypeScript", "next/image"],
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
    es: "El encargo era una página para mostrar tatuajes. El trabajo real fue decidir qué se dice y qué se calla para que la primera conversación con un cliente arranque en el lugar correcto.",
    en: "The brief was a page to show tattoos. The real work was deciding what to say and what to leave out so the first conversation with a client starts in the right place.",
  },
};

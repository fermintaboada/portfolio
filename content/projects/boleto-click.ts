import type { Project } from "../types";

export const boletoClick: Project = {
  slug: "boleto-click",
  name: "Boleto Click",
  tagline: {
    es: "Plataforma de venta de entradas construida por diez desarrolladores repartidos por Latinoamérica. Trabajé el frontend y la autenticación, de la pantalla a la API.",
    en: "Ticketing platform built by ten developers spread across Latin America. I worked on the frontend and on authentication, from the screen to the API.",
  },
  year: "2026",
  kind: { es: "Equipo de 10", en: "Team of 10" },
  status: { es: "Finalizado", en: "Completed" },
  role: {
    es: "Frontend y autenticación: OAuth en NestJS, roles, checkout, mapas y sistema visual",
    en: "Frontend and authentication: OAuth in NestJS, roles, checkout, maps and design system",
  },
  domain: { es: "Ticketing · Equipo distribuido", en: "Ticketing · Distributed team" },
  chips: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "NestJS", slug: "nestjs" },
    { name: "Mapbox", slug: "mapbox" },
  ],
  liveUrl: "https://boletoclick-front.vercel.app",
  repoUrl: "https://github.com/henrypf2026/boletoclick_front",
  thesis: {
    es: "Comprar una entrada y recibir el QR sin fricción, sobre una base que diez personas tocan al mismo tiempo.",
    en: "Buying a ticket and getting the QR without friction, on a codebase ten people touch at once.",
  },
  overview: {
    es: [
      "Boleto Click vende entradas para recitales, partidos y shows. El comprador filtra la cartelera, elige zona, aplica cupones y recibe su entrada con código QR. El organizador administra sus eventos, tipos de boleto y ventas desde un panel propio. El backend es una API modular en NestJS que bloquea el stock por un tiempo para evitar la sobreventa y concilia las órdenes con webhooks de Stripe.",
      "Fue un proyecto de equipo: diez colaboradores en distintos países, coordinando por pull request contra una rama común. Trabajé sobre todo en el frontend, con veintiséis pull requests mergeados, y también en la autenticación de la API. El flujo de OAuth y la sesión los diseñamos de los dos lados a la vez, en NestJS y en el cliente.",
    ],
    en: [
      "Boleto Click sells tickets for concerts, matches and live shows. Buyers filter the listings, pick a section, apply coupons and receive a QR ticket. Organisers manage their events, ticket types and sales from their own dashboard. The backend is a modular NestJS API that locks stock for a while to prevent overselling and reconciles orders through Stripe webhooks.",
      "It was a team project: ten contributors across different countries, coordinating by pull request against a shared branch. I worked mostly on the frontend, with twenty-six pull requests merged, and also on the API's authentication. We designed the OAuth flow and the session from both sides at once, in NestJS and in the client.",
    ],
  },
  shots: [
    {
      src: "/proyectos/boleto-1-home.webp",
      alt: {
        es: "Portada de Boleto Click con la cartelera de eventos",
        en: "Boleto Click home page with the event listings",
      },
      caption: {
        es: "Hice la portada pública y sus patrones visuales: navbar, footer, tipografía y modo oscuro.",
        en: "I built the public home page and its visual patterns: navbar, footer, typography and dark mode.",
      },
    },
    {
      src: "/proyectos/boleto-4-mapa.webp",
      alt: {
        es: "Detalle de evento con el mapa del recinto en Mapbox",
        en: "Event detail with the venue map rendered in Mapbox",
      },
      caption: {
        es: "Ubicación del recinto con Mapbox GL. El organizador carga el venue desde su panel y el mapa se arma con esas coordenadas.",
        en: "Venue location with Mapbox GL. The organiser loads the venue from their dashboard and the map is built from those coordinates.",
      },
    },
    {
      src: "/proyectos/boleto-5-registro.webp",
      alt: {
        es: "Formulario de registro de Boleto Click",
        en: "Boleto Click sign-up form",
      },
      caption: {
        es: "El registro define el rol desde el principio: de esa elección dependen la navegación y el perfil que ve cada persona.",
        en: "Sign-up sets the role from the start: navigation and profile both follow from that choice.",
      },
    },
  ],
  metrics: [
    {
      value: "10",
      label: {
        es: "desarrolladores en el equipo",
        en: "developers on the team",
      },
    },
    {
      value: "26",
      label: {
        es: "pull requests míos mergeados",
        en: "pull requests of mine merged",
      },
    },
    {
      value: "3",
      label: {
        es: "roles de usuario con navegación propia",
        en: "user roles with their own navigation",
      },
    },
  ],
  engineering: {
    title: { es: "Mi trabajo en el proyecto", en: "My work on the project" },
    items: {
      es: [
        "Autenticación de punta a punta. En el backend, sobre NestJS, el flujo de OAuth y la emisión y validación de la sesión. En el frontend, el registro por rol, el login con Google y la recuperación de contraseña. Al diseñar los dos lados a la vez nos ahorramos el ida y vuelta entre quien expone el endpoint y quien lo consume.",
        "Resolví el intercambio OAuth con PKCE y detección de sesión en la URL, para que el mismo flujo funcione igual en local y en los despliegues de Vercel, que es donde estas integraciones suelen romperse.",
        "Roles de usuario en la interfaz: la navegación y el perfil cambian según la persona sea compradora, organizadora o administradora.",
        "Flujo de compra: resumen de orden, cupones de descuento y temporizador de reserva, contra el checkout de Stripe.",
        "Geolocalización y mapas con Mapbox GL para ubicar recintos, más el formulario de carga de venues del panel de organizador.",
        "Diseño de la landing pública y los patrones visuales de la aplicación: navbar y footer globales, modo oscuro con contraste corregido, y páginas legales.",
        "Unificación de la estructura del repositorio: migré la carpeta client/ a src/ para que las diez personas trabajaran con una sola convención.",
      ],
      en: [
        "Authentication end to end. On the backend, in NestJS, the OAuth flow plus issuing and validating the session. On the frontend, role-based sign-up, Google login and password recovery. Designing both sides at once saved the back-and-forth between whoever exposes the endpoint and whoever consumes it.",
        "I solved the OAuth exchange with PKCE and session detection in the URL, so the same flow behaves the same locally and on Vercel deployments, which is where these integrations tend to break.",
        "User roles in the interface: navigation and profile change depending on whether you are a buyer, an organiser or an admin.",
        "Purchase flow: order summary, discount coupons and reservation timer, against Stripe checkout.",
        "Geolocation and maps with Mapbox GL to place venues, plus the venue creation form in the organiser dashboard.",
        "Design of the public landing page and the app's visual patterns: global navbar and footer, dark mode with corrected contrast, and legal pages.",
        "Unifying the repository structure: I migrated the client/ folder into src/ so all ten people worked with a single convention.",
      ],
    },
  },
  decisions: [
    {
      title: { es: "PKCE en vez del flujo implícito", en: "PKCE instead of the implicit flow" },
      instead: {
        es: "en vez de aceptar que ande sólo en producción",
        en: "instead of settling for it working only in production",
      },
      body: {
        es: "El login con Google fallaba de forma distinta en local y en los despliegues de preview. En lugar de agregar una excepción por entorno, pasé el intercambio a PKCE y habilité la detección de sesión en la URL. Ahora el flujo es el mismo en todos lados y el error que ve el usuario dice qué pasó.",
        en: "Google login failed differently locally and on preview deployments. Instead of adding a per-environment exception, I moved the exchange to PKCE and enabled session detection in the URL. The flow is now the same everywhere, and the error the user sees says what happened.",
      },
    },
    {
      title: { es: "El rol vive en la navegación", en: "The role lives in the navigation" },
      instead: {
        es: "en vez de una sola vista con botones ocultos",
        en: "instead of one view with hidden buttons",
      },
      body: {
        es: "La barra de navegación y el perfil se arman a partir del rol, así que comprador, organizador y administrador ven cada uno su propia versión de la aplicación. Es más claro para el usuario y deja explícito en el código qué puede hacer cada uno.",
        en: "The navigation bar and the profile are built from the role, so buyer, organiser and admin each see their own version of the app. It is clearer for the user and makes it explicit in code what each one can do.",
      },
    },
    {
      title: { es: "Una sola estructura de carpetas", en: "A single folder structure" },
      instead: {
        es: "en vez de dejar conviviendo client/ y src/",
        en: "instead of letting client/ and src/ coexist",
      },
      body: {
        es: "Con diez personas trabajando en paralelo, dos estructuras de carpetas a la vez garantizan conflictos e imports rotos. Migrar todo a src/ no agregó ninguna función visible, pero hacía falta para que el resto avanzara sin pisarse.",
        en: "With ten people working in parallel, two folder structures at once guarantee conflicts and broken imports. Migrating everything to src/ added no visible feature, but everyone else needed it to keep moving without colliding.",
      },
    },
  ],
  stack: [
    {
      label: { es: "Frontend", en: "Frontend" },
      items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS v4", "Flowbite React"],
    },
    {
      label: { es: "Estado y formularios", en: "State and forms" },
      items: ["React Context", "Formik", "Yup", "Framer Motion"],
    },
    {
      label: { es: "Integraciones", en: "Integrations" },
      items: ["Supabase Auth (SSR)", "Stripe Checkout", "Mapbox GL", "Recharts"],
    },
    {
      label: { es: "Backend", en: "Backend" },
      items: ["NestJS", "OAuth 2.0", "JWT", "PostgreSQL", "TypeORM", "Stripe Webhooks"],
    },
  ],
  closing: {
    es: "Lo más difícil de este proyecto fue que diez personas en distintos husos horarios pudieran mergear sobre la misma base sin romperse el trabajo. Por eso unifiqué la estructura, hice que la navegación saliera del rol y dejé el OAuth andando igual en todos los entornos.",
    en: "The hardest part of this project was letting ten people in different time zones merge into the same codebase without breaking each other's work. That is why I unified the structure, derived navigation from the role and made OAuth behave the same in every environment.",
  },
};

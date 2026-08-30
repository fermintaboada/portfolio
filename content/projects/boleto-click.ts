import type { Project } from "../types";

export const boletoClick: Project = {
  slug: "boleto-click",
  name: "Boleto Click",
  tagline: {
    es: "Plataforma de venta de entradas construida por once desarrolladores repartidos por Latinoamérica. Trabajé el frontend y la autenticación, de la pantalla a la API.",
    en: "Ticketing platform built by eleven developers spread across Latin America. I worked on the frontend and on authentication, from the screen to the API.",
  },
  year: "2026",
  kind: { es: "Equipo de 11", en: "Team of 11" },
  status: { es: "Finalizado", en: "Completed" },
  role: {
    es: "Frontend y autenticación — OAuth en NestJS, roles, checkout, mapas y sistema visual",
    en: "Frontend and authentication — OAuth in NestJS, roles, checkout, maps and design system",
  },
  domain: { es: "Ticketing · Equipo distribuido", en: "Ticketing · Distributed team" },
  chips: ["Next.js", "NestJS", "OAuth", "Mapbox"],
  liveUrl: "https://boletoclick-front.vercel.app",
  repoUrl: "https://github.com/henrypf2026/boletoclick_front",
  thesis: {
    es: "Comprar una entrada y recibir el QR sin fricción, sobre una base que once personas tocan al mismo tiempo.",
    en: "Buying a ticket and getting the QR without friction, on a codebase eleven people touch at once.",
  },
  overview: {
    es: [
      "Boleto Click vende entradas para recitales, partidos y shows: el comprador filtra la cartelera, elige zona, aplica cupones y recibe su entrada con código QR; el organizador administra sus eventos, tipos de boleto y ventas desde un panel propio. El backend es una API modular en NestJS con bloqueo temporal de stock para evitar sobreventa y webhooks de Stripe para conciliar las órdenes.",
      "Fue un proyecto de equipo: once colaboradores en distintos países, coordinando por pull request contra una rama común. Mi trabajo estuvo del lado del frontend — veintiséis pull requests mergeados — y también en la autenticación de la API: el flujo de OAuth y la sesión se diseñaron de los dos lados a la vez, en NestJS y en el cliente.",
    ],
    en: [
      "Boleto Click sells tickets for concerts, matches and live shows: buyers filter the listings, pick a section, apply coupons and receive a QR ticket; organisers manage their events, ticket types and sales from their own dashboard. The backend is a modular NestJS API with temporary stock locking to prevent overselling and Stripe webhooks to reconcile orders.",
      "It was a team project: eleven contributors across different countries, coordinating by pull request against a shared branch. My work was on the frontend — twenty-six pull requests merged — and also on the API's authentication: the OAuth flow and the session were designed from both sides at once, in NestJS and in the client.",
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
        es: "La portada pública y sus patrones visuales — navbar, footer, tipografía y modo oscuro — fueron parte de mi trabajo.",
        en: "The public home page and its visual patterns — navbar, footer, typography and dark mode — were part of my work.",
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
      value: "11",
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
        "Autenticación de punta a punta: en el backend, sobre NestJS, el flujo de OAuth y la emisión y validación de la sesión; en el frontend, el registro por rol, el login con Google y la recuperación de contraseña. Diseñar los dos lados a la vez evitó el ida y vuelta habitual entre quien expone el endpoint y quien lo consume.",
        "El intercambio OAuth se resolvió con PKCE y detección de sesión en la URL, para que el mismo flujo funcione igual en local y en los despliegues de Vercel — el caso donde estas integraciones normalmente se rompen.",
        "Roles de usuario reflejados en la interfaz: la navegación y el perfil cambian según sea comprador, organizador o administrador, en vez de esconder botones a todos por igual.",
        "Flujo de compra: resumen de orden, cupones de descuento y temporizador de reserva, contra el checkout de Stripe.",
        "Geolocalización y mapas con Mapbox GL para ubicar recintos, más el formulario de carga de venues del panel de organizador.",
        "Diseño de la landing pública y los patrones visuales de la aplicación: navbar y footer globales, modo oscuro con contraste corregido, y páginas legales.",
        "Unificación de la estructura del repositorio: migración de la carpeta client/ a src/ para que once personas trabajaran sobre una convención sola en vez de dos.",
      ],
      en: [
        "Authentication end to end: on the backend, in NestJS, the OAuth flow plus issuing and validating the session; on the frontend, role-based sign-up, Google login and password recovery. Designing both sides at once removed the usual back-and-forth between whoever exposes the endpoint and whoever consumes it.",
        "The OAuth exchange was solved with PKCE and session detection in the URL, so the same flow behaves identically in local and on Vercel deployments — precisely where these integrations usually break.",
        "User roles reflected in the interface: navigation and profile change depending on whether you are a buyer, an organiser or an admin, rather than hiding buttons from everyone alike.",
        "Purchase flow: order summary, discount coupons and reservation timer, against Stripe checkout.",
        "Geolocation and maps with Mapbox GL to place venues, plus the venue creation form in the organiser dashboard.",
        "Design of the public landing page and the app's visual patterns: global navbar and footer, dark mode with corrected contrast, and legal pages.",
        "Unifying the repository structure: migrating the client/ folder into src/ so eleven people worked against one convention instead of two.",
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
        es: "El login con Google fallaba de forma distinta en local y en los despliegues de preview. La solución no fue una excepción por entorno: se pasó el intercambio a PKCE y se habilitó la detección de sesión en la URL, de modo que el flujo es el mismo en todos lados y el error que ve el usuario dice qué pasó.",
        en: "Google login failed differently in local and on preview deployments. The fix was not a per-environment exception: the exchange moved to PKCE with session detection in the URL, so the flow is the same everywhere and the error the user sees says what actually happened.",
      },
    },
    {
      title: { es: "El rol vive en la navegación", en: "The role lives in the navigation" },
      instead: {
        es: "en vez de una sola vista con botones ocultos",
        en: "instead of one view with hidden buttons",
      },
      body: {
        es: "Comprador, organizador y administrador no ven la misma aplicación con partes deshabilitadas: la barra de navegación y el perfil se arman a partir del rol. Es más claro para el usuario y hace explícito, en el código, qué puede hacer cada uno.",
        en: "Buyer, organiser and admin do not see the same app with parts disabled: the navigation bar and profile are composed from the role. It is clearer for the user and makes explicit, in code, what each one can do.",
      },
    },
    {
      title: { es: "Una convención, no dos", en: "One convention, not two" },
      instead: {
        es: "en vez de dejar conviviendo client/ y src/",
        en: "instead of letting client/ and src/ coexist",
      },
      body: {
        es: "Con once personas trabajando en paralelo, dos estructuras de carpetas conviviendo garantizan conflictos e imports rotos. Migrar todo a src/ fue trabajo que no agrega ninguna función visible, y era la condición para que el resto avanzara sin pisarse.",
        en: "With eleven people working in parallel, two coexisting folder structures guarantee conflicts and broken imports. Migrating everything to src/ added no visible feature, and it was the precondition for everyone else to move without colliding.",
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
    es: "El desafío técnico más grande de este proyecto no fue ninguna feature: fue que once personas en distintos husos horarios pudieran mergear sobre la misma base sin romperse el trabajo. Buena parte de lo que hice —unificar la estructura, dejar la navegación derivada del rol, hacer que el OAuth ande igual en todos los entornos— existe por eso.",
    en: "The biggest technical challenge here was not any single feature: it was letting eleven people in different time zones merge into the same codebase without breaking each other's work. A good part of what I did — unifying the structure, deriving navigation from the role, making OAuth behave identically across environments — exists for that reason.",
  },
};

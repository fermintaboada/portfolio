import type { Project } from "../types";

export const upscaleLab: Project = {
  slug: "upscale-lab",
  name: "Upscale Lab",
  tagline: {
    es: "Plataforma de marketing con IA, multi-tenant, con un cliente real en producción.",
    en: "Multi-tenant AI marketing platform, running in production with a real client.",
  },
  year: "2026",
  kind: { es: "Producto propio", en: "Own product" },
  status: { es: "En producción", en: "In production" },
  role: {
    es: "Diseño, desarrollo e infraestructura — proyecto completo",
    en: "Design, development and infrastructure — end to end",
  },
  domain: { es: "SaaS · E-commerce · IA", en: "SaaS · E-commerce · AI" },
  chips: ["Next.js", "Fastify", "PostgreSQL", "Claude + Gemini"],
  liveUrl: "https://marketing-metrics-nine.vercel.app/",
  thesis: {
    es: "Que una PyME o un influencer pueda prescindir de contratar marketing digital.",
    en: "Letting a small business or a creator do without hiring a digital marketing agency.",
  },
  overview: {
    es: [
      "La plataforma centraliza los canales de venta y las redes de cada cliente, calcula señales de negocio reales sobre esos datos, y una capa de IA razona sobre esas señales para sugerir contenido, generar imágenes de marca y responder preguntas puntuales — siempre con el contexto de marca de ese cliente, nunca genérico.",
      "Cada recurso de la base lleva su clientId a nivel de query, las credenciales de integración se guardan encriptadas por tenant, y el branding de cada cliente (colores, tono de voz, historia de marca, ejemplos de copy, palabras prohibidas) se inyecta en cada prompt de IA que ese cliente dispara.",
    ],
    en: [
      "The platform centralises each client's sales channels and social accounts, computes real business signals over that data, and an AI layer reasons about those signals to suggest content, generate on-brand imagery and answer specific questions — always with that client's brand context, never generic.",
      "Every record in the database carries its clientId at the query level, integration credentials are stored encrypted per tenant, and each client's branding (colours, tone of voice, brand story, copy examples, banned words) is injected into every AI prompt that client triggers.",
    ],
  },
  shots: [
    {
      src: "/proyectos/upscale-1-analisis.webp",
      alt: {
        es: "Panel de análisis de Upscale Lab con hallazgos de rentabilidad",
        en: "Upscale Lab analysis panel showing profitability findings",
      },
      caption: {
        es: "El análisis, sobre el tenant de demostración. Cada hallazgo cierra con un qué hacer concreto, redactado sobre señales ya calculadas por código — el modelo interpreta, no cuenta.",
        en: "The analysis view, on the demo tenant. Every finding closes with a concrete next step, written over signals already computed in code — the model interprets, it does not count.",
      },
    },
    {
      src: "/proyectos/upscale-5-sugerencias.webp",
      alt: {
        es: "Sugerencias de contenido generadas por IA, con botones de feedback",
        en: "AI-generated content suggestions with feedback controls",
      },
      caption: {
        es: "Las sugerencias llegan al cliente sólo después de la aprobación del admin, y cada una pide feedback: es el dato que después afina el contexto de marca.",
        en: "Suggestions reach the client only after admin approval, and each one asks for feedback: that is the signal that later sharpens the brand context.",
      },
    },
    {
      src: "/proyectos/upscale-4-instagram.webp",
      alt: {
        es: "Panel de métricas de Instagram con seguidores y engagement",
        en: "Instagram metrics panel with followers and engagement",
      },
      caption: {
        es: "El panel de Instagram: el mismo lugar donde el total de seguidores mostraba el cambio del día en vez del acumulado.",
        en: "The Instagram panel: the same place where the follower total was showing the daily change instead of the running total.",
      },
    },
  ],
  metrics: [
    {
      value: "11",
      label: { es: "módulos de señal, puros y testeados", en: "signal modules, pure and tested" },
    },
    {
      value: "18",
      label: { es: "archivos de test en el backend", en: "backend test files" },
    },
    {
      value: "7.546",
      label: { es: "pedidos históricos procesados", en: "historical orders processed" },
    },
    {
      value: "4",
      label: { es: "bugs de datos encontrados y verificados", en: "data bugs found and verified" },
    },
  ],
  flow: {
    title: {
      es: "Señales determinísticas antes que el modelo",
      en: "Deterministic signals before the model",
    },
    intro: {
      es: "Un LLM es malo haciendo aritmética exacta sobre muchos datos y puede alucinar una tendencia inexistente. El código determinístico calcula los números verificables; la IA gasta su razonamiento en interpretar y priorizar, nunca en contar. El flujo real, en orden:",
      en: "An LLM is bad at exact arithmetic over large datasets and can hallucinate a trend that is not there. Deterministic code computes the verifiable numbers; the AI spends its reasoning on interpreting and prioritising, never on counting. The actual flow, in order:",
    },
    steps: [
      {
        title: { es: "Módulos de señal, puros y testeados", en: "Signal modules, pure and tested" },
        body: {
          es: "Once módulos independientes — margen, retención, inventario, fricción de checkout, timing de compra, geografía y pagos, tendencia semana a semana, combos de productos, impacto de cupones, salud de cuenta de Instagram, rendimiento de hashtags — calculan hallazgos con umbrales de confianza explícitos. Sin muestra suficiente, el módulo devuelve null: nunca estima ni inventa un número.",
          en: "Eleven independent modules — margin, retention, inventory, checkout friction, purchase timing, geography and payments, week-over-week trend, product bundles, coupon impact, Instagram account health, hashtag performance — compute findings with explicit confidence thresholds. Without a large enough sample the module returns null: it never estimates or invents a number.",
        },
      },
      {
        title: { es: "Interpretación con Claude", en: "Interpretation with Claude" },
        body: {
          es: "El chatbot y el generador de sugerencias reciben esas señales ya calculadas, nunca filas crudas. Cada prompt lleva una regla de grounding explícita: si un dato no está, hay que decirlo — nunca inventar un número, una tendencia o una comparación.",
          en: "The chatbot and the suggestion generator receive those precomputed signals, never raw rows. Every prompt carries an explicit grounding rule: if a data point is missing, say so — never invent a number, a trend or a comparison.",
        },
      },
      {
        title: { es: "Agente con herramientas bajo demanda", en: "Agent with on-demand tools" },
        body: {
          es: "Un loop de tool-use le da al modelo acceso a get_metrics, get_product_sales, get_stock, get_analysis y generate_image. Así puede responder algo tan puntual como cuántos pares de un modelo se vendieron ayer, sin que ese detalle tenga que vivir en el contexto fijo del prompt.",
          en: "A tool-use loop gives the model access to get_metrics, get_product_sales, get_stock, get_analysis and generate_image. That lets it answer something as specific as how many pairs of one model sold yesterday, without that detail having to live in the prompt fixed context.",
        },
      },
      {
        title: { es: "Visión y generación de imagen con marca", en: "Vision and on-brand image generation" },
        body: {
          es: "El cliente adjunta una foto de referencia directo en el chat; Claude la interpreta como imagen y, si decide generar contenido, esa referencia se suma sola a Gemini 2.5 Flash Image junto con la paleta y el estilo visual del cliente — sin que el cliente tenga que pre-cargar nada.",
          en: "The client attaches a reference photo straight into the chat; Claude reads it as an image and, if it decides to generate content, that reference is passed along to Gemini 2.5 Flash Image together with the client palette and visual style — with nothing to pre-configure.",
        },
      },
      {
        title: { es: "Filtro de costo antes de la llamada cara", en: "Cost filter before the expensive call" },
        body: {
          es: "Un clasificador barato — Haiku, sin contexto de marca — corta los pedidos evidentemente ajenos al negocio antes de gastar en la llamada completa. Está sesgado a propósito hacia dejar pasar ante la duda, para no bloquear pedidos creativos legítimos.",
          en: "A cheap classifier — Haiku, no brand context — rejects requests clearly unrelated to the business before spending on the full call. It is deliberately biased toward letting borderline cases through, so legitimate creative requests never get blocked.",
        },
      },
    ],
  },
  stack: [
    {
      label: { es: "Frontend", en: "Frontend" },
      items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Recharts"],
    },
    {
      label: { es: "Backend", en: "Backend" },
      items: ["Node.js", "Fastify", "TypeScript", "Zod", "Vitest"],
    },
    {
      label: { es: "Datos", en: "Data" },
      items: ["PostgreSQL", "Prisma ORM", "Neon", "AES-256-GCM"],
    },
    {
      label: { es: "IA", en: "AI" },
      items: ["Claude Sonnet", "Claude Haiku", "Gemini 2.5 Flash Image", "Tool use / agentes"],
    },
    {
      label: { es: "Integraciones", en: "Integrations" },
      items: ["Tienda Nube API", "Instagram Graph API", "OAuth 2.0", "Webhooks HMAC"],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel", "Render", "GitHub Actions", "NextAuth / JWT"],
    },
  ],
  decisions: [
    {
      title: { es: "Sin infraestructura anticipada", en: "No premature infrastructure" },
      instead: { es: "en vez de sumar una cola por si acaso", en: "instead of adding a queue just in case" },
      body: {
        es: "Sin cola ni Redis, por decisión explícita: a la escala actual esa pieza sería sobrepeso. El repositorio documenta el gatillo concreto para reevaluarlo — el cuarto cliente activo — en vez de escalar de antemano.",
        en: "No queue, no Redis, by explicit decision: at the current scale that piece would be dead weight. The repo documents the concrete trigger to revisit it — the fourth active client — instead of scaling up front.",
      },
    },
    {
      title: { es: "Aislamiento multi-tenant real", en: "Real multi-tenant isolation" },
      instead: { es: "en vez de filtrar en la capa de interfaz", en: "instead of filtering in the UI layer" },
      body: {
        es: "Todo recurso lleva clientId a nivel de query, las credenciales de canal se guardan encriptadas por tenant, y el contexto de marca queda separado por capas: lo que carga el admin en la entrevista inicial no es lo mismo que el cliente puede editar después.",
        en: "Every resource carries clientId at the query level, channel credentials are encrypted per tenant, and brand context is layered: what the admin loads during the initial interview is not what the client can edit later.",
      },
    },
    {
      title: { es: "Confianza estadística explícita", en: "Explicit statistical confidence" },
      instead: { es: "en vez de mostrar el número igual", en: "instead of showing the number anyway" },
      body: {
        es: "Cada señal de negocio define su propio umbral mínimo de muestra como constante nombrada, y expone un flag preliminary a la interfaz en vez de esconder la incertidumbre o afirmar de más.",
        en: "Each business signal defines its own minimum sample threshold as a named constant, and exposes a preliminary flag to the interface instead of hiding uncertainty or overclaiming.",
      },
    },
    {
      title: { es: "Cumplimiento antes de que lo exijan", en: "Compliance before it is demanded" },
      instead: { es: "en vez de esperar a que lo pidan", en: "instead of waiting to be asked" },
      body: {
        es: "Los tres webhooks de privacidad que exige la plataforma de e-commerce — redacción de tienda, redacción de clientes, solicitud de datos — están implementados con verificación de firma HMAC sobre el body crudo, y probados contra los tres escenarios de firma: válida, inválida y ausente.",
        en: "The three privacy webhooks the e-commerce platform requires — shop redaction, customer redaction, data request — are implemented with HMAC signature verification over the raw body, and tested against all three signature scenarios: valid, invalid and missing.",
      },
    },
    {
      title: { es: "Guardas en el seed de la base", en: "Guards on the database seed" },
      instead: { es: "en vez de confiar en no equivocarse", en: "instead of trusting nobody slips" },
      body: {
        es: "El seed se niega a correr en producción sin contraseñas definidas por variable de entorno, y detecta si la base ya tiene datos para negarse igual: forzarlo requiere un flag explícito. Nació de un incidente real — casi se corre el seed contra la base de producción con el cliente ya cargado.",
        en: "The seed refuses to run in production without passwords supplied by environment variable, and detects whether the database already holds data to refuse anyway: forcing it takes an explicit flag. It came out of a real near-miss — the seed was almost run against the production database with the live client already loaded.",
      },
    },
    {
      title: { es: "Gobernanza sobre acciones sensibles", en: "Governance over sensitive actions" },
      instead: { es: "en vez de dejarlo al criterio del modelo", en: "instead of leaving it to the model judgement" },
      body: {
        es: "Carga de credenciales, pagos y facturación quedan explícitamente fuera del alcance de lo que el asistente ejecuta por su cuenta. Es una regla de proceso, no sólo de código.",
        en: "Loading credentials, payments and billing are explicitly out of scope for what the assistant executes on its own. It is a process rule, not just a code one.",
      },
    },
  ],
  findings: [
    {
      id: "instagram-followers",
      headline: {
        es: "Instagram mostraba 42 seguidores. La cuenta tiene 103.286.",
        en: "Instagram showed 42 followers. The account has 103,286.",
      },
      wrong: "42",
      right: "103.286",
      cause: {
        es: "El insight follower_count con period=day devuelve el cambio neto del día, no el total acumulado. Se guardaba el delta como si fuera el total.",
        en: "The follower_count insight with period=day returns the net change for that day, not the running total. The delta was being stored as if it were the total.",
      },
      verification: {
        es: "Confirmado en vivo contra la API con el token real de la cuenta, antes de escribir una línea del fix.",
        en: "Confirmed live against the API with the account real token, before writing a single line of the fix.",
      },
      fix: {
        es: "Se trae el total real una vez por sync y se reconstruye el histórico hacia atrás restando los deltas día a día.",
        en: "The real total is fetched once per sync and the history is rebuilt backwards by subtracting the daily deltas.",
      },
    },
    {
      id: "retencion-color",
      headline: {
        es: "Un hallazgo de retención señalaba el producto equivocado.",
        en: "A retention finding pointed at the wrong product.",
      },
      wrong: "2%",
      right: "6%",
      cause: {
        es: "Se agrupaba por nombre completo de producto, pero la plataforma de e-commerce codifica el color dentro del nombre: cada color contaba como un producto distinto.",
        en: "Grouping was by full product name, but the e-commerce platform encodes colour inside the name: every colour counted as a separate product.",
      },
      impact: {
        es: "El ganador original representaba 31 de 1.452 recompradores. Agrupando por modelo, el patrón real concentra 88 — y señala un producto distinto.",
        en: "The original winner accounted for 31 of 1,452 repeat buyers. Grouped by model, the real pattern holds 88 — and points at a different product.",
      },
      fix: {
        es: "Agrupar por modelo base, no por variante de color.",
        en: "Group by base model, not by colour variant.",
      },
    },
    {
      id: "objetivo-congelado",
      headline: {
        es: "El progreso de un objetivo quedaba congelado para siempre.",
        en: "A goal progress froze forever.",
      },
      wrong: "$618",
      right: "$29,5M",
      cause: {
        es: "Al pasar a logrado o no alcanzado, el objetivo se excluía del recálculo. El valor mostrado se congelaba en ese instante aunque las ventas reales siguieran sumando.",
        en: "Once marked met or missed, the goal was excluded from recalculation. The displayed value froze at that instant even as real sales kept adding up.",
      },
      impact: {
        es: "Un objetivo de facturación mostraba $618 con una facturación real de $29,5M en el mismo período.",
        en: "A revenue goal displayed $618 against real revenue of $29.5M over the same period.",
      },
      fix: {
        es: "Se recalculan todos los objetivos siempre; el estado se deriva de datos reales en cada corrida.",
        en: "All goals are recalculated every run; state is derived from real data each time.",
      },
    },
    {
      id: "conversion-inmedible",
      headline: {
        es: "Un objetivo de negocio nunca fue medible.",
        en: "A business goal was never measurable.",
      },
      wrong: "0",
      right: "checkout",
      cause: {
        es: "La tasa de conversión dependía de clics y visitas, un dato que la API de la tienda directamente no expone. El valor quedaba en cero de forma permanente.",
        en: "Conversion rate depended on clicks and visits — data the store API simply does not expose. The value sat at zero permanently.",
      },
      fix: {
        es: "Reemplazado por finalización de checkout: pedidos completos contra carritos abandonados. La misma intención de negocio, con un dato que sí existe.",
        en: "Replaced with checkout completion: completed orders against abandoned carts. Same business intent, with data that actually exists.",
      },
    },
  ],
  engineering: {
    title: { es: "Testing e integración continua", en: "Testing and continuous integration" },
    items: {
      es: [
        "18 archivos de test en el backend con Vitest: lógica de ventas, retención, análisis, ranking de productos, transformadores de datos externos, autenticación, webhooks y jobs programados.",
        "Los tests de análisis usan datos sintéticos representativos, no casos triviales. El test de retención simula 14 clientes de relleno y 6 recompradores reales — eso fue lo que permitió confirmar el bug de agrupación por color antes de tocar producción.",
        "Los webhooks tienen tests específicos de verificación de firma HMAC en los tres escenarios. No alcanza con que compile: la seguridad del endpoint está probada.",
        "Pipeline de GitHub Actions separado por workspace, cada uno con chequeo estricto de tipos, después tests, después build. Corre en cada push y en cada PR contra master. Si algo no tipa, no mergea.",
        "Los tests no pegan contra una Postgres real: usan una URL de base dummy que sólo satisface la validación de entorno. Eso obliga a que la lógica de negocio sea función pura que recibe datos, no que hace su propia query — la misma disciplina que después permitió testear retención con datos sintéticos. El trade-off está escrito como decisión en el repositorio, no es un descuido.",
        "Validación con Zod en los bordes, migraciones de Prisma versionadas — nunca un push directo del esquema — y alertas por email cuando un canal falla tres syncs seguidos.",
      ],
      en: [
        "18 backend test files with Vitest: sales logic, retention, analysis, product ranking, external data transformers, authentication, webhooks and scheduled jobs.",
        "Analysis tests use representative synthetic data, not trivial cases. The retention test simulates 14 filler customers and 6 real repeat buyers — that is what confirmed the colour-grouping bug before it reached production.",
        "Webhooks have dedicated HMAC signature tests across all three scenarios. Compiling is not enough: the endpoint security is tested.",
        "GitHub Actions pipeline split per workspace, each running strict type checking, then tests, then build. Runs on every push and every PR against master. If it does not typecheck, it does not merge.",
        "Tests do not hit a real Postgres: they use a dummy database URL that only satisfies environment validation. That forces business logic to be pure functions receiving data rather than issuing their own queries — the same discipline that later made synthetic-data retention tests possible. The trade-off is written down as a decision in the repo, not an oversight.",
        "Zod validation at the edges, versioned Prisma migrations — never a direct schema push — and email alerts when a channel fails three syncs in a row.",
      ],
    },
  },
  closing: {
    es: "El trabajo acá no fue escribir features aisladas: fue sostener un sistema multi-tenant en producción con datos reales de un cliente, donde cada número que la IA menciona tiene que poder rastrearse hasta una query verificable — y donde encontrar que un dato está mal antes de que lo note el cliente es tan parte del trabajo como construir la función que lo calcula.",
    en: "The work here was not writing isolated features: it was keeping a multi-tenant system alive in production on a real client data, where every number the AI mentions has to trace back to a verifiable query — and where catching a wrong number before the client does is as much the job as building the function that computes it.",
  },
};

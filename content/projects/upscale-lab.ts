import type { Project } from "../types";

export const upscaleLab: Project = {
  slug: "upscale-lab",
  name: "Upscale Lab",
  tagline: {
    es: "Plataforma con IA que explica las métricas de marcas que venden en Instagram y Tienda Nube.",
    en: "AI platform that explains the numbers of brands selling on Instagram and Tienda Nube.",
  },
  year: "2026",
  kind: { es: "Producto propio", en: "Own product" },
  status: { es: "En producción · 2 clientes", en: "In production · 2 clients" },
  role: {
    es: "Diseño, desarrollo e infraestructura, de punta a punta",
    en: "Design, development and infrastructure, end to end",
  },
  domain: { es: "SaaS · E-commerce · IA", en: "SaaS · E-commerce · AI" },
  chips: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Fastify", slug: "fastify" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Claude", slug: "anthropic" },
  ],
  liveUrl: "https://marketing-metrics-iota.vercel.app/",
  thesis: {
    es: "Que una PyME o un influencer pueda prescindir de contratar marketing digital.",
    en: "Letting a small business or a creator do without hiring a digital marketing agency.",
  },
  overview: {
    es: [
      "La plataforma reúne los canales de venta y las redes de cada cliente, calcula señales de negocio sobre esos datos y usa una capa de IA que razona sobre esas señales para sugerir contenido y responder preguntas puntuales, siempre con el contexto de marca de ese cliente. Cada recurso lleva su clientId a nivel de query y las credenciales se guardan encriptadas por tenant.",
      "Lo que más trabajo llevó fue lo que rodea al agente. Cuando un chatbot responde con datos de negocio, una respuesta plausible y una correcta se parecen demasiado, y buena parte del sistema está para distinguirlas.",
      "El primer cliente fue Fiskyn, la marca de calzado donde trabajo desde 2019. Conocer su operación desde adentro definió qué tenía que medir la plataforma. Hoy la usan dos clientes, con ocho usuarios activos.",
    ],
    en: [
      "The platform brings together each client's sales channels and social accounts, computes business signals over that data, and uses an AI layer that reasons over those signals to suggest content and answer specific questions, always with that client's brand context. Every record carries its clientId at the query level, and credentials are stored encrypted per tenant.",
      "Most of the work went into what surrounds the agent. When a chatbot answers with business data, a plausible answer and a correct one look too much alike, and a good part of the system is there to tell them apart.",
      "The first client was Fiskyn, the footwear brand where I have worked since 2019. Knowing its operation from the inside shaped what the platform had to measure. Two clients use it today, with eight active users.",
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
        es: "El análisis, sobre el tenant de demostración. Cada hallazgo cierra con un qué hacer concreto, redactado a partir de señales que el código ya calculó: el modelo interpreta y el código hace las cuentas.",
        en: "The analysis view, on the demo tenant. Every finding closes with a concrete next step, written from signals the code already computed: the model interprets and the code does the arithmetic.",
      },
    },
    {
      src: "/proyectos/upscale-5-sugerencias.webp",
      alt: {
        es: "Sugerencias de contenido generadas por IA, con botones de feedback",
        en: "AI-generated content suggestions with feedback controls",
      },
      caption: {
        es: "Las sugerencias llegan al cliente solo después de que las aprueba el admin, y cada una pide feedback. Ese feedback es lo que después afina el contexto de marca.",
        en: "Suggestions reach the client only after the admin approves them, and each one asks for feedback. That feedback is what later sharpens the brand context.",
      },
    },
    {
      src: "/proyectos/upscale-4-instagram.webp",
      alt: {
        es: "Panel de métricas de Instagram con seguidores y engagement",
        en: "Instagram metrics panel with followers and engagement",
      },
      caption: {
        es: "El panel de Instagram, donde el total de seguidores mostraba el cambio del día en vez del acumulado.",
        en: "The Instagram panel, where the follower total was showing the daily change instead of the running total.",
      },
    },
  ],
  metrics: [
    {
      value: "-40%",
      label: {
        es: "de costo por respuesta, medido",
        en: "cost per response, measured",
      },
    },
    {
      value: "24",
      label: {
        es: "casos de evaluación del agente",
        en: "evaluation cases for the agent",
      },
    },
    {
      value: "7.546",
      label: { es: "pedidos históricos procesados", en: "historical orders processed" },
    },
    {
      value: "7",
      label: { es: "bugs de datos encontrados y verificados", en: "data bugs found and verified" },
    },
  ],
  flow: {
    title: {
      es: "Señales determinísticas antes que el modelo",
      en: "Deterministic signals before the model",
    },
    intro: {
      es: "Un LLM es malo haciendo aritmética exacta sobre muchos datos y puede alucinar una tendencia que no existe. Por eso el código determinístico calcula los números verificables y la IA se dedica a interpretarlos y priorizarlos. El flujo, en orden:",
      en: "An LLM is bad at exact arithmetic over large datasets and can hallucinate a trend that is not there. So deterministic code computes the verifiable numbers, and the AI spends its reasoning on interpreting and prioritising them. The flow, in order:",
    },
    steps: [
      {
        title: { es: "Módulos de señal, puros y testeados", en: "Signal modules, pure and tested" },
        body: {
          es: "Once módulos independientes (margen, retención, inventario, fricción de checkout, timing de compra, tendencia semanal, combos, cupones y salud de Instagram) calculan hallazgos con umbrales de confianza explícitos. Si la muestra no alcanza, el módulo devuelve null en lugar de un número.",
          en: "Eleven independent modules (margin, retention, inventory, checkout friction, purchase timing, week-over-week trend, bundles, coupons and Instagram health) compute findings with explicit confidence thresholds. If the sample is too small, the module returns null instead of a number.",
        },
      },
      {
        title: { es: "Interpretación con Claude", en: "Interpretation with Claude" },
        body: {
          es: "El chatbot y el generador de sugerencias reciben esas señales ya calculadas, nunca filas crudas. Cada prompt lleva una regla de grounding explícita: si un dato no está, el modelo tiene que decirlo.",
          en: "The chatbot and the suggestion generator receive those precomputed signals, never raw rows. Every prompt carries an explicit grounding rule: if a data point is missing, the model has to say so.",
        },
      },
      {
        title: { es: "Agente con herramientas bajo demanda", en: "Agent with on-demand tools" },
        body: {
          es: "Un loop de tool-use le da al modelo acceso a get_metrics, get_product_sales, get_stock y generate_image. Así puede responder algo tan puntual como cuántos pares de un modelo se vendieron ayer, sin que ese dato tenga que estar en el contexto fijo del prompt.",
          en: "A tool-use loop gives the model access to get_metrics, get_product_sales, get_stock and generate_image. That lets it answer something as specific as how many pairs of one model sold yesterday, without that detail having to sit in the prompt's fixed context.",
        },
      },
      {
        title: { es: "Visión y generación de imagen con marca", en: "Vision and on-brand image generation" },
        body: {
          es: "El cliente adjunta una foto de referencia en el chat y Claude la interpreta como imagen. Si después genera contenido, esa referencia pasa sola a Gemini junto con la paleta y el estilo del cliente, sin configurar nada antes.",
          en: "The client attaches a reference photo in the chat and Claude reads it as an image. If it then generates content, that reference goes to Gemini automatically along with the client's palette and style, with nothing to set up beforehand.",
        },
      },
      {
        title: { es: "Filtro de costo antes de la llamada cara", en: "Cost filter before the expensive call" },
        body: {
          es: "Un clasificador barato (Haiku, sin contexto de marca) corta los pedidos ajenos al negocio antes de la llamada completa. Ante la duda deja pasar el pedido, a propósito, para no bloquear pedidos creativos legítimos.",
          en: "A cheap classifier (Haiku, with no brand context) rejects off-topic requests before the full call. When in doubt it lets the request through, on purpose, so legitimate creative requests do not get blocked.",
        },
      },
    ],
  },
  evaluation: {
    title: {
      es: "Una respuesta plausible y una correcta se parecen demasiado",
      en: "A plausible answer and a correct one look too much alike",
    },
    intro: {
      es: "Si el asistente dice «estos son tus cinco peores productos» y la lista está mal, nadie lo nota hasta que el cliente toma la decisión equivocada. Para distinguir una respuesta correcta de una que solo suena bien armé un sistema propio de evaluación, sin plataformas externas.",
      en: "If the assistant says \"these are your five worst products\" and the list is wrong, nobody notices until the client makes the wrong call. To tell a correct answer from one that only sounds right, I built my own evaluation system, with no external platform.",
    },
    steps: [
      {
        title: { es: "El dataset se diseña por dimensiones", en: "The dataset is designed by dimensions" },
        body: {
          es: "Veinticuatro casos que cruzan tipo de pedido, forma de la consulta y estado de los datos. Solo las preguntas son sintéticas: corren contra el pipeline y los datos reales del tenant, así que las respuestas, las herramientas que se llaman y las fallas son las de verdad.",
          en: "Twenty-four cases that cross request type, question shape and data state. Only the questions are synthetic: they run against the real pipeline and the tenant's real data, so the answers, the tools called and the failures are the real ones.",
        },
      },
      {
        title: { es: "Cada respuesta deja una traza auditable", en: "Every response leaves an auditable trace" },
        body: {
          es: "Por cada respuesta se guarda el prompt, qué herramientas se llamaron y qué devolvieron. Si alguien pide «hacé una imagen de un modelo en tendencia», la traza muestra si el agente consultó las ventas o inventó el modelo. El cliente nunca la ve; sirve para auditar después.",
          en: "For every response the system stores the prompt, which tools were called and what they returned. If someone asks \"make an image of a trending model\", the trace shows whether the agent checked sales or made the model up. The client never sees it; it is there for auditing later.",
        },
      },
      {
        title: { es: "Comparar corridas y leer a mano", en: "Comparing runs and reading by hand" },
        body: {
          es: "Un comparador muestra qué casos cambiaron de herramientas, costo o comportamiento entre una corrida y otra, y así «lo arreglé» deja de ser una impresión. Además leo las corridas enteras en una interfaz local, porque un score automático no alcanza para juzgar un consejo de negocio.",
          en: "A comparator shows which cases changed tools, cost or behaviour between runs, so \"I fixed it\" stops being a hunch. I also read whole runs in a local interface, because an automatic score is not enough to judge business advice.",
        },
      },
    ],
    checks: {
      title: {
        es: "Cinco clases de verificación",
        en: "Five classes of check",
      },
      intro: {
        es: "En un sistema con un modelo de lenguaje adentro, la misma entrada puede dar salidas distintas y todas pueden estar bien, así que testearlo pide más que testear una función. Estas son las cinco verificaciones y lo que garantiza cada una cuando pasa.",
        en: "In a system with a language model inside, the same input can produce different outputs and all of them can be fine, so testing it takes more than testing a function. These are the five checks and what each one guarantees when it passes.",
      },
      items: [
        {
          kind: { es: "Aislamiento entre clientes", en: "Cross-tenant isolation" },
          ensures: {
            es: "Que el contexto que se le manda al modelo para un cliente no contenga datos de otro, y que ninguna respuesta nombre productos ajenos.",
            en: "That the context sent to the model for one client carries no data from another, and that no response names someone else's products.",
          },
          found: {
            es: "Corre sin gastar una llamada al modelo y se controla a sí misma: si el contexto de un cliente no trae ni sus propios productos, se reporta rota.",
            en: "It runs without spending a model call, and it checks itself: if a client's context does not even carry their own products, it reports itself as broken.",
          },
        },
        {
          kind: { es: "Trayectoria del agente", en: "Agent trajectory" },
          ensures: {
            es: "Que la respuesta se haya alcanzado por el camino correcto: qué herramientas se llamaron, con qué argumentos y en qué orden.",
            en: "That the answer was reached the right way: which tools were called, with which arguments and in what order.",
          },
          found: {
            es: "Esta fue la que mostró que el agente trabajaba sobre un catálogo recortado. La respuesta sonaba razonable; el camino para llegar a ella estaba mal.",
            en: "This is the one that showed the agent was working on a truncated catalogue. The answer sounded reasonable; the path to it was wrong.",
          },
        },
        {
          kind: { es: "Estabilidad ante repetición", en: "Stability under repetition" },
          ensures: {
            es: "Que el mismo pedido no cambie de resultado según la corrida. Cada caso se ejecuta tres veces y se compara.",
            en: "That the same request does not change result from one run to the next. Each case is executed three times and compared.",
          },
          found: {
            es: "Sin esto, una falla intermitente parece un caso aislado y se descarta. Así medí que un pedido legítimo se rechazaba las tres veces.",
            en: "Without it, an intermittent failure looks like a one-off and gets dismissed. That is how I measured a legitimate request being rejected all three times.",
          },
        },
        {
          kind: { es: "Regresión de costo", en: "Cost regression" },
          ensures: {
            es: "Que nada volátil se cuele en el bloque cacheado del prompt, que es lo que sostiene el precio por respuesta.",
            en: "That nothing volatile slips into the cached block of the prompt, which is what keeps the price per response down.",
          },
          found: {
            es: "Esta falla no rompe nada: la aplicación anda igual y solo sale más cara. Sin un test que la vigile, aparece en la factura.",
            en: "This failure breaks nothing: the app works the same and only costs more. Without a test watching for it, it shows up on the invoice.",
          },
        },
        {
          kind: { es: "Revisión humana anotada", en: "Annotated human review" },
          ensures: {
            es: "Que la respuesta sirva como consejo de negocio, además de ser formalmente correcta. Es la única verificación que no está automatizada.",
            en: "That the answer works as business advice as well as being formally correct. It is the only check that is not automated.",
          },
          found: {
            es: "Un ranking puede estar bien calculado y ser un mal consejo. Leyendo respuestas apareció que el agente confundía «sin ventas» con «agotado».",
            en: "A ranking can be computed correctly and still be bad advice. Reading answers showed that the agent was confusing \"no sales\" with \"out of stock\".",
          },
        },
      ],
    },
  },
  stack: [
    {
      label: { es: "Frontend", en: "Frontend" },
      items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Recharts"],
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
      items: ["Claude Sonnet", "Claude Haiku", "Gemini 3.1 Flash Image", "Vertex AI", "Tool use / agentes", "Evals propios"],
    },
    {
      label: { es: "Integraciones", en: "Integrations" },
      items: ["Tienda Nube API", "Instagram Graph API", "OAuth 2.0", "Webhooks HMAC"],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel", "Render", "GitHub Actions", "Sentry", "NextAuth / JWT"],
    },
  ],
  decisions: [
    {
      title: { es: "El corte de caché va donde termina lo estable", en: "The cache boundary goes where the stable part ends" },
      instead: {
        es: "en vez de aceptar el costo como dado",
        en: "instead of taking the cost as a given",
      },
      body: {
        es: "El caché del modelo funciona por coincidencia de prefijo: cualquier byte que cambie invalida todo lo que viene después. El system prompt tenía las métricas del día y las últimas interacciones en el medio, así que se invalidaba en cada mensaje. Lo separé en un bloque estable (identidad de marca, catálogo e instrucciones) y uno volátil, con el corte entre los dos. El costo por respuesta bajó de US$0,0487 a US$0,0292 y el caché pasó de cubrir el 2,7% de la entrada al 63%. Lo medí sobre la corrida completa del dataset.",
        en: "The model's cache works by prefix match: any byte that changes invalidates everything after it. The system prompt had the day's metrics and the latest interactions in the middle, so it was invalidated on every message. I split it into a stable block (brand identity, catalogue and instructions) and a volatile one, with the boundary between them. Cost per response went from US$0.0487 to US$0.0292, and cache coverage of the input went from 2.7% to 63%. I measured it over the full dataset run.",
      },
    },
    {
      title: { es: "Se testea lo que falla en silencio", en: "Testing what fails silently" },
      instead: {
        es: "en vez de confiar en que nada se rompe",
        en: "instead of trusting nothing breaks",
      },
      body: {
        es: "Dos ejemplos del mismo criterio. El detector de fugas entre clientes se controla a sí mismo: si el contexto de un cliente no trae ni sus propios productos, avisa que está roto. Y un test verifica que nada volátil se cuele en el bloque cacheado del prompt, una regresión que no rompe nada y solo hace que la app salga más cara. Sin ese test, aparece en la factura a fin de mes.",
        en: "Two examples of the same standard. The cross-tenant leak detector checks itself: if a client's context does not even carry their own products, it reports that it is broken. And a test checks that nothing volatile slips into the cached block of the prompt, a regression that breaks nothing and only makes the app cost more. Without that test, it shows up on the monthly invoice.",
      },
    },
    {
      title: { es: "Sin infraestructura anticipada", en: "No premature infrastructure" },
      instead: { es: "en vez de sumar una cola por si acaso", en: "instead of adding a queue just in case" },
      body: {
        es: "No hay cola ni Redis, por decisión explícita: a la escala actual serían peso de más. El repositorio documenta cuándo reevaluarlo: al llegar al cuarto cliente activo.",
        en: "There is no queue and no Redis, by explicit decision: at the current scale they would be dead weight. The repo documents when to revisit it: once there is a fourth active client.",
      },
    },
    {
      title: { es: "Guardas en el seed de la base", en: "Guards on the database seed" },
      instead: { es: "en vez de confiar en no equivocarse", en: "instead of trusting nobody slips" },
      body: {
        es: "El seed se niega a correr en producción si las contraseñas no vienen por variable de entorno, y también si detecta que la base ya tiene datos. Para forzarlo hace falta un flag explícito. Lo agregué después de casi correr el seed contra la base de producción con el cliente ya cargado.",
        en: "The seed refuses to run in production unless the passwords come from environment variables, and also if it detects that the database already holds data. Forcing it takes an explicit flag. I added this after nearly running the seed against the production database with the client already loaded.",
      },
    },
  ],
  findings: [
    {
      id: "catalogo-parcial",
      headline: {
        es: "El asistente veía 25 de 197 productos y decía que el resto no existía.",
        en: "The assistant saw 25 of 197 products and said the rest did not exist.",
      },
      wrong: "25",
      right: "197",
      cause: {
        es: "El contexto traía solo los veinticinco productos sincronizados más recientemente, presentados como si fueran el catálogo completo. El asistente no veía el ochenta y siete por ciento del catálogo.",
        en: "The context carried only the twenty-five most recently synced products, presented as if they were the whole catalogue. The assistant could not see eighty-seven percent of the catalogue.",
      },
      impact: {
        es: "Ante una consulta por un producto que existía y tenía stock, respondía que no aparecía en el catálogo y que podía estar descontinuado.",
        en: "Asked about a product that existed and had stock, it replied that it was not in the catalogue and might be discontinued.",
      },
      verification: {
        es: "Lo encontró una corrida del dataset de evaluación.",
        en: "A run of the evaluation dataset caught it.",
      },
      fix: {
        es: "Pasar el catálogo entero con solo nombre y precio. Pesa menos que los veinticinco productos anteriores (18.625 contra 19.204 tokens), porque las URLs de las imágenes ocupaban más que todo el resto junto.",
        en: "Pass the whole catalogue with just name and price. It weighs less than the previous twenty-five products (18,625 against 19,204 tokens), because the image URLs took up more room than everything else combined.",
      },
    },
    {
      id: "instagram-followers",
      headline: {
        es: "Instagram mostraba 42 seguidores. La cuenta tiene 103.286.",
        en: "Instagram showed 42 followers. The account has 103,286.",
      },
      wrong: "42",
      right: "103.286",
      cause: {
        es: "El insight follower_count con period=day devuelve el cambio neto del día, no el total acumulado, y se guardaba ese cambio como si fuera el total.",
        en: "The follower_count insight with period=day returns the net change for that day, not the running total, and that change was being stored as if it were the total.",
      },
      verification: {
        es: "Lo confirmé en vivo contra la API con el token real de la cuenta, antes de escribir una línea del arreglo.",
        en: "I confirmed it live against the API with the account's real token before writing a line of the fix.",
      },
      fix: {
        es: "Ahora se trae el total real una vez por sincronización y el histórico se reconstruye hacia atrás restando el cambio de cada día.",
        en: "The real total is now fetched once per sync, and the history is rebuilt backwards by subtracting each day's change.",
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
        en: "Grouping was by full product name, but the e-commerce platform encodes colour inside the name, so every colour counted as a separate product.",
      },
      impact: {
        es: "El ganador original representaba 31 de 1.452 recompradores. Agrupando por modelo, el patrón real concentra 88 y señala un producto distinto.",
        en: "The original winner accounted for 31 of 1,452 repeat buyers. Grouped by model, the real pattern holds 88 and points at a different product.",
      },
      fix: {
        es: "Agrupar por modelo base y sumar todas sus variantes de color.",
        en: "Group by base model and add up all its colour variants.",
      },
    },
    {
      id: "objetivo-congelado",
      headline: {
        es: "El progreso de un objetivo quedaba congelado para siempre.",
        en: "A goal's progress froze for good.",
      },
      wrong: "$618",
      right: "$29,5M",
      cause: {
        es: "Al pasar a logrado o no alcanzado, el objetivo dejaba de recalcularse. El valor mostrado quedaba fijo en ese instante aunque las ventas reales siguieran sumando.",
        en: "Once marked met or missed, the goal stopped being recalculated. The displayed value stayed fixed at that moment even as real sales kept adding up.",
      },
      impact: {
        es: "Un objetivo de facturación mostraba $618 con una facturación real de $29,5M en el mismo período.",
        en: "A revenue goal displayed $618 against real revenue of $29.5M over the same period.",
      },
      fix: {
        es: "Ahora todos los objetivos se recalculan en cada corrida y el estado se deriva de los datos del momento.",
        en: "Every goal is now recalculated on each run, and its state is derived from current data.",
      },
    },
  ],
  engineering: {
    title: { es: "Testing e integración continua", en: "Testing and continuous integration" },
    items: {
      es: [
        "18 archivos de test en el backend con Vitest. Los webhooks tienen tests propios de verificación de firma HMAC en los tres escenarios, así que la seguridad del endpoint está probada.",
        "Los tests de análisis usan datos sintéticos representativos. El de retención simula 14 clientes de relleno y 6 recompradores, y fue el que confirmó el bug de agrupación por color antes de que llegara a producción.",
        "Los tests no se conectan a una Postgres real: usan una URL de base ficticia que solo satisface la validación de entorno. Eso obliga a que la lógica de negocio sean funciones puras que reciben datos, en lugar de hacer sus propias queries. El trade-off está documentado como decisión en el repositorio.",
        "El módulo de IA no tenía ningún test y era justo donde aparecían los bugs; hoy está cubierto. Sentry reporta los errores 500 y las fallas silenciosas del cron, que sin instrumentar se descubren cuando el cliente pregunta por qué sus datos no se actualizan.",
      ],
      en: [
        "18 backend test files with Vitest. The webhooks have their own HMAC signature tests across all three scenarios, so the endpoint's security is tested.",
        "Analysis tests use representative synthetic data. The retention one simulates 14 filler customers and 6 repeat buyers, and it is the test that confirmed the colour-grouping bug before it reached production.",
        "Tests do not connect to a real Postgres: they use a dummy database URL that only satisfies environment validation. That forces business logic to be pure functions that receive data instead of running their own queries. The trade-off is documented as a decision in the repo.",
        "The AI module had no tests at all, and it was exactly where the bugs were showing up; it is covered now. Sentry reports 500 errors and silent cron failures, which without instrumentation get discovered when the client asks why their data stopped updating.",
      ],
    },
  },
  testimonial: {
    quote: {
      es: "Upscale Lab está hecha a medida de cómo trabajamos. Fermín entendió el negocio antes de escribir una línea de código, y cada mejora que le propusimos la sumó a la plataforma usando nuestros propios datos.",
      en: "Upscale Lab is built around the way we work. Fermín understood the business before writing a line of code, and every improvement we suggested he added to the platform using our own data.",
    },
    short: {
      es: "Se hizo a medida de cómo trabajamos y fue creciendo con cada idea que le llevábamos.",
      en: "It was built around the way we work, and it grew with every idea we brought him.",
    },
    name: "Silvina Fischkyn",
    org: "Fiskyn",
  },
  closing: {
    es: "Mi trabajo acá fue sostener un sistema multi-tenant en producción con datos reales de clientes, donde cada número que menciona la IA tiene que poder rastrearse hasta una query verificable. Encontrar un dato mal antes de que lo note el cliente es tan parte del trabajo como construir la función que lo calcula. Casi todo lo que sumé después sirve para saber si la IA contestó bien.",
    en: "My job here was keeping a multi-tenant system running in production on clients' live data, where every number the AI mentions has to trace back to a verifiable query. Catching a wrong number before the client does is as much part of the job as building the function that computes it. Almost everything I added later is there to tell whether the AI answered correctly.",
  },
};

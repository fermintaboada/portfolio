import type { Project } from "../types";

export const upscaleLab: Project = {
  slug: "upscale-lab",
  name: "Upscale Lab",
  tagline: {
    es: "Plataforma de marketing con IA, multi-tenant. Corre en producción y la está probando su primer cliente.",
    en: "Multi-tenant AI marketing platform. It runs in production and its first client is trialling it.",
  },
  year: "2026",
  kind: { es: "Producto propio", en: "Own product" },
  status: { es: "En prueba con un cliente", en: "In trial with a client" },
  role: {
    es: "Diseño, desarrollo e infraestructura — proyecto completo",
    en: "Design, development and infrastructure — end to end",
  },
  domain: { es: "SaaS · E-commerce · IA", en: "SaaS · E-commerce · AI" },
  chips: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Fastify", slug: "fastify" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Claude", slug: "anthropic" },
  ],
  liveUrl: "https://marketing-metrics-nine.vercel.app/",
  thesis: {
    es: "Que una PyME o un influencer pueda prescindir de contratar marketing digital.",
    en: "Letting a small business or a creator do without hiring a digital marketing agency.",
  },
  overview: {
    es: [
      "La plataforma centraliza los canales de venta y las redes de cada cliente, calcula señales de negocio reales sobre esos datos, y una capa de IA razona sobre esas señales para sugerir contenido y responder preguntas puntuales — con el contexto de marca de ese cliente, nunca genérico. Cada recurso lleva su clientId a nivel de query y las credenciales se guardan encriptadas por tenant.",
      "La parte que más trabajo llevó no es el CRUD: es lo que rodea al agente. Un chatbot que responde con datos de negocio tiene un problema que uno genérico no tiene, y es que una respuesta plausible y una correcta se parecen demasiado. Buena parte del sistema existe para poder distinguirlas.",
    ],
    en: [
      "The platform centralises each client's sales channels and social accounts, computes real business signals over that data, and an AI layer reasons about those signals to suggest content and answer specific questions — with that client's brand context, never generic. Every record carries its clientId at the query level and credentials are stored encrypted per tenant.",
      "The part that took the most work is not the CRUD: it is what surrounds the agent. A chatbot answering with business data has a problem a generic one does not, which is that a plausible answer and a correct one look too much alike. A good part of the system exists to tell them apart.",
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
      value: "7",
      label: { es: "bugs de datos encontrados y verificados", en: "data bugs found and verified" },
    },
    {
      value: "7.546",
      label: { es: "pedidos históricos procesados", en: "historical orders processed" },
    },
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
          es: "Once módulos independientes — margen, retención, inventario, fricción de checkout, timing de compra, tendencia semanal, combos, cupones, salud de Instagram — calculan hallazgos con umbrales de confianza explícitos. Sin muestra suficiente, el módulo devuelve null: nunca inventa un número.",
          en: "Eleven independent modules — margin, retention, inventory, checkout friction, purchase timing, week-over-week trend, bundles, coupons, Instagram health — compute findings with explicit confidence thresholds. Without a large enough sample the module returns null: it never invents a number.",
        },
      },
      {
        title: { es: "Interpretación con Claude", en: "Interpretation with Claude" },
        body: {
          es: "El chatbot y el generador de sugerencias reciben esas señales ya calculadas, nunca filas crudas. Cada prompt lleva una regla de grounding explícita: si un dato no está, hay que decirlo — nunca inventarlo.",
          en: "The chatbot and the suggestion generator receive those precomputed signals, never raw rows. Every prompt carries an explicit grounding rule: if a data point is missing, say so — never invent it.",
        },
      },
      {
        title: { es: "Agente con herramientas bajo demanda", en: "Agent with on-demand tools" },
        body: {
          es: "Un loop de tool-use le da al modelo acceso a get_metrics, get_product_sales, get_stock y generate_image. Así responde algo tan puntual como cuántos pares de un modelo se vendieron ayer, sin que ese dato viva en el contexto fijo del prompt.",
          en: "A tool-use loop gives the model access to get_metrics, get_product_sales, get_stock and generate_image. That lets it answer something as specific as how many pairs of one model sold yesterday, without that detail living in the prompt's fixed context.",
        },
      },
      {
        title: { es: "Visión y generación de imagen con marca", en: "Vision and on-brand image generation" },
        body: {
          es: "El cliente adjunta una foto de referencia en el chat; Claude la interpreta como imagen y, si genera contenido, esa referencia se suma sola a Gemini junto con la paleta y el estilo del cliente — sin pre-cargar nada.",
          en: "The client attaches a reference photo in the chat; Claude reads it as an image and, if it generates content, that reference is passed along to Gemini together with the client's palette and style — nothing to pre-configure.",
        },
      },
      {
        title: { es: "Filtro de costo antes de la llamada cara", en: "Cost filter before the expensive call" },
        body: {
          es: "Un clasificador barato — Haiku, sin contexto de marca — corta los pedidos ajenos al negocio antes de la llamada completa, sesgado a propósito hacia dejar pasar ante la duda para no bloquear pedidos creativos legítimos.",
          en: "A cheap classifier — Haiku, no brand context — rejects off-topic requests before the full call, deliberately biased toward letting borderline cases through so legitimate creative requests never get blocked.",
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
      es: "Si el asistente dice «estos son tus cinco peores productos» y la lista está mal, nadie lo nota hasta que el cliente toma la decisión equivocada. Casi todo lo que sigue existe para poder distinguir esas dos cosas. Es un sistema propio, sin plataformas externas.",
      en: "If the assistant says \"these are your five worst products\" and the list is wrong, nobody notices until the client makes the wrong call. Almost everything below exists to tell those two apart. It is a system of my own, with no external platform.",
    },
    steps: [
      {
        title: { es: "El dataset se diseña por dimensiones", en: "The dataset is designed by dimensions" },
        body: {
          es: "Veinticuatro casos armados cruzando tipo de pedido, forma de la consulta y estado de los datos — no por intuición. Sólo las preguntas son sintéticas: corren contra el pipeline real y los datos reales del tenant, así que respuestas, herramientas y fallas son auténticas.",
          en: "Twenty-four cases built by crossing request type, question shape and data state — not by intuition. Only the questions are synthetic: they run against the real pipeline over the tenant's real data, so answers, tools and failures are all authentic.",
        },
      },
      {
        title: { es: "Cada respuesta deja una traza auditable", en: "Every response leaves an auditable trace" },
        body: {
          es: "Se guarda el prompt, qué herramientas se llamaron y qué devolvieron, nunca sólo la respuesta final. Ante «hacé una imagen de un modelo en tendencia», la traza deja ver si de verdad consultó ventas o el modelo lo inventó. Nunca se muestra al cliente: existe para auditar después.",
          en: "It stores the prompt, which tools were called and what they returned, never just the final answer. For \"make an image of a trending model\", the trace shows whether it actually queried sales or the model made it up. Never shown to the client: it exists to audit afterwards.",
        },
      },
      {
        title: { es: "Comparar corridas y leer a mano", en: "Comparing runs and reading by hand" },
        body: {
          es: "Un comparador muestra qué casos cambiaron de herramientas, costo o comportamiento entre una corrida y otra — sin eso, «lo arreglé» es una impresión. Y las corridas se leen enteras en una interfaz local: si una respuesta de negocio es buena no lo decide un score automático.",
          en: "A comparator shows which cases changed tools, cost or behaviour between runs — without it, \"I fixed it\" is an impression. And runs are read in full in a local interface: whether a business answer is any good is not decided by an automatic score.",
        },
      },
    ],
    checks: {
      title: {
        es: "Cinco clases de verificación",
        en: "Five classes of check",
      },
      intro: {
        es: "Testear un sistema con un modelo de lenguaje adentro no se parece a testear una función: la misma entrada puede dar salidas distintas y ninguna tiene por qué estar mal. Estas son las cinco cosas que se verifican, y qué queda garantizado cuando cada una pasa.",
        en: "Testing a system with a language model inside is not like testing a function: the same input can produce different outputs and none of them has to be wrong. These are the five things that get checked, and what each one guarantees when it passes.",
      },
      items: [
        {
          kind: { es: "Aislamiento entre clientes", en: "Cross-tenant isolation" },
          ensures: {
            es: "Que el contexto que se le manda al modelo para un cliente no contenga datos de otro, y que ninguna respuesta nombre productos ajenos.",
            en: "That the context sent to the model for one client carries no data from another, and that no response ever names someone else's products.",
          },
          found: {
            es: "Corre sin gastar una llamada al modelo, y se controla a sí misma: si el contexto de un cliente no trae ni sus propios productos, se reporta rota en vez de dar verde.",
            en: "It runs without spending a model call, and it checks itself: if a client's context does not even carry their own products, it reports as broken instead of passing.",
          },
        },
        {
          kind: { es: "Trayectoria del agente", en: "Agent trajectory" },
          ensures: {
            es: "Que la respuesta se haya alcanzado por el camino correcto: qué herramientas se llamaron, con qué argumentos y en qué orden.",
            en: "That the answer was reached the right way: which tools were called, with which arguments and in what order.",
          },
          found: {
            es: "Es la que expuso que el agente trabajaba sobre un catálogo recortado: la respuesta sonaba razonable, el camino no lo era.",
            en: "This is the one that exposed the agent working on a truncated catalogue: the answer sounded reasonable, the path was not.",
          },
        },
        {
          kind: { es: "Estabilidad ante repetición", en: "Stability under repetition" },
          ensures: {
            es: "Que el mismo pedido no cambie de resultado según la corrida. Cada caso se ejecuta tres veces y se compara.",
            en: "That the same request does not change result from one run to the next. Each case is executed three times and compared.",
          },
          found: {
            es: "Sin esto, una falla intermitente se lee como un caso aislado y se descarta. Así se midió que un pedido legítimo se rechazaba las tres veces.",
            en: "Without this, an intermittent failure reads as a one-off and gets dismissed. This is how a legitimate request was measured being rejected all three times.",
          },
        },
        {
          kind: { es: "Regresión de costo", en: "Cost regression" },
          ensures: {
            es: "Que nada volátil se cuele en el bloque cacheado del prompt, que es lo que sostiene el precio por respuesta.",
            en: "That nothing volatile slips into the cached block of the prompt, which is what holds the price per response down.",
          },
          found: {
            es: "Es la clase de falla que no rompe nada: la aplicación anda igual, sólo sale más cara. Sin un test que la vigile, se descubre con la factura.",
            en: "It is the class of failure that breaks nothing: the app works the same, it just costs more. Without a test watching it, you find out from the invoice.",
          },
        },
        {
          kind: { es: "Revisión humana anotada", en: "Annotated human review" },
          ensures: {
            es: "Que la respuesta sirva como consejo de negocio, no sólo que sea formalmente correcta. Es la única que no se automatiza.",
            en: "That the answer works as business advice, not merely that it is formally correct. It is the only one that is not automated.",
          },
          found: {
            es: "Un ranking puede estar bien calculado y ser un mal consejo: fue leyendo respuestas que apareció que confundía sin ventas con agotado.",
            en: "A ranking can be correctly computed and still be bad advice: reading answers is what surfaced it confusing no sales with out of stock.",
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
        es: "El caché del modelo es un match de prefijo: cualquier byte que cambie invalida todo lo que viene después. El system prompt tenía las métricas del día y las últimas interacciones en el medio, así que se invalidaba en cada mensaje. Separándolo en un bloque estable —identidad de marca, catálogo, instrucciones— y uno volátil, con el corte entre ambos, el costo por respuesta bajó de US$0,0487 a US$0,0292 y el caché pasó de cubrir el 2,7% de la entrada al 63%. Medido sobre la corrida completa del dataset, no estimado.",
        en: "The model's cache is a prefix match: any byte that changes invalidates everything after it. The system prompt had the day's metrics and the latest interactions in the middle, so it was invalidated on every message. Splitting it into a stable block — brand identity, catalogue, instructions — and a volatile one, with the boundary between them, brought cost per response from US$0.0487 down to US$0.0292 and took cache coverage of the input from 2.7% to 63%. Measured over the full dataset run, not estimated.",
      },
    },
    {
      title: { es: "Se testea lo que falla en silencio", en: "Testing what fails silently" },
      instead: {
        es: "en vez de confiar en que nada se rompe",
        en: "instead of trusting nothing breaks",
      },
      body: {
        es: "Dos ejemplos del mismo criterio. Uno: el detector de fugas entre clientes se controla a sí mismo — si el contexto de un cliente no trae ni sus propios productos, avisa que está roto en vez de reportar que no hay fugas. Otro: un test verifica que nada volátil se cuele en el bloque cacheado del prompt, la clase de regresión que no rompe nada — la app sigue andando, sólo sale más cara. Sin ese test, se entera por la factura a fin de mes.",
        en: "Two examples of the same standard. One: the cross-tenant leak detector checks itself — if a client's context does not even carry their own products, it reports as broken instead of reporting no leaks. The other: a test verifies nothing volatile slips into the cached block of the prompt, the kind of regression that breaks nothing — the app keeps working, it just costs more. Without that test, you find out from the invoice.",
      },
    },
    {
      title: { es: "Sin infraestructura anticipada", en: "No premature infrastructure" },
      instead: { es: "en vez de sumar una cola por si acaso", en: "instead of adding a queue just in case" },
      body: {
        es: "Sin cola ni Redis, por decisión explícita: a la escala actual esa pieza sería sobrepeso. El repositorio documenta el gatillo concreto para reevaluarlo — el cuarto cliente activo — en vez de escalar de antemano.",
        en: "No queue, no Redis, by explicit decision: at the current scale that piece would be dead weight. The repo documents the concrete trigger to revisit it — the fourth active client — instead of scaling up front.",
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
        es: "El contexto traía sólo los veinticinco productos sincronizados más recientemente, presentados como si fueran el catálogo completo. El ochenta y siete por ciento del catálogo le era invisible.",
        en: "The context carried only the twenty-five most recently synced products, presented as if they were the whole catalogue. Eighty-seven percent of the catalogue was invisible to it.",
      },
      impact: {
        es: "Ante una consulta por un producto que existía y tenía stock, respondía que no aparecía en el catálogo y que podía estar descontinuado. Le decía al cliente que su propia mercadería no existe.",
        en: "Asked about a product that existed and had stock, it replied that it was not in the catalogue and might be discontinued. It was telling the client their own merchandise did not exist.",
      },
      verification: {
        es: "Apareció al correr el dataset de evaluación, no revisando código.",
        en: "It surfaced by running the evaluation dataset, not by reading code.",
      },
      fix: {
        es: "Pasar el catálogo entero con sólo nombre y precio. El resultado fue contraintuitivo: pesa menos que los veinticinco anteriores —18.625 contra 19.204 tokens— porque las URLs de las imágenes ocupaban más que todo el resto junto. El arreglo salió más barato que el bug.",
        en: "Pass the whole catalogue with just name and price. The result was counterintuitive: it weighs less than the previous twenty-five — 18,625 against 19,204 tokens — because the image URLs took up more room than everything else combined. The fix came out cheaper than the bug.",
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
  ],
  engineering: {
    title: { es: "Testing e integración continua", en: "Testing and continuous integration" },
    items: {
      es: [
        "18 archivos de test en el backend con Vitest, incluidos los webhooks con verificación de firma HMAC en los tres escenarios: no alcanza con que compile, la seguridad del endpoint está probada.",
        "Los tests de análisis usan datos sintéticos representativos, no casos triviales. El de retención simula 14 clientes de relleno y 6 recompradores reales — eso fue lo que permitió confirmar el bug de agrupación por color antes de tocar producción.",
        "Los tests no pegan contra una Postgres real: usan una URL de base dummy que sólo satisface la validación de entorno. Eso obliga a que la lógica de negocio sea función pura que recibe datos, no que hace su propia query. El trade-off está escrito como decisión en el repositorio, no es un descuido.",
        "El módulo de IA no tenía ni un test, y era justamente donde estaban saliendo los bugs — hoy está cubierto. Sentry reporta los 500 y los fallos silenciosos del cron: la clase de error que, sin instrumentar, se descubre cuando el cliente pregunta por qué sus datos no se actualizan.",
      ],
      en: [
        "18 backend test files with Vitest, including webhooks with dedicated HMAC signature tests across all three scenarios: compiling is not enough, the endpoint security is tested.",
        "Analysis tests use representative synthetic data, not trivial cases. The retention one simulates 14 filler customers and 6 real repeat buyers — that is what confirmed the colour-grouping bug before it reached production.",
        "Tests do not hit a real Postgres: they use a dummy database URL that only satisfies environment validation. That forces business logic to be pure functions receiving data rather than issuing their own queries. The trade-off is written down as a decision in the repo, not an oversight.",
        "The AI module had no tests at all, and it was exactly where the bugs were coming from — it is covered now. Sentry reports 500s and silent cron failures: the kind of error that, uninstrumented, gets discovered when the client asks why their data stopped updating.",
      ],
    },
  },
  closing: {
    es: "El trabajo acá no fue escribir features aisladas: fue sostener un sistema multi-tenant en producción con datos reales de un cliente, donde cada número que la IA menciona tiene que poder rastrearse hasta una query verificable — y donde encontrar que un dato está mal antes de que lo note el cliente es tan parte del trabajo como construir la función que lo calcula. Casi todo lo que sumé después existe para eso: no para que la IA conteste, sino para poder saber si contestó bien.",
    en: "The work here was not writing isolated features: it was keeping a multi-tenant system alive in production on a real client data, where every number the AI mentions has to trace back to a verifiable query — and where catching a wrong number before the client does is as much the job as building the function that computes it. Almost everything I added later exists for that: not to make the AI answer, but to be able to know whether it answered well.",
  },
};

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
      "La parte que más trabajo llevó no es el CRUD: es lo que rodea al agente. Un chatbot que responde con datos de negocio tiene un problema que uno genérico no tiene, y es que una respuesta plausible y una correcta se parecen demasiado. Buena parte del sistema existe para poder distinguirlas.",
    ],
    en: [
      "The platform centralises each client's sales channels and social accounts, computes real business signals over that data, and an AI layer reasons about those signals to suggest content, generate on-brand imagery and answer specific questions — always with that client's brand context, never generic.",
      "Every record in the database carries its clientId at the query level, integration credentials are stored encrypted per tenant, and each client's branding (colours, tone of voice, brand story, copy examples, banned words) is injected into every AI prompt that client triggers.",
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
      value: "24",
      label: {
        es: "casos de evaluación del agente",
        en: "evaluation cases for the agent",
      },
    },
    {
      value: "-40%",
      label: {
        es: "de costo por respuesta, medido",
        en: "cost per response, measured",
      },
    },
    {
      value: "7",
      label: { es: "bugs de datos encontrados y verificados", en: "data bugs found and verified" },
    },
    {
      value: "7.546",
      label: { es: "pedidos históricos procesados", en: "historical orders processed" },
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
          es: "El cliente adjunta una foto de referencia directo en el chat; Claude la interpreta como imagen y, si decide generar contenido, esa referencia se suma sola a Gemini 3.1 Flash Image junto con la paleta y el estilo visual del cliente — sin que el cliente tenga que pre-cargar nada.",
          en: "The client attaches a reference photo straight into the chat; Claude reads it as an image and, if it decides to generate content, that reference is passed along to Gemini 3.1 Flash Image together with the client palette and visual style — with nothing to pre-configure.",
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
          es: "Veinticuatro casos armados cruzando tipo de pedido, forma de la consulta y estado de los datos — no por intuición sobre qué podría fallar. Sólo las preguntas son sintéticas: se ejecutan contra el pipeline real y sobre los datos reales del tenant, así que las respuestas, las herramientas que se llaman y las fallas son auténticas.",
          en: "Twenty-four cases built by crossing request type, question shape and data state — not by intuition about what might break. Only the questions are synthetic: they run against the real pipeline over the tenant's real data, so the answers, the tools called and the failures are all authentic.",
        },
      },
      {
        title: { es: "Se mide el camino, no sólo la respuesta", en: "The path is measured, not just the answer" },
        body: {
          es: "Ante un pedido como «hacé una imagen de un modelo que esté en tendencia esta semana, usá nuestra tipografía», la traza permite verificar cada eslabón: que haya consultado ventas para determinar qué está en tendencia, que haya elegido un producto que existe, que haya traído la foto verdadera de ese producto, y que el prompt final mencione la tipografía de la marca. Una respuesta linda por el camino equivocado sigue siendo un problema.",
          en: "For a request like \"make an image of a model that's trending this week, use our typeface\", the trace lets me verify every link: that it queried sales to decide what is trending, that it picked a product that exists, that it fetched that product's real photo, and that the final prompt mentions the brand's typeface. A nice answer reached the wrong way is still a problem.",
        },
      },
      {
        title: { es: "Cada respuesta deja una traza auditable", en: "Every response leaves an auditable trace" },
        body: {
          es: "Se guarda el prompt, qué herramientas se llamaron con qué argumentos, un recorte de lo que devolvieron, el motivo de corte, los tokens —incluidos los de caché— y la latencia. Nunca se le muestra al cliente: existe para poder auditar después si una respuesta se fundamentó en datos reales o si el modelo improvisó. Cada traza queda vinculada al mensaje que la produjo, así el feedback del cliente se cruza con lo que la IA hizo de verdad.",
          en: "It stores the prompt, which tools were called with which arguments, a slice of what they returned, the stop reason, the tokens — cached ones included — and the latency. It is never shown to the client: it exists so I can audit afterwards whether an answer was grounded in real data or the model improvised. Each trace is linked to the message that produced it, so client feedback can be cross-referenced with what the AI actually did.",
        },
      },
      {
        title: { es: "Comparar dos corridas dice si el arreglo sirvió", en: "Comparing two runs says whether the fix worked" },
        body: {
          es: "Un comparador muestra qué casos cambiaron de herramientas, de costo o de comportamiento entre una corrida y otra. Sin eso, «lo arreglé» es una impresión; con eso, es una diferencia que se puede leer caso por caso.",
          en: "A comparator shows which cases changed tools, cost or behaviour between one run and the next. Without it, \"I fixed it\" is an impression; with it, it is a difference you can read case by case.",
        },
      },
      {
        title: { es: "Una interfaz para leer y anotar", en: "An interface to read and annotate" },
        body: {
          es: "Las corridas se revisan en una interfaz local donde cada respuesta se lee entera y se anota. El juicio sobre si una respuesta de negocio es buena no lo automatiza un score: hay que leerla.",
          en: "Runs are reviewed in a local interface where each answer is read in full and annotated. Whether a business answer is any good is not something a score automates: it has to be read.",
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
      title: { es: "Un chequeo que siempre da verde no vale nada", en: "A check that always passes is worth nothing" },
      instead: {
        es: "en vez de confiar en que el detector detecta",
        en: "instead of trusting that the detector detects",
      },
      body: {
        es: "La verificación de aislamiento entre clientes corre en dos capas: que el contexto que se le manda al modelo para un cliente no contenga datos de otro, y que las respuestas reales no nombren productos ajenos. Además incluye un control sobre sí misma: si el contexto de un cliente no contiene ni siquiera sus propios productos, avisa que el detector está roto en vez de reportar que no hay fugas.",
        en: "The cross-tenant isolation check runs in two layers: that the context sent to the model for one client carries no data from another, and that real responses never name someone else's products. It also includes a control over itself: if a client's context does not even contain their own products, it reports the detector as broken rather than reporting no leaks.",
      },
    },
    {
      title: { es: "Testear lo que no rompe nada", en: "Testing what breaks nothing" },
      instead: {
        es: "en vez de enterarse por la factura",
        en: "instead of finding out from the invoice",
      },
      body: {
        es: "Hay un test que verifica que nada volátil se cuele en el bloque cacheado del prompt. Es la clase de regresión que no rompe nada: la aplicación sigue andando igual, sólo sale más cara. Sin un test que la vigile, se descubre cuando llega la cuenta a fin de mes.",
        en: "There is a test that verifies nothing volatile slips into the cached block of the prompt. It is the kind of regression that breaks nothing: the app keeps working exactly the same, it just costs more. Without a test watching it, you find out when the bill arrives.",
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
      id: "agotado-vs-sin-ventas",
      headline: {
        es: "No distinguía «no se vendió» de «estaba agotado».",
        en: "It could not tell \"did not sell\" from \"was out of stock\".",
      },
      wrong: "liquidar",
      right: "reponer",
      cause: {
        es: "La herramienta de ventas omitía los productos con cero ventas y no traía el stock. Un ranking de los peores productos dejaba afuera justamente a los peores.",
        en: "The sales tool omitted products with zero sales and did not carry stock. A ranking of the worst products left out precisely the worst ones.",
      },
      impact: {
        es: "El modelo recomendaba liquidar productos que en realidad se habían agotado: el consejo opuesto al correcto. De 197 productos activos, 33 sin ventas estaban agotados y 132 tenían stock — y esa diferencia era invisible.",
        en: "The model recommended discounting products that had actually sold out: the opposite of the right advice. Of 197 active products, 33 with no sales were out of stock and 132 had stock — and that difference was invisible.",
      },
      fix: {
        es: "Incluir los productos sin ventas y traer el stock junto con las ventas, para que agotado y sin demanda dejen de parecer lo mismo.",
        en: "Include products with no sales and carry stock alongside sales, so sold out and no demand stop looking alike.",
      },
    },
    {
      id: "filtro-tema",
      headline: {
        es: "El filtro de costo rechazaba funciones centrales del producto.",
        en: "The cost filter was rejecting the product's core features.",
      },
      wrong: "3 de 3",
      right: "0",
      cause: {
        es: "El clasificador barato que corta pedidos ajenos al negocio corría sin contexto de marca, así que no sabía que el nombre de un modelo del catálogo era un producto y no un tema cualquiera.",
        en: "The cheap classifier that rejects off-topic requests ran without brand context, so it did not know that a catalogue model's name was a product and not some unrelated topic.",
      },
      verification: {
        es: "Fallaba de forma inestable: la misma consulta pasaba o no según la corrida. Medirlo con tres ejecuciones por caso, en vez de asumirlo, fue lo que mostró que un pedido de imagen legítimo se rechazaba las tres veces.",
        en: "It failed unstably: the same request passed or not depending on the run. Measuring it with three executions per case, instead of assuming, is what showed a legitimate image request being rejected all three times.",
      },
      fix: {
        es: "El filtro corre sólo para el tenant de demostración y recibe el catálogo, de modo que reconozca los nombres propios del negocio.",
        en: "The filter runs only for the demo tenant and receives the catalogue, so it recognises the business's own product names.",
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
        "El módulo de IA no tenía ni un test, y era justamente donde estaban saliendo los bugs. Hoy está cubierto: es el lugar del sistema donde una falla es más difícil de ver a simple vista.",
        "Reportes de error con Sentry para los 500 y para los fallos silenciosos del cron — la clase de error que, sin instrumentar, se descubre cuando el cliente pregunta por qué sus datos no se actualizan.",
      ],
      en: [
        "18 backend test files with Vitest: sales logic, retention, analysis, product ranking, external data transformers, authentication, webhooks and scheduled jobs.",
        "Analysis tests use representative synthetic data, not trivial cases. The retention test simulates 14 filler customers and 6 real repeat buyers — that is what confirmed the colour-grouping bug before it reached production.",
        "Webhooks have dedicated HMAC signature tests across all three scenarios. Compiling is not enough: the endpoint security is tested.",
        "GitHub Actions pipeline split per workspace, each running strict type checking, then tests, then build. Runs on every push and every PR against master. If it does not typecheck, it does not merge.",
        "Tests do not hit a real Postgres: they use a dummy database URL that only satisfies environment validation. That forces business logic to be pure functions receiving data rather than issuing their own queries — the same discipline that later made synthetic-data retention tests possible. The trade-off is written down as a decision in the repo, not an oversight.",
        "Zod validation at the edges, versioned Prisma migrations — never a direct schema push — and email alerts when a channel fails three syncs in a row.",
        "The AI module had no tests at all, and it was exactly where the bugs were coming from. It is covered now: it is the part of the system where a failure is hardest to spot by eye.",
        "Error reporting with Sentry for 500s and for silent cron failures — the kind of error that, uninstrumented, gets discovered when the client asks why their data stopped updating.",
      ],
    },
  },
  closing: {
    es: "El trabajo acá no fue escribir features aisladas: fue sostener un sistema multi-tenant en producción con datos reales de un cliente, donde cada número que la IA menciona tiene que poder rastrearse hasta una query verificable — y donde encontrar que un dato está mal antes de que lo note el cliente es tan parte del trabajo como construir la función que lo calcula. Casi todo lo que sumé después existe para eso: no para que la IA conteste, sino para poder saber si contestó bien.",
    en: "The work here was not writing isolated features: it was keeping a multi-tenant system alive in production on a real client data, where every number the AI mentions has to trace back to a verifiable query — and where catching a wrong number before the client does is as much the job as building the function that computes it. Almost everything I added later exists for that: not to make the AI answer, but to be able to know whether it answered well.",
  },
};

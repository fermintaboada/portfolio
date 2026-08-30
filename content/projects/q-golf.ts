import type { Project } from "../types";

export const qGolf: Project = {
  slug: "q-golf",
  name: "Q-Golf",
  tagline: {
    es: "Sistema de reserva de turnos para un club de golf, con las reglas del negocio validadas en el servidor.",
    en: "Tee-time booking system for a golf club, with the business rules enforced on the server.",
  },
  year: "2025 — 2026",
  kind: { es: "Proyecto propio", en: "Personal project" },
  status: { es: "Finalizado", en: "Completed" },
  role: {
    es: "Full-stack — API, base de datos, frontend y deploy",
    en: "Full-stack — API, database, frontend and deploy",
  },
  domain: { es: "Reservas · Full-stack", en: "Booking · Full-stack" },
  chips: ["React", "Express", "TypeORM", "PostgreSQL"],
  liveUrl: "https://appointment-scheduling-system-lime.vercel.app",
  repoUrl: "https://github.com/fermintaboada/appointment-scheduling-system",
  thesis: {
    es: "Que una regla del negocio no dependa de que el formulario se porte bien.",
    en: "Making a business rule independent of whether the form behaves.",
  },
  overview: {
    es: [
      "Un socio del club se registra, elige día y horario, y reserva su turno; después puede ver sus turnos vigentes y cancelarlos. El club tiene reglas — no se reserva para el pasado, hace falta avisar con veinticuatro horas, sólo de lunes a viernes entre las ocho y las seis, y un turno activo por vez — y esas reglas son el producto.",
      "Es un proyecto propio, hecho para tener un sistema completo de punta a punta: API en Express con TypeScript, PostgreSQL con TypeORM, frontend en React, y todo desplegado. Lo interesante no es la pantalla, es dónde viven las reglas.",
    ],
    en: [
      "A club member signs up, picks a day and a time, and books a tee time; afterwards they can see their active bookings and cancel them. The club has rules — no bookings in the past, twenty-four hours of notice, Monday to Friday between eight and six, one active booking at a time — and those rules are the product.",
      "It is a personal project, built to have one complete system end to end: an Express API in TypeScript, PostgreSQL with TypeORM, a React frontend, all of it deployed. The interesting part is not the screen, it is where the rules live.",
    ],
  },
  shots: [
    {
      src: "/proyectos/qgolf-2-agendar.webp",
      alt: {
        es: "Pantalla de agendar turno con las condiciones de reserva y el aviso de cuenta requerida",
        en: "Booking screen showing the reservation rules and the account requirement",
      },
      caption: {
        es: "Las condiciones se muestran antes de pedir la cuenta: quien llega sin registrarse ya sabe qué puede reservar. Cada una de esas cuatro líneas es una validación que corre en el servidor.",
        en: "The rules are shown before asking for an account: whoever lands without registering already knows what they can book. Each of those four lines is a validation that runs on the server.",
      },
    },
    {
      src: "/proyectos/qgolf-1-hero.webp",
      alt: {
        es: "Portada de Q-Golf con una vista cenital de una pelota de golf",
        en: "Q-Golf home page with an overhead view of a golf ball",
      },
      caption: {
        es: "Las páginas públicas se navegan sin cuenta; el login se pide recién cuando hace falta reservar.",
        en: "Public pages are browsable without an account; login is only required at the point of booking.",
      },
    },
    {
      src: "/proyectos/qgolf-3-campo.webp",
      alt: {
        es: "Sección del campo de golf con la descripción de las instalaciones",
        en: "Course section describing the club facilities",
      },
      caption: {
        es: "El contenido del club es contenido, no una excusa para el formulario: el driving range no requiere turno y la página lo dice.",
        en: "The club content is real content, not an excuse for the form: the driving range needs no booking and the page says so.",
      },
    },
  ],
  metrics: [
    {
      value: "5",
      label: {
        es: "reglas de negocio validadas en el servidor",
        en: "business rules enforced on the server",
      },
    },
    {
      value: "3",
      label: {
        es: "capas entre la ruta HTTP y la base",
        en: "layers between the HTTP route and the database",
      },
    },
    {
      value: "1",
      label: {
        es: "bug encontrado al escribir los tests",
        en: "bug found while writing the tests",
      },
    },
  ],
  decisions: [
    {
      title: { es: "Las reglas viven en el servidor", en: "The rules live on the server" },
      instead: {
        es: "en vez de confiar en el selector de fecha",
        en: "instead of trusting the date picker",
      },
      body: {
        es: "El frontend puede desactivar los fines de semana en el calendario, y lo hace. Pero la validación real —pasado, anticipación mínima, horario, día hábil, turno duplicado— está en la capa de servicios de la API, que lanza si se viola. Un formulario es una comodidad; una regla de negocio es una garantía.",
        en: "The frontend can grey out weekends in the calendar, and it does. But the real validation — past dates, minimum notice, opening hours, weekdays, duplicate bookings — sits in the API's service layer, which throws on violation. A form is a convenience; a business rule is a guarantee.",
      },
    },
    {
      title: { es: "La contraseña no vive en el usuario", en: "The password does not live on the user" },
      instead: {
        es: "en vez de una columna más en la tabla",
        en: "instead of one more column on the table",
      },
      body: {
        es: "Usuario y credencial son dos entidades con relación uno a uno. Consultar un usuario y sus turnos nunca trae el hash de la contraseña, porque no está en esa tabla: la separación hace el descuido imposible en vez de improbable.",
        en: "User and credential are two entities in a one-to-one relation. Fetching a user and their bookings never carries the password hash along, because it is not in that table: the split makes the mistake impossible rather than unlikely.",
      },
    },
    {
      title: { es: "Reglas extraídas a funciones puras", en: "Rules extracted into pure functions" },
      instead: {
        es: "en vez de dejarlas dentro del controlador",
        en: "instead of leaving them inside the controller",
      },
      body: {
        es: "Las validaciones se sacaron a un módulo propio de funciones que reciben una fecha y devuelven un veredicto, sin tocar la base ni el request. Eso permitió cubrirlas con tests unitarios — y fue exactamente lo que dejó ver el bug de abajo.",
        en: "The validations were pulled into their own module of functions that take a date and return a verdict, touching neither the database nor the request. That made them coverable by unit tests — and it is exactly what surfaced the bug below.",
      },
    },
  ],
  findings: [
    {
      id: "viernes-bloqueado",
      headline: {
        es: "La validación de fin de semana bloqueaba los viernes.",
        en: "The weekend rule was blocking Fridays.",
      },
      wrong: "viernes",
      right: "domingos",
      cause: {
        es: "El día de la semana se comparaba contra el índice 5 en vez del 0. En la numeración de JavaScript, 0 es domingo y 5 es viernes: la regla rechazaba el día equivocado.",
        en: "The weekday was compared against index 5 instead of 0. In JavaScript's numbering, 0 is Sunday and 5 is Friday: the rule was rejecting the wrong day.",
      },
      impact: {
        es: "El club perdía todos los viernes de reservas — un día hábil completo, el más pedido de la semana — y aceptaba los domingos que quería rechazar.",
        en: "The club lost every Friday booking — a full working day, the most requested of the week — while accepting the Sundays it meant to reject.",
      },
      verification: {
        es: "Apareció al escribir los tests unitarios de las reglas, no en producción: el caso de prueba del viernes falló apenas se corrió.",
        en: "It surfaced while writing the unit tests for the rules, not in production: the Friday case failed as soon as it ran.",
      },
      fix: {
        es: "Comparar contra el índice correcto, con un test por cada día de la semana para que no vuelva a pasar en silencio.",
        en: "Compare against the right index, with a test per weekday so it cannot happen silently again.",
      },
    },
  ],
  engineering: {
    title: { es: "Capas y tests", en: "Layers and tests" },
    items: {
      es: [
        "La API está separada en capas con una responsabilidad cada una: los repositorios extienden a TypeORM con los métodos de validación, los servicios contienen la lógica y lanzan cuando una regla se viola, y los controladores sólo traducen esos errores a respuestas HTTP.",
        "Tests unitarios con Jest sobre las reglas de agendamiento, cubriendo cada día de la semana y cada límite de horario. Fueron escritos después del sistema, y encontraron un bug que estaba en producción.",
        "Confirmación de reserva por email con Resend, en HTML con la identidad del club.",
        "Deploy real de las tres piezas: frontend en Vercel con reescrituras para que una SPA no devuelva 404 al refrescar una ruta, API en Render y PostgreSQL en Neon.",
      ],
      en: [
        "The API is split into layers with one responsibility each: repositories extend TypeORM with the validation methods, services hold the logic and throw when a rule is violated, and controllers only translate those errors into HTTP responses.",
        "Unit tests with Jest over the scheduling rules, covering every weekday and every opening-hour boundary. They were written after the system, and they found a bug that was live.",
        "Booking confirmation by email through Resend, in HTML carrying the club's identity.",
        "A real deploy of all three pieces: frontend on Vercel with rewrites so a SPA does not 404 when a route is refreshed, API on Render and PostgreSQL on Neon.",
      ],
    },
  },
  stack: [
    {
      label: { es: "Frontend", en: "Frontend" },
      items: ["React 19", "Vite", "CSS Modules", "Formik + Yup", "Axios"],
    },
    {
      label: { es: "Backend", en: "Backend" },
      items: ["Node.js", "Express", "TypeScript", "Jest"],
    },
    {
      label: { es: "Datos", en: "Data" },
      items: ["PostgreSQL", "TypeORM", "Neon"],
    },
    {
      label: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel", "Render", "Resend"],
    },
  ],
  closing: {
    es: "Es el proyecto más chico de los cinco y el que mejor muestra una costumbre: escribir los tests de una regla aunque el sistema ya funcione. Acá eso devolvió un día hábil entero que el club estaba perdiendo sin saberlo.",
    en: "It is the smallest of the five projects and the one that best shows a habit: writing the tests for a rule even when the system already works. Here that gave back a full working day the club was losing without knowing.",
  },
};

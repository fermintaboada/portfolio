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
    es: "Full-stack: API, base de datos, frontend y deploy",
    en: "Full-stack: API, database, frontend and deploy",
  },
  domain: { es: "Reservas · Full-stack", en: "Booking · Full-stack" },
  chips: [
    { name: "React", slug: "react" },
    { name: "Express", slug: "express" },
    { name: "TypeORM", slug: "typeorm" },
    { name: "PostgreSQL", slug: "postgresql" },
  ],
  liveUrl: "https://appointment-scheduling-system-lime.vercel.app",
  repoUrl: "https://github.com/fermintaboada/appointment-scheduling-system",
  thesis: {
    es: "Que las reglas del club se cumplan aunque alguien saltee el formulario.",
    en: "Making the club's rules hold even if someone skips the form.",
  },
  overview: {
    es: [
      "Un socio del club se registra, elige día y horario y reserva su turno. Después puede ver sus turnos vigentes y cancelarlos. El club tiene reglas que el sistema hace cumplir: no se reserva para el pasado, hay que avisar con veinticuatro horas, solo se juega de lunes a viernes entre las ocho y las seis, y cada socio tiene un turno activo por vez.",
      "Es un proyecto propio que hice para tener un sistema completo de punta a punta: API en Express con TypeScript, PostgreSQL con TypeORM y frontend en React, todo desplegado. Lo más interesante está en dónde viven las reglas.",
    ],
    en: [
      "A club member signs up, picks a day and a time, and books a tee time. Afterwards they can see their active bookings and cancel them. The club has rules the system enforces: no bookings in the past, twenty-four hours of notice, Monday to Friday between eight and six only, and one active booking per member at a time.",
      "It is a personal project I built to have one complete system end to end: an Express API in TypeScript, PostgreSQL with TypeORM and a React frontend, all of it deployed. The most interesting part is where the rules live.",
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
        es: "La página también informa sobre el club: por ejemplo, aclara que el driving range no requiere turno.",
        en: "The page also tells you about the club: for example, it says the driving range needs no booking.",
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
        es: "El calendario del frontend desactiva los fines de semana, pero eso es solo una ayuda. La validación que cuenta (fechas pasadas, anticipación mínima, horario, día hábil y turno duplicado) está en la capa de servicios de la API, que lanza un error si se viola alguna regla.",
        en: "The frontend calendar greys out weekends, but that is only a convenience. The validation that counts (past dates, minimum notice, opening hours, weekdays and duplicate bookings) sits in the API's service layer, which throws an error when a rule is broken.",
      },
    },
    {
      title: { es: "La contraseña no vive en el usuario", en: "The password does not live on the user" },
      instead: {
        es: "en vez de una columna más en la tabla",
        en: "instead of one more column on the table",
      },
      body: {
        es: "Usuario y credencial son dos entidades con relación uno a uno. Consultar un usuario y sus turnos nunca trae el hash de la contraseña, porque no está en esa tabla, así que filtrarlo por descuido es imposible.",
        en: "User and credential are two entities in a one-to-one relation. Fetching a user and their bookings never brings the password hash along, because it is not in that table, so leaking it by accident is impossible.",
      },
    },
    {
      title: { es: "Reglas extraídas a funciones puras", en: "Rules extracted into pure functions" },
      instead: {
        es: "en vez de dejarlas dentro del controlador",
        en: "instead of leaving them inside the controller",
      },
      body: {
        es: "Saqué las validaciones a un módulo propio de funciones que reciben una fecha y devuelven un veredicto, sin tocar la base ni el request. Así las pude cubrir con tests unitarios, y esos tests encontraron el bug de abajo.",
        en: "I pulled the validations into their own module of functions that take a date and return a verdict, touching neither the database nor the request. That let me cover them with unit tests, and those tests found the bug below.",
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
        es: "El día de la semana se comparaba contra el índice 5 en vez del 0. En la numeración de JavaScript, 0 es domingo y 5 es viernes, así que la regla rechazaba el día equivocado.",
        en: "The weekday was compared against index 5 instead of 0. In JavaScript's numbering, 0 is Sunday and 5 is Friday, so the rule was rejecting the wrong day.",
      },
      impact: {
        es: "El club perdía todas las reservas de los viernes, un día hábil completo y el más pedido de la semana, y aceptaba los domingos que quería rechazar.",
        en: "The club lost every Friday booking, a full working day and the most requested of the week, while accepting the Sundays it meant to reject.",
      },
      verification: {
        es: "Apareció al escribir los tests unitarios de las reglas: el caso de prueba del viernes falló apenas lo corrí.",
        en: "It surfaced while I was writing the unit tests for the rules: the Friday case failed the first time I ran it.",
      },
      fix: {
        es: "Comparar contra el índice correcto y sumar un test por cada día de la semana, para que no vuelva a pasar sin que nadie lo note.",
        en: "Compare against the right index and add a test for every weekday, so it cannot happen again unnoticed.",
      },
    },
  ],
  engineering: {
    title: { es: "Capas y tests", en: "Layers and tests" },
    items: {
      es: [
        "La API está separada en capas con una responsabilidad cada una. Los repositorios extienden a TypeORM con los métodos de validación, los servicios tienen la lógica y lanzan un error cuando se viola una regla, y los controladores solo traducen esos errores a respuestas HTTP.",
        "Tests unitarios con Jest sobre las reglas de agendamiento, que cubren cada día de la semana y cada límite de horario. Los escribí después del sistema y encontraron un bug que estaba en producción.",
        "Confirmación de reserva por email con Resend, en HTML con la identidad del club.",
        "Las tres piezas están desplegadas: el frontend en Vercel, con reescrituras para que la SPA no devuelva 404 al refrescar una ruta, la API en Render y PostgreSQL en Neon.",
      ],
      en: [
        "The API is split into layers with one responsibility each: repositories extend TypeORM with the validation methods, services hold the logic and throw when a rule is violated, and controllers only translate those errors into HTTP responses.",
        "Unit tests with Jest over the scheduling rules, covering every weekday and every opening-hour boundary. I wrote them after the system, and they found a bug that was live.",
        "Booking confirmation by email through Resend, in HTML carrying the club's identity.",
        "All three pieces are deployed: the frontend on Vercel, with rewrites so the SPA does not 404 when a route is refreshed, the API on Render and PostgreSQL on Neon.",
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
    es: "Es el proyecto más chico de los cinco y el que mejor muestra una costumbre mía: escribir los tests de una regla aunque el sistema ya funcione. Acá esos tests le devolvieron al club un día hábil entero que estaba perdiendo sin saberlo.",
    en: "It is the smallest of the five projects and the one that best shows a habit of mine: writing the tests for a rule even when the system already works. Here those tests gave the club back a full working day it was losing without knowing.",
  },
};

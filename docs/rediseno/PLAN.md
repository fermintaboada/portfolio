# Rediseño del portafolio — plan de ejecución

Documento para ejecutar paso a paso. Cada sección tiene su captura de
referencia en `docs/rediseno/referencia/`.

Referencia de diseño: **https://www.iserre.site/** (Brahiam Iserre).
Sitio actual: **https://fermin-taboada.vercel.app**
Rama de trabajo: **`rediseno`** (ya creada, parte de `master` en `57cf778`).

---

## 1. Por qué rehacemos esto

Medición real de ambos sitios, con Chrome a 1440×900:

| Página | Alto | Scroll | Palabras |
|---|---:|---:|---:|
| **Referencia · iserre.site** (sitio entero) | 5.659px | 6,3 pantallas | **498** |
| Nuestro home | 3.811px | 4,2 pantallas | 602 |
| Nuestro caso Upscale Lab | 13.497px | **15 pantallas** | **3.049** |
| Nuestro caso Boleto Click | 5.392px | 6 pantallas | 830 |
| Nuestro caso Q-Golf | 5.629px | 6,3 pantallas | 813 |
| Nuestro caso Barras Nómades | 5.047px | 5,6 pantallas | 732 |
| Nuestro caso peto.tatts | 4.016px | 4,5 pantallas | 482 |

El caso principal tiene **seis veces más texto que todo el sitio de
referencia**. El problema no es estético: escribimos un ensayo técnico.
El contenido es bueno, pero está enterrado.

Los seis defectos concretos:

1. **Densidad.** Párrafos de 40 palabras donde la referencia pone una línea.
2. **Todo pesa igual.** Casi todo el texto es 15–16px gris. No hay dónde apoyar el ojo.
3. **No se puede saltar.** Sin navegación interna ni indicador de sección.
4. **El stack no se ve.** Son palabras en una lista, no un sistema reconocible.
5. **No hay perfil.** Falta quién es, dónde está, modalidad, formación.
6. **Las capturas son planas.** No se leen como producto.

---

## 2. Qué copiamos de la referencia y qué no

**Se copia** (es lo que resuelve nuestros problemas):

- Navegación numerada `00…05` con indicador de sección activa.
- Números de sección grandes al margen izquierdo.
- Títulos de sección cortos, en mayúsculas, muy grandes, con bajada a la derecha.
- **Grilla de logos del stack** con icono a color + nombre.
- **Chips de tecnología con mini-icono** en experiencia y proyectos.
- Panel de datos de perfil en grilla 2×2.
- Mockups de proyecto en perspectiva, no capturas planas.
- Densidad: una idea por bloque, frases cortas.

**No se copia**:

- La paleta. El negro con amarillo lima es la identidad de Brahiam.
  Mantenemos nuestro papel técnico frío con el rojo de corrección, que
  ya tiene carácter propio y no se confunde con el suyo.
- La sección "Servicios / Te ayudo a ordenar tu empresa": él vende
  servicios freelance, nosotros buscamos empleo. En su lugar va **Ahora**.

---

## 3. Sistema de diseño

Se mantiene todo lo de `app/globals.css`. **No tocar los tokens de color
ni las tipografías.** Bricolage Grotesque (display), Instrument Sans
(cuerpo), Spline Sans Mono (datos) se quedan.

Lo que sí cambia es **cómo se usan**:

| Rol | Hoy | Objetivo |
|---|---|---|
| Título de sección | 30px, mezclado con el cuerpo | `clamp(2.2rem, 5vw, 3.4rem)`, mayúsculas, display-tight |
| Número de sección | no existe | mono 12px en `--correction`, columna izquierda fija |
| Cuerpo | 15–16px en todos lados | 15px, máximo 2–3 líneas por bloque |
| Bajada de sección | no existe | 15px `--ink-2`, columna derecha, 2 líneas |

Regla de densidad para todo el rediseño: **ningún párrafo del home
supera las 45 palabras**. Si no entra, va al caso.

---

## 4. Arquitectura del home

Una sola página, seis secciones, navegación numerada persistente.

| # | id | Sección | Estado | Referencia |
|---|---|---|---|---|
| 00 | `inicio` | Portada | rediseño | `referencia/00-portada.png` |
| 01 | `perfil` | Perfil + experiencia | **nuevo** | `referencia/01-perfil.png` |
| 02 | `stack` | Stack con logos | **nuevo** | `referencia/02-stack.png` |
| 03 | `proyectos` | Los 5 proyectos | rediseño | `referencia/04-proyectos.png` |
| 04 | `ahora` | En qué estoy trabajando | **nuevo** | — |
| 05 | `contacto` | Contacto + CV | rediseño | `referencia/05-contacto.png` |

La sección **Criterios** (`components/home/Principles.tsx`) se elimina del
home: sus cinco principios ya viven dentro de los casos como decisiones.
Repetirlos en la portada es lo que más infla el texto sin agregar nada.

---

## 5. Especificación por sección

### 00 · Portada — `referencia/00-portada.png`

Estructura de la referencia: nombre gigante, una línea, menú vertical de
píldoras numeradas, foto a la derecha, sociales y CV arriba, selector de
idioma abajo a la derecha.

Qué construimos:

- **Nombre** a `clamp(3rem, 9vw, 6.5rem)`, display-tight, peso 700.
- **Una línea de tesis**, máximo 20 palabras. Se reusa `hero.headline`
  pero recortada: hoy tiene 18 palabras y va bien.
- **Menú numerado vertical** (00–05) como píldoras, igual que la
  referencia. En móvil pasa a horizontal con scroll.
- **La ficha de corrección `42 → 103.286` se mantiene**: es nuestro
  elemento distintivo y no tiene equivalente en la referencia. Va a la
  derecha, donde él pone la foto.
- Acciones: `Descargar CV` y `Contacto`.
- Conservar `LangToggle` y `ThemeToggle` del `Header` actual.

### 01 · Perfil — `referencia/01-perfil.png`

Dos columnas. Izquierda 55%, derecha 40%.

**Izquierda:**
- Etiqueta `EXPERIENCIA` en mono + rango de años a la derecha.
- Items numerados (1, 2, 3) con:
  - número en `--correction`
  - cargo en display semibold 16px
  - organización debajo en `--ink-3`
  - fechas alineadas a la derecha, mono 11px
  - cuerpo de 2 líneas máximo
  - **chips con mini-icono** de las tecnologías de ese puesto
  - separador `border-t border-rule` entre items
- Al cierre: enlace `VER PROYECTOS ↓` con subrayado que se dibuja.

**Derecha:**
- Frase-tesis en display 26px, 3 líneas.
- Bajada corta en `--ink-2`.
- **Panel 2×2** con separadores: `BASE` · `MODALIDAD` · `ESPECIALIDAD` ·
  `IDIOMAS`. Etiqueta en mono 10px mayúsculas, valor debajo en 14px.

El contenido ya está escrito en **`content/profile.ts`** → `profile`.

### 02 · Stack — `referencia/02-stack.png`

Lo que más quiere copiarse. En la referencia: título grande a la
izquierda, bajada a la derecha, y debajo filas centradas de pastillas con
icono a color y nombre en mayúsculas.

- Paquete ya instalado: **`simple-icons`**.
- Componente nuevo `components/ui/TechIcon.tsx`: recibe `slug`, busca el
  icono en `simple-icons` (`si` + PascalCase), renderiza el `path` en un
  `<svg viewBox="0 0 24 24">` y aplica `fill: #${icon.hex}`.
  Si el slug no existe, no renderiza nada en vez de romper.
- Pastilla: `border border-rule`, `bg-paper-raised`, `rounded-sm`,
  icono 16px + nombre en mono 11px mayúsculas con `tracking-[0.1em]`.
- **Diferencia con la referencia:** ellos ponen todo junto en tres filas.
  Nosotros agrupamos por capa (Frontend · Backend · Datos · IA ·
  Infraestructura) con la etiqueta del grupo en mono a la izquierda.
  Son 25 tecnologías: sin agrupar, se vuelve una sopa.

El contenido ya está escrito en **`content/profile.ts`** → `stack`.

### 03 · Proyectos — `referencia/04-proyectos.png`

En la referencia: un proyecto por vez, nombre grande, 3 líneas, chips con
icono, y a la derecha una **pila de capturas en perspectiva** con el
nombre del proyecto y una etiqueta de rubro abajo.

Qué construimos:

- Los 5 proyectos, **uno debajo del otro** (no carrusel: con cinco
  proyectos el carrusel esconde cuatro).
- Cada uno: número en `--correction`, nombre en display 34px,
  tagline recortada a 2 líneas, chips con mini-icono, y a la derecha
  la primera captura de `project.shots` en **mockup apilado**.
- Mockup: 2–3 capas superpuestas con `translate` y `rotate` mínimos,
  `border border-rule`, sombra suave. La de adelante es la real; las de
  atrás son la misma imagen desenfocada y con opacidad baja.
- Enlace `VER CASO COMPLETO →` por proyecto.

`components/home/WorkIndex.tsx` se reescribe entero.

### 04 · Ahora — sin referencia (sección propia)

- Etiqueta `AHORA` + fecha de última actualización.
- 2–3 párrafos cortos que escribe Fermín. **Contenido pendiente**, hoy
  hay un marcador `PENDIENTE` en `content/profile.ts` → `now.body`.
- Debajo, bloque de actividad real. **Ver la advertencia en §8.**

### 05 · Contacto — `referencia/05-contacto.png`

- Título grande + bajada.
- Columna izquierda: datos directos (email, GitHub, LinkedIn) en filas
  con separador, como la referencia.
- **CV según idioma** (ver §7).
- El email grande con subrayado animado que ya existe se mantiene.
- **Sin formulario por ahora**: necesita backend y una clave de Resend.
  Queda anotado como posible segunda etapa.

---

## 6. Inventario de tecnologías

Extraído de los cinco proyectos. **Ninguna debe faltar en la sección
Stack.** Las marcadas con ✓ tienen icono en `simple-icons`.

**Frontend:** React ✓ · Next.js ✓ · TypeScript ✓ · Tailwind CSS ✓ ·
Vite ✓ · React Server Components · shadcn/ui ✓ · Flowbite React ·
Framer Motion ✓ (slug `framer`) · TanStack Query · Recharts ·
Formik · Yup · Axios ✓ · CSS Modules

**Backend:** Node.js ✓ · Fastify ✓ · Express ✓ · NestJS ✓ · Zod ✓

**Datos:** PostgreSQL ✓ · Prisma ✓ · TypeORM ✓ · Supabase ✓ · Neon ✓

**IA:** Claude ✓ (slug `anthropic`) · Gemini ✓ (slug `googlegemini`) ·
Vertex AI · Tool use / agentes · Evals propios

**Testing:** Vitest ✓ · Jest ✓

**Auth y seguridad:** OAuth 2.0 · JWT ✓ · NextAuth ✓ · AES-256-GCM ·
Webhooks HMAC

**Integraciones:** Stripe ✓ · Mapbox ✓ · Resend ✓ · Tienda Nube API ·
Instagram Graph API

**Infraestructura:** Vercel ✓ · Render ✓ · GitHub Actions ✓ · Sentry ✓ ·
Docker ✓ · Git ✓

Las que no tienen logo (React Server Components, Tool use, Evals propios,
AES-256-GCM, Webhooks HMAC, las APIs de terceros) van en una fila final
de texto sin icono, con la etiqueta `TAMBIÉN`. No inventar logos.

---

## 7. CV por idioma

- Archivos: `public/cv-es.pdf` y `public/cv-en.pdf`.
  Hoy existe `public/cv-fermin-taboada.pdf` → renombrar a `cv-es.pdf`.
  **El inglés lo tiene que aportar Fermín.**
- En `content/site.ts`, `contact.cvHref` pasa de string a
  `{ es: "/cv-es.pdf", en: "/cv-en.pdf" }`.
- El botón usa `lang` de `useLang()` para elegir, y el atributo
  `download` con un nombre limpio: `Fermin-Taboada-CV.pdf`.
- Si falta el archivo en inglés, cae al español en vez de dar 404.

**Decisión tomada: no se usa CMS.** Se evaluaron Sanity y Payload. No
agregan ninguna skill que Upscale Lab no demuestre ya (Postgres, Prisma,
migraciones, auth, panel de administración) y contradirían el principio
declarado en el propio portafolio de no sumar infraestructura antes de
necesitarla. Para actualizar el CV se reemplaza el archivo y se pushea.

**Gatillo para reevaluar:** si la sección Ahora pasa a cambiar más de una
vez por semana, o si se suma un tercer idioma.

---

## 8. Advertencia sobre la actividad de GitHub

Se aprobó alimentar la sección Ahora con la actividad real de GitHub.
**Al verificarlo contra la API, el resultado invalida esa decisión.**

Consulta a `https://api.github.com/users/fermintaboada/events/public`
el 2026-09-21:

```
eventos: 8
  7 fermintaboada/portfolio · PushEvent
  1 fermintaboada/portfolio · CreateEvent
más reciente: 2026-09-04T23:23:22Z
```

Toda la actividad pública es del repo del portafolio y la más reciente
tiene 17 días. El trabajo real de las últimas semanas —evals,
observabilidad, ingeniería de costos— está en `marketing-metrics`, que es
privado y por lo tanto no aparece.

Mostrar eso diría "este tipo no programa hace tres semanas", que es
exactamente lo contrario de lo que pasó.

**Opciones, en orden de recomendación:**

1. **GraphQL con token.** `contributionsCollection` sí incluye las
   contribuciones privadas si se activa *Include private contributions on
   my profile* en GitHub. Requiere un token de solo lectura en una
   variable de entorno de Vercel. Es lo único que refleja el trabajo real.
2. **Solo texto.** La sección Ahora funciona igual sin actividad.
3. **Actividad pública tal cual.** No hacerlo: hoy juega en contra.

**Esto lo tiene que decidir Fermín antes de construir la sección.**

---

## 9. Recorte de los casos

Objetivo: de 3.049 a ~900 palabras en Upscale Lab, proporcional en el resto.

**Se queda:**
- Cabecera con chips de stack
- Capturas
- Métricas
- Hallazgos (son escaneables y son el mejor material)
- Las cinco clases de verificación
- Stack completo

**Se va o se recorta a una línea:**
- Los nueve bloques de `decisions`: se reducen a **tres**, las de más
  peso, y el cuerpo de cada una baja a 40 palabras.
- `flow` y `evaluation`: los pasos bajan de 60–80 palabras a 35.
- `engineering`: de 8 items a 4.
- `overview`: de 3 párrafos a 2.
- `closing`: se mantiene, es corto y cierra bien.

Regla: si una frase explica por qué algo es difícil **y** cómo se
resolvió, se parte. Se deja el qué, se va el ensayo.

---

## 10. Orden de ejecución

1. **Navegación numerada.** `components/chrome/Header.tsx`: reemplazar la
   nav actual por 00–05 con scroll-spy vía `IntersectionObserver`.
   Nuevo hook `lib/useActiveSection.ts`.
2. **`components/ui/TechIcon.tsx`.** Es dependencia de las secciones 01,
   02 y 03.
3. **Sección 02 Stack.** La más visual y la de menor riesgo: sirve para
   validar el `TechIcon` y la densidad nueva.
4. **Sección 01 Perfil.** Contenido ya escrito.
5. **Sección 03 Proyectos.** Reescribir `WorkIndex.tsx` con mockups.
6. **Sección 00 Portada.** Rediseñar `Hero.tsx`.
7. **Sección 04 Ahora.** Depende de la decisión de §8.
8. **Sección 05 Contacto.** CV bilingüe.
9. **Eliminar `Principles.tsx`** del home y de `app/page.tsx`.
10. **Recorte de los casos** (§9).
11. Verificación final (§11).

Commit por paso. No mezclar secciones en un commit.

---

## 11. Criterios de aceptación

- [ ] `npx tsc --noEmit` sin errores y `npm run build` limpio.
- [ ] El home no supera **900 palabras** ni **8 pantallas** a 1440×900.
- [ ] El caso de Upscale Lab baja de 3.049 a menos de 1.100 palabras.
- [ ] Las 25 tecnologías del §6 aparecen en la sección Stack.
- [ ] La navegación marca la sección activa al hacer scroll.
- [ ] Todo el contenido nuevo está en español **e inglés**.
- [ ] El CV cambia de archivo al cambiar el idioma.
- [ ] Sin `prefers-reduced-motion`, ninguna animación desplaza elementos.
- [ ] Sin JavaScript, el contenido se ve (ya hay un `<noscript>` en
      `app/layout.tsx` que lo cubre; no romperlo).
- [ ] Probado a 375px de ancho sin scroll horizontal.

Medir el resultado con el script de `scratchpad/web/medir.mjs`.

---

## 12. Lo que falta que aporte Fermín

1. **El texto de la sección Ahora** (`content/profile.ts` → `now.body`).
2. **El CV en inglés** → `public/cv-en.pdf`.
3. **La decisión sobre la actividad de GitHub** (§8).
4. **Cuál de las dos URLs de LinkedIn es la correcta**: el CV dice
   `linkedin.com/in/fermintaboada-dev` y el sitio
   `linkedin.com/in/fermin-taboada-dev`. Una está rota.

---

## 13. Ya hecho en la rama `rediseno`

- `content/profile.ts` creado con el contenido real de perfil, stack y
  el esqueleto de Ahora, en español e inglés.
- `content/site.ts`: `nav` ampliado con `home`, `profile`, `stack`,
  `now`, `menu`.
- `simple-icons` instalado.
- Capturas de referencia en `docs/rediseno/referencia/`.

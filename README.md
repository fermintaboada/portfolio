# Portafolio — Fermín Taboada

Portafolio de desarrollo con cuatro casos de estudio. Español por defecto, con traducción al inglés desde el header.

**En vivo:** pendiente de desplegar

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animación | Motion (Framer Motion) + CSS |
| Scroll | Lenis |
| Tipografías | Bricolage Grotesque · Instrument Sans · Spline Sans Mono |
| Deploy | Vercel |

## Idea de diseño

La página abre con una corrección real: un panel en producción informaba **42** seguidores de Instagram cuando la cuenta tenía **103.286**. El número equivocado aparece tachado a mano; el correcto cuenta hasta su valor.

Ese gesto es la firma del sitio y se repite en cada hallazgo de los casos de estudio. El color carga significado: el rojo marca lo que estaba mal, la tinta plena lo verificado.

## Contenido

Todo el texto vive en `content/`, tipado y bilingüe. No hay copy suelto en los componentes.

```
content/
  site.ts              # Datos de contacto y textos del home
  types.ts             # Modelo de proyecto (hallazgos, decisiones, stack)
  projects/
    upscale-lab.ts
    boleto-click.ts
    barras-nomades.ts
    petotatts.ts
    index.ts           # Orden de aparición; filtra los borradores
```

Un proyecto con `draft: true` no se publica: queda fuera del índice y no genera su ruta.

## Estructura

```
app/
  page.tsx                    # Home
  proyectos/[slug]/page.tsx   # Caso de estudio (SSG)
  globals.css                 # Tokens de color, tipografía y easings

components/
  chrome/     # Header, footer, tema, scroll suavizado
  home/       # Hero, índice de trabajo, criterios, contacto
  case/       # Vista de caso de estudio
  motion/     # Primitivos de revelado, contador y tachado
```

## Criterios de animación

- Sólo `transform` y `opacity`: ni layout ni paint.
- Curva propia `cubic-bezier(0.23, 1, 0.32, 1)` para todo lo que entra.
- Escalonado de 55 ms entre elementos hermanos.
- `prefers-reduced-motion` respetado: se va el desplazamiento, queda el fundido.

## Desarrollo

```bash
npm install
npm run dev
```

Abre en http://localhost:3000.

```bash
npm run build
npx tsc --noEmit
```

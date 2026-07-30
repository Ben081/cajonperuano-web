---
name: Tokosh de Cajón Peruano
description: Paleta de madera, cobre y ámbar para un proyecto cultural Huánuco — cajón, tradición y producción musical colaborativa.
colors:
  wood: "#3b2415"
  wood-deep: "#2a1a0f"
  cream: "#f5ede0"
  cream-dim: "#ebdfc9"
  copper: "#c2703d"
  copper-bright: "#d98a54"
  meter: "#e8a33d"
  meter-bright: "#f2b95c"
  stone: "#a8968a"
  text-on-cream: "#2a2019"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(1.8rem, 4vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "9999px"
spacing:
  section: "96px"
  container: "24px"
  card: "20px"
components:
  button-primary:
    backgroundColor: "{colors.copper}"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.copper-bright}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.wood-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "20px"
  input:
    backgroundColor: "{colors.wood-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
---

# Design System: Tokosh de Cajón Peruano

## Overview

**Creative North Star: "La Casa del Cajón"**

El sitio es una casa de madera cálida donde la tradición se encuentra con la producción musical moderna. Cada superficie evoca la textura del cajón peruano — madera oscura, bordes suaves, calidez sin pretensión. No es un dashboard ni una landing page de SaaS; es un espacio cultural que respira ritmo.

La personalidad es **artesanal y serena**: nada grita, nada compite por atención. El cobre y el ámbar son acentos que guían la mirada, no decoración. La madera profunda (wood-deep) es el lienzo; el crema (cream) es la tinta. El resultado se siente como una grabación analógica — cálido, con presencia, sin artificialidad.

**Key Characteristics:**
- Paleta monocromática de madera con acentos de cobre/ámbar — sin gradients morado-azul
- Tipografía Spectral para títulos (serif elegante, no Inter para todo)
- Bordes sutiles de cobre en lugar de sombras pesadas
- Animaciones que respiran: reveals suaves, contadores numéricos, ondas de audio
- Cards con wood-border en lugar de sombras — textura sobre elevación

## Colors

La paleta evoca la madera del cajón, el cobre de la consola de grabación y el ámbar del meter analógico.

### Primary
- **Cajón Copper** (#c2703d): Botones primarios, bordes accent, elementos interactivos. Es el color de la acción — aparece en CTAs, hover states, y como borde sutil en cards.
- **Copper Bright** (#d98a54): Hover state del copper, highlights en títulos italic, iconos activos. Versión más luminosa del copper para feedback inmediato.

### Secondary
- **Meter Gold** (#e8a33d): Numeración, badges monoespaciados, indicadores de estado. Evoca el VU meter de una consola de grabación — siempre informativo, nunca decorativo.
- **Meter Bright** (#f2b95c): Valores numéricos en counters, montos de donación, labels monoespaciados. La versión "encendida" del meter.

### Neutral
- **Wood Deep** (#2a1a0f): Fondo principal, superficies de modal, header. La madera más oscura — el lienzo donde todo se pinta.
- **Wood** (#3b2415): Fondo alternativo, secciones alternas, cards. La madera base — cálida pero no tan profunda como wood-deep.
- **Cream** (#f5ede0): Texto principal, títulos, contenido. La tinta sobre la madera — legible, cálida, sin ser blanco puro.
- **Cream Dim** (#ebdfc9): Texto secundario, descripciones, metadata. Versión apagada del cream para jerarquía.
- **Stone** (#a8968a): Texto terciario, labels deshabilitados, divisores. El color del desgaste natural de la madera.

### Named Rules
**The Copper Restraint Rule.** El copper solo aparece en elementos interactivos y acentos de navegación. Nunca en fondos grandes ni en bloques de texto. Su rareza es lo que lo hace guiar la mirada.

**The Warmth Rule.** Todo el sitio es cálido — ni un solo azul, ni un solo gris frío. Los neutros son madera/crema, no negro/gris. Si algo se siente "frío", está mal.

## Typography

**Display Font:** Spectral (con Georgia, serif como fallback)
**Body Font:** Inter (con system-ui, sans-serif como fallback)
**Label/Mono Font:** JetBrains Mono (con ui-monospace, monospace como fallback)

**Character:** Spectral aporta elegancia editorial sin ser pretenciosa — es una serif que se siente humana, como la voz de un narrador. Inter es invisible por diseño: legible, neutra, deja que la madera y el cobre hablen. JetBrains Mono ancla los datos técnicos y numéricos con precisión de estudio de grabación.

### Hierarchy
- **Display** (600, clamp(1.8rem, 4vw, 3.1rem), 1.12): Títulos de sección — Proyecto, Álbum, Metodología. Siempre Spectral, siempre con presencia.
- **Headline** (600, 1.25rem, 1.3): Subtítulos dentro de cards, títulos de fase en cronograma.
- **Title** (500, 15px, 1.4): Nombres de equipo, títulos de género musical, labels de card.
- **Body** (400, 15.5px, 1.65): Descripciones largas, párrafos explicativos. maxWidth recomendado: 65ch.
- **Label** (600, 12.5px, 0.08em): Tags de sección ("SOBRE EL PROYECTO", "PRODUCTO"), navigation, badges monoespaciados. Siempre uppercase.

### Named Rules
**The Monospace Anchor Rule.** JetBrains Mono solo se usa para datos, métricas y navegación — nunca para texto narrativo. Su presencia dice "esto es un dato", no "esto es una palabra".

## Layout

El sitio usa un contenedor central de `max-w-6xl` (1152px) con `px-6` (24px) de padding lateral. Las secciones alternan fondo `wood` y `wood-deep` con bordes de separación `border-copper/15`.

**Grid base:** `grid-cols-1` en mobile, `md:grid-cols-2` o `md:grid-cols-[280px_1fr]` en desktop. Las cards usan `sm:grid-cols-2` o `sm:grid-cols-3` selon la densidad.

**Ritmo vertical:** `py-24` (96px) entre secciones — generoso, respirado. Las cards internas usan `gap-4` o `gap-6`.

**Densidad:** Baja. El sitio tiene mucho espacio en blanco (o más bien, "espacio de madera"). Las cards tienen `p-5` (20px) de padding interno. Los elementos nunca se sienten apretados.

## Elevation & Depth

El sitio NO usa sombras. La profundidad se comunica a través de:

1. **Tonal layering:** wood-deep (más oscuro) sobre wood (más claro) crea profundidad sutil.
2. **Bordes de cobre:** `border: 1px solid color-mix(in oklab, var(--color-copper) 45%, transparent)` — la clase `wood-border` es la firma visual del proyecto.
3. **Backdrop blur:** Header y modales usan `backdrop-blur-md` sobre wood-deep semi-transparente.

### Named Rules
**The No-Shadow Rule.** El sitio no proyecta sombras. La profundidad viene de la tonalidad de la madera y los bordes de cobre. Si necesitas elevar algo, usa un fondo más claro o un borde, no una sombra.

## Shapes

**Form language:** Esquinas redondeadas suaves — nunca afiladas, nunca excesivas. El radio principal es `rounded-xl` (12px) para cards y `rounded-lg` (8px) para botones e inputs. Los badges y pills usan `rounded-full`.

**Bordes:** Todos los bordes son de cobre con opacidad reducida (`border-copper/15` a `border-copper/25`). Nunca son blancos ni negros — siempre cálidos.

**Clipping:** No se usa clip-path activamente. Las formas son rectangulares con esquinas redondeadas.

## Components

### Buttons
- **Shape:** rounded-lg (8px radius)
- **Primary:** bg-copper, text-cream, py-3.5 px-6, font-mono text-sm font-semibold. Transición: `hover:bg-copper-bright`
- **Secondary/ Ghost:** border border-meter/60, text-cream, sin fondo. Transición: `hover:bg-meter/15`
- **Hover / Focus:** Sin transform de escala — la transición de color es suficiente. Focus visible con outline nativo.

### Cards
- **Corner Style:** rounded-xl (12px)
- **Background:** wood-deep (cards principales) o wood (cards alternas)
- **Border:** wood-border (copper/45% transparent mix)
- **Shadow Strategy:** Ninguna — tonal layering únicamente
- **Internal Padding:** p-5 (20px)

### Inputs / Fields
- **Style:** bg-wood-deep, border border-meter/25, rounded-lg, text-cream
- **Focus:** border transition a `border-meter` — sin glow, sin shadow
- **Placeholder:** text-cream/40 (muy sutil)

### Navigation (Header)
- **Style:** Sticky, bg-wood-deep/85, backdrop-blur-md, border-b border-copper/25
- **Typography:** font-mono text-[12.5px] font-medium, text-cream/80
- **Hover:** text-meter-bright — transición de color suave
- **Mobile:** Drawer con border-t, sin animación de slide (toggle instant)

### Chips / Tags
- **Style:** rounded-full, border border-meter/25, text-cream/70, font-mono text-[12.5px]
- **Selected:** bg-meter, text-wood-deep — el "encendido" del meter
- **Transición:** `transition` (150ms) en hover y selección

## Do's and Don'ts

### Do:
- **Do** usar wood-border (copper/45%) para separar cards y secciones — es la firma visual.
- **Do** mantener la paleta cálida en todo momento — ni un pixel de azul o gris frío.
- **Do** usar JetBrains Mono para datos numéricos, métricas y labels de navegación.
- **Do** usar Spectral para títulos de sección — le da peso editorial sin ser pesado.
- **Do** mantener `prefers-reduced-motion` respetado — el sitio ya lo implementa.
- **Do** usar `ease-out` (cubic-bezier(0.23, 1, 0.32, 1)) para todas las transiciones — ya está en el código.

### Don't:
- **Don't** usar sombras (`box-shadow`) — la profundidad es tonal, no proyectada.
- **Don't** usar gradients morado-azul o cualquier color frío — rompe la calidez de la madera.
- **Don't** usar Inter para títulos — Inter es body text, Spectral es display.
- **Don't** animar con `ease-in` — siempre `ease-out` para entradas, `ease` para hover.
- **Don't** usar `scale(0)` en animaciones de entrada — empezar desde `scale(0.94)` o mayor.
- **Don't` usar `transition: all` — especificar propiedades exactas.
- **Don't** nestear cards dentro de cards — mantener la jerarquía plana.
- **Don't** usar iconos redondeados sobre cada título — los iconos son funcionales, no decorativos.

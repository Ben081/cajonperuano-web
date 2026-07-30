# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Líderes y miembros de Juntas Vecinales de Huánuco** (25-70 años): participantes directos del taller de producción musical colaborativa. Son el público principal del sitio — buscan informarse, postular y apoyar el proyecto.
- **Comunidad Huánuco y público general**: visitantes que descubren el proyecto, escuchan el álbum y pueden donar.
- **Investigadores y aliados institucionales**: Universidad UNDAR, Municipalidad Provincial de Huánuco, aliados del proyecto.

## Product Purpose

Sitio web institucional y de difusión del proyecto "Tokosh de Cajón Peruano" — un programa de fortalecimiento cultural y comunitario que graba un álbum de 24 pistas de ritmos afroperuanos, criollos y de fusión selva-andina de forma colaborativa con líderes vecinales de Huánuco. El sitio informa, convoca postulaciones y recibe donaciones. El éxito es que la comunidad participe, el álbum se publique y los resultados se difundan como artículo científico indexado.

## Positioning

Un proyecto que conecta la tradición oral del cajón peruano (Patrimonio Cultural de la Nación y de la Humanidad) con la producción musical moderna, manteniendo la identidad cultural y el tejido social del barrio. Producción colaborativa mediada por tecnología, convalidada por la academia (UNDAR) y el Estado (Municipalidad).

## Operating Context

- El sitio se despliega en un VPS Contabo (173.212.200.11) con Nginx
- Pago con Culqui (simulado, pendiente backend real)
- Formulario de postulación con envío a `/api/convocatoria` (pendiente backend)
- El álbum tiene 24 pistas en 4 géneros: afroperuano, criollo, fusión selva-andina, y otro
- Cronograma de 5 fases del proyecto

## Capabilities and Constraints

- **Secciones**: Hero, Proyecto, Álbum (24 pistas), Metodología, Cronograma, Facilitadores, Aliados, Equipo, Donadores, Convocatoria, Footer
- **Modales**: Donar (flujo de 4 pasos: monto → pago → datos → éxito) y Convocatoria
- **Formulario de convocatoria**: nombre, correo, junta vecinal, habilidad, mensaje, confirmación de edad
- **Donación**: monto mínimo S/ 15, opción anónima, normalización de nombre
- **Pendiente**: backend Node/Express para Culqui y postulaciones
- **Stack**: React (Vite) + Tailwind CSS v4 + Framer Motion

## Brand Commitments

- Nombre: "Tokosh de Cajón Peruano"
- Aliados: UNDAR × Municipalidad de Huánuco
- Dominio: cajonperuano.frate.lat
- Identidad visual existente: paleta de madera (wood, cream, copper, meter), tipografía Spectral para display, Inter para body, JetBrains Mono para mono

## Evidence on Hand

- `src/data/content.js`: datos de impacto, géneros musicales, fases, facilitadores, aliados, equipo
- `src/components/`: 14 componentes con animaciones Framer Motion existentes
- `README.md`: documentación técnica y de despliegue

## Product Principles

1. **Identidad cultural primero**: el sitio refleja la calidez de la madera, el cajón y la tradición Huánuco, no un template genérico.
2. **Claridad sobre ornamento**: la información del proyecto (qué, cómo, por qué) es el protagonista; el diseño la sirve, no la compite.
3. **Confianza a través del detalle**: errores cuidados, transiciones suaves, tipografía legible — todo comunica seriedad del proyecto académico-comunitario.
4. **Accesibilidad**: contrastes suficientes, Reduced Motion respetado, navegación clara.
5. **Comunidad visible**: los nombres de participantes, aliados y donadores tienen protagonismo, no sontexto decorativo.

## Accessibility & Inclusion

- `prefers-reduced-motion` ya implementado en index.css
- Paleta con contrastes altos (cream sobre wood-deep)
- Navegación por teclado básica en header y modales
- Edad del público objetivo: 25-70 años → tipografía legible, tamaños generosos

# Design: experience-timeline

## Context

La sección de experiencia del CV lee `content[locale].experience.items` en `site.ts` y la renderiza con `TimelineSection.astro`. Actualmente hay 3 ítems (BPS x2, Ripio Sr). La spec `experience-timeline` define 8 hitos en orden cronológico inverso; el change consiste en que los datos en código cumplan esa lista sin cambiar la UI ni el modelo de datos.

## Goals / Non-Goals

**Goals:**

- Que `experience.items` en ES y EN contenga exactamente los 8 hitos de la spec, en el mismo orden (más reciente primero).
- Descripciones coherentes y bilingües para cada entrada.
- Sin cambios en tipos ni en componentes; solo contenido.

**Non-Goals:**

- No modificar el layout ni las animaciones de la timeline.
- No añadir movimiento automático ni circular.
- No cambiar la estructura de `TimelineEntry` (period, title, description).

## Decisions

1. **Datos solo en `site.ts`**  
   Toda la información de la timeline vive en `content.es.experience.items` y `content.en.experience.items`. No se introduce archivo externo ni CMS; se mantiene la fuente única ya existente.

2. **Mismo tipo `TimelineEntry`**  
   Se reutiliza el tipo actual (`period`, `title`, `description`). Los hitos académicos (ingreso 2017, egreso 2025) usan el mismo formato; el título y la descripción transmiten que son hitos formativos.

3. **Orden fijo en el array**  
   El orden de visualización es el orden del array (reverse chronological). No se ordena en runtime; el orden en código es la fuente de verdad y debe coincidir con la tabla canónica de la spec.

4. **Alternativas descartadas**  
   - **JSON/Markdown externo**: Añade complejidad y otra fuente; para 8 ítems bilingües no aporta.  
   - **Ordenar por fecha en runtime**: Las fechas son strings presentacionales (ej. "Sep 2025 — Presente"); mantener orden explícito en datos es más simple y evita parsing.

## Risks / Trade-offs

- **Mantenimiento**: Cualquier nuevo hito o cambio de fechas requiere editar `site.ts` en dos lugares (ES y EN). Mitigación: entradas alineadas y comentario opcional con la lista canónica de la spec.
- **Riesgo técnico**: Bajo; solo datos, sin cambios de contrato ni de UI.

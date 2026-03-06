# Proposal: experience-timeline

## Why

La línea de tiempo de experiencia del CV mostraba solo tres entradas (desde nov 2022) y no reflejaba la historia laboral y académica completa. Es necesario que el sitio muestre todo el recorrido: ingreso a la universidad con beca (2017), paso por Alutel, evolución en Ripio (Jr → Ssr → Sr), egreso UCU (2025) y roles en BPS, con orden claro y sin solapamiento incorrecto entre Alutel y Ripio (sí se muestra el solapamiento BPS/Ripio en el último período).

## What Changes

- Ampliar los datos de experiencia de 3 a 8 hitos en orden cronológico inverso (más reciente primero).
- Incluir hitos académicos: ingreso universidad con beca (2017) y egreso como Software Engineer (Jun 2025).
- Incluir Alutel (Jun 2019 — Sep 2020) y la progresión en Ripio: Jr (Oct 2020 — Dic 2020), Ssr (Ene 2021 — Nov 2022), Sr (Nov 2022 — presente).
- Mantener los dos roles BPS actuales (Liberaciones CI/CD, SysAdmin Cluster) en las fechas ya definidas.
- Conservar la estructura vertical actual de la timeline (sin movimiento automático ni circular).
- Contenido bilingüe (ES/EN) para todas las entradas.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `experience-timeline`: Alinear datos y orden con la lista canónica de la spec (8 entradas, orden cronológico inverso, descripciones por entrada). La spec ya define el comportamiento; este change implementa y mantiene los datos conforme a ella.

## Impact

- **Código/datos**: `src/config/site.ts` — sección `experience.items` en `content.es` y `content.en`.
- **UI**: Ningún cambio de componente; `TimelineSection.astro` ya itera sobre `content[locale].experience.items`.
- **Specs**: La spec global `openspec/specs/experience-timeline/spec.md` ya contiene la lista canónica; este change asegura que el código la cumpla.

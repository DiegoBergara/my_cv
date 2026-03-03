## Context

El sitio actual es un CV construido con Astro 5 + React 19 + Tailwind CSS v4, desplegado estáticamente a GitHub Pages. Tiene soporte multi-idioma y un background Canvas 2D, pero carece del impacto visual para diferenciarse. Se va a eliminar toda la base de código y reconstruir desde cero.

El stack base (Astro + React + Tailwind) se mantiene. La infraestructura de deploy (GitHub Actions → GitHub Pages) también. Todo el código dentro de `src/` se elimina y se reescribe.

Datos de perfil existentes serán consolidados en un archivo unificado de configuración.

Público objetivo dual: perfiles no técnicos (reclutadores, gerentes) y perfiles técnicos (CTOs, colegas ingenieros). El tono debe ser minimalista pero creativo — sin pomposidad, animaciones sutiles (lo justo).

## Goals / Non-Goals

**Goals:**
- Portfolio/CV visualmente impactante con tono minimalista-creativo
- Fondo animado interactivo en hero (ReactBits) que reaccione a touch, click y scroll
- Carouseles para showcase de tecnologías por categoría
- CTAs claros: primario (Calendly) y secundario (email)
- Componentes UI con shadcn/ui, animaciones de texto con ReactBits
- Deploy estático, tiempos de carga rápidos, accesibilidad WCAG AA
- Soporte ES/EN con copies validados por el usuario
- Full responsive: mobile, tablet, desktop
- Archivo unificado de configuración para editar contenido en un solo lugar
- Score alto en Lighthouse (Performance > 90, Accessibility 100, SEO 100)

**Non-Goals:**
- Backend, APIs o formularios server-side
- Blog o sistema de contenido dinámico
- CMS o panel de administración
- Three.js / React Three Fiber (se usa ReactBits en su lugar)
- Framer Motion u otras librerías de animación pesadas
- Exceso de animaciones — solo lo justo y sutil

## Decisions

### 1. Framework: Astro 5 + React 19 (mantener)

**Decisión**: Mantener Astro como framework principal con React para islas interactivas.

**Rationale**: Astro genera HTML estático por defecto y solo hidrata componentes React donde se necesita interactividad (fondo animado, carouseles, menú mobile). Mejor rendimiento posible para un sitio estático.

**Alternativas descartadas**:
- Next.js: Más pesado, SSR innecesario para un CV estático
- Vanilla HTML: No soporta componentes interactivos de forma ergonómica

### 2. Fondo animado: ReactBits (solo hero)

**Decisión**: Usar ReactBits para el fondo animado interactivo del hero section. El efecto vive solo en el hero, no en toda la página.

**Rationale**: ReactBits ofrece backgrounds animados listos para usar (Aurora, Particles, Waves, etc.) que se integran como componentes React en las islas de Astro. Menor complejidad y bundle size que un setup custom de Three.js. Reacciona a touch, click y scroll.

**Fallback**: Gradiente CSS con los mismos colores del efecto para dispositivos sin soporte o con `prefers-reduced-motion`.

**Alternativas descartadas**:
- React Three Fiber + Three.js: Mayor complejidad, bundle más pesado, overkill para un fondo decorativo
- Canvas 2D custom: El actual — funcional pero sin diferenciación visual

### 3. Animaciones de texto: ReactBits

**Decisión**: Usar componentes de animación de texto de ReactBits (SplitText, BlurText, GradientText, etc.) para títulos y textos seleccionados.

**Rationale**: Consistencia con la librería de fondo. Componentes listos que se integran bien con React + Astro. Animaciones sutiles sin código custom.

### 4. Componentes UI: shadcn/ui

**Decisión**: Usar shadcn/ui como base de componentes (Button, Card, Badge, etc.) con estilos Tailwind.

**Rationale**: Componentes accesibles, bien tipados, sin lock-in (se copian al proyecto). Estilizables con Tailwind. Ya hay un Button configurado en el proyecto actual.

### 5. Skills: Carouseles por categoría

**Decisión**: Mostrar las tecnologías en carouseles horizontales agrupados por categoría (Backend, Frontend, DevOps/Infra) en lugar de grids estáticos de chips.

**Rationale**: Los carouseles dan dinamismo visual sin ocupar demasiado espacio vertical. Permiten mostrar muchas tecnologías de forma compacta. Scroll automático suave con opción de interacción manual.

### 6. Estilado: Tailwind CSS v4 (mantener)

**Decisión**: Mantener Tailwind CSS v4 con su integración Vite nativa.

**Rationale**: Ya configurado, zero-config con Astro. v4 trae mejores performance y cascade layers.

### 7. Paleta y tipografía

**Decisión**: Fondo oscuro (#0a0a0f base) con acentos en cyan/teal (#00ffc8, #06b6d4) y violeta (#8b5cf6). Tipografía Inter para cuerpo, font-display: swap.

**Rationale**: Fondo oscuro resalta el fondo animado y da sensación premium. Cyan y violeta son acentos tech modernos. Inter es la tipografía más legible para web. Tono minimalista.

### 8. Idiomas: ES + EN

**Decisión**: Español como default, inglés como alternativa. Sin soporte chino.

**Rationale**: Público objetivo principal es hispanoparlante y anglófono. Los copies finales se validan con el usuario antes de implementar.

### 9. Configuración unificada

**Decisión**: Un solo archivo `src/config/site.ts` que concentre toda la información editable: datos de perfil, experiencia, proyectos, skills, links, SEO, textos i18n.

**Rationale**: Permite al usuario editar todo su CV desde un único lugar sin tocar componentes.

### 10. Filosofía de animaciones

**Decisión**: Animaciones sutiles y puntuales. ReactBits para fondo del hero y algunos títulos. IntersectionObserver para fade-in de secciones al scroll. Sin animaciones excesivas.

**Rationale**: El usuario explícitamente pide "lo justo solamente". Minimalista pero creativo. Cada animación debe tener propósito, no ser decoración gratuita.

## Risks / Trade-offs

- **[ReactBits bundle size]** → Mitigación: Solo importar componentes usados. Lazy-load del fondo con `client:visible`. Tree-shaking de Vite.
- **[Accesibilidad de fondo animado]** → Mitigación: Canvas `aria-hidden="true"`. Respetar `prefers-reduced-motion`. Todo contenido en HTML semántico.
- **[Carousel accesibilidad]** → Mitigación: Implementar con roles ARIA correctos, navegación por teclado, y pause on hover/focus.
- **[Copies i18n]** → Mitigación: Copies propuestos como borrador, validados por el usuario antes de implementar. Estructura de datos separada del componente.
- **[Performance en mobile]** → Mitigación: Fondo animado solo en hero (no full page). Fallback a gradiente en dispositivos de bajo rendimiento. Componentes Astro estáticos donde no se necesita interactividad.

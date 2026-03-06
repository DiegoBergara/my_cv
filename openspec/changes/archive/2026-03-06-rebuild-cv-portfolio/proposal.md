## Why

El sitio CV actual es funcional pero carece del impacto visual y la estructura narrativa necesarios para posicionar a Diego Bergara como un ingeniero senior de alto nivel. Se necesita un rediseño completo desde cero — eliminando toda la base de código actual — que combine un fondo animado inmersivo (ReactBits) en el hero, secciones bien definidas de experiencia/habilidades/proyectos con animaciones sutiles, y CTAs claros (agendar reunión como primario, contacto por email como secundario) para convertir visitantes en oportunidades profesionales reales. El tono debe ser minimalista pero creativo, impactando tanto a perfiles no técnicos como a CTOs y colegas. El sitio debe desplegarse estáticamente mediante GitHub Actions.

## What Changes

- **BREAKING**: Eliminación completa de toda la base de código actual (`src/`, componentes, páginas, layouts, estilos, config) y reconstrucción desde cero
- Nuevo diseño visual minimalista-creativo: tipografía moderna, paleta oscura con acentos, animaciones sutiles (lo justo, sin exceso)
- Fondo animado interactivo en el hero section usando ReactBits (reacciona a touch, click y scroll), con fallback a gradiente CSS con los mismos colores
- Hero section con título animado (ReactBits text animations), subtítulo de posicionamiento, badge de disponibilidad, y dual CTAs (primario: agendar reunión vía Calendly; secundario: email)
- Sección "Sobre mí" con perfil profesional, educación, ubicación
- Sección "Experiencia" con timeline/roadmap visual interactivo de trayectoria profesional
- Sección "Habilidades / Stack Técnico" con carouseles de tecnologías organizados por categoría (backend, frontend, DevOps/infra)
- Sección "Proyectos destacados" con cards detalladas incluyendo impacto, tags y links
- Sección "Certificaciones" con badges de Credly
- Sección de contacto final con CTAs repetidos y links sociales (LinkedIn, Credly)
- Componentes UI basados en shadcn/ui, estilos con Tailwind CSS v4
- Animaciones de texto con ReactBits (títulos y textos seleccionados)
- Navegación sticky con scroll suave y soporte mobile (hamburger menu)
- SEO optimizado: meta tags, Open Graph, sitemap, robots.txt
- Soporte multi-idioma ES/EN (copies consultados con el usuario antes de implementar)
- Deploy estático via GitHub Actions a GitHub Pages
- Diseño full responsive: mobile, tablet y desktop
- Accesibilidad WCAG AA: contraste, focus states, keyboard navigation, reduced-motion

## Capabilities

### New Capabilities
- `hero-animated-background`: Fondo animado interactivo en el hero usando ReactBits, con reacción a touch/click/scroll y fallback a gradiente CSS, accesible y con soporte reduced-motion
- `hero-section`: Hero section de alto impacto con título animado (ReactBits), posicionamiento profesional, badge de disponibilidad y dual CTA (primario: Calendly, secundario: email)
- `experience-timeline`: Timeline/roadmap visual e interactivo de trayectoria profesional con animaciones de entrada
- `skills-carousel`: Carouseles de tecnologías organizados por categoría (backend, frontend, DevOps/infra) con scroll automático o manual
- `projects-gallery`: Galería de proyectos destacados con cards detalladas, tags de tecnología, métricas de impacto y links
- `contact-section`: Sección de contacto con CTAs prominentes (agendar reunión + email) y links a redes sociales/profesionales
- `navigation-system`: Navegación sticky responsive con scroll suave, menú hamburguesa mobile y selector de idioma
- `static-deploy-pipeline`: Pipeline de deploy estático via GitHub Actions a GitHub Pages con build optimizado

### Modified Capabilities

## Impact

- **Código fuente**: Eliminación total de `src/` y reconstrucción desde cero. Se mantiene Astro + React + Tailwind CSS v4
- **Dependencias**: Adición de `reactbits` para animaciones de fondo y texto, `shadcn/ui` componentes. Se eliminan `three`, `@react-three/fiber`, `@react-three/drei`
- **Configuración**: `astro.config.mjs` puede necesitar ajustes menores. `tsconfig.json` se mantiene
- **Deploy**: El workflow de GitHub Actions existente se mantiene funcional (output estático)
- **Datos**: Archivo unificado de configuración (`src/config/site.ts`) con toda la información de perfil editable en un solo lugar
- **Assets**: Nuevos assets en `public/` (OG image, favicon)

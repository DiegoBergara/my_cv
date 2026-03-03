## 1. Limpieza total y setup

- [ ] 1.1 Eliminar todo el contenido de `src/` (componentes, pages, layouts, styles, config, lib)
- [ ] 1.2 Instalar dependencias: `reactbits` para fondo animado y animaciones de texto
- [ ] 1.3 Configurar shadcn/ui: inicializar y agregar componentes base (Button, Card, Badge)
- [ ] 1.4 Verificar `astro.config.mjs`: static output, React integration, Tailwind v4 via Vite, sitemap, base path
- [ ] 1.5 Verificar `tsconfig.json` con path alias `@/*` → `./src/*`

## 2. Datos y configuración unificada

- [ ] 2.1 Crear `src/config/site.ts` con archivo unificado: datos de perfil, SEO, contacto, social links, Calendly URL, experiencia timeline, proyectos, skills por categoría, certificaciones
- [ ] 2.2 Crear textos i18n (ES/EN) en el mismo archivo de config: hero, secciones, nav labels, CTAs (copies como borrador para validación del usuario)
- [ ] 2.3 Definir tipos TypeScript: Locale, ProfileData, Project, TimelineEntry, SkillCategory

## 3. Layout y estilos globales

- [ ] 3.1 Crear `src/styles/global.css`: reset, variables CSS de paleta oscura + acentos cyan/violeta, tipografía Inter, keyframes base (fade-in, slide-up), utilidades para chips/cards/section-title
- [ ] 3.2 Crear `src/layouts/BaseLayout.astro`: HTML head con meta tags, OG, favicon, font preload, estructura semántica, slot de contenido

## 4. Sistema de navegación

- [ ] 4.1 Crear `src/components/Navbar.astro`: header sticky con backdrop blur, links de ancla, selector de idioma (ES/EN)
- [ ] 4.2 Crear `src/components/MobileMenu.tsx` (React): hamburger menu con overlay, cierre al seleccionar item
- [ ] 4.3 Implementar indicador de sección activa con IntersectionObserver (componente React client-side)

## 5. Hero section con fondo animado

- [ ] 5.1 Crear `src/components/HeroBackground.tsx` (React): componente ReactBits de fondo animado, con reacción a touch/click/scroll
- [ ] 5.2 Implementar fallback a gradiente CSS (mismos colores) cuando no hay soporte o `prefers-reduced-motion`
- [ ] 5.3 Marcar canvas como `aria-hidden="true"`, asegurar overlay para contraste de texto
- [ ] 5.4 Crear `src/components/HeroSection.astro`: badge de disponibilidad, título animado (ReactBits text), subtítulo, dual CTAs (shadcn Button)
- [ ] 5.5 Integrar HeroBackground como fondo del hero con `client:load`, título con animación ReactBits
- [ ] 5.6 Estilizar CTAs: primario (filled accent) para Calendly abre en nueva pestaña, secundario (outline) para mailto

## 6. Sección Sobre mí / Perfil

- [ ] 6.1 Crear `src/components/AboutSection.astro`: título de sección, descripción profesional, educación, ubicación
- [ ] 6.2 Agregar animación de entrada sutil con IntersectionObserver (fade + slide-up)

## 7. Sección Skills / Carouseles de tecnologías

- [ ] 7.1 Crear `src/components/SkillsCarousel.tsx` (React): carousel horizontal con auto-scroll tipo marquee, pause on hover/focus
- [ ] 7.2 Crear `src/components/SkillsSection.astro`: renderizar un carousel por categoría (Backend, Frontend, DevOps/Infra) con heading de categoría
- [ ] 7.3 Chips estilizados con borde y tint (shadcn Badge o custom), soporte touch/swipe en mobile
- [ ] 7.4 Asegurar accesibilidad: roles ARIA, navegación por teclado en carouseles

## 8. Sección Experiencia / Timeline-Roadmap

- [ ] 8.1 Crear `src/components/TimelineSection.astro`: timeline vertical con línea + dots conectores, estilo roadmap
- [ ] 8.2 Renderizar entries desde config: periodo, título/empresa, descripción de impacto
- [ ] 8.3 Animación de entrada staggered con IntersectionObserver para cada entry

## 9. Sección Proyectos

- [ ] 9.1 Crear `src/components/ProjectsSection.astro`: grid de cards (1 col mobile, 2 cols desktop)
- [ ] 9.2 Cada card (shadcn Card): título, descripción de impacto, tags de tecnología, links externos
- [ ] 9.3 Hover effect en desktop: elevación + glow de borde sutil
- [ ] 9.4 Animación de entrada staggered con IntersectionObserver

## 10. Sección Contacto

- [ ] 10.1 Crear `src/components/ContactSection.astro`: heading, texto de invitación, dual CTAs (shadcn Button)
- [ ] 10.2 CTA primario (filled): Calendly nueva pestaña. CTA secundario (outline): mailto
- [ ] 10.3 Links a LinkedIn y Credly con labels descriptivos

## 11. Páginas y routing i18n

- [ ] 11.1 Crear `src/pages/index.astro` (ES default): importar BaseLayout y todas las secciones con locale="es"
- [ ] 11.2 Crear `src/pages/en/index.astro` (EN): misma estructura con locale="en"
- [ ] 11.3 Verificar rutas `/` y `/en/` renderizan correctamente con contenido en su idioma

## 12. SEO, accesibilidad y assets

- [ ] 12.1 Meta tags dinámicos por locale en BaseLayout: title, description, OG image, canonical, lang attribute
- [ ] 12.2 Verificar `public/robots.txt` y generación de sitemap via @astrojs/sitemap
- [ ] 12.3 Agregar favicon y OG image placeholder en `public/`
- [ ] 12.4 Verificar accesibilidad: contraste AA, focus states visibles, keyboard navigation completa, aria-labels en elementos interactivos

## 13. Responsive y polish

- [ ] 13.1 Verificar layout completo en mobile (< 768px), tablet (768-1024px) y desktop (> 1024px)
- [ ] 13.2 Verificar que todas las animaciones son sutiles y no excesivas
- [ ] 13.3 Verificar fallback de fondo animado en mobile y reduced-motion

## 14. Build y deploy

- [ ] 14.1 Verificar `npm run build` genera output estático en `dist/` sin errores
- [ ] 14.2 Verificar que el workflow de GitHub Actions funciona con el nuevo código
- [ ] 14.3 Test manual: navegación, CTAs, responsive, carouseles, i18n, accesibilidad

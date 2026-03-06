# Design: cta-navbar-improvements

## Context

El CV usa `Navbar.astro` (header fijo con `bg-base/80 backdrop-blur-xl`), `HeroSection.astro` y `ContactSection.astro` con el componente `Button` (ui/button.tsx) para los CTAs. Los botones usan variantes default (cyan) y outline (borde blanco); los enlaces de la navbar usan `text-white/60` y hover a `text-white`. El cambio busca mayor visibilidad de CTAs y una navbar transparente con elementos clicables más evidentes.

## Goals / Non-Goals

**Goals:**

- CTAs (hero y contacto) más llamativos: mayor contraste, tamaño o refuerzo visual (sombra, hover) sin romper la jerarquía primario/secundario.
- Navbar con fondo transparente (o muy sutil) en lugar de base/80 + blur fuerte.
- Enlaces e ítems de la navbar (links de sección + selector de idioma) claramente resaltados como clicables (hover, contraste, posible fondo o borde sutil).

**Non-Goals:**

- No cambiar la estructura HTML ni los destinos de los enlaces.
- No añadir nuevos CTA ni ítems de navegación.
- No modificar el menú móvil más allá de mantener coherencia visual con la navbar.

## Decisions

1. **CTAs: reforzar variantes del Button existente**  
   Se mantiene el componente `Button` y sus variantes (default, outline). Se mejoran las clases en `buttonVariants` (por ejemplo mayor contraste, sombra o glow sutil, hover más marcado) para que el primario destaque más y el secundario siga siendo visible pero secundario. Alternativa descartada: crear componentes CTA separados (más duplicación).

2. **Navbar: transparente con legibilidad**  
   El header pasa a fondo transparente o `bg-base/20` (o similar) con poco o sin backdrop-blur para lograr transparencia real. Se evita blur fuerte que opaque el contenido. En scroll se puede mantener igual o aplicar un ligero cambio para legibilidad si hace falta (opcional en implementación).

3. **Nav links y lang: resaltado explícito**  
   Los enlaces de navegación y el selector de idioma reciben estilos que los marquen como interactivos: por ejemplo fondo/borde sutil en hover, mayor contraste de texto, o pill/underline. Se hace en `Navbar.astro` con clases Tailwind (o variables en global.css) sin añadir JS para hover.

4. **Una sola fuente de verdad para estilos CTA**  
   Hero y Contact usan el mismo `Button`; al mejorar las variantes en `button.tsx`, ambos lugares se benefician. No se duplican estilos por sección.

## Risks / Trade-offs

- **Legibilidad sobre contenido muy claro o muy oscuro**: Navbar transparente puede perderse sobre fondos muy contrastados. Mitigación: mantener contraste suficiente en el texto y, si se implementa, un estado “scrolled” con fondo un poco más marcado.
- **Consistencia móvil**: El menú hamburguesa debe seguir siendo usable; los estilos de “resaltado” se aplican también a los ítems del menú desplegable si comparten clases o componente.

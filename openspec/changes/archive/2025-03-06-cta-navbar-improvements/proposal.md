# Proposal: cta-navbar-improvements

## Why

Los botones CTA (agendar reunión, contactar por email) y la barra de navegación actuales no destacan lo suficiente; se busca mejorar la visibilidad de las acciones principales y dar a la navbar un aspecto más limpio (transparente) con los elementos clicables claramente resaltados.

## What Changes

- **CTAs más llamativos**: Los botones de llamada a la acción (hero y sección de contacto) pasan a un estilo más visible y atractivo (tamaño, contraste, posible hover/estados) manteniendo la jerarquía primario/secundario.
- **Navbar transparente**: La barra de navegación deja de usar fondo opaco/semi-opaco por defecto y se muestra transparente (o con transparencia consistente), integrada con el contenido.
- **Enlaces de la navbar resaltados**: Los ítems de navegación y el selector de idioma se estilizan para que sean claramente identificables como clicables (hover, contraste, posible subrayado o fondo sutil).

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `contact-section`: Requisitos de prominencia visual de los CTAs actualizados para exigir botones más llamativos (visibilidad mejorada).
- `hero-section`: Requisitos de los CTAs del hero actualizados para exigir botones más llamativos y visibles.
- `navigation-system`: Requisito de barra fija actualizado para fondo transparente; nuevo o modificado requisito para que los elementos clicables (links, selector de idioma) estén claramente resaltados.

## Impact

- **Componentes**: `Navbar.astro` (o equivalente), `HeroSection.astro`, componente o bloque que renderice la sección de contacto.
- **Estilos**: `global.css` y/o estilos por componente (Tailwind) para botones CTA y navbar.
- **UX**: Mejor descubribilidad de acciones principales y navegación más clara.

# Design: Eliminar la navbar en mobile y desktop

## Context

El sitio es un CV/portfolio (Astro) con páginas en español e inglés. Actualmente incluye una barra de navegación fija (`Navbar.astro`) con enlaces por anclas (About, Experience, Contact, etc.) en desktop y un menú hamburguesa (`MobileMenu.tsx`, React) en móvil. La decisión es eliminar por completo la navbar en todas las vistas para simplificar la UI.

## Goals / Non-Goals

**Goals:**

- Dejar de mostrar la navbar (header fijo con enlaces y menú móvil) en móvil y desktop.
- Quitar la dependencia de `Navbar.astro` y `MobileMenu.tsx` desde las páginas principales.
- Mantener el contenido de las páginas (hero, experiencia, contacto, etc.) sin depender del menú.

**Non-Goals:**

- No se exige eliminar los componentes del repo (se pueden conservar para uso futuro).
- No se cambia la estructura de rutas ni el contenido de `site.ts` (nav puede quedar para otros usos).
- No se añade otro mecanismo de navegación (p. ej. enlaces en el hero o footer) en este cambio.

## Decisions

1. **Quitar solo el uso de la navbar en las páginas**  
   Se elimina la importación y el uso de `<Navbar />` en `src/pages/index.astro` y `src/pages/en/index.astro`. No se exige borrar `Navbar.astro` ni `MobileMenu.tsx` del código base; se dejan sin uso por si se reutilizan más adelante.

2. **No tocar `site.ts`**  
   Las entradas `content[locale].nav` se mantienen; no se eliminan ni se refactorizan en este cambio para no ampliar el alcance.

3. **Layout sin header fijo**  
   Al quitar la navbar, el contenido empieza desde el top del viewport. No se añade padding/margin superior compensatorio salvo que el diseño actual del hero ya lo asuma (p. ej. si el hero tiene `padding-top` o está pensado para verse debajo de la barra). Se revisará visualmente tras el cambio.

## Risks / Trade-offs

- **Pérdida de navegación por anclas**: Los usuarios ya no tendrán un menú fijo para saltar a About, Experience, Contact, etc. **Mitigación**: Aceptado como parte del cambio; la navegación será por scroll o por enlaces dentro del contenido si se añaden después.
- **Componentes huérfanos**: `Navbar.astro` y `MobileMenu.tsx` quedarán sin uso. **Mitigación**: Opcional eliminarlos en una tarea posterior o documentar que están disponibles para reuso.

## Migration Plan

1. Editar `src/pages/index.astro` y `src/pages/en/index.astro`: quitar `import Navbar` y el nodo `<Navbar locale={...} />`.
2. Comprobar en build y en vista previa que no queden referencias rotas y que el layout se vea correctamente sin navbar.
3. No hay rollback automático; revertir el commit restaura la navbar.

## Open Questions

- Ninguno. Si más adelante se quiere añadir enlaces de navegación en el hero o en un footer, será un cambio aparte.

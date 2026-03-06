# Proposal: Eliminar la navbar en mobile y desktop

## Why

Se quiere simplificar la interfaz del CV eliminando la barra de navegación en todas las vistas (móvil y escritorio). Esto reduce elementos en pantalla y puede priorizar el contenido principal (hero, experiencia, contacto) sin menú fijo.

## What Changes

- **Eliminar** el componente `Navbar.astro` del layout en las páginas principal (es) e inglés (en).
- **Eliminar** el uso del menú móvil (`MobileMenu`) y los enlaces de escritorio que viven dentro de la navbar.
- **Opcional**: eliminar o archivar los componentes `Navbar.astro` y `MobileMenu.tsx` si ya no se reutilizan en ningún sitio.
- **BREAKING**: Los usuarios ya no tendrán navegación por anclas (About, Experience, Contact, etc.) desde un menú fijo; la navegación dependerá de enlaces en el contenido o scroll manual.

## Capabilities

### New Capabilities

- Ninguna (cambio de eliminación únicamente).

### Modified Capabilities

- Ninguna especificación activa en `openspec/specs/`; el cambio es solo de implementación (quitar uso de componentes existentes).

## Impact

- **Código afectado**: `src/pages/index.astro`, `src/pages/en/index.astro` (dejar de importar y renderizar `<Navbar />`).
- **Componentes**: `Navbar.astro` y `MobileMenu.tsx` quedarán sin uso; se pueden eliminar o conservar para uso futuro.
- **Configuración**: Las entradas de `content[locale].nav` en `site.ts` dejarán de usarse en la UI (se pueden mantener por si se reutilizan en otro contexto).
- **UX**: Sin barra fija superior; el hero y el resto de secciones ocuparán todo el viewport desde arriba.

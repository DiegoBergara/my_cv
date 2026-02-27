# Diego Bergara CV / Portfolio

Sitio estático en Astro + Tailwind + React (islas) preparado para GitHub Pages.

## Scripts

```bash
npm install
npm run dev
npm run check
npm run build
```

## Configuración unificada

Todo el contenido editable del sitio (SEO, idioma ES/EN/ZH, perfil, timeline, proyectos, links y tema) está centralizado en:

- `src/config/site.ts`

## Deploy en GitHub Pages (siguientes pasos)

1. **Sube el repo a GitHub** y confirma que la rama principal sea `main`.
2. En **Settings → Pages**, en **Build and deployment** selecciona **GitHub Actions** como source.
3. Verifica que exista el workflow `.github/workflows/deploy.yml`.
4. Haz push a `main` para disparar el deploy automático.
5. Revisa la pestaña **Actions** hasta ver el job en verde (`Deploy to GitHub Pages`).
6. Tu sitio quedará publicado en `https://diegobergara.github.io`.

### Si cambias el nombre del repositorio
- Para dominio tipo `usuario.github.io` no hace falta `base` en Astro.
- Si el repo fuese de proyecto (por ejemplo `/my_cv/`), agrega `base: '/my_cv'` en `astro.config.mjs`.

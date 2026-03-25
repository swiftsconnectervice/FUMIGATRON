# Publicación en cPanel — 14 de marzo de 2026

## Resumen

Se publicaron en producción los cambios de SEO y correcciones de contenido realizados al sitio fumigatron.com.mx. El proceso consistió en compilar el proyecto con `npm run build` y subir los archivos actualizados al hosting vía cPanel File Manager.

---

## Archivos modificados antes del build

| Archivo | Cambios realizados |
|---------|--------------------|
| `index.html` | Se agregaron 3 bloques de schema JSON-LD (LocalBusiness, FAQPage con 6 preguntas, WebSite). Se eliminó una referencia muerta a `/index.css` que no existía. |
| `App.tsx` | Se optimizaron 5 headings (H2/H3) con keywords de SEO local. Se agregaron 2 preguntas frecuentes nuevas. Se aplicaron correcciones de contenido del cliente (descripción B2B, eliminación de diminutivos, textos corregidos). |
| `src/pages/ServicesPage.tsx` | Se optimizaron 3 headings H3 con keywords de búsqueda ("Fumigación de Choque", "Control de Plagas Preventivo", "Desinfección Profesional"). |
| `src/pages/PlagasPage.tsx` | Se agregó "en CDMX y Edo. Mex." al heading H2 de resultados comprobados. |
| `src/pages/AboutPage.tsx` | Se eliminó "con más de 10 años de experiencia" del título H2 (corrección solicitada por el cliente). |
| `public/.htaccess` | Se creó archivo .htaccess con reglas de SPA routing, HTTPS forzado, compresión Gzip, caché del navegador y headers de seguridad. |

---

## Proceso de publicación

1. Se ejecutó `npm run build` — compilación exitosa sin errores
2. En cPanel File Manager (`public_html`):
   - Se eliminó el archivo `index.html` anterior
   - Se eliminó la carpeta `assets/` anterior
   - Se subió el nuevo `index.html` directamente a `public_html`
   - Se creó la carpeta `assets/` y se subió el archivo `index-b5oV_2Xd.js`
3. El `.htaccess` existente en cPanel se dejó sin modificar (ya funcionaba correctamente)
4. La carpeta `images/`, `robots.txt` y `sitemap.xml` no se tocaron (sin cambios)

---

## Verificación post-publicación

- Se confirmó que el sitio carga correctamente con los cambios visibles
- Se limpió caché del navegador con `Ctrl + Shift + R` para verificar

---

## Reindexación en Google

Se solicitó reindexación en Google Search Console de las 3 URLs afectadas:

1. `https://www.fumigatron.com.mx/` (home — schemas, FAQs, headings)
2. `https://www.fumigatron.com.mx/servicios` (headings optimizados)
3. `https://www.fumigatron.com.mx/plagas` (heading con ubicación geográfica)

---

## Documentos de referencia

- `reporte-seo.md` — Detalle completo de todos los cambios SEO con explicaciones
- `correccion.md` — Estado de las correcciones solicitadas por el cliente
- `DEPLOYMENT-CPANEL.md` — Guía general de despliegue en cPanel

# Reporte de Cambios SEO - Fumigatron.com.mx

**Fecha:** 13 de marzo de 2026
**Objetivo:** Mejorar el posicionamiento orgánico del sitio en Google para competir directamente con fumicity.mx, que actualmente ocupa las primeras posiciones para búsquedas como "fumigaciones CDMX".

---

## 1. Schema Markup (JSON-LD) — index.html

**¿Qué se hizo?**
Se agregaron 3 bloques de datos estructurados (JSON-LD) en el `<head>` del sitio que antes no existían:

**a) PestControlService (LocalBusiness)**
Incluye: nombre del negocio, dirección física (C. Colima 20, Tlalnepantla), coordenadas GPS, teléfonos, correo, horario de atención (Lun-Sab 9am-6pm), redes sociales, catálogo de 6 servicios con nombres optimizados para SEO ("Fumigación de Chinches de Cama en CDMX", "Fumigación de Cucarachas en CDMX", etc.), y las 7 ciudades/municipios principales de cobertura.

**¿Por qué ayuda al SEO?**
Google usa estos datos para mostrar el Knowledge Panel (el recuadro informativo que aparece a la derecha en los resultados de búsqueda con dirección, teléfono, horario y reseñas). Sin este schema, Google tiene que adivinar esta información del contenido de la página. Con el schema, se la damos directamente y de forma estructurada. Fumicity probablemente tiene esto configurado a través de su Google Business Profile, lo cual contribuye a su posición #1.

**b) FAQPage**
Marca las 6 preguntas frecuentes del sitio como datos estructurados que Google puede leer e interpretar.

**¿Por qué ayuda al SEO?**
Cuando Google detecta un schema FAQPage válido, puede mostrar las preguntas y respuestas directamente en los resultados de búsqueda como desplegables debajo del enlace del sitio. Esto se conoce como "rich snippets" y tiene dos beneficios: ocupa más espacio visual en la página de resultados (lo que empuja a la competencia hacia abajo) y aumenta la tasa de clics porque el usuario ya ve información útil antes de entrar al sitio.

**c) WebSite**
Indica a Google el nombre oficial del sitio y su URL canónica.

**¿Por qué ayuda al SEO?**
Es un dato básico que ayuda a Google a identificar correctamente el sitio y evitar confusiones con dominios similares.

---

## 2. Nuevas Preguntas Frecuentes — App.tsx + index.html

**¿Qué se hizo?**
Se agregaron 2 preguntas nuevas a la sección de FAQ de la página de inicio (pasando de 4 a 6 preguntas), y se actualizó el schema FAQPage para incluirlas:

- "¿Cuánto cuesta fumigar una casa en CDMX?" — con respuesta que invita a cotizar por WhatsApp.
- "¿En qué zonas de la CDMX y Estado de México dan servicio de fumigación?" — con listado completo de alcaldías y municipios.

**¿Por qué ayuda al SEO?**
"Cuánto cuesta fumigar casa CDMX" es una de las búsquedas transaccionales con mayor volumen en el sector. Tener esta pregunta en el sitio (y en el schema) permite que Google la muestre como rich snippet cuando alguien busca exactamente eso. La pregunta de zonas refuerza el SEO local al mencionar explícitamente cada alcaldía y municipio, lo cual es exactamente la estrategia que usa Fumicity para dominar búsquedas localizadas como "fumigación Coyoacán" o "fumigación Naucalpan".

---

## 3. Optimización de Headings (H2/H3) con Keywords — App.tsx

**¿Qué se cambió en la página de inicio?**

| Antes | Después |
|-------|---------|
| "Por qué somos la opción más segura para ti" | "Por qué somos la empresa de fumigación más segura en CDMX" |
| "Encontramos el nido sin romper nada" | "Detectamos plagas ocultas sin romper nada" |
| "Fórmula inteligente y sin olores" | "Fumigación sin olores molestos, segura para tu familia" |
| "Escudo protector de 30 días" | "Protección contra plagas por 30 días garantizados" |
| "Especialistas en fumigación y control de plagas en CDMX y Estado de México" | "Especialistas en fumigación, desinfección y control de las plagas en CDMX y Estado de México" |

**¿Por qué ayuda al SEO?**
Los headings (H2, H3) son uno de los factores on-page más importantes para Google. Cuando un heading contiene la keyword exacta que alguien busca, Google entiende que esa sección es relevante para esa búsqueda. Los headings anteriores eran creativos y con buen copy, pero no contenían keywords de búsqueda. Por ejemplo, "Fórmula inteligente y sin olores" no le dice nada a Google sobre fumigación. En cambio, "Fumigación sin olores molestos, segura para tu familia" contiene "fumigación", "segura" y "familia", que son términos que la gente realmente busca. Fumicity tiene docenas de headings llenos de keywords como "Fumigación de Chinches", "Fumigación de Cucarachas", "Fumigaciones CDMX", y eso es una de las razones principales por las que rankea en primer lugar.

---

## 4. Optimización de Headings en Subpáginas — ServicesPage.tsx + PlagasPage.tsx

**ServicesPage.tsx (3 cambios):**

| Antes | Después |
|-------|---------|
| "Acción Inmediata (Choque)" | "Fumigación de Choque: Acción Inmediata" |
| "Protección Continua (Control Inteligente)" | "Control de Plagas Preventivo y Continuo" |
| "Limpieza Profunda (Desinfección)" | "Desinfección Profesional de Espacios" |

**PlagasPage.tsx (1 cambio):**

| Antes | Después |
|-------|---------|
| "Resultados Comprobados en Eliminación de Plagas" | "Resultados Comprobados en Eliminación de Plagas en CDMX y Edo. Mex." |

**¿Por qué ayuda al SEO?**
Misma lógica que los headings de inicio. "Fumigación de Choque", "Control de Plagas Preventivo" y "Desinfección Profesional" son términos que la gente busca. Agregar "en CDMX y Edo. Mex." al heading de plagas refuerza la señal de localización geográfica, que es el factor #1 en SEO local según el análisis de Fumicity.

---

## 5. Correcciones de Contenido Solicitadas por el Cliente — Todas las páginas

### Aclaración importante

Las correcciones del documento correccion.md y los cambios de SEO son dos cosas separadas:

- **Las correcciones del cliente se aplicaron de forma literal**, tal cual fueron solicitadas. Cada punto del documento fue revisado, implementado y marcado como completado en correccion.md. Estos cambios responden a las necesidades del negocio (tono, precisión de información, imagen profesional).

- **Los cambios de SEO (secciones 1 a 4 de este reporte) son adicionales** y no modifican ni contradicen lo que pidió el cliente. Son mejoras técnicas y de contenido orientadas exclusivamente a mejorar el posicionamiento en Google, basadas en el análisis competitivo de fumicity.mx.

En algunos casos, las correcciones del cliente coinciden con buenas prácticas de SEO sin que esa fuera la intención original. Por ejemplo:

- **Descripción B2B:** El cliente pidió cambiar el texto a "Soluciones para que tu clínica, restaurante u oficina cuente con certificado de fumigación con validez oficial ante la autoridad." Esto se aplicó exactamente como lo pidió. El beneficio SEO es un efecto secundario positivo: mencionar tipos de negocio específicos (clínica, restaurante, oficina) ayuda a capturar búsquedas como "fumigación para restaurantes" o "certificado fumigación clínica", pero no fue la razón del cambio.

- **Título Quiénes Somos:** El cliente pidió quitar "con más de 10 años de experiencia" para evitar ambigüedad con otras referencias temporales. Se aplicó tal cual. Desde el punto de vista SEO, la experiencia sigue comunicándose en otros elementos de la página (badge "+10 años", badge "Desde 2010"), por lo que no se pierde la señal de E-E-A-T (Experiencia, Expertise, Autoridad y Confianza) que Google valora.

- **Eliminación de diminutivos y exageraciones:** El cliente pidió quitar "bichitos", "super", "urgentísimo" en todo el sitio. Se aplicó en su totalidad. Desde el punto de vista SEO, esto también es positivo porque un tono más profesional refuerza la percepción de autoridad (factor E-E-A-T), y las palabras sustitutas ("insectos", "plagas") son keywords reales que la gente busca.

### Estado de las correcciones

Todas las correcciones del documento correccion.md fueron completadas. El único punto que queda pendiente es la animación de hormigas/ciempiés alrededor del logo FUMIGATRON, que es un tema de diseño visual que requiere trabajo de animación especializado.

---

## Próximos Pasos Recomendados (No implementados aún)

Basado en el análisis de Fumicity, estas son las acciones pendientes ordenadas por impacto:

1. **Páginas individuales por plaga** — Crear URLs dedicadas como `/fumigacion-chinches-cdmx`, `/fumigacion-cucarachas-cdmx`, `/control-roedores-cdmx`. Actualmente todo está en `/plagas`. Fumicity tiene páginas separadas y cada una rankea para su keyword específica.

2. **Páginas por zona geográfica** — Crear contenido dedicado por alcaldía/municipio ("Fumigación en Coyoacán", "Fumigación en Naucalpan"). Fumicity lista todas las alcaldías con contenido dedicado y esto es su arma principal para SEO local.

3. **Google Business Profile** — Optimizar al 100% el perfil de Google Maps con fotos, reseñas, servicios y horario. Esto alimenta directamente el Local Pack (los 3 resultados con mapa que aparecen arriba de los resultados orgánicos).

4. **Sitemap.xml** — Generar y enviar un sitemap a Google Search Console para asegurar que todas las páginas se indexen correctamente.

5. **Backlinks locales** — Conseguir menciones en directorios mexicanos (Páginas Amarillas, Sección Amarilla, directorios de servicios) para construir autoridad de dominio.

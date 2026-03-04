# 🚀 GUÍA DE DESPLIEGUE EN CPANEL - FUMIGATRON

## ✅ ARCHIVOS LISTOS PARA SUBIR

Todos los archivos están en la carpeta `dist/` y listos para producción.

---

## 📋 PASOS PARA PUBLICAR EN CPANEL

### **PASO 1: HACER BACKUP DEL SITIO ANTIGUO** ⚠️

**IMPORTANTE:** Siempre haz backup antes de reemplazar el sitio.

1. Entra a tu **cPanel**
2. Abre **File Manager** (Administrador de Archivos)
3. Navega a `public_html` (o la carpeta raíz de tu dominio)
4. Selecciona TODOS los archivos del sitio antiguo
5. Click derecho → **Compress** (Comprimir)
6. Nombra el archivo: `backup-sitio-antiguo-[fecha].zip`
7. **Descarga este backup** a tu computadora

---

### **PASO 2: LIMPIAR LA CARPETA PUBLIC_HTML**

1. En File Manager, dentro de `public_html`
2. Selecciona TODOS los archivos y carpetas del sitio antiguo
3. Click derecho → **Delete** (Eliminar)
4. Confirma la eliminación
5. Verifica que `public_html` esté completamente vacío

---

### **PASO 3: SUBIR LOS ARCHIVOS NUEVOS**

#### **Opción A: Usando File Manager de cPanel** (Más fácil)

1. En File Manager, asegúrate de estar en `public_html`
2. Click en **Upload** (Subir archivos)
3. Arrastra o selecciona TODOS los archivos de la carpeta `dist/`:
   - ✅ `index.html`
   - ✅ `robots.txt`
   - ✅ `.htaccess` (archivo oculto, muy importante)
   - ✅ Carpeta `assets/` completa
   - ✅ Carpeta `images/` completa

4. Espera a que termine la subida (puede tardar unos minutos)
5. Verifica que todos los archivos estén en `public_html`

#### **Opción B: Usando FTP** (Para muchos archivos)

1. Descarga **FileZilla** (cliente FTP gratuito): https://filezilla-project.org/
2. Abre FileZilla y conecta con estos datos:
   - **Host:** `ftp.tudominio.com` (o la IP de tu servidor)
   - **Usuario:** tu usuario de cPanel
   - **Contraseña:** tu contraseña de cPanel
   - **Puerto:** 21

3. En el panel derecho (servidor), navega a `public_html`
4. En el panel izquierdo (local), navega a la carpeta `dist/`
5. Selecciona TODOS los archivos de `dist/` y arrástralos a `public_html`
6. Espera a que termine la transferencia

---

### **PASO 4: VERIFICAR PERMISOS DE ARCHIVOS**

1. En File Manager, dentro de `public_html`
2. Selecciona el archivo `.htaccess`
3. Click derecho → **Change Permissions** (Cambiar permisos)
4. Asegúrate de que tenga permisos **644** (lectura para todos, escritura solo para propietario)
5. Haz lo mismo para `index.html` → permisos **644**
6. Para las carpetas `assets/` e `images/` → permisos **755**

---

### **PASO 5: VERIFICAR QUE EL SITIO FUNCIONE**

1. Abre tu navegador
2. Ve a tu dominio: `https://tudominio.com`
3. Verifica que:
   - ✅ El sitio carga correctamente
   - ✅ Todas las imágenes se ven
   - ✅ Los botones de WhatsApp funcionan
   - ✅ El formulario de contacto funciona
   - ✅ La navegación entre páginas funciona

4. Prueba en diferentes dispositivos:
   - ✅ Desktop
   - ✅ Tablet
   - ✅ Móvil

---

## 🔧 SOLUCIÓN DE PROBLEMAS COMUNES

### **Problema 1: El sitio muestra "404 Not Found"**

**Solución:**
- Verifica que el archivo `.htaccess` esté en `public_html`
- Verifica que el archivo `.htaccess` tenga permisos 644
- Si no funciona, contacta a tu proveedor de hosting para activar `mod_rewrite`

### **Problema 2: Las páginas internas (como /servicios) dan error 404**

**Solución:**
- Esto significa que el `.htaccess` no está funcionando
- Verifica que Apache tenga habilitado `mod_rewrite`
- Contacta a soporte técnico de tu hosting

### **Problema 3: Las imágenes no cargan**

**Solución:**
- Verifica que la carpeta `images/` esté en `public_html`
- Verifica que las imágenes tengan permisos 644
- Limpia la caché del navegador (Ctrl + Shift + R)

### **Problema 4: El formulario de contacto no funciona**

**Solución:**
- Verifica que las variables de Supabase estén correctas en `dist/index.html`
- Abre la consola del navegador (F12) y busca errores
- Verifica que tu proyecto de Supabase esté activo

### **Problema 5: El sitio se ve sin estilos**

**Solución:**
- Verifica que la carpeta `assets/` esté en `public_html`
- Verifica que el archivo `assets/index-C2MKBr7R.js` exista
- Limpia la caché del navegador

---

## 📊 VERIFICACIÓN POST-DESPLIEGUE

Después de publicar, verifica estos puntos:

### **SEO y Metatags:**
- [ ] El título de la página es: "Fumigación CDMX | Expertos en Chinches y Cucarachas - Fumigatron"
- [ ] La meta descripción menciona: fumigación, CDMX, chinches, cucarachas, COFEPRIS
- [ ] El archivo `robots.txt` está accesible en: `tudominio.com/robots.txt`

### **Funcionalidad:**
- [ ] Todos los botones de WhatsApp abren con el mensaje correcto
- [ ] El formulario de contacto envía datos correctamente
- [ ] La navegación entre páginas funciona sin errores
- [ ] Las tarjetas de precios son clickeables y abren WhatsApp

### **Rendimiento:**
- [ ] El sitio carga en menos de 3 segundos
- [ ] Las imágenes se cargan correctamente
- [ ] No hay errores en la consola del navegador (F12)

---

## 🎯 OPTIMIZACIONES ADICIONALES (OPCIONAL)

### **1. Configurar HTTPS (SSL)**

Si tu sitio no tiene HTTPS:
1. En cPanel, busca **SSL/TLS Status**
2. Activa el certificado SSL gratuito (Let's Encrypt)
3. Fuerza HTTPS agregando esto al inicio de `.htaccess`:

```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### **2. Configurar Caché del Navegador**

El archivo `.htaccess` ya incluye configuración de caché, pero puedes verificar que funcione:
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Recarga la página
4. Verifica que los archivos CSS/JS tengan "from cache"

### **3. Comprimir Archivos (Gzip)**

El archivo `.htaccess` ya incluye compresión Gzip. Para verificar:
1. Ve a: https://www.giftofspeed.com/gzip-test/
2. Ingresa tu dominio
3. Verifica que diga "Gzip is enabled"

---

## 📞 SOPORTE

Si tienes problemas durante el despliegue:

1. **Revisa los logs de error:**
   - En cPanel → **Error Log** (Registro de errores)
   - Busca errores relacionados con tu dominio

2. **Contacta a tu proveedor de hosting:**
   - Pregunta si tienen `mod_rewrite` habilitado
   - Pregunta si permiten archivos `.htaccess`
   - Pregunta si tienen Node.js o soporte para aplicaciones React

3. **Verifica la consola del navegador:**
   - Presiona F12
   - Ve a la pestaña "Console"
   - Busca errores en rojo

---

## ✅ CHECKLIST FINAL

Antes de dar por terminado el despliegue:

- [ ] Backup del sitio antiguo descargado
- [ ] Carpeta `public_html` limpia
- [ ] Todos los archivos de `dist/` subidos
- [ ] Archivo `.htaccess` presente y con permisos 644
- [ ] Sitio carga correctamente en el navegador
- [ ] Todas las páginas funcionan (inicio, servicios, plagas, contacto, nosotros)
- [ ] Botones de WhatsApp funcionan con mensajes personalizados
- [ ] Formulario de contacto funciona
- [ ] Imágenes cargan correctamente
- [ ] Sitio funciona en móvil
- [ ] HTTPS activo (candado verde en el navegador)
- [ ] No hay errores en la consola del navegador

---

## 🎉 ¡LISTO!

Tu sitio optimizado para SEO está ahora en producción. Los cambios implementados incluyen:

✅ Keywords optimizadas en todas las páginas (fumigación cdmx, chinches, cucarachas, precios, COFEPRIS)
✅ Tarjetas de precios clickeables con mensajes personalizados de WhatsApp
✅ Estructura SEO mejorada en H1 y H2
✅ Footer optimizado con zonas geográficas
✅ Metatags optimizados para búsquedas locales

**Próximos pasos recomendados:**
1. Enviar el sitio a Google Search Console
2. Crear un sitemap.xml
3. Monitorear el tráfico con Google Analytics
4. Revisar el rendimiento SEO en 2-4 semanas

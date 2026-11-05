# Orbe Arquitectura, web

Página estática de una sola pantalla para el estudio Orbe Arquitectura (arquitectura y consultoría de licencias). Sin framework ni proceso de build: HTML, CSS y JavaScript planos.

## Ver la página

Abrir `index.html` en el navegador funciona. Para que las fuentes y las rutas se comporten igual que en un servidor:

```
python -m http.server 5178
```

y entrar en http://127.0.0.1:5178/

## Estructura

```
index.html              la página
assets/css/styles.css   estilos (tokens en :root al principio)
assets/js/main.js       cabecera, revelados, acordeón, menú móvil, formulario
assets/fonts/           Panchang y Satoshi autoalojadas (licencia Fontshare) + fonts.css
assets/img/             logo y fotos provisionales (ver FOTOS.md)
DESIGN.md               sistema visual registrado
PRODUCT.md              contexto de producto y decisiones abiertas
```

## Qué falta por parte del estudio

- **Textos.** Todo lo marcado como "Texto pendiente" en `index.html` (estudio, servicios, licencias). Los comentarios `<!-- ... PROVISIONAL -->` señalan cada bloque.
- **Proyectos.** Cinco hojas con nombre, tipología, lugar, año y foto en `#proyectos` (galería de corte: al hacer scroll cada proyecto entra con un corte de sección). Las fotos se recortan a la pantalla, así que conviene que sean apaisadas. El índice de la izquierda repite los nombres; hay que cambiarlos en los dos sitios.
- **Fotos.** Las actuales son de Unsplash (licencia libre) y son genéricas. Lista en `assets/img/FOTOS.md`. Cada foto tiene una versión `-s` de 720 px para móvil.
- **Datos de contacto.** Dirección, teléfono, correo y horario en el cajetín de `#contacto`.
- **Formulario.** Está validado en cliente pero no envía. Para activarlo, poner la URL del servicio (Formspree, Brevo, un endpoint propio) en `data-endpoint` del `<form>`. Envía JSON con `nombre`, `correo`, `telefono`, `mensaje`.
- **Logo.** `assets/img/logo-orbe.png` mide 150 x 126 px. Hace falta una versión vectorial (SVG) o un PNG de al menos 600 px de ancho para que se vea nítido en pantallas de alta densidad.
- **Páginas legales.** Aviso legal, privacidad y cookies enlazan a `#`.

## Despliegue

La carpeta `deploy/` tiene un `compose.yaml` pensado para Dockge (nginx sirviendo la carpeta del sitio). Ver `deploy/README.md`.

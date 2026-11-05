---
name: Orbe Arquitectura
description: Web del estudio leída como un edificio en sección, sobre papel, tinta y latón
colors:
  paper: "#F2EFE8"
  paper-2: "#E8E3D8"
  paper-3: "#DCD5C6"
  ink: "#121820"
  ink-2: "#3A4049"
  ink-3: "#5F646D"
  navy: "#0D151E"
  navy-2: "#142030"
  brass: "#9A7B43"
  brass-2: "#C8A86B"
  brass-3: "#E6D6B2"
  error: "#A1442A"
  line: "rgba(18, 24, 32, .16)"
  line-light: "rgba(242, 239, 232, .2)"
typography:
  display:
    fontFamily: "Panchang, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw + .4rem, 4.2rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Panchang, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Panchang, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(1.3rem, 2.1vw, 1.9rem)"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
  field-label:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  none: "0"
spacing:
  gut: "clamp(20px, 4.5vw, 64px)"
  label-col: "clamp(150px, 21vw, 300px)"
  body-pad: "clamp(4rem, 8vw, 7.5rem)"
  nav-h: "76px"
  maxw: "1680px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.navy-2}"
  link-secondary:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  input:
    backgroundColor: "rgba(255, 255, 255, .35)"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
  section-label:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Orbe Arquitectura

## Overview

**Creative North Star: "La sección del edificio"**

La página se lee como un plano de sección: una columna de etiquetas a la izquierda nombra cada planta, una línea de corte vertical recorre el documento y se va dibujando en latón al hacer scroll, y los forjados (líneas de 1 px) separan las secciones. La portada es la cubierta: foto vertical a sangre por la izquierda, titular ancho y ligero a la derecha y un arco solar de latón que se dibuja al cargar. Todo es papel, tinta y latón; nada brilla, nada se redondea, nada se mueve sin motivo.

Rechazos confirmados: hero centrado sobre foto oscurecida, serif con itálica dorada, eyebrows sobre los títulos, tarjetas iguales, marquesinas, bordes redondeados, iconos de librería como decoración.

**Key Characteristics:**
- Radio cero en todos los elementos.
- Latón solo en líneas, numerales y estados hover; nunca en bloques.
- Un bloque navy por página (Licencias), el "sótano".
- Fotos reales, reveladas por recorte desde abajo, nunca con etiquetas encima.
- Movimiento solo ligado al scroll o a la carga: arco y foto de portada, línea de corte, forjados que se trazan, galería de corte. El texto no entra animado.

## Colors

Papel cálido como suelo, tinta azulada para texto y navy para el único bloque oscuro; el latón es trazo, no superficie.

### Primary
- **Tinta** (#121820): texto principal, botón primario, bordes de foco de formulario.
- **Navy** (#0D151E): fondo del bloque Licencias y del menú móvil. **Navy 2** (#142030): hover del botón primario, fondo de las fotos dentro del bloque navy.

### Secondary
- **Latón** (#9A7B43): línea de corte, arco solar, subrayados de enlace, hover de títulos del acordeón, foco visible. Contraste 3,5:1 sobre papel: solo para líneas y texto grande.
- **Latón claro** (#C8A86B): numerales de los pasos sobre navy. **Latón pálido** (#E6D6B2): selección de texto.

### Neutral
- **Papel** (#F2EFE8): fondo de página y de cabecera al hacer scroll.
- **Papel 2** (#E8E3D8): fondo de las fotos mientras cargan. **Papel 3** (#DCD5C6): reserva.
- **Tinta 2** (#3A4049): texto secundario, enlaces de navegación en reposo.
- **Tinta 3** (#5F646D): texto provisional, metadatos, etiquetas del cajetín (5,2:1 sobre papel).
- **Línea** (rgba(18,24,32,.16)): forjados, línea de corte en reposo, bordes de inputs y cajetín. **Línea clara** (rgba(242,239,232,.2)): equivalente sobre navy.
- **Error** (#A1442A): único color semántico; borde y texto de error del formulario.

### Named Rules
**La regla del trazo.** El latón nunca rellena una superficie. Si una zona necesita peso, se usa navy; el latón solo dibuja.

**La regla del sótano.** Hay un único bloque navy por página. Los demás contrastes se resuelven con líneas y espacio.

## Typography

**Display Font:** Panchang (Fontshare, autoalojada; fallback Avenir Next, Segoe UI)
**Body Font:** Satoshi (Fontshare, autoalojada; fallback Avenir Next, Segoe UI)

**Character:** Panchang es ancha y geométrica y se usa siempre en peso 300 con tracking negativo; Satoshi es neutra y cálida y lleva todo lo que se lee. Un énfasis dentro de un titular se hace con peso o tamaño de la misma familia, nunca con otra fuente ni con itálica de adorno.

### Hierarchy
- **Display** (300, clamp(1.9rem, 3.4vw + .4rem, 4.2rem), 1.06, -0.02em): titular de portada, máximo dos líneas en escritorio.
- **Headline** (300, clamp(1.5rem, 2.4vw, 2.5rem), 1.22, -0.015em): enunciado de cada sección, máximo 26ch.
- **Title** (300, clamp(1.3rem, 2.1vw, 1.9rem), 1.2): títulos del acordeón de servicios y enlaces del menú móvil (hasta 3rem).
- **Body** (400, 1.0625rem, 1.6): párrafos, máximo 52 a 58ch. Portada a 1.125rem.
- **Label** (500, 0.9375rem, 1.4): etiqueta de sección, navegación, botones, captions de proyecto.
- **Field label** (500, 0.75rem, mayúsculas, 0.06em): solo dentro del cajetín de contacto, como rótulo de campo.
- **Numeral** (Panchang 300, 2.4rem, latón claro): numerales de proceso, tabulares.

### Named Rules
**La regla del peso único.** Panchang se usa solo en 300 y es el único peso servido. Satoshi se sirve en 400 y 500; no hay itálicas ni negritas cargadas.

**La regla sin eyebrow.** Ningún título lleva etiqueta pequeña encima. La columna de etiquetas ya nombra la sección.

## Layout

Contenedor de 1680 px centrado con margen `gut` (20 a 64 px). Cada sección es una rejilla de dos columnas: etiqueta (`label-col`, 150 a 300 px) y cuerpo; el cuerpo lleva `border-left` de 1 px que, encadenado entre secciones, forma la línea de corte continua. Sobre ella, un elemento `.cut` de latón escala con `animation-timeline: view()` sobre la línea de tiempo `--sheet`, con la punta siempre en el centro del viewport. Cada sección lleva un forjado de 2 px (`.sec::before`) que se traza de izquierda a derecha al entrar en pantalla (`animation-timeline: view()`, rango `entry 0% entry 22%`). En móvil el forjado se traslada a la cabecera de la etiqueta: línea de 2 px, muesca de corte en latón y regla que continúa a la derecha. La etiqueta es `sticky` bajo la cabecera.

La portada es una rejilla 5/7 a sangre completa, fuera del contenedor, con altura mínima de 100dvh menos la cabecera. Dentro del cuerpo: Estudio con columna de texto de 40rem (unos 65 caracteres) y foto de 14 a 20rem desplazada hacia abajo; Proyectos como galería de corte pegajosa (escenario de 100dvh menos cabecera, carril de 5,5 pantallas); Servicios en acordeón de 64rem; Licencias con la foto en la columna de etiquetas y tres pasos en columnas; Contacto 5/7 con cajetín y formulario.

Ritmo vertical: `body-pad` (4 a 7.5rem) arriba y abajo de cada sección, 2.5 a 4.5rem entre enunciado y contenido, 1.25rem entre párrafos. Más aire encima de un título que debajo.

Puntos de corte: 1100 px (navegación más compacta), 1024 px (proyectos a 6 columnas), 880 px (una columna, cabecera de 64 px, menú móvil, línea de corte oculta), 640 px (proyectos y cajetín a una columna).

## Elevation & Depth

Sistema plano. No hay sombras en ningún elemento. La profundidad se da con tres recursos: la foto frente al papel, el bloque navy frente al papel y las líneas de 1 px que ordenan el plano. La cabecera al hacer scroll gana fondo papel opaco y una línea inferior, sin desenfoque.

### Named Rules
**La regla del plano.** Nada flota. Si un elemento necesita separarse, se le da una línea o se le cambia el fondo, nunca una sombra.

## Shapes

Radio 0 en botones, inputs, fotos, cajetín y menú. Las líneas son siempre de 1 px (1,25 px el arco solar en escritorio, con `vector-effect: non-scaling-stroke`). Los iconos son trazos autoría de 1,5 px con remate recto: flecha del botón, más del acordeón, hamburguesa que se cruza en aspa. Las fotos se recortan al ratio declarado con `aspect-ratio` y `object-fit: cover`.

## Components

- **Botón primario.** Tinta sobre papel, 0.95rem 1.4rem, etiqueta 500 a 0.9375rem, flecha que avanza 3 px en hover, `scale(.97)` al pulsar, navy 2 en hover, opacidad .55 deshabilitado.
- **Enlace secundario.** Texto tinta subrayado en latón con 0.32em de desplazamiento; en hover el texto pasa a latón.
- **Navegación.** Enlaces 500 en tinta 2; la sección actual y el hover llevan una línea de latón de 1 px que crece desde la izquierda. Una sola línea en escritorio, 76 px de alto.
- **Menú móvil.** Panel navy bajo la cabecera, enlaces Panchang 300 a 2 a 3rem separados por líneas claras, entrada por `clip-path` con escalonado de 50 ms, salida en 250 ms.
- **Etiqueta de sección.** `h2` a 0.9375rem 500 en la columna izquierda, pegajosa.
- **Enunciado.** Párrafo Panchang 300 que abre cada sección; sustituye a cualquier titular grande.
- **Galería de corte (proyectos).** Carril de 5,5 pantallas con un escenario pegajoso; cada proyecto es una hoja opaca (foto + pie con nombre y datos). La siguiente hoja entra con un corte de sección: `clip-path` de izquierda a derecha gobernado por `animation-timeline: --gal` en el rango `contain`, con una línea de latón de 2 px en el borde del corte y la foto asentándose de 1.06 a 1. Índice de proyectos en la columna de etiquetas, pegajoso, con muesca de latón en el activo. Sin `animation-timeline` o con `prefers-reduced-motion`, las hojas se apilan en vertical.
- **Acordeón.** Título Panchang 300, más de dos trazos cuyo trazo vertical colapsa al abrir, panel con `grid-template-rows` 0fr a 1fr en 360 ms. Uno abierto cada vez.
- **Pasos.** Numeral latón claro, título Satoshi 500, texto 0.9375rem, línea superior clara.
- **Cajetín.** `dl` con celdas bordeadas, rótulos en mayúsculas a 0.75rem y valores a 1rem; la primera celda ocupa todo el ancho.
- **Formulario.** Etiqueta encima, input con borde línea y fondo blanco al 35 %, borde tinta en foco, error en rojo bajo el campo, nota de estado junto al botón.
- **Foco visible.** Contorno de 2 px en latón con 3 px de separación en todo lo interactivo.

## Do's and Don'ts

- Sí: una foto real por sección donde haga falta, revelada por recorte desde abajo. El texto aparece quieto.
- Sí: numerar solo lo que es secuencia (los pasos de licencia).
- Sí: respetar `prefers-reduced-motion` (todo visible de entrada, línea de corte estática).
- No: eyebrows, pills sobre fotos, marquesinas, tarjetas con sombra, iconos de librería como adorno, bordes redondeados, gradientes en texto, guiones largos.
- No: un segundo bloque navy, ni latón como relleno.
- No: Panchang en pesos por encima de 300 ni para párrafos.

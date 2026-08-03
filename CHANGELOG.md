# Changelog

## 4.0.0-alpha.8 — Header outlines and spacing

- Separación corregida entre “Cumple”, el número y “Años”.
- “Cumple” y “Años” ahora usan delineado blanco real, no sombra blanca.
- Número rosa con degradado tipo globo.
- Doble delineado del número: blanco interior y morado exterior.
- Se conserva la animación de entrada y la adaptación responsive.

## 4.0.0-alpha.3 — Sprint 0

- Fondo fijo estabilizado con `100dvh`.
- Eliminado el `contain` que podía recortar la capa en móviles.
- Audio iniciado directamente desde el toque del botón de apertura.
- Volumen limitado estrictamente al rango de 0 a 1.
- Precarga explícita de Futurino y Poppins.
- Favicon por tema con fallback sin error 404.
- Audio configurado con `preload="auto"` y `playsinline`.

## 4.0.0-alpha.2

- Primera corrección del fondo y del cálculo de volumen.

## 4.0.0-alpha.4 — Sprint 1: Foundation

- Se creó `css/base/tokens.css` como fuente única del sistema visual.
- Se creó `css/base/typography.css` con Futurino, Fredoka y Poppins.
- Se añadieron tokens semánticos para colores, degradados, cristal, sombras, radios, espaciado y movimiento.
- Se conservaron alias temporales para que los componentes Alpha 3 sigan funcionando durante la migración.
- Se añadió Fredoka desde Google Fonts.
- No se modificó todavía la apariencia de los componentes: esta entrega establece los cimientos.

## 4.0.0-alpha.5 — Lumi Header

- Nuevo componente visual `Lumi Header`.
- Nombre en Futurino blanco con delineado morado.
- Nueva frase configurable `Cumple [edad] Años`.
- Edad protagonista con efecto brillante y animación pop suave.
- Decoración temática con destellos y huellita pastel.
- Estilos del Header separados en `css/components/lumi-header.css`.
- Compatibilidad con reducción de movimiento.

## 4.0.0-alpha.6

- El nombre ocupa aproximadamente el 80% del ancho útil del marco.
- “Cumple”, el número y “Años” ahora se apilan verticalmente.
- El número protagonista aumenta de tamaño sin invadir el marco.
- Se mejora la proporción del encabezado en pantallas pequeñas.

## 4.0.0-alpha.7 — Lumi Header Pixel Perfect

- El nombre ocupa aproximadamente el 80% del ancho interno del marco.
- Se evita el salto de línea mediante `white-space: nowrap`.
- El tamaño del nombre ahora responde al ancho real del componente mediante unidades de contenedor.
- Se compactó la separación entre el nombre y el bloque “Cumple 5 Años”.
- “Cumple”, número y “Años” permanecen apilados y centrados.
- Se ajustó el espaciado interno para que el encabezado se perciba como una sola composición.

## 4.0.0-alpha.9

- Eliminado el delineado morado interior del número protagonista.
- El relleno rosa ahora toca directamente el delineado blanco.
- El delineado morado se dibuja únicamente por fuera mediante sombras de silueta.
- El brillo superior se recorta con la forma del número y ya no sobresale lateralmente.

# RC5 — Mobile Network Fix

Esta versión parte de RC3, la última versión estable.

## Correcciones
- Google Fonts deja de bloquear el primer render.
- La Intro y el botón se inicializan antes de la precarga.
- Si Google Fonts falla, se usan fuentes de respaldo.
- El audio usa preload="metadata".
- Se conserva la portada de WhatsApp de RC2.
- Se conserva la corrección del fondo móvil de RC3.

## Archivos modificados
- index.html
- js/app.js

## Prueba recomendada
1. Publicar todos los archivos.
2. Esperar a que termine GitHub Pages.
3. Desactivar Wi-Fi.
4. Abrir:
   https://lumicreationsnld.github.io/Lumi-invitaciones/?v=rc5

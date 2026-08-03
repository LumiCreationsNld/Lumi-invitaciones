# LUMI Invitations Framework V4

Primera base limpia de la V4. No sustituye automáticamente la V3 publicada.

## Qué corrige

- Elimina la mezcla de `style.css` y `style-v2.css`.
- Deja una sola configuración, sin claves duplicadas.
- Deja una sola función de Google Calendar.
- Carga el núcleo antes que los módulos dependientes.
- Espera las fuentes y precarga los recursos críticos antes de permitir abrir.
- El fondo permanece en una capa fija estable y ya no anima `background-size`.
- La fuente Futurino tiene una sola declaración, peso 400.

## Para probar

1. Copia dentro de `assets/themes/gabby/` estos archivos de tu proyecto actual:
   - `background.png`
   - `frame.png`
   - `logo.png`
   - `character.png`
   - `music.mp3`
2. Copia `Futurino.ttf` a `assets/themes/gabby/fonts/Futurino.ttf`.
3. Abre `index.html` con Live Server.
4. No reemplaces todavía la versión publicada.

## Siguiente etapa

Validar visualmente esta base y después integrar las variables editables del tema y la vista previa para WhatsApp.

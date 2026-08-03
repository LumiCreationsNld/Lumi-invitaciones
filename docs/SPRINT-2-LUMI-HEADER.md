# Sprint 2 — Lumi Header

## Objetivo

Crear el encabezado principal aprobado en el UI Kit de Lumi.

## Estructura visual

1. Destello superior.
2. Nombre del festejado en Futurino.
3. Frase de celebración.
4. Edad protagonista.
5. Decoración temática inferior.

## Configuración

```javascript
celebrant: {
  name: "Eliette",
  age: 5
},
celebration: {
  prefix: "Cumple",
  suffix: "Años"
}
```

## Pruebas

- El nombre debe utilizar Futurino.
- Las letras deben verse blancas con delineado morado.
- Debe leerse “Cumple 5 Años”.
- El número debe ser el segundo punto focal después del nombre.
- La entrada debe sentirse suave y no producir saltos de layout.
- La consola debe permanecer limpia.

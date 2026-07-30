/*==================================================
    PERSONAJE
==================================================*/

function crearPersonaje(){

    const contenedor =
        document.getElementById("character");

    if(!contenedor){
        return;
    }

    contenedor.innerHTML = "";

    const rutaTema =
        obtenerRutaTema();

    const imagen =
        document.createElement("img");

    imagen.src =
        `${rutaTema}/character.png`;

    imagen.className =
        "characterImage";

    imagen.alt =
        `Personaje del tema ${invitacion.tema.nombre}`;

    manejarErrorDeRecurso(
        imagen,
        "character.png",
        () => {

            contenedor.hidden = true;

        }
    );

    contenedor.append(imagen);

}

Registry.registrar(
    "personaje",
    {
        elemento:"character",
        render:crearPersonaje
    }
);
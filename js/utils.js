/*==================================================
    ICONOS DE INFORMACIÓN
==================================================*/

function crearIconoInformacion(item){

    if(!item.icono){
        return null;
    }

    const contenedorIcono =
        document.createElement("div");

    contenedorIcono.className =
        "infoIcon";

    const esImagen =
        /\.(png|jpg|jpeg|webp|svg)$/i.test(
            item.icono
        );

    if(esImagen){

        const imagen =
            document.createElement("img");

        imagen.src =
            resolverRutaIcono(item.icono);

        imagen.alt =
            item.titulo
                ? `Icono de ${item.titulo}`
                : "Icono informativo";

        imagen.className =
            "infoIconImage";

        manejarErrorDeRecurso(
            imagen,
            item.icono,
            () => {

                contenedorIcono.remove();

            }
        );

        contenedorIcono.append(imagen);

    }
    else{

        contenedorIcono.textContent =
            item.icono;

    }

    return contenedorIcono;

}


/*==================================================
    UTILIDADES DEL TEMA
==================================================*/

function obtenerRutaTema(){

    return `assets/themes/${invitacion.tema.carpeta}`;

}


/*==================================================
    RESOLVER RUTA DE ICONOS
==================================================*/

function resolverRutaIcono(icono){

    if(

        icono.startsWith("http://") ||
        icono.startsWith("https://") ||
        icono.startsWith("/") ||
        icono.startsWith("assets/")

    ){

        return icono;

    }

    return `${obtenerRutaTema()}/icons/${icono}`;

}


function manejarErrorDeRecurso(
    elemento,
    nombreArchivo,
    accionAlternativa
){

    elemento.addEventListener(
        "error",
        () => {

            console.warn(
                `No se pudo cargar el recurso del tema: ${nombreArchivo}`
            );

            if(
                typeof accionAlternativa === "function"
            ){

                accionAlternativa();

            }

        },
        {
            once:true
        }
    );

}

function precargarFondo(ruta){

    const imagen =
        new Image();

    imagen.src = ruta;

    imagen.addEventListener(
        "error",
        () => {

            console.warn(
                `No se pudo cargar el fondo: ${ruta}`
            );

            document.body.classList.add(
                "themeBackground--missing"
            );

        },
        {
            once:true
        }
    );

}
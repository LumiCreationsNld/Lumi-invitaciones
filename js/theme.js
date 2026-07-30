/*==================================================
    CARGA DEL TEMA
==================================================*/

function cargarTema(){

    aplicarRecursos();

    aplicarTema();

}


/*==================================================
    RECURSOS DEL TEMA
==================================================*/

function aplicarRecursos(){

    const rutaTema =
        obtenerRutaTema();

    aplicarMarco(rutaTema);

    aplicarFondo(rutaTema);

    aplicarMusica(rutaTema);

}


/*==================================================
    MARCO
==================================================*/

function aplicarMarco(rutaTema){

    const frame =
        document.getElementById("frame");

    if(!frame){
        return;
    }

    frame.src =
        `${rutaTema}/frame.png`;

    frame.alt =
        "Marco decorativo de la invitación";

    manejarErrorDeRecurso(
        frame,
        "frame.png"
    );

}


/*==================================================
    FONDO
==================================================*/

function aplicarFondo(rutaTema){

    const backgroundImage =
        document.getElementById("backgroundImage");

    if(!backgroundImage){
        return;
    }

    const rutaFondo =
        `${rutaTema}/background.png`;

    backgroundImage.style.backgroundImage =
        `url("${rutaFondo}")`;

    precargarFondo(rutaFondo);

}


/*==================================================
    MÚSICA
==================================================*/

function aplicarMusica(rutaTema){

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    if(!backgroundMusic){
        return;
    }

    backgroundMusic.src =
        `${rutaTema}/music.mp3`;

    backgroundMusic.load();

}


/*==================================================
    APLICACIÓN GENERAL DEL TEMA
==================================================*/

function aplicarTema(){

    aplicarColores();

    aplicarTipografias();

    aplicarEstilosDelNombre();

    aplicarEstilosDeBotones();

     aplicarEstilosDeTarjetas();

    aplicarAnimaciones();


}


/*==================================================
    COLORES
==================================================*/

function aplicarColores(){

    const root =
        document.documentElement;

    const colores =
        invitacion.colores || {};

    establecerVariableCSS(
        root,
        "--color-primary",
        colores.principal,
        "#8b5cf6"
    );

    establecerVariableCSS(
        root,
        "--color-secondary",
        colores.secundario,
        "#ff5db1"
    );

    establecerVariableCSS(
        root,
        "--color-text",
        colores.texto,
        "#444444"
    );

    establecerVariableCSS(
        root,
        "--color-white",
        colores.blanco,
        "#ffffff"
    );

    establecerVariableCSS(
        root,
        "--guest-name-color",
        colores.nombre,
        colores.principal || "#ffffff"
    );

    establecerVariableCSS(
        root,
        "--guest-age-color",
        colores.edad,
        colores.secundario || "#ff5db1"
    );

    establecerVariableCSS(
        root,
        "--guest-name-stroke",
        colores.bordeNombre,
        "#9605b3"
    );

}


/*==================================================
    TIPOGRAFÍAS
==================================================*/

function aplicarTipografias(){

    const root =
        document.documentElement;

    const tipografias =
        invitacion.tipografias || {};

    establecerVariableCSS(
        root,
        "--font-guest-name",
        formatearFuente(
            tipografias.nombre || "Futurino"
        )
    );

    establecerVariableCSS(
        root,
        "--font-guest-age",
        formatearFuente(
            tipografias.edad || "Baloo 2"
        )
    );

    establecerVariableCSS(
        root,
        "--font-text",
        formatearFuente(
            tipografias.texto || "Poppins"
        )
    );

}


/*==================================================
    ESTILOS DEL NOMBRE
==================================================*/

function aplicarEstilosDelNombre(){

    const root =
        document.documentElement;

    const nombre =
        invitacion.nombre || {};

    establecerVariableCSS(
        root,
        "--guest-name-stroke-width",
        nombre.grosorBorde,
        "3px"
    );

}

/*==================================================
    ESTILOS DE LOS BOTONES
==================================================*/

function aplicarEstilosDeBotones(){

    const root =
        document.documentElement;

    const botones =
        invitacion.botonesTema || {};

    establecerVariableCSS(
        root,
        "--button-font",
        formatearFuente(
            botones.fuente || "Poppins"
        )
    );

    establecerVariableCSS(
        root,
        "--button-text-color",
        botones.texto,
        "#ffffff"
    );

    establecerVariableCSS(
        root,
        "--button-description-color",
        botones.descripcion,
        "rgba(255,255,255,.88)"
    );

    establecerVariableCSS(
        root,
        "--button-radius",
        botones.radio,
        "22px"
    );

    establecerVariableCSS(
        root,
        "--button-border-color",
        botones.borde,
        "rgba(255,255,255,.65)"
    );

    establecerVariableCSS(
        root,
        "--button-shadow",
        botones.sombra,
        "0 12px 28px rgba(74,42,110,.22)"
    );

    establecerVariableCSS(
        root,
        "--button-icon-background",
        botones.iconoFondo,
        "rgba(255,255,255,.22)"
    );

    establecerVariableCSS(
        root,
        "--button-arrow-color",
        botones.flecha,
        "rgba(255,255,255,.90)"
    );

}


/*==================================================
    ESTILOS DE TARJETAS
==================================================*/

function aplicarEstilosDeTarjetas(){

    const root =
        document.documentElement;

    const tarjetas =
        invitacion.tarjetasTema || {};

    establecerVariableCSS(
        root,
        "--card-radius",
        tarjetas.radio,
        "28px"
    );

    establecerVariableCSS(
        root,
        "--card-background",
        tarjetas.fondo,
        "rgba(255,255,255,.18)"
    );

    establecerVariableCSS(
        root,
        "--card-border",
        tarjetas.borde,
        "rgba(255,255,255,.38)"
    );

    establecerVariableCSS(
        root,
        "--card-shadow",
        tarjetas.sombra,
        "0 18px 42px rgba(67,35,95,.20)"
    );

    establecerVariableCSS(
        root,
        "--card-blur",
        tarjetas.desenfoque,
        "16px"
    );

    establecerVariableCSS(
        root,
        "--card-padding",
        tarjetas.espacioInterno,
        "24px"
    );

}


/*==================================================
    ESTILOS DE ANIMACIONES
==================================================*/

function aplicarAnimaciones(){

    const root =
        document.documentElement;

    const animaciones =
        invitacion.animacionesTema || {};

    establecerVariableCSS(
        root,
        "--animation-entry-duration",
        animaciones.duracionEntrada,
        "900ms"
    );

    establecerVariableCSS(
        root,
        "--animation-fast-duration",
        animaciones.duracionRapida,
        "350ms"
    );

    establecerVariableCSS(
        root,
        "--animation-button-delay",
        animaciones.retrasoBotones,
        "120ms"
    );

    establecerVariableCSS(
        root,
        "--animation-offset",
        animaciones.desplazamiento,
        "28px"
    );

    establecerVariableCSS(
        root,
        "--animation-start-scale",
        animaciones.escalaInicial,
        ".96"
    );

    establecerVariableCSS(
        root,
        "--animation-easing",
        animaciones.curva,
        "cubic-bezier(.22,1,.36,1)"
    );

}


/*==================================================
    UTILIDADES
==================================================*/

function establecerVariableCSS(
    root,
    propiedad,
    valor,
    respaldo
){

    root.style.setProperty(
        propiedad,
        valor || respaldo
    );

}


function formatearFuente(nombreFuente){

    return `"${nombreFuente}"`;

}


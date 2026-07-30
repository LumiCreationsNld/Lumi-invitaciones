/*==================================================
    LUMI INVITATIONS FRAMEWORK V3.2
    AUDIO.JS
==================================================*/

let musicaActiva = false;


/*==================================================
    INICIAR AUDIO
==================================================*/

function iniciarAudio(){

    const audio =
        document.getElementById("backgroundMusic");

    const botonMusica =
        document.getElementById("musicButton");

    if(!audio || !botonMusica){
        return;
    }

    if(!invitacion.efectos.musica){

        audio.pause();

        botonMusica.hidden = true;

        return;

    }

    botonMusica.hidden = false;

    botonMusica.addEventListener(
        "click",
        alternarMusica
    );

    audio.addEventListener(
        "play",
        actualizarEstadoMusica
    );

    audio.addEventListener(
        "pause",
        actualizarEstadoMusica
    );

    audio.addEventListener(
        "error",
        manejarErrorAudio
    );

    audio.loop = true;

    audio.volume = 0;

    actualizarEstadoMusica();

}


/*==================================================
    REPRODUCIR MÚSICA
==================================================*/

async function reproducirMusica(){

    const audio =
        document.getElementById("backgroundMusic");

    if(!audio){
        return;
    }

    try{

        await audio.play();

        musicaActiva = true;

        hacerFadeIn(audio);

    }
    catch(error){

        musicaActiva = false;

        console.warn(
            "El navegador bloqueó la reproducción automática.",
            error
        );

        actualizarEstadoMusica();

    }

}


/*==================================================
    PAUSAR MÚSICA
==================================================*/

function pausarMusica(){

    const audio =
        document.getElementById("backgroundMusic");

    if(!audio){
        return;
    }

    audio.pause();

    musicaActiva = false;

    actualizarEstadoMusica();

}


/*==================================================
    ALTERNAR MÚSICA
==================================================*/

function alternarMusica(){

    const audio =
        document.getElementById("backgroundMusic");

    if(!audio){
        return;
    }

    if(audio.paused){

        reproducirMusica();

    }
    else{

        pausarMusica();

    }

}


/*==================================================
    ACTUALIZAR BOTÓN
==================================================*/

function actualizarEstadoMusica(){

    const audio =
        document.getElementById("backgroundMusic");

    const boton =
        document.getElementById("musicButton");

    if(!audio || !boton){
        return;
    }

    const reproduciendo =
        !audio.paused;

    musicaActiva =
        reproduciendo;

    boton.textContent =
        reproduciendo
            ? "🔊"
            : "🔇";

    boton.classList.toggle(
        "musicButton--playing",
        reproduciendo
    );

    boton.setAttribute(
        "aria-label",
        reproduciendo
            ? "Pausar música"
            : "Reproducir música"
    );

    boton.title =
        reproduciendo
            ? "Pausar música"
            : "Reproducir música";

}


/*==================================================
    FADE IN
==================================================*/

function hacerFadeIn(audio){

    const volumenFinal =
        invitacion.audio?.volumen ?? 0.7;

    const incremento =
        0.05;

    audio.volume = 0;

    const intervalo =
        setInterval(() => {

            if(
                audio.paused ||
                audio.volume >= volumenFinal
            ){

                audio.volume =
                    Math.min(
                        volumenFinal,
                        1
                    );

                clearInterval(intervalo);

                return;

            }

            audio.volume =
                Math.min(
                    audio.volume + incremento,
                    volumenFinal
                );

        }, 100);

}


/*==================================================
    ERROR DE AUDIO
==================================================*/

function manejarErrorAudio(){

    const boton =
        document.getElementById("musicButton");

    console.error(
        "No fue posible cargar el archivo de música."
    );

    if(boton){

        boton.textContent =
            "⚠️";

        boton.disabled =
            true;

        boton.title =
            "No se pudo cargar la música";

    }

}

/*==================================================
    EVENTOS DE AUDIO
==================================================*/

Lumi.Events.on(
    "invitation:opened",
    () => {

        if(
            invitacion.efectos.musica &&
            invitacion.audio?.reproducirAlAbrir
        ){

            reproducirMusica();

        }

    }
);
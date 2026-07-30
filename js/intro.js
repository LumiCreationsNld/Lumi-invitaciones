/*==================================================
    LUMI INVITATIONS FRAMEWORK V3.2
    INTRO.JS
==================================================*/

/*==================================================
    INTRO
==================================================*/

function cargarIntro(){

    const introLogo =
        document.getElementById("introLogo");

    const introTitle =
        document.getElementById("introTitle");

    const introSubtitle =
        document.getElementById("introSubtitle");

    const btnOpen =
        document.getElementById("btnOpen");

    const rutaTema =
        obtenerRutaTema();

    if(introLogo){

        introLogo.src =
            `${rutaTema}/logo.png`;

        introLogo.alt =
            `Invitación de ${invitacion.festejado.nombre}`;

        manejarErrorDeRecurso(
            introLogo,
            "logo.png"
        );

    }

    if(introTitle){

        introTitle.textContent =
            invitacion.intro.titulo;

    }

    if(introSubtitle){

        introSubtitle.textContent =
            invitacion.intro.subtitulo;

    }

    if(btnOpen){

        btnOpen.textContent =
            invitacion.intro.boton;

    }

}


/*==================================================
    INICIAR INTRO
==================================================*/

function iniciarIntro(){

    const intro =
        document.getElementById("intro");

    const invitacionElemento =
        document.getElementById("invitation");

    const botonAbrir =
        document.getElementById("btnOpen");

    if(!intro || !invitacionElemento || !botonAbrir){

        console.warn(
            "No se encontraron todos los elementos de la intro."
        );

        return;

    }

    invitacionElemento.hidden = true;

    botonAbrir.addEventListener(
        "click",
        abrirInvitacion
    );

}


/*==================================================
    ABRIR INVITACIÓN
==================================================*/

async function abrirInvitacion(){

    const intro =
        document.getElementById("intro");

    const invitacionElemento =
        document.getElementById("invitation");

    const botonAbrir =
        document.getElementById("btnOpen");

    if(!intro || !invitacionElemento){
        return;
    }

    if(botonAbrir){

        botonAbrir.disabled = true;

        botonAbrir.classList.add(
            "introButton--loading"
        );

    }

    /* Cerrar suavemente la portada */

    intro.classList.add(
        "intro--closing"
    );

    await esperar(700);

    intro.hidden = true;


    /* Preparar la invitación */

    invitacionElemento.classList.remove(
        "invitation--visible"
    );

    invitacionElemento.hidden = false;


    /*
        Esperamos dos fotogramas para que el navegador
        dibuje primero el estado oculto y después anime
        la entrada.
    */

    await esperarFotograma();

    await esperarFotograma();


    /* Mostrar la invitación */

    invitacionElemento.classList.add(
        "invitation--visible"
    );


    /* Comunicar que la invitación fue abierta */

    Lumi.Events.emit(
        "invitation:opened"
    );

}


/*==================================================
    UTILIDAD DE TIEMPO
==================================================*/

function esperar(milisegundos){

    return new Promise(resolve => {

        setTimeout(
            resolve,
            milisegundos
        );

    });

}

/*==================================================
    ESPERAR FOTOGRAMA
==================================================*/

function esperarFotograma(){

    return new Promise(resolve => {

        requestAnimationFrame(resolve);

    });

}
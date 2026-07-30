/*==================================================
    LUMI INVITATIONS FRAMEWORK V3.1
    COUNTDOWN.JS
==================================================*/

let intervaloContador = null;


/*==================================================
    INICIAR CONTADOR
==================================================*/

function iniciarContador(){

    const contenedor =
        document.getElementById("countdown");

    if(!contenedor){
        return;
    }

    if(
        !invitacion.efectos.contador ||
        !invitacion.contador.fecha
    ){
        contenedor.hidden = true;
        return;
    }

    contenedor.hidden = false;

    actualizarContador();

    intervaloContador = setInterval(
        actualizarContador,
        1000
    );

}


/*==================================================
    ACTUALIZAR CONTADOR
==================================================*/

function actualizarContador(){

    const fechaEvento =
        new Date(invitacion.contador.fecha).getTime();

    const fechaActual =
        new Date().getTime();

    const diferencia =
        fechaEvento - fechaActual;

    if(Number.isNaN(fechaEvento)){

        console.error(
            "La fecha del contador no es válida:",
            invitacion.contador.fecha
        );

        detenerContador();

        return;

    }

    if(diferencia <= 0){

        mostrarEventoIniciado();

        detenerContador();

        return;

    }

    const segundo =
        1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;

    const dias =
        Math.floor(diferencia / dia);

    const horas =
        Math.floor(
            (diferencia % dia) / hora
        );

    const minutos =
        Math.floor(
            (diferencia % hora) / minuto
        );

    const segundos =
        Math.floor(
            (diferencia % minuto) / segundo
        );

    actualizarNumero("days", dias);

    actualizarNumero("hours", horas);

    actualizarNumero("minutes", minutos);

    actualizarNumero("seconds", segundos);

}


/*==================================================
    ACTUALIZAR NÚMERO
==================================================*/

function actualizarNumero(id, valor){

    const elemento =
        document.getElementById(id);

    if(!elemento){
        return;
    }

    elemento.textContent =
        String(valor).padStart(2, "0");

}


/*==================================================
    EVENTO INICIADO
==================================================*/

function mostrarEventoIniciado(){

    const contenedor =
        document.getElementById("countdown");

    if(!contenedor){
        return;
    }

    contenedor.innerHTML = "";

    const mensaje =
        document.createElement("div");

    mensaje.className =
        "countdownFinished";

    mensaje.innerHTML = `

        <span class="countdownFinishedIcon">
            🎉
        </span>

        <p class="countdownFinishedText">
            ¡La celebración ha comenzado!
        </p>

    `;

    contenedor.append(mensaje);

}


/*==================================================
    DETENER CONTADOR
==================================================*/

function detenerContador(){

    if(intervaloContador){

        clearInterval(intervaloContador);

        intervaloContador = null;

    }

}


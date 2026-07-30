/*==================================================
    LUMI INVITATIONS FRAMEWORK V3.2
    ACTIONS.JS
==================================================*/


/*==================================================
    REGISTRO DE ACCIONES
==================================================*/

const acciones = {

    whatsapp: abrirWhatsApp,

    mapa: abrirMapa,

    telefono: llamarTelefono,

    correo: enviarCorreo,

    calendario: agregarAlCalendario,

    regalos: abrirRegalos

};


/*==================================================
    INICIALIZAR ACCIONES
==================================================*/

function iniciarAcciones(){

    const botones =
        document.querySelectorAll(".actionButton");

    botones.forEach(boton => {

        boton.addEventListener(
            "click",
            manejarAccion
        );

    });

}


/*==================================================
    MANEJAR ACCIÓN
==================================================*/

function manejarAccion(evento){

    const accion =
        evento.currentTarget.dataset.action;

    const funcionAccion =
        acciones[accion];

    if(typeof funcionAccion !== "function"){

        console.warn(
            `Acción no registrada: ${accion}`
        );

        return;

    }

    funcionAccion();

}


/*==================================================
    WHATSAPP
==================================================*/

function abrirWhatsApp(){

    const telefono =
        invitacion.contacto?.telefono;

    const mensaje =
        invitacion.contacto?.mensaje;

    if(!telefono){

        console.warn(
            "No se configuró un número de WhatsApp."
        );

        return;

    }

    const telefonoLimpio =
        String(telefono).replace(/\D/g, "");

    const mensajeCodificado =
        encodeURIComponent(
            mensaje || ""
        );

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/*==================================================
    MAPA
==================================================*/

function abrirMapa(){

    const url =
        invitacion.mapa?.url;

    if(!url){

        console.warn(
            "No se configuró una ubicación."
        );

        return;

    }

    abrirEnNuevaPestana(url);

}


/*==================================================
    TELÉFONO
==================================================*/

function llamarTelefono(){

    const telefono =
        invitacion.contacto?.telefono;

    if(!telefono){

        console.warn(
            "No se configuró un teléfono."
        );

        return;

    }

    const telefonoLimpio =
        String(telefono).replace(/[^\d+]/g, "");

    window.location.href =
        `tel:${telefonoLimpio}`;

}


/*==================================================
    CORREO
==================================================*/

function enviarCorreo(){

    const email =
        invitacion.contacto?.email;

    if(!email){

        console.warn(
            "No se configuró un correo electrónico."
        );

        return;

    }

    const asunto =
        encodeURIComponent(
            invitacion.contacto?.asuntoCorreo ||
            "Confirmación de asistencia"
        );

    const mensaje =
        encodeURIComponent(
            invitacion.contacto?.mensajeCorreo ||
            invitacion.contacto?.mensaje ||
            ""
        );

    window.location.href =
        `mailto:${email}?subject=${asunto}&body=${mensaje}`;

}


/*==================================================
    CALENDARIO
==================================================*/

function agregarCalendario(){

    const fechaInicio =
        invitacion.calendario?.inicio;

    const fechaFin =
        invitacion.calendario?.fin;

    if(!fechaInicio || !fechaFin){

        console.warn(
            "Faltan las fechas del calendario."
        );

        return;

    }

    const titulo =
        encodeURIComponent(
            invitacion.calendario?.titulo ||
            `Fiesta de ${invitacion.festejado.nombre}`
        );

    const detalles =
        encodeURIComponent(
            invitacion.calendario?.descripcion ||
            invitacion.evento.aviso ||
            ""
        );

    const ubicacion =
        encodeURIComponent(
            invitacion.evento.direccion ||
            invitacion.evento.lugar ||
            ""
        );

    const inicio =
        convertirFechaGoogle(fechaInicio);

    const fin =
        convertirFechaGoogle(fechaFin);

    const url =
        "https://calendar.google.com/calendar/render" +
        `?action=TEMPLATE` +
        `&text=${titulo}` +
        `&dates=${inicio}/${fin}` +
        `&details=${detalles}` +
        `&location=${ubicacion}`;

    abrirEnNuevaPestana(url);

}


/*==================================================
    REGALOS
==================================================*/

function abrirRegalos(){

    const url =
        invitacion.regalos?.url;

    if(!url){

        console.warn(
            "No se configuró una mesa de regalos."
        );

        return;

    }

    abrirEnNuevaPestana(url);

}


/*==================================================
    UTILIDADES
==================================================*/

function abrirEnNuevaPestana(url){

    const ventana =
        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    if(!ventana){

        window.location.href =
            url;

    }

}


function convertirFechaGoogle(fecha){

    const fechaObjeto =
        new Date(fecha);

    if(Number.isNaN(fechaObjeto.getTime())){

        console.error(
            "Fecha de calendario inválida:",
            fecha
        );

        return "";

    }

    return fechaObjeto
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "");

}

/*==================================================
    AGREGAR AL CALENDARIO
==================================================*/

function agregarAlCalendario(){

    const calendario = invitacion.calendario;

    if(!calendario){

        console.warn(
            "No existe configuración de calendario."
        );

        return;

    }

    const inicio =
        convertirFechaGoogle(calendario.inicio);

    const fin =
        convertirFechaGoogle(calendario.fin);

    const titulo =
        encodeURIComponent(
            calendario.titulo || "Evento"
        );

    const descripcion =
        encodeURIComponent(
            calendario.descripcion || ""
        );

    const ubicacion =
        encodeURIComponent(
            [
                calendario.lugar,
                calendario.direccion
            ]
            .filter(Boolean)
            .join(", ")
        );

    const url =
        "https://calendar.google.com/calendar/render" +
        "?action=TEMPLATE" +
        `&text=${titulo}` +
        `&dates=${inicio}/${fin}` +
        `&details=${descripcion}` +
        `&location=${ubicacion}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}

/*==================================================
    CONVERTIR FECHA PARA GOOGLE CALENDAR
==================================================*/

function convertirFechaGoogle(fecha){

    const valor =
        new Date(fecha);

    if(Number.isNaN(valor.getTime())){

        console.error(
            `Fecha de calendario inválida: ${fecha}`
        );

        return "";

    }

    return valor
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}Z$/, "Z");

}
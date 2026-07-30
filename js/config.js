/*==================================================
    LUMI INVITATIONS FRAMEWORK V4
    CONFIG.JS
==================================================*/


/*==================================================
    DATOS PRINCIPALES DEL EVENTO
==================================================*/

const datosEvento = {

    fechaVisible:"14 de agosto de 2026",

    fechaISO:"2026-08-14T16:00:00",

    fechaFinISO:"2026-08-14T21:00:00",

    horaVisible:"4:00 PM",

    lugar:"Quinta la Esperanza",

    direccion:"Calle La Esperanza, Col. Unión del Recuerdo",

    aviso:"Fotografías de 4:30 a 5:00."

};


/*==================================================
    CONFIGURACIÓN DE LA INVITACIÓN
==================================================*/

const invitacion = {

    colores:{

    principal:"#8b5cf6",

    secundario:"#ff5db1",

    texto:"#444444",

    blanco:"#ffffff",

    nombre:"#ffffff",

    edad:"#ff5db1",

    bordeNombre:"#9605b3"

    },

    tipografias:{

        nombre:"Futurino",

        edad:"Futurino",

        texto:"Poppins"

    },

    nombre:{

        grosorBorde:"10px"

    },

    botonesTema:{

    fuente:"Poppins",

    texto:"#ffffff",

    descripcion:"rgba(255,255,255,.88)",

    radio:"999px",

    borde:"rgba(255,255,255,.65)",

    sombra:"0 12px 28px rgba(74,42,110,.22)",

    iconoFondo:"rgba(255,255,255,.22)",

    flecha:"rgba(255,255,255,.90)",

    iconoFondo:"rgba(255,255,255,.22)"

    },

    tarjetasTema:{

    radio:"28px",

    fondo:"rgba(255,255,255,.18)",

    borde:"rgba(255,255,255,.38)",

    sombra:"0 18px 42px rgba(67,35,95,.20)",

    desenfoque:"16px",

    espacioInterno:"24px"

    },

    animacionesTema:{

    duracionEntrada:"900ms",

    duracionRapida:"350ms",

    retrasoBotones:"120ms",

    desplazamiento:"28px",

    escalaInicial:".96",

    curva:"cubic-bezier(.22,1,.36,1)"

    },


    /*==============================================
        FESTEJADO
    ==============================================*/

    festejado:{

        nombre:"Eliette",

        edad:5,

        genero:"niña"

    },


    /*==============================================
        EVENTO
    ==============================================*/

    evento:{

        fecha:datosEvento.fechaVisible,

        fechaISO:datosEvento.fechaISO,

        hora:datosEvento.horaVisible,

        lugar:datosEvento.lugar,

        direccion:datosEvento.direccion,

        aviso:datosEvento.aviso

    },


    /*==============================================
        INFORMACIÓN VISIBLE
    ==============================================*/

    informacion:[

        {

            clave:"fecha",

            titulo:"Fecha",

            icono:"📅",

            valor:datosEvento.fechaVisible,

            visible:true

        },

        {

            clave:"hora",

            titulo:"Hora",

            icono:"🕒",

            valor:datosEvento.horaVisible,

            visible:true

        },

        {

            clave:"lugar",

            titulo:"Lugar",

            icono:"📍",

            valor:datosEvento.lugar,

            visible:true

        },

        {

            clave:"direccion",

            titulo:"Dirección",

            icono:"🏠",

            valor:datosEvento.direccion,

            visible:true

        },

        {

            clave:"aviso",

            titulo:"Aviso",

            icono:"🎉",

            valor:datosEvento.aviso,

            visible:true,

            destacada:true

        }

    ],


    /*==============================================
        COMPONENTES
    ==============================================*/

    componentes:[

        {

            nombre:"header",

            visible:true

        },

        {

            nombre:"informacion",

            visible:true

        },

        {

            nombre:"contador",

            visible:true

        },

        {

            nombre:"personaje",

            visible:true

        },

        {

            nombre:"botones",

            visible:true

        }

    ],


    /*==============================================
        CONTADOR
    ==============================================*/

    contador:{

        fecha:datosEvento.fechaISO

    },


    /*==============================================
        CONTACTO
    ==============================================*/

    contacto:{

        telefono:"528673298207",

        mensaje:
            "¡Hola! Confirmo mi asistencia al cumpleaños de Eliette.",

        email:"correo@ejemplo.com",

        asuntoCorreo:
            "Confirmación de asistencia",

        mensajeCorreo:
            "Hola, confirmo mi asistencia al evento."

    },


    /*==============================================
        MAPA
    ==============================================*/

    mapa:{

        url:"https://maps.app.goo.gl/Zr2iKGaqEuuxHR9P7"

    },


    /*==============================================
        INTRO
    ==============================================*/

    intro:{

        titulo:"¡Tienes una invitación!",

        subtitulo:
            "Haz clic para descubrir la sorpresa.",

        boton:"Abrir Invitación"

    },


    /*==============================================
        TEMA
    ==============================================*/

    tema:{

        nombre:"Gabby's Dollhouse",

        carpeta:"gabby"

    },


    /*==============================================
        PLANTILLA
    ==============================================*/

    plantilla:{

        nombre:"classic"

    },


    /*==============================================
        COLORES
    ==============================================*/

    colores:{

    principal:"#8b5cf6",

    secundario:"#ff5db1",

    texto:"#444444",

    blanco:"#ffffff",

    nombre:"#ffffff",

    edad:"#ff5db1",

    bordeNombre:"#9605b3"

    },

    tipografias:{

        nombre:"Futurino",

        edad:"Futurino",

        texto:"Poppins"

    },

    nombre:{

        grosorBorde:"7px"

    },


    /*==============================================
        BOTONES
    ==============================================*/

    botones:[

        {

            texto:"Confirmar asistencia",

            icono:"💬",

            accion:"whatsapp",

            visible:true,

            color:"rosa",

            descripcion: "Responder por whatsapp"

        },

        {

            texto:"Cómo llegar",

            icono:"📍",

            accion:"mapa",

            visible:true,

            color:"morado",

            descripcion:"Abrir en Google Maps"

        },

        {

            texto:"Agregar al calendario",

            icono:"📅",

            accion:"calendario",

            visible:true,

            color:"azul",

            descripcion:"Guardar la fecha del evento"

        }

    ],


    /*==============================================
        EFECTOS
    ==============================================*/

    efectos:{

        musica:true,

        contador:true,

        particulas:true,

        brillo:true,

        flotacion:true,

        confeti:true

    },


    /*==============================================
        AUDIO
    ==============================================*/

    audio:{

        volumen:0.7,

        reproducirAlAbrir:true

    },


    /*==============================================
        CALENDARIO
    ==============================================*/

    calendario:{

        inicio:datosEvento.fechaISO,

        fin:datosEvento.fechaFinISO,

        titulo:"Cumpleaños de Eliette",

        descripcion:
            "Te esperamos para celebrar juntos.",

        lugar:datosEvento.lugar,

        direccion:datosEvento.direccion

    },


    /*==============================================
        MESA DE REGALOS
    ==============================================*/

    regalos:{

        url:"https://ejemplo.com/mesa-de-regalos",

        visible:false

    }

    

};
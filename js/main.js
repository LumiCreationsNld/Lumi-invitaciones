/*==================================================
    LUMI INVITATIONS FRAMEWORK V3.3
    MAIN.JS
==================================================*/

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacion
);


/*==================================================
    INICIAR FRAMEWORK
==================================================*/

function iniciarAplicacion(){

    try{

        validarConfiguracion();

        iniciarUI();

        console.log(
            "Lumi Invitations Framework iniciado correctamente."
        );

    }
    catch(error){

        console.error(
            "No fue posible iniciar la invitación:",
            error
        );

        mostrarErrorDeInicio(error);

    }

}


/*==================================================
    VALIDAR CONFIGURACIÓN
==================================================*/

function validarConfiguracion(){

    if(
        typeof invitacion === "undefined" ||
        !invitacion
    ){

        throw new Error(
            "No se encontró el objeto invitacion en config.js."
        );

    }

    const camposObligatorios = [

        {
            ruta:"festejado.nombre",
            valor:invitacion.festejado?.nombre
        },

        {
            ruta:"evento.fecha",
            valor:invitacion.evento?.fecha
        },

        {
            ruta:"contador.fecha",
            valor:invitacion.contador?.fecha
        },

        {
            ruta:"tema.carpeta",
            valor:invitacion.tema?.carpeta
        }

    ];

    camposObligatorios.forEach(campo => {

        if(!campo.valor){

            throw new Error(
                `Falta configurar: ${campo.ruta}`
            );

        }

    });

}


/*==================================================
    MOSTRAR ERROR
==================================================*/

function mostrarErrorDeInicio(error){

    const cuerpo =
        document.body;

    if(!cuerpo){
        return;
    }

    cuerpo.innerHTML = "";

    const mensaje =
        document.createElement("main");

    mensaje.className =
        "startupError";

    mensaje.innerHTML = `

        <div class="startupErrorCard">

            <span class="startupErrorIcon">
                ⚠️
            </span>

            <h1>
                No se pudo cargar la invitación
            </h1>

            <p>
                ${error?.message || "Error desconocido"}
            </p>

        </div>

    `;

    cuerpo.append(mensaje);

}
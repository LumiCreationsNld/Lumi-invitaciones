/*==================================================
    LUMI INVITATIONS FRAMEWORK
    COMPONENTE: BOTONES
==================================================*/


/*==================================================
    CREAR BOTONES
==================================================*/

function crearBotones(){

    const acciones =
        document.getElementById("actions");

    if(!acciones){

        console.warn(
            'No se encontró el elemento "#actions".'
        );

        return;

    }

    acciones.innerHTML = "";


    /* CONTENEDOR INTERNO */

    const contenedorBotones =
        document.createElement("div");

    contenedorBotones.className =
        "actionButtons";


    /* CREAR CADA BOTÓN */

    invitacion.botones.forEach(
        (configuracionBoton, indice) => {

            /*
                Si el botón tiene visible:false,
                no se agrega a la invitación.
            */

            if(configuracionBoton.visible === false){

                return;

            }


            const boton =
                document.createElement("button");

            boton.type =
                "button";

            boton.className =
                "actionButton";

            /* Color del botón */

            if(configuracionBoton.color){

                boton.classList.add(
                    `actionButton--${configuracionBoton.color}`
                );

                
            }

            boton.dataset.action =
                configuracionBoton.accion;


            /* Clase con la acción (para JS y estilos específicos si algún día hacen falta) */

            boton.classList.add(
                `actionButtonAction--${configuracionBoton.accion}`
            );



            /* ACCESIBILIDAD */

            boton.setAttribute(
                "aria-label",
                configuracionBoton.texto
            );


            /* ICONO */

        const icono =
            document.createElement("span");

        icono.className =
            "actionButton__icon";

        icono.textContent =
            configuracionBoton.icono;


        /* CONTENIDO DE TEXTO */

        const contenido =
            document.createElement("span");

        contenido.className =
            "actionButtonContent";


            /* TEXTO PRINCIPAL */

            const texto =
                document.createElement("span");

            texto.className =
                "actionButtonText";

            texto.textContent =
                configuracionBoton.texto;

            contenido.append(texto);


            /* DESCRIPCIÓN OPCIONAL */

            if(configuracionBoton.descripcion){

                const descripcion =
                    document.createElement("span");

                descripcion.className =
                    "actionButtonDescription";

                descripcion.textContent =
                    configuracionBoton.descripcion;

                contenido.append(descripcion);

            }


            /* FLECHA */

            const flecha =
                document.createElement("span");

            flecha.className =
                "actionButtonArrow";

            flecha.setAttribute(
                "aria-hidden",
                "true"
            );

            flecha.textContent =
                "›";


            boton.style.setProperty(
            "--button-index",
            indice
);

            /* ARMAR BOTÓN */

            boton.append(
                icono,
                contenido,
                flecha
            );

            contenedorBotones.append(
                boton
            );

        }
    );


    /* AGREGAR CONTENEDOR AL FOOTER */

    acciones.append(
        contenedorBotones
    );

}


/*==================================================
    MOSTRAR BOTONES AL ABRIR INVITACIÓN
==================================================*/

Lumi.Events.on(
    "invitation:opened",
    () => {

        const acciones =
            document.getElementById("actions");

        if(!acciones){

            return;

        }

        setTimeout(
            () => {

                acciones.classList.add(
                    "actions--visible"
                );

            },
            550
        );

    }
);


/*==================================================
    REGISTRAR COMPONENTE
==================================================*/

Lumi.Registry.registrar(
    "botones",
    {
        elemento:"actions",
        render:crearBotones
    }
);
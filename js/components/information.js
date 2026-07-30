/*==================================================
    INFORMACIÓN DEL EVENTO
==================================================*/

function crearInformacion(){

    const contenedor =
        document.getElementById("eventInfo");

    if(!contenedor){
        return;
    }

    contenedor.innerHTML = "";

    if(
        !Array.isArray(invitacion.informacion) ||
        invitacion.informacion.length === 0
    ){

        contenedor.hidden = true;

        console.warn(
            "No hay tarjetas configuradas en invitacion.informacion."
        );

        return;

    }

    contenedor.hidden = false;

    invitacion.informacion.forEach(item => {

        if(item.visible === false){
            return;
        }

        if(!item.valor){
            return;
        }

        const card =
            document.createElement("article");

        card.className =
            `infoCard infoCard--${item.clave || "general"}`;

        if(item.destacada){

            card.classList.add(
                "infoCard--featured"
            );

        }

        const icono =
            crearIconoInformacion(item);

        const contenido =
            document.createElement("div");

        contenido.className =
            "infoContent";

        const titulo =
            document.createElement("h3");

        titulo.textContent =
            item.titulo || "";

        const valor =
            document.createElement("p");

        valor.textContent =
            item.valor;

        contenido.append(
            titulo,
            valor
        );

        if(icono){

            card.append(
                icono,
                contenido
            );

        }
        else{

            card.append(contenido);

        }

        contenedor.append(card);

    });

}

Registry.registrar(
    "informacion",
    {
        elemento:"eventInfo",
        render:crearInformacion
    }
);
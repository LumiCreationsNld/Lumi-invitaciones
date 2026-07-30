/*==================================================
    CONTADOR
==================================================*/

function crearContador(){

    const countdown =
        document.getElementById("countdown");

    countdown.innerHTML = "";

    if(!invitacion.efectos.contador){
        countdown.hidden = true;
        return;
    }

    const unidades = [

        {
            id:"days",
            etiqueta:"Días"
        },

        {
            id:"hours",
            etiqueta:"Horas"
        },

        {
            id:"minutes",
            etiqueta:"Min"
        },

        {
            id:"seconds",
            etiqueta:"Seg"
        }

    ];

    unidades.forEach(unidad => {

        const caja =
            document.createElement("div");

        caja.className =
            "timeBox";

        const numero =
            document.createElement("span");

        numero.id =
            unidad.id;

        numero.textContent =
            "00";

        const etiqueta =
            document.createElement("small");

        etiqueta.textContent =
            unidad.etiqueta;

        caja.append(numero, etiqueta);

        countdown.append(caja);

    });

}

Registry.registrar(
    "contador",
    {
        elemento:"countdown",
        render:crearContador
    }
);
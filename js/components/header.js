/*==================================================
    HEADER COMPONENT
==================================================*/

function crearHeader(){

    const header =
        document.getElementById("header");

    if(!header){

        return;

    }

    header.innerHTML = "";

    const nombre =
        document.createElement("h1");

    nombre.className =
        "guestName";

    nombre.textContent =
        invitacion.festejado.nombre;

    const edad =
        document.createElement("p");

    edad.className =
        "guestAge";

    edad.textContent =
        `${invitacion.festejado.edad} años`;

    header.append(
        nombre,
        edad
    );

}


/*==================================================
    REGISTRO DEL COMPONENTE
==================================================*/

Lumi.Registry.registrar(
    "header",
    {
        elemento:"header",
        render:crearHeader
    }
);
/*==================================================
    LUMI INVITATIONS FRAMEWORK
    COMPONENT RENDERER
==================================================*/

function renderizarComponentes(){

    const contenedorPrincipal =
        document.getElementById("content");

    if(!contenedorPrincipal){

        console.error(
            "No se encontró el contenedor #content."
        );

        return;

    }

    /*==============================================
        OBTENER PLANTILLA ACTIVA
    ==============================================*/

    const nombrePlantilla =
        invitacion.plantilla.nombre;

    const plantilla =
        TemplateManager.obtener(nombrePlantilla);

    if(!plantilla){

        console.error(
            `La plantilla "${nombrePlantilla}" no existe`
        );

        return;

    }

    const experiencia =
        plantilla.cargar();

    if(
        !experiencia ||
        !Array.isArray(experiencia.componentes)
    ){

        console.error(
            `La plantilla "${nombrePlantilla}" no contiene componentes válidos`
        );

        return;

    }

    
    /*==============================================
    APLICAR PLANTILLA
    ==============================================*/

    TemplateEngine.aplicar(
        contenedorPrincipal,
        experiencia
    );

    /*==============================================
        RENDERIZAR COMPONENTES
    ==============================================*/

    experiencia.componentes.forEach(item => {

        const componente =
            Registry.obtener(item.nombre);

        if(!componente){

            console.warn(
                `Componente '${item.nombre}' no registrado.`
            );

            return;

        }

        const elemento =
            document.getElementById(
                componente.elemento
            );

        if(!elemento){

            console.warn(
                `No se encontró el elemento #${componente.elemento}.`
            );

            return;

        }

        if(item.visible === false){

            elemento.hidden = true;

            return;

        }

        elemento.hidden = false;

        contenedorPrincipal.append(elemento);

        componente.render(item);

    });

}
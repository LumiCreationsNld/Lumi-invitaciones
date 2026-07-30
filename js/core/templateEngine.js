/*==================================================
    LUMI INVITATIONS FRAMEWORK
    TEMPLATE ENGINE
==================================================*/

const TemplateEngine = {

    aplicar(contenedor, experiencia){

        if(!contenedor){

            console.error(
                "TemplateEngine necesita un contenedor válido."
            );

            return;

        }

        if(!experiencia){

            console.error(
                "TemplateEngine necesita una experiencia válida."
            );

            return;

        }

        this.limpiarPlantillaAnterior(contenedor);

        this.aplicarLayout(
            contenedor,
            experiencia.layout
        );

        this.aplicarEstilos(
            contenedor,
            experiencia.estilos
        );

        this.aplicarAnimaciones(
            contenedor,
            experiencia.animaciones
        );

    },


    limpiarPlantillaAnterior(contenedor){

        const claseAnterior =
            contenedor.dataset.templateClass;

        if(claseAnterior){

            contenedor.classList.remove(
                claseAnterior
            );

        }

        delete contenedor.dataset.templateClass;

        delete contenedor.dataset.orientation;
        delete contenedor.dataset.width;
        delete contenedor.dataset.entryAnimation;

    },


    aplicarLayout(contenedor, layout = {}){

        if(layout.clase){

            contenedor.classList.add(
                layout.clase
            );

            contenedor.dataset.templateClass =
                layout.clase;

        }

        if(layout.orientacion){

            contenedor.dataset.orientation =
                layout.orientacion;

        }

        if(layout.ancho){

            contenedor.dataset.width =
                layout.ancho;

        }

    },


    aplicarEstilos(contenedor, estilos = {}){

        contenedor.classList.toggle(
            "lumi-has-background",
            estilos.fondo === true
        );

        contenedor.classList.toggle(
            "lumi-has-frame",
            estilos.marco === true
        );

        contenedor.classList.toggle(
            "lumi-has-shadows",
            estilos.sombras === true
        );

    },


    aplicarAnimaciones(
        contenedor,
        animaciones = {}
    ){

        if(animaciones.entrada){

            contenedor.dataset.entryAnimation =
                animaciones.entrada;

        }

    }

};

Lumi.registrar(
    "TemplateEngine",
    TemplateEngine
);
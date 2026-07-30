/*==================================================
    LUMI INVITATIONS FRAMEWORK
    CLASSIC TEMPLATE
==================================================*/

const ClassicTemplate = {

    nombre:"classic",

    cargar(){

        return {

            /*======================================
                CONFIGURACIÓN DEL LAYOUT
            ======================================*/

            layout:{

                orientacion:"vertical",

                ancho:"mobile",

                clase:"template-classic"

            },


            /*======================================
                ESTILOS DE LA PLANTILLA
            ======================================*/

            estilos:{

                fondo:true,

                marco:true,

                sombras:true

            },


            /*======================================
                ANIMACIONES
            ======================================*/

            animaciones:{

                entrada:"fade",

                header:"fade",

                informacion:"slide",

                contador:"fade",

                personaje:"float",

                botones:"zoom"

            },


            /*======================================
                COMPONENTES
            ======================================*/

            componentes:[
                ...invitacion.componentes
            ]

        };

    }

};


TemplateManager.registrar(
    "classic",
    ClassicTemplate
);
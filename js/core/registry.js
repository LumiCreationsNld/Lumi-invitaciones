/*==================================================
    LUMI INVITATIONS FRAMEWORK
    COMPONENT REGISTRY
==================================================*/

const Registry = {

    componentes:{},


    registrar(nombre, configuracion){

        if(!nombre){

            console.error(
                "No se puede registrar un componente sin nombre."
            );

            return;

        }

        if(
            !configuracion ||
            typeof configuracion.render !== "function"
        ){

            console.error(
                `El componente '${nombre}' no tiene una función render válida.`
            );

            return;

        }

        this.componentes[nombre] =
            configuracion;

    },


    obtener(nombre){

        return this.componentes[nombre];

    },


    existe(nombre){

        return Boolean(
            this.componentes[nombre]
        );

    }

};

Lumi.registrar(
    "Registry",
    Registry
);
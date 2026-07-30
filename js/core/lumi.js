/*==================================================
    LUMI INVITATIONS FRAMEWORK
    CORE NAMESPACE
==================================================*/

const Lumi = {

    version:"0.4.0",

    modulos:{},


    /*==============================================
        REGISTRAR MÓDULO
    ==============================================*/

    registrar(nombre, modulo){

        if(!nombre){

            console.error(
                "Lumi.registrar necesita un nombre."
            );

            return;

        }

        if(!modulo){

            console.error(
                `No se pudo registrar el módulo "${nombre}".`
            );

            return;

        }

        if(this.modulos[nombre]){

            console.warn(
                `El módulo "${nombre}" ya estaba registrado y será reemplazado.`
            );

        }

        this.modulos[nombre] = modulo;

        this[nombre] = modulo;

    },


    /*==============================================
        OBTENER MÓDULO
    ==============================================*/

    obtener(nombre){

        return this.modulos[nombre] || null;

    },


    /*==============================================
        COMPROBAR MÓDULO
    ==============================================*/

    existe(nombre){

        return Boolean(
            this.modulos[nombre]
        );

    },


    /*==============================================
        INFORMACIÓN DEL FRAMEWORK
    ==============================================*/

    info(){

        return {

            nombre:
                "Lumi Invitations Framework",

            version:
                this.version,

            modulos:
                Object.keys(this.modulos)

        };

    }

};
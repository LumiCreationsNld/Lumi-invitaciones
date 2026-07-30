/*==================================================
    LUMI INVITATIONS FRAMEWORK
    EVENT BUS
==================================================*/

const Events = {

    eventos:{},

    on(nombre, callback){

        if(!this.eventos[nombre]){

            this.eventos[nombre] = [];

        }

        this.eventos[nombre].push(callback);

    },


    off(nombre, callback){

        if(!this.eventos[nombre]){

            return;

        }

        this.eventos[nombre] =
            this.eventos[nombre]
                .filter(fn => fn !== callback);

    },


    emit(nombre, datos = {}){

        if(!this.eventos[nombre]){

            return;

        }

        this.eventos[nombre]
            .forEach(callback => callback(datos));

    }

};

Lumi.registrar(
    "Events",
    Events
);
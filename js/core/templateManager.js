const TemplateManager = {

    plantillas:{},

    registrar(nombre, plantilla){

        this.plantillas[nombre] = plantilla;

    },

    obtener(nombre){

        return this.plantillas[nombre];

    },

    existe(nombre){

        return Boolean(
            this.plantillas[nombre]
        );

    }

};

Lumi.registrar(
    "TemplateManager",
    TemplateManager
);
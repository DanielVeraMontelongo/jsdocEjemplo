/**
 * Clase para crear una persona
 * @example
 * let nuevaPersona = new Persona('Paco','Alonso',30,false);
 * nuevaPersona.presentacion(); //Imprime la presentación de la persona
 */
class Persona{

    /**
     * @param {string} nombre Es el nombre de la persona
     * @param {string} apellido Es el apellido de la persona
     * @param {number} edad Es la edad de la persona
     * @param {boolean} esAdmin Indica si es administrador o no
     */
    constructor(nombre,apellido,edad,esAdmin){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.esAdmin = esAdmin
    }

    /**
     * Este método creará una saludo de presentación de la persona
     * @returns {void}
     */
    presentacion(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

module.exports = Persona;
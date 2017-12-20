//CLASE: es un modelo que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad
var Propiedades = /** @class */ (function () {
    //CONSTRUCTOR: se utiliza para asignar valor a las propiedades globales
    function Propiedades() {
        this.texto = "Palabra";
        this.numero = 5;
        this.boleana = true;
        this.arreglo = [this.texto, this.numero, this.boleana];
        this.cualquiera = { "propiedad1": "valor1",
            "propiedad2": "valor2",
            "propiedad3": "valor3" };
    }
    return Propiedades;
}());
var objeto = new Propiedades();

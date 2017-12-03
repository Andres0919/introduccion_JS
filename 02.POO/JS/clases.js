//=============== CLASES ===============
//=============== CLASES PRIMITIVAS ===============
//Clase String

var string = new String("Esto es un string");
console.log(string);

//Clase Number
var number = new Number(12);
console.log(number);

//Clase Boolean
var boolean = new Boolean(false);
console.log(boolean);

//=============== CLASES COMPUESTAS ===============
//Clase Array
var array = new Array("rojo", "amarillo", "verde")
console.log(array);

//Clase Object
var object = new Object({nombre:"Pedro",
                        edad:30});
console.log(object);

//=============== CLASES CREADAS POR EL PROGRAMADOR ===============
//Creamos el Prototipo

function Persona() {
    
    //Propiedades Publicas
    this.nombre;
    this.edad;

}

var yo = new Persona();
yo.nombre = "Andres";
yo.edad = 21;
console.log("yo", yo);

//Clases con parametros
function Animales(nombre, raza) {
    
    this.nombre = nombre;
    this.raza = raza;

}
var mascota = new Animales("perro", "pitbull");
console.log("mascota", mascota);
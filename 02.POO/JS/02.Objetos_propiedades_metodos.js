//=============== OBJETOS ===============

var object = {

    nombre:"Andres",
    edad: "21",
    descripcion: function(){
        
        console.log("Su nombre es " + object.nombre + " y tiene " + object.edad + " años");

    },
    saludar: function(saludo){
        
        console.log(saludo + " " + object.nombre);

    }
}

console.log(object.nombre);
console.log(object.edad);
object.descripcion();
object.saludar("holaaa")

//=============== OBJETOS PRIMITIVOS ===============
//Objeto Date
var d = new Date();
console.log("d", d);
var y = d.getFullYear();
console.log("y", y);
//VAR: se utiliza para hacer variables globales
var nombre = "Andres"
if (nombre == "Andres") {
    //LET: se utiliza para hacer variables en bloques de codigo dentro de una instruccion ya sea funcion, condiccion o ciclo.
    let nombre = "Felipe";
    console.log("Dentro de la condiccion nombre: ", nombre);
}
console.log("Fuera de la condiccion nombre: ", nombre);
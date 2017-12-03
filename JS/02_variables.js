/*============= LAS VARIABLES =============*/
// ============= VARIABLES NUMERICAS =============
var numero = 5;
console.log("numero: ", numero);

// ============= VARIABLES TEXTO =============
var palabra = "palabras";
console.log("palabra: ", palabra);

// ============= VARIABLES TEXTO =============
var boleana = true;
console.log("boleana: ", boleana);

// ============= VARIABLES ARREGLO =============
var colores = ["rojo", "amarillo"];
console.log("colores: ", colores[0]);

// ============= VARIABLES OBJETO =============
var jugo = {
            ingrediente1:"fresa",
            ingrediente2:"mandarina",
            ingrediente3:"banano"
           };
console.log("jugo: ", jugo.ingrediente2);

// ============= VARIABLES DOM =============
var caja = document.querySelector("#caja");
console.log("caja: ", caja)
caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "orange";


var cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas)
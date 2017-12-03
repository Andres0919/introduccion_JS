// =========== FUNCIONES SIN PARAMETROS SIN RETORNO===========
// DECLARACION
function saludo() {
    
    // TAREA DE LA FUNCION
    console.log("Hola");
}

// EJECUCION
saludo();

// =========== FUNCIONES CON PARAMETROS SIN RETORNO===========
// DECLARACION
function operacion(digito1, digito2) {
    
    var resultado = digito1 + digito2;
    console.log("resultado: ", resultado)
}

// EJECUCION
operacion(5,7);

// =========== FUNCIONES SIN PARAMETROS CON RETORNO ===========
// DECLARACION
function retorno1() {
    
    var numero = 5;
    return numero;
}

// EJECUCION
console.log("retorno1:", retorno1());

// =========== FUNCIONES CON PARAMETROS CON RETORNO ===========
// DECLARACION
function retorno2(numero) {
    
    return numero;
}

// EJECUCION
console.log("retorno2:", retorno2(10));

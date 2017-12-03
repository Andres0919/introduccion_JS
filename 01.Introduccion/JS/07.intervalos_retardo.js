/*============= INTERVALOS =============*/
var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*============= INTERVALO DE TIEMPO =============*/
var intervalo = setInterval(function(params) {
    
    segundos++;
    tiempo.innerHTML = segundos; 

},1000);

/*============= RETARDO DE TIEMPO =============*/

setTimeout(function() {
    
    // alert("Se cumplio el tiempo");
    clearInterval(intervalo);

}, 5000);
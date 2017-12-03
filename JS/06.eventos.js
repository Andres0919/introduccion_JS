/*============= EVENTOS =============*/
/*============= DESDE EL DOM =============*/
var recuadro = document.querySelector("#recuadro");
var modoCambiar = true;
function cambiarColor() {
    
    if (modoCambiar) {
        
        recuadro.style.background = 'blue';
        modoCambiar = false;
    }else{

        recuadro.style.background = 'red';
        modoCambiar = true;
    }
    
}
/*============= DESDE JAVASCRIPT =============*/

var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);
var modoMover = true
function moverCaja() {
    
    if (modoMover) {
        
        recuadro.style.width = "500px";
        recuadro.style.transition = "1s width ease";
        modoMover = false
    
    }else{

        recuadro.style.width = "200px";
        recuadro.style.transition = "1s width ease";
        modoMover = true;
    }
    
}
//CASO 1: LOS 4 ATLETAS.
// De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detrás
// de B, y D ha llegado  en medio de A y C. ¿podria  usted calcular el orden de llegada?
// B -> 1
// C -> 2
// D -> 3
// A -> 4
// =============================
var atleta = {

    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function() {
        
        if (atleta.C > atleta.B && atleta.D > atleta.B && atleta.D >  atleta.C && atleta.D < atleta.A) {
            
            return true;

        }

        return false;

    },
    intervalo: setInterval(function() {

        atleta.A = Math.ceil(Math.random()*4)
        atleta.B = Math.ceil(Math.random()*4)
        atleta.C = Math.ceil(Math.random()*4)
        atleta.D = Math.ceil(Math.random()*4)
        
        if (atleta.resultado()) {
            
            clearInterval(atleta.intervalo);
            console.log("atleta A: ", atleta.A)
            console.log("atleta B: ", atleta.B)
            console.log("atleta C: ", atleta.C)
            console.log("atleta D: ", atleta.D)
        }

    },10)

}

//CASO 2: CABALLOS.
// El caballo de Mac es mas oscuro que el de Smith, pero más rápido y más viejo que el de Jack,
// que es ún más lento que el de Willy, que es más joven que el de Mac, que es mas viejo que el de Smith,
// que es mas claro que el de Willy, aunque el de Jack es mas lento y mas oscuro que el de Smith.
// ¿Cuál es el más viejo, cuál el más lento y cual el mas claro?

// Mac |Edad: viejo (2) | velocidad: rápido (2) | tono: oscuro (2)
// Smith |Edad: joven (1) | velocidad: rápido (2) | tono: claro (1)
// Jack |Edad: joven (1)) | velocidad: lento (1) | tono: oscuro (2)
// Willy |Edad: joven (1) | velocidad: rápido (2) | tono: oscuro (2)
// ===================================

var caballo = {

    Mac:{edad:0, velocidad:0, tono:0},
    Smith:{edad:0, velocidad:0, tono:0},
    Jack:{edad:0, velocidad:0, tono:0},
    Willy:{edad:0, velocidad:0, tono:0},
    resultado:function() {
        
        if (caballo.Mac.tono > caballo.Smith.tono &&
            caballo.Mac.velocidad > caballo.Jack.velocidad &&
            caballo.Mac.edad > caballo.Jack.edad &&
            caballo.Willy.velocidad > caballo.Jack.velocidad &&
            caballo.Mac.edad > caballo.Willy.edad &&
            caballo.Mac.edad > caballo.Smith.edad &&
            caballo.Willy.tono > caballo.Smith.tono &&
            caballo.Smith.velocidad > caballo.Jack.velocidad &&
            caballo.Jack.tono > caballo.Smith.tono
        ){
          
            return true;

        }

        return false;

    },
    intervalo: setInterval(function () {

        caballo.Mac.edad = Math.ceil(Math.random()*2);
        caballo.Mac.velocidad = Math.ceil(Math.random()*2);
        caballo.Mac.tono = Math.ceil(Math.random()*2);
        
        caballo.Smith.edad = Math.ceil(Math.random()*2);
        caballo.Smith.velocidad = Math.ceil(Math.random()*2);
        caballo.Smith.tono = Math.ceil(Math.random()*2);
        
        caballo.Jack.edad = Math.ceil(Math.random()*2);
        caballo.Jack.velocidad = Math.ceil(Math.random()*2);
        caballo.Jack.tono = Math.ceil(Math.random()*2);
        
        caballo.Willy.edad = Math.ceil(Math.random()*2);
        caballo.Willy.velocidad = Math.ceil(Math.random()*2);
        caballo.Willy.tono = Math.ceil(Math.random()*2);
        
        
        clearInterval(caballo.intervalo);
        console.log("Caballo de Mac", caballo.Mac);
        console.log("Caballo de Smith", caballo.Smith);
        console.log("Caballo de Jack", caballo.Jack);
        console.log("Caballo de Willy", caballo.Willy);

    },1)

}
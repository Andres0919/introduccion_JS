//CLASE: es un modelo que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad

class Propiedades{

    //PROPIEDADES: son caracteristicas que pueden tener un objeto
    public texto:string;
    public numero:number;
    public boleana:boolean;
    public arreglo:Array<any>;
    public cualquiera:any;

    //CONSTRUCTOR: se utiliza para asignar valor a las propiedades globales
    constructor(){
        this.texto = "Palabra";
        this.numero = 5;
        this.boleana = true;
        this.arreglo = [this.texto, this.numero, this.boleana];
        this.cualquiera = { "propiedad1":"valor1",
                            "propiedad2":"valor2",
                            "propiedad3":"valor3"};   
    }
}

var objeto = new Propiedades();
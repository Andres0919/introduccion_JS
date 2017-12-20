class Automovil{

    public marca:string;
    public modelo:string;

    //METODO: Es el algoritmo asociado a un objeto que indica la capacidad de lo que éste puede hacer. La unica diferencia entre metodo y funcion es que llamamos metodo a las funciones de una clase o de un objeto (EN LA POO), mientras que llamamos funciones a los algoritmos de la programacion estructurada.

    /**
     * Metodo Mostrar  
     */
    public mostrar() {
        return "Hola! soy un "+ this.marca +", modelo "+ this.modelo;
     }
}
//OBJETO: Es una entidad provista de métodos o mensajes a los cuales responde con valor concretos.

var automovil = new Automovil();
automovil.marca = "Mazda";
automovil.modelo = "2010";
console.log(automovil.mostrar())
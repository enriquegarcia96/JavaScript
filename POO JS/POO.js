//todo: POO

class Persona{

    //todo: primero la funcion constructora
    constructor(nombre, apellido, edad){
        //? aqui es donde le asigno las propiedades
        //? del objeto a los parametros
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;


        //! le agrego otra propiedad(si quiero)
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }

    //todo: creo los metodos 
    saludar (){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}



//todo: instancio un objeto de la clase persona
const diana = new Persona('diana', 'gonzales', '24');
const shell = new Persona('shell', 'gonzales', '23');

console.log('');
console.log(diana);
console.log('');
console.log(diana.saludar());
console.log('');
console.log(shell.saludar());

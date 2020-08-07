// TODO: FUNCIONES

function saludar() {
    console.log("Hola");
}


saludar();
console.log('');


//* forma actual funciones de FLECHA
const saludar2 = () => console.log("Hola Mundo");
saludar2()

console.log('saludar usuario');
console.log(' ');
const saludarUsuario = (usuario) => console.log(`Hola ${usuario}`);
saludarUsuario('kike');
saludarUsuario('diana');

// todo: ejemplo 1
console.log('');
const suma  = (num1, num2) => {
    if(num1 == 2){
        return num1 + num2;
    }
    console.log('Esto no se va a ejecutar si entra en el IF')
    return num1;
}
console.log(suma(3,9));


// TODO: ejemplo 2
console.log('');
const suma2 = (numero1, numero2) => numero1 + numero2;
let resultado = suma2(60,9);
console.log(resultado);









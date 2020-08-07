/**
 * * EJERCICIO #7
 * * ARRAYS
 */

const arrayNumero = [3,43,21,20,56];
let arrayPares = [];
let arrayImpares = [];


for (const arrayynumero of arrayNumero) {
    let numeroAleatorio = Math.round(Math.random() * 10 + 1);
    const resultado = arrayynumero * numeroAleatorio;
    
    console.log(`${arrayynumero} x ${numeroAleatorio} = ${resultado}`);
    (resultado %2 == 0 ) ? arrayPares.push(resultado) : arrayImpares.push(resultado);

}

console.log(arrayPares);
console.log(arrayImpares);
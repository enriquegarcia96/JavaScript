/**
 * condicional simple
 */

let numero2 = 0;



if (numero2 > 0 ){ 
    console.log(`${numero2} es mayor que 0`);
    console.log(`${numero2} es mayor que 0`);
}


/**
 * condicional compuesto
 */

if (numero2 > 0) {
    console.log(`${numero2} es mayor que 0`);
}else{
    console.log(`${numero2} es menor     que 0`);
}    



/**
 * condicional multiples 
 */


if (numero2) {
    console.log(`${numero2} es mayor que 0`);
} else if(numero2 < 0) {
    console.log(`${numero2} es menor que 0`);
}else{
    console.log(`${numero2} es igual a 0`);
}




// ! OPERADORES LOGICOS

let num11 = 0;
let num22 = 0;


if( num11 > 0){

    if(num22 > 0){
        console.log(`${num11} y ${num22} son mayores que 0`);
    }else if (num22 < 0){
        console.log(`${num11} es mayor que cero y num22 es menor que 0 `);
    }else{
        console.log(`${num11} es mayor que 0 y num22 es iagual a 0`)
    }
}else if (num11 < 0){
    if (num22 > 0 ) {
        console.log(`${num11} no es mayor que 0 y ${num22} es mayor que  cero`);
    }else if( num22 < 0 ){
        console.log(`${num11}  y ${num22} son menores que cero`);
    }else{
        console.log(`${num11} es menor que cero y num 2 es igual a 0`);
    }
}else{
    if (num22 > 0 ) {
        console.log(`${num11} es igual a 0 y  ${num22} es mayor que  cero`);
    }else if( num22 < 0 ){
        console.log(`${num11}  es igual a 0 y ${num22}  es menor que 0`);
    }else{
        console.log(`${num11} y ${num22} son iguales a 0  `);
    }
}
//ordenar 3 numeros de mayor a menor o menor a mayor 

let word = 'Hol';

if (word.length  > 4 ){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length < 4 ){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}


let respuesta2 = true;

if(respuesta2) console.log(`Respusta tiene el valor ,true`);
if(!respuesta2) console.log(`Respusta tiene el valor ,false  `);
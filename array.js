


let numerosArray = [1,2,3,1,4,5,1];


let palabrasArray = ['hola', 'estamos', 'en', 'Youtube'];


let booleans = [true, false, true];


console.log(numerosArray[3] + numerosArray[1]);

console.log(`la palabra "${palabrasArray[3]}" tiene ${palabrasArray[3].length} letras`);

console.log(numerosArray);





/**
 * TODO: ARRAYS
 * 
 * 
 * * array - propiedad 
 * !    .length - devuelve el numero de posiciones que contiene el array 
 */
console.log (numerosArray.length);


/**
 *  * *array - Metodos
 * ?    Array.isArray(variable a evaluar) - devuelve true si la variable es un array 
*/

let number7 = 4;

console.log(Array.isArray(number7));
console.log(Array.isArray(palabrasArray));




/**
 *  * * ELIMINAR UN ELEMENTO
 * ?    .shift() - elimina el primer elemento del array y devuelve ese elemento 
 * ?    .pop()  - eliminar el ultimo elemento de un array y devuelve ese elmento 
 */

console.log(numerosArray);
numerosArray.shift();

console.log(numerosArray);
numerosArray.pop();
console.log(numerosArray);





/** 
 * *    AÑADIR ELEMENTOS
 *  ?   .push(elemento1, elemento2,...) -   añade uno o mas elemntos al final del array 
 * ?        y devuelve la longitud.
 * 
 * ?      .unshift(elemento1, elemento2, ...) -    añade uno o mas elementos  al comienzo del
 * ?        arrray y devuelve la nueva longitub.
 *      
 */
console.log(numerosArray);
numerosArray.push(69,78,24);
console.log(numerosArray);

let nuevotamano = numerosArray.unshift(89);
console.log(numerosArray);



/**
 * *    .indexOf()  -    devuelve el primer indice del elemento que coincida con el
 * *    valor especificado,  o -1 ninguno es encontrado 
 */

console.log(numerosArray);
console.log(numerosArray.indexOf(1)); //nos dice la pocision que se encuentra



/**
 * *    .lastIndexOf()  -    devuelve el ultimo  indice del elemento que coincida con el
 * *    valor especificado,  o -1 ninguno es encontrado 
 */

console.log(numerosArray);
console.log(numerosArray.lastIndexOf(5));
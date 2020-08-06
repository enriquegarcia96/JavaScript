let numbers =  [1,2,3,4,5,1];

/**
 * * arrays - propiedades
 * *    .length -m devuelve el numero de posiciones que contiene el array
 */


console.log(numbers.length)

/***
 * * arrays metodos 
 * devuleve true si la variable es un array
 */


let number = 5;
console.log(Array.isArray(numbers));

/**
 * *.lastindexof() devuelve el ultimo indice del elemento que 
 * * coincida con el valor especificado
 */

console.log(numbers);
console.log(numbers.lastIndexOf(1));



/**
 * *  .reverse()- invierte el orden de los elementos del array
 */

console.log(numbers);
numbers.reverse();
console.log(numbers);

/**
 * * .join (separador ) - devuelve un string con el separador que indiquemos
 * 
 */

console.log(numbers);
let guardaElNumeroSeparado = numbers.join(' ');
console.log(guardaElNumeroSeparado);

/**
 * * .splice (a,b,items) - cambia el contenido de un array eliminado
 * *  elementos existentes o agregando nuevos elementos
 * *    a -  indice de inicio
 * *    b -- numero de elemtos 
 * *    elementos a añadir en el caso de que se añada
 */
let numbers2 =  [1,2,3,4,5,1];
console.log(numbers2);
//numbers2.splice(4) //elimina desde la posicon 4 hasta el final
//numbers2.splice(2,3) // elimina desde la posicion 2 el numero que  le indiquemos
numbers2.splice(2,2,10,24,23) // si -b es un valor distinto de cero
// elimina el numero de valores que indiquemos en b y añade los valores de item a partir de la posicion A
console.log(numbers2)


/**
 * * .slice(a,b) - extrae elementos de un array desde el indice hasta el 
 * * indice b. si no existe b lo hace desde a hasta el final, si no hace una
 * * copia del original
 */


let numbers3 =  [1,2,3,4,5,1];

let newNumbers = numbers3.slice();

console.log(numbers3);
console.log(newNumbers);

let numbers4 =  [1,2,3,4,5,1];
let newNumbers2 = numbers4.slice(2);

console.log(numbers4);
console.log(newNumbers2);



let numbers5 =  [1,2,3,4,5,1];
let newNumbers3 = numbers5.slice(2,4);

console.log(numbers4);
console.log(newNumbers3);




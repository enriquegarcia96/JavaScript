//Todo: spred operator (operador de expansion) ...
//todo sintaxis ...
const numbers = [-12,2,3,23,43,2,3];
console.log(...numbers);
console.log('');

//todo: enviar elementos en un array a una funcion
const addNumbers = (a,b,c) => {
    console.log(a+b+c);
}
addNumbers(1,2,3);
//Todo: para pasarle un arreglo ala funcion
let numbersToAdd = [1,2,3];
addNumbers(...numbersToAdd);
console.log('');


//todo: añadir un array a otro array 
let users = ['javier', 'david', 'rosa', 'juan', 'mercedes'];

let newUsers = ['marta', 'jaime', 'laura'];

//? agrego los usuario al array users, sin importar la cantidad que tenga
users.push(...newUsers);
console.log(users);


console.log('');

//todo copiar array

let array1 = [1,2,3,4];
let array2 = [...array1];
console.log(array2);

console.log('');

//todo: concatenar array

let array3 = [1,2,3,4,5];
let array4 = [6,7,8];
let arrayConcatenar = array3.concat(array4);
console.log(arrayConcatenar);
//* otra forma de hacerlo 
let arrayConcatenar2 = [...array3, ...array4];
console.log(arrayConcatenar2);

console.log('');

//todo: enviar un numero indefinido de argumentos a una funcion
//! (parametros REST)
let restParms = (...nombreDelArraydeParametros) => {
    console.log(nombreDelArraydeParametros);
}
//* llamo la funcion , para parametros rest y desconocemos el numero de elementos
restParms(1,2,3,4,5,6,7,8,9,19,312,213,1232,12);


console.log('');

//todo: libreria MATH
const numbers2 = [-12,2,3,23,43,2,3];
console.log(Math.max(...numbers2));
console.log(Math.min(...numbers2));

console.log('');

//todo: eliminar elementos duplicados (set) no permite elementos duplicados

console.log([... new Set(numbers2)]);


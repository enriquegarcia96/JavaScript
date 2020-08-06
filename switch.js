/**
 * TODO: estructura del switch

*/


let num24 = 4;


// TODO: SINTAXIS SIMPLE
switch(num24){
    case 1: console.log(`${num24} tiene el valor 1`);
    break;
    case 2: console.log(`${num24} tiene  el valor de 2`);
    break;
    default: console.log(`${num24} no vale ni 1 ni 2`);
}


// TODO: SINTAXIS MULTIPLE

switch(num24){
    case 1:
    case 3:
    case 5:
        
    console.log(`${num24} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num24} es par`);
}


/** *SINTAXIS MULTIPLES ENCADENADA */

/**
 * * break - rompe el bucle
 * * continue se salta las posiciones que le indiquemos y sigue con la instruccion
 */


for (let i= 10; i>= 0; i--){
    if (i == 5){
        console.log(i);
    }
    
}

let numbers = [43,23,13,24,69,80];

for (let j = 0; j < numbers.length; j++ ){
    console.log(`j vale ${j} y el valor de esa posicion en el 
    array es  ${numbers[j]}`);
}

/**
 * * BUCLE FOR OF / FOR IN
 */
console.log('bucles for of / for in');

let names = ['Paco', 'jose','Diana', 'kike'];



//muestra el array 
for (let name of names){
    if(name === 'Diana'){
        continue
    }
    console.log(name);
}





//muestra el indice
for (let index in names){
    if(names[index] === 'Diana'){
        break
    }
    console.log(index);
}
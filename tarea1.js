//ordenar 3 numeros de mayor a menor o menor a mayor 

console.log('TAREA #1');

const numeros = document.getElementById('numbers');
const resultado =document.getElementById('results');

let aa = parseInt(prompt('introduzca un numero perro'));
let bb = parseInt(prompt('introduzca un numero 2'));
let c = parseInt(prompt('introduzca un numero 3'));


// !PODEMOS ESCRIBIR EL CONTENIDO DEL TEXTO 
numeros.textContent  = `Los numero introducidos perro son ${aa}, ${bb}, ${c}`;

// ?EJERCICIO DE ORDENAMIENTO 

if (aa >= bb && aa >= c){
    if(bb > c ){
        resultado.textContent  = `el orden es: ${aa}, ${bb}, ${c}`;
    }else{
        resultado.textContent = `El orden es: ${aa}, ${c}, ${bb}`;
    }
}else if( bb >= aa && bb >= c ){
    (aa > c) ? resultado.textContent = `el  orden es: ${bb}, ${aa}, ${c}` : resultado.textContent = `el ordden es:  ${bb}, ${c}, ${aa} `;
    
}else if( c>= aa  && c>= bb){
    (aa > bb) ? resultado.textContent = `el orden es: ${c}, ${aa}, ${bb} ` : resultado.textContent = `el orden es: ${c}, ${b}, ${aa}`;
}


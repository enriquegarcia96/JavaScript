// ejercicio de factorial 

console.log('EJERCICIO #5');

let factorial = parseInt(prompt('numero para calcular factorial '));
let resultado2 =1;

if (factorial < 0) console.log('numero es menor que cero') 
else{
    
    for (let i = factorial; i > 0; i--) {
        resultado2 *= i;
    }

}

console.log(`el factorial de ${factorial} es ${resultado2}`);

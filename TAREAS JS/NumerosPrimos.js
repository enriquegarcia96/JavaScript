//ejercicio numeros primos

const numerosPrimos = document.getElementById('NumeroPrimos');

console.log('ejercicio #4')


    let numprimo = parseInt(prompt('ingrese el numero primo'));
    let divisores = 0;
    if (numprimo === 1) console.log('numero no es valido')
    else{
    for(let i = 2; i<= numprimo; i++){
        if (numprimo % i == 0) {
            console.log(`${numprimo} / ${i} = ${numprimo / i} NO es primo`);
            divisores++
            break;
        }
    }
}

if (divisores == 0 ) console.log(`${numprimo} es  primo `)
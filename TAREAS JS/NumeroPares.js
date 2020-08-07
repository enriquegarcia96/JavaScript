//numero pares

const numero = document.getElementById('NumeroPares');

const NumeroPares = parseInt(prompt('ingrese el numero a comparar si es par'));



for (let index = 1; index <= NumeroPares; index++) {
    
    (index % 2 == 0) ? console.log(` ${index} es Par`) : console.log(` ${index} es Impar`);
}


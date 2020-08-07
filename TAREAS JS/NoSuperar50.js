//jercicio #6

const sumaLimite = 50;
let contador  = 0, suma = 0;
do {
    suma += parseInt(prompt('introduzca los numero para la suma'));
    //let numeroSerie = parseInt(prompt('introduzca los numero para la suma'));
    //suma = (numeroSerie + suma)
    contador++
}while( suma <= sumaLimite );

console.log(`total de dinero acumulado ${suma} y numeros introducidos ${contador}`);

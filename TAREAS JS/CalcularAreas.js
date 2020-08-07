//calcular areas geometricas
const pi = 3.1416


const areasGeometricas = document.getElementById('CalcularAreas');
const datos = document.getElementById('datosIngresados');

alert('** PROGRAMA PARA CALCULAR AREAS **');
let seguir = parseInt(prompt('¿desea calcular las areas de las figuras? 1. para SI o 2. para NO'));


while(seguir != 2){
    let opcionElegida = parseInt(prompt('1. Calcular Trianguloss - 2. Calcular ractangulo -  3. Carcular Circulo'));
    console.log(`!${factorial} = ${i * resultado2}`);
switch (opcionElegida) {
    case 1:
        let base = parseInt(prompt('ingrese la base del triangulo'));
        let altura = parseInt(prompt('ingrese la altura'));
        parametrosRecibidos(base, altura, opcionElegida);
        datos.textContent = `datos ingresados de base ${base} y la altura ${altura}`
        seguir = 2;
        break;

    case 2:
        let base2 = parseInt(prompt('ingrese la base del Rectangulo'));
        let altura2 = parseInt(prompt('ingrese la del Rectangulo altura'));
        datos.textContent = `datos ingresados de base ${base2} y la altura ${altura2}`
        parametrosRecibidos(base2, altura2, opcionElegida);
        seguir = 2;
        break;

    case 3:
            let circulo = parseInt(prompt('ingrese el area del circulo'));
            var resultado = (Math.PI * Math.pow(circulo,2));
            areasGeometricas.textContent = `el area del Circulo es ${resultado}`
            seguir = 2;
        break;   
    default:
        areasGeometricas.textContent = `opcion invalida`
        break;
}

}


function parametrosRecibidos(base, altura, opcionElegida) {
    var resultadoDelArea = 0;

    if(opcionElegida == 1){
        resultadoDelArea = (( base * altura )/2)
        areasGeometricas.textContent = `el area del triangulo es ${resultadoDelArea}`
    }else{
        resultadoDelArea = (base * altura);
        areasGeometricas.textContent = `el area del rectangulo es ${resultadoDelArea}`
    }
    
}
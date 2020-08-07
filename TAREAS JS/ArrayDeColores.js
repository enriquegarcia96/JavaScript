const arrayDeColores  = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];

const colorIntroducido = prompt('ingrese el color').toLowerCase();


//para buscar en el array
if(arrayDeColores.indexOf != colorIntroducido){
    console.log('si se encontro');
}else{
    console.log('no se encontro')
}

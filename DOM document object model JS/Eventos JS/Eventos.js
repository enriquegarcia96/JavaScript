//todo: EVENTOS JS
const boton = document.getElementById('button');
const cajaRoja = document.getElementById('box');
const cajaMorada = document.getElementById('box2');

const input = document.getElementById('input');


//* AÑADO EL EVENTO DE ESCUCHA
boton.addEventListener('click',() => {
    console.log('CLICK');

})

//* dblClick - cuanodo pulsamos 2 veces el boton izquierdo del raton
boton.addEventListener('dblclick', () =>{
    console.log('DOBLE CLICK');
})


//* forma correcta de hacerlo para cambiar los colores
//todo mouseenter cuando entramos a la zona
cajaRoja.addEventListener('mouseenter', () =>{
    //? creo en el CSS red y black, las clases de colores
    cajaRoja.classList.replace('red', 'black');
})

//? mouseleave cuando salimos de la zona
cajaRoja.addEventListener('mouseleave', () => {
    //? 
    cajaRoja.classList.replace('black', 'red');
})


//todo:  mousedown cuando pulsamos  el boton izquierdo del raton
cajaMorada.addEventListener('mousedown', () =>{
    console.log('HAS PULSADO EN LA CAJA MORADA');
})


//todo: mouseup  - cuando soltamos el boton izquierdo del raton
cajaMorada.addEventListener('mouseup', () =>{
    console.log('has soltado el boton de la caja  morado')
})


//todo: mousemove - cuando  movemos el raton
cajaMorada.addEventListener('mousemove',() => {
    console.log('ESTAS MOVIENDO EL RATON EN LA CAJA');
})

//TODO: para ver las veces que toco una tecla KEYDOWN
input.addEventListener('keydown', () =>{
    console.log('has pulsado un tecla');
})

//todo:
input.addEventListener('keyup', () => {
    console.log('has soltado una tecla');
})



//todo:
input.addEventListener('keypress',() =>{
    console.log('estas pulsando una tecla');
})


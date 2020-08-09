//todo: objeto evento

const formulario = document.getElementById('form');
const txtBox = document.getElementById('input');
const boton = document.getElementById('button')


//todo: (keyup) cuando se pulsa una tecla
txtBox.addEventListener('keyup',(parametroEvento) =>{
    //para acceder 
    //console.log(parametroEvento.srcElement.clientTop)
    console.log(parametroEvento);
})


boton.addEventListener('click', (e) => {
    console.log(e);
})


//todo: para saber en que numero le dio click
const gallery = document.getElementById('gallery')
gallery.addEventListener('click', (e) =>{
    e.target.classList.add('red') //clase red
    //console.log(e.target.textContent)
})
/*
gallery.addEventListener('click', (e) =>{
    e.target.classList.replace('red', 'black') //clase red
    //console.log(e.target.textContent)
})*/

const link = document.getElementById('link');

link.addEventListener('click', (e) =>{
    e.preventDefault() //evita al hacer el comportamiento por defecto
    
    //* forzar que el evento suceda
    boton.click()
})

//TODO: para prevenir que el boton se envie por defecto
formulario.addEventListener('submit', (parametro) => {
    parametro.preventDefault()
    console.log('el formulario se ha enviado');
})

//todo: evitar que el evento se dispare
boton.addEventListener('click', () =>{
    txtBox.value = 'Has hecho click'

})

//* forzar que el evento suceda
//boton.click()
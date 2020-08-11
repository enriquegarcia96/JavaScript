const button = document.getElementById('button');

/**
 * obejeto window - es el elemento global de el desiende 
 * todos los objetos
 * elert()
 * promt()
 * confirm()
 */

 /*
alert('hola');
//no es buen idea utilizarlo
let name = prompt('escriba su nombre');
console.log(name)

if(confirm('acepta?')){
    console.log('usuario acepto');

}else{
    console.log('el usuario no acepto');
}*/


/**
 * objeto consolo - es el objeto que contiene la consola del }
 * navegador
 * console.log()
 * console.dir()
 * console.error()
 * console.table()
 */

console.log(button);
console.dir(button); //para desplegar la lista de informacion de lo que se esta imprimiendo
console.error('error'); //para depurar el codigo

const persona = {
    name: 'kike',
    edad: 29,
    correo: 'kike@jaja.com'
}

console.table(persona);//para imprimir la tabla
console.table([1,2,3,4]);//para imprimir la tabla

/**
 * objeto location -  es el objeto que contiene la barra de 
 * dirreciones
 * location.href
 * location.protocol
 * location.host
 * location.pathname
 * location.hash
 * location.reload()
 */

console.log('')

console.log(location.href); // devuelve la dirrecion
console.log(location.protocol);// si la pagina es http o https
console.log(location.host);//el dominio principal
console.log(location.pathname);//el resto de la localizacion, subdirrectorios 
console.log(location.hash);//pasar parametros entre paginas
//location.reload();//recargar la pagina 

//location.href = 'https://google.com' //para llevarnos a otra pagina

/**
 * OBJETO DATE
 */
const date = new Date()

console.dir(date);

/**
 * TODO: timers
 * timeout()
 * 
 * setTimeout(() => {code}, delay-in-milisegundos) - hace que 
 * se ejecute la funcion despues de dela. si lo referenciamos
 * mediante una variable
 * 
 */
//* jercicio 1
button.addEventListener('click', () => {

    //* funcion que quiero ejecutar PERO si la funcion es externa
    setTimeout(saludar, 3000); //al momento de darle click en el boton

    //? si no es externa osea, ejecutarla dentro de este Evento
    setTimeout(() => {
        console.log('Adios...')
    }, 3000) // que me imprima despues de 3 segundos

    
})
//* funcion (externa) a ejecutar 
const saludar = () => {
    console.log('Hola mundo');
}

console.log('')

//todo: para frenar un timeout con funciones externas
const timeout2 = setTimeout(() =>{ //funcion para ejecutar settime
    console.log('ADIOS----.-')
}, 3000)

// evento del botton
button.addEventListener('click', () => {
    clearTimeout(timeout2); //para PARAR  la ejecucion de timeout2

})

const saludar2 = () =>{
    console.log('Hola2');
}





/**
 * setInterval(() => {code}), delay --- hace que se ejecute 
 * la funcion cada delay milisegundos. si lo pasamos a una constante
 * podemos con clearInterval(referencia)
 */


const saludar3 = () =>{
    console.log('HOla2 ')
}



//* jercicio 3
let cont = 0;
const intervalo = setInterval(saludar3,  3000);// se ejecuta cada 3 segundos

const intervale = setInterval(() =>{
    console.log(cont);
    cont++
},1000)

//paramos la funcion setinterval
button.addEventListener('click', () =>{
    clearInterval(intervale);
})





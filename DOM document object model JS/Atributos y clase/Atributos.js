/**
 * *Atributos
 * ?  element.getAttribute ('attribute')
 * ?  element.setAttribute ('attribute', value)
 * 
 * todo:  CLASES
 * ?  element.classList.add('class', 'class'...)
 * ?  element.classList.remove('class', 'class'...)
 * ?  element.classList.toggle('class', [,force])
 * ?  element.classList.contains('class')
 * ?  element.classList.replace('oldClass', newclass)
 * 
 * !  tributos directos
 * *  id
 * * value
*/


const titulo = document.getElementById('title');
const nombre = document.getElementById('name');

console.log(titulo);
console.log(nombre);


console.log(nombre.getAttribute('type'));

//* set para modificar el valor del input y recibe dos parametros
nombre.setAttribute('type', 'input');
//nombre.setAttribute('type', 'date'); //? para cambiar el input a date
console.log(nombre);
console.log('');
console.log('');

//TODO:  clases

titulo.classList.add('main-title', 'oher-title');
console.log('');
titulo.classList.remove('main-title'); //quita main en la clase

if(titulo.classList.contains('title')) console.log( ' title tiene la clase')
else console.log('title no tiene la clase title')
console.log('');

titulo.classList.replace('main-title','title' );

console.log(titulo);
console.log('');
console.log(titulo.innerHTML);
console.log(titulo.textContent);


console.log(nombre.value);
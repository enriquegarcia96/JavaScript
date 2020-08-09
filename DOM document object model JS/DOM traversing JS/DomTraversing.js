
const parent = document.getElementById('parent');

//todo: child (nodos que desciende de un padre)
//* para ir subiendo de niveles 
console.log(parent.parentElement.parentElement.parentElement);
console.log('');

//todo: child (Nodo que desciende de un padre)
console.log(parent.childNodes);//devuelve todos elementos los nodos hijos
console.log(parent.children); //[2]
//
console.log(parent.firstChild);
console.log(parent.firstElementChild);
//
console.log(parent.lastChild);
console.log(parent.lastElementChild);
// metodo devuelve true si el nodo tiene hijos  o false sino los tiene
console.log(parent.hasChildNodes())
console.log('')

//todo: hermanos - siblings (nodo al mismo nivel)
console.log(parent.nextSibling) //devuelve un nodo tipo texto
console.log(parent.parentElement.nextElementSibling) //para saber quien es el siguiente hermano (script)
//
console.log(parent.parentElement.previousSibling); // buscar hermano hacia abajo
console.log(parent.parentElement.previousElementSibling); // buscar hermano hacia arriba
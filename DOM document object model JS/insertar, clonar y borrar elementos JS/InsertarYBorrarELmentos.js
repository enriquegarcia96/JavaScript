// primer lista
const list = document.getElementById('list');
const newElement = document.createElement('li');

//segunda lista
const lista2 = document.getElementById('list2')
const elementosLista2 = document.createElement('li');
elementosLista2.textContent = "yo soy un nuevo elemento en la segunda lista"

//tercera lista 
const lista3 = document.getElementById('list3');
const elementosLista3 = document.createElement('li');
elementosLista3.textContent =  "yo soy un nuevo elemento en la TERCERA lista"
//
const elementoHTML = document.createElement('li');

const newElement2padre = document.createElement('li');
newElement.textContent = "yo soy un nuevo elemento";
//
newElement2padre.textContent = "yo soy un nuevo elemento fuera de la lista";


//todo: inserta un elemento antes del elemento de referencia
list.insertBefore(newElement, list.children[0]);// de primer hijo

//antes de que empiece (beforebegin) posicion
list.insertAdjacentElement('beforebegin', newElement2padre)

//para que  este dentro de la lista (li) como primer hijo
list.children[0].insertAdjacentElement('beforebegin', newElement);

//* despues de que  empiece (afterbegin)
list.insertAdjacentElement('beforeend', newElement)

// despues de que acabe(afterend) hermano siguiente
list.children[1].insertAdjacentElement('afterend', newElement)


list.children[2].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

//TOdo: reemplazar un hijo con otro
//reemplazar un nodo con otro 1 el hijo nuevo 2 el hijo viejo 
list.replaceChild(newElement, list.children[1]);


//todo: posiciones con otros metodos, lista 2 
//lista2.before(elementosLista2);//fuera de la lista
//lista2.children[0].before(elementosLista2);//adentro de la lista
//lista2.prepend(elementosLista2);//colocarlo de primer hijo
lista2.append(elementosLista2) //colocarlo antes de que acabe
lista2.children[1].after(elementosLista2)  //hermano siguiente

//todo: para reemplazar los hijos
lista3.append(elementosLista3);//creo el hijo

//* que hijo quiero reemplazar
lista3.children[0].replaceWith(elementosLista3);

//* para reemplazarlo por un ID en el html de li
document.getElementById('hijo-A-Reemplazar').replaceWith(elementosLista3);




//todo: para clonar y eliminar elementos
lista3.after(lista3.cloneNode(true)); //clonar elementos

lista3.remove(); //eliminar elementos

lista3.removeChild(lista3.children[1]);//quitar un hijo
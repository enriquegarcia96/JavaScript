//* (id)acceder a un elementos a traves de si id

//const title = document.getElementById('title');
//title.textContent = 'DOM - accediendo a NODOS'

//* (selectorCSS) element('queryselector') accede al primer elemento que coincida con el selector css
//const paragraph = document.querySelector('.paragraph');

//const span = paragraph.querySelector("span");

//const span = document.getElementById('title').querySelector("span")

//console.log(span.textContent);

//*  (selectorCSS) accede a todos los elementos que coincidan con el selector 
//* CSS con el selector CSS devuelve un nodeList

const paragraphs = document.querySelectorAll('.paragraph')

//todo: no todos los navegadores lo soportan
//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

//todo:  para tratarlo como un array 
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))


paragraphs[0].style.color = 'red'
//paragraphs.map(p => p.style.color = 'green')

//todo para convertir un nodelist a un array
//paragraphsSpread.map(p => p.style.color = 'green')

paragraphsArray.map(a => a.style.color = 'blue');



//console.log(paragraphs)


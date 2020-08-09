//todo: crear el elemento
//const itemList = document.createElement('Li');
//itemList.textContent = 'dia prueba';


//todo: añadir un elemento
//daysList.appendChild(itemList);

//* dom - crear e insertar elementos

const days = ['Lunes', 'Martes', 'Miercoles', 'Juves', 'Viernes', 'Sabado', 'Domingo', 'valorExtra'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysLits');
const selectDays = document.getElementById('daysSelect');




//todo: localizo el title
title.innerHTML = '<span>DOM - crear e insertar elementos I</span>'

console.log('')

//? creo el fragmento de codigo es(un contenedor para inyectar en el documento de html  )
const fragment = document.createDocumentFragment();
const framentoDeDias = document.createDocumentFragment();


for (const day of days) {
    //*forma correcta,  creo el elemento
    const itemList = document.createElement('li');
    itemList.textContent = day;
    fragment.appendChild(itemList);//todo: añadir un elemento
    
}
//todo: añadir los fragmentos
daysList.appendChild(fragment);
console.log(fragment);


//todo: para rellenar los dias en la etiqueta option(select)
for (const dias of days) {
    //* creo el elementos
    const diasAgregados = document.createElement('option');

    // agredo el item al dia (1,2,3,0), dias agrega el id del dia (0,1,etc)
    diasAgregados.setAttribute('value', dias.toLowerCase()) 
    diasAgregados.textContent = dias;
    framentoDeDias.appendChild(diasAgregados);

}
// añado los dias en el DOM (option) etiqueta
selectDays.appendChild(framentoDeDias);
console.log(selectDays);
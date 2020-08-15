const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-taks')

pendingTasks.addEventListener('dragstart', (e) =>{

    //todo: esta forma estoy compartiendo informacion entre el 
    //todo: elemento que arrastro y zona donde voy a dejar el elemento
    e.dataTransfer.setData('text/plain', e.target.id )
    console.log(e.dataTransfer.getData('text'))//comparto la informacion
    //datatransfer; (uso para el navegador firefox)
        //setData: establece la informacion que quiero compartir
        //getData: establece la informacion que quiero compartir
})

//efecto visual 
pendingTasks.addEventListener('drag', (e) =>{
    e.target.classList.add('active')
})

//para cambiar  el efecto del color
pendingTasks.addEventListener('dragend', (e) =>{
    e.target.classList.remove('active')
})


//para soltar el elemento de finalizar la tarea (div)
//OBLIGATORIO, SI NO , NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) =>{
    e.preventDefault()
})

//al soltar el elemento en la zona tareas finalizadas(color morado)
finishedTasks.addEventListener('drop', (e) =>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))//guardo el elemento cuando lo muevo(tengo el id); la informacion en texto
    element.classList.remove('active')//active en el css
    finishedTasks.appendChild(pendingTasks.removeChild(element))//quito el hijo de tareas pendientes y lo añado a tareas finalizadas
})

//TODO: tarea a la inversa
finishedTasks.addEventListener('dragstart', (e) =>{
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData('text'))
})


finishedTasks.addEventListener('drag', (e) =>{
    e.target.classList.add('active')
})

finishedTasks.addEventListener('dragend', (e) =>{
    e.target.classList.remove('active')
})

pendingTasks.addEventListener('dragover', (e) =>{
    e.preventDefault()
})

pendingTasks.addEventListener('drop', (e) =>{
    e.preventDefault()
    const elementoSoltado = document.getElementById(e.dataTransfer.getData('text'))
    elementoSoltado.classList.remove('active')
    pendingTasks.appendChild(finishedTasks.removeChild(elementoSoltado))
})
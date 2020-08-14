/*
    API drag & drop:

    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo

    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

//al momento de arrastrar
smile.addEventListener('dragstart', () =>{
    console.log('Drag Start')
})

//drag: Se dispara mientras arrastramos
smile.addEventListener('drag', () => {
    console.log('drag')
})

//dragend: Se dispara cuando soltamos el objeto
smile.addEventListener('dragend', () => {
    console.log('Drag end')
})



//para la zona de destino
dropZone.addEventListener('dragenter', () => {
    console.log('Drag Enter')
})


//dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
dropZone.addEventListener('dragover',  (e) =>{
    e.preventDefault()
    console.log('drag over')
})


//drop: Se dispara cuando soltamos el objeto en la zona de destino
dropZone.addEventListener('drop', (e) =>{
    e.preventDefault()
    console.log('Drop')
})


//dragleave: Se dispara cuando el objeto sale de la zona de destino
dropZone.addEventListener('dragleave', (e) =>{
    e.preventDefault()
    console.log('drag leave')
})
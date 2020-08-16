const fileInput = document.getElementById('file')
const dropZone = document.getElementById('drop-zone')


dropZone.addEventListener('click', (e) => fileInput.click())//al darle click se abre la archivos para subir

//efectos del cuadro gris
dropZone.addEventListener('dragover', (e) =>{
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})
//efectos del cuadro gris al momento de salir el objeto
dropZone.addEventListener('dragleave', (e) =>{
    e.preventDefault()
    dropZone.classList.remove('drop-zone--active')
})

//al soltar la imagen se cargue en el formulario
dropZone.addEventListener('drop', (e) =>{
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    //console.log(e.dataTransfer)
    console.log(fileInput.files)
})
//para soltar la imagen 
fileInput.addEventListener('change', (e) =>{
    console.log(fileInput.files)
})
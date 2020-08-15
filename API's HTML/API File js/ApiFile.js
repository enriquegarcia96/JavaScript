/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web.
        Se pueden cargar archivos desde un input de tipo file o desde el objeto 
        DataTransfer de la API Drag&Drop.

        La interfaz más utilizada para interactuar con ella es FileReader

        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const fileInput  = document.getElementById('file')
const img = document.getElementById('img')
const images = document.getElementById('images')
const text = document.getElementById('text')


// para leer archivos de texto
// fileInput.addEventListener('change', (e) =>{
//     //console.log(e.target.files)
//     const file = e.target.files[0]
//     const fileReader = new FileReader()//tengo acceso a todas los metodos 
//     fileReader.readAsText(file)//para leer los textos
//     fileReader.addEventListener('load', (e) =>{

//         //console.dir(e.target.result)//tengo el contenido del texto
//         text.textContent = e.target.result //tengo el contenido del texto y lo muestro en la etiqueta

//     })
// })

//para subir imagen (solo una)
// fileInput.addEventListener('change', (e) =>{
//     const imagen = e.target.files[0]
//     const archivoImagen = new FileReader()
//     archivoImagen.readAsDataURL(imagen)
//     archivoImagen.addEventListener('load', (e) =>{
//         img.setAttribute('src', e.target.result)//set es para editar el src por el valor de target.result
//     })
// } )


//carga multiple de imagenes
fileInput.addEventListener('change', (e) =>{
    const files = e.target.files
    const fragment = document.createDocumentFragment()

    for (const file of files) {
        const fileReader = new FileReader()
        const img = document.createElement('img')
        
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load', (e) =>{
            img.setAttribute('src', e.target.result)
        })
        fragment.appendChild(img) 
    }    
    images.appendChild(fragment)
})
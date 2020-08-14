/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios métodos
        array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
        form​Data(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8
        Comprobación de soporte FETCH
            if (window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!')
*/

const boton  = document.getElementById('button')

boton.addEventListener('click', () => {
    if(window.fetch != undefined) console.log('FECTH OK')
    else console.log('FECTH NOT WORKS!')

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta => respuesta.ok ? Promise.resolve(respuesta) : Promise.reject(respuesta) ) //respuesta esta devolviendo una promesa
        
        .then(respuesta => respuesta.json())//paso al formato JSON
            //.then(respuesta => console.log(respuesta))//trae todos los datos que devuelve la API
            .then(respuesta => {//todo: imprimo la lista
                const lista = document.getElementById('list')
                const fragment = document.createDocumentFragment()

                for (const informacionUsuario of respuesta) {
                    const listaUsuario = document.createElement('li')
                    listaUsuario.textContent = `${informacionUsuario.id} -- ${informacionUsuario.name}`
                    fragment.appendChild(listaUsuario)
                }
                lista.appendChild(fragment)
            })
})

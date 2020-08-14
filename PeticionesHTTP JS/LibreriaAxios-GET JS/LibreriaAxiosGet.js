//TODO: la libreria AXIOS es una libreria basada en promesas
//TODO: para cliente y el servidor

const button = document.getElementById('button')

// button.addEventListener('click', () =>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then( respuesta=>respuesta.ok ? Promise.resolve(respuesta) : Promise.reject(respuesta) )
//             .then(respuesta => respuesta.json())
//                 .then(respuesta => {

//                     const list = document.getElementById('list')
//                     const fragment = document.createDocumentFragment()

//                     for (const informacionUsuario of respuesta) {
//                         const listaItem = document.createElement('LI')
//                         listaItem.textContent = `${informacionUsuario.name} - ${informacionUsuario.email}`
//                         fragment.appendChild(listaItem)
//                     }
//                     list.append(fragment)
//                 })
// })



//usando la libreria axios
button.addEventListener('click', () =>{
    //llamo la libreria, axios es una promesa
    axios({//recibe un objeto, que utiliza para la peticion
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(respuesta => { //aqui me trae el objeto
        console.log(respuesta.data)
        const list = document.getElementById('list') //? imprimo la lista
        const fragment  = document.createDocumentFragment()

        for (const informacionUsuario of respuesta.data ) {
            const itemLista = document.createElement('LI')
            itemLista.textContent = `${informacionUsuario.id} - ${informacionUsuario.name}`
            fragment.appendChild(itemLista)
        }

        list.appendChild(fragment)      
    }).catch(err => console.log(err))
})
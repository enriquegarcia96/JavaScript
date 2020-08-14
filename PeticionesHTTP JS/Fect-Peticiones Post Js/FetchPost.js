/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que 
        convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
    onsole.log(newPost)
    console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {

    const newPost = {
        title: 'un nuevo post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }
    
    console.log(newPost)
    //convierto el objeto en formato JSON, 
    //para que la API lo pueda interpretar
    console.log(JSON.stringify(newPost))

    //hago la peticion Fetch, hacer peticiones POST
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{//las cabeceras son un objeto
            "Content-type":"application/json"//informa a la API de que estamos enviando un objeto en formato JSON
        }
    })  //recibo la espuesta
        .then(respuesta => respuesta.json())//convierto la respuesta
        .then(datos=>console.log(datos))//convierto la respuesta
})
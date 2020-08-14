const button = document.getElementById('button')



//todo: metodo POST con la libreria Axios
button.addEventListener('click', () =>{
    axios({//recibe un objeto
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {//objeto que voy a enviar
            title: 'un nuevo post',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    })
    .then(respuesta => console.log(respuesta.data))
    .catch(err => console.log(err))
})
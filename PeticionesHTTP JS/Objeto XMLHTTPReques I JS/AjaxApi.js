const boton = document.getElementById('button');

//esta funcion va hacer nuestra peticion AJAX.
boton.addEventListener('click', () =>{
    let xhr;
    //para ver si es compatible con el navegador.
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();//este objeto va a guardar nuestra informacion.
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");
    

    //? resive 2 parametros,1(metodo a utilizar post o get), 2(la URl)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' );//estoy haciendo una peticion GET a esa URL


    //todo: escuchamos este evento para saber que esa informacion a llegado.
    xhr.addEventListener('load', ( datosRecibidos )  =>{//se dispara cuando la info.ha llegado al objeto.
        
        //el tipo de dato es String y utilizo JSON para covertir a un formato de objeto
        const datosDeJSON = ( JSON.parse( datosRecibidos.target.response ))//es donde esta todos los datos
        console.log( JSON.parse( datosRecibidos.target.response ))

        const lista = document.getElementById('list');//id de la etiqueta ul

        //recorreo cada uno de los usuarios
        for (const informacionAPI of datosDeJSON) {

            const listaId = document.createElement('li');
            listaId.textContent = `${informacionAPI.id} ---
            ${informacionAPI.name} --- ${informacionAPI.email}`
            lista.appendChild(listaId);
        }
    })

    xhr.send();//enviando la conexion.
})

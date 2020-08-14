//Todo: una promesa es un objeto con 2 callbacks internos


//array de objeto
const usersArray =[{id:1,name: 'kike'},{id:2,name:'Diana'},{id:3,name:'Yaja'}]
const emailsArray =[{id:1,email: 'kike@gmail.com'},{id:2,email:'diana@gmail.com'}]


const getUser = ( id ) => {
    const user = usersArray.find(userParaRecorrerArray => userParaRecorrerArray.id == id)
    
    //resolve y reject son callbacks
    return promesa = new Promise( ( resolve, reject ) =>{//es un constructor 
        if(!user) reject(`No existe el usuario con este id ${id}`)
        else resolve(user)
    })
    //return promesa
}



//funcion para recuperar el email de ese usuario
const getEmail = ( user ) => {

    const email = emailsArray.find(emailRecorrido => emailRecorrido.id == user.id) 

    return promise = new Promise( ( resolve, reject ) =>{
        if(!email) reject(`${user.name} este usuario no tiene email`)
        else resolve({
            id:email.id,
            name: email.name,
            email:email.email
        })
    })
    //return promise
}


getUser(3)
.then(usuario => getEmail(usuario))
//console.log(usuario)// .then resuelve el contenido de la promesa; 
.then(respuesta => console.log(respuesta))//repuesta del email
.catch(err => console.log(err))//maneja el error de la promesa


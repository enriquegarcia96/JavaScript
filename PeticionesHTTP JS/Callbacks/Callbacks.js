//todo: callback es un afuncion que se ejecuta a traves de otra funcion
//todo: los callbacks no son asincronos

//array de objeto
const usersArray =[{id:1,name: 'kike'},{id:2,name:'Diana'},{id:3,name:'Yaja'}]
const emailsArray =[{id:1,email: 'kike@gmail.com'},{id:2,email:'diana@gmail.com'}]


const getUser = ( id, callback ) =>{
    const user = {
        name: 'kike',
        id:id
    }
    if(id == 2 ) callback('user not exist')
    else callback(null, user)
    
}


//le mando 1 y error si es caso no funcione 
//si funciona que me devuelva un usuario
getUser(1, (err,user) => {
    if(err) return console.log(err)
    else console.log(`user name es ${user.name}`)

})

//ejemplo2

const mirarUsuario = ( id,cb ) => {
    const user = usersArray.find(userParaRecorrerArray => userParaRecorrerArray.id == id)
    if(!user) cb(`No existe el usuario con este id ${id}`)
    else cb(null, user)
}







//funcion para recuperar el email de ese usuario
const recuperarEmail = (user, cb) => {
    const email = emailsArray.find(emailRecorrido => emailRecorrido.id == user.id) 
    if(!email) cb(` ${user.name} este usuario no tiene email`)
    else cb(null, {
        id:email.id,
        name: email.name,
        email: email.email
    })
}


mirarUsuario(3, (err, user) =>{
    if (err) return console.log(err)

    //dice si el usuario tiene un email
    recuperarEmail(user, (err, respuesta) =>{
        if (err) return console.log(err)
        console.log(respuesta)
    })
    
} )
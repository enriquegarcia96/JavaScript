//todo: async construyo una funcion asincrona, async automaticamente devuelve una promesa

const getName = async () =>{
    //esta funcion devuelva una promesa
    return new Promise (( resolve, reject ) =>{
        
        setTimeout(() => {
            resolve('kike')
        }, 1500)
        
    })
}

const saludar = async() => {
    const name  = await getName()//await establezco un bloqueo hasta que esto se haya resuelto
    return `hola ${name}`

}
//llamamo ala funcion  y ejecuto su metodo then una vez que la promesa 
// se ha resuelto
saludar().then(res => console.log(res))

// console.log(saludar())
// getName().then(nombre => console.log(nombre))

console.log('ejercicio 2')




//Todo: resolviendo este ejercicio atraves de async - await

//array de objeto
const usersArray =[{id:1,name: 'kike'},{id:2,name:'Diana'},{id:3,name:'Yaja'}]
const emailsArray =[{id:1,email: 'kike@gmail.com'},{id:2,email:'diana@gmail.com'}]


const getUser = async( id ) => {
    const user = usersArray.find(userParaRecorrerArray => userParaRecorrerArray.id == id)//buscar el usuario en el array

        //(new Error), es un constructor que construye un objeto error y se le pasa el mensaje
        if(!user) throw new Error(`No existe el usuario con este id ${id}`)
        else return user
}





//funcion para recuperar el email de ese usuario
const getEmail = async ( user ) => {
    const email = emailsArray.find(emailRecorrido => emailRecorrido.id == user.id) 

        if(!email) throw new Error(`${user.name} este usuario no tiene email`)
        else return({
            id:email.id,
            name: email.name,
            email:email.email
        })
}

//ejecutar las 2 funciones 
const getInfo = async(id) =>{//asincrona porque esto tardara un tiempo
    
    try {
        const usuario = await getUser(id)//? estas funciones no se van a ejecutar hasta que una termine -
        const respuesta = await getEmail(usuario)//? y despues con esta 
        return `${usuario.name} email es ${respuesta.email}`
    } catch (error) {
        console.log(error)
    }

}

getInfo(3).then(res =>  console.log(res))
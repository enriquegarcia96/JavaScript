/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos

*/

//forma tradicional
const person = {
    name: 'Diana',
    age: 20,
    email: 'dianaTeamo@gmail.com'
}

//usando destructuring
// const name = person.name
// const age = person.age
// const email = person.email

const{name, age,email} = person

//usando destructuring
const { name: nombre, age:edad, email:correo } = person
console.log(name, age, email)



//usando destructuring
console.log(nombre,edad, correo)

console.log('')

const numbers = [1,2,3,4]

const [a,b,terceraPosicion] = numbers
console.log(terceraPosicion)
console.log('')

const printPerson = ({name: nombre}) =>{
    console.log(nombre)

}

const printPerson2 = ({name}) =>{
    console.log(nombre)

}

printPerson(person)

console.log('con AXIOS')


const getUsers = async () =>{
    //una forma mas limpia
    const {data: users}  = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}



getUsers()
const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')


/** forma 1 para validar el formulario
 * * construir un objeto que tenga las propiedades
 * * que son validas para el formulario
 */

const formularioEsValido = {
    name: false,
    email: false,
    gender: false,
    terms: false,
}

//impide que se envie
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    validateForm()
})

//change: para registrar cualquier evento cuando el valor del campo
//halla cambiado
name.addEventListener('change', (e) =>{
    //trim(), para que no haya espacios en el formulario
    if(e.target.value.trim().length > 0) formularioEsValido.name = true
})
//para los input tex
email.addEventListener('change', (e) =>{
    if (e.target.value.trim().length > 0) formularioEsValido.email = true 
})
//radios 
gender.addEventListener('change', (e) =>{
    if(e.target.checked == true) formularioEsValido.gender = true
})
//para el botton
terms.addEventListener('change', (e) =>{
    formularioEsValido.terms = e.target.checked
    e.target.checked ? button.removeAttribute('disabled') : 
    button.setAttribute('disabled', true)
})


//funcion 
const validateForm = () =>{
    //agarra todos los objetos del formulario y lo transformamos en un array
    const formValues = Object.values(formularioEsValido)
    //console.dir(Object.values(formularioEsValido))

    const valido = formValues.findIndex(value => value == false)// si encuentra el valor nos va a dar el index
    if(valido == -1 ) form.submit()//no ha encontrado el valor falso y todo esta todo a true
    else alert('formulario no esta relleno')
}
//TODO: enviar datos por el metodo POST

const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    sendData(form)
})


const sendData = (data) =>{
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('POST', 'marvel.php')
    
    const formData = new FormData(data) //objeto que puede recibir parametro datos
    xhr.send(formData)

}
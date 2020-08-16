//para saber si tienes internet y muestre un mensaje
const alert = document.getElementById('alert')

//pongo el navegador a la escucha cuando tenemos internet y cuando NO
addEventListener('online', (e) =>{
    //console.log(e)
    setAlert(1)
})


addEventListener('offline', (e) =>{
    // console.log(e)
    setAlert(0)
})

const setAlert = ( status ) =>{
    //console.log(status)
    //cambio las clases del elemento Alert para que se muestre o se 
    //oculte el mensaje (CSS)
    alert.classList.remove('alert--online')
    alert.classList.remove('alert--offline')

    status === 0 ? 
        setTimeout(() => {
            alert.textContent = "Ups, it seems you're offline"
            alert.classList.add('alert--offline')
        }, 100) :
        setTimeout(() => {
            alert.textContent = "Great! you're online again"
            alert.classList.add('alert--online')
        }, 100);
}
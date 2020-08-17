const button = document.getElementById('button')

button.addEventListener('click', () =>{
    const geolocation = navigator.geolocation //me guarda la location

    geolocation.getCurrentPosition(getPosition, error, options)

})

//objetos con optiones
const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) =>{
    console.log(position)
}

const error = ( error ) => console.log(error)


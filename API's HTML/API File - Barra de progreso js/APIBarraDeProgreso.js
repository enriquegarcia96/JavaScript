const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')


//cuando ha cambiando (change)
fileInput.addEventListener('change', (e) =>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)


    //controlar el progeso de la subida de un archivo
    //loaded y total son lo que vamos a trabajar
    fileReader.addEventListener('progress', (e) =>{
        //console.log(e.loaded)
        //console.log(e.total)
        //console.log(e.loaded * 100 / e.total)
        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
    })

    //cuando ha terminado el fichero 
    fileReader.addEventListener('loadend', () =>{
        //console.log('END')
        progress.style.width = '100%'
    })
})
const root = document.documentElement //raiz del archivo

fileInput.addEventListener('change', (e) =>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)


    //controlar el progeso de la subida de un archivo
    //loaded y total son lo que vamos a trabajar
    fileReader.addEventListener('progress', (e) =>{
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    //cuando ha terminado el fichero 
    fileReader.addEventListener('loadend', () =>{
        root.style.setProperty('--bar-width','100%')
    })

})
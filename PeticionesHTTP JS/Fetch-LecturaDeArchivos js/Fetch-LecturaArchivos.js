//todo: fetch para lectura de archivos
const buttonImg = document.getElementById('button-Img')
const buttonPdf = document.getElementById('button-Pdf')

//para ver imagenes
buttonImg.addEventListener('click', () =>{
    fetch('desierto.jpg')//hago una peticion local 
    .then(respuesta => respuesta.blob())//blob() binary log Objetc
    .then(imagen => {
        document.getElementById('img').src = URL.createObjectURL(imagen)//objeto nativo, ver imagenes atraves de fetch
    })
})

//para leer documentos
buttonPdf.addEventListener('click', () =>{
    fetch('1.pdf')
    .then(res => res.blob())
    .then(PDF =>{
        document.getElementById('pdf').href = URL.createObjectURL(PDF)
    })
})
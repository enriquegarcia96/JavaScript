const images = document.getElementById('images')

const getImages = () =>{
    axios('https://picsum.photos/v2/list?page=3&limit=5')
        .then(res =>{
            const fragment = document.createDocumentFragment()
            res.data.forEach(element => {
                const newImage = document.createElement('IMG')
                newImage.src = element.download_url
                fragment.appendChild(newImage)
            });
            images.appendChild(fragment)
            setObserver()//llamo mi funcion
        })
}


const callback = (entries) =>{
    //recorre las entradas
    entries.forEach(entry =>{
        //console.log(entry)

        //si llega a estar intersectando
        if(entry.isIntersecting){//isIntersecting: false (esta en el DOM)
            getImages()//llamo a mi funcion cuando llego a la ultima imagen
        }
    })
}

const setObserver = () =>{

    const options ={
        threshold: 0.5 //cuando la mitad de la imagen quiero que pida otras 5 imagenes
    }

    const observer = new IntersectionObserver(callback, options)
    
    //que quiero que observe
    observer.observe(images.lastElementChild)//observa la ultima imagen
}



getImages()
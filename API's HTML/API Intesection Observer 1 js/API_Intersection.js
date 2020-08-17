//seleciona todos los clase con box
const boxes= document.querySelectorAll('.box')


const callback = (entries) =>{
    //console.log(entries)
    entries.forEach(entry => {      
        if(entry.isIntersecting){//por cada entra si estas intersentado ese objeto
            console.log(entry.target.id, 'is intersecting')//lo vemos 
        }
    })
}


const options ={
    // root: //elemento padre que voy a estar vigilando 
    //rootMargin: '200px'//tiene que entrar 200px para que pueda ser intersentado
    threshold: 1
}

//le decimos que queremos que vigile
const observer = new IntersectionObserver(callback, options)// (es un objeto)
boxes.forEach(element => observer.observe(element))//pongo a la escucha a cada una de las cajas
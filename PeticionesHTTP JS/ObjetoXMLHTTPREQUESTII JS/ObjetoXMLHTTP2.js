const formulario = document.getElementById('form')
const SelectBox = document.getElementById('characters')
const tabla = document.getElementById('table')

//* llamo la funcion cuando pulse el boton de GET DATA
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    //meda el ID 
    console.log(SelectBox.children[SelectBox.selectedIndex].value)

    //llamo GETData y la informacion se traduce en un Id y se lo paso al PHP
    getData(SelectBox.children[SelectBox.selectedIndex].value)
})

//conseguir los datos para rellenar el Select
const getData = (id) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    if (id == undefined) {//estamos cargando la pagina por primera vez
        xhr.open('GET', 'marvel.php')

        xhr.addEventListener('load', (data) => {//escuchamos la respuesta
        const dataJSON = JSON.parse(data.target.response)//convierto los datos en JSON
        console.log(dataJSON)

        const fragment = document.createDocumentFragment()//relleno el select

        for(const heroes of dataJSON){//genero todo el codigo para meterlo en el select
            const option = document.createElement('OPTION');//para meterlo en el select(option)

            //value el valor de heroes.ID (ID) en la base de datos
            option.setAttribute('value', heroes.ID)//le asigno el valor a option
            option.textContent = heroes.Name//relleno la etiqueta option
            fragment.appendChild(option)//lo meto en el fragmento
        }
            SelectBox.appendChild(fragment)//meto el fragmento de codigo en la etiqueta
        })

        //al darle getData meterlo en el formulario
    }else{
        xhr.open('Get', `marvel.php?id=${id}`)// el id lo pase por parametro

        xhr.addEventListener('load', (data) =>{
            const dataJSON = JSON.parse(data.target.response)

            const fragmento = document.createDocumentFragment()

            for (const heroe of dataJSON) {

                //todo: creo el tr para la fila  y TD informacio 
                const row  = document.createElement('tr') 
                const datoName = document.createElement('td')
                const datoAligment = document.createElement('td')
                const datoHometown = document.createElement('td')
                const datoGender = document.createElement('td')
                const datoFighting_Skills = document.createElement('td')

                //todo: Relleno los datos
                datoName.textContent = heroe.Name
                datoAligment.textContent = heroe.Alignment
                datoHometown.textContent = heroe.Hometown
                datoGender.textContent = heroe.Gender
                datoFighting_Skills.textContent = heroe.Fighting_Skills
                
                //todo: agragedo cada TD ala fila ROw
                row.append(datoName)
                row.append(datoAligment)
                row.append(datoHometown)
                row.append(datoGender)
                row.append(datoFighting_Skills)

                //todo:  añado la fila
                fragmento.append(row)
            }

            if (table.children[1] ) {
                //borro el primer registro de la tabla
                tabla.removeChild(tabla.children[1])
            }
            //todo;  los agrego a la TABLA
            tabla.append(fragmento)
        })
    }
    xhr.send()
}

getData()//llamo la funcion 
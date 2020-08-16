//Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

/*
    Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos
        Libreria indexedDB
            https://dexie.org/
*/


/** //todo; metodos de indexedDB
 * * 1) objeto indexedDB metodo open()
 * * 2) comprueba si la base de datos existe metodo onupgradeneeded()
 * * 3) crea el almacen de objetos, metodo crateObjectStore()
 * * 4) escucha los eventos de exito y de error, metodos onsucces() y onerror()
 */

//para almacenar el acesso a indexedDB 
const indexedDB = window.indexedDB

const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if(indexedDB && form){
    let db //para almacenar la base de datos
    const request = indexedDB.open('tasksList', 1)//accedo a la base de datos (recibe 2 parametros)
    
    //todo; metodos asincronos que nos da la api indexedDB
    request.onsuccess  = () =>{
        db = request.result
        console.log('OPEN', db)//si sale bien
        //cuando ya exista la base de datos entonces lo LEO
        //porque hace un procesos asincrono
        readerData()
    }

    //este metodo pregunta si existe la base y es el primero en ejecutarse
    request.onupgradeneeded = () =>{
        db = request.result
        console.log('Create', db)

        const objectStore = db.createObjectStore('tasks',{
            
            //la clave la a generar automaticamente
            //autoIncrement: true //genera la clave automatica, ejemplo de leer, añadir datos  y crear la base

            //buscar atraves por  el titulo de la tarea 'taskTitle'
           keyPath: 'taskTitle'  //la ruta de la llave (el nombre el que quiero)
        })
        //const onjectStore2 = db.createObjectStore('tareas2') //para crear otro almacen
    }

    request.onerror = (error) =>{
        console.log('Error', error)
    }

    //*funcion para recibir o añadir  ala base
    const addData = ( data ) =>{

        // 1) el almacen de datos (tasks) 2) modo de la transaccion
        const transaction = db.transaction(['tasks'], 'readwrite')//tasks es el DIV
        
        //hago la transaccion realmente 
        const objectStore  = transaction.objectStore('tasks') //abro el almacen de datos, devuelve un objeto de tipo transacción
        
        //añado los datos
        const request = objectStore.add(data)

        //llamo la funcion para que muestre los datos nuevos que se ingresa
        readerData()
    }

    //* Funcion que me da la informacion sobre el elemento que voy 
    //* a actualizar ( le paso le paso la key para buscar la operacion  )
    const getData = ( key ) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.get(key)//para obtener get

        //avaluar si ya a terminado
        request.onsuccess = () =>{
            //console.log(request)
            
            //los valores del formulario al terminar de add, cambien 
            //*tasks.value => es el input 
            form.task.value = request.result.taskTitle //AÑADA al textbox -- taskstle es el identificador del objeto que cree
            form.priority.value = request.result.taskPriority // AÑADA al txtboxSelect -- taskPriority es el identificador del objeto que cree
            
            //al momento de actualizar
            // => button para acceder al botton
            form.button.dataset.action = 'update' //va hacer update (hace el cambio)
            form.button.textContent = 'Update Task'//cambia el texto del botton
        }
    }

    //* Funcion para añadir los datos al div
    const updateData = ( data ) =>{
        // 1) el almacen de datos (tasks) 2) modo de la transaccion
        const transaction = db.transaction(['tasks'], 'readwrite')//tasks es el DIV
        
        //hago la transaccion realmente 
        const objectStore  = transaction.objectStore('tasks') //abro el almacen de datos, devuelve un objeto de tipo transacción
        
        //put: si el dato existe lo actualiza y sino lo añade
        const request = objectStore.put(data)//i

        //para asegurarnos que los datos an sido actualizados
        request.onsuccess = () =>{ //esto lo haga cuando haya terminado

            //le decimos que el button esta en añadir
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add task'

            //llamo la funcion para que muestre los datos nuevos que se ingresa
            readerData()
        }

    }

    //* fucion para borrar los Datos
    const deleteData  = (key) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')//es el div tasks
        const request = objectStore.delete(key)
        
        request.onsuccess = () =>{
            //para que vuelva a refrescar la lista una vez que funcione 
            readerData()
        }
    }

    //*funcion pra leer los datos
    const readerData = () =>{
        const transaction  = db.transaction(['tasks'], 'readonly') // para leer
        
        //hago la transaccion realmene
        const objectStore = transaction.objectStore('tasks')

        //añado los datos
        const request = objectStore.openCursor() //cruzor recore cada unos de los objetos y devolviendo la informacion

        //porque cuando llega a cursor.continue() da la vuelta y se vuleve a ejecutar y borra el fragment
        const fragment = document.createDocumentFragment()
        
        //para ver si va bien
        request.onsuccess = (e) =>{
            //console.log(e.target)//target es el cursor
            const cursor = e.target.result  // para que lea todos los datos 
            
            if(cursor){
                //los añado en la pagina
                const taskTitle = document.createElement('p')  //creo dos elementos para añadirños a la pagina
                taskTitle.textContent =  cursor.value.taskTitle //lo que esta en el DOM
                fragment.appendChild(taskTitle)

                //los añado en la pagina
                const taskPriority = document.createElement('p')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                //creo los botones de actualizar y eliminar
                const tasksUpdate = document.createElement('BUTTON')
                tasksUpdate.dataset.type = 'update'//tipo de dataset le digo que sera de actualizar
                tasksUpdate.dataset.key = cursor.key //(lo saco de cursor.key) es la tarea que escribio el usuario
                tasksUpdate.textContent = 'Update'
                fragment.appendChild(tasksUpdate)

                const tasksDelete = document.createElement('BUTTON')
                tasksDelete.textContent = 'Delete'
                tasksDelete.dataset.type = 'delete'//ahroa el type es delete 
                tasksDelete.dataset.key = cursor.key//para saber cual voy a borrar del DOM
                fragment.appendChild(tasksDelete)


                //console.log(cursor.value)
                //esta funcion lo que hace es seguir leyendo mientras haya registros
                cursor.continue()//es como un while 
            }else{
                //console.dir(fragment)
                //elimine las tareas viejas para que no se cargar nuevamente
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }
        }
    }

    //para saber cuando  se a enviado
    form.addEventListener('submit', (e) =>{
        e.preventDefault()

        const data = {//objeto que voy a enviar o añadir a la base de datos
            
            //nombre de los campos en la base indexedDB(tasktitle, tasksPriority)

            taskTitle: e.target.task.value, //(task hace referencia al input) (value agarro lo que esta escibiendo el usuario)
            taskPriority: e.target.priority.value
        } 

        console.log(data)

        //si hay el data-action como add o como update
        /**
         * e. es el evento
         * .target es el formulario
         * .button (Add Task) seria el boton
         * .dataset es atributo personalizado
         * .action es el valor  de update o add
         */
        if(e.target.button.dataset.action == 'add'){
            addData(data)//añadir los datos
        }else if(e.target.button.dataset.action == 'update'){
            updateData(data)//llamo la funcion y le paso los datos
        }
        
        //vacio el formulario
        form.reset()
        
        //llamo a la funcion
        //addData(data)
        //getData('Aprender react') //para mostarlos en los inputs los datos a cambiar
    })

    //escucho el click en el DIV
    tasks.addEventListener('click', (e) =>{
        //console.dir(e.target.dataset.key)

        //asegura si le doy click en el boton update
        if(e.target.dataset.type == 'update'){
            //cambia el valor de a tarea y la prioridad cambia (en los inputs)
            getData(e.target.dataset.key)
        }else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key)
            
        }
    })

}
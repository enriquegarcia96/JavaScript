console.log('TAREA #2');

//para mostrar en el html los id de los DIV
const nombre = document.getElementById('nombre');

let nombreUsuario = prompt('ingrese su nombre');
let edadUsuario = parseInt(prompt('ingrese su edad'));


(edadUsuario <= 23) ? console.log(` Hola ${nombreUsuario} tiene la edad de ${edadUsuario} años de edad y 
                    el año que viene tendras la edad de ${edadUsuario +1} `) : console.log(` Hola ${nombreUsuario} tiene la edad de ${edadUsuario} años 
                    de edad y el año que viene tendras la edad de ${edadUsuario +1}... ya va para viejo amigo :v` );


(edadUsuario <= 23) ? nombre.textContent = `Hola ${nombreUsuario}, tienes la edad de ${edadUsuario}
años de edad y el año que viene tendras la edad de ${edadUsuario +1 }` : nombre.textContent = ` Hola ${nombreUsuario} tiene la edad de ${edadUsuario} 
                                                    años de edad y el año que viene tendras la edad de ${edadUsuario +1}... ya va para viejo amigo :v`




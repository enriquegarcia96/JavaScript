
/**
 * *PROPIEDADES
 * !lengt -> devuelve la longitud de la cadena
 */

let candena = "Hola Mundo";
console.log("tamaño")
console.log(candena.length);


/**
 * *METODOS
 * todos los metodos devuelven  una cadena 
 * la cadena original no sera modificada
 * toUpperCase() -> devuelve la cadena en masyuscula 
 */

console.log(candena.toUpperCase());     

let candenaGuardadaMayuscula = candena.toUpperCase(); //guardar el valor de la cadena en mayuscula 

console.log(candenaGuardadaMayuscula); 


/***
 * *toLowerCase() -> devuelve la cadena a minuscula
 * 
 */

 console.log(candena.toLowerCase()); //latras en minusculas



/**
 * *indexOf(string) -> devuelve  la posicion en la que se encuentra el 
 * String, si no lo encuentra le devuelve -1
 * 
 */


console.log(candena.indexOf('Hola')); //buscar la posicion y devuelve la primera concidencia


/**
 * *replace(valor a buscar,     valor nuevo) -> remplaza el fragmento de la cadena 
 * que le digamos y pone  el valor nuevo    
 */

console.log(candena.replace('Mundo', 'kike'));



/***
 * *substring(inicio[,fin]) -> Extrae los caracteres desde el inicio hasta
 * fin (el final no se incluye)
 * 
 * ? si no se incluye el fin extrae hasta el final
 * 
 */


console.log(candena.substring(3));
console.log(candena.substring(3, 7));

/**
 * *slice(inicio [,fin]) -> igual que substring  pero admite valores 
 * negativos, si podemos valores negativos empezara desde atras
 * 
 * si no se incluye el final extrae hasta el final 
 * 
 * (2,-4) -> empieza a contar en el tercer caracter  y los 4 ultimos no los considera
 */
// TODO: kj
console.log(candena.slice(-3));

console.log(candena.slice(0, -2)); //TODO: los ultimos 6 los ignora

console.log(candena.slice(2));

/**
 * *trim() -> elimina  los espacios al inicio y al final de la cadena
 */

let cadena2 = "          Hola youtube, estamos trabajando con cadenas "

//console.log(cadena2);
console.log(cadena2.trim()); //TODO: elimina principio y final de los espacios



/**
--ES6--
 * *startsWith(valor [,inicio]) -> sirve para saber si la cadena 
 * *empieza con ese valor. Devuelve true o false    
 */

console.log(candena.startsWith('H'));
console.log(candena.startsWith('h'));

console.log(candena.startsWith('M', 5));

/**
 * *endsWith(valor  [,longitud]) -> sirve  para saber si la cadena termina con ese valor. devuelve true o false
 * 
 */

console.log(candena.endsWith('o')); //termina
console.log(candena.endsWith('a',4));
//hola mundo
console.log(candena.endsWith('n',8));
console.log(candena.endsWith('Mundo')); //? para buscar palabras



/**
 * *includes(valor [,inicio]) ->     igual que indexOf pero devuelve true o false
 */

console.log(candena.includes('a')); //que busque si encuentra la letra 
console.log(candena.includes('a', 5)); //del 5 adelante
console.log(candena.includes('a', 2));




/**
 * *repeat(valor ) -> repite   el string el numero de veces  que le indiquemos
 */

let cadena3 = 'Hola';

console.log(cadena3.repeat(3));
console.log('r'.repeat(10));



/**
 * *Template String
 * 
 */


let nombre = 'Enrique';
let apellido = 'Garcia';
let edad = 24;


console.log('Hola ' + nombre + " "+ apellido + ' Tienes '+edad);

console.log(`Hola ${nombre} ${apellido}. tienes ${edad} años`);

console.log(`Hola ${nombre} ${apellido}. el año que viene tendras ${edad+1} años`);
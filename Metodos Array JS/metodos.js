let word = 'hola mundo';

//TODO: .from(iterable) - convierte en array el elemento iterable
console.log(Array.from(word));
console.log('');
console.log(word.split(' '));
console.log('');

//Todo: .sort ([callback]) - ordena los elementos de un array
//Todo: alfabeticamente(unicode ), si le pasamos un  callback los odena 
//Todo en funcion del algoritmo que le pasemos

const letras = ['b', 'e', 'z', 'a' ];
const numeros = [1,8,100,300,3]; 
console.log(letras.sort());
console.log(numeros.sort());


//? recorre el array atraves de PARES
console.log(numeros.sort((a,b) => a-b ));//* para ordenarlos le paso un callback




/**
 * *.forEach (callback (currentvalue), [index])
 */
console.log('')
const numeros2 = [12,25,47,84,98];
numeros2.forEach((variableCualquiera)=>console.log(variableCualquiera));
numeros2.forEach((variableCualquiera, index)=>
    console.log(`${variableCualquiera} esta en la posicion ${index}`))


console.log('')

/**
 * *  .some(callback) si al menos un elemento del array se cumple
 * *  .every(callback) si todos los elemtos del array cumplem
 */

const lenguajes = ['HTML', 'CSS', 'JavaScript', 'PHP'];

//? comprueba si todas las letras tiene mas de 2 letras
console.log(lenguajes.some(lenguajes => lenguajes.length > 10));
console.log(lenguajes.every(lenguajes => lenguajes.length > 2));

console.log('');


//TOdo .map(callback) transforma todos los elementos del array y devuelve un nuevo array
//todo .filter(callback) filtra todos los elementos del array que cumpla la condicion
//todo .reduce(callback) reduce todos los elementos del array a un unico valor

const arrayNuevo =[12,25,47,84,98];
const num3 =  arrayNuevo.map(parametro => parametro * 2); //al array lo multiplica por 2
console.log('');
console.log(num3);
console.log('');

const arrayNuevo2 =[12,25,47,84,98];
const num4 =arrayNuevo2.filter(parametro => parametro > 40);
console.log(num4);//? tengo un array con los numero que cumplan la condicion. >40

console.log('');
const arrayNuevo3 =[1,2,3,4,5];
console.log(arrayNuevo3);
console.log(arrayNuevo3.reduce((a,b)=>a+b));//?devuelve un unico valor


console.log('');

//? ARRAY DE OBJETOS 
const usuarios =  [
    {
        name: 'user 1',
        enLinea: true
    },
    {
        name: 'user 2',
        enLinea: true
    },
    {
        name: 'user 3',
        enLinea: false
    },
    {
        name: 'user 4',
        enLinea: false
    },
    {
        name: 'user 5',
        enLinea: true
    },
    {
        name: 'user 6',
        enLinea: false
    }
]

//*usuarios totales
const usuarioEnLinea = usuarios.reduce((contador, usuario) => {
        if (usuario.enLinea) contador++ 
            return contador
            
},0) //todo el "0" lo ponemos para que el contador inicie en cero

console.log(`hay ${usuarioEnLinea} usuarios conectados`);
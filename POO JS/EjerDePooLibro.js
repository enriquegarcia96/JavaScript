//todo: EJERCICIO DE LIBRO POO+

class Libro{

    constructor(titulo, autor, year, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
        this.genero = genero;
    }

    //TODO: metodo para ver los autores
    getAutor(){
        return this.autor;
    }

    //todo: metodo para devolver el genero del libro
    getGenero(){
        return this.genero;
    }
    //*  metodo que devuelve la informacion
    informacionDelLibro(){
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} el reconocido en el año ${this.year}`
    }
}

// TODO: aqui guardo los libros que introduce el usuario
const librosGuardadosArray = [];

//? aqui son los generos del libro
const generosDeLibro = ['aventura', 'terror', 'fantasia'];

let contador =0;
let decremento = 3;

    do {
        let guardarTitulo = prompt(`ingrese ${decremento} libros con su titulo de libro`).toLowerCase();
        let guardarAutor = prompt(`ingrese  ${decremento} autor del libro`);
        let guardarYearLibro = prompt(`ingrese ${decremento} el año del libro`) ;
        let guardarGeneroLibro = prompt(`ingrese ${decremento} el genero del libro`).toLowerCase();

        if ((guardarTitulo != "") && (guardarAutor != "") && (guardarYearLibro.length == 4 && parseInt(guardarYearLibro) <= 9999 ) && (guardarGeneroLibro == 'aventura' || guardarGeneroLibro == 'terror' || guardarGeneroLibro == 'fantasia' )){
            
            //tODO: INTRODUZCO LOS LIBROS EN EL ARRAY
            librosGuardadosArray.push(new Libro(guardarAutor, guardarAutor, guardarYearLibro, guardarGeneroLibro)); //? new para guardar los objetos 
            
            contador++;
            decremento--;
        }
    } while (contador < 3);
    



//TODO: funcion que muestra los libros 
const todosLosLibros = () => {
    console.log(librosGuardadosArray);
}

//TODO: funcion que muestra los autores alfabeticamente 
const autoresOrdenados = () =>{
    //* guarda los autores para ordenarlos 
    let autores = [];
    for (const libroArray of librosGuardadosArray) {
        autores.push(libroArray.getAutor());
    }
    console.log(autores.sort());
    
}

//Todo: funcion que muestra los generos
const muestraGeneros = ()  => {

    const genero = prompt(' introduza un genero a buscar');

    for (const libroArray of librosGuardadosArray) {
        if (libroArray.getGenero() == genero){
            console.log(libroArray.informacionDelLibro());
        }
        
    }

}


//* llamo la funcion que muestra todos los libros
todosLosLibros();

console.log('')
console.log('')
console.log('')

//! llamo mi funciones
autoresOrdenados();
muestraGeneros();

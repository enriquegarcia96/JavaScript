// ! OBJETOS JAVASCRIPT


const persona = {
    nombre: 'Kike',
    edad: 29,
    hijos: ['jose','Derick', 'Pepe', 'Rosa', 'Tomas' ]
}
console.log(persona.nombre);


// TODO: le mando la variable nombre como string
console.log(persona['nombre']);
console.log('');
for(const key in persona){
    console.log(key);
}

// TODO: PARA IMPRIMIR LOS VALORES DE PERSONA
console.log(persona['nombre']);
console.log('');
for(const key in persona){
    console.log(persona[key]);
}

// TODO: PARA IMPRIMIR LOS 5 HIJOS
console.log('');
for(const hijo of persona.hijos){
    console.log(hijo);
}

// ? PARA IMPRIMIR TODO EL OBJETO  COMO UNA FRASE
console.log('');
console.log(`Hola ${persona.nombre}. tienes ${persona.edad} años 
y tus hijos se llaman ${persona.hijos.join(' , ')}`);

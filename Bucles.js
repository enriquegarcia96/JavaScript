let pass = '';

while(pass != 1234){
    pass = prompt('introduzca su contraseña')
}

console.log('fin del bucle')

do{
    pass = prompt('introduzca su contraseña2')
}while(pass != 1234)
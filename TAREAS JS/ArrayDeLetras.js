//array de letras

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
'K', 'E', 'T'];

const DNI = prompt('introsuzca el numero de DNI');

if (DNI.length == 8 && parseInt(DNI) > 0 ) {
    console.log(`Tu DNI completo es ${DNI} - ${ letras[DNI%23]}`);

}
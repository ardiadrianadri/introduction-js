// Try to guess the output of this code

let aString = '';
let aNumber = 0;

switch(aNumber) {
    case 0:
        aString += 'Hola';
    break;
    case 1:
        aString += 'Adios';
    break;
    case 2:
        aString += 'buenos';
    break;
    case 3:
        aString += 'buenas';
    break;
    case 4: 
        aString += 'dias';
    break;
    case 5:
        aString += 'noches';
    break;
}

switch(aNumber+=2) {
    case 0:
        aString += 'Hola';
    break;
    case 1:
        aString += 'Adios';
    break;
    case 2:
        aString += 'buenos';
    break;
    case 3:
        aString += 'buenas';
    break;
    case 4: 
        aString += 'dias';
    break;
    case 5:
        aString += 'noches';
    break;
}

switch(aNumber+=2) {
    case 0:
        aString += 'Hola';
    break;
    case 1:
        aString += 'Adios';
    break;
    case 2:
        aString += 'buenos';
    break;
    case 3:
        aString += 'buenas';
    break;
    case 4: 
        aString += 'dias';
    break;
    case 5:
        aString += 'noches';
    break;
}

console.log(aString);
// Try to guess the output of this code

let aString = ' ';
let aNumber = 0;

switch(aNumber) {
    case 0:
        aString += 'Hola ';
    break;
    case 1:
        aString += 'Adios ';
    break;
    case 2:
        aString += 'buenos ';
    case 3:
        aString += 'buenas ';
    case 4: 
        aString += 'dias ';
    case 5:
        aString += 'noches ';
    default: 
        aString += '.Final';
}

switch(aNumber+=2) {
    case 0:
        aString += 'Hola ';
    break;
    case 1:
        aString += 'Adios ';
    break;
    case 2:
        aString += 'buenos ';
    case 3:
        aString += 'buenas ';
    case 4: 
        aString += 'dias ';
    case 5:
        aString += 'noches ';
    default: 
        aString += '.Final';
}

switch(aNumber+=2) {
    case 0:
        aString += 'Hola ';
    break;
    case 1:
        aString += 'Adios ';
    break;
    case 2:
        aString += 'buenos ';
    case 3:
        aString += 'buenas ';
    case 4: 
        aString += 'dias ';
    case 5:
        aString += 'noches ';
    default: 
        aString += '.Final';
}


switch(aNumber+=2) {
    case 0:
        aString += 'Hola ';
    break;
    case 1:
        aString += 'Adios ';
    break;
    case 2:
        aString += 'buenos ';
    case 3:
        aString += 'buenas ';
    case 4: 
        aString += 'dias ';
    case 5:
        aString += 'noches ';
    default: 
        aString += '.Final';
}

console.log(aString);
// Try to guess the output of this code

let aString='';
let aNumber = 0;

if ((aNumber++ % 2) === 0) {
    aString+='Hola ';
} else {
    aString+='Adios ';
}

if ((aNumber++ % 2) === 0) {
    aString+='buenas ';
} else {
    aString+='buenos ';
}

if ((aNumber++ % 2) === 0) {
    aString+='dias';
} else {
    aString+='noches';
}

console.log(aString);
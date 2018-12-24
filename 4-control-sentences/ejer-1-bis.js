// Try to guess the output of this code

let aString='';
let aNumber = 0;

aString+=((++aNumber % 2) === 0) ? 'Hola ': 'Adios ';
aString+=((++aNumber % 2) === 0) ? 'buenas ': 'buenos ';
aString+=((++aNumber & 2) === 0) ? 'dias': 'noches';

console.log(aString);
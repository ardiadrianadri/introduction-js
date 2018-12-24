// This code is trying to get the same number of 'a's at the left and at the right of the pipe but it is not working... Could you fix it?

let aString = 'aaaaaa|';

for (let i = 0; i< aString.length; i++) {
    aString += 'a';
}

console.log(aString);
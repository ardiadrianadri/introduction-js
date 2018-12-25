// This code is trying to get an array with the first 20 prime numbers. Could you code the function isPrime to know
// if a number is prime or not

function isPrime (value) {
    // Put your code here...
}

let primeNumbers = [];
let index = 0;

do {
    if (isPrime(index)) {
        primeNumbers.push(index);
    }

    index++;
} while (primeNumbers.length < 20);

console.log(primeNumbers);
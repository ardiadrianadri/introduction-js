this.x = 4;
this.y = 2;

let calculadora1 = {
    x: 5,
    y: 7,
    suma: function () {
        return this.x + this.y
    }
}

let calculadora2 = {
    x: 5,
    y: 7,
    suma: () => this.x + this.y
}

console.log(calculadora1.suma());
console.log(calculadora2.suma());

let operacion1 = calculadora1.suma;
let operacion2 = calculadora1.suma.bind(this);

console.log(operacion1());
console.log(operacion1.call(this));
console.log(operacion1.call(calculadora1));

console.log(operacion2());
console.log(operacion2.call(operacion1));
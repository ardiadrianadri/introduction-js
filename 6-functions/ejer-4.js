// Can you guess what is the output of these code lines?

let value = 'Hello world';

function bar(value) {
    value = 'Goodbye world';
}

bar(value);
console.log(value);

let obj = { value: value };

function foo(obj) {
    obj.value = 'Goodbye world';
}

foo(obj);
console.log(obj.value);

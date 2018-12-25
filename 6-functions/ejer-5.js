// Can you guess the output of these lines of code?

let value = 'Goodbye world';

function foo() {
    function bar() {
        console.log(value);
    }
    let value = 'Hello world';
    
    return bar;
}

let cb = foo();

cb();



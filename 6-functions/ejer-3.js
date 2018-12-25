// Can you guess what is the output of these code lines?

let value = 'Goodbye world';

function bar() {
    console.log(value);
}

function foo() {
    let value = 'Hello world';
    console.log(value);
}

function faa () {
    let value = 'hello world';

    if (true) {
        let value = 'hello you';
        console.log(value);
    }
}

bar();
foo();
faa();
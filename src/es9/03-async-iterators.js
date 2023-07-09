async function* anotherGenerator () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');
/*
Hello
1
2
3

Si eliminamos el async y await daría el siguiente resultado

function* anotherGenerator () {
    yield 1;
    yield 2;
    yield 3;
}

const other = anotherGenerator();
console.log(other.next().value);
console.log(other.next().value);
console.log(other.next().value);
console.log('Hello');

1
2
3
Hello
*/

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Orlando', 'Oscar', 'Odalys']);
console.log('After');
/*
After
Orlando
Oscar
Odalys
*/
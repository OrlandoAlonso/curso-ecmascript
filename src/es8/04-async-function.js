// Async Function
const fnAsycn = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Asycn!!'), 2000)
            : reject(new Error('Error!!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsycn();
    console.log(something);
    console.log('Hello!!');
}

console.log('Before');
anotherFn();
console.log('After');

// “async-await” es una manera de trabajar de una forma mas cómoda con promesas, la palabra reservada “async” quiere decir que una función siempre devolverá una promesa. Ahora la palabra reservada “await”, solamente existe dentro de una función “async”, que hace que JavaScript espere hasta que la función promesa responda para continuar con el código dentro de ésta función, pero sin pausar la ejecución del siguiente código.
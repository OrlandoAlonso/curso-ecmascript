/* Promises Any
Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.
*/

const promise1 = Promise.reject("Ups promesa 1 falló")
const promise2 = Promise.reject("Ups promesa 2 falló")
const promise3 = Promise.resolve("Promesa 3")

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error)); // Promesa 3

/* Si const promise3 = Promise.reject("Promesa 3"), mostrará en consola lo siguiente:
[AggregateError: All promises were rejected] {
    [errors]: [ 'Ups promesa 1 falló', 'Ups promesa 2 falló', 'Promesa 3' ]
}
*/
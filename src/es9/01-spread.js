const user = { username: 'navarrete11', age: 21, coutry: 'NI' };
const { username, ...values } = user; // ES9
console.log(username); // navarrete11
console.log(values); // { age: 21, coutry: 'NI' }

// Con esto podemos tener la opción de verificar cual es el objeto original
const objetoOriginal = { a: 1, b: 2 };
const objetoReferencia = objetoOriginal;
const objetoCopia = { ...objetoOriginal }; // El Spread lo que hace es una copia del objeto original.

console.log(objetoReferencia === objetoOriginal); // true
console.log(objetoOriginal === objetoCopia); // false
// String padding
const string = 'Hello';
console.log(string.padStart(10, 'hi')); // hihihHello
// PadStart rellena al inicio del string las espacios en blanco con la palabra 'hi' al hello tener 5 caracteres solo quedan 5 espacios es por eso que al inicio se agrega hihih.
console.log(string.padEnd(10, 'hi')); // Hellohihih
// PadEnd rellena al final del string las espacios en blanco con la palabra 'hi' al hello tener 5 caracteres solo quedan 5 espacios es por eso que al final se agrega hihih.
let hola = "Hola";
let nombre = "Orlando";

// Antes de ES6
let epicPhrase = "¡" + hola + ", " + nombre + "!";
console.log(epicPhrase); // Esta forma se usaba antes de ES6 por lo que a la vista no es muy legible.

//Con ES6 (Template literals)
let epicPhrase2 = `¡${hola}, ${nombre}!`
console.log(epicPhrase2); // Con ES6 se nos presentan los Template literals para mejorar la legibilidad y sintaxis del código.

// Multi-line strings
let lorem = "Esto es un string.\n" + "Esto es otra linea.";
let lorem2 = `Esta es una frase epica
aqui la continuacion
`; // Los Template literals nos permiten generar texto multi lineas sin tener que agregar el '\n' haciendo mas fácil de leer el código.

console.log(`Antes de ES6: ${lorem}`);
console.log(`Con ES6: ${lorem2}`);
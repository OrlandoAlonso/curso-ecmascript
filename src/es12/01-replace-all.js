const string = 'Javascript es un maravilloso lenguaje de programación';
const replaceString = string.replace('Javascript', 'Typescript');
console.log(string); // Javascript es un maravilloso lenguaje de programación
console.log(replaceString); // Typescript es un maravilloso lenguaje de programación

/* Este metodo existia antes de ES12, sin embargo este método únicamente cambiaba la primera coincidencia que encontrara en el string. */
const texto = 'Javascript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor.';
const replaceTexto = texto.replace('Javascript', 'Typescript');
console.log(texto); /* Javascript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor. */
console.log(replaceTexto); /* Typescript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor. */

/* Con ES12 vino al rescate replaceAll(), este método cambia todas las coincidencias que encuentre en el string. */
const replaceAllTexto = texto.replaceAll('Javascript', 'Typescript');
console.log(replaceAllTexto); /* Typescript es el mejor lenguaje. Typescript puede vivir en el navegador y en el servidor. */
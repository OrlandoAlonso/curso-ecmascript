console.log(window); // window is not defined => del lado del navegador
/* Si escribimos window en la consola del navegador esto nos muestra un numero de metodos y atributos, pero al tratar de trabajar con window en el web worker nos da un error, eso es lo que viene a resolver global this con ES11 */
console.log(global); // Seria de metodos o atributos disponibles => Node
console.log(self); // web worker
console.log(globalThis);
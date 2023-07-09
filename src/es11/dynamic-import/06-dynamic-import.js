/*
dynamic import es una nueva característica de JavaScript que se introdujo en ECMAScript 2020. Esta característica permite cargar módulos de forma dinámica en tiempo de ejecución, en lugar de importarlos en tiempo de compilación.

El uso de dynamic import se realiza mediante la función import(), que devuelve una promesa que se resuelve con el módulo importado. Esto permite cargar módulos solo cuando se necesitan, lo que puede mejorar el rendimiento y la usabilidad de la aplicación.

Aquí hay un ejemplo de cómo se puede usar dynamic import en JavaScript:
*/
const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

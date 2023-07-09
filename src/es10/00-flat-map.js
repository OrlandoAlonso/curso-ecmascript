// Flat
const array1 = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]]
console.log(array1.flat(3));
/*
[
  1, 1, 2, 3, 4,
  1, 3, 5, 6, 1,
  2, 4
]

El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos. */

// Flat Map
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));
/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]

Flat Map permite aplanar los elementos de un array en un nivel, pasando un función que mapeara cada elemento del nuevo array, este método no se podría utilizar para array que tengan más de un nivel de profundidad. Sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado.

Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.
*/

const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(numbers.flat(Infinity).map(num => num * 2)); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
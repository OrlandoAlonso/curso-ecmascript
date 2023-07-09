const anotherNumber = 1;
const validate = anotherNumber ?? 'Este valor es nulo';
console.log(validate); // 1

// Con la variable en nulo
const anotherNumberNull = null;
const validateNull = anotherNumberNull ?? 'Este valor es nulo';
console.log(validateNull); // Este valor es nulo
/*
El operador Nullish verifica si el valor es nulo.

Diferencia entre el operador OR y el Nullish coalescing
🔨 El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.
.
Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.
*/
const id = 0;

const orId = id || "Sin id";
const nullishId = id ?? "Sin id";

console.log( orId ); //  'Sin id'
console.log( nullishId );  // 0
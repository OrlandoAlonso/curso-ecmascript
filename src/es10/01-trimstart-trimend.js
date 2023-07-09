// Trim start y Trim End
const hello = '         Hello word!     ';
console.log(hello.trimStart()); // 'Hello word!     '
console.log(hello.trimEnd()); // '         Hello word!'
console.log(hello.trimStart().trimEnd()); // 'Hello word!'
/* Trim Start elimina todos los espacios vacios antes del string, al contrario de end que elimina todos los espacios vacios despues del string. Es por eso que al unir los 2 el string ocupa solmente lo necesario sin espacios vacios al inicio o al final, pero escribir .trimStart().trimEnd() es algo largo y menos legible por lo que se implementó el .trim() que elima los espacios vacios antes y despues del string. */
console.log(hello.trim()); // 'Hello word!'
/* Numeric Separators
Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc. */

// 🡇 Baja legibilidad
const number = 100000000000;
console.log(number); // 100000000000

// ✅ Alta legibilidad
const value = 100_000_000_000;
console.log(value); // 100000000000
// De esta manera puedes identificar el número rápidamente.
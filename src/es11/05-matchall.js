const regex = /\b(Apple)+\b/g;
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.table(match);
}
/*
┌─────────┬──────────────────────────────────────────────────────┐
│ (index) │                        Values                        │
├─────────┼──────────────────────────────────────────────────────┤
│    0    │                       'Apple'                        │
│    1    │                       'Apple'                        │
│  index  │                          0                           │
│  input  │ 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.' │
│ groups  │                      undefined                       │
└─────────┴──────────────────────────────────────────────────────┘
┌─────────┬──────────────────────────────────────────────────────┐
│ (index) │                        Values                        │
├─────────┼──────────────────────────────────────────────────────┤
│    0    │                       'Apple'                        │
│    1    │                       'Apple'                        │
│  index  │                          21                          │
│  input  │ 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.' │
│ groups  │                      undefined                       │
└─────────┴──────────────────────────────────────────────────────┘

El método matchAll() retorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura.

Antes de la adición de matchAll a JavaScript, fue posible hacer llamados a regexp.exec (y usar expresiones regulares con la bandera /g) en un ciclo para obtener las ocurrencias: */

const regexp = RegExp('foo[a-z]*','g');
const cadena = 'mesa football, foosball';
let ocurrencia;

while ((ocurrencia = regexp.exec(cadena)) !== null) {
  console.log(`Encontrado ${ocurrencia[0]} inicio=${ocurrencia.index} final=${regexp.lastIndex}.`);
  // salida esperada: "Encontrado football inicio=5 final=13."
  // salida esperada: "Encontrado foosball inicio=15 final=23."
}

/* Con matchAll disponible, puedes evitar el ciclo while y exec con /g. Por el contrario, usando matchAll, obtienes un iterador con el cual puedes usar con constructores más convenientes for...of, array spread, o Array.from(): */

const regexp1 = RegExp('foo[a-z]*','g');
const cadena1 = 'mesa football, foosball';
const ocurrencias = cadena1.matchAll(regexp1);

for (const ocurrencia of ocurrencias) {
  console.log(`Encontrado ${ocurrencia[0]} inicio=${ocurrencia.index} final=${ocurrencia.index + ocurrencia[0].length}.`);
  // Encontrado football inicio=5 final=13.
  // Encontrado foosball inicio=15 final=23.
}

// el iterador ocurrencias es agotado después de la iteración for..of
// Llama matchAll de nuevo para crear un nuevo iterador */

console.log(Array.from(cadena1.matchAll(regexp1), m => m[0]));
// Array [ "football", "foosball" ]
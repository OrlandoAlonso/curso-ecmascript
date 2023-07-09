# CURSO DE ECMASCRIPT: HISTORIA Y VERSIONES DE JAVASCRIPT
### ¿Qué se implementó en ES6 (ECMAscript 6)?
1. [Let y Const](#let-y-const)
2. [Arrow Functions](#arrow-functions)
3. [Strings](#strings)
4. [Parametros por Defecto](#parametros-por-defecto)
5. [Desestructuración de Arrays y Objects](#desestructuración-de-arrays-y-objects)
6. [Spread Operator](#spread-operator)
7. [Objetos Literales](#objetos-literales)
8. [Promesas](#promesas)
11. [Clases](#clases)
12. [Modulos](#modulos)
13. [Generadores](#generadores)
14. [Set y Add](#set-y-add)

### ¿Qué se implementó en ES7 (ECMAscript 7)?
1. [Exponenciales y Array Includes](#exponenciales-y-array-includes)

### ¿Qué se implementó en ES8 (ECMAscript 8)?
1. [Objects Entries y Values](#objects-entries-y-values)
2. [String Padding](#string-padding)
3. [Trailing commas](#trailing-commas)
4. [Async Function](#async-function)

# ECMAscript 6
## Let y Const
```javascript
var lastName = "Navarrete";
lastName = "Portillo";

console.log(lastName);

let fruit = "Manzana";
fruit = "Kiwi";
console.log(fruit);

const animal = "Perro";
animal = "Gato";
console.log(animal); // ERROR: Al ser una constante su valor no puede ser reasignado

const fruits = () => {
    if (true) {
        var fruit1 = "Manzana";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
    }

    console.log(fruit1); /* Var tiene la particularidad de ser Global Scope, por ende, esta puede ser
    llamada fuera del if, pero esta puede generar Hoisting, let y  const no. */
    console.log(fruit2); // ERROR: Let se declara dentro del bloque, es decir, block scope
    console.log(fruit3); // ERROR: Const se declara dentro del bloque, es decir, block scope
}

fruits();
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Arrow Functions
```javascript
// Normal Function
function square(num) {
    return num * num;
} // Esta es la forma normal de declarar una función.

//Arrow Function
const square = (num) => {
    return num * num;
} /* Esta sirve para las expresiones de funciones entre otras, pero como se puede observar es más legible
que el function. */

// Return implícito
const square = num => num * num; /* Esta forma sirve solamente si la función contará con una sola línea de
código por lo que si la función llevará mas de una línea es recomendable usar una de las 2 formas
anteriores. */
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Strings
```javascript
let hola = "Hola";
let nombre = "Orlando";

// Antes de ES6
let epicPhrase = "¡" + hola + ", " + nombre + "!";
console.log(epicPhrase); // Esta forma se usaba antes de ES6 por lo que a la vista no es muy legible.

//Con ES6 (Template literals)
let epicPhrase2 = `¡${hola}, ${nombre}!`
console.log(epicPhrase2); /* Con ES6 se nos presentan los Template literals para mejorar la legibilidad
y sintaxis del código. */

// Multi-line strings
let lorem = "Esto es un string.\n" + "Esto es otra linea.";
let lorem2 = `Esta es una frase epica
aqui la continuacion
`; /* Los Template literals nos permiten generar texto multi lineas sin tener que agregar el '\n' haciendo
mas fácil de leer el código. */

console.log(`Antes de ES6: ${lorem}`);
console.log(`Con ES6: ${lorem2}`);
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Parametros por Defecto
```javascript
// Antes de ES6
function newUser(name, age, country) {
    let nombre = name || "Nombre";
    let edad = age || "Edad";
    let ciudad = country || "País";
    console.log(nombre, edad, ciudad);
}

newUser(); // Nombre, Edad, País
newUser("Orlando", 21, "Nicaragua"); // "Orlando", 21, "Nicaragua"

function newAdmin(name = "Nombre", age = "Edad", country = "País") {
    console.log(name, age, country);
}

newAdmin(); // Nombre, Edad, País
newAdmin("Orlando", 21, "Nicaragua"); // "Orlando", 21, "Nicaragua"

// Con ES6 se nos presente los paramatros por defecto de una manera distinta para hacer mas fácil la sintaxis del código.
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Desestructuración de Arrays y Objects
```javascript

```
## Spread Operator
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Objetos Literales
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Promesas
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Clases
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Modulos
```javascript

```
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Generadores
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Set y Add
```javascript

```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

# ECMAscript 7
## Exponenciales y Array Includes
```javascript

```
**[⬆ Volver a ES7](#qué-se-implementó-en-es7-ecmascript-7)**

# ECMAscript 8
## Objects Entries y Values
```javascript

```
**[⬆ Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**
## String Padding
```javascript

```
**[⬆ Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**
## Trailing commas
```javascript

```
**[⬆ Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**
## Async Function
```javascript

```
**[⬆ Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**

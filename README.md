# CURSO DE ECMASCRIPT: HISTORIA Y VERSIONES DE JAVASCRIPT
### ¿Qué se implementó en ES6 (ECMAscript 6)?
1. <a href='#let-y-const'>Let y Const</a>
1. <a href='#arrow-function'>Arrow Functions</a>
1. <a href='#strings'>Strings</a>
4. <a href='#default-params'>Parametros por Defecto</a>
5. <a href='#destructuring-arrays-objects'>Desestructuración de Arrays y Objects</a>
6. <a href='#spread-operator'>Spread Operator</a>
7. <a href='#object-literals'>Objetos Literales</a>
8. <a href='#promises'>Promesas</a>
9. <a href='#class'>Clases</a>
10. <a href='#modules'>Modulos</a>
11. <a href='#generators'>Generadores</a>
12. <a href='#set-and-add'>Set y Add</a>

### ¿Qué se implementó en ES7 (ECMAscript 7)?
1. <a href='#exponentials-and-array-includes'>Exponenciales y Array Includes</a>

### ¿Qué se implementó en ES8 (ECMAscript 8)?
1. <a href='#objects-entries-and-values'>Objects Entries y Values</a>
2. <a href='#string-padding'>String Padding</a>
3. <a href='#trailing-commas'>Trailing commas</a>
4. <a href='#async-function'>Async Function</a>

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
## Arrow Functions
```javascript
// Normal Function
function square(num) {
    return num * num;
} // Esta es la forma normal de declarar una función.

//Arrow Function
const square = (num) => {
    return num * num;
} // Esta sirve para las expresiones de funciones entre otras, pero como se puede observar es más legible que el function.

// Return implícito
const square = num => num * num; // Esta forma sirve solamente si la función contará con una sola línea de código por lo que si la función llevará mas de una línea es recomendable usar una de las 2 formas anteriores.
```
## Strings
```javascript

```
## Parametros por Defecto
```javascript

```
## Desestructuración de Arrays y Objects
```javascript

```
## Spread Operator
```javascript

```
## Objetos Literales
```javascript

```
## Promesas
```javascript

```
## Clases
```javascript

```
## Modulos
```javascript

```
```javascript

```
## Generadores
```javascript

```
## Set y Add
```javascript

```

# ECMAscript 7
## Exponenciales y Array Includes
```javascript

```

# ECMAscript 8
## Objects Entries y Values
```javascript

```
## String Padding
```javascript

```
## Trailing commas
```javascript

```
## Async Function
```javascript

```

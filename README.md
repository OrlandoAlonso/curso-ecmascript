# CURSO DE ECMASCRIPT: HISTORIA Y VERSIONES DE JAVASCRIPT
### ¿Qué se implementó en ES6 (ECMAscript 6)?
1. <a href='#let-y-const'>Let y Const</a>
1. [Arrow Functions](#arrow-function)
1. [Strings](#strings)
4. [Parametros por Defecto](#default-params)
5. [Desestructuración de Arrays y Objects](#destructuring-arrays-objects)
6. [Spread Operator](#spread-operator)
7. [Objetos Literales](#object-literals)
8. [Promesas](#promises)
9. [Clases](#class)
10. [Modulos](#modules)
11. [Generadores](#generators)
12. [Set y Add](#set-and-add)

### ¿Qué se implementó en ES7 (ECMAscript 7)?
1. [Exponenciales y Array Includes](#exponentials-and-array-includes)

### ¿Qué se implementó en ES8 (ECMAscript 8)?
1. [Objects Entries y Values](#objects-entries-and-values)
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

    console.log(fruit1); /* Var tiene la particularidad de ser Global Scope, por ende, esta puede ser llamada fuera del if, pero
    esta puede generar Hoisting, let y  const no. */
    console.log(fruit2); // ERROR: Let se declara dentro del bloque, es decir, block scope
    console.log(fruit3); // ERROR: Const se declara dentro del bloque, es decir, block scope
}

fruits();
```
## Arrow Functions
```javascript

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

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

/* Con ES6 se nos presente los paramatros por defecto de una manera distinta para hacer mas fácil la
sintaxis del código. */
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Desestructuración de Arrays y Objects
```javascript
// Arrays Destructuring
let fruits = ['Manzana', 'Banana'];
let [a, b] = fruits; /* ES6 nos presenta el Destructuring en este caso para los arrays se representa
con '[varname, varname] = array' siendo esta una manera más sencilla en algunos casos de acceder a
los valores del array. */
console.log(a, b); // "Manzana", "Banana"

// Objects Destructuring
let user = { username: 'navarrete11', age: 21 };
let { username, age } = user; /* ES6 nos presenta el Destructuring en este caso para los objetos se
representa con '{ atributo, atributo } = objeto' siendo esta una manera mas sencilla de acceder a los
valores del objeto. */
console.log(username, age); // "navarrete11", 21
```
## Spread Operator
```javascript
// Spread Operator
let person = { name: 'Orlando', age: 21 };
let country = 'NI';

let data = {
    id: 1,
    ...person,
    country,
}; /* ES6 nos presenta algo llamado Spread Operator representado por '...', esto se refiere a acceder a
todos los atributos y valores de un objeto o array, es decir, si tenemos:
let user = { username: "navarrete11", age: 21 }
y creamos
let otherUserAtt = { ...user, country: "NI" }
esto agregará todos los attributos y valores de user a otherUserAtt y adicionalmente agregara el atributo
country mostrando como resultado => { username: "navarrete11", age: 21, country: "NI" }, de igual forma
funciona para los arrays. */
console.log(data); // { id: 1, name: "Orlando", age: 21, country: "NI" }

// Rest
function sum(num, ...values) { /* Como se puede observar uno de los parámetros es ...values, es decir que
si el usuario manda como argumento (1, 1, 2, 3) values tendrá un valor de [1, 2, 3], esto no siempre es
recomendado se recomienda analizar la lógica del código y verificar si el Spread Operator puede ser usado
como parámetro. */
    console.log(values); // [1, 2, 3]
    let amount = 0;
    for (let value of values) {
        amount = amount + value;
    }
    console.log(num + amount);
}

sum(1, 1, 2, 3); // 7
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Objetos Literales
```javascript
// Enahced Object Literals
function newUser(user, age, country, uId) {
    return {
        /* Antes de ES6 era necesario hacer 'user: user' para retornar el valor, pero con Object Literals
        solamente tendríamos que llamar la variable para retornar, en el caso de que se desee otro nombre
        en el objeto o array a retornar si puede hacer como se mestra en el id. */
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("navarrete11", 21, "NI", 1));
// { user: 'navarrete11', age: 21, country: 'NI', id: 1 }
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Promesas
```javascript
// Promesas
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!')
        } else {
            reject('Whooops!');
        }
    })
}
// Las promesas a como dice su nombre cumple algo que pasará hoy, mañana o nunca.

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err)); // .then() 'Hey!!', .catch() 'Whooops!'.
/* Como se explico anteriormente las promesas cumplen algo que pasará, en este caso si la promesa se
cumple entra en .then() y ejecuta la lógica que nosotros hayamos descrito, en el caso de que la promesa
no se cumpla entra en .catch() y ejecuta la lógica que nosotros hayamos descrito. */
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Clases
```javascript
// Clases

// Declarando clase
class User {};

// Instancia de una clase
const newUser = new User();

class User {
    // Metodos
    greeting() {
        return 'Hola';
    }
};

const newuser = new User();
console.log(newuser.greeting()); // Hola

// Constructor
class User {
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hola';
    }
};

const orlando = new User(); // Nuevo Usuario

// This
class User {
    constructor(name) {
        this.name = name;
    }

    //metodos
    speak() {
        return 'Hola';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User("Ana");
console.log(ana.greeting()); // Hola Ana

// Setters y Getters
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    speak() {
        return 'Hola';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new User('Orlando', 21);
console.log(bebeloper.greeting()); // Hola Orlando
console.log(bebeloper.uAge); // 21
console.log(bebeloper.uAge = 41); // 41
console.log(`${bebeloper.greeting()}, Edad: ${bebeloper.uAge}`); // Hola Orlando, Edad: 41
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Modulos
```javascript
// module.js
const hello = () => {
    console.log('¡Hola!');
}

export default hello;
```
```javascript
import hello from "./module.js";

hello(); // ¡Hola!
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Generadores
```javascript
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Orlando', 'Oscar', 'Odalys', 'Jessica', 'Alondra']);
console.log(it.next().value); // Orlando
console.log(it.next().value); // Oscar
console.log(it.next().value); // Odalys
console.log(it.next().value); // Jessica
console.log(it.next().value); // Alondra
console.log(it.next().value); // undefined
console.log(it.next().value); // undefined
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**
## Set y Add
```javascript
const list = new Set();
list.add('item 1'); // Esto agrega a la lista el elemento 'item 1'.
list.add('item 2').add('item 3').add('item 4'); // Tambien puede hacerse de esta forma.

console.log(list); // Set(4) { 'item 1', 'item 2', 'item 3', 'item 4' }
```
**[⬆ Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

# ECMAscript 7
## Exponenciales y Array Includes
```javascript
// Exponenciales
const data = 3 ** 4;
console.log(data); // 81
```

```javascript
// Arrays Includes
let numbers = [1, 2, 3, 4, 6, 7, 8];
console.log(numbers.includes(4)); // true
console.log(numbers.includes(9)); // false

const list = ['Orlando', 'Oscar', 'Odalys'];
console.log(list.includes('Oscar')); // true
console.log(list.includes('oscar')); // false
console.log(list.includes('Jessica')); // false

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(`${familyEmoji.includes("👨")}
${familyEmoji.includes("👩")}
${familyEmoji.includes("👦")}`);
/*
true
true
true
esto sucede ya que el emoji '👨‍👩‍👦‍👦' esta conformado por otros emojis
*/
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

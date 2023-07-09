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

### ¿Qué se implementó en ES9 (ECMAscript 9)?
1. [Regex](#regex)
2. [Spread](#spread)
3. [Finally](#finally)
4. [Async Iterators](#async-iterators)

### ¿Qué se implementó en ES10 (ECMAscript 10)?
1. [Flat y Flat Map](#flat-y-flat-map)
2. [Trim Start y Trim End](#trim-start-y-trim-end)
3. [Try Catch](#try-catch)
4. [From Entries](#from-entries)

### ¿Qué se implementó en ES11 (ECMAscript 11)?
1. [Optional Chaining](#optional-chaining)
2. [Big Int](#big-int)
3. [Nullish](#nullish)
4. [Promise All Settled](#promise-all-settled)
5. [Global This](#global-this)
6. [Match All](#match-all)
7. [Dynamic Import](#dynamic-import)

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

## Set y Add
```javascript
const list = new Set();
list.add('item 1'); // Esto agrega a la lista el elemento 'item 1'.
list.add('item 2').add('item 3').add('item 4'); // Tambien puede hacerse de esta forma.

console.log(list); // Set(4) { 'item 1', 'item 2', 'item 3', 'item 4' }
```
**[🡅 Volver a ES6](#qué-se-implementó-en-es6-ecmascript-6)**

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
**[🡅 Volver a ES7](#qué-se-implementó-en-es7-ecmascript-7)**

# ECMAscript 8
## Objects Entries y Values
```javascript
// Object Entries
const countries = { MX: 'Mexico', CO: 'Colombia' , CL: 'Chile', PE: 'Peru' };
console.log(Object.entries(countries));
/*
[
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Peru' ]
]
*/

// Object Values
const countries = { MX: 'Mexico', CO: 'Colombia' , CL: 'Chile', PE: 'Peru' };
console.log(Object.values(countries)); // [ 'Mexico', 'Colombia', 'Chile', 'Peru' ]
```
**[🡅 Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**

## String Padding
```javascript
// String padding
const string = 'Hello';
console.log(string.padStart(10, 'hi')); // hihihHello
/* PadStart rellena al inicio del string las espacios en blanco con la palabra 'hi' al hello tener 5
caracteres solo quedan 5 espacios es por eso que al inicio se agrega hihih. */
console.log(string.padEnd(10, 'hi')); // Hellohihih
/* PadEnd rellena al final del string las espacios en blanco con la palabra 'hi' al hello tener 5
caracteres solo quedan 5 espacios es por eso que al final se agrega hihih. */
```
**[🡅 Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**

## Trailing commas
```javascript
// Trailing commas
const array = [24, 35, 25, 24, , , , , 45];
console.log(array); // [ 24, 35, 25, 24, <4 empty items>, 45 ]
// Los Trailing commas se encargan de crear espacios vacios en los arryas para poder rellenarlos luego.
console.log(array.length); // 8
```
**[🡅 Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**

## Async Function
```javascript
// Async Function
const fnAsycn = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Asycn!!'), 2000)
            : reject(new Error('Error!!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsycn();
    console.log(something);
    console.log('Hello!!');
}

console.log('Before');
anotherFn();
console.log('After');

/* “async-await” es una manera de trabajar de una forma mas cómoda con promesas, la palabra reservada
“async” quiere decir que una función siempre devolverá una promesa. Ahora la palabra reservada “await”,
solamente existe dentro de una función “async”, que hace que JavaScript espere hasta que la función
promesa responda para continuar con el código dentro de ésta función, pero sin pausar la ejecución del
siguiente código. */
```
**[🡅 Volver a ES8](#qué-se-implementó-en-es8-ecmascript-8)**

# ECMAscript 9
## Regex
```javascript
const regex = /(\d{4})-(\d{2})-(\d{2})/; /* Esto representa una fecha, es decir, AAAA-MM-DD siendo AAAA
el año, MM el mes y DD el día. */
const matchers = regex.exec('2023-01-01') /* Esto ejecuta el regex para inicializar el valor de matchers
como se muestra en la consola. */
console.table(matchers);
/*
┌─────────┬──────────────┐
| (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2023-01-01' │
│    1    │    '2023'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2023-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘
*/
```
**[🡅 Volver a ES9](#qué-se-implementó-en-es9-ecmascript-9)**

## Spread
```javascript
const user = { username: 'navarrete11', age: 21, coutry: 'NI' };
const { username, ...values } = user; // ES9
console.log(username); // navarrete11
console.log(values); // { age: 21, coutry: 'NI' }

// Con esto podemos tener la opción de verificar cual es el objeto original
const objetoOriginal = { a: 1, b: 2 };
const objetoReferencia = objetoOriginal;
const objetoCopia = { ...objetoOriginal }; // El Spread lo que hace es una copia del objeto original.

console.log(objetoReferencia === objetoOriginal); // true
console.log(objetoOriginal === objetoCopia); // false
```
**[🡅 Volver a ES9](#qué-se-implementó-en-es9-ecmascript-9)**

## Finally
```javascript
// Promises Finally
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hey!!')
            : reject('Whooops!');
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado')); /* .then() 'Hey!!', .catch() 'Whooops!',
    .finally() 'Finalizado'. */
```
**[🡅 Volver a ES9](#qué-se-implementó-en-es9-ecmascript-9)**

## Async Iterators
```javascript
async function* anotherGenerator () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');
/*
Hello
1
2
3

Si eliminamos el async y await daría el siguiente resultado

function* anotherGenerator () {
    yield 1;
    yield 2;
    yield 3;
}

const other = anotherGenerator();
console.log(other.next().value);
console.log(other.next().value);
console.log(other.next().value);
console.log('Hello');

1
2
3
Hello
*/

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Orlando', 'Oscar', 'Odalys']);
console.log('After');
/*
After
Orlando
Oscar
Odalys
*/
```
**[🡅 Volver a ES9](#qué-se-implementó-en-es9-ecmascript-9)**

# ECMAscript 10
## Flat y Flat Map
```javascript
// Flat
const array1 = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]]
console.log(array1.flat(3));
/*
[
  1, 1, 2, 3, 4,
  1, 3, 5, 6, 1,
  2, 4
]

El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar
array internos. */

// Flat Map
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));
/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]

Flat Map permite aplanar los elementos de un array en un nivel, pasando un función que mapeara cada
elemento del nuevo array, este método no se podría utilizar para array que tengan más de un nivel de
profundidad. Sin embargo, se pueden combinar los métodos flat y map para tener un mismo resultado.

Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.
*/

const numbers = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(numbers.flat(Infinity).map(num => num * 2)); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
```
**[🡅 Volver a ES10](#qué-se-implementó-en-es10-ecmascript-10)**

## Trim Start y Trim End
```javascript
// Trim start y Trim End
const hello = '         Hello word!     ';
console.log(hello.trimStart()); // 'Hello word!     '
console.log(hello.trimEnd()); // '         Hello word!'
console.log(hello.trimStart().trimEnd()); // 'Hello word!'
/* Trim Start elimina todos los espacios vacios antes del string, al contrario de end que elimina todos
los espacios vacios despues del string. Es por eso que al unir los 2 el string ocupa solmente lo
necesario sin espacios vacios al inicio o al final, pero escribir .trimStart().trimEnd() es algo largo
y menos legible por lo que se implementó el .trim() que elima los espacios vacios antes y despues del
string. */
console.log(hello.trim()); // 'Hello word!'
```
**[🡅 Volver a ES10](#qué-se-implementó-en-es10-ecmascript-10)**

## Try Catch
```javascript
// Antes de ES10
try {
    hello();
} catch (error) {
    console.log(error); // hello is not defined
}

// Con la actualización de ES10
try {
    anotherFn();
} catch {
    console.log('Esto es un error'); // Esto es un error
} // El argumento catch (error) con ES10 es opcional.
```
**[🡅 Volver a ES10](#qué-se-implementó-en-es10-ecmascript-10)**

## From Entries
```javascript
// From Entries
const entries = new Map([
    ['name', 'alexa'],
    ['age', 24],
]);
console.log(entries); // Map(2) { 'name' => 'alexa', 'age' => 24 }
console.log(Object.fromEntries(entries)); // { name: 'alexa', age: 24 }

// Ahora se puede cambiar de un array a un objeto
const entries1 = [['name', 'Sime'], ['age', 30]];
console.log('Array original', entries1);
// Array original [ [ 'name', 'Sime' ], [ 'age', 30 ] ]
console.log('Array transformado a object', Object.fromEntries(entries1));
// Array transformado a object { name: 'Sime', age: 30 }

/* Object.fromEntries() transforma las entradas de un array en object, al contrario de Object.entries()
que transforma un objeto en array */
```
**[🡅 Volver a ES10](#qué-se-implementó-en-es10-ecmascript-10)**

# ECMAscript 11
## Optional Chaining
```javascript
// Optional Chaining
const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users.gndx.country); // MX
console.log(users.ana.country); // CO
console.log(users?.bebeloper?.country); // undefined
/* Optional Chaining verifica que el atributo del objeto existe, retornando undefined si esta no
existe. */
/*
NOTA:
No abuses del encadenamiento opcional
El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.

Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces
se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.

Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo”
por un undefined, provocando que el debugging sea más complicado.
*/
```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

## Big Int
```javascript
// Manejo de numeros enteros muy grandes
const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);
console.log(aBigNumber); // 8907245920742093847n
console.log(anotherBigNumber); // 8907245920742093847n
/*
JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo
Number.MIN_SAFE_INTEGER. Fuera de estos límites, los cálculos matemáticos pueden fallar y mostrar
resultados erróneos. Con BigInt esto se resuelve. */
```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

## Nullish
```javascript
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
🔨 El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto
booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.
.
Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea
null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.
*/
const id = 0;
const orId = id || "Sin id";
const nullishId = id ?? "Sin id";

console.log( orId ); //  'Sin id'
console.log( nullishId );  // 0
```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

## Promise All Settled
```javascript
// Promise All Settled
const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.table(response));
/*
┌─────────┬─────────────┬──────────┬─────────────┐
│ (index) │   status    │  reason  │    value    │
├─────────┼─────────────┼──────────┼─────────────┤
│    0    │ 'rejected'  │ 'Reject' │             │
│    1    │ 'fulfilled' │          │  'Resolve'  │
│    2    │ 'fulfilled' │          │ 'Resolve 2' │
└─────────┴─────────────┴──────────┴─────────────┘

Tambien existe Promise.all() El método Promise.all(iterable) devuelve una promesa que termina
correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien
rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
La diferencia con Promise.allSettled() es que esta ejecuta todas las promesas sin importar si son
rechazadas o no. */
```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

## Global This
```javascript
console.log(window); // window is not defined => del lado del navegador
/* Si escribimos window en la consola del navegador esto nos muestra un numero de metodos y atributos,
pero al tratar de trabajar con window en el web worker nos da un error, eso es lo que viene a resolver
global this con ES11 */

console.log(global); // Seria de metodos o atributos disponibles => Node
console.log(self); // web worker
console.log(globalThis);
```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

## Match All
```javascript
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

El método matchAll() retorna un iterador de todos los resultados de ocurrencia en una cadena de texto
contra una expresión regular, incluyendo grupos de captura.

Antes de la adición de matchAll a JavaScript, fue posible hacer llamados a regexp.exec (y usar
expresiones regulares con la bandera /g) en un ciclo para obtener las ocurrencias: */

const regexp = RegExp('foo[a-z]*','g');
const cadena = 'mesa football, foosball';
let ocurrencia;

while ((ocurrencia = regexp.exec(cadena)) !== null) {
    console.log(`Encontrado ${ocurrencia[0]} inicio=${ocurrencia.index} final=${regexp.lastIndex}.`);
    // salida esperada: "Encontrado football inicio=5 final=13."
    // salida esperada: "Encontrado foosball inicio=15 final=23."
}

/* Con matchAll disponible, puedes evitar el ciclo while y exec con /g. Por el contrario, usando matchAll,
obtienes un iterador con el cual puedes usar con constructores más convenientes for...of, array spread,
o Array.from(): */

const regexp1 = RegExp('foo[a-z]*','g');
const cadena1 = 'mesa football, foosball';
const ocurrencias = cadena1.matchAll(regexp1);

for (const ocurrencia of ocurrencias) {
    console.log(`Encontrado ${ocurrencia[0]} inicio=${ocurrencia.index} final=${ocurrencia.index +
    currencia[0].length}.`);
    // Encontrado football inicio=5 final=13.
    // Encontrado foosball inicio=15 final=23.
}

// el iterador ocurrencias es agotado después de la iteración for..of
// Llama matchAll de nuevo para crear un nuevo iterador */

console.log(Array.from(cadena1.matchAll(regexp1), m => m[0]));
// Array [ "football", "foosball" ]
```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

## Dynamic Import
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Import</title>
</head>
<body>
    <button id="btn">Click me</button>
    <script type="module" src="./06-dynamic-import.js"></script>
</body>
</html>
```
```javascript
// module.js
export function hello () {
    console.log('Hola mundo');
}
```
```javascript
/* 06-dynamic-import.js
dynamic import es una nueva característica de JavaScript que se introdujo en ECMAScript 2020. Esta
característica permite cargar módulos de forma dinámica en tiempo de ejecución, en lugar de importarlos en
tiempo de compilación.

El uso de dynamic import se realiza mediante la función import(), que devuelve una promesa que se resuelve
con el módulo importado. Esto permite cargar módulos solo cuando se necesitan, lo que puede mejorar el
rendimiento y la usabilidad de la aplicación.

Aquí hay un ejemplo de cómo se puede usar dynamic import en JavaScript: */
const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module); // Serie de metodos y atributos de module
    module.hello(); // Hola mundo
});

```
**[🡅 Volver a ES11](#qué-se-implementó-en-es11-ecmascript-11)**

# ECMAscript 12

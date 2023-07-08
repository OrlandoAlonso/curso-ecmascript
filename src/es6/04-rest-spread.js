// Arrays Destructuring
let fruits = ['Manzana', 'Banana'];
let [a, b] = fruits; // ES6 nos presenta el Destructuring en este caso para los arrays se representa con '[varname, varname] = array' siendo esta una manera más sencilla en algunos casos de acceder a los valores del array.
console.log(a, b); // "Manzana", "Banana"

// Objects Destructuring
let user = { username: 'navarrete11', age: 21 };
let { username, age } = user; // ES6 nos presenta el Destructuring en este caso para los objetos se representa con '{ atributo, atributo } = objeto' siendo esta una manera mas sencilla de acceder a los valores del objeto.
console.log(username, age); // "navarrete11", 21

// Spread Operator
let person = { name: 'Orlando', age: 21 };
let country = 'NI';

let data = {
    id: 1,
    ...person,
    country,
}; /* ES6 nos presenta algo llamado Spread Operator representado por '...', esto se refiere a acceder a todos los atributos y valores de un objeto o array, es decir, si tenemos:
let user = { username: "navarrete11", age: 21 } y creamos
let otherUserAtt = { ...user, country: "NI" } esto agregará todos los attributos y valores de user a otherUserAtt y adicionalmente agregara el atributo country mostrando como resultado => { username: "navarrete11", age: 21, country: "NI" }, de igual forma funciona para los arrays. */
console.log(data); // { id: 1, name: "Orlando", age: 21, country: "NI" }

// Rest
function sum(num, ...values) { // Como se puede observar uno de los parámetros es ...values, es decir que si el usuario manda como argumento (1, 1, 2, 3) values tendrá un valor de [1, 2, 3], esto no siempre es recomendado se recomienda analizar la lógica del código y verificar si el Spread Operator puede ser usado como parámetro.
    console.log(values); // [1, 2, 3]
    let amount = 0;
    for (let value of values) {
        amount = amount + value;
    }
    console.log(num + amount);
}

sum(1, 1, 2, 3); // 7
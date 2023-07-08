var lastName = "Navarrete";
lastName = "Portillo";

console.log(lastName);

let fruit = "Manzana";
fruit = "Kiwi";
console.log(fruit);

const animal = "Perro";
animal = "Gato"; // ERROR: Al ser una constante su valor no puede ser reasignado
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Manzana";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
    }

    console.log(fruit1); // Var tiene la particularidad de ser Global Scope, por ende, esta puede ser llamada fuera del if, pero esta puede generar Hoisting, let y  const no.
    console.log(fruit2); // ERROR: Let se declara dentro del bloque, es decir, block scope
    console.log(fruit3); // ERROR: Const se declara dentro del bloque, es decir, block scope
}

fruits();
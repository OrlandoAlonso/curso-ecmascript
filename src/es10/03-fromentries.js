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

/* Object.fromEntries() transforma las entradas de un array en object, al contrario de Object.entries() que transforma un objeto en array */

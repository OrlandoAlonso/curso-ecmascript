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
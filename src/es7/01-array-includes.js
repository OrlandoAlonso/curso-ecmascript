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
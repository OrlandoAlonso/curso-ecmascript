// Trailing commas
const array = [24, 35, 25, 24, , , , , 45];
console.log(array); // [ 24, 35, 25, 24, <4 empty items>, 45 ]
// Los Trailing commas se encargan de crear espacios vacios en los arryas para poder rellenarlos leugo.
console.log(array.length); // 8
const list = new Set();
list.add('item 1'); // Esto agrega a la lista el elemento 'item 1'.
list.add('item 2').add('item 3').add('item 4'); // Tambien puede hacerse de esta forma.

console.log(list); // Set(4) { 'item 1', 'item 2', 'item 3', 'item 4' }
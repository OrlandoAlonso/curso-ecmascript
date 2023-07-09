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

Tambien existe Promise.all() El método Promise.all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
La diferencia con Promise.allSettled() es que esta ejecuta todas las promesas sin importar si son rechazadas o no.
*/
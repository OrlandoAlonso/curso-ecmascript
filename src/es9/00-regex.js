const regex = /(\d{4})-(\d{2})-(\d{2})/; // Esto representa una fecha, es decir, AAAA-MM-DD siendo AAAA el año, MM el mes y DD el día
const matchers = regex.exec('2023-01-01') // Esto ejecuta el regex para inicializar el valor de matchers como se muestra en la consola.
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
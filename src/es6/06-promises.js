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
// Como se explico anteriormente las promesas cumplen algo que pasará, en este caso si la promesa se cumple entra en .then() y ejecuta la lógica que nosotros hayamos descrito, en el caso de que la promesa no se cumpla entra en .catch() y ejecuta la lógica que nosotros hayamos descrito.
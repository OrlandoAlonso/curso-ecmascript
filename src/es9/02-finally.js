// Promesas
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hey!!')
            : reject('Whooops!');
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado')); // .then() 'Hey!!', .catch() 'Whooops!', .finally() 'Finalizado'.
// Enahced Object Literals
function newUser(user, age, country, uId) {
    return {
        // Antes de ES6 era necesario hacer 'user: user' para retornar el valor, pero con Object Literals solamente tendríamos que llamar la variable para retornar, en el caso de que se desee otro nombre en el objeto o array a retornar si puede hacer como se mestra en el id.
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("navarrete11", 21, "NI", 1)); // { user: 'navarrete11', age: 21, country: 'NI', id: 1 }
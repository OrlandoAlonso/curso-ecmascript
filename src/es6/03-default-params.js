// Antes de ES6
function newUser(name, age, country) {
    let nombre = name || "Nombre";
    let edad = age || "Edad";
    let ciudad = country || "País";
    console.log(nombre, edad, ciudad);
}

newUser(); // Nombre, Edad, País
newUser("Orlando", 21, "Nicaragua"); // "Orlando", 21, "Nicaragua"

function newAdmin(name = "Nombre", age = "Edad", country = "País") {
    console.log(name, age, country);
}

newAdmin(); // Nombre, Edad, País
newAdmin("Orlando", 21, "Nicaragua"); // "Orlando", 21, "Nicaragua"

// Con ES6 se nos presente los paramatros por defecto de una manera distinta para hacer mas fácil la sintaxis del código.
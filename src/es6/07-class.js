// Clases

// Declarando clase
class User {};

// Instancia de una clase
const newUser = new User();

class User {
    // Metodos
    greeting() {
        return 'Hola';
    }
};

const newuser = new User();
console.log(newuser.greeting()); // Hola

// Constructor
class User {
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hola';
    }
};

const orlando = new User(); // Nuevo Usuario

// This
class User {
    constructor(name) {
        this.name = name;
    }

    //metodos
    speak() {
        return 'Hola';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User("Ana");
console.log(ana.greeting()); // Hola Ana

// Setters y Getters
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    speak() {
        return 'Hola';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const bebeloper = new User('Orlando', 21);
console.log(bebeloper.greeting()); // Hola Orlando
console.log(bebeloper.uAge); // 21
console.log(bebeloper.uAge = 41); // 41
console.log(`${bebeloper.greeting()}, Edad: ${bebeloper.uAge}`); // Hola Orlando, Edad: 41
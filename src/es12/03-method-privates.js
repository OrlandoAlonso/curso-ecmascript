class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    #speak() {
        return 'Hola';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}
let Human = class {
    constructor(n, y) {
        this.nome = n;
        this.year = y;
    }

    namePerson() {
        console.log(`My name is: ${this.nome}`);
    }
};

const Arthur = new Human("Arthur", 30);
console.log(Arthur);

Arthur.namePerson()


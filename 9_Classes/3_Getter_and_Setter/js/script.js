class Human {

    constructor(n, y) {
        this.name = n;
        this.year = y;
    };

    get nameOfPeople() {
        return `The name of the people is ${this.name}`
    };

    set changeName(newName) {
        this.name = `My name is ${newName}`;
    }

}

let Arthur = new Human("Arthur Guilherme", 30);
console.log(Arthur.nameOfPeople);

console.log(Arthur.changeName("Guiller"))
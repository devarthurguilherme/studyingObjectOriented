class Humano {
    nome: string;
    year: number;

    constructor(nome: string, year: number) {
        this.nome = nome;
        this.year = year;
    };

    apresentarHuman() {
        return `My name is ${this.nome} and I am ${this.year} old!`;
    };
};

let Arthur = new Humano("Arthur", 31);

console.log(Arthur);

console.log(Arthur.apresentarHuman());
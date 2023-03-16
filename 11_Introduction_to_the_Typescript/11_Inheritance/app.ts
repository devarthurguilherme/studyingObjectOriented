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

class Ninja extends Humano {
    classe: string;
    constructor(nome: string, year: number, classe: string) {
        super(nome, year);
        this.classe = classe;
    };

    toThrowShuriken() {
        console.log("Shuriken Throwed!!!");
    }
}

let Arthur = new Ninja("Arthur", 31, "Hokage");

console.log(Arthur);

console.log(Arthur.apresentarHuman());

Arthur.toThrowShuriken();
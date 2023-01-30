class Humano {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    set nomeDaPessoa(novoNome) {
        this.nome = "Novo nome é " + novoNome;
    }

    get receberNome() {
        return "O nome da pessoa é: " + this.nome;
    }
}

let arthur = new Humano("Arthur Guilherme", 30);
console.log(arthur);
console.log(typeof Humano);

arthur.nomeDaPessoa = "Guilherme";
console.log(arthur.receberNome)

console.log(arthur.nome)
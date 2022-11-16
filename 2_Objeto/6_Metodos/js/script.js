let pessoa = {
    nome: "Arthur",
    falar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

console.log(pessoa)
pessoa.falar();
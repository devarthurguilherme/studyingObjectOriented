let pessoa = {
    nome: "Arthur",
    idade: 30,

    aniversario() {
        this.idade +=1
    },

    dizerIdade() {
        console.log(`Minha idade é ${this.idade}`)
    }

}
pessoa.aniversario()
console.log(pessoa.idade)

pessoa.dizerIdade()

let calculadora = {
    numeros: 0,
    somar(a, b) {
        this.numeros = a + b;
    },
    subtracao(a) {
        this.numeros -= a;
    }
}

calculadora.somar(4, 6)
console.log(calculadora.numeros);
calculadora.subtracao(7);
console.log(calculadora.numeros)
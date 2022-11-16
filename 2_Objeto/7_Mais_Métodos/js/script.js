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

/*4:10 */
let pessoa = {
    nome: "Arthur",
    
    idade: 30,

    caracteristicas: {
        cnh :true,
        carteira: ["dinheiro", "documento", "moeda"]
    },

    aniversario() {
        this.idade +=1
    },

    dizerIdade() {
        console.log(`Minha idade é ${this.idade}`)
    }
}


console.log(pessoa.caracteristicas)
console.log(pessoa.caracteristicas.carteira[2])
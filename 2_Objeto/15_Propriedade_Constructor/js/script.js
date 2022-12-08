function criarArvore(especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = new criarArvore("Laranjeira", true);
console.log(laranjeira)
console.log(laranjeira.constructor)

function Hero(nome,classe) {
    this.nome = nome;
    this.classe = classe;
}

let superman = new Hero("superman", "human");
console.log(superman)
console.log(superman.constructor)

let objeto = {
    teste: "TestandoObjeto"
}

console.log(objeto)
console.log(objeto.constructor)
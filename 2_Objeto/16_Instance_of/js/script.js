function criarArvore(especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore("Laranjeira", true);


function Hero(nome,classe) {
    this.nome = nome;
    this.classe = classe;
}

let superman = new Hero("superman", "human");


let objeto = {
    teste: "TestandoObjeto"
}

console.log(laranjeira instanceof criarArvore)
console.log(laranjeira instanceof Object)
console.log(superman instanceof Hero)
let dados = {
    preco: 10000,
    ano: 2018,
    cor: "Azul"
}

function Carro(modelo) {
    this.modelo = modelo;
}

Carro.prototype = dados;
let Fusca = new Carro("VW");



console.log(Fusca.preco)
console.log(dados.isPrototypeOf(Fusca))
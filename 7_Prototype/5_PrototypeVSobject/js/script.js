function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
}

Carro.prototype.color = "black";

let Fusca = new Carro("VW", 100000);

console.log(Fusca.color);

Fusca.color = "pink";
console.log(Fusca.color);
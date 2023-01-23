function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
    this.calota = true;
}

Carro.prototype.color = "black";

let Fusca = new Carro("VW", 100000);

console.log(Fusca.calota);

//1:51

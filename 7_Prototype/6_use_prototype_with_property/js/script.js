function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
    this.calota = true;
}

Carro.prototype.color = "black";
Carro.prototype.calota = false;

let Fusca = new Carro("VW", 100000);

console.log(Fusca.calota);
delete Fusca.calota;

console.log(Fusca.calota);

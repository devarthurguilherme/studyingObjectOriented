function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
    this.calota = true;
}

Carro.prototype.color = "black";
Carro.prototype.calota = false;

let Fusca = new Carro("VW", 100000);

for(prop in Fusca) {
    console.log(`${prop} -> ${Fusca[prop]}`)
}
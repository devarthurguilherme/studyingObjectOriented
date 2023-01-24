function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
    this.calota = true;
}

Carro.prototype.color = "black";
Carro.prototype.calota = false;

let Fusca = new Carro("VW", 100000);

console.log(Fusca.calota);
console.log(Fusca.constructor.prototype.calota);

if(Fusca.hasOwnProperty("calota")) {
    console.log("Yes, Fusca has!")
} else if (Fusca.constructor.prototype.hasOwnProperty("calota")) {
    console.log("Yes, Prototype has!")
} else {
    console.log("Nobody has! ¬¬")
}
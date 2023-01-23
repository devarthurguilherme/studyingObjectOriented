function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
}

let BMW = new Carro("BMW", 170000);
console.log(BMW);


Carro.prototype.rodas = 4;

console.log(BMW);
console.log(BMW.rodas);



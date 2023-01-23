function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
}

let BMW = new Carro("BMW", 170000);
console.log(BMW);


Carro.prototype.rodas = 4;

let Ferrari = new Carro("Ferrari", 120000);
console.log(Ferrari)

Carro.prototype.tetoSolar = true;

console.log(Ferrari.tetoSolar)

Carro.prototype.abriTetoSolar = function() {
    console.log("O teto abriu!")
}

Ferrari.abriTetoSolar();

console.log(BMW.tetoSolar);


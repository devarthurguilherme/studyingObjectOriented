function Carro(modelo, km) {
    this.modelo = modelo;
    this.km = km;
}

let BMW = new Carro("BMW", 170000);
console.log(BMW);

Carro.prototype.ligar = function() {
    console.log("The Car is On!");
}
''
Carro.prototype.ligar();
Carro.prototype.rodas = 4;

console.log(BMW.rodas);

BMW.ligar();



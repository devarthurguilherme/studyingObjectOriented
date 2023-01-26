function Veiculo() {
    this.carenagem = "Aço";
    this.ligar = function() {
        console.log("Veículo Ligado!");
    }
};

function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50;
};

function Carro() {
    this.rodas = 4;
}

Trem.prototype = new Veiculo;
Carro.prototype = new Veiculo;

/*
Don't Work!
Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;
*/


let tremBala = new Trem("Trem Bala");
let Ferrari = new Carro();


tremBala.ligar();
Ferrari.ligar()

Carro.prototype.ligar = function() {
    console.log("Vrummmmmm...")
}

Ferrari.ligar()
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

Trem.prototype = Veiculo.prototype;

let tremBala = new Trem("Trem Bala");

tremBala.ligar();

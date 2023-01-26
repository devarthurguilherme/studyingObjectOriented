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

Trem.prototype = new Veiculo();

let tremBala = new Trem("Trem Bala");

tremBala.ligar();
console.log(tremBala.tipo);
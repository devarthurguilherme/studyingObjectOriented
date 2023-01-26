function Veiculo() {

};

Veiculo.prototype.carenagem = "Aço";
Veiculo.prototype.ligar = function() {
    console.log("Veículo Ligado!")
}

function Trem(tipo) {
    this.tipo = tipo;
};

Trem.prototype.vagoes = 50;

Trem.prototype = new Veiculo();

let tremBala = new Trem("Trem Bala");

console.log(tremBala instanceof Trem)
tremBala.ligar()

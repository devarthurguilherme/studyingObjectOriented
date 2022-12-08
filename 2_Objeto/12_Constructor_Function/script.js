function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function() {
        console.log(`Usar o ${arma}`);
    };
};

let ninja1 = new Ninja("Naruto", "Kyubi");
ninja1.atirarArma()

let ninja2 = new Ninja("Sasuke", "Susano");
ninja2.atirarArma()
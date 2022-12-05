let ninja = {
    classe: "profissional", 
    arma: "shuriken",
    atirarArma() {
        console.log(`Atirar ${this.arma}`);
    },

    atirarDuasVezes() {
        for(let i = 2; i > 0; i--) {
            this.atirarArma();
        }
    }
}

ninja.atirarDuasVezes()

let ninja2 = {
    classe: "profissional", 
    arma: "Kunai",
    atirarArma() {
        console.log(`Atirar ${this.arma}`);
    }
}

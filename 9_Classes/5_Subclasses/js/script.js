class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    dormir() {
        console.log("O animal dormiu . . .")
    }
};

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
}

let animalDomestico = new Cachorro("Bob", "Labrador");

console.log(animalDomestico)
animalDomestico.dormir();
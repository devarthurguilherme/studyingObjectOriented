function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

let naruto = new Ninja("Naruto Uzumaki", "Razen Shuriken");
let sasuke = new Ninja("Sasuke","Chidori");

let cloneNaruto = naruto;

console.log(naruto === sasuke)
console.log(naruto === cloneNaruto)
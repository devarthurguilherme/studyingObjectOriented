function CreateNinja(nome, arma){
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function(){
        console.log(`Atirar ${arma}`)
    }
};

let naruto = new CreateNinja("Naruto", "RasenShuriken");
let sasuke = new CreateNinja("Sasuke", "Shidori");


console.log(naruto);
console.log(sasuke);
naruto.atirarArma();
sasuke.atirarArma();
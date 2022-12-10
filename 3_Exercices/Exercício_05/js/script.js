function CreateNinja(nome, arma, qtd){
    this.nome = nome;
    this.arma = arma;
    this.estoqueArma = qtd;
    this.usarArma = function(enemy){
        if(qtd > 0) {
            console.log(`O ${nome} utilizou ${arma}, agora tem ${qtd}`);
            qtd -=1;
            enemy.vivo = false;
        } else {
            console.log(`Ops, ${nome} utilizou ${arma} demais, agora tem ${qtd} para uso!`);
        }
    };
};

function CreateEnemy(nome) {
    this.nome = nome;
    this.vivo = true;
}



let naruto = new CreateNinja("Naruto", "RasenShuriken", 1);
let orochimaru = new CreateEnemy("Orochimaru")

naruto.usarArma(orochimaru)
console.log(orochimaru)
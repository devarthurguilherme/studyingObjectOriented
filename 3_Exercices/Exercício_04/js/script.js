function CreateNinja(nome, arma, qtd, biju){
    this.nome = nome;
    this.arma = arma;
    this.estoqueArma = qtd;
    this.usarArma = function(){
        qtd -=1;
        

        if(qtd > 0) {
            console.log(`O ${nome} utilizou ${arma}, agora tem ${qtd}`);
        } else {
            console.log(`Ops, ${nome} utilizou ${arma} demais, agora tem ${qtd} para uso!`);
        }
        
    };
    
};

let naruto = new CreateNinja("Naruto", "RasenShuriken", 4);
let sasuke = new CreateNinja("Sasuke", "Shidori", 2);
let kakashi = new CreateNinja("Kakashi", "Kamui", 2)


console.log(naruto);
naruto.usarArma();
naruto.usarArma();
naruto.usarArma();
naruto.usarArma();
console.log("-------------------")
console.log(sasuke);
sasuke.usarArma();
sasuke.usarArma();
console.log("-------------------")
console.log(kakashi)
kakashi.usarArma()
kakashi.usarArma()
function verifyInstance(obj, construtora) {
  if(obj instanceof construtora) {
    console.log(`${construtora.name} é o "molde" de ${obj.nome}`)
  } else {
    console.log(`${construtora.name} NÃO é o "molde" de ${obj.nome}`)
  }
}

function CreateNinja(nome) {
    this.nome = nome;
}

let naruto = new CreateNinja("Naruto");
let goku = {
    nome: "goku"
}

verifyInstance(naruto, CreateNinja);
verifyInstance(goku, CreateNinja);
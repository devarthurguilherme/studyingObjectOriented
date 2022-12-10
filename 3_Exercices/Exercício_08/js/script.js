let caminhao = {
  marca: "Iveco",
  peso: "2 Toneladas",
  ano: 2018,
  inspecao: "março"
};

console.log(caminhao)

let {marca, peso, ano, inspecao} = caminhao;

console.log(inspecao);
console.log(ano);
console.log(peso);
console.log(marca);

marca = "Chevrolet";
inspecao = "Abril";

console.log(marca);
console.log(inspecao);
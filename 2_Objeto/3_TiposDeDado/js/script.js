let maquina = {
    material: "Aço Inox",
    equipamentos: ["motor", "freio", "esteira", "cilindro"],
    vaiMontada: false,
    numeroMotores: 1
};


for(let i = 0; i < maquina.equipamentos.length; i++) {
    console.log(maquina.equipamentos[i]);
}
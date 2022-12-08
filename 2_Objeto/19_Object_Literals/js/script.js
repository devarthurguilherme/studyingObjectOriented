/*
let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar
}

console.log(carro)

let alfaTitan = {
    n: "GodZilla",
    weapon: "Atomic Blast",

    everythingBurn() {
        console.log("Rrrrrrrrrrrrrrrrrrrrrrrrhhhhhhhhhh....")
    }
}

alfaTitan.everythingBurn()
*/

let tipo = "tipo_de_";

let barco = {
    [tipo+"barco"]: "Lancha"
}

let aviao = {
    [tipo+"aviao"]: "Jato"
}

console.log(barco)
console.log(aviao)

console.log(barco.tipo_de_barco)
console.log(aviao.tipo_de_barco)
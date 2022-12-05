let carro = {
    tipo: "SUV"
}

carro.portas = 4;
carro.cor = "Azul"

if(carro.tipo == "SUV") {
    carro.tetoSolar = true;
}

console.log(carro)

carro.acelerar = function() {
    console.log("Vruummmmmmm.....");
}


let carro = {
    tipo: "SUV"
}
carro.acelerar()
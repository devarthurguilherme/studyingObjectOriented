let carro = {
    tipo: "SUV",
    ligar() {
        console.log("Vruuuuum..")
    }
}

carro.ligar()
delete carro.tipo
delete carro.ligar;


console.log(carro)
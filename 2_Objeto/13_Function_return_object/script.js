function carCreate(modelo, portas, aro, tetoSolar ) {
    return {
        modeloDoCarro: modelo,
        numeroDePortas: portas,
        diametroDoAro: aro,
        tipoDeTeto: tetoSolar,
        ligarCarro: function() {
            console.log("Ligou!")
        },
        temTetoSolar: function() {
            if(tetoSolar == true) {
                console.log("Tem teto solar!")
            } else {
                console.log("NÃO teto solar!")
            }
        }
    }
}

let ferrari = carCreate("Ferrari", 5, 18, true);
console.log(ferrari.modeloDoCarro)
ferrari.ligarCarro()
ferrari.temTetoSolar()

let BMW = carCreate('bmw', 5, 20, false);

console.log(BMW)
BMW.temTetoSolar()
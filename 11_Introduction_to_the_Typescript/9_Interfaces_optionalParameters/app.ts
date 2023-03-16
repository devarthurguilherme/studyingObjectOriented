interface config {
    marca: string,
    aro?: number,
    tetoSolar: boolean,
    cor?: string
};

function toCreateCar(config: config):{marca: string, aro: number, tetoSolar: boolean, cor?: string} {

    let car = {marca: "default", aro: 16, tetoSolar: false, cor: "black"};

    if(config.marca) {
        car.marca = config.marca;
    };

    if(config.aro) {
        car.aro = config.aro;
    };

    if(config.tetoSolar) {
        car.tetoSolar = config.tetoSolar;
    };

    if(config.cor) {
        car.cor = config.cor;
    };

    return car;
};

let BMW = toCreateCar({marca: "BMW", tetoSolar: true});
console.log(BMW);

let ferrari = toCreateCar({marca: "Ferrari", aro: 20, tetoSolar: false, cor: "Red"});
console.log(ferrari);
function describeCar(marca: string, aro?: number) {
    if(aro) {
        return `The car is the marca ${marca} and has the are ${aro}!`
    }else {
       return `The car is the marca ${marca}!`
    };
};

console.log(describeCar("Ford", 22));
console.log(describeCar("Fiat", undefined));
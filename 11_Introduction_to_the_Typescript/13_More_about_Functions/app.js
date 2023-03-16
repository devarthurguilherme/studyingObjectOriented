function describeCar(marca, aro) {
    if (aro) {
        return "The car is the marca ".concat(marca, " and has the are ").concat(aro, "!");
    }
    else {
        return "The car is the marca ".concat(marca, "!");
    }
    ;
}
;
console.log(describeCar("Ford", 22));
console.log(describeCar("Fiat", undefined));

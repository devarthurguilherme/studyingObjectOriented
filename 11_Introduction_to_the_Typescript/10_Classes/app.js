var Humano = /** @class */ (function () {
    function Humano(nome, year) {
        this.nome = nome;
        this.year = year;
    }
    ;
    Humano.prototype.apresentarHuman = function () {
        return "My name is ".concat(this.nome, " and I am ").concat(this.year, " old!");
    };
    ;
    return Humano;
}());
;
var Arthur = new Humano("Arthur", 31);
console.log(Arthur);
console.log(Arthur.apresentarHuman());

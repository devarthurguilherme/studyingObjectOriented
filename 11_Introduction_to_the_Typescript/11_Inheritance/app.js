var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Ninja = /** @class */ (function (_super) {
    __extends(Ninja, _super);
    function Ninja(nome, year, classe) {
        var _this = _super.call(this, nome, year) || this;
        _this.classe = classe;
        return _this;
    }
    ;
    Ninja.prototype.toThrowShuriken = function () {
        console.log("Shuriken Throwed!!!");
    };
    return Ninja;
}(Humano));
var Arthur = new Ninja("Arthur", 31, "Hokage");
console.log(Arthur);
console.log(Arthur.apresentarHuman());
Arthur.toThrowShuriken();

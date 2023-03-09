function toPrintData(obj) {
    console.log("This people it's called ".concat(obj.nome, " and has ").concat(obj.years, " years!"));
}
;
var pessoa = { nome: "Arthur", years: 31 };
toPrintData(pessoa);

function toPrintData(obj: {nome :string, years: number}) {
    console.log(`This people it's called ${obj.nome} and has ${obj.years} years!`)
};

let pessoa = {nome: "Arthur", years: 31};

toPrintData(pessoa);
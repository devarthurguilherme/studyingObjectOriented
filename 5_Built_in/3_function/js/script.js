/*function teste(a) {
    return a
}

console.log(teste("E ae!"))

//Function for Object
teste2 = new Function('a','return arguments')

console.log(teste2("Hello!")[0])

console.log(teste.length)
console.log(teste2.length)

console.log(teste instanceof Function)
console.log(teste2 instanceof Function)
console.log(Function instanceof Object)*/

let a = {
    nome: "Arthur",
    sayName() {
        console.log(`My name is ${this.nome}`)
    }
}

let b = {
    nome: "Alexander"
}

let c = {
    nome:"Nathan"
}
a.sayName()
a.sayName.call(b)
a.sayName.call(c)


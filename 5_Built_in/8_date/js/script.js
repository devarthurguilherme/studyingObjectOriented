/*console.log(new Date())
console.log(new Date(2023, 3,4))
console.log(new Date(0))
console.log(new Date(3216487887410))*/

let data = new Date();

console.log(data)
console.log(data.setMonth(5) + " Date in miliseconds")

console.log(new Date(data.setMonth(0)))

console.log(new Date(Date.now())); //redundance

console.log(Date.parse(new Date(data.setMonth(0))));
if(Array) {
    Array.prototype.checkLength = function() {
        return this.length
    };
}
//1:46


if(typeof Array.prototype.join !== 'function'){
    Array.prototype.join = function() {
        return this[0] + this[1];
    }
}

let a = [1, 2, 3, 4, 5];
let b = [12, 14, 16, 18, 20];



console.log(a.checkLength());
console.log(a.join());
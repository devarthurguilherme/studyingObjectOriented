Array.prototype.checkLength = function() {
    return this.length
};


Array.prototype.add = function() {
    return this[0] + this[1];
}

let a = [1, 2, 3, 4, 5];

console.log(a.checkLength());
console.log(a.add());
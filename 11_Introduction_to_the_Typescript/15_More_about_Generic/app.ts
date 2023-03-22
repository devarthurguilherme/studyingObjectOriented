function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
};

console.log(identity("Text"));
console.log(identity(4));
console.log(identity(false));
function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
};

console.log(identity<string>("Text"));//correct
console.log(identity<number>(4)); //correct
console.log(identity<boolean>(false));//correct
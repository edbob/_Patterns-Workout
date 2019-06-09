function desc(x) {
    return function (y) {
        return x + y;
    }
}
var add5 = desc(5);
var add10 = desc(10);

console.log(add5(2));
console.log(add10(3));
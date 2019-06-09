function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
};

let generator = generateSequence();

let one = generator.next();
let two = generator.next();
let three = generator.next();

console.log(JSON.stringify(one));
console.log(JSON.stringify(two));
console.log(JSON.stringify(three));
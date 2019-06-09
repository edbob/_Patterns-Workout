function* generatorSeq(){
    yield 1;
    yield 2;
    return 3;
};

let generator = generatorSeq();

for(let value of generator){
    console.log(value);
};
function* generatorSequence(start, end){
    for(let i= start; i<= end; i++) yield i;
};

function* generateAlphaNum(){

    yield* generatorSequence(48 ,57);

    yield* generatorSequence(65 ,90);

    yield* generatorSequence(97 ,122);
};

let str = "";

for(let code of generateAlphaNum()){
    str += String.fromCharCode(code);
};

console.log(str);
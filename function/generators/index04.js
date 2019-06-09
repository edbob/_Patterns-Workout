function* gen(){
    let result = yield "2 + 8";
    console.log(result);
};

let generator = gen();
let question = generator.next().value;

setTimeout(()=> generator.next(10), 2000);
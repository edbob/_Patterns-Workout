function setTest(arg1, arg2){
    let sum = arg1 + arg2;
    for(let i =0; i < arguments.length; i++){
        console.log(arguments[i]);
    };
    console.log(sum);
};

setTest(2, 4, 23, 17, 28)

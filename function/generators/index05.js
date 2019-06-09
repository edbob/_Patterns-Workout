function* range(min, max){
    for(let i = Math.ceil(min); i <= max; i++)
        yield i;
};

for(let n in range(3, 8)) console.log(n);
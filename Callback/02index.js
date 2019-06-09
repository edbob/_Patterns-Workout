function my_fuc(arg1, arg2, func){
    let sum = Math.ceil(Math.random()*(arg1 - arg2) + arg2);
    func(sum);
};

my_fuc(4, 15, (sum) => {
    console.log(sum);
});
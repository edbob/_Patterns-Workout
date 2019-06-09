const performance = require('perf_hooks').performance;

const arr = [23, 23, 34, 55, 67, 87, 2, 34, 1, 14, 73];
let time = performance.now();
const qsort = (arr) => {
    
    if(arr.length < 2) {
        return arr;
    }else {
        const pivot = arr[Math.floor(Math.random()* arr.length)];
        const less = arr.filter(value => value < pivot);
        const greater = arr.filter(value => value > pivot);
        return [...qsort(less), pivot, ...qsort(greater)];
    };
};
time = performance.now() - time;
console.log('Время выполнения = ', time);
console.log(qsort(arr));
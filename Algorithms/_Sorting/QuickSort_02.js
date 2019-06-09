//Быстрая сортировка на JavaScript
const arr = [1,213,3,5,2,8,7];
console.time('mark')
function QuickSort(A) {
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++) {
        if (A[i] < p) a[a.length] = A[i];
        else b[b.length] = A[i];
    }
    return QuickSort(a).concat(p, QuickSort(b));
}
console.timeEnd('mark')
console.log(QuickSort(arr))
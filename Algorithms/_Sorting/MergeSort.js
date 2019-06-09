//Сортировка слиянием
//Вспомогательная функция.
function Merge(a, low, mid, high) {
    var b = new Array(high + 1 - low), h, i, j = mid + 1, k, h = low, i = 0;
    while (h <= mid && j <= high) {
        if (a[h] <= a[j]) { b[i] = a[h]; h++; 
        }
        else { 
            b[i] = a[j]; j++; 
        }
        i++;
    }
    if (h > mid) { 
        for (k = j; k <= high; k++) { 
            b[i] = a[k]; i++; 
        } 
    }
    else {
         for (k = h; k <= mid; k++) {
              b[i] = a[k]; i++; 
            } 
        }
    for (k = 0; k <= high - low; k++) {
        a[k + low] = b[k]
    };
    return a;
}

//Функция сортировки слиянияем.
function MergeSort(A) {
    function merge_sort(a, low, high) {
        if (low < high) {
            var mid = Math.floor((low + high) / 2);
            merge_sort(a, low, mid);
            merge_sort(a, mid + 1, high);
            Merge(a, low, mid, high);
        }
    }
    var n = A.length;
    merge_sort(A, 0, n - 1);
    return A;
}
let arr = [41, 10, 1100, 11, 50, 86, 5000, 98, 65, 190, 1200, 3000];
let res = MergeSort(arr);
console.log(res);
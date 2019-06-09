//Пирамидальная сортировка на JavaScript

function HeapSort(A) {
    if (A.length == 0) return [];
    var n = A.length, i = Math.floor(n / 2), j, k, t;
    while (true) {
        if (i > 0) t = A[--i];
        else {
            n--;
            if (n == 0) return A;
            t = A[n]; A[n] = A[0];
        }
        j = i; k = j * 2 + 1;
        while (k < n) {
            if (k + 1 < n && A[k + 1] > A[k]) k++;
            if (A[k] > t) {
                A[j] = A[k];
                j = k; k = j * 2 + 1;
            }
            else break;
        }
        A[j] = t;
    }
}
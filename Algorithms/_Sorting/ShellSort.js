//Сортировка Шелла на JavaScript

function ShellSort(A) {
    var n = A.length, i = Math.floor(n / 2);
    while (i > 0) {
        for (var j = 0; j < n; j++) {
            var k = j, t = A[j];
            while (k >= i && A[k - i] > t) { A[k] = A[k - i]; k -= i; }
            A[k] = t;
        }
        i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return A;
}
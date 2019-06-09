// Суть алгоритма пузырьковой сортировки состоит в сравнении соседних элементов
//  и их обмене, если они находятся не в надлежащем порядке.

function BubbleSort(A) {         // A - массив, который нужн                         
    var n = A.length;           // отсортировать по возрастанию.
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (A[j + 1] < A[j]) {
                var t = A[j + 1];
                A[j + 1] = A[j];
                A[j] = t;
            }
        }
    }
    return A;    // На выходе сортированный по возрастанию массив A.
};

const Arr = [23, 23, 34, 55, 67, 87, 2, 34, 1, 14, 73];
console.log(BubbleSort(Arr));
// Сортировка выбором на JavaScript

// Сортировка выбором начинается с поиска наименьшего элемента в списке и
// обмена его с первым элементом(таким образом, наименьший элемент помещается
//      в окончательную позицию в отсортированном массиве).Затем мы сканируем массив,
//     начиная со второго элемента, в поисках наименьшего среди оставшихся
// n - 1 элементов и обмениваем найденный наименьший элемент со вторым,
//     т.е.помещаем второй наименьший элемент в окончательную позицию в
// отсортированном массиве.В общем случае, при i - ом проходе по списку
//     (0\leqslant i\leqslant n - 2) алгоритм ищет наименьший элемент среди
// последних n - i элементов и обменивает его с A[i].После выполнения
// n - 1 проходов список оказывается отсортирован.

function SelectionSort(A)       // A - массив, который нужно
{                               // отсортировать по возрастанию.
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (A[j] < A[min]) min = j; } 
       var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
     }                    
    return A;    // На выходе сортированный по возрастанию массив A.
}
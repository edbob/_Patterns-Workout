//Сортировка подсчётом
function SimpleCountingSort(A)
{   
    var n = A.length, Count = [], B = [];
    for (var i = 0; i < n; i++) Count[ i ] = 0;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] < A[j]) Count[j]++;
          else Count[ i ]++;
        }
     }
    for (var i = 0; i < n; i++) B[Count[ i ]] = A[ i ];
    return B;
}
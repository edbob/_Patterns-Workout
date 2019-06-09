// Не углубляйтесь сильно в алгоритмы. Вас никогда не попросят написать суффиксное дерево,
// сбалансированное дерево или даже самый короткий алгоритм Дейкстры. 
// Вам необходимо знать следующие алгоритмы: сортировка (быстрая, слиянием, подсчет),
// бинарное дерево, DFS, BFS, DSU, очереди, кучи, связные списки, KMP, алгоритм Рабина-Карпа.
// Полезно понимать, какие операции они позволяют выполнить, 
// и какие есть сложности реализации этих операций.

let items = [4, 2, 6, 5, 3, 9];

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call
let result = quickSort(items);
console.log(items)
// Description:
// Your task is to make a function that can take any non-negative 
// integer as a argument and return it with its digits in descending
//  order. Essentially, rearrange the digits to create the highest
//   possible number.
function descendingOrder(n) {
    n = n.toString();
    let arr = n.split('');
    let N = arr.length;

    if (n.length === 1) {
        return parseInt(n, 10);
    }

    for (let i = 0; i < N; i++) {

        for (let j = 0; j < N - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k;
            }
        }
    }

    n = arr.join('');
    console.log(n)
    n = parseInt(n, 10);
    return n;
};

descendingOrder(123456789);

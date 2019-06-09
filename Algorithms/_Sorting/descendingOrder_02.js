function descendingOrder(n) {
    let arr = n.toString().split('');
    arr.sort(sDecrease);
    n = arr.join('');
    console.log(n);

    function sDecrease(i, ii) {
        if (i > ii) {
            return -1;
        } else if (i < ii) {
            return 1;
        } else {
            return 0;
        };
    };
};

descendingOrder(2323345567872341);

//123456789, => 987654321
function iqTest(numbers) {
    let arr = numbers.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(i+1);
        }
    }
}

iqTest("34 32 44 47 43 77 98"); 
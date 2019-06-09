
function factorial(x) {
  if (x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
};

let sum = 120;
let f = factorial(sum);
console.log(sum + "! = " + f.toFixed());

//=> 6 5 4 3 2 1
//=> 6*5 30*4 120*3 360*2 720*1 = 720!

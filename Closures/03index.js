let str = "Main";
function mekFunc() {
    let str = "HELLO WORLD";
    function disolStr() {
        console.log(str);
    }
    return disolStr;
}
var myFunc = mekFunc();
myFunc();
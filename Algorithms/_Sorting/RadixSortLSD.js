//LSD sort
var counter = [[]];
function sortLSD(array, maxDigitSymbols) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigitSymbols; i++, dev *= 10, mod *= 10) {
        for (var j = 0; j < array.length; j++) {
            var bucket = parseInt((array[j] % mod) / dev);
            if (counter[bucket] == null ) {
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]);
        }
        var pos = 0;
        for (var j = 0; j < counter.length; j++) {
            var value = null ;
            if (counter[j] != null ) {
                while ((value = counter[j].shift()) != null ) {
                    array[pos++] = value;
                }
            }
        }
    }
    return array;
}
var test = [22, 1,2,9,3,2,5,14,66];
console.log(sortLSD(test, 2));
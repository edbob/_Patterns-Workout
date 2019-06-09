let list = [1, 2, 3, 4, 5];
function forEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
        callback(list[i], list[i]);
    }
};

forEach(list, function (item, index) {
    console.log(index + ": " + item);
});
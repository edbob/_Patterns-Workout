//Ассоциативные массивы. Массив объектов
//Сортировка массива чисел по возрастанию

// list.sort(function(a, b){
//     return a.donationValue - b.donationValue;
// });

//Сортировка по алфавиту
// list.sort(function(a, b){
//     let nameA = a.name.toLowerCase();
//     let nameB = b.name.toLowerCase();
//     if(nameA < nameB){
//         return -1;
//     }
//     if(nameA > nameB){
//         return 1;
//     }
//     return 0;
// });

const list = [
    { name: 'foo', donationValue: 10 },
    { name: 'bar', donationValue: 20 },
    { name: 'foo', donationValue: 40 },
    { name: 'baz', donationValue: 30 },
    { name: 'foo', donationValue: 5 },
    { name: 'foo', donationValue: 70 },
    { name: 'bar', donationValue: 40 },
    { name: 'Adar', donationValue: 13 },
    { name: 'foo', donationValue: 5 },
];

//Сортировка по количеству совподений
function coincidence(obj) {
    const counts = {};
    const res = [];

    for (let i in obj) {
        counts[obj[i].name] = (counts[obj[i].name] || 0) + obj[i].donationValue;
    };

    Object.keys(counts).sort(function (a, b) {
        return counts[b] - counts[a]
    }).forEach(function (el, idx, obj) {
        res.push([el, counts[el]]);
    });

    function sortByName(mas) {
        //Проверка параметра на массив
        if (mas instanceof Object) {
            var sortedData = mas.sort(func)
            return sortedData;
        } else console.log('Error');
        function func(a, b) {
            return a.name.toUpperCase() > b.name.toUpperCase();
        };
    };
    console.log(sortByName(list));

};

coincidence(list);
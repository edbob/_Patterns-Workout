/*
Функция-конструктор персоны
* @{string} name - имя
* @{number} age - возраст
*/
function Human(name, age) {
    this.name = name;
    this.age = age;
};
var Ken = new Human('Ken', 28);
var Pol = new Human('Pol', 22);
var Maria = new Human('maria', 74);
var July = new Human('july', 25);
var Bill = new Human('Bill', 36);
var Deny = new Human('Deny', 89);
//массив всех персон
var peoples = [Ken, Pol, July, Deny, Bill, Maria];
/*
 Функция сортировки по возрасту
 * @{object} mas - массив персон
*/
function sortByAge(mas) {
    //Проверка параметра на массив
    if (mas instanceof Array) {
        var sortedData = mas.sort(func)
        return sortedData;
    } else Print('Error');

    function func(a, b) {
        return a.age - b.age;
    };
};
/*
 * Функция сортировки по имени
 * @{object} mas - массив персон
*/
function sortByName(mas) {
    //Проверка параметра на массив
    if (mas instanceof Array) {
        var sortedData = mas.sort(func)
        return sortedData;
    } else Print('Error');
    function func(a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase();
    };
};
/*
  * Функция рендера данных
  * @{object} mas - массив объектов
  * @{string} key - item объекта
*/

function render(mas, item){
    mas.forEach((el, i) => Print(el.name, el[item]));
};

function Print(...id){
    //arguments
    return console.log(id);
};

//render(sortByName(peoples), 'name');
render(sortByAge(peoples), 'age');

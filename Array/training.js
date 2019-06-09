//Поиск значения массива данных по ключевому слову
var arr = [ 
    { key: 'слово', value: 'значение1' },
    { key: 'слово2', value: 'значение2' },
    { key: 'слово3', value: 'значение3' }
 ];

 function getValue(array, search) {
    var i = array.length;
    //Цикл будет обходить массив до тех пор пока не найдет совпадения!
    while (i--) {
        if (array[i].key === search) {
            return console.log(array[i].value);
        }
    }
  }
  getValue(arr, 'слово3');
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    return arr.slice()
}

var arr1 = arrayClone(vegetables);

console.log(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
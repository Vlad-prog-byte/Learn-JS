// Напишите функцию removeDuplicates(arr), которая возвращает массив,
//  в котором удалены повторяющиеся элементы из массива arr

var arr = ["Php", "php", "css", "css",
  "script", "script", "html", "html", "java"
];

function removeDuplicates(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(obj);
}

console.log(removeDuplicates(arr));
// ЗАДАНИЕ 2
// Создайте двумерный массив, в котором найдите минимальный элемент среди всех элементов в массиве. Важно учесть, что нахождение минимального элемента должно производиться при помощи циклов.
var x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
// - - - - - - - - - - - - - - - СПИСОК ЧИСЕЛ ИЗ МАССИВА - - - - - - - - 
let list = []
x.forEach(function(item) {
    item.forEach(function(item){
        list.push(item)
    });
});
console.log("Массив чисел для поиска минимального и максимального значения: " + list)


// - - - - - - - - - - - - - - - ВАРИАНТ 1 - - - - - - - - - - - - - - - 
var min = x[0][0]
var max = min
x.forEach(function(item) {
    item.forEach(function(item){
        (min > item)? min = item: min = min;
        (max < item)? max = item: max = max;
    });
});
console.log("> ВАРИАНТ с FOREACH:")
console.log("Минимальное значение: " + min)
console.log("Максимальное значение: " + max)


// - - - - - - - - - - - - - - - ВАРИАНТ 2 - - - - - - - - - - - - - - - 
var min = x[0][0]
var max = min
for (let i = 0; i < x.length; i++)
    for (let j = 0; j < x[i].length; j++){
        if (min > x[i][j])
            min = x[i][j];
        if (max < x[i][j])
            max = x[i][j];}
console.log("> ВАРИАНТ с FOR: - - - - - - - ")
console.log("Минимальное значение: " + min)
console.log("Максимальное значение: " + max)

// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать. Нам нужна функция, которая подсчитывает количество овец в массиве (истина означает наличие).
// Например,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильный ответ был бы 17.

// Подсказка: не забудьте проверить наличие некорректных значений, таких как null/undefined

function countSheeps(sheep) {
    let sum = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            sum++;
        }
    }
    return sum;
}

console.log(countSheeps([true, true, false, undefined]));

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }

// function countSheeps(arr) {
//     return arr.filter(Boolean).length;
//   }

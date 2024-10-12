// Я новичок в программировании, и теперь я хочу получить сумму двух массивов... Фактически сумму всех их элементов. Я буду признателен за вашу помощь.

// P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числами.

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    const arr3 = arr1.concat(arr2);
    for (let i = 0; i < arr3.length; i++) {
        sum += arr3[i];
    }
    return sum;
}

console.log(arrayPlusArray([1, 5, 4], [6, 8, 9]));

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//   }

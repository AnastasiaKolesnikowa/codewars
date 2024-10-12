// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// Учитывая, что [34, 15, 88, 2] ваше решение вернет 2
// Учитывая, что [34, -345, -1, 100] ваше решение вернет -345
// Для целей этого ката можно предположить, что предоставленный массив не будет пустым.

// function findSmallestInt(arr) {

//     return 0
// }

function findSmallestInt(arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
        }
    }
    return num;
}

console.log(findSmallestInt([34, -345, -1, 100]));

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min.apply(null, args);
//     }
//   }

// Конец учебного года, решающий момент для вашего школьного отчета. Необходимо рассчитать средние значения. Все ученики приходят к вам и умоляют рассчитать их среднее значение для них. Легко! Вам просто нужно написать скрипт.
// Возвращает среднее значение данного массива, округленное в меньшую сторону до ближайшего целого числа.
// Массив никогда не будет пустым.

function getAverage(marks) {
    return Math.floor(
        marks.reduce((sum, current) => sum + current, 0) / marks.length
    );
}

// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }

// const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

// function getAverage(marks) {
//     let sum = 0;
//     let result = 0;
//     for (let i = 0; i < marks.length; i++) {
//         console.log(marks);
//         sum = marks.reduce((sum, current) => sum + current, 0);
//         result = sum / marks.length;
//         return result;
//     }
// }
console.log(getAverage([5, 4, 3, 2]));
// sum += marks[i];
// console.log(sum);

// const result = sum / marks.length;
// console.log(result);

// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните свой ответ в виде числа.

const array = [5, "6", 8, 9];

function sumMix(x) {
    const array = x.map(Number);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumMix(array));

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }

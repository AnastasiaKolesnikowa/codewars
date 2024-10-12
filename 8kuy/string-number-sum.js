// // function sumNumbers(number) {
// //     let numberStr = String(number);
// //     for (let numberStrNum of numberStr) {
// //         console.log(numberStrNum);
// //         let sumNumber = Number(numberStrNum);
// //         console.log(sumNumber);
// //     }
// // }

// function sumNumbers(number) {
//     let numberStr = String(number);
//     let result = 0;
//     for (let numberStrNum of numberStr) {
//         result += Number(numberStrNum);
//     }
// }
// // const result = sumNumberss(12346);
// // console.log(result);

// console.log(sumNumbers(1)); // 1
// console.log(sumNumbers(123)); // 6    1 + 2 + 3 = 6
// console.log(sumNumbers(12346)); // 7  1 + 2 + 3 + 4 + 6 = 16
// console.log(sumNumbers(1359)); // 9   1 + 3 + 5 + 9 = 18

function sumNumbers(number) {
    let numberToString = String(number);
    let result = 0;

    for (let numberStrToNumber of numberToString) {
        result += Number(numberStrToNumber);
    }
    let resultIndex = String(result);
    let sumResult = 0;
    for (let index of resultIndex) {
        sumResult = sumResult + Number(index);
    }
    return sumResult;

    // if (number < 10) {
    //     return number;
    // }

    // let numberToString = String(number);
    // let result = 0;

    // for (let numberStrToNumber of numberToString) {
    //     result += Number(numberStrToNumber);
    // }

    // return sumNumbers(result);
}

console.log(sumNumbers(1)); // 1
console.log(sumNumbers(123)); // 6    1 + 2 + 3 = 6
console.log(sumNumbers(12346)); // 7  1 + 2 + 3 + 4 + 6 = 16   1 + 6 = 7
console.log(sumNumbers(1359)); // 9   1 + 3 + 5 + 9 = 18    1 + 8 = 9

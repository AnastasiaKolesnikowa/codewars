// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает "Even" для четных чисел или "Odd" для нечетных чисел.

function evenOrOdd(number) {
    if (number % 2 != 0) {
        return "Odd";
    }
    return "Even";
}

console.log(evenOrOdd(5));

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
//   }

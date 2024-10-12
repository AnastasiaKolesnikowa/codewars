// В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, возможно, число уже отрицательное?
// Примеры
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Примечания
// Число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо определенного знака. Отрицательные нули не имеют математического смысла.

function makeNegative(num) {
    if (num < 0) {
        return num;
    } else return -Math.abs(num);
}

console.log(makeNegative(5));
console.log(makeNegative(-4));
console.log(makeNegative(6));
console.log(makeNegative(-32));

// function makeNegative(num) {
//     return -Math.abs(num);
//   }

// function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }

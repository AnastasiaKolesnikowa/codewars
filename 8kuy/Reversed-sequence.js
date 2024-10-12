// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

// Пример : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
    let arrray = [];
    for (let index = 0; index < n; index++) {
        arrray.push(n - index);
    }
    return arrray;
};

console.log(reverseSeq(7));

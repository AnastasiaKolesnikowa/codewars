// Вам будет предложено слово. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.

// #Примеры:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Ввод

// Слово (строка) длиной 0 < str < 1000 (в JavaScript в некоторых тестовых случаях вы можете получить чуть больше 1000 из-за ошибки в тестовых случаях). Вам не нужно проверять это. Это сделано только для того, чтобы вы знали, что вам не нужно беспокоиться о том, что ваше решение не сработает вовремя.

// #Вывод

// Средние символы слова, представленные в виде строки.

// function getMiddle(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, 2 - (s.length % 2));
// }

// function getMiddle(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, 2 - (s.length % 2));
// }
// console.log(getMiddle("bxvb"));

// let str = "stroka";
// console.log(str.length / 2 - 1);

// Math.ceil;

function getMiddle(s) {
    const split = s.split("");
    let mid = Math.round(split.length / 2);
    if (split.length % 2 == 0) {
        return split[mid - 1] + split[mid];
    }
    return split[mid - 1];
}

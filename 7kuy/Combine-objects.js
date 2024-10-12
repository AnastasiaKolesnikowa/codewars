// Ваша задача - написать функцию, которая принимает два или более объекта и возвращает новый объект, объединяющий все входные объекты.
// Все входные свойства объекта будут иметь только числовые значения. Объекты объединяются таким образом, что значения совпадающих ключей суммируются.
// Пример:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция объединения должна быть добросовестным пользователем, поэтому не должна изменять входные объекты.

function combine(...rest) {
    const result = {};

    for (let i = 0; i < rest.length; i++) {
        const el = rest[i];
        console.log(el);
        for (const key in el) {
            const valueB = el[key];
            if (result[key]) {
                result[key] += valueB;
            } else {
                result[key] = valueB;
            }
        }
    }
    return result;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

// console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }
// console.log(combine(objA, objC)); // Returns { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine(objA, objB, objC)); // Returns { a: 15, b: 20, c: 30, d: 11, e: 8 }

// function combine() {
//     var obj = {};

//     for (var i = 0; i < arguments.length; i++) {
//         for (var key in arguments[i]) {
//             obj[key] = obj[key]
//                 ? obj[key] + arguments[i][key]
//                 : arguments[i][key];
//         }
//     }

//     return obj;
// }

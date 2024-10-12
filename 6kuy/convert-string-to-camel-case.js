// Полный метод/функция так, что он преобразует тире/подчеркнуть запятыми слова в верблюжий корпус. Первое слово в окне вывода должно быть с большой буквы Только если исходное слово было написано с заглавной буквы (известной как верхний регистр Camel, также часто называемый регистром Pascal). Следующие слова всегда должны быть написаны с заглавной буквы.

// Примеры
// "the-stealth-warrior" преобразуется в "theStealthWarrior"

// "The_Stealth_Warrior" преобразуется в "TheStealthWarrior"

// "The_Stealth-Warrior" преобразуется в "TheStealthWarrior"

// function toCamelCase(str) {
//     return str
//         .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
//             return index === 0 ? word.toLowerCase() : word.toUpperCase();
//         })
//         .replace(/[^a-zA-Z]/g, "", /\s/g, "", /[0-9]/g, "");
// }
// console.log(toCamelCase("The-Stealth-Warrior"));
// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

function toCamelCase(str) {
    const result = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (el === "-" || el === "_") {
            result.push(str.slice(count, i));

            count = i + 1;
        } else if (i === str.length - 1) {
            result.push(str.slice(count, i + 1));
        }
    }
    return result
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));

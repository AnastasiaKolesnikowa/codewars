// Ваша задача - добавить новое свойство usersAnswer к каждому объекту в массиве questions. Значение usersAnswer должно быть установлено равным null. Решение должно работать для массива любой длины.

// Например:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// После добавления свойства результат должен быть:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// questions Массив уже определен для вас и отличается от приведенного в примере.

var questions = [
    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
        corAnswer: 0,
    },
];

questions.forEach((x) => (x.usersAnswer = null));

console.log(questions);

// questions.forEach(x => x.usersAnswer = null);

// for (key in questions)
//     questions[key].usersAnswer = null;

// questions.forEach(function (i) {
//     i.usersAnswer = null;
// });

// В javascript Object является одним из базовых типов данных. Определить объект можно с помощью var obj=new Object() или var obj={}
// Вы можете определить атрибуты объекта во время инициализации, вот так:
// var animal={name:"dog"}
// вы также можете установить / получить некоторые свойства после определения объекта, например:
// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// Задача
// Предоставляю вам функцию animal, принимаю 1 параметр:obj вот так:
// {name:"dog",legs:4,color:"white"}
// и возвращает строку, подобную этой:
// "This white dog has 4 legs."
// Когда вы закончите работу, нажмите "Запустить тесты", чтобы убедиться, что ваш код работает должным образом.
// В конце нажмите "Отправить", чтобы отправить свой код для прохождения этого ката.

function animal(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}

console.log(
    animal({
        name: "dog",
        legs: 4,
        color: "white",
    })
);

// return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность присвоить свойству новое значение. Если свойство уже существует у объекта, должно быть выдано сообщение об ошибке.

// function addProperty(obj, prop, value) {
//     if (obj.hasOwnProperty(prop)) {
//         throw new Error("error");
//     } else {
//         obj[prop] = value;
//     }
// }

function addProperty(obj, prop, value) {
    if (prop in obj) throw new Error();
    obj[prop] = value;
}

// function addProperty(obj, prop, value) {
//     if (obj.hasOwnProperty(prop)) throw "Error: Property already present";

//     obj[prop] = value;
// }

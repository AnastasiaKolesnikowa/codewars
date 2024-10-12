// Функция перемещения в терминальной игре
// В этой игре герой перемещается слева направо. Игрок бросает кости и перемещается на количество пробелов, указанное кубиками, два раза.

// Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

function move(position, roll) {
    let newposition = position + roll * 2;
    return newposition;
}

console.log(move(3, 6));

// const move = (position, roll) => position + roll * 2

// function move (position, roll) {
//     return position + roll * 2
//   }

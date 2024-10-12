// Создайте боевую функцию, которая забирает текущее здоровье игрока и количество получаемого урона, а также возвращает игроку новое здоровье. Здоровье не может быть меньше 0.

function combat(health, damage) {
    let newhealth = health - damage;
    if (newhealth < 0) {
        return (newhealth = 0);
    } else return newhealth;
}

const newhealth = combat(50, 20);
console.log(newhealth);

// function combat(health, damage) {
// 	return health < damage ? 0 : health - damage
// }

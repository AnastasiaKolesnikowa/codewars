// У вас есть приложение для группового чата, но кто онлайн!?
// Вы хотите показать своим пользователям, кто из их друзей онлайн и доступен для общения!
// Учитывая ввод массива объектов, содержащих имена пользователей, статус и время с момента последнего действия (в минутах), создайте функцию, которая определит, кто является online, offline и away.
// Если кто-то есть, online но его lastActivity не было более 10 минут назад, он должен быть рассмотрен away.
// Входные данные имеют следующую структуру:
const friends = [
    {
        username: "David",
        status: "online",
        lastActivity: 10,
    },
    {
        username: "Lucy",
        status: "offline",
        lastActivity: 22,
    },
    {
        username: "Bob",
        status: "online",
        lastActivity: 104,
    },
];
// Соответствующий результат должен выглядеть следующим образом:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если, например, пользователей нет online результат должен выглядеть следующим образом:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// имя пользователя всегда будет a string, статус всегда будет либо 'online', либо 'offline' (перечисление UserStatus в C #), а LastActivity всегда будет number >= 0.

// Наконец, если в вашем чате нет друзей, вводом будет пустой массив []. В этом случае вы должны вернуть пустой объект {} (пустой словарь в C#).

// const whosOnline = (friends) => {
//     for (let key in friends) {
//         if (friends[key] === "online" && friends[key] <= 10) {
//             return "online:" + " friends[username]";
//         }
//         if (friends[key] === "online" && friends[key] > 10) {
//             return "away:" + " friends[username]";
//         }
//     }
//     return "offline:" + " friends[username]";
// };

const whosOnline = (friends) => {
    let output = {};
    friends.forEach((e) => {
        let status = e.status;
        if (status === "online" && e.lastActivity > 10) status = "away";
        if (output[status]) {
            output[status].push(e.username);
        } else {
            output[status] = [e.username];
        }
    });
    return output;
};

// const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
//     const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
//     a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
//     return a;
//   }, {})

//   const whosOnline = (friends) => {
//     return friends.reduce((a,c) => {
//       let status = c.status
//       if(c.lastActivity > 10 && status == 'online') status = 'away'
//       a[status] ? a[status].push(c.username) : a[status] = [c.username]
//       return a
//     },{})
//   }

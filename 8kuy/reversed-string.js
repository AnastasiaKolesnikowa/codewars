// Завершите решение так, чтобы оно обращало переданную в него строку вспять.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str.split("").reverse().join("");
}

console.log(solution("world"));

// const solution = s => [...s].reverse().join('')

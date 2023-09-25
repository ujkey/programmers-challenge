const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]), Number(input[1]))
});

function solution(a, b) {
    console.log(`${a} + ${b} = ${a+b}`)
}
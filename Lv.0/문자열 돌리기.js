const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    solution(input[0]);
});

function solution(str) {
    [...str].map((v) => {
        console.log(v);
    })
}
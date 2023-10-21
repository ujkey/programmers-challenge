// 채점 결과
// 정확성: 63.6
// 합계: 63.6 / 100.0
// function solution(arr) {
//     const pow = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512];
//
//     if(pow.indexOf(arr.length) == -1) {
//         const max = pow.filter((v) => v > arr.length)[0];
//         return [...arr, ...Array(max-arr.length).fill(0)];
//     } else {
//         return arr;
//     }
// }

function solution(arr) {
    let answer = arr;
    let i = 0;

    while(1) {
        if (answer.length === 2**i) break;
        if (answer.length > 2**i) {
            i++;
        } else {
            const diff = (2**i) - answer.length;
            answer = [...arr, ...Array(diff).fill(0)];
        }
    }
    return answer;
}


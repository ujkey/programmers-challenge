/*
    1. Array.prototype.every(callbackFn)
        - 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
*/

function solution(arr) {
    /*
        var answer = [];
        arr.map((_, i) => arr.map((_, j) => {
           answer.push(arr[i][j] != arr[j][i] ? 0 : 1);
        }));

        return answer.includes(0) ? 0 : 1;
    */

    var answer = 0;
    answer = arr.every((r, i) => {
        r.every((_, j) => arr[i][j] === arr[j][i])
    }) ? 1 : 0;

    return answer;
}
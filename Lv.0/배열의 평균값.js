/*
    1. Array.prototype.reduce()
        - 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
        - accumulator(누산기) / urrentValue(현재값) / initialValue(초기값)
        - const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
*/

function solution(numbers) {
    var answer = 0;

    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    answer = sum / numbers.length;

    return answer;
}